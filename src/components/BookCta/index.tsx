import React, { useEffect, useRef, type JSX } from "react";
import { useMotionTier } from "@site/src/components/MotionTier";
import { ArrowUpRight } from "@site/src/components/Icons";
import styles from "./styles.module.css";

export const CAL_URL = "https://cal.com/kannah/30min";

export const CTA_MICROCOPY = "30 min · proposal in 48h · no prep needed";

export type CtaVariant = "assessment" | "project" | "retainer" | "close";

export function calUrl(variant: CtaVariant): string {
  return `${CAL_URL}?variant=${variant}`;
}

type BookCtaProps = {
  variant?: CtaVariant;
  /** Centers the button and microcopy. Ignored when `block` is set. */
  center?: boolean;
  /** Full-width button (card footers). */
  block?: boolean;
  microcopy?: string;
  /** "onGreen" inverts the button and microcopy for drenched green bands. */
  tone?: "default" | "onGreen";
};

/** Max pointer pull in px; the button leans toward a fine pointer. */
const MAGNET_MAX_X = 6;
const MAGNET_MAX_Y = 6;

function useMagnet(ref: React.RefObject<HTMLElement | null>): void {
  const tier = useMotionTier();
  useEffect(() => {
    const el = ref.current;
    if (!el || tier !== "full") {
      return;
    }
    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const mx = Math.max(-MAGNET_MAX_X, Math.min(MAGNET_MAX_X, dx * 0.12));
      const my = Math.max(-MAGNET_MAX_Y, Math.min(MAGNET_MAX_Y, dy * 0.18));
      el.style.setProperty("--mx", `${mx.toFixed(1)}px`);
      el.style.setProperty("--my", `${my.toFixed(1)}px`);
    };
    const leave = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [ref, tier]);
}

export default function BookCta({
  variant = "close",
  center = false,
  block = false,
  microcopy = CTA_MICROCOPY,
  tone = "default",
}: BookCtaProps): JSX.Element {
  const magnetRef = useRef<HTMLDivElement>(null);
  useMagnet(magnetRef);
  const alignStart = !center || block;
  const onGreen = tone === "onGreen";

  return (
    <div className={block ? styles.blockWrap : undefined}>
      <div
        ref={magnetRef}
        className={`cta-container ${styles.magnetic} ${alignStart ? styles.alignStart : ""}`}
      >
        <a
          href={calUrl(variant)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a 30-min fit call, opens in new tab"
          className={`button button--primary ${block ? "button--block" : "button--lg"} ${onGreen ? styles.onGreen : ""}`}
        >
          Book a 30-min fit call
          <ArrowUpRight className={styles.arrow} />
        </a>
      </div>
      <p
        className={`${styles.microcopy} ${alignStart ? styles.microStart : styles.microCenter} ${onGreen ? styles.microOnGreen : ""}`}
      >
        {microcopy}
      </p>
    </div>
  );
}
