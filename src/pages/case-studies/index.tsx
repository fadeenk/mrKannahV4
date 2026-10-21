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
      description="Two case studies: two years embedded with Portico’s Success team, and a four-week fixed-scope AI assistant I built for American Growth Insurance."
      image="/img/og/case-studies.png"
    >
      <CaseIntro
        title="Case studies"
        lede="Two clients, two ways of working together. I’ve been embedded with Portico’s Success team for two years. For American Growth Insurance, I built an AI assistant into their app in a four-week, fixed-scope project."
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
        note="The showcase has the technical write-up of American Growth Insurance’s assistant, and my other builds."
      >
        Browse the showcase
      </CaseFootLink>
    </CaseStudyLayout>
  );
}
