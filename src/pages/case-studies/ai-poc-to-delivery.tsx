import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import type { JSX } from "react";

export default function AiPocToDelivery(): JSX.Element {
  return (
    <Layout
      title="AI POC to Continuous Delivery"
      description="Coming soon: AI POC hardened into a continuous delivery path with CI and evals."
    >
      <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p>
          <a href="/case-studies">← All case studies</a>
        </p>
        <Heading as="h1">AI POC to Continuous Delivery</Heading>
        <p>
          <span className="tag--pill">Assessment → Project</span>{" "}
          <span className="tag--pill">CI + eval harness first</span>
        </p>
        <section>
          <Heading as="h2">Coming soon</Heading>
          <p>
            Taking an AI proof of concept from staging to continuous delivery:
            CI and coverage first, then eval harness, sandboxed rollout, and
            rollback plan. Full story — engagement model, what was built,
            outcome, and client quote — is being drafted.
          </p>
        </section>
        <div className="text--center" style={{ marginTop: "2rem" }}>
          <a
            href="https://cal.com/kannah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary button--lg"
          >
            Book a 30-min fit call
          </a>
        </div>
      </div>
    </Layout>
  );
}
