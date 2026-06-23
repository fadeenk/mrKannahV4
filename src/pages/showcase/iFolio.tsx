import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Gallery from "@site/src/components/Gallery";

import type { JSX } from "react";

export default function IFolio(): JSX.Element {
  return (
    <Layout
      title="iFolio — Investment Portfolio Tracker"
      description="Privacy-first, offline-capable investment portfolio tracker built entirely with AI"
    >
      <div className="container" style={{ marginTop: "2rem" }}>
        <Heading as="h1">iFolio — Investment Portfolio Tracker</Heading>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <a
            href="https://ifolio.mrkannah.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Live App
          </a>
          <span>·</span>
          <a
            href="https://github.com/mrkannah/InvestmentFolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            📂 GitHub
          </a>
        </div>

        {/* <div style={{ marginBottom: "2rem" }}>
          <Gallery photos={["/img/showcase/ifolio.png"]} />
        </div> */}

        <div style={{ display: "grid", gap: "2rem", marginBottom: "2rem" }}>
          <section>
            <Heading as="h2">Project Overview</Heading>
            <p>
              A privacy-first, offline-capable personal investment portfolio
              tracker. All financial data is encrypted locally in the browser
              using AES-256-GCM — no portfolio data ever touches a server. A
              lightweight Cloudflare Worker acts solely as a CORS proxy for Yahoo
              Finance market data with zero knowledge of user data. No
              authentication, no backend database, no recurring cost.
            </p>
          </section>

          <section>
            <Heading as="h2">Key Features</Heading>
            <ul>
              <li>
                <strong>Encrypted Vault</strong> — Binary vault format with FOLI
                magic bytes. PBKDF2-HMAC-SHA256 at 600K iterations (~300-800ms
                unlock). AES-256-GCM via Web Crypto API. CryptoKey marked
                non-extractable, zeroed on lock.
              </li>
              <li>
                <strong>Dashboard & Charts</strong> — Summary metric cards
                (total value, daily G/L, unrealized G/L, realized G/L YTD, income
                YTD, cash). Portfolio value line chart, asset allocation donut,
                monthly income bar chart. Account filter pills + time range
                selector (1D-All). Charts are presentational-only (data via
                props).
              </li>
              <li>
                <strong>Positions & Tax Lots</strong> — Open positions table with
                expandable per-lot breakdown. Tax lot table with acquired date,
                cost basis, unrealized G/L, wash sale flag. Cost basis methods:
                FIFO, LIFO, Specific ID, Average Cost.
              </li>
              <li>
                <strong>Transaction Management</strong> — Full CRUD with type
                badges (Buy, Sell, Dividend, Interest, Transfers, Journals).
                Virtualized table via TanStack Table for large datasets.
              </li>
              <li>
                <strong>CSV Import</strong> — Bank-specific parsers for Schwab,
                Optum, and generic CSV. Schema validation, deduplication by
                external ID.
              </li>
              <li>
                <strong>Google Sheets Sync</strong> — OAuth 2.0 via Google
                Identity Services. Auto-writes account balances to a configurable
                Google Sheet.
              </li>
              <li>
                <strong>Income View</strong> — Year-over-year table, income by
                security, monthly calendar grid. Account and year filters.
              </li>
              <li>
                <strong>PWA & Dark Mode</strong> — Installable with standalone
                manifest. Service Worker caches market data (NetworkFirst, 100
                entries, 1-day TTL). Responsive: collapsible sidebar on desktop,
                bottom tab nav on mobile.
              </li>
              <li>
                <strong>Deterministic Ledger Engine</strong> — Pure function
                rebuilds all derived data (positions, lots, income) from raw
                transactions every time. FIFO lot matching, realized G/L
                computation, roundCurrency() to avoid floating-point drift.
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Technical Architecture</Heading>
            <pre style={{ background: "var(--ifm-color-emphasis-100)", padding: "1rem", borderRadius: "8px", overflow: "auto" }}>
{`Pages → Pinia Stores → Chart Components (presentational only)
                ↓
         Ledger Engine (pure function: recalculateDerivedDataFromTransactions())
                ↓
          Vault Store (encrypt/decrypt via Web Crypto API)
                ↓
      Encrypted .iFolio file (binary: magic bytes + salt + IV + ciphertext)`}
            </pre>
            <p>
              Key architectural decisions: charts never import stores directly
              (data via props), all types in app/types/, ledger engine is a
              deterministic pure function, Cloudflare Worker has zero knowledge
              of user data.
            </p>
          </section>

          <section>
            <Heading as="h2">Project Evolution</Heading>
            <p>
              <strong>Phase 1 — Foundation:</strong> Nuxt 4 SPA scaffold,
              encrypted vault (FOLI binary format, PBKDF2 + AES-256-GCM), vault
              I/O via File System Access API + download fallback, Cloudflare
              Worker skeleton.
            </p>
            <p>
              <strong>Phase 2 — Market Data Pivot:</strong> Originally built
              Schwab OAuth integration. Pivoted to Yahoo Finance — eliminated
              OAuth friction, 60% less Worker code, no KV dependency.
            </p>
            <p>
              <strong>Phase 3 — Dashboard & Views:</strong> Dashboard with
              metric cards and charts, positions with tax lot breakdown, full
              transaction CRUD, income view, settings.
            </p>
            <p>
              <strong>Phase 4 — Polish & Launch:</strong> PWA installable with
              Service Worker, CI/CD pipelines (GitHub Actions → lint → typecheck
              → test → deploy), Google Sheets sync, responsive design, dark mode.
            </p>
          </section>

          <section>
            <Heading as="h2">Key Technical Challenges Solved</Heading>
            <ol>
              <li>
                Deterministic ledger engine that rebuilds all derived data from
                raw transactions on every mutation — ensures consistency.
              </li>
              <li>
                Browser-compatible strong encryption via Web Crypto API — PBKDF2
                at 600K iterations runs entirely client-side.
              </li>
              <li>
                File System Access API for native file save/open on Chromium,
                with download-based fallback for Firefox/Safari.
              </li>
              <li>
                Schwab OAuth → Yahoo Finance pivot — removed all auth
                infrastructure, simplified Worker to transparent proxy.
              </li>
              <li>
                Zero <code>any</code> type policy — every value typed explicitly,
                <code>unknown</code> + narrowing enforced in CI.
              </li>
            </ol>
          </section>

          <section
            style={{
              background: "var(--ifm-color-emphasis-100)",
              border: "1px solid var(--ifm-color-emphasis-300)",
              borderRadius: "12px",
              padding: "1rem",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <Heading as="h2">🤖 AI-Driven Development</Heading>
            <p>
              This project was built entirely through AI pair programming — no
              traditional outsourcing, no large team. It began with careful
              prompt-by-prompt guidance, testing each feature incrementally and
              refining the codebase one interaction at a time.
            </p>
            <p>
              As the codebase matured, the development workflow scaled to
              multiple AI agents working concurrently — one refactoring the
              ledger engine while another built chart components, a third set up
              CI/CD pipelines, all coordinated through clear interfaces and typed
              contracts. What started as guided iteration became a parallel
              multi-agent engineering process.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    4,043
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    AI Interactions
                  </div>
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    224
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    Sessions
                  </div>
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    15.4M
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    Input Tokens
                  </div>
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    1.69M
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    Output Tokens
                  </div>
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    5
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    AI Models
                  </div>
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    48
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    Days
                  </div>
                </div>
              </div>
              <div className="card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <div className="card__body">
                  <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--ifm-color-primary)" }}>
                    $0
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", overflowWrap: "break-word" }}>
                    Total Cost
                  </div>
                </div>
              </div>
            </div>
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
                  <li>Nuxt 4 (SPA)</li>
                  <li>Vue 3</li>
                  <li>TypeScript</li>
                  <li>Pinia</li>
                  <li>Tailwind CSS 4</li>
                  <li>Nuxt UI 4</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Charts & UI</Heading>
                <ul>
                  <li>ApexCharts + vue3-apexcharts</li>
                  <li>TanStack Table v8</li>
                  <li>Lucide + Simple Icons</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Backend</Heading>
                <ul>
                  <li>Cloudflare Worker (TypeScript)</li>
                  <li>Yahoo Finance API</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Security</Heading>
                <ul>
                  <li>Web Crypto API</li>
                  <li>PBKDF2-HMAC-SHA256</li>
                  <li>AES-256-GCM</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Infrastructure</Heading>
                <ul>
                  <li>GitHub Actions (CI/CD)</li>
                  <li>@vite-pwa/nuxt</li>
                  <li>GitHub Pages</li>
                  <li>Cloudflare Workers</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Testing</Heading>
                <ul>
                  <li>Vitest</li>
                  <li>@nuxt/test-utils</li>
                  <li>@cloudflare/vitest-pool-workers</li>
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
