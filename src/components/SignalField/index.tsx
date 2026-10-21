import React, { useEffect, useRef, type JSX } from "react";
import { useMotionTier } from "@site/src/components/MotionTier";
import styles from "./styles.module.css";

export type SignalFieldProps = {
  /** "hero": animated, pointer-reactive. "settled": rendered once, ordered. */
  variant: "hero" | "settled";
  className?: string;
};

/**
 * The release-line tick field (canvas 2D). The server renders only an empty
 * aria-hidden container, so there is nothing to mismatch on hydration. The
 * engine (./field) is a separate chunk, started after first paint.
 *
 * Hooks for the hosting section (all optional, read by the engine):
 * - `data-field-host` on an ancestor: receives pointer events (default: the
 *   wrapper's parent).
 * - `data-field-quiet` on text blocks: ticks under them are attenuated.
 * - `data-field-anchor` on an element: the release line passes through its
 *   lower third. Add `data-field-rise` and it climbs after the element
 *   instead of dropping to the lower edge.
 * - `data-field-noline` on the host: no line; every tick points at the
 *   `data-field-quiet` block instead.
 * - CSS: set --field-tick / --field-line / --field-pilot / --field-ring on
 *   the parent to recolor. "settled" defaults to white ticks and line for a
 *   drenched green band.
 */
export default function SignalField({
  variant,
  className,
}: SignalFieldProps): JSX.Element {
  const tier = useMotionTier();
  const mode = variant === "settled" ? "settled" : tier;
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) {
      return;
    }
    let cancelled = false;
    let destroy: (() => void) | undefined;
    const boot = (): void => {
      void import("./field").then(({ createField }) => {
        if (!cancelled) {
          destroy = createField({ canvas, wrap, mode }).destroy;
        }
      }).catch(() => {
        /* Chunk failed to load: the canvas stays transparent; nothing depends on it. */
      });
    };

    let idleId = 0;
    let timerId = 0;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(boot, { timeout: 1500 });
    } else {
      timerId = window.setTimeout(boot, 150);
    }
    return () => {
      cancelled = true;
      if (idleId) {
        window.cancelIdleCallback(idleId);
      }
      window.clearTimeout(timerId);
      destroy?.();
      delete canvas.dataset.ready;
    };
  }, [mode]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      data-variant={variant}
      className={`${styles.field} ${className ?? ""}`}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
