import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Gallery from "@site/src/components/Gallery";

import type { JSX } from "react";

const CAL_URL = "https://cal.com/kannah/30min";

export default function AmericanGrowthInsurance(): JSX.Element {
  return (
    <Layout
      title="American Growth Insurance — AI POC to $70M Launch"
      description="How a 4-week AI POC demo platform supported American Growth Insurance through stealth to a $70M launch with Atomic and Rockbridge."
    >
      <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          <a href="/case-studies">← All case studies</a>
        </p>
        <Heading as="h1">American Growth Insurance</Heading>
        <p style={{ fontSize: "1.2rem", color: "var(--ifm-color-emphasis-700)" }}>
          AI POC demo platform used through stealth to launch with ~$70M from
          Atomic + Rockbridge Growth Equity.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <span className="tag--pill">4-week POC</span>
          <span className="tag--pill">Project-Based AI Delivery</span>
          <span className="tag--pill">Insurance distribution</span>
        </div>

        <div
          style={{
            border: "1px solid var(--ifm-color-emphasis-300)",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            background: "#FCFBF7",
          }}
        >
          <img
            src="/img/case-studies/agi-logo.svg"
            alt="American Growth Insurance logo"
            style={{ height: "32px", width: "auto", flexShrink: 0 }}
          />
          <p style={{ margin: 0 }}>
            American Growth Insurance — AI-enabled brokerage growth platform
            backed by Atomic + Rockbridge Growth Equity.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <Gallery photos={["/img/showcase/superAgent.mp4"]} />
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--ifm-color-emphasis-700)",
                marginTop: "0.5rem",
              }}
            >
              Product demo of the SuperAgent assistant built for the engagement.
            </p>
        </div>

        <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
          <section>
            <Heading as="h2">Client</Heading>
            <p>
              American Growth Insurance (AGI) — an AI-enabled brokerage growth
              platform built with{" "}
              <a
                href="https://www.linkedin.com/posts/lukesophinos_excited-to-unveil-agi-today-american-growth-activity-7483560051904012288-YhvO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atomic
              </a>{" "}
              and Rockbridge Growth Equity. Thesis: brokerages carry outsized
              back-office load per front-office producer — automate the “dirty
              work” with AI across real agencies.
            </p>
          </section>

          <section>
            <Heading as="h2">Context</Heading>
            <p>
              Pre-launch, AGI needed a credible AI product to show — not slides
              — across ~10 U.S. design-partner agencies. The story had to hold
              up in investor diligence and in real agency workflows: document
              intake, research, code execution, and content generation, with
              enterprise-grade auth, isolation, and auditability.
            </p>
          </section>

          <section>
            <Heading as="h2">Engagement model</Heading>
            <p>
              <strong>Project-Based AI Delivery — fixed-scope, 4 weeks.</strong>{" "}
              Built the POC/demo platform inside the client&apos;s existing app,
              in their repo and cadence, with success defined upfront: working
              demo + infrastructure + handoff.
            </p>
          </section>

          <section>
            <Heading as="h2">What was built</Heading>
            <p>
              A SuperAgent assistant integrated into the client application via
              a dual-backend architecture:
            </p>
            <ul>
              <li>
                <strong>Client backend:</strong> data persistence,
                authentication (AWS Cognito), user management, and sandbox
                integration with existing systems
              </li>
              <li>
                <strong>AI processing backend:</strong> tool execution and
                workflow management with Supabase data layer and Daytona
                sandbox execution
              </li>
            </ul>
            <ul>
              <li>Intelligent workflow management and dynamic tool registry</li>
              <li>
                Document intelligence (multi-format upload, parsing, extraction)
                + real-time web research with citations
              </li>
              <li>
                Secure code execution with live output, PowerPoint generation,
                and simple web-app scaffolding
              </li>
              <li>
                Real-time streaming (SSE), multi-model support (OpenAI, Groq,
                Anthropic, OpenRouter)
              </li>
              <li>
                Full IaC deployment (Terraform/Terragrunt), CI/CD, monitoring,
                autoscaling, caching, and audit logging
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Outcome</Heading>
            <ul>
              <li>
                <strong>Shipped in 4 weeks</strong> — POC integrated in the
                client&apos;s app with design consistency preserved
              </li>
              <li>
                <strong>Used through stealth</strong> across ~10 design-partner
                agencies while core metrics improved, per the launch post
              </li>
              <li>
                <strong>Launched with ~$70M</strong> in committed equity from
                Atomic + Rockbridge Growth Equity (July 2026), first
                acquisition closed, path to $10M+ revenue via roll-up — see{" "}
                <a
                  href="https://www.linkedin.com/posts/lukesophinos_excited-to-unveil-agi-today-american-growth-activity-7483560051904012288-YhvO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  launch post
                </a>{" "}
                and{" "}
                <a
                  href="https://www.prnewswire.com/news-releases/american-growth-insurance-launches-specialty-insurance-brokerage-growth-platform-302827676.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PR Newswire
                </a>
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">What the client says</Heading>
            <blockquote
              style={{
                borderLeft: "4px solid var(--ifm-color-primary)",
                paddingLeft: "1rem",
                fontStyle: "italic",
              }}
            >
              <p>
                “Fadee built the working demo platform we could put in front
                of agencies and investors in weeks, not months. It gave us
                something real to test with design partners and diligence
                against while we built the company.”
              </p>
              <footer>
                — Luke Sophinos, Co-Founder / Advisor, American Growth
                Insurance
              </footer>
            </blockquote>
          </section>

          <section>
            <details>
              <summary>
                <strong>Tech stack (for technical readers)</strong>
              </summary>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <Heading as="h3">Frontend</Heading>
                  <ul>
                    <li>React 18</li>
                    <li>Material-UI (MUI) with Emotion</li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3">Backend</Heading>
                  <ul>
                    <li>Express.js</li>
                    <li>TypeScript</li>
                    <li>Drizzle</li>
                    <li>PostgreSQL (Supabase)</li>
                    <li>AWS Cognito</li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3">Infrastructure</Heading>
                  <ul>
                    <li>Terraform + Terragrunt</li>
                    <li>Daytona sandbox</li>
                    <li>CI/CD + monitoring + autoscaling</li>
                  </ul>
                </div>
              </div>
            </details>
          </section>
        </div>

        <div className="text--center" style={{ marginTop: "2rem" }}>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary button--lg"
          >
            Book a 30-min fit call
          </a>
          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <a href="/#contact">Or send a message →</a>
          </p>
          <p style={{ marginTop: "0.5rem", marginBottom: 0 }}>
            <a href="/showcase/SuperAgentIntegration">
              See the technical showcase for this build →
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
