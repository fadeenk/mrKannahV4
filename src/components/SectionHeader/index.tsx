import React, { type JSX, type ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type SectionHeaderProps = {
  title: ReactNode;
  lede?: ReactNode;
  /** "onGreen" for drenched bands. */
  tone?: "default" | "onGreen";
  align?: "start" | "center";
};

/** Shared section heading: Besley H2 and an optional lede. No kicker. */
export default function SectionHeader({
  title,
  lede,
  tone = "default",
  align = "start",
}: SectionHeaderProps): JSX.Element {
  return (
    <div
      className={`${styles.header} ${align === "center" ? styles.center : ""} ${tone === "onGreen" ? styles.onGreen : ""}`}
    >
      <Heading as="h2" className={styles.title}>
        {title}
      </Heading>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </div>
  );
}
