import React, {
  useEffect,
  useState,
  type JSX,
  type RefObject,
} from "react";
import { useMotionTier } from "@site/src/components/MotionTier";
import styles from "./styles.module.css";

/*
 * The homepage's numeral count-up, shared. The homepage stats band and the
 * About page's numeral ledger both use it, so a numeral counts up the same
 * way wherever it appears: once, on first view, in the "full" and "touch"
 * motion tiers; the "reduced" tier and a group scrolled past at mount show
 * the final values.
 */

/** Count-up length (ms) and the lag between neighbouring values. */
const COUNT_MS = 1500;
export const STAGGER_MS = 110;

/**
 * "off": render the final text only (SSR, reduced motion, scrolled past).
 * "armed": below the fold; the overlay waits at zero so nothing flashes.
 * "run": first view reached; the overlay counts up.
 */
export type CountPhase = "off" | "armed" | "run";

/**
 * Scales every digit run in the final string by `progress`, so "40-60%"
 * counts both numbers together and `frame(text, 1) === text`.
 */
function frame(finalText: string, progress: number): string {
  return finalText.replace(/\d+/g, (digits) =>
    String(Math.round(Number(digits) * progress)),
  );
}

function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * The phase for a group of values that count together. `ref` is the element
 * holding the group; it is measured at mount and watched until it is 40%
 * in view. Pass `enabled: false` to keep a group static.
 */
export function useCountPhase(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
): CountPhase {
  const tier = useMotionTier();
  const [phase, setPhase] = useState<CountPhase>("off");

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || tier === "reduced") {
      setPhase("off");
      return;
    }
    const rect = el.getBoundingClientRect();
    // Scrolled past at mount (restored scroll position): never replay.
    if (rect.bottom < 0) {
      setPhase("off");
      return;
    }
    // Already on screen at mount (tall viewports): count up right away.
    if (rect.top < window.innerHeight) {
      setPhase("run");
      return;
    }
    setPhase("armed");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase("run");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, enabled, tier]);

  return phase;
}

type CountValueProps = {
  /** Final text. Always what the DOM, SSR, and assistive tech see. */
  value: string;
  phase: CountPhase;
  /** Start offset (ms), so neighbours count in a stagger. */
  delay?: number;
  /** The value's type: font, size, color. */
  className?: string;
};

/**
 * One value. The count-up is an aria-hidden overlay drawn over the real
 * text. The real text (`final`) is always in the DOM and the layout at its
 * final width, so there is no layout shift; it is only made transparent while
 * the overlay runs. Swapping the overlay out at the end is seamless because
 * the last frame is the same string in the same font.
 */
export default function CountValue({
  value,
  phase,
  delay = 0,
  className,
}: CountValueProps): JSX.Element {
  const [text, setText] = useState(() => frame(value, 0));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (phase !== "run") {
      return;
    }
    let raf = 0;
    let t0 = 0;
    const step = (now: number) => {
      if (!t0) {
        t0 = now;
      }
      const t = (now - t0 - delay) / COUNT_MS;
      if (t >= 1) {
        setDone(true);
        return;
      }
      setText(frame(value, easeOutExpo(Math.max(0, t))));
      raf = window.requestAnimationFrame(step);
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [phase, value, delay]);

  const counting = phase === "armed" || (phase === "run" && !done);

  return (
    <span className={`${styles.count} ${className ?? ""}`}>
      <span className={styles.final} data-counting={counting || undefined}>
        {value}
      </span>
      {counting ? (
        <span className={styles.ticker} aria-hidden="true">
          {phase === "armed" ? frame(value, 0) : text}
        </span>
      ) : null}
    </span>
  );
}
