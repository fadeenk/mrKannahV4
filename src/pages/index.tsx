import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonials from "@site/src/components/Testimonials";
import Heading from "@theme/Heading";
import Header from "@site/src/components/Header";
import Contact from "@site/src/components/Contact";

import styles from "./index.module.css";

function oldHome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="container">
      <Heading as="h2" className="hero__title">
        What I can do for you
      </Heading>
      <p className="hero__subtitle">
        I offer a range of consulting services designed to help businesses and
        individuals excel in technology, business and career development.
      </p>
      <Heading as="h3">Software Architecture / Design Consultations</Heading>
      <p>
        Designing robust software systems is my specialty. I'll work with you to
        create scalable, maintainable architecture tailored to your business
        needs.
      </p>
      <Heading as="h3">Team Coaching</Heading>
      <p>
        Strengthen your team's performance with customized coaching. I offer
        strategies for improving collaboration, communication, and productivity.
      </p>
      <Heading as="h3">Agile Coaching</Heading>
      <p>
        Implement agile practices effectively. I'll help you navigate agile
        methodologies, ensuring your team delivers high-quality results
        efficiently.
      </p>
      <Heading as="h3">Personal Career Coaching and Mentorship</Heading>
      <p>
        I'll work with you 1-on-1 to set career goals, identify opportunities,
        navigate challenges and achieve your professional goals.
      </p>
      <Heading as="h3">Speaking and Training</Heading>
      <p>
        I offer customized training sessions and speaking engagements on a
        variety of technology and entrepreneurship topics.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="hero hero--primary ">
      <div className="container">
        <p className="hero__subtitle">
          I have more than 18 years of experience in software development,
          architecture, and team leadership, establishing myself as a seasoned
          technology expert. As founder and co-founder of many software as a
          service companies, I’ve steered teams toward innovative software
          solutions. I have also consulted with multiple companies on their
          software development and architecture needs, while my role as a
          Technical Advisor at San Diego State University's incubator has
          allowed me to mentor emerging talent. My work spans a variety of
          industries, from healthcare and home services to entertainment,
          automotive, and education.
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
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
}
