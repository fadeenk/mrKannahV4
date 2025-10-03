import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonials from "@site/src/components/Testimonials";
import Heading from "@theme/Heading";
import Header from "@site/src/components/Header";
import Contact from "@site/src/components/Contact";
import FeaturedWork from "@site/src/components/FeaturedWork";
import Skills from "@site/src/components/Skills";

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

        <div className="text--center">
          <Heading as="h3">
            Ready to accelerate your product development?
          </Heading>
          <p style={{ fontSize: "1.2rem" }}>
            Let's discuss how I can help your team deliver faster, scale
            smarter, and build the technical foundation for your next
            breakthrough.
          </p>
        </div>
        <div className="cta-container">
          <a
            href="#contact"
            className="button--primary"
            style={{ width: "80%" }}
          >
            Work with me
          </a>
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
