/*
 * The published case studies, in /consulting order (Portico, AGI).
 * One source for everything shown about a study outside its own page: the
 * /case-studies index and the "More case studies" row at the foot of each
 * study. The index fields are the `indexEntry` copy in
 * docs/superpowers/specs/2026-10-15-case-studies-copy.md, and every fact in
 * them comes from the study pages themselves:
 *   - Portico:  src/pages/case-studies/portico-embedded-retainer.tsx
 *   - AGI:      src/pages/case-studies/american-growth-insurance.tsx
 */

export type CaseSlug =
  | "portico-embedded-retainer"
  | "american-growth-insurance";

/** Exactly the /consulting offer names (EngagementOffers), one per study. */
export type EngagementLabel =
  | "Embedded Delivery Partner"
  | "Fixed-Scope Project";

export type CaseLogo = {
  /** Site path, without the base URL. */
  src: string;
  /** Intrinsic pixel size of the file (width/height attributes). */
  width: number;
  height: number;
  /** A long wordmark (about 15:1): set at cap height on the plate. */
  wide?: boolean;
};

export type CaseStudyEntry = {
  slug: CaseSlug;
  path: `/case-studies/${CaseSlug}`;
  client: string;
  logo: CaseLogo;
  /**
   * The engagement in a phrase: the index row's H2 and the "More case
   * studies" title. Not the study's H1, which each page passes to
   * CaseMasthead as `headline`.
   */
  headline: string;
  engagement: EngagementLabel;
  /** The study's lead figure with its unit, set as a Besley numeral. */
  numeral: string;
  /** Completes the numeral as a phrase ("24 initiatives" + this). */
  numeralLabel: string;
  /** One or two sentences on what changed. */
  outcome: string;
};

export const CASE_STUDIES: readonly CaseStudyEntry[] = [
  {
    slug: "portico-embedded-retainer",
    path: "/case-studies/portico-embedded-retainer",
    client: "Portico",
    logo: { src: "/img/logos/portico.png", width: 600, height: 252 },
    headline: "Two years embedded with Portico’s Success team",
    engagement: "Embedded Delivery Partner",
    numeral: "24 initiatives",
    numeralLabel: "in 9 months, for the Success team",
    outcome:
      "I take the Success team’s customer requests from plan to deploy, and the reports and fixes I ship leave Portico’s clients happier.",
  },
  {
    slug: "american-growth-insurance",
    path: "/case-studies/american-growth-insurance",
    client: "American Growth Insurance",
    logo: {
      src: "/img/case-studies/agi-logo.svg",
      width: 885,
      height: 57,
      wide: true,
    },
    headline: "A product American Growth Insurance could demo in stealth",
    engagement: "Fixed-Scope Project",
    numeral: "4 weeks",
    numeralLabel: "to a working AI assistant inside their app",
    outcome:
      "They used it with about 10 design-partner agencies while in stealth, then launched with ~$70M from Atomic and Rockbridge Growth Equity.",
  },
];

export function getCaseStudy(slug: CaseSlug): CaseStudyEntry {
  const study = CASE_STUDIES.find((entry) => entry.slug === slug);
  if (!study) {
    throw new Error(`Unknown case study: ${slug}`);
  }
  return study;
}

/** Every study except `slug`, in registry order. */
export function otherCaseStudies(slug: CaseSlug): readonly CaseStudyEntry[] {
  return CASE_STUDIES.filter((entry) => entry.slug !== slug);
}
