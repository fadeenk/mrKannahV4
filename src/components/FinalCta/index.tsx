import React, { type JSX } from "react";
import BookCta from "@site/src/components/BookCta";
import SectionHeader from "@site/src/components/SectionHeader";
import SignalField from "@site/src/components/SignalField";
import styles from "./styles.module.css";

/**
 * Final CTA: drenched green band with the settled signal field behind it
 * (the bookend to the hero). Rest builder owns this folder.
 */
export default function FinalCta(): JSX.Element {
  return (
    <section className={styles.band}>
      <SignalField variant="settled" className={styles.field} />
      <div className={`container ${styles.inner}`}>
        <SectionHeader
          title="Turn your AI pilot into production."
          tone="onGreen"
          align="center"
        />
        <div className={styles.cta}>
          <BookCta center tone="onGreen" variant="close" />
        </div>
      </div>
    </section>
  );
}
