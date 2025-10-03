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
    title: "AI-Powered Meeting Intelligence Platform",
    description:
      "Built a comprehensive SaaS platform that provides AI-powered insights on meeting participants, integrated with email and calendar systems.",
    result:
      "Launched MVP in 3 months, secured initial funding, and acquired first enterprise customers.",
    link: "/showcase/Apps",
    category: "SaaS/AI",
  },
  {
    title: "Multi-Industry Client Portfolio",
    description:
      "Delivered custom web solutions for healthcare, dental, and service businesses with multilingual support and modern UX.",
    result:
      "Helped 10+ businesses establish professional online presence and improve customer acquisition.",
    link: "/showcase/Websites",
    category: "Web Development",
  },
  {
    title: "Personal Cloud Infrastructure",
    description:
      "Architected and deployed a complete private cloud solution with photo management, media streaming, backup systems, and content automation.",
    result:
      "Reduced monthly cloud costs by 80% while improving data privacy and control.",
    link: "/showcase/Apps",
    category: "Cloud Architecture",
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
              background: "#f0f0f0",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              color: "#666",
            }}
          >
            {work.category}
          </span>
        </div>
        <p style={{ marginBottom: "0.5rem", color: "#666" }}>
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
