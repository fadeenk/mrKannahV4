import type { JSX } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

const CAL_URL = "https://cal.com/kannah/30min";

const pains = [
  "Our AI pilots never reach production",
  "We're not AI-native yet and rewiring feels risky",
  "Our NRR is flat — we aren't an NRR machine",
];

function CtaButtons(): JSX.Element {
  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="button button--primary button--lg">
        Book a 30-min fit call
      </a>
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="button button--secondary button--lg">
        15-min coffee in Miami?
      </a>
    </div>
  );
}

export default function Summit(): JSX.Element {
  return (
    <Layout
      title="Meet in Miami — AI Delivery for Vertical SaaS"
      description="Kannah Consulting at the Vertical Software Summit, Miami Nov 4-5 2026. Ship AI into production without breaking reliability."
    >
      <style>{`@media print { .navbar, footer.footer { display: none !important; } }`}</style>
      <div className="hero hero--primary">
        <div className="container">
          <p className="hero__subtitle" style={{ marginBottom: "0.5rem" }}>
            Kannah Consulting · In Miami Nov 4–5
          </p>
          <Heading as="h1" className="hero__title">
            Rewiring to AI-first without breaking production?
          </Heading>
          <p className="hero__subtitle">
            I help vertical SaaS teams ship AI into real workflows — faster delivery, same reliability,
            engineering ownership intact.
          </p>
          <CtaButtons />
        </div>
      </div>

      <main className="container margin-vert--lg" style={{ maxWidth: "860px" }}>
        <Heading as="h2">Sound familiar?</Heading>
        <ul>
          {pains.map((pain) => (
            <li key={pain}>{pain}</li>
          ))}
        </ul>

        <Heading as="h2">Two ways to work together</Heading>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div className="card" style={{ flex: "1", minWidth: "260px" }}>
            <div className="card__header">
              <h3>AI Delivery &amp; Reliability Assessment</h3>
              <p>
                <strong>$4,000–$7,500 · 1–2 weeks</strong>
              </p>
            </div>
            <div className="card__body">
              <p>Fastest safe path: bottleneck + production-risk map, sequenced roadmap.</p>
            </div>
          </div>
          <div className="card" style={{ flex: "1", minWidth: "260px" }}>
            <div className="card__header">
              <h3>Embedded AI Delivery Partner</h3>
              <p>
                <strong>$170/hour · 10–12h/week · 3-month minimum</strong>
              </p>
            </div>
            <div className="card__body">
              <p>I own a defined workstream in production with your team.</p>
            </div>
          </div>
        </div>

        <Heading as="h2" className="margin-top--lg">
          Proof
        </Heading>
        <p>
          Vertical SaaS platform: AI pilot stuck 6 weeks → production, zero incidents. Regulated workflow
          SaaS: roadmap unblocked, lead time down, prod stable. Full detail on{" "}
          <a href="/#engagements">/#engagements</a>.
        </p>

        <Heading as="h2">Fit / non-fit</Heading>
        <p>
          <strong>Fit:</strong> CTO / VP Eng / technical founder at established vertical SaaS with an
          active roadmap. <strong>Not fit:</strong> generic web builds, idea-stage with no prod system.
        </p>

        <div className="text--center margin-top--lg">
          <Heading as="h2">In town Nov 4–5? Talk delivery, not decks.</Heading>
          <CtaButtons />
          <p className="margin-top--md">
            One-pager: File → Print → Save as PDF from this page. Card QR points here.
          </p>
        </div>
      </main>
    </Layout>
  );
}
