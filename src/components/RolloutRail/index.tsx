import React, { type JSX, type ReactNode } from "react";
import Heading from "@theme/Heading";
import { ArrowRight } from "@site/src/components/Icons";
import styles from "./styles.module.css";

export type RailGate = {
  title: string;
  body: string;
  proof: string;
  route: string;
  routeLabel: string;
  href: string;
};

type RolloutRailProps = {
  header: ReactNode;
  /** Exactly three gates: the CSS choreography is authored for g1–g3. */
  gates: readonly [RailGate, RailGate, RailGate];
};

/* Keep in sync with styles.module.css. */
const PINNED_QUERY =
  "(min-width: 997px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";
const VERTICAL_QUERY = "(max-width: 996px)";
const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
/** Reading line for the unpinned timeline: view(block 62% 38%). */
const READ_LINE = 0.62;
/** Pilot parks this far (px) in front of a closed gate's center. */
const PARK_OFFSET_PX = 28;

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

/**
 * Feeds the rail's CSS choreography.
 * - Always: measures gate positions along the line (--x1..--x3, --d) and,
 *   in the vertical layout, where the line sits in the section (--ls/--le).
 * - Only when CSS scroll-driven animations are unsupported: drives --p
 *   from scroll, rAF-throttled and only while the section is near view.
 * Without JS, --p keeps its registered initial value (1): the finished
 * pipeline, which is also the reduced-motion state.
 */
function useRailDriver(
  sectionRef: React.RefObject<HTMLElement | null>,
  lineRef: React.RefObject<HTMLElement | null>,
  nodeRefs: React.RefObject<(HTMLElement | null)[]>,
): void {
  React.useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) {
      return;
    }
    const pinnedMq = window.matchMedia(PINNED_QUERY);
    const verticalMq = window.matchMedia(VERTICAL_QUERY);
    const reducedMq = window.matchMedia(REDUCED_QUERY);

    const measure = () => {
      const vertical = verticalMq.matches;
      const l = line.getBoundingClientRect();
      const start = vertical ? l.top : l.left;
      const length = vertical ? l.height : l.width;
      if (length <= 0) {
        return;
      }
      (nodeRefs.current ?? []).forEach((node, i) => {
        if (!node) {
          return;
        }
        const r = node.getBoundingClientRect();
        const center = vertical ? r.top + r.height / 2 : r.left + r.width / 2;
        section.style.setProperty(
          `--x${i + 1}`,
          clamp01((center - start) / length).toFixed(4),
        );
      });
      section.style.setProperty("--d", (PARK_OFFSET_PX / length).toFixed(4));
      if (vertical) {
        const s = section.getBoundingClientRect();
        section.style.setProperty("--ls", ((l.top - s.top) / s.height).toFixed(4));
        section.style.setProperty("--le", ((l.bottom - s.top) / s.height).toFixed(4));
      } else {
        section.style.removeProperty("--ls");
        section.style.removeProperty("--le");
      }
    };

    measure();
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(section);
    verticalMq.addEventListener("change", measure);

    const cleanups: Array<() => void> = [
      () => ro?.disconnect(),
      () => verticalMq.removeEventListener("change", measure),
    ];

    const supportsTimeline =
      typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");

    if (!supportsTimeline) {
      let raf = 0;
      let near = false;
      const update = () => {
        raf = 0;
        if (reducedMq.matches) {
          section.style.removeProperty("--p");
          return;
        }
        const r = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = pinnedMq.matches
          ? -r.top / Math.max(1, r.height - vh)
          : (READ_LINE * vh - r.top) / Math.max(1, r.height);
        section.style.setProperty("--p", clamp01(p).toFixed(4));
      };
      const schedule = () => {
        if (near && !raf) {
          raf = window.requestAnimationFrame(update);
        }
      };
      const io =
        typeof IntersectionObserver !== "undefined"
          ? new IntersectionObserver(
              ([entry]) => {
                near = entry.isIntersecting;
                schedule();
              },
              { rootMargin: "25% 0px" },
            )
          : null;
      if (io) {
        io.observe(section);
      } else {
        near = true;
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      pinnedMq.addEventListener("change", update);
      reducedMq.addEventListener("change", update);
      update();
      cleanups.push(() => {
        io?.disconnect();
        window.cancelAnimationFrame(raf);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        pinnedMq.removeEventListener("change", update);
        reducedMq.removeEventListener("change", update);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [sectionRef, lineRef, nodeRefs]);
}

function GateMark(): JSX.Element {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path className={styles.barrier} d="M6 10h8" />
      <path className={styles.check} d="M5.5 10.5l3 3 6-6.5" pathLength={1} />
    </svg>
  );
}

export default function RolloutRail({
  header,
  gates,
}: RolloutRailProps): JSX.Element {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const lineRef = React.useRef<HTMLDivElement | null>(null);
  const nodeRefs = React.useRef<(HTMLElement | null)[]>([]);
  useRailDriver(sectionRef, lineRef, nodeRefs);

  return (
    <section ref={sectionRef} className={styles.rail}>
      <div className={styles.stage}>
        <div className="container">
          <div className={styles.header}>{header}</div>
          <div className={styles.track}>
            <div
              className={`${styles.terminal} ${styles.terminalStart}`}
              aria-hidden="true"
            >
              <span className={styles.termLabel}>Staging</span>
            </div>

            <ol className={styles.gates}>
              {gates.map((gate, i) => (
                <li
                  key={gate.title}
                  className={styles.gate}
                  style={{ ["--g" as string]: `var(--g${i + 1})` }}
                >
                  <Heading as="h3" className={styles.gateTitle}>
                    {gate.title}
                  </Heading>
                  <span
                    className={styles.node}
                    aria-hidden="true"
                    ref={(el) => {
                      nodeRefs.current[i] = el;
                    }}
                  >
                    <GateMark />
                  </span>
                  <div className={styles.gateBody}>
                    <p className={styles.pain}>{gate.body}</p>
                    <p className={styles.proof}>
                      <svg
                        className={styles.proofMark}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle className={styles.proofRing} cx="10" cy="10" r="8" />
                        <path
                          className={styles.check}
                          d="M6.5 10.4l2.4 2.4 4.6-5"
                          pathLength={1}
                        />
                      </svg>
                      <span>{gate.proof}</span>
                    </p>
                    <a
                      href={gate.href}
                      aria-label={gate.routeLabel}
                      className={styles.route}
                    >
                      {gate.route}
                      <ArrowRight className={styles.routeArrow} />
                    </a>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className={`${styles.terminal} ${styles.terminalEnd}`}
              aria-hidden="true"
              style={{ ["--g" as string]: "var(--gp)" }}
            >
              <span className={styles.termLabel}>Production</span>
              <span className={`${styles.node} ${styles.nodeProd}`}>
                <GateMark />
              </span>
              <span className={styles.live}>
                <span className={styles.liveDot} />
                Live
              </span>
            </div>

            <div className={styles.line} ref={lineRef} aria-hidden="true">
              <span className={styles.fill} />
              <span className={styles.pilot} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
