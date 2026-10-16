import React from "react";
import type { JSX } from "react";
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
import { useMotionTier } from "@site/src/components/MotionTier";
import "@fontsource-variable/besley/wght.css";
import besleyLatin from "@fontsource-variable/besley/files/besley-latin-wght-normal.woff2";
import styles from "./index.module.css";

/** The consulting-led homepage. Shell only; each section lives in src/components. */
export default function Home(): JSX.Element {
  const tier = useMotionTier();
  return (
    <Layout
      title="Senior engineering for SaaS teams"
      description="Fadee Kannah, co-founder of CourseKey, joins SaaS teams and ships the work that keeps slipping, from customer requests to AI features. Start with an assessment, a fixed-scope project, or an embedded engagement."
    >
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
        <ConsultingHero />
        <StatsBand />
        <PainGroups />
        <ProofShowcase />
        <EngagementOffers />
        <Testimonials
          heading="What people I’ve worked with say"
          only={["Luke Sophinos", "Anthony Bull", "Cathy Pucher"]}
          hideCta
          tone="onGreen"
        />
        <FitFaq />
        <FinalCta />
        <Contact hideBooking />
      </main>
    </Layout>
  );
}
