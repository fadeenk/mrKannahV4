import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Gallery from "@site/src/components/Gallery/Gallery";

export default function SuperAgentIntegration(): JSX.Element {
  return (
    <Layout
      title="SuperAgent Integration"
      description="AI-powered assistant interface with comprehensive infrastructure"
    >
      <div className="container" style={{ marginTop: "2rem" }}>
        <Heading as="h1">SuperAgent Integration</Heading>

        <div style={{ marginBottom: "2rem" }}>
          <Gallery photos={["/img/showcase/superAgent.mp4"]} />
        </div>

        <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
          <section>
            <Heading as="h2">Project Overview</Heading>
            <p>
              Developed and integrated a comprehensive AI-powered assistant
              platform within an existing client application. The SuperAgent
              system provides intelligent workflow automation, document
              processing, and code execution capabilities through a
              sophisticated dual-backend architecture designed for
              enterprise-scale deployment.
            </p>
            <p>
              The solution seamlessly integrates with the client's existing
              infrastructure while providing advanced AI capabilities through a
              dedicated processing backend:
            </p>
            <ul>
              <li>
                <strong>Client Backend Integration:</strong> Seamless data
                persistence, authentication, user management, and sandbox
                environment integration with existing systems
              </li>
              <li>
                <strong>AI Processing Backend:</strong> Dedicated AI processing,
                tool execution, and workflow management with Supabase data layer
                and Daytona sandbox execution environment
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Core Capabilities</Heading>
            <ul>
              <li>
                <strong>Intelligent Workflow Management:</strong> AI-driven task
                automation and process optimization
              </li>
              <li>
                <strong>Advanced Tool Execution:</strong> Comprehensive tool
                registry with dynamic execution capabilities
              </li>
              <li>
                <strong>Document Intelligence:</strong> Multi-format document
                upload, parsing, and intelligent content extraction
              </li>
              <li>
                <strong>Web Research Engine:</strong> Real-time web search and
                data collection capabilities
              </li>
              <li>
                <strong>Secure Code Execution:</strong> Isolated sandbox
                environment for safe code interpretation and execution
              </li>
              <li>
                <strong>Content Generation:</strong> Automated PowerPoint
                presentation creation and simple web application development
              </li>
              <li>
                <strong>Real-time Streaming:</strong> Server-Sent Events for
                live response streaming and progress updates
              </li>
              <li>
                <strong>Infrastructure Automation:</strong> Complete
                Infrastructure as Code deployment with monitoring and scaling
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Technical Architecture</Heading>
            <ul>
              <li>
                <strong>Enhanced Chat Interface:</strong> Advanced
                conversational UI with file upload, drag-and-drop, and
                multi-modal input support
              </li>
              <li>
                <strong>Conversation Management:</strong> Sophisticated
                threading system with project association and context
                preservation
              </li>
              <li>
                <strong>Sandbox Environment:</strong> Secure file management
                system with real-time code execution and output visualization
              </li>
              <li>
                <strong>Dynamic Tool Registry:</strong> Extensible system for
                rendering and managing diverse AI tool outputs
              </li>
              <li>
                <strong>Multi-Model Support:</strong> Unified interface
                supporting OpenAI, Groq, Anthropic, OpenRouter, and other
                leading AI providers
              </li>
            </ul>

            <Heading as="h3">Advanced Tool View System</Heading>
            <p>
              Implemented a comprehensive tool view registry that dynamically
              handles various AI tool outputs with specialized rendering
              components:
            </p>
            <ul>
              <li>
                <strong>File Operations:</strong> Create, edit, delete, and
                version control for project files
              </li>
              <li>
                <strong>Command Execution:</strong> Terminal command execution
                with real-time output streaming
              </li>
              <li>
                <strong>Web Research:</strong> Intelligent web search with
                result aggregation and source citation
              </li>
              <li>
                <strong>Code Generation:</strong> Multi-language code creation
                with syntax highlighting and error detection
              </li>
              <li>
                <strong>Presentation Tools:</strong> Automated slide deck
                generation with customizable templates and branding
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Implementation Scope</Heading>
            <ul>
              <li>
                <strong>Infrastructure Deployment:</strong> Complete cloud
                infrastructure setup using Infrastructure as Code with automated
                CI/CD pipelines, comprehensive monitoring, and auto-scaling
                capabilities
              </li>
              <li>
                <strong>Custom UI Development:</strong> Full SuperAgent
                interface integration within the client's existing web
                application, maintaining design consistency and user experience
                standards
              </li>
              <li>
                <strong>Backend Integration:</strong> Seamless authentication
                and data synchronization between client backend and AI agent
                framework, ensuring secure user management and data consistency
              </li>
              <li>
                <strong>Performance Optimization:</strong> Advanced caching
                strategies, connection pooling, and response optimization for
                enterprise-scale usage
              </li>
              <li>
                <strong>Security Implementation:</strong> End-to-end encryption,
                secure sandbox isolation, and comprehensive audit logging
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Project Timeline</Heading>
            <p>
              <strong>Delivered in 4 weeks</strong> - Comprehensive integration
              achieved through modular architecture and supervised AI code
              generation.
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
                  <li>React 18</li>
                  <li>Material-UI (MUI) with Emotion</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Backend</Heading>
                <ul>
                  <li>Express.js</li>
                  <li>TypeScript</li>
                  <li>Drizzle</li>
                  <li>PostgreSQL</li>
                  <li>AWS Cognito</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Infrastructure</Heading>
                <ul>
                  <li>Terraform</li>
                  <li>Terragrunt</li>
                  <li>Python</li>
                  <li>Make</li>
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
