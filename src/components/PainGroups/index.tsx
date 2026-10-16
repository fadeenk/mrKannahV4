import React, { type JSX } from "react";
import Heading from "@theme/Heading";
import { ArrowDown } from "@site/src/components/Icons";
import Reveal from "@site/src/components/Reveal";
import SectionHeader from "@site/src/components/SectionHeader";
import styles from "./styles.module.css";

type Situation = {
  /** What the visitor would say, in their words. */
  quote: string;
  body: string;
  client: string;
  /** Anchor of the matching client in ProofShowcase. */
  href: string;
};

/*
 * Each situation is a published case study, told from the client's side
 * before the work started. Facts come only from:
 *   - Portico: src/pages/case-studies/portico-embedded-retainer.tsx
 *   - AGI:     src/pages/case-studies/american-growth-insurance.tsx
 * Order matches the ProofShowcase rows the links jump to.
 */
const situations: readonly Situation[] = [
  {
    quote: "Customers keep asking for things our engineers can’t get to.",
    body: "Custom reports, integrations, documentation. Your engineers belong on the roadmap, and your customers shouldn’t have to wait.",
    client: "Portico",
    href: "#proof-portico",
  },
  {
    quote: "We need something real to show investors, and we need it in weeks.",
    body: "Slides won’t hold up in diligence. Investors and early customers want to use a working product, not hear about one.",
    client: "American Growth Insurance",
    href: "#proof-agi",
  },
];

/**
 * The problem, in the visitor's words. Ruled rows (the FAQ's vocabulary at a
 * larger scale): the quote on the left, what it looks like day to day and a
 * jump to the client who was there on the right.
 */
export default function PainGroups(): JSX.Element {
  return (
    <section className={`section section--alt ${styles.wrap}`}>
      <div className="container">
        <SectionHeader
          title="Sound familiar?"
          lede="The teams I get called in for usually say one of these."
        />
        <ol className={styles.list} role="list">
          {situations.map((s, i) => (
            <Reveal as="li" key={s.client} delay={i * 60} className={styles.row}>
              <Heading as="h3" className={styles.quote}>
                “{s.quote}”
              </Heading>
              <div className={styles.side}>
                <p className={styles.body}>{s.body}</p>
                <a href={s.href} className={styles.jump}>
                  How it went at {s.client}
                  <ArrowDown className={styles.jumpArrow} />
                </a>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
