import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonials from "@site/src/components/Testimonials";
import Heading from "@theme/Heading";
import Header from "@site/src/components/Header";
import Contact from "@site/src/components/Contact";
import FeaturedWork from "@site/src/components/FeaturedWork";
import Skills from "@site/src/components/Skills";

import type { JSX } from "react";

const engagementModels = [
  {
    title: "Project Based",
    description:
      "Perfect for defined initiatives with clear deliverables. We align on scope, timeline, and budget to build your MVP, specific features, or complete platform overhauls. Best for when you know exactly what you need built.",
  },
  {
    title: "Strategic Advisory",
    description:
      "Strategic partnership for leadership and decision-making. I provide high-level guidance on architecture, team structure, tech stack selection, and roadmap planning. Ideal for founders needing a fractional CTO or technical soundboard.",
  },
  {
    title: "Contractor Engagement",
    description:
      "Integrated development support. I join your existing engineering team to boost velocity, handle complex technical challenges, and mentor junior engineers. Flexible hourly or monthly retainer arrangements.",
  },
];

function EngagementCard({ model }: { model: (typeof engagementModels)[0] }) {
  return (
    <div
      className="card--elevated"
      style={{
        textAlign: "center",
        minWidth: "300px",
        flex: "1",
        padding: "2rem",
      }}
    >
      <h4
        style={{
          margin: "0 0 1rem 0",
          fontSize: "1.1rem",
          color: "var(--ifm-font-color-base)",
        }}
      >
        {model.title}
      </h4>
      <p>{model.description}</p>
    </div>
  );
}

function Services() {
  return (
    <div className="section">
      <div className="container">
        <div className="section__header">
          <Heading as="h2" className="hero__title">
            How I Help You Succeed
          </Heading>
          <p className="hero__subtitle">
            I deliver measurable results through strategic technology consulting
            and hands-on execution.
          </p>
        </div>

        <div style={{ display: "grid", gap: "2rem" }}>
          <div>
            <Heading as="h3">MVP Development & Launch</Heading>
            <p style={{ fontSize: "1.2rem" }}>
              Get your product to market 3x faster with battle-tested
              architecture. I've helped founders launch AI-powered SaaS, SaaS
              platforms, and enterprise solutions that raised funding and
              acquired customers.
            </p>
          </div>

          <div>
            <Heading as="h3">
              Technical Architecture & Platform Modernization
            </Heading>
            <p style={{ fontSize: "1.2rem" }}>
              Transform legacy systems into scalable, cloud-native platforms.
              Reduce infrastructure costs by 40-60% while improving performance
              and developer productivity.
            </p>
          </div>

          <div>
            <Heading as="h3">AI Integration & Strategy</Heading>
            <p style={{ fontSize: "1.2rem" }}>
              Implement AI features that drive user engagement and business
              value. From OpenAI APIs to custom full agentic AI, I help you
              build AI-powered features that differentiate your product.
            </p>
          </div>

          <div>
            <Heading as="h3">Engineering Team Enablement</Heading>
            <p style={{ fontSize: "1.2rem" }}>
              Build high-performing engineering teams with modern practices.
              Implement CI/CD, testing strategies, integrate AI in development
              process and agile methodologies that increase delivery speed by
              50%+.
            </p>
          </div>

          <div>
            <Heading as="h3">Fractional CTO & Technical Leadership</Heading>
            <p style={{ fontSize: "1.2rem" }}>
              Get senior-level technical leadership without the full-time cost.
              I provide strategic guidance, architecture decisions, and hands-on
              coding to accelerate your development.
            </p>
          </div>
        </div>

        <div className="text--center margin-top--md">
          <Heading as="h2" className="hero__title">
            Engagement Models
          </Heading>
          <p className="hero__subtitle">
            Flexible ways to work together based on your needs and stage.
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
            {engagementModels.map((model, index) => (
              <EngagementCard key={index} model={model} />
            ))}
          </div>

          <div className="margin-top--lg">
            <p style={{ fontSize: "1.2rem" }}>
              Not sure which model is right for you?{" "}
              <a
                href="https://cal.com/kannah/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a free 30-min consultation
              </a>{" "}
              to discuss your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="hero hero--primary">
      <div className="container">
        <h2 className="hero__title text--center">
          Transform Your Tech Vision Into Reality
        </h2>
        <p className="hero__subtitle">
          I'm a seasoned technology leader with 18+ years building and scaling
          software companies. I help startup founders launch MVPs faster and
          engineering orgs modernize their platforms. From AI-powered SaaS to
          cloud architecture, I've guided teams from concept to market success
          across healthcare, e-commerce, and enterprise sectors.
        </p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from Fadee`} description={`${siteConfig.tagline}`}>
      <Header />
      <main>
        <About />
        <Services />
        <FeaturedWork />
        <Skills />
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
