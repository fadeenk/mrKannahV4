import Layout from "@theme/Layout";
import Testimonials from "@site/src/components/Testimonials";
import Heading from "@theme/Heading";
import Header from "@site/src/components/Header";
import Contact from "@site/src/components/Contact";
import FeaturedWork from "@site/src/components/FeaturedWork";
import Skills from "@site/src/components/Skills";
import LogosCarousel from "@site/src/components/LogosCarousel";

import type { JSX } from "react";

const CAL_URL = "https://cal.com/kannah/30min";

type CtaVariant = "assessment" | "retainer" | "close";

function calUrl(variant: CtaVariant): string {
  return `${CAL_URL}?variant=${variant}`;
}

const painGroups = [
  {
    title: "Stuck pilots",
    body: "AI pilots never reach production; rewiring feels risky",
    route: "→ Assessment",
  },
  {
    title: "Delivery at risk",
    body: "Delivery bottlenecks, legacy constraints; shipping AI destabilizes production",
    route: "→ Retainer",
  },
  {
    title: "Flat growth",
    body: "NRR (net revenue retention) flat; need revenue beyond subscriptions",
    route: "→ Either",
  },
];

const proofs = [
  {
    title: "Vertical SaaS platform, 40-engineer org",
    text: "AI pilot stuck in staging for 6 weeks. Assessment sequenced a 2-week path: sandboxed rollout (limited blast radius), eval harness (repeatable AI quality checks), rollback plan. Team shipped to prod without an incident.",
  },
  {
    title: "Regulated workflow SaaS, legacy monolith",
    text: "Roadmap stalled on reliability risk. Embedded delivery owned one workstream 12h/week: CI + test coverage first, then AI-assisted triage. Lead time down, no prod destabilization.",
  },
];

function CtaButtons({
  center = false,
  variant = "close",
  microcopy = "30 min · proposal in 48h · no prep needed",
  block = false,
}: {
  center?: boolean;
  variant?: CtaVariant;
  microcopy?: string;
  block?: boolean;
}): JSX.Element {
  return (
    <div>
      <div
        className="cta-container"
        style={center && !block ? undefined : { justifyContent: "flex-start" }}
      >
        <a
          href={calUrl(variant)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a 30-min fit call, opens in new tab"
          className={`button button--primary ${block ? "button--block" : "button--lg"}`}
        >
          Book a 30-min fit call{" "}
          <span aria-hidden="true" style={{ fontSize: "0.85em", marginLeft: "0.25rem" }}>
            ↗
          </span>
        </a>
      </div>
      <p
        style={{
          fontSize: "1rem",
          marginTop: "0.5rem",
          marginBottom: 0,
          textAlign: center && !block ? "center" : "left",
        }}
      >
        {microcopy}
      </p>
    </div>
  );
}

function PainGroups(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <Heading as="h2">Sound familiar?</Heading>
        <div className="services-grid">
          {painGroups.map((group) => (
            <div key={group.title} className="card--elevated">
              <h3>{group.title}</h3>
              <p style={{ marginBottom: "0.5rem" }}>{group.body}</p>
              <p style={{ marginBottom: 0 }}>
                <strong>{group.route}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementOffers(): JSX.Element {
  return (
    <section className="section section--alt" id="engagements">
      <div className="container">
        <Heading as="h2">Two ways to work together</Heading>
        <p style={{ marginBottom: 0 }}>
          <strong>Start here if…</strong> stuck pilots that never reach production or you
          need evidence first → Assessment; delivery at risk with clear scope and urgency →
          Retainer; flat growth (NRR flat) → either — most start with Assessment.
        </p>
        <div className="engagement-grid">
          <div
            className="card--elevated"
            style={{ borderColor: "var(--ifm-color-primary)", borderWidth: "2px" }}
          >
            <div className="card__header">
              <p style={{ marginBottom: "0.5rem" }}>
                <span className="tag--pill">Start here</span>
              </p>
              <h3>AI Delivery &amp; Reliability Assessment</h3>
              <p>
                <strong>Fixed-scope · 1–2 weeks</strong>
              </p>
            </div>
            <div className="card__body">
              <p>When you need confidence about the problem or approach first.</p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You get:</strong> confidence about the problem and approach before a
                larger commitment.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You need:</strong> an active roadmap and access to discuss delivery
                workflow and production risk.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Timeline:</strong> 1–2 weeks.
              </p>
              <details>
                <summary>What shapes scope</summary>
                <p style={{ marginBottom: 0 }}>
                  Depth of the workflow review and whether a small proof of value is useful
                  and safe to include in 1–2 weeks.
                </p>
              </details>
            </div>
            <div className="card__footer">
              <CtaButtons
                variant="assessment"
                block
                microcopy="30 min · proposal in 48h · start with evidence"
              />
            </div>
          </div>
          <div className="card--elevated">
            <div className="card__header">
              <h3>Embedded AI Delivery Partner</h3>
              <p>
                <strong>Weekly retainer · 3-month minimum</strong>
              </p>
            </div>
            <div className="card__body">
              <p>When urgency, scope, and ownership are clear.</p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You get:</strong> an owned workstream shipped to production with your team.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You need:</strong> clear urgency, scope, and ownership for a 3-month minimum.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Timeline:</strong> 3-month minimum, embedded in your cadence.
              </p>
              <details>
                <summary>How we work</summary>
                <p style={{ marginBottom: 0 }}>
                  Work happens in your repo with CI and one engineering counterpart; scope,
                  ownership, and success measures defined in writing.
                </p>
              </details>
            </div>
            <div className="card__footer">
              <CtaButtons
                variant="retainer"
                block
                microcopy="30 min · proposal in 48h · for a clear-scope workstream"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofCases(): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <Heading as="h2">Proof</Heading>
        {proofs.map((proof) => (
          <div key={proof.title} className="card--elevated margin-bottom--md">
            <Heading as="h3" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {proof.title}
            </Heading>
            <p style={{ marginBottom: 0 }}>{proof.text}</p>
          </div>
        ))}
        <p style={{ marginBottom: 0 }}>
          <a href="/showcase">See more work →</a>
        </p>
      </div>
    </section>
  );
}

function FitFaq(): JSX.Element {
  return (
    <>
      <section className="section section--alt">
        <div className="container">
          <Heading as="h2">Fit / non-fit</Heading>
          <p>
            <strong>Fit:</strong> CTOs, VPs/Heads of Engineering, and technical founders at
            established SaaS companies with an active roadmap and real engineering constraints —
            especially where workflows are complex or regulated.
          </p>
          <p>
            <strong>Not fit:</strong> generic web builds, idea-stage teams with no production
            system, or teams looking for presentation-only advice.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading as="h2">FAQ</Heading>
          <div className="card--elevated margin-bottom--md">
            <Heading as="h3" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              Who owns the code?
            </Heading>
            <p style={{ marginBottom: 0 }}>
              You do — I work in your repo, on your cadence, with scope, ownership, and
              success measures defined in writing.
            </p>
          </div>
          <div className="card--elevated">
            <Heading as="h3" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              What access do you need?
            </Heading>
            <p style={{ marginBottom: 0 }}>
              Repo, CI, and one engineering counterpart. No reorg required.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container text--center">
          <Heading as="h2">Turn your AI pilot into production.</Heading>
          <CtaButtons center />
        </div>
      </section>
    </>
  );
}

function StatsBar(): JSX.Element {
  return (
    <div className="stats-bar hero hero--primary">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">18+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$45M+</span>
            <span className="stat-label">Raised for Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40-60%</span>
            <span className="stat-label">Infrastructure Cost Reduction</span>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="AI Delivery Consulting for SaaS Teams"
      description="Kannah Consulting helps SaaS engineering teams ship AI into production without sacrificing reliability. Assessment and embedded delivery engagements."
    >
      <Header
        eyebrow="Kannah Consulting · For SaaS engineering teams"
        headline="Rewiring to AI-first without breaking production?"
        subheadline="I help vertical SaaS teams ship AI into real workflows — faster delivery, same reliability, engineering ownership intact."
        primaryCta={{ label: "Book a 30-min fit call ↗", href: calUrl("close"), external: true }}
        secondaryCta={{ label: "See how we work ↓", href: "#engagements", external: false }}
        microcopy="30 min · proposal in 48h · no prep needed"
      />
      <StatsBar />
      <main>
        <PainGroups />
        <EngagementOffers />
        <ProofCases />
        <FitFaq />
        <FeaturedWork limit={3} />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
}
