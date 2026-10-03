---
target: /consulting re-run
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\fadee\\Documents\\gitProjects\\mrKannahV4\\src\\pages\\consulting.tsx"
target_fingerprint: "sha256:a25ec6341fd06f963f1f197f0a6fb6bc82fe6df9e3b2b17aaef87e33d0b5bc2b"
target_path: "C:\\Users\\fadee\\Documents\\gitProjects\\mrKannahV4\\src\\pages\\consulting.tsx"
timestamp: 2026-09-18T01-41-10Z
slug: src-pages-consulting-tsx
---
Method: dual-agent (A: ses_f4dd5689effeyMhkiRfWNOH4Ub · B: ses_f4dd56886ffemSNtr0egz7dO4h)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | 4 identical CTAs, no location signal in decision |
| 2 | Match System / Real World | 3 | NRR defined; AI-assisted triage still vague |
| 3 | User Control and Freedom | 2 | No intra-page nav or fallback contact; single external exit |
| 4 | Consistency and Standards | 3 | Unified CTA; 3 card anatomies diverge |
| 5 | Error Prevention | 3 | ?variant param likely does nothing |
| 6 | Recognition Rather Than Recall | 2 | Must hold pain routes + price math across scroll |
| 7 | Flexibility and Efficiency | n/a | Persuade static surface |
| 8 | Aesthetic and Minimalist Design | 2 | 7-9 facts per card; dense proof paragraphs |
| 9 | Error Recovery | 2 | cal.com failure is dead-end, no preserved intent |
| 10 | Help and Documentation | 2 | 2-item FAQ; regulated-buyer gaps |
| **Total** | | **22/36** | **Acceptable (61%)** |

## Design Specificity Verdict

Copy now authored for Kannah (vertical SaaS, sandboxed rollout, eval harness, NRR defined, repo+CI+one counterpart) but composition still generic Infima template: hero → stats → 3-grid → 2-grid → stacked cards → closer. No operator artifact, before/after, repo texture, or founder voice. Competitor could swap nouns and ship unchanged. Improved vs 21/36 baseline: bands/grids/elevated cards land, CTA unified with variant + microcopy, 3 pain groups scannable, a11y + dark tokens fixed, proof strip correctly placed.

Deterministic scan: exit 0, 0 findings, no false positives. Detector caught nothing the review missed.

Visual overlays: no reliable overlay available (CLI-only detector, injection skipped by design). Browser localhost render succeeded on title and hero/CTA styles with 0 console errors, but served stale build/ (11,718 bytes, old .card copy without engagement-grid/services-grid/stats-grid), so measurements describe the old page, not current source. Rebuild required to validate.

## Overall Impression

Foundation shippable, conversion risk now concentrated. Repetition is intentional for Persuade and grouping works, but the engagement fork (Assessment $4-7.5k vs Embedded ~$20-24k as two equals) plus anonymous metric-free proof leaves a CTO informed but not convinced. +1 (21→22/36); next gains come from guidance + proof, not layout.

## What's Working

1. Unified CTA system: one component, one label, 30-min + 48h microcopy with per-variant tweak. Learnable.
2. Proof strip placement: 18+ / $45M+ / 40-60% + showcase/about + LogosCarousel directly under hero. Correct Persuade order.
3. Pain grouping: Stuck pilots / Delivery at risk / Flat growth with →Assessment/Retainer/Either routing. Real improvement over wall.

## Priority Issues

- **[P1] Proof still anonymous and metric-free** — Why: proof-over-claims principle violated at $20k decision; no names/logos/quotes/numbers. Fix: one stat + showcase link + testimonial pull per story, or explicit withheld-note. Suggested command: $impeccable clarify
- **[P1] Engagement fork with no guidance** — Why: two equal card--elevated blocks force diffing 6 vs 3 bullets + math; most bounce to book-and-ask. Fix: Start-here chooser, recommended badge/tonal weight, collapse to You-get/You-need/Timeline with disclosed notes. Suggested command: $impeccable layout
- **[P1] 3 labels 1 URL variant illusion** — Why: ?variant= likely unread by cal.com; same destination erodes trust. Fix: verify handling or use distinct event types + email fallback. Suggested command: $impeccable harden
- **[P2] Pricing math on user** — Why: hourly × hours × weeks vs fixed range forces mental multiplication; Range-moves-with vague. Fix: total-first per card, hourly math to footnote, concrete range drivers. Suggested command: $impeccable clarify

## Persona Red Flags

**Jordan:** question-H1 with no 5s plain answer; eval-harness/blast-radius jargon; no help beyond 2 FAQs; new-tab calendar with no next-step confirmation. Hesitates at grid.
**Riley:** refresh loses position (no section ids); ?variant= mismatch; no LogosCarousel/cal.com fallbacks; 4 identical tabs if CTAs clicked repeatedly.
**Casey:** hero-left vs closer-centered CTA inconsistency; long 1-col cards, no sticky CTA or state after interruption; re-read burden after app switch.
**Maya (CTO):** fit line speaks to her but zero reliability metrics, no security/IP/compliance beyond one line, FAQ dodges data/prod-access. Will not book without reassurance.

## Minor Observations

- .stat-label uses emphasis-200 hairline color, likely fails 4.5:1. CtaButtons center logic obscure. Pain h3 vs Heading h3 inconsistency. No section ids, no #assessment deep-links. Double-rule stats-bar + carousel border. FAQ should be details, not heavy cards.

## Questions to Consider

- What if the page recommended one starting point instead of two equals?
- What would confident proof look like with a single number per story?
- Does ?variant= change anything on cal.com — and if not, what should?
- What if engagement cards were 3 lines with details disclosed on demand?
