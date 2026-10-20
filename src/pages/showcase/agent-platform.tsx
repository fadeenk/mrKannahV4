import React, { type JSX } from "react";
import CaseStudyLayout, {
  CaseExternalLink,
  CaseFigure,
  CaseFootLink,
  CaseHeader,
  CaseList,
  CaseStack,
  CaseVideo,
  SpineSection,
  type CaseFactRow,
  type CaseListItem,
  type CaseStackGroup,
} from "@site/src/components/CaseStudy";
import FactValue from "@site/src/components/FactValue";
import { SUNA_URL, getProject } from "@site/src/data/showcase";

/*
 * The white-label agent platform (the old Customizable Agentic Platform
 * page), rewritten from the facts on it. The client is not named: the page
 * says only the four industries. Built on the Suna agent framework.
 */

const PROJECT = getProject("agent-platform");

const FACTS: readonly CaseFactRow[] = PROJECT.facts
  .filter((fact) => fact.label !== "Stack")
  .map((fact) => ({
    label: fact.label,
    value: <FactValue fact={fact} />,
  }));

const WHAT: readonly CaseListItem[] = [
  {
    fact: "Four industries.",
    detail: "Therapy, home health, pharmacists and financial advisors.",
  },
  {
    fact: "Their own domains.",
    detail: "Each industry runs on an independent domain, with its own branding.",
  },
  {
    fact: "A template for new agents.",
    detail: "A framework for creating and deploying the agents for an industry.",
  },
  {
    fact: "Chat that streams.",
    detail: "Answers stream in, and the conversation’s context is kept across turns.",
  },
];

const ADDED: readonly CaseListItem[] = [
  {
    fact: "Deployment as code.",
    detail:
      "The AWS infrastructure is defined with CDK and deployed through GitHub Actions, with monitoring.",
  },
  {
    fact: "White-label customization.",
    detail:
      "Branding and interface changes for each industry, across every customer touchpoint.",
  },
  {
    fact: "Landing pages and onboarding scripts.",
    detail:
      "A marketing page for each industry joined to the main app, and scripts that configure and deploy a new one quickly.",
  },
  {
    fact: "Trial access.",
    detail: "Guests can try it within usage limits, and conversions are tracked.",
  },
  {
    fact: "Industry-specific behavior.",
    detail:
      "Each industry’s agents behave differently, with their own knowledge bases and workflows.",
  },
];

const STACK: readonly CaseStackGroup[] = [
  { title: "Frontend", items: ["Next.js", "Tailwind"] },
  { title: "Backend", items: ["Python and FastAPI", "Supabase"] },
  {
    title: "AI processing",
    items: [
      "Suna agent framework",
      "Models from OpenAI, Anthropic, OpenRouter and others",
    ],
  },
  { title: "Infrastructure", items: ["AWS CDK", "GitHub Actions"] },
];

export default function AgentPlatform(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="work"
      title="One agent platform for four industries"
      description="A white-label AI agent platform I built on the Suna agent framework and deployed for four industries in 8 days."
    >
      <CaseHeader
        title="One agent platform for four industries"
        lede={
          <>
            I built a white-label AI agent platform and deployed it for four
            industries: therapy, home health, pharmacists and financial
            advisors. Each has its own domain and branding. It took 8 days, on
            top of the{" "}
            <CaseExternalLink href={SUNA_URL}>
              Suna agent framework
            </CaseExternalLink>
            .
          </>
        }
        facts={FACTS}
      />

      <CaseFigure
        framed
        caption="The financial advisors version: its landing page, then the agent working through a research task."
      >
        <CaseVideo
          src="/img/showcase/agentic.mp4"
          poster="/img/showcase/agent-platform-poster.jpg"
          width={1100}
          height={792}
          label="Recording of the financial advisors version of the agent platform: its landing page, then the agent working through a research task"
        />
      </CaseFigure>

      <SpineSection scrub title="What it is">
        <p>
          One platform, four products. Each industry has its own domain,
          branding, landing page and agents, and all of them run from the same
          platform.
        </p>
        <CaseList items={WHAT} />
      </SpineSection>

      <SpineSection scrub title="What I did">
        <p>
          The agents run on the Suna framework. My part was turning it into
          four deployable products.
        </p>
        <CaseList items={ADDED} />
      </SpineSection>

      <SpineSection scrub title="How it fit in 8 days">
        <p>
          It came together in 8 days through pre-built framework components
          and automated deployment pipelines.
        </p>
      </SpineSection>

      <CaseStack groups={STACK} />

      <CaseFootLink to="/showcase">Back to all work</CaseFootLink>
    </CaseStudyLayout>
  );
}
