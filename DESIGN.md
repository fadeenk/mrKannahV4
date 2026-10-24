---
name: Mr. Kannah
description: Guiding Teams and Individuals to Success
colors:
  forest-canopy: "#2e8555"
  pine-shadow: "#205d3b"
  meadow: "#3cad6e"
  mint-signal: "#25c2a0"
  deep-teal: "#1a8870"
  mint-glow: "#4fddbf"
  card-ink: "#1a1a1a"
  card-muted: "#555555"
  link-blue: "#1976d2"
  drench-forest: "#277148"
  drench-deep: "#136251"
  forest-ink: "#29784c"
  logo-plate: "#fcfbf7"
typography:
  display:
    fontFamily: 'Anton, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'
    fontSize: "75px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif'
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif'
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
  consulting-display:
    fontFamily: '"Besley Variable", "Besley Fallback", Georgia, "Times New Roman", serif'
    fontSize: "clamp(2.5rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  consulting-headline:
    fontFamily: '"Besley Variable", "Besley Fallback", Georgia, "Times New Roman", serif'
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  consulting-numeral:
    fontFamily: '"Besley Variable", "Besley Fallback", Georgia, "Times New Roman", serif'
    fontSize: "clamp(2.75rem, 5.4vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "#ffffff"
    textColor: "{colors.forest-canopy}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.forest-canopy}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-solid:
    backgroundColor: "{colors.forest-canopy}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-on-drench:
    backgroundColor: "#ffffff"
    textColor: "{colors.drench-forest}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  tag-pill:
    backgroundColor: "transparent"
    textColor: "{colors.forest-canopy}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  card-elevated:
    backgroundColor: "#ffffff"
    textColor: "{colors.card-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-neumorphic:
    backgroundColor: "transparent"
    textColor: "{colors.card-ink}"
    rounded: "16px"
    padding: "0px 22px"
    height: "64px"
    width: "326px"
  glass-badge:
    rounded: "24px"
    padding: "clamp(1.25rem, 6vw, 2rem)"
    width: "min(100%, 26rem)"
  glass-button-save:
    backgroundColor: "{colors.forest-canopy}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "48px"
  glass-button-save-hover:
    backgroundColor: "{colors.drench-forest}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "48px"
  glass-button-save-dark:
    backgroundColor: "#ffffff"
    textColor: "{colors.drench-deep}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "48px"
  glass-button-book:
    backgroundColor: "transparent"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "48px"
  glass-button-quiet:
    backgroundColor: "rgba(255, 255, 255, 0.62)"
    textColor: "#1c1e21"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "48px"
  glass-row:
    backgroundColor: "rgba(255, 255, 255, 0.62)"
    textColor: "#1c1e21"
    rounded: "{rounded.lg}"
    padding: "8px 14px 8px 8px"
    height: "56px"
  glass-tile:
    backgroundColor: "rgba(255, 255, 255, 0.62)"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.lg}"
    size: "44px"
---

# Design System: Mr. Kannah

## Overview

**Creative North Star: "Quiet Authority"**

This is a pragmatic and proven consulting surface. Minimal chrome, honest materials, and quantified claims let shipped work do the persuading. The header carries the only expressive moment — stroked italic display type, particle field, and a tilting portrait — then the page settles into calm Infima rhythm: centered containers, even sections, and flat cards that lift only on interaction.

Density is comfortable, not airy and not dense. Copy is direct and results-quantified. Green is the single voice across light and dark themes; everything else is Infima neutral structure.

The homepage (`src/pages/index.tsx`) is the one place the system speaks louder, built on one idea: **the release line**. A field of small ticks starts disordered, aligns into a single green line that runs behind the hero portrait and climbs past it, and that stroke then recurs as the stats-band hairline, the 2px stroke that opens each problem and FAQ row, and the proof spine; the closing CTA keeps only a quiet tick ground whose ticks point at the copy, with no line drawn. The departures below are scoped to that surface, to its proof pages, the case studies under `/case-studies` (built from `src/components/CaseStudy/`), which a visitor reaches from the proof rows, to `/about` (`src/pages/about.tsx`), the same line told as a dated record, to `/showcase` (`src/pages/showcase/`), the same spine carrying the work itself, and to `/card` (`src/pages/card.tsx`), the digital business card; every other page keeps the incumbent system.

`/card` is the same world under one held object: a pane of glass held over the release line. The tick field runs behind a frosted badge, the line enters behind the round portrait and climbs past it, and the glass is what you hold up and hand over. The page is chromeless, Besley sets the name and nothing else, and there is no drenched band. The glass, its light-catching edge, its sheen, and its one resting shadow are user-pinned and belong to that badge alone.

**Key Characteristics:**
- Single green voice, theme-flipped (forest in light, mint in dark)
- Flat surfaces at rest, lift only on hover
- Restrained and confident controls with 8–12px geometry
- Playful proof accents (tilt, angled testimonials, logo marquee) on a calm base
- The homepage, its case studies, `/about`, `/showcase`, and `/card` only: a serif display face and one recurring "release line" motif in ticks, strokes, and a pilot dot; drenched green bands on the homepage (three), each case study, `/about` and `/showcase` page (the closing one), none on `/card`
- `/card` only: a frosted glass badge over the tick field, the one glass surface in the system

## Colors

One accent family in two theme expressions, plus Infima neutrals for structure.

### Primary
- **Forest Canopy** (#2e8555): Default light-theme primary. Buttons, links, badges, testimonial accents, section dividers (`src/css/custom.css`).
- **Pine Shadow** (#205d3b): Darkest light ramp, deepest theme step.
- **Meadow** (#3cad6e): Lightest light ramp.
- **Mint Signal** (#25c2a0): Default dark-theme primary. Same roles as Forest Canopy when `[data-theme="dark"]`.
- **Deep Teal** (#1a8870): Darkest dark ramp, particle links in dark theme.
- **Mint Glow** (#4fddbf): Lightest dark ramp, particle dots in dark theme.
- **Forest Ink** (#29784c): the light ramp's `primary-dark` step, used as green text and marks on translucent glass (`/card`): row icons, the outline button, profile tiles, quiet-button icons, the copied state. It holds 5.4:1 on the glass where Forest Canopy would sit near 4.4:1. In the dark theme the same roles take Mint Signal.

Full ramps are normative in `src/css/custom.css`: light `#29784c, #277148, #205d3b, #33925d, #359962, #3cad6e`; dark `#21af90, #1fa588, #1a8870, #29d5b0, #32d8b4, #4fddbf`.

### Neutral
- **Infima Surface** (`var(--ifm-background-surface-color)`): Service cards, testimonial cards, elevated cards.
- **Infima Emphasis Wash** (`var(--ifm-color-emphasis-100)`): Testimonial section band (`section--testimonials`).
- **Hairline** (`var(--ifm-color-emphasis-200)`): Card borders, stats-bar top/bottom rules.
- **Ink / Muted** (#1a1a1a / #555555 in light card scope; `var(--ifm-font-color-base)` + `var(--ifm-color-emphasis-700)` elsewhere): Body copy and subheadlines.

Functional one-offs, not system accents: link blue (#1976d2, historic) and the iFolio AI badge gradient (#667eea → #764ba2, historic). Do not promote these to palette roles.

- **Logo Plate** (#fcfbf7, 1px `rgba(28, 30, 33, 0.14)` border, 8px radius): the warm light chip behind client logos in both themes, because the logos are dark marks on transparent. It sits behind the logo only; text never sits on it, so copy keeps following the theme (ProofShowcase, the case studies, the stats-band marquee on hover).
### Drenched Bands (the homepage only)
- **Drench Forest** (#277148): Light-theme ground of a drenched band. This is the theme's `primary-darker` step (`--c-drench-bg` in `src/pages/index.module.css`). White text on it measures 5.9:1.
- **Drench Deep** (#136251): Dark-theme ground, the deep ramp step (`primary-darkest` at 72% over black). White text measures 7.3:1. Mint Signal is not used as a ground because white on it is 2.3:1.

Bands: the stats band, the testimonials band (the shared component with `tone="onGreen"`: white cards with dark text in both themes, and the name tags, photo frames, role chips and source links in the band's own drench green), and the closing CTA. Text and the inverted CTA are white; selection inverts to white on green.

### Glass (`/card` only)
The badge's materials, declared on the `/card` root (`src/pages/card.module.css`) and flipped per theme. They are neutral white and black at low alpha with a trace of the theme green; no new hue enters.

- **Card Ground** (`--ifm-color-emphasis-100`, #f5f6f7 in light; `--ifm-background-color`, #1b1b1d in dark): the page behind the field. It is also painted on `html` so overscroll matches, sent as the per-theme `theme-color` meta so the phone's browser chrome takes it, and used as the pilot dot's knockout ring.
- **Glass Tint** (light: a 160deg gradient of white at 50%, 16%, then `rgba(236, 246, 240, 0.3)`; dark: white at 9% and 2.5%, then Mint Signal at 6%): the badge's own fill, thin enough that the ticks behind still read as soft moving shapes.
- **Glass Fill** (white 62%, hover 90%; dark: white 6%, hover 12%): a second, denser layer for rows, tiles, quiet buttons, the back button, and the portrait mat, so text on them holds AA.
- **Glass Rule** (`rgba(28, 30, 33, 0.1)`; dark: white 12%): the 1px hairline on every glass element, the profiles divider, and the QR plate's ring. On hover it turns to 50% green.
- **Glass Edge** (light: white, white 40%, green 18%, green 45%; dark: white 55%, white 10%, Mint 14%, Mint 45%): the 1px light-catching ring, bright where the light comes from and green where it leaves.
- **Glass Solid** (#fbfcfb light, #24282a dark): the opaque badge when `backdrop-filter` is unsupported or the visitor prefers reduced transparency.
- **QR Plate** (#ffffff in both themes): QR scanners want dark on light. The branded `static/img/qr.jpg` is user-pinned and stays as is.

### Named Rules
**The One Voice Rule.** Green is the only accent on any screen. Its rarity is the point — rarity preserves the booking CTA.
**The Three Bands Rule.** On the homepage green may own the surface in exactly three regions: stats, testimonials, closing CTA. A case-study page, `/about` and each `/showcase` page get one: the closing CTA. `/card` gets none: field and glass only. Everywhere else green stays a stroke, a fill on one button, or a line.

## Typography

**Display Font:** Anton with Impact fallback (with system sans fallback)
**Body Font:** Infima system stack (with system-ui fallback)
**Label Font:** Same body stack at small semibold

**Character:** Confident stroked display for identity, calm grotesk for everything else. Display shouts once in the header; body never raises its voice.

### Hierarchy
- **Display** (700 italic, 75px headerTitle / 30px tagline, line-height 1): Header identity only. Transparent fill with green text-stroke (0.03em), rotated (-15deg desktop, -10deg mobile). Never reuse for section titles.
- **Headline** (700, 2.5rem desktop / 1.75rem mobile, 1.2): Hero headlines, `hero__title` section titles, centered.
- **Title** (700, 1.25rem, 1.3): Service titles, work-card titles, stat context.
- **Body** (400, 1rem, 1.65): Descriptions, bullets (0.95rem in service lists), testimonial quotes (1.1rem italic).
- **Label** (600, 0.75rem, 0.02em spacing): Pill tags, category badges (0.8rem bold in work cards), testimonial roles.

### Homepage display face
**Besley Variable** (self-hosted woff2, preloaded, with a width-matched `Besley Fallback` over Georgia Bold at `size-adjust: 105.5%` so the swap does not reflow headings).

- **Consulting Display** (700, `clamp(2.5rem, 6vw, 5.5rem)`, 1.04, -0.025em): The H1 only, set on two lines at desktop.
- **Consulting Headline** (700, `clamp(1.75rem, 3.2vw, 2.5rem)`, 1.12, -0.01em): Section H2s. Card, proof, and FAQ titles use the same face at their own sizes.
- **Consulting Quote** (700, `clamp(1.5rem, 2.5vw, 2.125rem)`, 1.18, -0.01em): the problem rows, written as the visitor's own sentence in curly quotes, with the opening mark hung outside the text edge.
- **Consulting Numeral** (700, `clamp(2.75rem, 5.4vw, 4.5rem)`, 1, tabular lining figures): Stats-band values and the proof numerals ("24", "4 weeks").
- **About H1**: the `/about` H1 takes the case-study H1 step (`--cs-h1`, `clamp(2.25rem, 4.6vw, 4rem)`, -0.025em) rather than Consulting Display, because its three short sentences (the longest is about 14em) sit one per line from 997px; it wraps naturally below.
- **Card Name** (700, `clamp(1.875rem, 8vw, 2.25rem)`, 1.08, -0.02em, balanced): the `/card` H1, Besley's only job on that page. The QR face repeats the name in the same face at a smaller size.

Body, labels, and microcopy stay in the system sans on these surfaces too. On `/card` the role (1rem, 600), the line under it (muted), the row labels (the Label role), the row values (1rem, 600, tabular numerals), and every button are system sans.

### Named Rules
**The Display-Once Rule.** Anton italic with stroke appears in the site header and nowhere else. Section hierarchy stays in the system sans on every page except the homepage, its case studies, `/about`, `/showcase`, and `/card`.
**The Serif-For-Claims Rule.** On the homepage, the case studies, `/about`, and `/showcase` Besley carries headings, titles, numerals, and quotes, the things a visitor skims; on `/card` it sets the name and nothing else. It never sets body copy, buttons, or microcopy, and it is never stroked, italicised, or rotated.

## Layout

Centered `container` with full-bleed section bands. Base section rhythm is generous and even (4rem vertical padding, 2rem for stats-bar). Content grids are auto-fit and breakpoint-driven, not fixed columns.

- Services: `repeat(auto-fit, minmax(300px, 1fr))` with 2rem gap, 2rem top margin.
- Engagement: `repeat(auto-fit, minmax(280px, 1fr))` with 1.5rem gap.
- Stats: 3 equal columns centered, collapsing to 1 column under 768px.
- Secondary services: 2 columns collapsing to 1 under 768px.
- Hero: split row (copy left, portrait right) flipping to `column-reverse` centered under 996px to match Docusaurus navbar breakpoint.
- Spacing scale in use: 8px, 16px, 24px (1.5rem), 32px (2rem), 64px (4rem section).

### Homepage order and rhythm
Hero → stats band (drenched) → problem rows → proof → engagements → testimonials (drenched) → FAQ → closing CTA (drenched) → contact form. Each problem row links to the proof row of the client who was in that situation, so proof sits directly under the problem and before the ask. The page shell is a single `<main>` that owns the page tokens; sections own their own styles.

- Sections pad 4–6rem vertically with more space above a heading than below it; the container width is unchanged.
- Hero: copy left, portrait tile right, headline spanning the full row at desktop; single column under 996px with the portrait after the copy. Its height is capped so the stats band's numerals show in the first 900px viewport.
- Stats: three columns with 1px rules at desktop; under 768px they become ledger rows (numeral left, label right).
- Problem rows: ruled rows, quote 7/12 and the day-to-day plus a jump link 5/12 at 997px and wider, one column under 996px. Nothing pins or scrubs with scroll.
- Engagements: three columns sharing subgrid rows (the You get / You need / what-shapes-the-work / Case study rows align across cards, and the Case study row comes last so an offer without a published case study just ends a row early; every row is visible, nothing collapses; booking microcopy shows once in the hero and once in the closing CTA, not under every card), one column under 996px.
- Proof: a continued line down the left with a node per client; the Portico screenshot strip is a tilted plane at 997px and wider, a scroll-snap row under it.

### `/about` layout
The case-study shell with a full-bleed hero (`CaseStudyLayout variant="page"`): the hero, then one container (`CaseBody`) holding the numeral ledger, four chapters on the spine, the folded longer story, a quiet foot link, and the shared closing band. Order: hero (H1 on two lines across the row, lede and the solid booking button left, portrait tile right, the tick field behind it fading out at its lower edge) → numeral ledger (counting up once on first view, as the stats band does) with a sources footnote → four chapters on the spine (Where I started, CourseKey and the exit, MeetingHero and why I shut it down, Consulting today), each with a date line set under its heading → "The longer story" disclosure, in the body column → foot link → drenched FinalCta. Every dated fact carries its source in the copy or the footnote.

### `/showcase` layout
The case-study shell in two forms. The index uses `CaseStudyLayout variant="index"`: an H1 and one plain sentence (`CaseIntro`), then the proof spine, one `SpineSection` per project and the same for "Smaller builds" and "Recognition", each drawn by scroll (`scrub`), then the shared closing band. A project row is the project's summary, its recording in the screenshot frame, a ruled facts list and a link to its write-up; the left column holds the project's name and, under it, its time to ship and who it was for. A write-up uses `variant="work"`: the back link to `/showcase`, `CaseHeader` (H1, lede, facts), the recording or figure, chapters on the spine, the stack disclosure (every write-up but MeetingHero's, which has none), and a foot link back. VideoArchiver's write-up adds a "Video transcript" `CaseFold` under its recording (time, on-screen text and narration per scene) and, after the stack, one external link to the live product and the Ring trademark line in muted small type.

### `/card` layout
Chromeless: Layout runs with `noFooter` and the navbar is hidden only while the card root is on the page (`html:has(.root) .navbar`), so the badge is the page. The root is a full-viewport grid (`min-height: 100svh`) that centers the badge over the field, with a gutter of `clamp(0.75rem, 4vh, 3rem)` by `clamp(0.75rem, 4vw, 3rem)`; it is the field's positioned ancestor and isolates its stacking.

- Badge: `min(100%, 26rem)` wide, a one-cell grid holding both faces, so it is as tall as the taller face and stays in flow at every size; the hidden face keeps its box but is `visibility: hidden` and `inert`.
- Front face order: identity (portrait, name, role, line) → phone and email rows → actions (Save contact, Book a call, then Share and QR code as a two-column pair) → profiles (work tiles left, personal marks right, over a hairline). The identity sits 1.5rem above the rest, whose groups sit 1rem apart; rows and buttons within a group sit 0.5rem apart.
- 360px and under: a 104px portrait and tighter face and button padding.
- Short portrait screens (`orientation: portrait` and `max-height: 740px`, Safari with its bars, an iPhone SE): a 92px portrait, 1rem face padding and group gaps, 48px rows and 44px buttons, so QR code stays above the fold and from about 660px tall the whole front face fits.
- Landscape phone (`orientation: landscape` and `max-height: 34rem`): the badge widens to 46rem and goes two-column, identity and profiles left, rows and actions right; the QR face sets the plate beside its caption.

## Elevation & Depth

Flat by default. Depth is feedback, not decoration — surfaces sit flush with hairline borders and tonal fills, then lift briefly on hover.

### Shadow Vocabulary
- **Card hover lift** (`box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12)` with `translateY(-2px)`): Elevated cards (`src/css/custom.css`).
- **Service lift** (`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)` with `translateY(-4px)`): Service cards.
- **Button lift** (`box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2)` with `translateY(-1px)`): Primary buttons.
- **Portrait tilt shadow**: Hero portrait tile on hover with tilt (`src/components/ConsultingHero/`).
- **Testimonial pop** (`filter: drop-shadow(0px 20px 10px #0008)` with `scale(0.85 → 1)`): Testimonial cards on hover.
- **Inset field** (`box-shadow: inset 0.2rem 0.2rem 0.5rem grey`): Neumorphic contact inputs at rest, lifting to outer shadow on focus.

- **Proof screenshot frame** (`box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 16px 28px -10px rgba(0, 0, 0, 0.4)`, the homepage and the case studies only): one of the system's two resting shadows (the other is the `/card` glass badge). On the homepage the four redacted Portico screenshots sit on a plane tilted `rotateY(9deg) rotateX(4deg)` and shift with the pointer in the full motion tier; on a case study the frames sit flat: screenshots (`CaseFrames`) in justified rows that share one height and never upscale a capture, a recording (`CaseFigure framed`) on its own. The Portico captures are redacted in the files themselves: the browser chrome and the D2L registration token are painted out at the original pixel size.
- **Glass badge rest** (`box-shadow: 0 1px 2px rgba(16, 48, 32, 0.06), 0 32px 64px -28px rgba(16, 56, 36, 0.42)` in light, `0 1px 2px rgba(0, 0, 0, 0.3), 0 32px 64px -24px rgba(0, 0, 0, 0.75)` in dark, `/card` only): one soft offset resting shadow under the badge, because a held pane only reads as an object when it sits off the ground. The light value is tinted toward the forest green rather than neutral black. Nothing inside the badge carries a resting shadow: the portrait mat, rows, tiles, and QR plate are hairline-only.

### Glass Material (`/card` only)
The badge is the one frosted surface in the system, user-pinned. It blurs the tick field behind it through `backdrop-filter: blur(3px) saturate(1.8)` over the thin Glass Tint, light enough that the ticks and the release line still move behind it. Two pseudo-elements finish it: a 1px gradient ring (Glass Edge), masked down to the badge's edge, whose angle, a registered `<angle>` property (`--card-edge-angle`, resting at 150deg, lit from the top left), turns its bright end toward a fine pointer; and a radial sheen (80% by 55%, white at 85% in light and 24% in dark, fading out by 72%) at `--card-sheen-x` / `--card-sheen-y`, resting at the top left and following the pointer in the full tier. Text holds AA because the field quietens ticks under the name block (`data-field-quiet`) and the rows and buttons carry the denser Glass Fill. When `backdrop-filter` is unsupported, or the visitor prefers reduced transparency, the badge drops to Glass Solid.

### Named Rules
**The Flat-By-Default Rule.** No persistent shadows at rest except hairlines. Shadows appear only as a response to hover, focus, or tilt. There are two exceptions, each because the shadow is what makes the thing read as an object: the proof screenshot frame on the homepage and the case studies, and the glass badge on `/card`.
**The Held-Glass Rule.** Glass blur belongs to the `/card` badge alone: one pane, one resting shadow, one edge, one sheen. Cards, sections, bands, and the navbar never take a backdrop blur.
**The Flat-Turn Rule.** Nothing that carries a backdrop blur, and no ancestor of it, takes a 3D transform (`rotateX`, `rotateY`, `perspective`): Chromium drops the blur under a non-axis-aligned 3D transform. Between the field and the badge nothing may set `filter`, `opacity` below 1, `mask`, or `clip-path`, since each starts a new backdrop root and cuts the glass off from the field. The badge turns over with a 2D `scaleX` and leans with a 2D translate.

## Shapes

Gently rounded rectangles; pills and the `/card` portrait are the fully round exceptions. Corners get rounder as surfaces get larger.

- Cards and buttons: softly squared (8px for buttons, service cards, testimonials, header CTAs; 12px for elevated cards).
- Portrait and cover: slightly soft photo tile (10px radius), grayscale at rest, color character layer on hover.
- Pills: fully round tag (999px radius, 2px? 1px green stroke, semibold green text).
- Testimonials: small radius (0.25em) with deliberate rotation (-4deg / 4deg alternating, settling to 0deg on hover) and angled gradient edges.
- Inputs: large soft well (16px / 1rem radius, 326px × 64px field with inner shadow).
- Borders: 1px neutral hairline for cards, 2px green stroke for primary/outline buttons.
- The homepage: the hero portrait tile and proof screenshot frames use 12px; the recommended engagement card carries a 2px green border and a "Start here" pill tab (999px radius, the shared `tag--pill` shape) straddling its top edge. Drenched bands are square-edged and full-bleed.
- The release line itself is a 2px stroke with a 20px pilot dot (3px knockout ring in the page color), the same in the hero field and the proof spine.
- `/card` follows the same ladder from the inside out: 8px for inner squares (row icon wells, personal marks, hover tips, the QR image), 12px for rows, buttons, profile tiles, and the back button, 16px for the QR plate, and 24px for the badge. The 24px badge radius is a scoped exception for the largest held surface, not a step in the rounded scale; base cards stay at 8–12px. The portrait is a circle in a 5px Glass Fill mat with an inset hairline.

## Components

### Buttons
Restrained and confident. White fill with 2px green stroke and green text at rest (8px radius, 12px 24px padding, 600 weight); fills green with white text and lifts on hover. Hero CTAs follow the same contract (primary filled, secondary outline, both lifting -2px on hover).

- **Shape:** Soft rectangle (8px radius).
- **Primary:** White background, green text/border; hover inverts to green fill.
- **Secondary / Ghost:** Transparent with green stroke; hover fills green.
- **Focus:** 3px ring in the theme green at a 3px offset (BookCta, summaries, links); on drenched bands the ring is white, because green on the drench ground is 1.3:1.
- **Solid (the homepage, light theme):** the hero CTA and the recommended engagement card's CTA fill forest green with white text (4.6:1), hovering to Drench Forest (#277148). Every other booking button on the page stays outline, so the filled one is always the one to press. In the dark theme the white button already carries the weight.
- **On a drenched band:** white fill, Drench Forest text, hover darkens the fill slightly; the microcopy beneath is white.
- **Magnetic lean:** in the full motion tier a booking button follows the pointer by a few pixels and springs back; it never moves in the touch or reduced tiers.
- **On the `/card` glass:** a softer 12px radius and a 48px minimum height, full width in the badge (Share and QR code split one row), each with a leading stroke icon; a press nudges 1px down. Three weights, one each:
  - **Solid, Save contact:** the one solid control. Forest fill with white text in light (4.56:1), hovering to Drench Forest; in dark a white fill with Drench Deep text (7.3:1), as on the homepage, where the white button carries the weight.
  - **Outline, Book a call:** a 2px border and text in Forest Ink in light (5.4:1 on the glass) and Mint Signal in dark; hover fills with that green.
  - **Quiet, Share and QR code:** Glass Fill with a 1px Glass Rule border (the rule is the border, so edges line up with the rows), ink text, green icon; hover densifies the fill and turns the rule green. Share hands off to the native share sheet, or copies the link where there is none, and its label says which ("Share" / "Copy link", then "Link copied").

### Chips
- **Style:** Pill outline (1px green stroke, 999px radius, 0.75rem semibold) for tags; solid green badge (4px radius, 0.8rem bold, inverse text) for work categories; purple gradient badge only for the iFolio Built-with-AI marker.
- **State:** Static; no selected/unselected system observed.

### Cards / Containers
- **Corner Style:** Softly squared (12px elevated, 8px services/testimonials, 4px inner badges).
- **Background:** Infima surface or card background var; testimonial uses inverse-base with angled green edge (83deg gradient cut at 97%).
- **Shadow Strategy:** Flat at rest per Elevation section; lift on hover.
- **Border:** 1px neutral hairline (elevated/services); 2px green only on buttons.
- **Internal Padding:** Comfortable (24px / 1.5rem standard).

### Inputs / Fields
- **Style:** Neumorphic well — transparent fill, 16px radius, inset shadow, 326px × 64px, message area 8rem tall.
- **Focus:** Outer soft shadow, no outline; placeholder in light grey.
- **Error / Disabled:** Error surfaces as Docusaurus danger alert above the form with direct email fallback; submit disables until name/email/message are non-empty.

### Navigation
Docusaurus navbar with Home title, logo (`logo.svg` / `logoDark.svg`), left Case Studies, Showcase (a plain link, no dropdown) and About, then the 💼 card shortcut; Blog is hidden from the bar. Dark footer with copyright only. Mobile collapses at 996px per Docusaurus default. `/card` is chromeless: no navbar and no footer.

### Signature Components
- **Consulting hero:** Release-line tick field behind split hero, portrait tile that tilts on hover and reveals a color layer.
- **Testimonial collage:** Alternating angled cards with rotated avatar tiles (grayscale → color on hover) and highlight-marker names.
- **Logos marquee:** Infinite 25s scroll track with edge fade masks in primary green, pausing on hover, items dimmed (grayscale + 0.7 opacity) until hovered. On the homepage stats band the logos are knocked out to white (78% opacity) and the fades take the band color; on hover a logo returns to its original colors on a light `#fcfbf7` plate (8px radius), the same chip the proof section uses, because the originals are dark marks that sink into the green.
- **Release-line tick field** (`SignalField`, the homepage): a canvas of about 4,000 one-pixel ticks. They begin as slow random noise, a pilot dot sweeps left to right in about 1.8s and the ticks align behind it into one line (2px, with the pilot dot), then the line settles. The pointer locally disorders ticks within about 120px and they re-settle. Ticks quieten under text so body copy keeps AA contrast. It colors itself from CSS variables (`--field-tick`, `--field-line`, `--field-pilot`, `--field-ring`, `--field-gain`, `--field-tick-gain`) so a host can recolor it; the closing CTA renders it once, already settled, in white on the green band, with no release line and no brightening (`data-field-noline` on the band): every tick points at the copy, so the ground converges on the one action. The hero's anchor sets `data-field-rise`, so its line climbs past the portrait instead of dropping.
- **Problem rows** (`PainGroups`): three situations in the visitor's words, each opened by the 2px signal stroke and ending in a jump to the matching client in the proof section. Every situation is a published case study; none is hypothetical.
- **Count-up numerals** (`src/components/CountUp`): an `aria-hidden` overlay counts up over the real, already-final text, once, on first view (1.5s ease-out, 110ms apart, from 40% in view or at mount if already on screen); the DOM text and layout never change. The homepage stats band and the `/about` numeral ledger (`CaseStats countUp`) share it; the case studies' ledgers stay static.
- **Case-study system** (`src/components/CaseStudy/`, `/case-studies/*`): every study composes the same parts in the same order. Outcome H1 in Besley, a first-person lede, and a facts ledger (client on the logo plate, engagement linking to the offers, length, industry); a ruled numeral ledger with a footnote for windows and estimates; the lead client quote in the Consulting Quote face with a hung opening mark and no side bar; then four fixed H2s on the release-line spine (Where things stood, How we worked, What I built, What changed), one node per section scrubbed by scroll (drawn at 62% viewport with a Reveal fallback), collapsing to the 2px opening stroke under 997px; a `<details>` tech stack; the other two studies from `registry.ts`; and `FinalCta`. From 997px the facts ledger stands beside the H1 and lede as a column of ruled rows (7/12 to 5/12), and each story section is an editorial row: the H2 in 4/12 beside its node, the body in 8/12. Prose holds near 68ch, chart and video take the body column, and screenshot frames run the full content width. The index lists the studies as ledger rows on the same spine (reveal-fill by design: two short rows on a short page give scroll-scrub no distance to read), in the homepage order.
- **About page** (`src/pages/about.tsx`, `src/components/AboutHero/`): the case-study parts on a personal record. `AboutHero` reuses the homepage's `SignalField` and `PortraitTile` (the portrait is the field's anchor with `data-field-rise`; the headline and lede are `data-field-quiet`) with the case-study H1 step (`--cs-h1`, two sentences, one per line from 997px). Chapters are `SpineSection`s (a spine section with a free title and an optional date line under it; `CaseSection` is the same with a study's four fixed titles and no date line, always scrubbed). `/about`, showcase, and the case studies all pass `scrub`, so each spine is drawn by scroll exactly as the homepage proof spine is: a reading line at 62% of the viewport, each segment drawing downward as it passes and each node filling as the line reaches it (CSS scroll-driven animation from 997px, motion allowed; under 997px the spine is the short stroke and does not animate, and a browser without scroll-driven animation shows the line fully drawn with each node filling as its chapter reveals). `CaseFold` holds longer prose: from 997px it sits in the body column, its summary H2 in Besley 1.5rem over H3s at 1.25rem, 68ch paragraphs, and a `#hash` link to anything inside it opens it and scrolls there. A logo plate that has a case study is a link; one that has none is not. Clients appear as logo plates only. A named quote uses `CaseQuote` with a title the source confirms.
- **Showcase** (`src/pages/showcase/`, data in `src/data/showcase.ts`): the case-study parts on the work itself. `CaseHeader` is the masthead for a page with no registry client (term and value rows beside the H1 and lede). `CaseVideo` takes a `poster`, so a recording loads only on play, and an optional `description` read to assistive tech and never shown. `LiteYouTube` is a click-to-load YouTube video in the same screenshot frame, with a local poster so nothing from YouTube loads first. A project that has no safe screenshot gets a figure drawn from its own facts instead: iFolio's trust boundary is a hairline box for the device holding four steps with arrows, and the two services outside it (a price-relay Worker and an optional Sheets sync) in dashed boxes. VideoArchiver's recording is a narrated walkthrough made from its dashboard's demo mode, with made-up cameras and clips; its soundtrack plays only on click, like iFolio's. Every project recording (VideoArchiver, the AI assistant, iFolio, the agent platform) is a `ShowcaseRecording`, the same on its index row and its write-up: the screenshot frame, one short caption under it, and the details (what happens, and when) as `CaseVideo`'s `description`, which the video and its play badge reference with `aria-describedby` and the page never shows. MeetingHero's embeds carry one short line each; the smaller builds' recordings have no caption. Smaller builds are a ruled list (name in Besley, one plain paragraph, a recording in the same screenshot frame held narrow with its own `maxWidth`, links); recognition is a ruled ledger with the year in a Besley numeral, a source link, and a small framed thumbnail on the right (a certificate, cover or photo) that opens the full-size image in a new tab. The project rows and write-ups use no recordings or screenshots that show real account data or other people's names, calendar entries or email addresses; the smaller builds' lab dashboard, DJ app and PureFrame clips are shown as they were, at Fadee's request.
- **Glass badge** (`/card`): the digital business card, two faces in one pane over the full-viewport `SignalField` (`hero` variant; the portrait is the field's anchor with `data-field-rise`, so the line enters behind it and climbs past; the name, role, and line are `data-field-quiet`).
  - **Front:** the round portrait, the name in Besley, the role, and one plain line; phone and email as glass rows readable without a tap (a 40px green-tinted icon well, then a muted label over the value); the three button weights; then profiles in a deliberate two-step hierarchy: work profiles (LinkedIn, GitHub, the website) as 44px glass tiles with green marks that fill green on hover, and personal profiles (Instagram, Facebook) as 36px untiled marks in muted grey, a step back. Profile marks carry an inverse-colored hover tip, hidden under `(hover: none)` because on touch it would only flash on tap.
  - **Back:** the branded QR on a white plate, the name again, and a caption; a 44px glass back button sits in the top-left corner. Escape also turns the badge back.
  - **Turn:** "QR code" turns the badge over in place: it narrows to its edge (`scaleX` to 0, 180ms, ease-in), the faces swap before paint, and it opens again (340ms on `--c-ease`). Focus moves to the new face's control, and the hidden face is `inert`. A 2D turn, never `rotateY` (see the Flat-Turn Rule).
- **Stroke icons** (`src/components/Icons`): one set on a 20px grid, 2px stroke, round caps and joins, `currentColor`, sized at 1em: the arrows and chevron on the homepage and the case studies; Phone, Mail, Calendar, Share, QR code, Add contact, and Check on `/card`. Profile marks are the one filled exception: FontAwesome brand marks (and its solid globe for the website), drawn inline from the icon data so they size in the server render.

### Motion tiers (the homepage and `/card`)
Motion is chosen by `useMotionTier()`: `full` (fine pointer), `touch` (settle once, then freeze, no pointer effects), `reduced` (a static finished state, no animation loop). The server render and first client render are always `reduced`, so nothing hides or shifts on hydration. Shared tokens live on the page root: `--c-ease: cubic-bezier(0.22, 1, 0.36, 1)`, `--c-dur-fast: 160ms`, `--c-dur-reveal: 420ms`, `--c-dur-settle: 900ms`. Only transform and opacity animate.

On `/card` the root mirrors `--c-ease` and `--c-dur-fast`. In the full tier the badge leans up to 6px toward the pointer (a 2D translate), the sheen follows it, and the edge's bright end turns to face it, all easing back over 0.5s on `--c-ease` when the pointer leaves; the typed sheen and edge properties are what let them ease. In the touch tier there are no pointer effects but the turn still animates; in the reduced tier the faces swap instantly. Under `prefers-reduced-motion` every transition and transform on the card is off. Hover feedback on rows, tiles, and buttons is a fill, rule, and color change at `--c-dur-fast`; whatever moves, moves by transform.

## Do's and Don'ts

Concrete guardrails grounded in the shipped code.

### Do:
- **Do** use the theme-correct green (Forest Canopy #2e8555 in light, Mint Signal #25c2a0 in dark) for every accent, stroke, and CTA fill.
- **Do** keep surfaces flat at rest with 1px neutral hairlines; add shadow only on hover/focus/tilt.
- **Do** reserve Anton italic + stroke for the site header; set all section titles in the system sans.
- **Do** preserve external CTA attributes (`target="_blank" rel="noopener noreferrer"`) on cal.com and outbound links.
- **Do** collapse 3-col stats and 2-col secondary grids to 1 column under 768px, and the header split under 996px.
- **Do** (on the homepage) make exactly one booking button per view the solid one, and keep the drenched bands to stats, testimonials, and the closing CTA.
- **Do** (on the homepage) check white text against the drench ground in both themes (5.9:1 light, 7.3:1 dark) before putting copy on a green band.
- **Do** (on the homepage) ship every motion effect with a `reduced` tier that shows the finished state and an SSR render that matches it.
- **Do** (on `/card`) keep Save contact the one solid control; Book a call stays outline, and Share and QR code stay quiet glass.
- **Do** (on `/card`) set green text and marks on the glass in Forest Ink (#29784c) in light and Mint Signal in dark, and give anything on the glass that carries text the denser Glass Fill.
- **Do** (on `/card`) give the glass an opaque fallback: Glass Solid when `backdrop-filter` is unsupported and under `prefers-reduced-transparency`.
- **Do** keep detail/showcase/about spines scroll-scrubbed via `scrub` (`SpineSection`/`CaseSection`: line draws by scroll at 62% viewport from 997px with motion allowed, Reveal fill as the fallback). Leave the `/case-studies` index ledger on Reveal fill — two short rows cannot show scrub.

### Don't:
- **Don't** introduce a new accent hue or promote the one-off blues/purples (#1976d2, #667eea) to system roles.
- **Don't** apply persistent drop shadows or glass blur to base cards — lift is feedback only. The `/card` badge is the one scoped glass surface, and its resting shadow is not a pattern for cards.
- **Don't** put a 3D transform on the `/card` badge or any ancestor of it, or set `filter`, `opacity` below 1, `mask`, or `clip-path` between the field and the badge; each one cuts the badge's blur. Turn and lean in 2D.
- **Don't** reuse display rotation, text-stroke, or testimonial tilt outside their signature components.
- **Don't** invent testimonials, client names, stats, or pricing beyond `Testimonials`, `LogosCarousel`, and `PRODUCT.md` evidence. Proof cards on the homepage come only from the published case studies; an unapproved client stays a claim-free placeholder.
- **Don't** put section kickers, eyebrows, or numbered section labels above headings. The heading carries its own weight.
- **Don't** set Besley on body copy, buttons, or microcopy, and don't use it outside the homepage, its case studies, `/about`, `/showcase`, and the name on `/card`.
- **Don't** use Mint Signal (#25c2a0) as a ground under white text; use the drench steps.
