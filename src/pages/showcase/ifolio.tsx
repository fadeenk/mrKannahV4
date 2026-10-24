import React, { type JSX } from "react";
import CaseStudyLayout, {
  CaseFootLink,
  CaseHeader,
  CaseList,
  CaseStack,
  SpineSection,
  type CaseFactRow,
  type CaseListItem,
  type CaseStackGroup,
} from "@site/src/components/CaseStudy";
import FactValue from "@site/src/components/FactValue";
import { ArrowRight } from "@site/src/components/Icons";
import ShowcaseRecording from "@site/src/components/ShowcaseRecording";
import { IFOLIO_RECORDING, getProject } from "@site/src/data/showcase";
import styles from "./showcase.module.css";

/*
 * iFolio, rewritten from the old page. No screenshots: the captures the old
 * page used show real account balances and account numbers. The recording
 * runs on a generated, made-up portfolio (see IFOLIO_RECORDING), and the
 * figure below it draws the trust boundary: what stays on the device, and the
 * two things outside it. The token counts and "$0 total cost" from the old
 * page are left out; the sessions, days and models stay. "Never reaches a
 * server" is not claimed: prices come through a Worker, and Sheets sync is
 * opt-in. The video's own lines ("can't see your portfolio", "Gone from
 * memory") are kept, since that figure sits right under it.
 */

const PROJECT = getProject("ifolio");

const FACTS: readonly CaseFactRow[] = [
  ...PROJECT.facts
    .filter((fact) => fact.label !== "Stack" && fact.label !== "Length")
    .map((fact) => ({
      label: fact.label,
      value: <FactValue fact={fact} />,
    })),
  { label: "Built", value: "48 days, 224 AI sessions, 5 models" },
];

const FLOW: readonly { name: string; text: string }[] = [
  {
    name: "Pages and stores",
    text: "The dashboard, positions, transactions and income. Charts receive their data as props and never touch the stores.",
  },
  {
    name: "Ledger engine",
    text: "One pure function rebuilds positions, tax lots and income from the raw transactions every time anything changes.",
  },
  {
    name: "Vault",
    text: "Encrypts and decrypts with the Web Crypto API. The key is not extractable, and it is cleared when you lock.",
  },
  {
    name: "Encrypted file",
    text: "Your portfolio on your device: magic bytes, salt, IV and ciphertext in one .iFolio file.",
  },
];

const OUTSIDE: readonly { name: string; text: string }[] = [
  {
    name: "Cloudflare Worker",
    text: "Relays price requests for ticker symbols from Yahoo Finance. It never sees your balances or transactions.",
  },
  {
    name: "Google Sheets, optional",
    text: "Account balances are written to a sheet you choose, only if you turn sync on.",
  },
];

const DOES: readonly CaseListItem[] = [
  {
    fact: "An encrypted vault.",
    detail:
      "The key comes from your passphrase (PBKDF2-HMAC-SHA256, 600,000 iterations), and the data is sealed with AES-256-GCM.",
  },
  {
    fact: "Tax lots and cost basis.",
    detail:
      "Open positions expand into their lots, with FIFO, LIFO, Specific ID and Average Cost, and a flag for wash sales.",
  },
  {
    fact: "Imports and sync.",
    detail:
      "Bank-specific CSV parsers for Schwab and Optum plus a generic one, with duplicates removed, and balances written to a Google Sheet through OAuth 2.0.",
  },
  {
    fact: "Dashboard, positions and income.",
    detail:
      "Value over time, allocation and monthly income, with filters by account and period.",
  },
  {
    fact: "Installable and responsive.",
    detail:
      "A PWA with dark mode, a collapsible sidebar on desktop and a bottom tab bar on phones.",
  },
];

const BUILT_WITH_AI: readonly CaseListItem[] = [
  {
    fact: "224 sessions across 5 AI models.",
    detail:
      "I began with careful prompt-by-prompt guidance, testing each feature as it landed.",
  },
  {
    fact: "Several agents at once.",
    detail:
      "Later one agent refactored the ledger engine while another built the charts and a third set up CI/CD, held together by typed interfaces.",
  },
];

const STACK: readonly CaseStackGroup[] = [
  {
    title: "Frontend",
    items: [
      "Nuxt 4 (SPA)",
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Tailwind CSS 4",
      "Nuxt UI 4",
    ],
  },
  {
    title: "Charts and tables",
    items: ["ApexCharts", "TanStack Table v8"],
  },
  {
    title: "Backend",
    items: ["Cloudflare Worker (TypeScript)", "Yahoo Finance API"],
  },
  {
    title: "Security",
    items: ["Web Crypto API", "PBKDF2-HMAC-SHA256", "AES-256-GCM"],
  },
  {
    title: "Infrastructure",
    items: [
      "GitHub Actions (CI/CD)",
      "@vite-pwa/nuxt",
      "GitHub Pages",
      "Cloudflare Workers",
    ],
  },
  {
    title: "Testing",
    items: ["Vitest", "@nuxt/test-utils", "@cloudflare/vitest-pool-workers"],
  },
];

export default function IFolio(): JSX.Element {
  return (
    <CaseStudyLayout
      variant="work"
      title="iFolio: a portfolio tracker in your browser"
      description="iFolio tracks an investment portfolio in the browser, with your portfolio encrypted on your device. I built it with AI agents in 48 days."
      image="/img/og/ifolio.png"
    >
      <CaseHeader
        title="iFolio: a portfolio tracker that runs in your browser"
        lede="iFolio tracks an investment portfolio in the browser. Your portfolio is encrypted on your device with AES-256-GCM. I built it with AI agents in 48 days."
        facts={FACTS}
      />

      <ShowcaseRecording recording={IFOLIO_RECORDING} />

      <figure className={styles.flowFigure}>
        <div className={styles.device}>
          <p className={styles.deviceLabel}>Your device</p>
          <ol className={styles.flow}>
            {FLOW.map((step, i) => (
              <li key={step.name} className={styles.flowStep}>
                <p className={styles.flowName}>{step.name}</p>
                <p className={styles.flowText}>{step.text}</p>
                {i < FLOW.length - 1 ? (
                  <ArrowRight className={styles.flowArrow} />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
        <p id="ifolio-outside" className={styles.outsideLabel}>
          Outside your device
        </p>
        <ul className={styles.outside} role="list" aria-labelledby="ifolio-outside">
          {OUTSIDE.map((item) => (
            <li key={item.name} className={styles.outsideItem}>
              <p className={styles.outsideName}>{item.name}</p>
              <p className={styles.outsideText}>{item.text}</p>
            </li>
          ))}
        </ul>
        <figcaption className={styles.flowCaption}>
          How data moves. Your transactions stay inside the box; the two
          services outside it see only what is listed under them.
        </figcaption>
      </figure>

      <SpineSection scrub title="What it does">
        <p>
          Everything you see is calculated in the browser from your own
          transactions and public prices.
        </p>
        <CaseList items={DOES} />
      </SpineSection>

      <SpineSection scrub title="How it’s built">
        <p>
          Every number on screen is rebuilt from the raw transactions by one
          pure function, so positions, tax lots and income can’t drift apart.
          The code is TypeScript with no <code>any</code>, enforced in CI.
        </p>
        <p>
          I first built a Schwab OAuth integration for market data, then
          switched to Yahoo Finance. That removed the sign-in to maintain and
          about 60% of the Worker code.
        </p>
      </SpineSection>

      <SpineSection scrub title="Built with AI agents">
        <p>
          I built iFolio entirely through AI pair programming, with no team
          and no outsourcing.
        </p>
        <CaseList items={BUILT_WITH_AI} />
      </SpineSection>

      <CaseStack groups={STACK} />

      <CaseFootLink to="/showcase">Back to all work</CaseFootLink>
    </CaseStudyLayout>
  );
}
