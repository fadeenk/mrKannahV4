import React, { type JSX, type ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type SectionHeaderProps = {
  /** Numbered eyebrow, e.g. "01". Rendered as "01 — <label>". */
  index?: string;
  label?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** "onGreen" for drenched bands. */
  tone?: "default" | "onGreen";
  align?: "start" | "center";
};

/** Shared section heading: eyebrow, Besley H2, optional lede. */
export default function SectionHeader({
  index,
  label,
  title,
  lede,
  tone = "default",
  align = "start",
}: SectionHeaderProps): JSX.Element {
  const onGreen = tone === "onGreen";
  return (
    <div
      className={`${styles.header} ${align === "center" ? styles.center : ""} ${onGreen ? styles.onGreen : ""}`}
    >
      {index || label ? (
        <p className={styles.eyebrow}>
          {index ? <span className={styles.index}>{index}</span> : null}
          {index && label ? (
            <span aria-hidden="true" className={styles.dash}>
              {" "}
              —{" "}
            </span>
          ) : null}
          {label}
        </p>
      ) : null}
      <Heading as="h2" className={styles.title}>
        {title}
      </Heading>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </div>
  );
}
