import React, { useEffect, useMemo, useRef, useState, type JSX } from "react";
import CountValue, {
  STAGGER_MS,
  useCountPhase,
  type CountPhase,
} from "@site/src/components/CountUp";
import LogosCarousel from "@site/src/components/LogosCarousel";
import styles from "./styles.module.css";

type Stat = {
  /** Final text. Always what the DOM, SSR, and assistive tech see. */
  value: string;
  label: string;
  /** What the figure is made of, under the label. */
  note?: string;
};

/** Month is zero-based: June 2008, when the career in software began. */
const CAREER_START = { year: 2008, month: 5 };

/** Whole years since the career start, so the "+" stays honest. */
function yearsBuilding(now: Date): number {
  const years = now.getFullYear() - CAREER_START.year;
  return now.getMonth() < CAREER_START.month ? years - 1 : years;
}

function buildStats(years: number): readonly Stat[] {
  return [
    { value: `${years}+`, label: "Years building software companies" },
    // CourseKey: PSG's 2025 investment, a figure Fadee states himself.
    // AGI: committed equity at its July 2026 launch (AGI's own result).
    {
      value: "$100M+",
      label: "Raised by companies I’ve built for",
      note: "$30M CourseKey · ~$70M American Growth Insurance",
    },
    // Fadee is a named co-inventor on both (src/pages/about.tsx links them).
    { value: "2", label: "US patents as co-inventor" },
  ];
}

type StatItemProps = Stat & {
  phase: CountPhase;
  delay: number;
};

/** One stat: the count-up numeral (see components/CountUp) over its label. */
function StatItem({
  value,
  label,
  note,
  phase,
  delay,
}: StatItemProps): JSX.Element {
  return (
    <div className={styles.stat}>
      <CountValue
        value={value}
        phase={phase}
        delay={delay}
        className={styles.value}
      />
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        {note ? <span className={styles.note}>{note}</span> : null}
      </span>
    </div>
  );
}

/**
 * First drenched green band (stats + selected-work logos), directly under the hero.
 * The release line continues as the band's 1px top hairline. Numerals count
 * up once on first view in motion tiers "full" and "touch", at mount if the
 * band is already on screen; the reduced tier (and a band scrolled past at
 * mount) shows the final values.
 */
export default function StatsBand(): JSX.Element {
  const gridRef = useRef<HTMLDivElement>(null);
  const phase = useCountPhase(gridRef);
  // The server render bakes in the build date; refresh from the visitor's
  // clock after mount so a stale build never shows an old year count.
  const [years, setYears] = useState(() => yearsBuilding(new Date()));
  const stats = useMemo(() => buildStats(years), [years]);

  useEffect(() => {
    setYears(yearsBuilding(new Date()));
  }, []);

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
