import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import type { JSX } from "react";

const CAL_URL = "https://cal.com/kannah/30min";

// TODO(screenshots): replace the placeholder box below with
// <Gallery photos={[...]} /> + caption once redacted screenshots land.
// TODO(quote): the blockquote under "What the client says" is a draft
// placeholder attributed to Tina Tran — swap in her real quote when received.

export default function PorticoEmbeddedRetainer(): JSX.Element {
  return (
    <Layout
      title="Portico — Embedded Retainer That Shipped the Success Backlog"
      description="How a 2-year embedded retainer shipped Portico's Success-team roadmap — LTI 1.3, reporting, and data quality — without pulling core engineering off priorities."
    >
      <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          <a href="/case-studies">← All case studies</a>
        </p>
        <Heading as="h1">Portico</Heading>
        <p style={{ fontSize: "1.2rem", color: "var(--ifm-color-emphasis-700)" }}>
          Embedded retainer that shipped the Success team&apos;s roadmap — 24
          initiatives in 9 months — without pulling core engineering off
          priority work.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <span className="tag--pill">Ongoing retainer</span>
          <span className="tag--pill">Embedded Delivery Partner</span>
          <span className="tag--pill">EdTech · Student lifecycle</span>
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
            src="/img/logos/portico.png"
            alt="Portico logo"
            style={{ height: "32px", width: "auto", flexShrink: 0 }}
          />
          <p style={{ margin: 0 }}>
            Portico — operational software for career education (attendance,
            SIS/CRM, financial aid, clinical). See{" "}
            <a
              href="https://porticoedu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              porticoedu.com
            </a>
            .
          </p>
        </div>

        <div
          style={{
            border: "1px dashed var(--ifm-color-emphasis-400)",
            borderRadius: "8px",
            padding: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Screenshots coming soon</strong> — redacted walkthrough of
            the reporting and LMS integration work.
          </p>
        </div>

        <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
          <section>
            <Heading as="h2">Client</Heading>
            <p>
              Portico — student lifecycle management for career-focused
              institutions, bringing together Campus Ivy, CourseKey, Verity
              IQ, and Trajecsys across nursing, allied health, beauty and
              wellness, and trade and technical schools. Multiple products,
              shared customers, one Success team fielding roadmap and
              reporting asks across all of them.
            </p>
          </section>

          <section>
            <Heading as="h2">Context</Heading>
            <p>
              The Success team owned customer commitments — roadmap features,
              custom reports, missing documentation — that core engineering
              didn&apos;t have bandwidth for. Pulling engineering off main
              priorities wasn&apos;t an option, but leaving the backlog to
              sit wasn&apos;t either. They needed someone embedded enough to
              take tickets end-to-end: plan, design, build, review, stage,
              and deploy, across multiple products.
            </p>
          </section>

          <section>
            <Heading as="h2">Engagement model</Heading>
            <p>
              <strong>
                Embedded Delivery Partner — ongoing retainer, 2 years.
              </strong>{" "}
              Started at 10 hrs/mo prepaid; now scales from 4 to 100+ hrs/mo
              with the month and the need. Fully embedded with full
              access — teams, chat, every repo needed, meetings, internal
              documents, code reviews, and deploys to staging — bridging the
              Success and engineering teams.
            </p>
            <p>
              Nearly all work arrived as Success-team tickets engineering
              couldn&apos;t staff. Everything still went through engineering
              review and QA — but engineering was shielded from the planning,
              designing, and building, looped in only for the rare case that
              needed real buy-in.
            </p>
          </section>

          <section>
            <Heading as="h2">What was built</Heading>
            <p>
              Full-stack ownership across web, backend, database, and
              internal services — new features on existing systems, fixes
              for feature and UI issues, and new reports both client-facing
              and internal:
            </p>
            <ul>
              <li>
                <strong>LMS interoperability</strong> — built LTI 1.3 for D2L
                (Brightspace) with a dynamic registration service, plus
                Canvas integration work, expanding how Portico products
                connect to institutional LMS environments
              </li>
              <li>
                <strong>Attendance &amp; academic reporting</strong> — new
                calculations, filters, grouping, exports, and administrative
                data; automated report generation with scheduled email
                distribution
              </li>
              <li>
                <strong>Data quality &amp; import/export</strong> —
                validation, sanitization, duplicate detection, and more
                robust import/export workflows; resolved complex production
                issues across timezones, course grouping, attendance
                calculations, filtering, and frontend/backend data
                consistency
              </li>
              <li>
                <strong>Release confidence</strong> — sustained testing,
                regression fixes, staging validation, and deployment support
                behind every shipment
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Outcome</Heading>
            <ul>
              <li>
                <strong>24 major tracked initiatives in 9 months</strong> —
                this year&apos;s tracked scope (year one ran on the prepaid
                block and wasn&apos;t item-tracked), scaling from 4 to 100+
                hrs/mo with need: ~124 hrs on attendance and reporting
                capabilities, 68+ hrs on integrations and data
                infrastructure, and 130 logged work entries on testing,
                debugging, pull requests, staging validation, and deployment
              </li>
              <li>
                <strong>Reporting customers run their business on</strong> —
                expanded attendance and academic reporting with improved
                accuracy across attendance, missed time, makeup hours,
                expected hours, and course-level metrics, plus automated
                generation and scheduled distribution
              </li>
              <li>
                <strong>LMS interop without diverting engineering</strong> —
                LTI 1.3 with dynamic registration for D2L Brightspace and
                Canvas work shipped through normal review and QA while core
                engineering stayed on priorities
              </li>
              <li>
                <strong>At-risk clients saved, revenue retained</strong> —
                stepped in on escalated, at-risk accounts across multiple
                products — shipping the fixes and reports that kept them
                onboard — saving multiple clients from churning and retaining
                tens of thousands of dollars the business would otherwise
                have lost
              </li>
              <li>
                <strong>Production issues closed, releases de-risked</strong>{" "}
                — timezone, grouping, calculation, and data-consistency fixes
                resolved, with the documentation written along the way so
                the Success team isn&apos;t re-asking answered questions
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
                “When at-risk clients needed answers, Fadee shipped them —
                roadmap blockers, custom reports, production fixes — without
                us ever having to pull engineering off priorities. He saved
                accounts worth tens of thousands of dollars and gave Success
                a delivery arm we never had.”
              </p>
              <footer>— Tina Tran, VP of Success, Portico</footer>
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
                    <li>React</li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3">Backend &amp; Data</Heading>
                  <ul>
                    <li>Node</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3">Infrastructure &amp; Delivery</Heading>
                  <ul>
                    <li>AWS Serverless</li>
                    <li>Staging validation + deployment support</li>
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
        </div>
      </div>
    </Layout>
  );
}
