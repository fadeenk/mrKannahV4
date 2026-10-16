import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import Heading from "@theme/Heading";
import BookCta, { type CtaVariant } from "@site/src/components/BookCta";
import Reveal from "@site/src/components/Reveal";
import SectionHeader from "@site/src/components/SectionHeader";
import styles from "./styles.module.css";

type Offer = {
  variant: Exclude<CtaVariant, "close" | "card">;
  highlight?: boolean;
  title: string;
  meta: string;
  blurb: string;
  get: string;
  need: string;
  /** A labeled row on what shapes the work. Always visible. */
  extraLabel: string;
  extra: string;
  /** The published case study that ran on this engagement, if there is one. */
  proof?: { client: string; href: string; note: string };
};

const offers: readonly Offer[] = [
  {
    variant: "assessment",
    highlight: true,
    title: "Delivery Assessment",
    meta: "Fixed scope · 1–2 weeks",
    blurb: "When delivery is stuck and you’re not sure what to fix first.",
    get: "a written plan: what to fix, in what order, and the risks along the way.",
    need: "an active roadmap and time with the engineers who ship it.",
    extraLabel: "What shapes the scope",
    extra:
      "How much of your workflow I review, and whether a small proof of value fits safely inside the two weeks.",
  },
  {
    variant: "project",
    title: "Fixed-Scope Project",
    meta: "Fixed scope · timeline set at scoping",
    blurb: "When you can say what done looks like before we start.",
    get: "an MVP, a feature, or a rebuild, shipped to production.",
    need: "a clear definition of done and one engineer on your side.",
    proof: {
      client: "American Growth Insurance",
      href: "/case-studies/american-growth-insurance",
      note: "a 4-week build inside their existing app.",
    },
    extraLabel: "What defines done",
    extra:
      "Before work starts, we write down the scope, who owns what, and how we’ll know it worked. The work happens in your repo, on your CI.",
  },
  {
    variant: "retainer",
    title: "Embedded Delivery Partner",
    meta: "Weekly retainer · 3-month minimum",
    blurb: "When the work keeps coming and nobody on your team has room for it.",
    get: "a senior engineer who owns a stream of work from planning to deploy.",
    need: "access to your repo and team chat.",
    proof: {
      client: "Portico",
      href: "/case-studies/portico-embedded-retainer",
      note: "ongoing for two years.",
    },
    extraLabel: "How it works",
    extra:
      "I join your meetings and code review like anyone else on the team. Nothing ships without your engineers’ approval.",
  },
];

/**
 * The three engagements. Each card is a row-aligned comparison: on
 * desktop the cards share subgrid rows, so "You get", "You need", and the
 * shaping row line up across all three and can be scanned side by side. The
 * "Case study" row comes last: an offer without one ends a row early.
 * The section is the anchor target for every `#engagements` link, including
 * the case studies' `/#engagements`; registering it lets the build's
 * anchor check see a plain `id`, which it otherwise only finds on headings.
 */
export default function EngagementOffers(): JSX.Element {
  useBrokenLinks().collectAnchor("engagements");
  return (
    <section
      className={`section section--alt ${styles.wrap}`}
      id="engagements"
      style={{ scrollMarginTop: "var(--ifm-navbar-height, 60px)" }}
    >
      <div className="container">
        <SectionHeader
          title="Three ways to work together"
          lede="Start with an assessment if you’re not sure what you need. Go straight to a project or a retainer if you are."
        />
        <div className={styles.grid3}>
          {offers.map((offer, i) => (
            <Reveal key={offer.variant} delay={i * 60} className={styles.cell}>
              <article
                className={`card--elevated ${styles.card} ${offer.highlight ? styles.cardHighlight : ""}`}
              >
                {offer.highlight ? (
                  <span className={`tag--pill ${styles.badge}`}>Start here</span>
                ) : null}
                <header className={styles.head}>
                  <Heading as="h3" className={styles.title}>
                    {offer.title}
                  </Heading>
                  <p className={styles.meta}>{offer.meta}</p>
                </header>
                <p className={styles.blurb}>{offer.blurb}</p>
                <dl className={styles.specs}>
                  <div className={styles.spec}>
                    <dt>You get</dt>
                    <dd>{offer.get}</dd>
                  </div>
                  <div className={styles.spec}>
                    <dt>You need</dt>
                    <dd>{offer.need}</dd>
                  </div>
                  <div className={styles.spec}>
                    <dt>{offer.extraLabel}</dt>
                    <dd>{offer.extra}</dd>
                  </div>
                  {offer.proof ? (
                    <div className={styles.spec}>
                      <dt>Case study</dt>
                      <dd>
                        <Link
                          to={offer.proof.href}
                          className={styles.proofLink}
                        >
                          {offer.proof.client}
                        </Link>
                        : {offer.proof.note}
                      </dd>
                    </div>
                  ) : null}
                </dl>
                <div className={styles.cta}>
                  <BookCta
                    variant={offer.variant}
                    block
                    microcopy=""
                    emphasis={offer.highlight ? "solid" : "outline"}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className={styles.advisory}>
          <strong>Need a technical leader more than extra hands?</strong> I
          also work as a fractional CTO on architecture, roadmap, and growing
          your team. Bring it up on the call.
        </p>
      </div>
    </section>
  );
}
