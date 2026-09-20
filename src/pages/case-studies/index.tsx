import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import type { JSX } from "react";

type CaseStudy = {
  title: string;
  client: string;
  engagement: string;
  outcome: string;
  to: string;
  status: "live" | "soon";
};

const caseStudies: CaseStudy[] = [
  {
    title: "AI POC Behind a $70M Insurance Launch",
    client: "American Growth Insurance",
    engagement: "4-week POC · Project-Based AI Delivery",
    outcome:
      "Demo platform used through stealth to launch with ~$70M from Atomic + Rockbridge.",
    to: "/case-studies/american-growth-insurance",
    status: "live",
  },
  {
    title: "Embedded Retainer That Shipped the Success Backlog",
    client: "Portico",
    engagement: "Ongoing retainer · Embedded Delivery Partner",
    outcome:
      "24 initiatives in 9 months — roadmap, reports, and LMS interop without diverting core eng.",
    to: "/case-studies/portico-embedded-retainer",
    status: "live",
  },
  {
    title: "AI POC to Continuous Delivery",
    client: "AI delivery client",
    engagement: "Assessment → Project · CI and eval harness first",
    outcome: "POC hardened into a production delivery path.",
    to: "/case-studies/ai-poc-to-delivery",
    status: "soon",
  },
];

function CaseCard({ study }: { study: CaseStudy }): JSX.Element {
  return (
    <div className="card" style={{ marginBottom: "1rem" }}>
      <div className="card__body">
        <Heading as="h3" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
          {study.status === "live" ? (
            <a href={study.to}>{study.title}</a>
          ) : (
            <>{study.title}</>
          )}
        </Heading>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>{study.client}</strong> · {study.engagement}
        </p>
        <p style={{ marginBottom: "0.5rem" }}>{study.outcome}</p>
        {study.status === "live" ? (
          <a href={study.to}>Read the case study →</a>
        ) : (
          <span
            style={{
              fontSize: "0.85rem",
              background: "var(--ifm-color-emphasis-200)",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export default function CaseStudiesIndex(): JSX.Element {
  return (
    <Layout
      title="Case Studies"
      description="Client case studies: AI POCs and embedded delivery with measurable outcomes"
    >
      <div className="hero hero--primary" style={{ display: "block" }}>
        <div className="container" style={{ marginTop: "10px" }}>
          <h1 className="hero__title">Case Studies</h1>
          <p className="hero__subtitle">
            How engineering teams used focused AI delivery to unblock funding,
            shipping, and reliability — told as client outcomes, not tech
            demos.
          </p>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {caseStudies.map((study) => (
            <CaseCard key={study.to} study={study} />
          ))}
        </div>
        <div className="text--center" style={{ marginTop: "2rem" }}>
          <a
            href="https://cal.com/kannah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary button--lg"
          >
            Book a 30-min fit call
          </a>
          <p style={{ marginTop: "0.5rem" }}>
            <a href="/showcase">Or browse the technical showcase →</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
