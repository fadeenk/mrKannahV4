import React from "react";
import Heading from "@theme/Heading";

type FeaturedWorkItem = {
  title: string;
  description: string;
  result: string;
  link: string;
  category: string;
};

const featuredWork: FeaturedWorkItem[] = [
  {
    title: "Customizable Agentic Platform",
    description:
      "White-labeled agentic platform across four verticals with real-time chat, file management, browser automation, code execution, and multi-LLM support.",
    result: "Delivered in 8 days with full IaC, CI/CD, and white-label UI.",
    link: "/showcase/CustomizableAgenticPlatform",
    category: "SaaS/AI",
  },
  {
    title: "SuperAgent Integration",
    description:
      "AI-powered assistant interface with comprehensive infrastructure. Features workflow management, tool execution, document parsing, web search, sandbox environment, and real-time streaming.",
    result:
      "Delivered in 1 month with full infrastructure deployment and UI integration.",
    link: "/showcase/SuperAgentIntegration",
    category: "Agentic AI",
  },
  {
    title: "AI-Powered Meeting Intelligence Platform",
    description:
      "Built a comprehensive SaaS platform that provides AI-powered insights on meeting participants, integrated with email and calendar systems.",
    result:
      "Launched MVP in 3 months, secured multiple customers and generated revenue.",
    link: "https://meetinghero.ai/",
    category: "SaaS/AI",
  },
];

function WorkCard({ work }: { work: FeaturedWorkItem }) {
  return (
    <div className="card" style={{ marginBottom: "1rem" }}>
      <div className="card__body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "1.2rem",
              color: "var(--ifm-font-color-base)",
            }}
          >
            {work.title}
          </h3>
          <span
            style={{
              fontSize: "0.8rem",
              background: "var(--ifm-color-primary)",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
              color: "var(--ifm-font-color-base-inverse)",
            }}
          >
            {work.category}
          </span>
        </div>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "var(--ifm-font-color-base)",
          }}
        >
          {work.description}
        </p>
        <p
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "var(--ifm-color-primary)",
            fontSize: "0.9rem",
          }}
        >
          ✓ {work.result}
        </p>
        <a
          href={work.link}
          style={{
            display: "inline-block",
            marginTop: "0.5rem",
            color: "#1976d2",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          View Details →
        </a>
      </div>
    </div>
  );
}

export default function FeaturedWork(): JSX.Element {
  return (
    <div className="hero hero--primary ">
      <div
        className="container"
        style={{ marginTop: "3rem", marginBottom: "3rem" }}
      >
        <Heading as="h2" className="hero__title text--center">
          Featured Work
        </Heading>
        <p className="hero__subtitle">
          Real projects delivering measurable business results
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {featuredWork.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>

        <div className="text--center" style={{ marginTop: "2rem" }}>
          <a
            href="/showcase"
            className="button--primary"
            style={{ width: "80%" }}
          >
            See More Work
          </a>
        </div>
      </div>
    </div>
  );
}
