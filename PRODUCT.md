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

- Home (`src/pages/index.tsx`): the consulting-led page: hero, stats band with selected-work logos, pain groups, proof showcase, engagement offers, testimonials, fit FAQ, closing CTA, contact.
- Showcase (`src/pages/showcase/`): the index plus five write-ups (`ai-assistant`, `videoarchiver`, `ifolio`, `agent-platform`, `meetinghero`), with smaller builds and recognition on the index. Data in `src/data/showcase.ts`. Case Studies are their own top-level nav item.
- Blog docs at `/blog` (`docs/`, `sidebars.ts`), About (`src/pages/about.tsx`), plus goals, podcasts, summit, years, card, 653-timberfalls-for-rent. `datingProfile` was intentionally removed (commit "Remove dating page"); its images now live under `docs/Yearly/2024/`.
- Technical constraints: Docusaurus 3.10.2 + React 19 + TypeScript strict, static export to `build/`, `onBrokenLinks: throw`, English-only, gtag `G-QRPFQQWH20`.

Explicitly undecided: role and prominence of personal routes (`card`, `653-timberfalls-for-rent`, `years`, `goals`, `summit`) in the consulting funnel — preserve routes, do not assume funnel relevance.

## Brand Commitments

- Name: Mr. Kannah / Fadee Kannah, footer `Fadee Kannah © <year>`.
- Tagline: "Guiding Teams and Individuals to Success".
- Voice: direct, results-quantified (3x faster, 40-60% cost reduction, 50%+ delivery speed).
- Assets: `img/logo.svg` / `img/logoDark.svg`, `img/favicon.ico`, `img/fadee.jpg` social card.
- Binding CTA pattern: external links use `target="_blank" rel="noopener noreferrer"`, primary CTA to cal.com 30min.

## Evidence on Hand

Real proof that must not be fabricated, with paths:

- Stats: years building software (counted live from June 2008), $100M+ raised by companies built for ($30M CourseKey, ~$70M American Growth Insurance), 2 US patents as co-inventor (`src/components/StatsBand`). The "40-60% infrastructure cost reduction" stat was removed on 2026-10-21 (it named no engagement); do not reintroduce it without one.
- Testimonials: `src/components/Testimonials/index.tsx`.
- Client logos: `src/components/LogosCarousel/index.tsx`.
- Founder story: Iraq → Turkey → US refugee via UN (2008), ESL to top of class, SDSU Computer Engineering + CS, web business, CourseKey technical co-founder (`src/pages/about.tsx`).
- Showcase facts (`src/data/showcase.ts`): the AI assistant is the American Growth Insurance project (4 weeks; the case study is approved as written); the agent platform (8 days, four industries) names no client; both are built on the Suna agent framework (fadeenk/suna is a fork of kortix-ai/suna taken under Apache-2.0; upstream has since changed its license, so never call it "open source" and name no license, at Fadee's request); VideoArchiver (Fadee's own live product at videoarchiver.mrkannah.com, a product of Kannah Consulting; built since June 2026; 932 commits, 219 naming a Claude model as co-author and 16 by Google's Jules, counted 2026-10-24; Free plan and Pro at $2.99 per device per month; product claims only in the live landing page's own words; how it is built stays private, so the page names stack tools and no architecture, and it names no store, install button or launch date); iFolio (48 days, 224 AI sessions, 5 models; live app and repo are public); MeetingHero.ai (launched May 17, 2025; 39 users; shut down October 2025). PureFrame is made with Lawrence Benjamin.
- CourseKey and after (`src/pages/about.tsx`): $9M Series B led by SignalFire, 200+ career colleges, "architected the platform" (TechCrunch, 2021-03-03); two US patents as co-inventor (US10212542B2, US10551496B2); PSG's investment announced 2025-01-07 ($30M exit); MeetingHero.ai built Dec 2024, launched May 2025, shut down Oct 2025 with 39 users (its shutdown statement); clients Atomic, Portico, American Growth Insurance.
- Contact: `src/components/Contact/index.tsx`, Gallery where used.

Absences future work must not invent: no fabricated client names, testimonials, benchmarks, pricing, or licensing beyond what components/docs contain.

## Product Principles

1. Proof over claims — every promise pairs with a stat, logo, testimonial, or shipped showcase item.
2. Operator accountability — advice is backed by hands-on building and production ownership.
3. Speed to fundable value — prioritize fastest path to launch, measurable cost/perf gain, and team velocity.
4. Flexible entry, clear next step — three engagement models, one primary action: talk.
surable cost/perf gain, and team velocity.
4. Flexible entry, clear next step — three engagement models, one primary action: talk.
