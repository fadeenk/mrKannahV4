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

const CTA_MICROCOPY = "30 min · proposal in 48h · no prep needed";

type CtaVariant = "assessment" | "project" | "retainer" | "close";

function calUrl(variant: CtaVariant): string {
  return `${CAL_URL}?variant=${variant}`;
}

const painGroups = [
  {
    title: "Stuck pilots",
    body: "Your AI pilot has lived in staging for weeks. Every rollout plan feels like it risks production.",
    proof:
      "Example: sandboxed rollout, eval harness, rollback plan — shipped to prod without an incident.",
    route: "See assessment details",
    routeLabel:
      "See assessment details: AI Delivery and Reliability Assessment in engagements section",
  },
  {
    title: "At-risk delivery",
    body: "Legacy constraints and delivery bottlenecks. Adding AI looks like it will destabilize what works.",
    proof:
      "Example: CI and coverage first, then AI-assisted triage — lead time down, prod stable.",
    route: "See project details",
    routeLabel:
      "See project details: Project-Based AI Delivery in engagements section",
  },
  {
    title: "Overloaded team",
    body: "Roadmap is full and senior bandwidth is thin. AI work waits because no one can own it safely.",
    proof:
      "Example: embedded senior owner for one workstream — in your repo, to prod with your team.",
    route: "See retainer details",
    routeLabel:
      "See retainer details: Embedded AI Delivery Partner in engagements section",
  },
];

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

function CtaButtons({
  center = false,
  variant = "close",
  microcopy = CTA_MICROCOPY,
  block = false,
}: {
  center?: boolean;
  variant?: CtaVariant;
  microcopy?: string;
  block?: boolean;
}): JSX.Element {
  const alignStart = !center || block;
  return (
    <div style={block ? { width: "100%" } : undefined}>
      <div
        className="cta-container"
        style={alignStart ? { justifyContent: "flex-start" } : undefined}
      >
        <a
          href={calUrl(variant)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a 30-min fit call, opens in new tab"
          className={`button button--primary ${block ? "button--block" : "button--lg"}`}
        >
          Book a 30-min fit call{" "}
          <span
            aria-hidden="true"
            style={{ fontSize: "0.85em", marginLeft: "0.25rem" }}
          >
            ↗
          </span>
        </a>
      </div>
      <p
        style={{
          fontSize: "1rem",
          marginTop: "0.5rem",
          marginBottom: 0,
          textAlign: alignStart ? "left" : "center",
          color: "var(--ifm-color-emphasis-700)",
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
        <Heading as="h2" style={{ marginBottom: "0.5rem" }}>
          Sound familiar?
        </Heading>
        <p
          style={{
            marginBottom: 0,
            fontSize: "1.1rem",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          Three patterns I get called in for:
        </p>
        <div className="services-grid">
          {painGroups.map((group) => (
            <div
              key={group.title}
              className="card--elevated"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Heading
                as="h3"
                style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
              >
                {group.title}
              </Heading>
              <p style={{ marginBottom: "1rem" }}>{group.body}</p>
              <hr
                aria-hidden="true"
                style={{
                  border: 0,
                  borderTop: "1px solid var(--ifm-color-emphasis-200)",
                  margin: "0 0 1rem 0",
                }}
              />
              <p
                style={{
                  marginBottom: "1.25rem",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "var(--ifm-color-emphasis-700)",
                }}
              >
                {group.proof}
              </p>
              <p style={{ marginBottom: 0, marginTop: "auto" }}>
                <a
                  href="#engagements"
                  aria-label={group.routeLabel}
                  className="tag--pill"
                >
                  {group.route}
                </a>
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
    <section
      className="section section--alt"
      id="engagements"
      style={{ scrollMarginTop: "var(--ifm-navbar-height, 60px)" }}
    >
      <div className="container">
        <div className="section__header">
          <Heading as="h2" style={{ marginBottom: "0.75rem" }}>
            Three ways to work together
          </Heading>
        </div>
        <div className="engagement-grid">
          <div
            className="card--elevated"
            style={{
              borderColor: "var(--ifm-color-primary)",
              borderWidth: "2px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="card__header">
              <p style={{ marginBottom: "0.5rem" }}>
                <span className="tag--pill">Start here</span>
              </p>
              <Heading
                as="h3"
                style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
              >
                AI Delivery &amp; Reliability Assessment
              </Heading>
              <p>
                <strong>Fixed-scope · 1–2 weeks</strong>
              </p>
            </div>
            <div className="card__body" style={{ flex: "1 1 auto" }}>
              <p>
                When you need confidence about the problem or approach first.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You get:</strong> confidence about the problem and
                approach before a larger commitment.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You need:</strong> an active roadmap and access to
                discuss delivery workflow and production risk.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Timeline:</strong> 1–2 weeks.
              </p>
              <details>
                <summary>What shapes scope</summary>
                <p style={{ marginBottom: 0 }}>
                  Depth of the workflow review and whether a small proof of
                  value is useful and safe to include in 1–2 weeks.
                </p>
              </details>
            </div>
            <div
              className="card__footer"
              style={{ marginTop: "auto", paddingTop: "1rem" }}
            >
              <CtaButtons variant="assessment" block />
            </div>
          </div>
          <div
            className="card--elevated"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="card__header">
              <Heading
                as="h3"
                style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
              >
                Project-Based AI Delivery
              </Heading>
              <p>
                <strong>Fixed-scope · scoped to done</strong>
              </p>
            </div>
            <div className="card__body" style={{ flex: "1 1 auto" }}>
              <p>When scope and done are definable upfront.</p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You get:</strong> a defined MVP, feature, or overhaul
                shipped to production with your team.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You need:</strong> definable scope, access to discuss
                delivery workflow and production risk, and one engineering
                counterpart.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Timeline:</strong> defined at scoping, owned workstream
                to done.
              </p>
              <details>
                <summary>What defines done</summary>
                <p style={{ marginBottom: 0 }}>
                  Scope, ownership, and success measures defined in writing;
                  work happens in your repo with CI.
                </p>
              </details>
            </div>
            <div
              className="card__footer"
              style={{ marginTop: "auto", paddingTop: "1rem" }}
            >
              <CtaButtons variant="project" block />
            </div>
          </div>
          <div
            className="card--elevated"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="card__header">
              <Heading
                as="h3"
                style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
              >
                Embedded AI Delivery Partner
              </Heading>
              <p>
                <strong>Weekly retainer · 3-month minimum</strong>
              </p>
            </div>
            <div className="card__body" style={{ flex: "1 1 auto" }}>
              <p>When urgency, scope, and ownership are clear.</p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You get:</strong> an owned workstream shipped to
                production with your team.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>You need:</strong> clear urgency, scope, and ownership
                for a 3-month minimum.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Timeline:</strong> 3-month minimum, embedded in your
                cadence.
              </p>
              <details>
                <summary>How we work</summary>
                <p style={{ marginBottom: 0 }}>
                  Work happens in your repo with CI and one engineering
                  counterpart; scope, ownership, and success measures defined in
                  writing.
                </p>
              </details>
            </div>
            <div
              className="card__footer"
              style={{ marginTop: "auto", paddingTop: "1rem" }}
            >
              <CtaButtons variant="retainer" block />
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
        <div
          className="secondary-services-grid"
          style={{ marginTop: "1.5rem" }}
        >
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
            Read case studies <span aria-hidden="true">→</span>
          </a>{" "}
          ·{" "}
          <a href="/showcase" aria-label="See more work in the showcase">
            See more work <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  );
}

function FitFaq(): JSX.Element {
  return (
    <>
      <section className="section">
        <div className="container">
          <Heading as="h2">FAQ</Heading>
          <div
            className="secondary-services-grid"
            style={{ marginTop: "1.5rem" }}
          >
            <div className="card--elevated">
              <Heading
                as="h3"
                style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
              >
                Who owns the code?
              </Heading>
              <p style={{ marginBottom: 0 }}>
                You do — I work in your repo, on your cadence, with scope,
                ownership, and success measures defined in writing.
              </p>
            </div>
            <div className="card--elevated">
              <Heading
                as="h3"
                style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
              >
                What access do you need?
              </Heading>
              <p style={{ marginBottom: 0 }}>
                Repo, CI, and one engineering counterpart. No reorg required.
              </p>
            </div>
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
      description="Kannah Consulting helps SaaS engineering teams ship AI into production without sacrificing reliability. Assessment, project-based, and embedded delivery engagements."
    >
      <Header
        headline="Rewiring to AI-first without breaking production?"
        subheadline="I help vertical SaaS teams ship AI into real workflows — faster delivery, same reliability, engineering ownership intact."
        primaryCta={{
          label: "Book a 30-min fit call",
          href: calUrl("close"),
          external: true,
        }}
        secondaryCta={{
          label: "See how we work",
          href: "#engagements",
          external: false,
        }}
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
