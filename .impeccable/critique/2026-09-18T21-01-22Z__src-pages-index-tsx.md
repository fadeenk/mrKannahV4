---
target: homepage
total_score: 20
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\fadee\\Documents\\gitProjects\\mrKannahV4\\src\\pages\\index.tsx"
target_fingerprint: "sha256:d86f67cea440c86cfeaf1b562ae7ea8c83588341a7cc0df3272782106874e29e"
target_path: "C:\\Users\\fadee\\Documents\\gitProjects\\mrKannahV4\\src\\pages\\index.tsx"
timestamp: 2026-09-18T21-01-22Z
slug: src-pages-index-tsx
closed: true
---
Method: dual-agent (A: ses_f4a100aa2ffew19hiwM5Snr8Uy · B: ses_f49af183bffe0kDNEYcEfFTG1P)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | 7 identical Book CTAs, no state; #engagements jump has no position cue |
| 2 | Match System / Real World | 3 | Fluent pain language; leaks: Shipped like:, → Assessment, variant=close |
| 3 | User Control and Freedom | 2 | cal.com new-tab trap, no back-to-top, marquee hover-only pause |
| 4 | Consistency and Standards | 2 | 5 labels for one action; 3 button contracts; blue #1976d2 one-off |
| 5 | Error Prevention | 2 | Contact Send disabled with no hint; no privacy note |
| 6 | Recognition Rather Than Recall | 2 | Must remember → Assessment/Project/Retainer mapping to #engagements |
| 7 | Flexibility and Efficiency | n/a | Persuade surface, no expert workflow |
| 8 | Aesthetic and Minimalist Design | 2 | 11+ sections; 35-pill Skills wall + 5 testimonials bury offer |
| 9 | Error Recovery | 2 | Contact preserves + mailto fallback good; cal.com failure has no fallback |
| 10 | Help and Documentation | 3 | Fit/non-fit + 2 FAQs reassure; too thin on process/pricing-shape |
| **Total** | | **20/36 (55%)** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Words are authored for this product — sandboxed rollout, eval harness, rollback plan, in your repo to prod. Visual system is interchangeable below StatsBar: generic card-elevated grids, tag-pill soup, emoji skill icons, purple Built-with-AI badge, blue View Details link, tilted testimonials. Reads as two sites stacked: consulting-acquisition top, freelancer-portfolio bottom. Missed character: production-safety as visual idea appears nowhere except copy.

**Deterministic scan:** CLI 17 advisory findings across Header, FeaturedWork, Skills, Testimonials, index.tsx — 11x design-system-font-size (1.1rem, 0.95rem, 1.2rem, 0.8rem, 0.9rem, 2rem, 30px, 1.75rem), 4x design-system-color (#667eea, #764ba2, #fff x2), 3x design-system-radius (10px x2, 0.15em). Browser detect.js on https://mrkannah.com/: [impeccable] 12 anti-patterns — low-contrast 2.8:1 #fff on #3cad6e (ctaButton.primary), low-contrast 3.7:1 #fff on #667eea, low-contrast #1c1e21 on #2e8555 (5x), buried-raster img.character opacity 0, line-length 92 chars hero__subtitle (3x) and 111 chars p (4x), skipped-heading h2→h4 Engagement Models and Technical Expertise, AI purple palette, marquee infinite loop. Detector caught what LLM missed: contrast math, heading skips, line-length, buried raster. No false-positive dismissals; CLI advisory-only is real drift from DESIGN.md ramp.

**Visual overlays:** Injection succeeded in fresh tab_5 on production URL; overlays visible in [Human] tab highlighting contrast, line-length, heading, marquee issues.

## Overall Impression

Strong consulting spine (Pain → Offer → Proof) with direct, de-risking copy. Biggest opportunity: end the page at the close CTA and move portfolio tail to linked pages — momentum currently dies in Skills/Testimonials after the ask.

## What's Working

1. Pain → Offer → Proof chain maps 1:1; Shipped like: lines pre-sell Assessment.
2. Engagement cards answer right objections: You get / You need / Timeline + details + Start here nudge.
3. CTA microcopy intent (30 min · proposal in 48h) repeated correctly for reassurance.

## Priority Issues

- **[P1] One conversion, five names + Contact-form competitor**
  Why it matters: splits click equity, users wonder if paths differ in price/commitment.
  Fix: one label everywhere (Book a 30-min fit call), one microcopy verbatim; demote Contact to Prefer email? below cal CTA.
  Suggested command: $impeccable clarify

- **[P1] Portfolio tail buries consulting offer**
  Why it matters: 4 extra viewports after Turn your AI pilot into production kill founder momentum; visual language flips to marketplace.
  Fix: cut homepage to Proof → Fit/FAQ → close + Contact; move Skills/Testimonials/FeaturedWork full to /showcase + /about; keep max 1 testimonial inline.
  Suggested command: $impeccable distill

- **[P1] Testimonials interaction excludes keyboard/touch/reduced-motion**
  Why it matters: mobile never sees hover color; keyboard gets shrunken overlapping cards; tilt contradicts Quiet Authority.
  Fix: flat card-elevated, full-opacity photos, static names, cap 2-3, heading to What engineering leaders say, add focus-visible + reduced-motion.
  Suggested command: $impeccable harden

- **[P2] StatsBar + LogosCarousel legibility and trust gap**
  Why it matters: first trust signal washed out (emphasis-200 on green) and unsubstantiated ($45M+, 40-60% no scope/date).
  Fix: inverse high-contrast labels, prefers-reduced-motion no marquee + focus pause, add captions Across X SaaS orgs 2019–2026 or drop to 2 numbers with proof links.
  Suggested command: $impeccable audit

## Persona Red Flags

**Jordan (First-Timer):** Numbers without context then → Assessment pills with no explainer; cal.com new-tab with no agenda; FAQ misses How much / How long / pre-prod redirect.

**Casey (Mobile):** Portrait pushes CTA below fold at 390px; testimonial negative margins overflow; Contact inputs width 20.4rem overflow 320-360px; no autocomplete; no sticky thumb-zone booking.

**Riley (Stress Tester):** Three Book URLs differ only by ?variant= ignored by cal.com — silently same; Contact refresh loses message; dark-mode white button contrast risk; hover-only testimonial has no focus equivalent.

## Minor Observations

- FeaturedWork View Details #1976d2 breaks one-green rule; iFolio gradient badge string-match fragile.
- 4 microcopy variants across identical buttons — unify verbatim.
- Contact inputs class passwordProtectedDoc copy-paste, undefined vars, label without htmlFor/id, h3 hierarchy skip.
- Proof heading too terse; CtaButtons center prop precedence brittle; particle canvas no reduced-motion guard.

## Questions to Consider

- What if homepage ended at Turn your AI pilot into production + one button?
- What would production-safe visual language look like as rollout metaphor reused as selector?
- If every button said identical 5 words with inline 3-bullet agenda, which variant would you miss least?
