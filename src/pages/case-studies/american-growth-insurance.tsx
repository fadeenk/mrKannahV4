import React, { type JSX } from "react";
import CaseStudyLayout, {
  CaseExternalLink,
  CaseFigure,
  CaseFootLink,
  CaseList,
  CaseMasthead,
  CaseQuote,
  CaseSection,
  CaseStack,
  CaseStats,
  CaseVideo,
  getCaseStudy,
  type CaseStackGroup,
  type CaseStat,
} from "@site/src/components/CaseStudy";

// TODO(approval): Luke Sophinos and American Growth Insurance must sign off
// on three things before this page ships:
//   1. The lead quote. It is a fresh draft: the sales deck built in front of
//      an agency owner, and "Investors saw the same thing" are new.
//   2. Luke's title (see TODO(title) at the quote).
//   3. Whether the demo video can stay public. The recording shows an
//      agency's name, street address, and phone number on the generated
//      slide, Fadee's name in the app sidebar, and a qa.agencycloud.ai URL.

const STUDY = getCaseStudy("american-growth-insurance");

const LAUNCH_POST =
  "https://www.linkedin.com/posts/lukesophinos_excited-to-unveil-agi-today-american-growth-activity-7483560051904012288-YhvO";
const PR_NEWSWIRE =
  "https://www.prnewswire.com/news-releases/american-growth-insurance-launches-specialty-insurance-brokerage-growth-platform-302827676.html";

const STATS: readonly CaseStat[] = [
  {
    value: "4 weeks",
    label: "to a working AI assistant inside their app",
  },
  {
    value: "~10",
    label: "design-partner agencies used it during stealth",
    note: "Per AGI’s launch post",
  },
  {
    value: "~$70M",
    label: "in committed equity at AGI’s July 2026 launch",
    note: "From Atomic and Rockbridge Growth Equity",
  },
];

const STACK: readonly CaseStackGroup[] = [
  {
    title: "Frontend",
    items: ["React 18", "Material UI (MUI) with Emotion"],
  },
  {
    title: "Backend",
    items: [
      "Express.js",
      "TypeScript",
      "Drizzle",
      "PostgreSQL (Supabase)",
      "AWS Cognito",
    ],
  },
  {
    title: "AI processing",
    items: [
      "Models from OpenAI, Groq, Anthropic, and OpenRouter",
      "Streaming over server-sent events (SSE)",
      "Daytona sandboxes for code execution",
      "Dynamic tool registry and workflow manager",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Terraform and Terragrunt",
      "CI/CD, monitoring, and autoscaling",
      "Caching and audit logging",
    ],
  },
];

export default function AmericanGrowthInsurance(): JSX.Element {
  return (
    <CaseStudyLayout
      slug={STUDY.slug}
      title="American Growth Insurance case study: an AI assistant in 4 weeks"
      description="In a 4-week fixed-scope project, I built an AI assistant into American Growth Insurance’s existing app. They used it with design-partner agencies in stealth."
    >
      {/* No company URL on record, so the client name renders unlinked. */}
      <CaseMasthead
        study={STUDY}
        headline="American Growth Insurance’s app had a working AI assistant in 4 weeks."
        lede="I built an AI assistant into American Growth Insurance’s existing app as a 4-week fixed-scope project, while the company was still in stealth. They needed a product that agencies and investors could try for themselves."
        about="An AI-enabled growth platform for insurance brokerages, backed by Atomic and Rockbridge Growth Equity."
        length="4 weeks"
        industry="Insurance brokerage"
      />

      <CaseStats
        stats={STATS}
        footnote={
          <>
            The agency count and launch figures are from AGI&rsquo;s{" "}
            <CaseExternalLink href={LAUNCH_POST}>launch post</CaseExternalLink>{" "}
            and{" "}
            <CaseExternalLink href={PR_NEWSWIRE}>
              PR Newswire release
            </CaseExternalLink>
            .
          </>
        }
      />

      {/* TODO(approval): draft quote, Luke has not approved this wording.
          TODO(title): Luke's title is unconfirmed, so the attribution is name
          and company only. Candidates conflict: "CEO & Founder" in
          src/components/Testimonials, "Co-Founder / Advisor" on the previous
          version of this page. Add it here and make /consulting match once
          confirmed. */}
      <CaseQuote
        variant="lead"
        name="Luke Sophinos"
        company="American Growth Insurance"
      >
        During stealth, I could open our app in front of an agency owner and
        have the assistant build a sales deck while they watched. Investors
        saw the same thing. Fadee built it inside the app we already had.
      </CaseQuote>

      <CaseSection title="Where things stood">
        <p>
          American Growth Insurance (AGI) works from one thesis: brokerages
          carry too much back-office work for every producer, the agent who
          sells, and AI can automate that &ldquo;dirty work&rdquo; across real
          agencies.
        </p>
        <p>
          Before launch, while still in stealth, AGI needed a working product
          to show about 10 U.S. agencies that were working with them as design
          partners. Slides weren&rsquo;t going to hold up in investor
          diligence. The product had to handle real agency work: reading
          documents, research, running code, and writing content. It also
          needed secure sign-in, isolated code execution, and audit logs.
        </p>
      </CaseSection>

      <CaseSection title="How we worked">
        <p>
          This was a Fixed-Scope Project: 4 weeks, with success written down
          before I started. Done meant a working demo, the infrastructure to
          run it, and a handoff.
        </p>
        <p>
          I built it inside the app they already had, in their repo and on
          their team&rsquo;s cadence, and kept it consistent with the
          app&rsquo;s existing design.
        </p>
      </CaseSection>

      <CaseSection title="What I built">
        <p>
          I built the assistant, SuperAgent, into their app on two backends.
          The app&rsquo;s own backend handles sign-in, users, and saved data,
          and a second backend runs the AI tools and workflows.
        </p>
        <CaseList
          items={[
            {
              fact: "Users upload documents and the assistant reads them.",
              detail:
                "It parses files in several formats and pulls out the data, and it can research the web live, with citations.",
            },
            {
              fact: "It builds PowerPoint decks, runs code, and scaffolds simple web apps.",
              detail:
                "Code runs in an isolated sandbox, and the user sees the output live.",
            },
            {
              fact: "Tools live in a registry, and a workflow manager runs them.",
              detail: "Adding a capability means registering a new tool.",
            },
            {
              fact: "It works with models from several AI providers.",
              detail: "Answers stream to the screen as they’re generated.",
            },
            {
              fact: "The infrastructure is defined in code.",
              detail:
                "It deploys through CI/CD, with monitoring, autoscaling, caching, and audit logging.",
            },
          ]}
        />

        <CaseFigure
          framed
          caption="A user asks the assistant for an insurance sales deck, answers its follow-up questions, and gets the finished slides back."
        >
          <CaseVideo
            src="/img/showcase/superAgent.mp4"
            width={1266}
            height={912}
            label="Screen recording of the SuperAgent assistant in AGI’s app building an insurance sales deck from a short conversation."
          />
        </CaseFigure>
      </CaseSection>

      <CaseSection title="What changed">
        <CaseList
          items={[
            {
              fact: "The assistant shipped inside their app in 4 weeks.",
              detail:
                "It matches the app’s existing design, so it looks like part of their product.",
            },
            {
              fact: "About 10 design-partner agencies used it during stealth.",
              detail: (
                <>
                  Source: AGI&rsquo;s{" "}
                  <CaseExternalLink href={LAUNCH_POST}>
                    launch post
                  </CaseExternalLink>
                  .
                </>
              ),
            },
            {
              fact: "AGI launched publicly in July 2026.",
              detail: (
                <>
                  Its{" "}
                  <CaseExternalLink href={LAUNCH_POST}>
                    launch post
                  </CaseExternalLink>{" "}
                  and{" "}
                  <CaseExternalLink href={PR_NEWSWIRE}>
                    PR Newswire release
                  </CaseExternalLink>{" "}
                  report ~$70M in committed equity from Atomic and Rockbridge
                  Growth Equity, a first acquisition closed, and a path to
                  $10M+ in revenue through a roll-up. Those are AGI&rsquo;s
                  results as a company. My part was the assistant.
                </>
              ),
            },
          ]}
        />
      </CaseSection>

      <CaseStack groups={STACK} />

      <CaseFootLink to="/showcase/SuperAgentIntegration">
        Read the technical write-up for this build
      </CaseFootLink>
    </CaseStudyLayout>
  );
}
