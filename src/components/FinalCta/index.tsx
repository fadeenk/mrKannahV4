import React, { type JSX } from "react";
import BookCta from "@site/src/components/BookCta";
import SectionHeader from "@site/src/components/SectionHeader";
import SignalField from "@site/src/components/SignalField";
import styles from "./styles.module.css";

/**
 * Final CTA: the last drenched green band. The tick field returns already
 * settled behind it (bookend to the hero) as a quiet ground: no release line
 * is drawn (`data-field-noline` on the band) and every tick points at the
 * copy, so the ground converges on the one action. Hooks into SignalField's
 * host contract: `data-field-quiet` on the copy calms the ticks under it and
 * is the point they aim at. A feathered scrim is the backstop so text holds
 * AA even if a tick lands behind it.
 */
export default function FinalCta(): JSX.Element {
  return (
    <section className={styles.band} data-field-noline="">
      <SignalField variant="settled" className={styles.field} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-field-quiet="">
          <SectionHeader
            title="Tell me what you’re trying to ship."
            tone="onGreen"
            align="center"
          />
          <div className={styles.cta}>
            <BookCta center tone="onGreen" variant="close" />
          </div>
        </div>
      </div>
    </section>
  );
}
