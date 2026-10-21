import React, { type JSX } from "react";
import Link from "@docusaurus/Link";
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
import {
  AGI_CASE_STUDY,
  AI_ASSISTANT_RECORDING,
  SUNA_URL,
  getProject,
} from "@site/src/data/showcase";

/*
 * The technical side of the American Growth Insurance assistant (the old
 * SuperAgent Integration page). AGI approved its case study as written, so
 * this page restates only what that study and the old page already said,
 * adds the Suna credit, and links the study for the engagement.
 */

const PROJECT = getProject("ai-assistant");

const FACTS: readonly CaseFactRow[] = [
  ...PROJECT.facts.map((fact) => ({
    label: fact.label,
    value: <FactValue fact={fact} />,
  })),
  { label: "Industry", value: "Insurance brokerage" },
];

const DOES: readonly CaseListItem[] = [
  {
    fact: "Tools and workflows.",
    detail: "A dynamic registry of tools the assistant can call, and a workflow manager.",
  },
  {
    fact: "Documents.",
    detail: "Users upload files in several formats, and it works from what they contain.",
  },
  {
    fact: "Web research.",
    detail: "Real-time search, with the sources cited.",
  },
  {
    fact: "Isolated code execution.",
    detail: "Code runs in a Daytona sandbox.",
  },
  {
    fact: "Generated files.",
    detail:
      "It can build a PowerPoint deck from its research, and simple web apps.",
  },
];

const ADDED: readonly CaseListItem[] = [
  {
    fact: "The interface inside their app.",
    detail:
      "A chat in AGI’s existing React app, with file upload, drag and drop, and conversation threads tied to projects.",
  },
  {
    fact: "Live tool output.",
    detail:
      "I ported the UI and the responses for each of the agent’s tools into AGI’s app, so each tool’s output streams in while the agent works.",
  },
  {
    fact: "Their sign-in and their data.",
    detail:
      "Authentication and data stay in sync between AGI’s backend (Express, PostgreSQL, AWS Cognito) and the AI side.",
  },
  {
    fact: "Infrastructure as code.",
    detail: "Terraform and Terragrunt, with CI/CD, monitoring and autoscaling.",
  },
  {
    fact: "Speed under load.",
    detail: "Caching and connection pooling.",
  },
  {
    fact: "Audit logging.",
    detail: "An audit trail for the assistant’s activity.",
  },
];

/** The stack in the case study's four groups, with Suna as the agent framework. */
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
      "Suna agent framework",
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

export default function AiAssistant(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="work"
      title="AI assistant for American Growth Insurance"
      description="The technical side of the AI assistant I built into American Growth Insurance’s existing app in 4 weeks, on the Suna agent framework."
      image="/img/og/ai-assistant.png"
    >
      <CaseHeader
        title="AI assistant for American Growth Insurance"
        lede={
          <>
            I built this AI assistant into American Growth Insurance’s existing
            app in 4 weeks, on top of the{" "}
            <CaseExternalLink href={SUNA_URL}>
              Suna agent framework
            </CaseExternalLink>
            . This page is the technical side.{" "}
            <Link to={AGI_CASE_STUDY}>The case study</Link> covers how we
            worked and what changed for them.
          </>
        }
        facts={FACTS}
      />

      <CaseFigure framed caption={AI_ASSISTANT_RECORDING.caption}>
        <CaseVideo
          src={AI_ASSISTANT_RECORDING.src}
          poster={AI_ASSISTANT_RECORDING.poster}
          width={AI_ASSISTANT_RECORDING.width}
          height={AI_ASSISTANT_RECORDING.height}
          label={AI_ASSISTANT_RECORDING.label}
        />
      </CaseFigure>

      <SpineSection scrub title="What it does">
        <p>
          A user asks the assistant to do a piece of work. It works through
          the task with its tools and shows its progress, and its answers
          stream in as they are written.
        </p>
        <CaseList items={DOES} />
      </SpineSection>

      <SpineSection scrub title="What I did">
        <p>
          The agent runs on the Suna framework. My part was making it a feature
          of AGI’s app.
        </p>
        <CaseList items={ADDED} />
      </SpineSection>

      <SpineSection scrub title="How it fit in 4 weeks">
        <p>
          The architecture is modular, and I used AI code generation under
          supervision.
        </p>
      </SpineSection>

      <CaseStack groups={STACK} />

      <CaseFootLink to="/showcase">Back to all work</CaseFootLink>
    </CaseStudyLayout>
  );
}
