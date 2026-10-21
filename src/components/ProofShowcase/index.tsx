import React, {
  useCallback,
  useRef,
  useSyncExternalStore,
  type CSSProperties,
  type JSX,
} from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import Reveal from "@site/src/components/Reveal";
import SectionHeader from "@site/src/components/SectionHeader";
import { ArrowRight } from "@site/src/components/Icons";
import { useMotionTier } from "@site/src/components/MotionTier";
import useStripParallax from "./use-strip-parallax";
import styles from "./styles.module.css";

/*
 * Proof: the release line arrives. A 2px green line (the hero's stroke) comes
 * in as a run of ticks that straighten, then passes through two named
 * clients. Facts come only from the published case studies:
 *   - Portico:  src/pages/case-studies/portico-embedded-retainer.tsx
 *   - AGI:      src/pages/case-studies/american-growth-insurance.tsx
 *
 * Each row is the outcome of one PainGroups situation, in the same order;
 * PainGroups links to the rows by id. No unattributed proof on this page.
 */

/** Keep in sync with the tilt / scroller breakpoint in styles.module.css. */
const WIDE_QUERY = "(min-width: 997px)";

type Shot = {
  file: string;
  alt: string;
  /** Intrinsic pixel size of the file (for width/height, no layout shift). */
  width: number;
  height: number;
  /** Frame aspect when it differs from the file (a crop, see `crop`). */
  frameHeight?: number;
  /** Crop to the bottom: drops the top of the source capture (the
   *  painted-out browser bar and the app header). */
  crop?: "bottom";
  /** Resting depth in px (translateZ) and parallax travel multiplier. */
  z: number;
  depth: number;
};

// Short alt texts for the strip. The Portico case study shows the same
// captures with fuller alts of its own.
const SHOTS: readonly Shot[] = [
  {
    file: "portico-d2l-dynamic-registration.png",
    alt: "LTI 1.3 dynamic registration for D2L Brightspace",
    width: 737,
    height: 808,
    z: 28,
    depth: 0.6,
  },
  {
    file: "portico-attendance-technology-setup.png",
    alt: "Attendance verification technology setup",
    width: 1237,
    height: 1106,
    // The top of the file is the painted-out browser bar and the app
    // header; show the page below them.
    frameHeight: 936,
    crop: "bottom",
    z: 8,
    depth: 1,
  },
  {
    file: "portico-approval-status-report.png",
    alt: "Approval status reporting with audit trail",
    width: 1036,
    height: 727,
    z: 20,
    depth: 0.75,
  },
  {
    file: "portico-notifications-inbox.png",
    alt: "Instructor notification inbox for attendance actions",
    width: 417,
    height: 863,
    z: 36,
    depth: 1.25,
  },
];

/**
 * The line's arrival: disordered ticks that straighten into the line, the
 * hero's thesis in a few strokes. [y, angle, length, opacity] in a 20x56 box;
 * the last, vertical stroke meets the 2px line that starts at the card top.
 */
const TICKS: readonly (readonly [number, number, number, number])[] = [
  [5, 64, 7, 0.3],
  [14, -50, 8, 0.42],
  [23.5, 36, 9, 0.55],
  [33, -22, 10, 0.7],
  [41.5, 9, 10, 0.85],
];

function TickRun(): JSX.Element {
  return (
    <svg
      className={styles.ticks}
      width="20"
      height="56"
      viewBox="0 0 20 56"
      aria-hidden="true"
      focusable="false"
    >
      {TICKS.map(([y, angle, length, opacity]) => (
        <line
          key={y}
          x1="10"
          y1={y - length / 2}
          x2="10"
          y2={y + length / 2}
          transform={`rotate(${angle} 10 ${y})`}
          opacity={opacity}
        />
      ))}
      <line x1="10" y1="49" x2="10" y2="56" strokeWidth="2" />
    </svg>
  );
}

function useMatchMedia(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => true,
  );
}

function slotStyle(shot: Shot): CSSProperties {
  return {
    "--w": shot.width,
    "--h": shot.frameHeight ?? shot.height,
    "--z": `${shot.z}px`,
    "--depth": shot.depth,
  } as CSSProperties;
}

export default function ProofShowcase(): JSX.Element {
  const imgBase = useBaseUrl("/img/");
  const tier = useMotionTier();
  const stageRef = useRef<HTMLDivElement>(null);
  const isWide = useMatchMedia(WIDE_QUERY);
  useStripParallax(stageRef, tier);

  return (
    <section className={`section ${styles.proof}`}>
      <div className="container">
        <SectionHeader
          title="What changed for them"
          lede="Each of these started as one of the situations above."
        />

        <ol className={styles.ledger} role="list">
          {/* Portico: the lead. Copy, then the screenshot strip. */}
          <li
            id="proof-portico"
            className={`${styles.row} ${styles.rowFirst}`}
          >
            <span className={styles.lead}>
              <TickRun />
            </span>
            <span className={styles.node} aria-hidden="true" />
            <article className={`${styles.card} ${styles.leadCard}`}>
              <Reveal>
                <div className={styles.split}>
                  <div>
                    <span className={styles.plate}>
                      <img
                        src={`${imgBase}logos/portico.png`}
                        alt="Portico logo"
                        width={600}
                        height={252}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <Heading
                      as="h3"
                      className={`${styles.name} ${styles.nameLead}`}
                    >
                      Portico
                    </Heading>
                    <p className={styles.sub}>
                      EdTech · Embedded Delivery Partner
                    </p>
                  </div>
                  <div>
                    <p className={styles.stat}>
                      <span className={`${styles.numeral} ${styles.numeralLead}`}>
                        24
                      </span>{" "}
                      <span className={styles.statLabel}>
                        initiatives in 9 months
                      </span>
                    </p>
                    <p className={styles.copy}>
                      I take the Success team&apos;s customer requests from
                      plan to deploy while core engineering stays on the
                      roadmap. The reports and fixes I ship leave
                      Portico&apos;s clients happier.
                    </p>
                  </div>
                </div>
              </Reveal>

              <figure className={styles.figure}>
                <div ref={stageRef} className={styles.stage} data-tier={tier}>
                  <div className={styles.arrive}>
                    <div
                      className={styles.strip}
                      role="group"
                      aria-label="Portico screenshots"
                      tabIndex={isWide ? undefined : 0}
                    >
                      {SHOTS.map((shot, i) => (
                        <div
                          key={shot.file}
                          className={styles.slot}
                          style={slotStyle(shot)}
                        >
                          <Reveal className={styles.fill} delay={120 + i * 70}>
                            <div
                              className={`${styles.frame} ${shot.crop ? styles.cropBottom : ""}`}
                            >
                              <img
                                src={`${imgBase}case-studies/${shot.file}`}
                                alt={shot.alt}
                                width={shot.width}
                                height={shot.height}
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </Reveal>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <figcaption className={styles.caption}>
                  <Link
                    to="/case-studies/portico-embedded-retainer"
                    className={styles.link}
                  >
                    Portico, embedded retainer case study
                    <ArrowRight className={styles.arrow} />
                  </Link>
                  <span className={styles.captionNote}>
                    Redacted screenshots
                  </span>
                </figcaption>
              </figure>
            </article>
          </li>

          {/* American Growth Insurance: medium card. Wording stays inside the
              case study's. Atomic is the investor, so it is named in the
              outcome, not as the client. */}
          <li id="proof-agi" className={styles.row}>
            <span className={styles.node} aria-hidden="true" />
            <Reveal delay={60}>
              <article className={`${styles.card} ${styles.partner}`}>
                <div className={styles.split}>
                  <div>
                    <span className={`${styles.plate} ${styles.plateWide}`}>
                      <img
                        src={`${imgBase}case-studies/agi-logo.svg`}
                        alt="American Growth Insurance logo"
                        width={885}
                        height={57}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <Heading as="h3" className={styles.name}>
                      American Growth Insurance
                    </Heading>
                    <p className={styles.sub}>Insurance · Fixed-Scope Project</p>
                  </div>
                  <div>
                    <p className={styles.stat}>
                      <span className={styles.numeral}>4 weeks</span>{" "}
                      <span className={styles.statLabel}>
                        to a working AI assistant inside their app
                      </span>
                    </p>
                    <p className={styles.copy}>
                      They used it with about 10 design-partner agencies while
                      in stealth, then launched with ~$70M from Atomic and
                      Rockbridge Growth Equity.
                    </p>
                    <Link
                      to="/case-studies/american-growth-insurance"
                      className={`${styles.link} ${styles.stretch}`}
                      aria-label="Read the case study, American Growth Insurance"
                    >
                      Read the case study
                      <ArrowRight className={styles.arrow} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        </ol>

        <p className={styles.more}>
          <Link to="/case-studies" className={styles.link}>
            Read case studies
            <ArrowRight className={styles.arrow} />
          </Link>
          <Link
            to="/showcase"
            className={styles.link}
            aria-label="See more work in the showcase"
          >
            See more work
            <ArrowRight className={styles.arrow} />
          </Link>
        </p>
      </div>
    </section>
  );
}
