import React, { type JSX } from "react";
import Header from "@site/src/components/Header";
import { CTA_MICROCOPY, calUrl } from "@site/src/components/BookCta";

/**
 * STUB (Foundation): wraps the legacy Header with the page's copy so the
 * page keeps working. The Hero builder replaces this file's implementation
 * and must keep the default export and no required props.
 */
export default function ConsultingHero(): JSX.Element {
  return (
    <Header
      headline="Rewiring to AI-first without breaking production?"
      subheadline="I help vertical SaaS teams ship AI into real workflows — faster delivery, same reliability, engineering ownership intact."
      primaryCta={{
        label: "Book a 30-min fit call",
        href: calUrl("close"),
        external: true,
      }}
      secondaryCta={{
        label: "See how we work",
        href: "#engagements",
        external: false,
      }}
      microcopy={CTA_MICROCOPY}
    />
  );
}
