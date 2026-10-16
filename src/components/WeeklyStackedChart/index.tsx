import React, { type JSX } from "react";
import styles from "./styles.module.css";

export type WeeklyRow = {
  /** Short x-axis label, e.g. the day of the month a week starts on. */
  label: string;
  /** Group the label sits under, e.g. the month. Consecutive rows share one. */
  group: string;
  /** Bottom segment of the stack. */
  primary: number;
  /** Top segment of the stack. */
  secondary: number;
};

type WeeklyStackedChartProps = {
  rows: readonly WeeklyRow[];
  primaryLabel: string;
  secondaryLabel: string;
  /** One sentence stating what the chart shows, read by assistive tech. */
  summary: string;
  groupHeader: string;
};

const WIDTH = 420;
const HEIGHT = 262;
const PAD = { left: 28, right: 6, top: 22, bottom: 52 };
const TICK_COUNT = 4;

function sum(rows: readonly WeeklyRow[], pick: (row: WeeklyRow) => number): number {
  return rows.reduce((total, row) => total + pick(row), 0);
}

/**
 * Stacked weekly bars, drawn as plain SVG so it themes with Infima and adds
 * no chart dependency. Two tones of the one green accent keep the series
 * apart; totals sit directly on the bars so nothing relies on color alone.
 */
export default function WeeklyStackedChart({
  rows,
  primaryLabel,
  secondaryLabel,
  summary,
  groupHeader,
}: WeeklyStackedChartProps): JSX.Element {
  const plotWidth = WIDTH - PAD.left - PAD.right;
  const plotHeight = HEIGHT - PAD.top - PAD.bottom;
  const peak =
    Math.ceil(Math.max(...rows.map((r) => r.primary + r.secondary)) / TICK_COUNT) *
    TICK_COUNT;
  const band = plotWidth / rows.length;
  const barWidth = band * 0.62;
  const x = (i: number): number => PAD.left + i * band + (band - barWidth) / 2;
  const y = (value: number): number =>
    PAD.top + plotHeight - (value / peak) * plotHeight;
  const ticks = Array.from(
    { length: TICK_COUNT + 1 },
    (_, i) => (i * peak) / TICK_COUNT,
  );

  const groups: { name: string; start: number; end: number }[] = [];
  rows.forEach((row, i) => {
    const last = groups[groups.length - 1];
    if (last && last.name === row.group) {
      last.end = i;
    } else {
      groups.push({ name: row.group, start: i, end: i });
    }
  });

  return (
    <figure className={styles.figure}>
      <ul className={styles.legend}>
        <li>
          <span className={`${styles.swatch} ${styles.swatchPrimary}`} />
          {primaryLabel}{" "}
          <span className={styles.legendCount}>
            {sum(rows, (r) => r.primary)}
          </span>
        </li>
        <li>
          <span className={`${styles.swatch} ${styles.swatchSecondary}`} />
          {secondaryLabel}{" "}
          <span className={styles.legendCount}>
            {sum(rows, (r) => r.secondary)}
          </span>
        </li>
      </ul>

      <svg
        className={styles.svg}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={summary}
        focusable="false"
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              className={tick === 0 ? styles.axis : styles.grid}
              x1={PAD.left}
              x2={WIDTH - PAD.right}
              y1={y(tick)}
              y2={y(tick)}
            />
            <text
              className={styles.tickLabel}
              x={PAD.left - 6}
              y={y(tick) + 4}
              textAnchor="end"
            >
              {tick}
            </text>
          </g>
        ))}

        {rows.map((row, i) => {
          const total = row.primary + row.secondary;
          return (
            <g key={`${row.group}-${row.label}`}>
              {row.primary > 0 ? (
                <rect
                  className={styles.barPrimary}
                  x={x(i)}
                  y={y(row.primary)}
                  width={barWidth}
                  height={y(0) - y(row.primary)}
                />
              ) : null}
              {row.secondary > 0 ? (
                <rect
                  className={styles.barSecondary}
                  x={x(i)}
                  y={y(total)}
                  width={barWidth}
                  height={y(row.primary) - y(total)}
                />
              ) : null}
              <text
                className={total > 0 ? styles.total : styles.totalZero}
                x={x(i) + barWidth / 2}
                y={y(total) - 6}
                textAnchor="middle"
              >
                {total}
              </text>
              <text
                className={styles.tickLabel}
                x={x(i) + barWidth / 2}
                y={PAD.top + plotHeight + 18}
                textAnchor="middle"
              >
                {row.label}
              </text>
            </g>
          );
        })}

        {groups.map((group) => (
          <g key={group.name}>
            <line
              className={styles.groupRule}
              x1={PAD.left + group.start * band + 4}
              x2={PAD.left + (group.end + 1) * band - 4}
              y1={PAD.top + plotHeight + 28}
              y2={PAD.top + plotHeight + 28}
            />
            <text
              className={styles.groupLabel}
              x={PAD.left + ((group.start + group.end + 1) / 2) * band}
              y={PAD.top + plotHeight + 44}
              textAnchor="middle"
            >
              {group.name}
            </text>
          </g>
        ))}
      </svg>

      <table className={styles.srOnly}>
        <caption>{summary}</caption>
        <thead>
          <tr>
            <th scope="col">{groupHeader}</th>
            <th scope="col">{primaryLabel}</th>
            <th scope="col">{secondaryLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.group}-${row.label}`}>
              <th scope="row">{`${row.group} ${row.label}`}</th>
              <td>{row.primary}</td>
              <td>{row.secondary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
