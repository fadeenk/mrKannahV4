import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import CaseStudyLayout, {
  CASE_STUDIES,
  CaseFootLink,
  CaseIntro,
  CasePlate,
  CaseTicks,
} from "@site/src/components/CaseStudy";
import { ArrowRight } from "@site/src/components/Icons";
import Reveal from "@site/src/components/Reveal";
import styles from "./index.module.css";

/*
 * The case-study index: the two studies as ledger rows on the release
 * line, in homepage order. Every value comes from the registry
 * (src/components/CaseStudy/registry.ts), the same source as the "More case
 * studies" row at the foot of each study.
 */
export default function CaseStudiesIndex(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="index"
      title="Case studies"
      description="What I shipped for Portico and American Growth Insurance, what changed for each, and how we worked together."
    >
      <CaseIntro
        title="Case studies"
        lede="Here are two clients, what I shipped for each, and what changed. Each ran on a different engagement, so each shows a different way to work with me."
      />

      <ol className={styles.ledger} role="list">
        {CASE_STUDIES.map((study, i) => (
          <li key={study.slug} className={styles.row}>
            {i === 0 ? (
              <span className={styles.lead}>
                <CaseTicks className={styles.ticks} />
              </span>
            ) : null}
            <span className={styles.node} aria-hidden="true" />
            <Reveal className={styles.rowBody} delay={i * 60}>
              {/* Source order is the reading order (who, the headline, the
                  figure, the outcome); the grid places the figure in its
                  own column at desktop. */}
              <article className={styles.card}>
                <div className={styles.identity}>
                  <CasePlate
                    logo={study.logo}
                    client={study.client}
                    eager={i < 2}
                  />
                  <p className={styles.client}>{study.client}</p>
                  <p className={styles.engagement}>{study.engagement}</p>
                </div>
                <Heading as="h2" className={styles.title}>
                  {study.headline}
                </Heading>
                <p className={styles.stat}>
                  <span className={styles.numeral}>{study.numeral}</span>{" "}
                  <span className={styles.statLabel}>{study.numeralLabel}</span>
                </p>
                <p className={styles.outcome}>{study.outcome}</p>
                <Link
                  to={study.path}
                  className={styles.link}
                  aria-label={`Read the case study, ${study.client}`}
                >
                  Read the case study
                  <ArrowRight className={styles.arrow} />
                </Link>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <CaseFootLink
        to="/showcase"
        note="Older projects and technical write-ups are in the showcase."
      >
        Browse the technical showcase
      </CaseFootLink>
    </CaseStudyLayout>
  );
}
