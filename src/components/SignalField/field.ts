/**
 * SignalField engine: a field of 1px ticks that starts as noise and aligns
 * into one release line, led by a single pilot dot. Canvas 2D, no libraries.
 *
 * Loaded lazily by ./index.tsx (dynamic import), so none of this is in the
 * page's first-paint bundle.
 *
 * Modes (see MotionTier):
 * - "full":    disorder dwell -> sweep -> settle, pointer disturbs ticks.
 * - "touch":   the same sweep once, then frozen. No pointer.
 * - "reduced": one static, finished frame. No rAF.
 * - "settled": one static, finished frame (used behind the closing CTA).
 *
 * Layout hooks read from the DOM, so the field adapts to the section that
 * hosts it without any props:
 * - `[data-field-host]` ancestor (else the wrapper's parent) receives pointer
 *   events and is searched for the hooks below.
 * - `[data-field-quiet]` descendants: ticks under them are attenuated so
 *   text keeps its contrast.
 * - `[data-field-anchor]` descendant: the release line passes through its
 *   lower third (the portrait tile on the hero). Add `data-field-rise` to it
 *   and the line climbs after the anchor instead of dropping to the lower
 *   edge (the hero's: it rises toward the top right, past the portrait).
 * - `data-field-noline` on the host: no release line at all. Every tick points
 *   toward the centre of the `[data-field-quiet]` block (else the centre of
 *   the field), and none are cleared or lifted (the closing CTA's: an even
 *   ground that converges on the one action).
 *
 * Colors come from CSS custom properties on the canvas (see styles.module.css):
 * --sf-tick, --sf-line, --sf-pilot, --sf-ring, --sf-gain. A parent overrides
 * them with --field-tick / --field-line / --field-pilot / --field-ring.
 */

export type FieldMode = "full" | "touch" | "reduced" | "settled";

export type FieldOptions = {
  canvas: HTMLCanvasElement;
  wrap: HTMLElement;
  mode: FieldMode;
};

export type FieldHandle = { destroy: () => void };

const PI = Math.PI;
const TAU = Math.PI * 2;

/* Grid */
const MAX_CELLS = 4000;
const MIN_SPACING = 13;
const MAX_SPACING = 24;

/* Timeline (seconds) */
const DWELL = 0.55; // disorder shown before the release starts
const SWEEP = 1.8; // pilot crosses the field; ticks align right behind it
const ORDER_DUR = 0.65; // one tick turning into line
const FAR_LAG = 0.36; // ticks far from the line follow a beat later
const PILOT_PAD = 14; // px the pilot travels beyond each edge

/* Ordered state */
const MAX_TILT = 0.62; // rad; ticks lean toward the line this much, far away
const TILT_REACH = 260; // px over which the lean builds
const NEAR_REACH = 104; // px: brightening around the line
const LINE_WIDTH = 2; // same stroke as the proof spine
const PILOT_R = 10; // 1.25rem pilot dot
const PILOT_RING = 3;

/* Alpha model */
const BASE_ALPHA = 0.34;
const ORDER_LIFT = 0.04;
const NEAR_LIFT = 0.6;
const TAIL_LIFT = 0.4;
const BUCKETS = 10;

/* Text calm */
const QUIET_MIN = 0.38;
const QUIET_PAD = 10;
const QUIET_FEATHER = 40;

/* Pointer */
const POINTER_R = 120;
const POINTER_IDLE_MS = 900;

function clamp01(n: number): number {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}

function smooth(t: number): number {
  const c = clamp01(t);
  return c * c * (3 - 2 * c);
}

/** Shortest-path lerp for undirected (mod PI) angles. */
function lerpAngle(a: number, b: number, t: number): number {
  let d = b - a;
  d -= PI * Math.round(d / PI);
  return a + d * t;
}

/** Deterministic per-cell randomness, so a resize never reshuffles the field. */
function hash(i: number, k: number): number {
  let x = (Math.imul(i, 374761393) + Math.imul(k, 668265263)) | 0;
  x = Math.imul(x ^ (x >>> 13), 1274126177);
  return ((x ^ (x >>> 16)) >>> 0) / 4294967296;
}

export function createField({ canvas, wrap, mode }: FieldOptions): FieldHandle {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { destroy: () => undefined };
  }
  const host =
    (wrap.closest("[data-field-host]") as HTMLElement | null) ??
    wrap.parentElement ??
    wrap;
  const animates = mode === "full" || mode === "touch";
  const pointerOn = mode === "full";

  /* Colors (re-read on theme change) */
  let tick = "#2e8555";
  let lineColor = "#2e8555";
  let pilotColor = "#2e8555";
  let ringColor = "#fff";
  let gain = 1;
  /* Ticks only (the line keeps `gain`): lets a host quiet the ground so one stroke dominates. */
  let tickGain = 1;

  /* Geometry */
  let W = 0;
  let H = 0;
  let dpr = 1;
  let count = 0;
  let spacing = 16;
  let cx = new Float32Array(0);
  let cy = new Float32Array(0);
  let oa = new Float32Array(0); // ordered angle
  let prox = new Float32Array(0); // 0..1 closeness to the line
  let delay = new Float32Array(0); // seconds before the tick starts aligning
  let phase = new Float32Array(0);
  let quiet = new Float32Array(0);
  let skip = new Uint8Array(0);
  let chaos = new Float32Array(0);
  let lineX = new Float32Array(0);
  let lineY = new Float32Array(0);
  let y0 = 0;
  let ya = 0;
  let yE = 0;
  let xa = 0;
  /** False when the host opts out with `data-field-noline`. */
  let showLine = true;

  /* State */
  let clock = 0; // seconds of unpaused time
  let animDone = !animates;
  let raf = 0;
  let lastNow = 0;
  let visible = true;
  let disposed = false;
  let anyChaos = false;
  const ptr = { in: false, cx: 0, cy: 0, lx: 0, ly: 0, t: 0 };
  /** A resting pointer stops disturbing after a beat, so the loop can idle. */
  const pointerActive = (): boolean =>
    ptr.in && performance.now() - ptr.t < POINTER_IDLE_MS;

  const cosEase = (t: number): number => (1 - Math.cos(PI * clamp01(t))) / 2;

  function lineYAt(x: number): number {
    if (x <= xa) {
      return y0 + (ya - y0) * cosEase(xa > 0 ? x / xa : 1);
    }
    return ya + (yE - ya) * cosEase(W > xa ? (x - xa) / (W - xa) : 1);
  }

  function readColors(): void {
    const cs = getComputedStyle(canvas);
    const pick = (name: string, fallback: string): string => {
      const v = cs.getPropertyValue(name).trim();
      return v || fallback;
    };
    tick = pick("--sf-tick", tick);
    lineColor = pick("--sf-line", lineColor);
    pilotColor = pick("--sf-pilot", pilotColor);
    ringColor = pick("--sf-ring", ringColor);
    const g = parseFloat(pick("--sf-gain", "1"));
    gain = Number.isFinite(g) ? g : 1;
    const tg = parseFloat(pick("--sf-tick-gain", "1"));
    tickGain = Number.isFinite(tg) ? tg : 1;
  }

  function layout(): void {
    const box = wrap.getBoundingClientRect();
    const w = Math.max(1, Math.round(box.width));
    const h = Math.max(1, Math.round(box.height));
    if (w < 8 || h < 8) {
      return;
    }
    W = w;
    H = h;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    /* Release line: flat, through the anchor's lower third, then down to the
       section's lower edge where the next band's hairline picks it up. With
       `data-field-rise` the second half is mirrored about the flat level, so
       it climbs by as much as it would have dropped. */
    const anchor = host.querySelector("[data-field-anchor]");
    showLine = !host.hasAttribute("data-field-noline");
    if (anchor) {
      const r = anchor.getBoundingClientRect();
      /* The bend starts left of the tile so the drop after it is a slope, not a knee. */
      xa = r.left - box.left - r.width * 0.3;
      ya = r.top - box.top + r.height * 0.82;
      y0 = ya + 10;
      yE = H - LINE_WIDTH / 2;
      if (anchor.hasAttribute("data-field-rise")) {
        yE = Math.max(LINE_WIDTH / 2 + 2, 2 * ya - yE);
      }
    } else {
      xa = W * 0.6;
      ya = H * 0.7;
      y0 = H * 0.78;
      yE = H * 0.62;
    }
    xa = Math.min(Math.max(xa, W * 0.2), W * 0.95);

    const step = 6;
    const n = Math.ceil(W / step) + 1;
    lineX = new Float32Array(n);
    lineY = new Float32Array(n);
    for (let k = 0; k < n; k++) {
      const x = Math.min(W, k * step);
      lineX[k] = x;
      lineY[k] = lineYAt(x);
    }

    /* Grid, staggered rows so it never reads as graph paper. */
    spacing = Math.min(
      MAX_SPACING,
      Math.max(MIN_SPACING, Math.sqrt((W * H) / MAX_CELLS)),
    );
    const cols = Math.ceil(W / spacing) + 1;
    const rows = Math.ceil(H / spacing) + 1;
    count = cols * rows;
    cx = new Float32Array(count);
    cy = new Float32Array(count);
    oa = new Float32Array(count);
    prox = new Float32Array(count);
    delay = new Float32Array(count);
    phase = new Float32Array(count);
    quiet = new Float32Array(count);
    skip = new Uint8Array(count);
    chaos = new Float32Array(count);

    const rects: Array<[number, number, number, number]> = [];
    host.querySelectorAll("[data-field-quiet]").forEach((el) => {
      const r = el.getBoundingClientRect();
      rects.push([
        r.left - box.left - QUIET_PAD,
        r.top - box.top - QUIET_PAD,
        r.right - box.left + QUIET_PAD,
        r.bottom - box.top + QUIET_PAD,
      ]);
    });

    /* Where ticks point when there is no line: the middle of the quiet
       (copy) block, else the middle of the field. */
    let tx = W / 2;
    let ty = H / 2;
    if (rects.length > 0) {
      let l = Infinity;
      let t = Infinity;
      let rr = -Infinity;
      let b = -Infinity;
      for (const q of rects) {
        l = Math.min(l, q[0]);
        t = Math.min(t, q[1]);
        rr = Math.max(rr, q[2]);
        b = Math.max(b, q[3]);
      }
      tx = (l + rr) / 2;
      ty = (t + b) / 2;
    }

    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++, i++) {
        const x = (c + (r & 1 ? 0.5 : 0)) * spacing;
        const y = r * spacing;
        cx[i] = x;
        cy[i] = y;
        const ly = lineYAt(x);
        const dy = y - ly;
        const dist = Math.abs(dy);
        if (showLine) {
          const slope = Math.atan2(lineYAt(x + 3) - lineYAt(x - 3), 6);
          const tilt = MAX_TILT * smooth(dist / TILT_REACH);
          oa[i] = slope + (dy < 0 ? tilt : -tilt);
          prox[i] = Math.exp(-(dist * dist) / (NEAR_REACH * NEAR_REACH));
          skip[i] = dist < LINE_WIDTH + 1.5 ? 1 : 0;
        } else {
          /* No line: point at the copy, and clear no row. */
          oa[i] = Math.atan2(ty - y, tx - x);
          prox[i] = 0;
          skip[i] = 0;
        }
        phase[i] = hash(i, 1);
        delay[i] =
          (SWEEP * (x + PILOT_PAD)) / (W + PILOT_PAD * 2) +
          FAR_LAG * Math.min(1, dist / 320) +
          0.1 * hash(i, 2);
        let q = 1;
        for (const [l, t, rr, b] of rects) {
          const dx = Math.max(l - x, 0, x - rr);
          const dyy = Math.max(t - y, 0, y - b);
          const d = Math.hypot(dx, dyy);
          q = Math.min(
            q,
            QUIET_MIN + (1 - QUIET_MIN) * smooth(d / QUIET_FEATHER),
          );
        }
        quiet[i] = q;
      }
    }
  }

  function updateChaos(dt: number): void {
    const active = pointerActive();
    if (active) {
      const r = canvas.getBoundingClientRect();
      ptr.lx = ptr.cx - r.left;
      ptr.ly = ptr.cy - r.top;
    }
    const attack = 1 - Math.exp(-16 * dt);
    const decay = 1 - Math.exp(-3 * dt);
    const r2 = POINTER_R * POINTER_R;
    let any = false;
    for (let i = 0; i < count; i++) {
      let c = chaos[i];
      let target = 0;
      if (active) {
        const dx = cx[i] - ptr.lx;
        const dy = cy[i] - ptr.ly;
        const d2 = dx * dx + dy * dy;
        if (d2 < r2) {
          target = smooth(1 - Math.sqrt(d2) / POINTER_R);
        }
      }
      if (target > c) {
        c += (target - c) * attack;
      } else if (c > 0) {
        c -= c * decay;
      }
      if (c < 0.004) {
        c = 0;
      } else {
        any = true;
      }
      chaos[i] = c;
    }
    anyChaos = any;
  }

  function render(): void {
    if (!ctx || count === 0) {
      return;
    }
    const s = animates && !animDone ? clock - DWELL : Infinity;
    const sweeping = s >= 0 && s <= SWEEP;
    const pilotX = sweeping
      ? -PILOT_PAD + (W + PILOT_PAD * 2) * (s / SWEEP)
      : null;
    const tailFade = s === Infinity ? 0 : 1 - smooth((s - SWEEP) / 0.65);
    const baseLen = spacing * 0.74;
    const buckets: Path2D[] = [];
    const used: boolean[] = [];
    for (let b = 0; b < BUCKETS; b++) {
      buckets.push(new Path2D());
      used.push(false);
    }

    for (let i = 0; i < count; i++) {
      if (skip[i] === 1) {
        continue;
      }
      const e = s === Infinity ? 1 : smooth((s - delay[i]) / ORDER_DUR);
      const c = chaos[i];
      let a = oa[i];
      if (e < 1) {
        const dis = phase[i] * PI + 1.0 * Math.sin(clock * 0.8 + phase[i] * TAU * 2.3);
        a = lerpAngle(dis, a, e);
      }
      if (c > 0) {
        const ring =
          Math.atan2(cy[i] - ptr.ly, cx[i] - ptr.lx) +
          PI / 2 +
          0.55 * Math.sin(clock * 9 + phase[i] * TAU * 5);
        a = lerpAngle(a, ring, Math.min(1, c * 1.25));
      }
      const p = prox[i];
      let alpha = BASE_ALPHA + ORDER_LIFT * e + NEAR_LIFT * p * e;
      if (pilotX !== null && p > 0.04) {
        const dx = pilotX - cx[i];
        if (dx > 0) {
          alpha += TAIL_LIFT * p * Math.exp(-dx / 110) * tailFade;
        }
      }
      alpha += 0.34 * c;
      alpha *= quiet[i] + (1 - quiet[i]) * 0.45 * c;
      alpha *= gain * tickGain;
      const bi = Math.min(BUCKETS, Math.round(alpha * BUCKETS)) - 1;
      if (bi < 0) {
        continue;
      }
      const half = (baseLen * (0.9 + 0.5 * p * e)) / 2;
      const dxh = Math.cos(a) * half;
      const dyh = Math.sin(a) * half;
      const path = buckets[bi];
      path.moveTo(cx[i] - dxh, cy[i] - dyh);
      path.lineTo(cx[i] + dxh, cy[i] + dyh);
      used[bi] = true;
    }

    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = "butt";
    ctx.lineWidth = 1;
    ctx.strokeStyle = tick;
    for (let b = 0; b < BUCKETS; b++) {
      if (used[b]) {
        ctx.globalAlpha = (b + 1) / BUCKETS;
        ctx.stroke(buckets[b]);
      }
    }

    /* The release line: solid behind the pilot (shipped), absent ahead of it. */
    const limit = s === Infinity ? W : sweeping ? (pilotX as number) : s > SWEEP ? W : -1;
    if (showLine && limit > 0) {
      ctx.globalAlpha = Math.min(1, 0.92 * gain + 0.08);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = LINE_WIDTH;
      ctx.beginPath();
      ctx.moveTo(lineX[0], lineY[0]);
      for (let k = 1; k < lineX.length; k++) {
        if (lineX[k] >= limit) {
          ctx.lineTo(limit, lineYAt(limit));
          break;
        }
        ctx.lineTo(lineX[k], lineY[k]);
      }
      ctx.stroke();
    }

    if (pilotX !== null) {
      const py = lineYAt(pilotX);
      ctx.globalAlpha = 1;
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.22)";
      ctx.shadowBlur = 6 * dpr;
      ctx.shadowOffsetY = 2 * dpr;
      ctx.fillStyle = ringColor;
      ctx.beginPath();
      ctx.arc(pilotX, py, PILOT_R, 0, TAU);
      ctx.fill();
      ctx.restore();
      ctx.fillStyle = pilotColor;
      ctx.beginPath();
      ctx.arc(pilotX, py, PILOT_R - PILOT_RING, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    canvas.dataset.ready = "true";
  }

  function needsLoop(): boolean {
    return (animates && !animDone) || anyChaos || pointerActive();
  }

  function frame(now: number): void {
    raf = 0;
    if (disposed) {
      return;
    }
    const dt = Math.min(0.05, Math.max(0, (now - lastNow) / 1000));
    lastNow = now;
    clock += dt;
    if (animates && !animDone && clock - DWELL > SWEEP + FAR_LAG + ORDER_DUR + 0.2) {
      animDone = true;
    }
    if (pointerOn) {
      updateChaos(dt);
    }
    render();
    if (needsLoop()) {
      schedule();
    }
  }

  function schedule(): void {
    if (raf || disposed || !visible || document.hidden) {
      return;
    }
    lastNow = performance.now();
    raf = requestAnimationFrame(frame);
  }

  /** One-off redraw (resize, theme, fonts) without running the loop. */
  function redraw(): void {
    if (disposed) {
      return;
    }
    if (needsLoop()) {
      schedule();
    }
    render();
  }

  /* Wiring */
  readColors();
  layout();
  if (!animates) {
    render();
  } else {
    schedule();
  }

  let layoutRaf = 0;
  const relayout = (): void => {
    if (layoutRaf || disposed) {
      return;
    }
    layoutRaf = requestAnimationFrame(() => {
      layoutRaf = 0;
      layout();
      redraw();
    });
  };

  const ro =
    typeof ResizeObserver !== "undefined" ? new ResizeObserver(relayout) : null;
  ro?.observe(wrap);
  if (host !== wrap) {
    ro?.observe(host);
  }

  const mo = new MutationObserver(() => {
    readColors();
    redraw();
  });
  mo.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  let io: IntersectionObserver | null = null;
  if (animates) {
    io = new IntersectionObserver((entries) => {
      visible = entries[entries.length - 1].isIntersecting;
      if (visible) {
        if (needsLoop()) {
          schedule();
        }
      } else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(wrap);
  }

  const onVisibility = (): void => {
    if (document.hidden) {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    } else if (needsLoop()) {
      schedule();
    }
  };
  if (animates) {
    document.addEventListener("visibilitychange", onVisibility);
  }

  const onMove = (e: PointerEvent): void => {
    if (e.pointerType === "touch") {
      return;
    }
    ptr.in = true;
    ptr.cx = e.clientX;
    ptr.cy = e.clientY;
    ptr.t = performance.now();
    schedule();
  };
  const onLeave = (): void => {
    ptr.in = false;
    schedule();
  };
  if (pointerOn) {
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
  }

  /* Text metrics settle after web fonts load; the quiet zones follow. */
  if (typeof document !== "undefined" && document.fonts?.ready) {
    void document.fonts.ready.then(relayout);
  }

  return {
    destroy: () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(layoutRaf);
      ro?.disconnect();
      mo.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    },
  };
}
