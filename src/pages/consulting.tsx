import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Testimonials from "@site/src/components/Testimonials";
import Contact from "@site/src/components/Contact";
import ConsultingHero from "@site/src/components/ConsultingHero";
import StatsBand from "@site/src/components/StatsBand";
import PainGroups from "@site/src/components/PainGroups";
import EngagementOffers from "@site/src/components/EngagementOffers";
import ProofShowcase from "@site/src/components/ProofShowcase";
import FitFaq from "@site/src/components/FitFaq";
import FinalCta from "@site/src/components/FinalCta";
import { useHasMotionClass } from "@site/src/components/MotionTier";
import "@fontsource-variable/besley/wght.css";
import besleyLatin from "@fontsource-variable/besley/files/besley-latin-wght-normal.woff2";
import styles from "./consulting.module.css";

import React from "react";
import type { JSX } from "react";

/**
 * /consulting: draft of the consulting-led homepage. Shell only; each
 * section lives in src/components. Draft stays out of search (noindex) and
 * out of the navbar until it replaces `/`.
 */
export default function Consulting(): JSX.Element {
  useHasMotionClass();
  return (
    <Layout
      title="AI Delivery Consulting for SaaS Teams"
      description="Kannah Consulting helps SaaS engineering teams ship AI into production without sacrificing reliability. Assessment, project-based, and embedded delivery engagements."
    >
      <Head>
        <meta name="robots" content="noindex" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={besleyLatin}
          crossOrigin="anonymous"
        />
      </Head>
      <main className={styles.root}>
        <ConsultingHero />
        <StatsBand />
        <PainGroups />
        <EngagementOffers />
        <ProofShowcase />
        <Testimonials />
        <FitFaq />
        <FinalCta />
        <Contact />
      </main>
    </Layout>
  );
}
