import React, { type JSX } from "react";
import Heading from "@theme/Heading";
import SectionHeader from "@site/src/components/SectionHeader";
import { ArrowRight } from "@site/src/components/Icons";
import styles from "./styles.module.css";

/**
 * STUB (Foundation): the two anonymous proof cards from the draft. The
 * Proof builder replaces this folder's implementation with the three named
 * cards (Portico, Atomic, and a third client). Keep the default export and no required
 * props. Testimonials is rendered by the page shell, not here.
 */
const proofs = [
  {
    title: "Vertical SaaS platform, 40-engineer org",
    text: "AI pilot stuck in staging for 6 weeks. Assessment sequenced a 2-week path: sandboxed rollout (limited blast radius), eval harness (repeatable AI quality checks), rollback plan. Team shipped to prod without an incident.",
  },
  {
    title: "Regulated workflow SaaS, legacy monolith",
    text: "Roadmap stalled on reliability risk. Embedded delivery owned one workstream: CI + test coverage first, then AI-assisted triage. Lead time down, no prod destabilization.",
  },
];

export default function ProofShowcase(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          index="03"
          label="Proof"
          title="Shipped to prod without breaking it"
        />
        <div className={styles.grid2}>
          {proofs.map((proof) => (
            <div key={proof.title} className="card--elevated">
              <Heading
                as="h3"
                style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
              >
                {proof.title}
              </Heading>
              <p style={{ marginBottom: 0 }}>{proof.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginBottom: 0, marginTop: "1.5rem" }}>
          <a href="/case-studies" aria-label="Read client case studies">
            Read case studies <ArrowRight className={styles.inlineArrow} />
          </a>{" "}
          ·{" "}
          <a href="/showcase" aria-label="See more work in the showcase">
            See more work <ArrowRight className={styles.inlineArrow} />
          </a>
        </p>
      </div>
    </section>
  );
}
