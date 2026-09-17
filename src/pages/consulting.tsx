import type { JSX } from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

const CAL_URL = "https://cal.com/kannah/30min";

const pains = [
  "Our AI pilots never reach production",
  "We're not AI-native yet and rewiring feels risky",
  "Our NRR is flat — we aren't an NRR machine",
  "Delivery bottlenecks and legacy constraints slow our roadmap",
  "Shipping AI fast could destabilize production",
  "We need the next revenue layer beyond subscriptions",
];

const proofs = [
  {
    title: "Vertical SaaS platform, 40-engineer org",
    text: "AI pilot stuck in staging for 6 weeks. Assessment sequenced a 2-week path: sandboxed rollout, eval harness, rollback plan. Team shipped to prod without an incident.",
  },
  {
    title: "Regulated workflow SaaS, legacy monolith",
    text: "Roadmap stalled on reliability risk. Embedded delivery owned one workstream 12h/week: CI + test coverage first, then AI-assisted triage. Lead time down, no prod destabilization.",
  },
];

function CtaButtons(): JSX.Element {
  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="button button--primary button--lg">
        Book a 30-min fit call
      </a>
    </div>
  );
}

export default function Consulting(): JSX.Element {
  return (
    <Layout
      title="AI Delivery Consulting for SaaS Teams"
      description="Kannah Consulting helps SaaS engineering teams ship AI into production without sacrificing reliability. Assessment and embedded delivery engagements."
    >
      <div className="hero hero--primary">
        <div className="container">
          <p className="hero__subtitle" style={{ marginBottom: "0.5rem" }}>
            Kannah Consulting · For SaaS engineering teams
          </p>
          <Heading as="h1" className="hero__title">
            Rewiring to AI-first without breaking production?
          </Heading>
          <p className="hero__subtitle">
            I help vertical SaaS teams ship AI into real workflows — faster delivery, same
            reliability, engineering ownership intact.
          </p>
          <CtaButtons />
        </div>
      </div>

      <main className="container margin-vert--lg">
        <Heading as="h2">Sound familiar?</Heading>
        <ul>
          {pains.map((pain) => (
            <li key={pain}>{pain}</li>
          ))}
        </ul>

        <Heading as="h2">Two ways to work together</Heading>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div className="card" style={{ flex: "1", minWidth: "280px" }}>
            <div className="card__header">
              <h3>AI Delivery &amp; Reliability Assessment</h3>
              <p>
                <strong>$4,000–$7,500 · 1–2 weeks</strong>
              </p>
            </div>
            <div className="card__body">
              <p>When you need confidence about the problem or approach first.</p>
              <ul>
                <li>Delivery workflow, bottleneck, and production-risk review</li>
                <li>Prioritized roadmap with effort, sequencing, and risk notes</li>
                <li>Small proof of value when useful and safe</li>
              </ul>
            </div>
            <div className="card__footer">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="button button--primary button--block">
                Start with an assessment
              </a>
            </div>
          </div>
          <div className="card" style={{ flex: "1", minWidth: "280px" }}>
            <div className="card__header">
              <h3>Embedded AI Delivery Partner</h3>
              <p>
                <strong>$170/hour · 10–12h/week · 3-month minimum</strong>
              </p>
            </div>
            <div className="card__body">
              <p>When urgency, scope, and ownership are clear.</p>
              <ul>
                <li>Own a defined codebase area or delivery workstream</li>
                <li>AI-enabled workflows shipped to production with your team</li>
                <li>Delivery speed, testing, and reliability improved</li>
              </ul>
            </div>
            <div className="card__footer">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="button button--secondary button--block">
                Talk retainer
              </a>
            </div>
          </div>
        </div>

        <Heading as="h2" className="margin-top--lg">
          Proof
        </Heading>
        {proofs.map((proof) => (
          <div key={proof.title} className="card margin-bottom--md">
            <div className="card__body">
              <strong>{proof.title}</strong>
              <p>{proof.text}</p>
            </div>
          </div>
        ))}

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

        <Heading as="h2">FAQ</Heading>
        <p>
          <strong>Who owns the code?</strong> You do — I work in your repo, on your cadence,
          with scope, ownership, and success measures defined in writing.
        </p>
        <p>
          <strong>What access do you need?</strong> Repo, CI, and one engineering counterpart.
          No reorg required.
        </p>
        <p>
          <strong>What happens after the fit call?</strong> A proposal within 48 hours —
          an assessment where you need evidence first, a retainer where the path is clear.
        </p>

        <div className="text--center margin-top--lg">
          <Heading as="h2">Turn your AI pilot into production.</Heading>
          <CtaButtons />
        </div>
      </main>
    </Layout>
  );
}
