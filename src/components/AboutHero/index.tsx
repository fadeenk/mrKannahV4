import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import BookCta, { CTA_MICROCOPY } from "@site/src/components/BookCta";
import { PortraitTile } from "@site/src/components/ConsultingHero";
import { ArrowRight } from "@site/src/components/Icons";
import SignalField from "@site/src/components/SignalField";
import styles from "./styles.module.css";

/**
 * The /about hero: the homepage's release-line field and portrait tile with
 * the operator line as the H1. The portrait is the field's anchor, so the
 * line passes behind it and climbs past; the headline and lede quiet the
 * ticks under them. Page tokens (--c-*) cascade from the CaseStudy layout.
 */
export default function AboutHero(): JSX.Element {
  return (
    <section className={styles.hero} data-field-host="">
      <SignalField variant="hero" className={styles.field} />
      <div className={`container ${styles.inner}`}>
        <Heading as="h1" className={styles.title} data-field-quiet="">
          <span className={styles.line}>I built CourseKey&rsquo;s platform.</span>{" "}
          <span className={styles.line}>It exited for $30M.</span>{" "}
          <span className={styles.line}>Now I join SaaS teams.</span>
        </Heading>

        <div className={styles.copy} data-field-quiet="">
          <p className={styles.sub}>
            I&rsquo;m Fadee Kannah, technical co-founder of CourseKey. I
            architected the platform and led the engineering team, and in
            January 2025 it exited to private equity firm PSG. Today I consult
            for Portico, American Growth Insurance, Atomic, and other SaaS
            teams.
          </p>
          <div className={styles.ctas}>
            <div className={styles.primary}>
              <BookCta variant="about" microcopy="" emphasis="solid" />
            </div>
            <Link className={styles.secondary} to="/case-studies">
              Read the case studies
              <ArrowRight className={styles.secondaryArrow} />
            </Link>
            <p className={styles.micro}>{CTA_MICROCOPY}</p>
          </div>
        </div>

        <div className={styles.portrait}>
          <PortraitTile />
        </div>
      </div>
    </section>
  );
}
