import React, { useEffect, useRef, useState, type JSX } from "react";
import { useMotionTier } from "@site/src/components/MotionTier";
import LogosCarousel from "@site/src/components/LogosCarousel";
import styles from "./styles.module.css";

type Stat = {
  /** Final text. Always what the DOM, SSR, and assistive tech see. */
  value: string;
  label: string;
};

const stats: readonly Stat[] = [
  { value: "18+", label: "Years building software companies" },
  { value: "$45M+", label: "Raised for Clients" },
  { value: "40-60%", label: "Infrastructure Cost Reduction" },
];

/** Count-up length (ms) and the lag between neighbouring stats. */
const COUNT_MS = 1500;
const STAGGER_MS = 110;

/**
 * "off": render the final text only (SSR, reduced motion, already on screen).
 * "armed": below the fold; the overlay waits at zero so nothing flashes.
 * "run": first view reached; the overlay counts up.
 */
type Phase = "off" | "armed" | "run";

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

type StatItemProps = Stat & {
  phase: Phase;
  delay: number;
};

/**
 * The count-up is an aria-hidden overlay drawn over the real text. The real
 * text (`final`) is always in the DOM and the layout at its final width, so
 * there is no layout shift; it is only made transparent while the overlay
 * runs. Swapping the overlay out at the end is seamless because the last
 * frame is the same string in the same font.
 */
function StatItem({ value, label, phase, delay }: StatItemProps): JSX.Element {
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
    <div className={styles.stat}>
      <span className={styles.value}>
        <span className={styles.final} data-counting={counting || undefined}>
          {value}
        </span>
        {counting ? (
          <span className={styles.ticker} aria-hidden="true">
            {phase === "armed" ? frame(value, 0) : text}
          </span>
        ) : null}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

/**
 * First drenched green band (stats + client logos), directly under the hero.
 * The release line continues as the band's 1px top hairline. Numerals count
 * up once on first view in motion tiers "full" and "touch"; the reduced tier
 * (and anything already on screen at mount) shows the final values.
 */
export default function StatsBand(): JSX.Element {
  const tier = useMotionTier();
  const gridRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("off");

  useEffect(() => {
    const el = gridRef.current;
    if (!el || tier === "reduced") {
      setPhase("off");
      return;
    }
    // Already in view (or scrolled past) at mount: never replay, never flash.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setPhase("off");
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
  }, [tier]);

  return (
    <div className={styles.band}>
      <div className="container">
        <div className={styles.grid} ref={gridRef}>
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              phase={phase}
              delay={i * STAGGER_MS}
            />
          ))}
        </div>
        <div className={styles.logos}>
          <LogosCarousel />
        </div>
      </div>
    </div>
  );
}
