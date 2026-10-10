import React, { type JSX } from "react";
import Heading from "@theme/Heading";
import BookCta, { type CtaVariant } from "@site/src/components/BookCta";
import SectionHeader from "@site/src/components/SectionHeader";
import styles from "./styles.module.css";

type Offer = {
  variant: Exclude<CtaVariant, "close">;
  highlight?: boolean;
  title: string;
  meta: string;
  blurb: string;
  get: string;
  need: string;
  timeline: string;
  detailsSummary: string;
  detailsBody: string;
};

const offers: readonly Offer[] = [
  {
    variant: "assessment",
    highlight: true,
    title: "AI Delivery & Reliability Assessment",
    meta: "Fixed-scope · 1–2 weeks",
    blurb: "When you need confidence about the problem and approach first.",
    get: "a sequenced path to production with risks and next steps in writing.",
    need: "an active roadmap and access to discuss delivery workflow and production risk.",
    timeline: "1–2 weeks.",
    detailsSummary: "What shapes scope",
    detailsBody:
      "Depth of the workflow review and whether a small proof of value is useful and safe to include in 1–2 weeks.",
  },
  {
    variant: "project",
    title: "Project-Based AI Delivery",
    meta: "Fixed-scope · scoped to done",
    blurb: "When scope and done are definable upfront.",
    get: "a defined MVP, feature, or overhaul shipped to production with your team.",
    need: "definable scope, access to discuss delivery workflow and production risk, and one engineering counterpart.",
    timeline: "defined at scoping, owned workstream to done.",
    detailsSummary: "What defines done",
    detailsBody:
      "Scope, ownership, and success measures defined in writing; work happens in your repo with CI.",
  },
  {
    variant: "retainer",
    title: "Embedded AI Delivery Partner",
    meta: "Weekly retainer · 3-month minimum",
    blurb: "When urgency, scope, and ownership are clear.",
    get: "an owned workstream shipped to production with your team.",
    need: "clear urgency, scope, and ownership for a 3-month minimum.",
    timeline: "3-month minimum, embedded in your cadence.",
    detailsSummary: "How we work",
    detailsBody:
      "Work happens in your repo with CI and one engineering counterpart; scope, ownership, and success measures defined in writing.",
  },
];

/** "02": the three engagements. Rest builder owns this folder. */
export default function EngagementOffers(): JSX.Element {
  return (
    <section
      className="section section--alt"
      id="engagements"
      style={{ scrollMarginTop: "var(--ifm-navbar-height, 60px)" }}
    >
      <div className="container">
        <SectionHeader
          index="02"
          label="Engagements"
          title="Three ways to work together"
          lede="Fixed scope, defined ownership, shipped to production with your team."
        />
        <div className={styles.grid3}>
          {offers.map((offer) => (
            <div
              key={offer.variant}
              className={`card--elevated ${styles.card} ${offer.highlight ? styles.cardHighlight : ""}`}
            >
              <div className="card__header">
                {offer.highlight ? (
                  <p style={{ marginBottom: "0.5rem" }}>
                    <span className="tag--pill">Start here</span>
                  </p>
                ) : null}
                <Heading
                  as="h3"
                  style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
                >
                  {offer.title}
                </Heading>
                <p>
                  <strong>{offer.meta}</strong>
                </p>
              </div>
              <div className="card__body" style={{ flex: "1 1 auto" }}>
                <p>{offer.blurb}</p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>You get:</strong> {offer.get}
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>You need:</strong> {offer.need}
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <strong>Timeline:</strong> {offer.timeline}
                </p>
                <details>
                  <summary>{offer.detailsSummary}</summary>
                  <p style={{ marginBottom: 0 }}>{offer.detailsBody}</p>
                </details>
              </div>
              <div
                className="card__footer"
                style={{ marginTop: "auto", paddingTop: "1rem" }}
              >
                <BookCta variant={offer.variant} block />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
