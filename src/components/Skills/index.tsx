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
      style={{
        background: "#f8f9fa",
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        minWidth: "300px",
        flex: "0 0 auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        {category.icon}
      </div>
      <h4 style={{ margin: "0 0 1rem 0", fontSize: "1.1rem", color: "#333" }}>
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
          <span
            key={index}
            style={{
              background: "#e3f2fd",
              color: "var(--ifm-color-primary)",
              padding: "0.3rem 0.6rem",
              borderRadius: "12px",
              fontSize: "0.8rem",
              fontWeight: "500",
              border: "1px solid var(--ifm-color-primary)",
            }}
          >
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
      <Heading as="h2" className="hero__title">
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
