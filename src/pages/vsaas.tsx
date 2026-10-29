import React from "react";
import type { JSX } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { PageMetadata } from "@docusaurus/theme-common";
import Testimonials from "@site/src/components/Testimonials";
import Contact from "@site/src/components/Contact";
import ConsultingHero from "@site/src/components/ConsultingHero";
import StatsBand from "@site/src/components/StatsBand";
import PainGroups, { type Situation } from "@site/src/components/PainGroups";
import ProofShowcase from "@site/src/components/ProofShowcase";
import FitFaq from "@site/src/components/FitFaq";
import FinalCta from "@site/src/components/FinalCta";
import NoIndex from "@site/src/components/NoIndex";
import { useMotionTier } from "@site/src/components/MotionTier";
import { VCARD_HREF } from "@site/src/data/card-contact";
import "@fontsource-variable/besley/wght.css";
import besleyLatin from "@fontsource-variable/besley/files/besley-latin-wght-normal.woff2";
import styles from "./index.module.css";

/**
 * Remove after the Vertical Software Summit (Miami, Nov 4–5, 2026): set to
 * null and the hero ends at the booking microcopy.
 */
const SUMMIT_LINE: string | null =
  "At the Vertical Software Summit in Miami, Nov 4–5? Find me there, or book a call for after.";

/*
 * The homepage's problem rows, retold for vertical software. Same rule: each
 * is a published case study, and the facts come only from:
 *   - Portico: src/pages/case-studies/portico-embedded-retainer.tsx
 *   - AGI:     src/pages/case-studies/american-growth-insurance.tsx
 */
const SITUATIONS: readonly Situation[] = [
  {
    quote:
      "Every customer wants something specific to their world, and the roadmap can’t absorb all of it.",
    body: "Custom reports, edge cases, documentation. Your engineers stay on the roadmap, and your customers still get what they asked for.",
    client: "Portico",
    href: "#proof-portico",
  },
  {
    quote: "The integrations our customers ask for keep slipping.",
    body: "Your customers already run other systems, and they want yours to plug in. For Portico that meant LTI 1.3 for D2L Brightspace and work on Canvas.",
    client: "Portico",
    href: "#proof-portico",
    jump: "See the integrations I built for Portico",
  },
  {
    quote:
      "We want AI inside the product our customers already use, not a separate tool.",
    body: "A demo on the side is easy. In your product it has to work with your sign-in and be safe to put in front of customers.",
    client: "American Growth Insurance",
    href: "#proof-agi",
  },
];

/**
 * /vsaas: the homepage told to vertical software founders and operators,
 * for people Fadee meets at events. Reachable by link and QR only: noindex
 * and out of the sitemap. Every booking button carries `variant=vsaas`.
 */
export default function Vsaas(): JSX.Element {
  const tier = useMotionTier();
  return (
    <Layout
      title="Senior engineering for vertical SaaS"
      description="CourseKey co-founder Fadee Kannah joins vertical SaaS teams and builds what their customers ask for next: custom work, integrations and AI features inside the product."
    >
      <NoIndex />
      <PageMetadata image="/img/og/vsaas.png" />
      <Head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={besleyLatin}
          crossOrigin="anonymous"
        />
      </Head>
      <main className={styles.root} data-tier={tier}>
        <ConsultingHero
          titleLines={[
            "I co-founded a vertical SaaS company.",
            "Now I build for yours.",
          ]}
          longTitle
          sub="I'm Fadee Kannah, technical co-founder of CourseKey, where I built the platform from concept to scale for 200+ career colleges. I join SaaS teams and build what they need next, from customer requests to AI features. Your team reviews everything I write before it ships."
          variant="vsaas"
          secondary={{ label: "Save my contact", href: VCARD_HREF }}
          fit={SUMMIT_LINE}
        />
        <StatsBand />
        <PainGroups situations={SITUATIONS} />
        <ProofShowcase />
        <Testimonials
          heading="What people I’ve worked with say"
          only={["Luke Sophinos", "Anthony Bull"]}
          hideCta
          tone="onGreen"
        />
        <FitFaq />
        <FinalCta variant="vsaas" />
        <Contact hideBooking />
      </main>
    </Layout>
  );
}
