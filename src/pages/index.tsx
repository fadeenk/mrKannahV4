import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonials from "@site/src/components/Testimonials";
import Heading from "@theme/Heading";
import Header from "@site/src/components/Header";
import Contact from "@site/src/components/Contact";
import FeaturedWork from "@site/src/components/FeaturedWork";
import Skills from "@site/src/components/Skills";
import LogosCarousel from "@site/src/components/LogosCarousel";

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

const services = [
  {
    title: "MVP Development & Launch",
    icon: "🚀",
    bullets: [
      "Get to market 3x faster with battle-tested architecture",
      "Launch AI-powered SaaS, platforms, or enterprise solutions",
      "Structured for funding readiness",
    ],
  },
  {
    title: "Technical Architecture & Modernization",
    icon: "🏗️",
    bullets: [
      "Transform legacy systems to cloud-native platforms",
      "Reduce infrastructure costs by 40-60%",
      "Improve performance and developer productivity",
    ],
  },
  {
    title: "AI Integration & Strategy",
    icon: "🤖",
    bullets: [
      "Implement AI features that drive user engagement",
      "From OpenAI APIs to custom agentic AI",
      "Build differentiation with AI-powered features",
    ],
  },
];

const secondaryServices = [
  {
    title: "Engineering Team Enablement",
    bullets: [
      "Build high-performing engineering teams",
      "Implement CI/CD, testing strategies, and agile methodologies",
      "Increase delivery speed by 50%+",
    ],
  },
  {
    title: "Fractional CTO & Technical Leadership",
    bullets: [
      "Senior-level leadership without full-time cost",
      "Architecture decisions and roadmap planning",
      "Hands-on coding to accelerate development",
    ],
  },
];

function ServiceCard({ service, index }: { service: Partial<(typeof services)[0]>; index: number }): JSX.Element {
  return (
    <div className="service-card">
      {service?.icon && <div className="service-icon">{service.icon}</div>}
      <h3 className="service-title">{service.title}</h3>
      <ul className="service-bullets">
        {service.bullets?.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

function Services(): JSX.Element {
  return (
    <div className="section hero hero--primary">
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

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="services-grid">
          {secondaryServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="text--center margin-top--lg">
          <a
            href="https://cal.com/kannah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
}

function EngagementSection(): JSX.Element {
  return (
    <div className="section">
      <div className="container">

      <div className="section__header">
        <Heading as="h2" className="hero__title">
          Engagement Models
        </Heading>
        <p className="hero__subtitle">
          Flexible ways to work together based on your needs and stage.
        </p>
      </div>

      <div className="engagement-grid">
        {engagementModels.map((model, index) => (
          <EngagementCard key={index} model={model} />
        ))}
      </div>

      <div className="text--center margin-top--lg">
        <a
          href="https://cal.com/kannah/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary button--lg"
        >
          Not sure which model is right for you? Let's talk
        </a>
      </div>
    </div>
    </div>
  );
}

function About() {
  return (
    <div className="hero">
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
        <div className="text--center margin-top--lg">
          <a
            href="https://cal.com/kannah/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

function StatsBar(): JSX.Element {
  return (
    <div className="stats-bar hero hero--primary">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">18+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$45M+</span>
            <span className="stat-label">Raised for Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40-60%</span>
            <span className="stat-label">Infrastructure Cost Reduction</span>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from Fadee`} description={`${siteConfig.tagline}`}>
      <Header />
      <StatsBar />
      <main>
        <About />
        <Services />
        <EngagementSection />
        <FeaturedWork />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
}
