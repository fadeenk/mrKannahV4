import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import type { JSX } from "react";

export default function TeamAugmentationRetainer(): JSX.Element {
  return (
    <Layout
      title="Embedded Retainer: Features, Reports, Docs"
      description="Coming soon: retainer team augmentation case study — features, reports, and missing documentation."
    >
      <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p>
          <a href="/case-studies">← All case studies</a>
        </p>
        <Heading as="h1">Embedded Retainer: Features, Reports, Docs</Heading>
        <p>
          <span className="tag--pill">Weekly retainer</span>{" "}
          <span className="tag--pill">Embedded AI Delivery Partner</span>
        </p>
        <section>
          <Heading as="h2">Coming soon</Heading>
          <p>
            Retainer team augmentation: adding features and reports, and
            providing the missing documentation the team needed to keep
            shipping. Full story — engagement model, what was built, outcome,
            and client quote — is being drafted.
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
