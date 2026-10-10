import React, { useRef, type JSX } from "react";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BookCta, { CTA_MICROCOPY } from "@site/src/components/BookCta";
import { ArrowRight } from "@site/src/components/Icons";
import { useMotionTier } from "@site/src/components/MotionTier";
import SignalField from "@site/src/components/SignalField";
import styles from "./styles.module.css";

/**
 * Portrait provenance (derived rasters; originals in static/img stay untouched):
 * - fadee-hero.webp: static/img/fadee.jpg (3261px square), cropped to 4:5
 *   (x 330..2939), resized to 640x800, grayscale baked in, WebP q0.9. 42 KB.
 * - fadee-hero-character.webp: static/img/fadee.png (499px cutout, alpha),
 *   same 4:5 crop (x 50..449), 400x500, colour, WebP q0.92 with alpha. 26 KB.
 * Both made in headless Chrome via canvas drawImage + toBlob (no ImageMagick
 * or ffmpeg on this machine). The old header loaded the 1.17 MB original.
 */
const COVER_ALT = "Fadee Kannah, technology consultant";

/** Pointer lean (degrees) added to the hover tilt. Tier "full" only. */
const LEAN_Y = 10;
const LEAN_X = 6;

function PortraitTile(): JSX.Element {
  const tier = useMotionTier();
  const ref = useRef<HTMLDivElement>(null);
  const cover = useBaseUrl("/img/fadee-hero.webp");
  const character = useBaseUrl("/img/fadee-hero-character.webp");

  const lean = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el || tier !== "full" || e.pointerType === "touch") {
      return;
    }
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${(nx * LEAN_Y).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-ny * LEAN_X).toFixed(2)}deg`);
  };
  const unlean = (): void => {
    ref.current?.style.removeProperty("--ry");
    ref.current?.style.removeProperty("--rx");
  };

  return (
    <div
      ref={ref}
      className={`${styles.portrait} ${styles[tier]}`}
      data-field-anchor=""
      onPointerMove={lean}
      onPointerLeave={unlean}
    >
      <div className={styles.plate}>
        <img
          className={styles.cover}
          src={cover}
          width={640}
          height={800}
          alt={COVER_ALT}
          decoding="async"
          fetchPriority="low"
        />
      </div>
      <img
        className={styles.character}
        src={character}
        width={400}
        height={500}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}

export default function ConsultingHero(): JSX.Element {
  return (
    <section className={styles.hero} data-field-host="">
      <SignalField variant="hero" />
      <div className={`container ${styles.inner}`}>
        <Heading as="h1" className={styles.title} data-field-quiet="">
          <span className={styles.line}>
            Rewiring to <span className={styles.keep}>AI-first</span> without
          </span>{" "}
          <span className={styles.line}>breaking production?</span>
        </Heading>

        <div className={styles.copy} data-field-quiet="">
          <p className={styles.sub}>
            I help vertical SaaS teams ship AI into real workflows — faster
            delivery, same reliability, engineering ownership intact.
          </p>
          <div className={styles.ctas}>
            <div className={styles.primary}>
              <BookCta variant="close" microcopy="" emphasis="solid" />
            </div>
            <a className={styles.secondary} href="#engagements">
              See how we work
              <ArrowRight className={styles.secondaryArrow} />
            </a>
            <p className={styles.micro}>{CTA_MICROCOPY}</p>
          </div>
        </div>

        <PortraitTile />
      </div>
    </section>
  );
}
