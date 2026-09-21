import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Gallery from "@site/src/components/Gallery";

import type { JSX } from "react";

const CAL_URL = "https://cal.com/kannah/30min";

// TODO(quote): the blockquote under "What the client says" is a draft
// placeholder attributed to Tina Tran. Swap in her real quote when received.

const SCREENSHOTS = [
  {
    src: "/img/case-studies/portico-d2l-dynamic-registration.png",
    alt: "LTI 1.3 dynamic registration for D2L Brightspace",
  },
  {
    src: "/img/case-studies/portico-attendance-technology-setup.png",
    alt: "Attendance verification technology setup",
  },
  {
    src: "/img/case-studies/portico-approval-status-report.png",
    alt: "Approval status reporting with audit trail",
  },
  {
    src: "/img/case-studies/portico-notifications-inbox.png",
    alt: "Instructor notification inbox for attendance actions",
  },
];

export default function PorticoEmbeddedRetainer(): JSX.Element {
  return (
    <Layout
        title="Portico, embedded retainer that shipped the Success backlog"
      description="How a 2-year embedded retainer shipped Portico's Success-team roadmap, covering LTI 1.3, reporting, and data quality, without pulling core engineering off priorities."
    >
      <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          <a href="/case-studies">← All case studies</a>
        </p>
        <Heading as="h1">Portico</Heading>
        <p style={{ fontSize: "1.2rem", color: "var(--ifm-color-emphasis-700)" }}>
          Embedded retainer that shipped the Success team&apos;s roadmap.
          24 initiatives in 9 months, without pulling core engineering off
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
            <a
              href="https://porticoedu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portico
            </a>{" "}
            runs operational software for career education, covering
            attendance, SIS/CRM, financial aid, and clinical work.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <Gallery photos={SCREENSHOTS} />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.9rem",
              color: "var(--ifm-color-emphasis-700)",
              textAlign: "center",
            }}
          >
            Redacted walkthrough of the reporting and LMS integration
            work: LTI 1.3 dynamic registration for D2L Brightspace,
            attendance verification setup, approval-status reporting, and
            the instructor notification inbox. Click any screenshot to
            enlarge.
          </p>
        </div>

        <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
          <section>
            <Heading as="h2">Client</Heading>
            <p>
              Portico makes student lifecycle management software for
              career-focused institutions, bringing together Campus Ivy,
              CourseKey, Verity IQ, and Trajecsys. They serve nursing,
              allied health, beauty and wellness, and trade and technical
              schools. Multiple products share customers, and one Success
              team handles roadmap and reporting requests across all of
              them.
            </p>
          </section>

          <section>
            <Heading as="h2">Context</Heading>
            <p>
              The Success team owned customer commitments that core
              engineering couldn&apos;t take on: roadmap features, custom
              reports, and missing documentation. Pulling engineering off
              priorities wasn&apos;t an option, but leaving the backlog to
              sit wasn&apos;t either. They needed someone embedded enough
              to handle tickets end-to-end: plan, design, build, review,
              stage, and deploy across multiple products.
            </p>
          </section>

          <section>
            <Heading as="h2">Engagement model</Heading>
            <p>
              <strong>
                Embedded Delivery Partner. Ongoing retainer, 2 years.
              </strong>{" "}
              Started at 10 hrs/mo prepaid and now ranges from 4 to 100+
              hrs/mo based on monthly need. Embedded with complete access
              to teams, chat, every needed repo, meetings, internal
              documents, code reviews, and staging deploys. The role
              bridges Success and engineering.
            </p>
            <p>
              Nearly all work arrived as Success-team tickets engineering
              couldn&apos;t staff. Everything still went through engineering
              review and QA. Engineering stayed out of the planning,
              designing, and building, and joined only when their approval
              truly mattered.
            </p>
          </section>

          <section>
            <Heading as="h2">What was built</Heading>
            <p>
              Full-stack ownership across web, backend, database, and
              internal services. New features on existing systems, fixes
              for feature and UI issues, and new reports both client-facing
              and internal:
            </p>
            <ul>
              <li>
                <strong>LMS interoperability.</strong> Built LTI 1.3 for D2L
                Brightspace with a dynamic registration service, and Canvas
                integration work, expanding how Portico products connect to
                institutional LMS environments
              </li>
              <li>
                <strong>Attendance &amp; academic reporting.</strong> New
                calculations, filters, grouping, exports, and administrative
                data; automated generation with scheduled email delivery
              </li>
              <li>
                <strong>Data quality &amp; import/export.</strong>
                Validation, sanitization, duplicate detection, and more
                reliable import/export workflows. Resolved complex
                production issues across timezones, course grouping, and
                attendance calculations, plus filtering and frontend/backend
                data mismatches
              </li>
              <li>
                <strong>Release confidence.</strong> Testing, regression
                fixes, staging validation, and deployment support behind
                every shipment
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Outcome</Heading>
            <ul>
              <li>
                <strong>24 major tracked initiatives in 9 months.</strong>
                This year&apos;s tracked scope only. Year one ran on the
                prepaid block and wasn&apos;t item-tracked. Work ranges from
                4 to 100+ hrs/mo based on monthly need: ~124 hrs on
                attendance and reporting, 68+ hrs on integrations and data
                infrastructure, and 130 logged entries on testing,
                debugging, pull requests, staging validation, and deployment
              </li>
              <li>
                <strong>Accurate customer-facing reports.</strong> Expanded
                attendance and academic reporting with improved accuracy
                across attendance, missed time, makeup hours, expected
                hours, and course-level metrics, plus automated generation
                and scheduled delivery
              </li>
              <li>
                <strong>LMS interoperability without diverting
                engineering.</strong> LTI 1.3 with dynamic registration
                for D2L Brightspace and Canvas work shipped through standard
                review and QA while core engineering stayed on priority work
              </li>
              <li>
                <strong>At-risk clients saved, revenue retained.</strong>
                Stepped in on escalated, at-risk accounts across multiple
                products. Shipped the fixes and reports that kept them
                onboard, saving multiple clients from canceling and
                retaining tens of thousands of dollars the business would
                otherwise have lost
              </li>
              <li>
                <strong>Production issues closed, releases
                validated.</strong> Timezone, grouping, calculation, and
                data-consistency fixes resolved, with documentation written
                as the work shipped so the Success team isn&apos;t re-asking
                answered questions
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
                "When at-risk clients needed answers, Fadee shipped them.
                Roadmap blockers, custom reports, production fixes. All
                without us ever having to pull engineering off priorities.
                He saved accounts worth tens of thousands of dollars and
                gave Success a delivery arm we never had."
              </p>
              <footer>Tina Tran, VP of Success, Portico</footer>
            </blockquote>
          </section>

          <section>
            <details>
              <summary>
                <strong>Tech stack</strong>
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
                    <li>Staging validation and deployment support</li>
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
