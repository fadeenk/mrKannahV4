# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences are equally weighted:

- **Startup founders** evaluating a consultant to launch an MVP faster — AI-powered SaaS, platforms, or enterprise solutions — structured for funding readiness.
- **Engineering leaders (CTOs, VPs Eng, founders acting as CTO)** modernizing legacy to cloud-native, reducing infra cost, improving performance, and enabling teams.

Secondary visitors: proof-seekers browsing showcase, blog (`/blog`), about, podcasts, and contact to validate credibility before booking.

Situation: visitor lands on mrkannah.com to decide whether to book a free consultation for project-based, advisory, or embedded help.

## Product Purpose

Personal portfolio and consulting acquisition site for Fadee Kannah (Mr. Kannah, mrkannah.com, tagline: "Guiding Teams and Individuals to Success").

What it does: explains services, engagement models, proof, and story, and routes to `https://cal.com/kannah/30min` for a free consultation and `/#engagements` for engagements.

Success means: qualified consultation booked → consulting engagement started.

## Positioning

Operator who ships — 18+ years building and scaling software companies, technical co-founder of CourseKey (conception to scaled infra/systems), who both advises and codes hands-on from concept to production AI.

A generic agency sells capacity; this product sells founder-to-production accountability across architecture, AI, and team enablement.

## Operating Context

- Workflows: land → read services/proof → book via cal.com 30min link, or view `/#engagements`, `/showcase/*`, `/about`, `/blog`.
- Engagement models offered: Project Based (defined MVP/features/overhaul), Strategic Advisory (fractional CTO, architecture/roadmap), Contractor Engagement (embedded velocity + mentoring, hourly/retainer).
- Service lines: MVP Development & Launch; Technical Architecture & Modernization; AI Integration & Strategy; Engineering Team Enablement; Fractional CTO & Technical Leadership.
- Domains cited: healthcare, e-commerce, enterprise.
- Entry: static Docusaurus site served at `https://mrkannah.com`, base `/`, local dev `npm start`, build `npm run build`.

## Capabilities and Constraints

Confirmed functionality:

- Home (`src/pages/index.tsx`): the consulting-led page: hero, stats band with client logos, pain groups, proof showcase, engagement offers, testimonials, fit FAQ, closing CTA, contact.
- Showcase (`src/pages/showcase/`): index + Apps, Businesses, Hardware, Other, Websites, Awards, iFolio, CustomizableAgenticPlatform, SuperAgentIntegration.
- Blog docs at `/blog` (`docs/`, `sidebars.ts`), About (`src/pages/about.mdx`), plus goals, podcasts, summit, years, card, datingProfile, 653-timberfalls-for-rent.
- Technical constraints: Docusaurus 3.10.2 + React 19 + TypeScript strict, static export to `build/`, `onBrokenLinks: throw`, English-only, gtag `G-QRPFQQWH20`.

Explicitly undecided: role and prominence of personal routes (`datingProfile`, `card`, `653-timberfalls-for-rent`, `years`, `goals`, `summit`) in the consulting funnel — preserve routes, do not assume funnel relevance.

## Brand Commitments

- Name: Mr. Kannah / Fadee Kannah, footer `Fadee Kannah © <year>`.
- Tagline: "Guiding Teams and Individuals to Success".
- Voice: direct, results-quantified (3x faster, 40-60% cost reduction, 50%+ delivery speed).
- Assets: `img/logo.svg` / `img/logoDark.svg`, `img/favicon.ico`, `img/fadee.jpg` social card.
- Binding CTA pattern: external links use `target="_blank" rel="noopener noreferrer"`, primary CTA to cal.com 30min.

## Evidence on Hand

Real proof that must not be fabricated, with paths:

- Stats: years building software (counted live from June 2008), $100M+ raised for clients, 40-60% infra reduction (`src/components/StatsBand`).
- Testimonials: `src/components/Testimonials/index.tsx`.
- Client logos: `src/components/LogosCarousel/index.tsx`.
- Founder story: Iraq → Turkey → US refugee via UN (2008), ESL to top of class, SDSU Computer Engineering + CS, web business, CourseKey technical co-founder (`src/pages/about.mdx`).
- Contact: `src/components/Contact/index.tsx`, Gallery where used.

Absences future work must not invent: no fabricated client names, testimonials, benchmarks, pricing, or licensing beyond what components/docs contain.

## Product Principles

1. Proof over claims — every promise pairs with a stat, logo, testimonial, or shipped showcase item.
2. Operator accountability — advice is backed by hands-on building and production ownership.
3. Speed to fundable value — prioritize fastest path to launch, measurable cost/perf gain, and team velocity.
4. Flexible entry, clear next step — three engagement models, one primary action: talk.
