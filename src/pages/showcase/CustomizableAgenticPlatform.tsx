import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Gallery from "@site/src/components/Gallery/Gallery";

export default function CustomizableAgenticPlatform(): JSX.Element {
  return (
    <Layout
      title="Customizable Agentic Platform"
      description="White-labeled agentic framework across four verticals"
    >
      <div className="container" style={{ marginTop: "2rem" }}>
        <Heading as="h1">Customizable Agentic Platform</Heading>

        <div style={{ marginBottom: "2rem" }}>
          <Gallery
            photos={["/img/showcase/agentic.mp4", "/img/showcase/websites.mp4"]}
          />
        </div>

        <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
          <section>
            <Heading as="h2">Project Overview</Heading>
            <p>
              Developed a comprehensive white-labeled AI agent platform deployed
              across four specialized industry verticals. Each deployment
              features custom domains, industry-specific AI agents, and a
              complete suite of intelligent automation tools. The platform
              enables organizations to leverage advanced AI capabilities while
              maintaining their brand identity and industry focus.
            </p>
          </section>

          <section>
            <Heading as="h2">Key Features</Heading>
            <ul>
              <li>
                <strong>Multi-Vertical Deployment:</strong> Specialized AI
                agents for Therapy, HomeHealth, Pharmacists, and
                FinancialAdvisors sectors
              </li>
              <li>
                <strong>Custom Domain Architecture:</strong> Independent domains
                with tailored branding and functionality
              </li>
              <li>
                <strong>Agent Template System:</strong> Scalable framework for
                creating and deploying industry-specific AI agents
              </li>
              <li>
                <strong>Real-time Communication:</strong> Advanced chat
                interface with streaming responses and context management
              </li>
              <li>
                <strong>Cloud-Native Infrastructure:</strong> Containerized
                microservices with auto-scaling capabilities
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Technical Architecture</Heading>
            <ul>
              <li>
                <strong>Intelligent Chat System:</strong> Real-time
                conversational AI with context preservation and multi-turn
                dialogue support
              </li>
              <li>
                <strong>Document Processing:</strong> Advanced file upload,
                parsing, and intelligent content extraction capabilities
              </li>
              <li>
                <strong>Web Automation Engine:</strong> Browser-based scraping,
                form automation, and data collection tools
              </li>
              <li>
                <strong>Secure Code Execution:</strong> Sandboxed environment
                for safe code interpretation and execution
              </li>
              <li>
                <strong>Multi-LLM Integration:</strong> Unified API supporting
                OpenAI, Anthropic, OpenRouter, and other leading AI providers
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Implementation Scope</Heading>
            <ul>
              <li>
                <strong>Infrastructure Deployment:</strong> Complete cloud
                infrastructure setup using Infrastructure as Code with automated
                CI/CD pipelines and comprehensive monitoring
              </li>
              <li>
                <strong>White-Label Customization:</strong> Full UI/UX
                customization for brand consistency across all client
                touchpoints
              </li>
              <li>
                <strong>Landing Page Development:</strong> Custom marketing
                pages with seamless integration to the main application
              </li>
              <li>
                <strong>Automation Scripts:</strong> Custom deployment and
                configuration automation for rapid client onboarding
              </li>
              <li>
                <strong>Guest Access Management:</strong> Controlled trial
                access with usage limitations and conversion tracking
              </li>
              <li>
                <strong>Vertical Customization:</strong> Industry-specific agent
                behaviors, knowledge bases, and workflow optimizations
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Project Timeline</Heading>
            <p>
              <strong>Delivered in 8 days</strong> - Rapid deployment achieved
              through pre-built framework components and automated deployment
              pipelines
            </p>
          </section>

          <section>
            <Heading as="h2">Tech Stack</Heading>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              <div>
                <Heading as="h3">Frontend</Heading>
                <ul>
                  <li>Next.js</li>
                  <li>Tailwind</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Backend</Heading>
                <ul>
                  <li>Python/FastAPI</li>
                  <li>Supabase</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Infrastructure</Heading>
                <ul>
                  <li>AWS CDK</li>
                  <li>GitHub Actions</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text--center" style={{ marginTop: "2rem" }}>
          <a href="/showcase/Apps" className="button--primary">
            ← Back to Apps
          </a>
        </div>
        <br />
      </div>
    </Layout>
  );
}
