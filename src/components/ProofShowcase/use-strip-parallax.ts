import { useEffect, type RefObject } from "react";
import type { MotionTier } from "@site/src/components/MotionTier";

/** Keep in sync with the tilt media query in styles.module.css. */
const WIDE_QUERY = "(min-width: 997px)";

/**
 * Spring constants. The damping ratio is c / (2 * sqrt(k * m)) = 20 / 19.1,
 * about 1.05: just past critical, so the plate leans toward the pointer and
 * settles without overshooting. Above 1 the motion is a sum of two decaying
 * exponentials, which is what `advance` solves exactly. Keep the ratio above 1
 * if you retune these (below 1 the roots turn complex and this breaks).
 */
const STIFFNESS = 130;
const DAMPING = 20;
const MASS = 0.7;
/** Roots of m r^2 + c r + k = 0, both negative while the ratio is above 1. */
const ROOT_SPREAD = Math.sqrt(DAMPING * DAMPING - 4 * MASS * STIFFNESS);
const ROOT_A = (-DAMPING + ROOT_SPREAD) / (2 * MASS);
const ROOT_B = (-DAMPING - ROOT_SPREAD) / (2 * MASS);
/** Within both of these of the target, the spring is at rest. */
const REST_DISTANCE = 0.0005;
const REST_SPEED = 0.001;

type Axis = { pos: number; vel: number; target: number };

function clamp(n: number): number {
  return Math.min(1, Math.max(-1, n));
}

/**
 * Moves one axis forward by `dt` seconds along the exact spring solution, so
 * the result does not depend on the frame rate or on how late a frame arrives.
 */
function advance(axis: Axis, dt: number): void {
  const d = axis.pos - axis.target;
  const a = (axis.vel - ROOT_B * d) / (ROOT_A - ROOT_B);
  const b = d - a;
  const ea = Math.exp(ROOT_A * dt);
  const eb = Math.exp(ROOT_B * dt);
  axis.pos = axis.target + a * ea + b * eb;
  axis.vel = a * ROOT_A * ea + b * ROOT_B * eb;
}

function atRest(axis: Axis): boolean {
  return (
    Math.abs(axis.target - axis.pos) < REST_DISTANCE &&
    Math.abs(axis.vel) < REST_SPEED
  );
}

/**
 * Pointer parallax for the screenshot strip, motion tier "full" only.
 * Two springs (x, y in -1..1) feed --px / --py on the stage; CSS turns them
 * into the plate's lean and each frame's depth shift. Nothing runs at rest:
 * the rAF loop starts on pointer movement and stops once both springs settle.
 */
export default function useStripParallax(
  stageRef: RefObject<HTMLElement | null>,
  tier: MotionTier,
): void {
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || tier !== "full") {
      return;
    }

    const wide = window.matchMedia(WIDE_QUERY);
    const x: Axis = { pos: 0, vel: 0, target: 0 };
    const y: Axis = { pos: 0, vel: 0, target: 0 };
    let raf = 0;
    let last = 0;

    const write = (): void => {
      stage.style.setProperty("--px", x.pos.toFixed(3));
      stage.style.setProperty("--py", y.pos.toFixed(3));
    };

    const frame = (now: number): void => {
      const dt = Math.max(0, (now - last) / 1000);
      last = now;
      advance(x, dt);
      advance(y, dt);
      if (atRest(x) && atRest(y)) {
        x.pos = x.target;
        y.pos = y.target;
        x.vel = 0;
        y.vel = 0;
        raf = 0;
        write();
        return;
      }
      write();
      raf = window.requestAnimationFrame(frame);
    };

    const kick = (): void => {
      if (!raf) {
        last = performance.now();
        raf = window.requestAnimationFrame(frame);
      }
    };

    const move = (e: PointerEvent): void => {
      if (!wide.matches || e.pointerType === "touch") {
        return;
      }
      const r = stage.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) {
        return;
      }
      x.target = clamp(((e.clientX - r.left) / r.width) * 2 - 1);
      y.target = clamp(((e.clientY - r.top) / r.height) * 2 - 1);
      kick();
    };

    const rest = (): void => {
      x.target = 0;
      y.target = 0;
      kick();
    };

    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", rest);
    return () => {
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", rest);
      window.cancelAnimationFrame(raf);
      stage.style.removeProperty("--px");
      stage.style.removeProperty("--py");
    };
  }, [stageRef, tier]);
}
