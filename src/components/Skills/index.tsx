import React from "react";
import Heading from "@theme/Heading";

type SkillCategory = {
  title: string;
  skills: string[];
  icon: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Architecture & Cloud",
    skills: [
      "AWS/GCP/Azure",
      "Terraform",
      "Microservices",
      "Serverless",
      "Event-Driven Architecture",
    ],
    icon: "🏗️",
  },

  {
    title: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
    icon: "🔧",
  },
  {
    title: "DevOps & Delivery",
    skills: ["CI/CD", "Docker", "Testing", "Monitoring", "Agile/Scrum"],
    icon: "🚀",
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "OpenAI APIs",
      "Vector Stores",
      "Custom ML Models",
      "AI Integration",
    ],
    icon: "🤖",
  },
  {
    title: "Security & Compliance",
    skills: ["SOC 2", "FERPA", "Security Scanning", "Access Control"],
    icon: "🔒",
  },
  {
    title: "Frontend & Web",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue3",
      "Svelte",
      "Next.js",
      "Responsive Design",
    ],
    icon: "⚛️",
  },
];

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div
      className="card--elevated"
      style={{
        textAlign: "center",
        minWidth: "300px",
        flex: "0 0 auto",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        {category.icon}
      </div>
      <h4
        style={{
          margin: "0 0 1rem 0",
          fontSize: "1.1rem",
          color: "var(--ifm-font-color-base)",
        }}
      >
        {category.title}
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "250px",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        {category.skills.map((skill, index) => (
          <span key={index} className="tag--pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills(): JSX.Element {
  return (
    <div
      className="container"
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <Heading as="h2" className="hero__title text--center">
        Technical Expertise
      </Heading>
      <p className="hero__subtitle">
        Deep experience across the full technology stack
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginTop: "2rem",
          justifyContent: "center",
        }}
      >
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
