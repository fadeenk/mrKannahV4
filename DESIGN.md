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
---

# Design System: Mr. Kannah

## Overview

**Creative North Star: "Quiet Authority"**

This is a pragmatic and proven consulting surface. Minimal chrome, honest materials, and quantified claims let shipped work do the persuading. The header carries the only expressive moment — stroked italic display type, particle field, and a tilting portrait — then the page settles into calm Infima rhythm: centered containers, even sections, and flat cards that lift only on interaction.

Density is comfortable, not airy and not dense. Copy is direct and results-quantified. Green is the single voice across light and dark themes; everything else is Infima neutral structure.

**Key Characteristics:**
- Single green voice, theme-flipped (forest in light, mint in dark)
- Flat surfaces at rest, lift only on hover
- Restrained and confident controls with 8–12px geometry
- Playful proof accents (tilt, angled testimonials, logo marquee) on a calm base

## Colors

One accent family in two theme expressions, plus Infima neutrals for structure.

### Primary
- **Forest Canopy** (#2e8555): Default light-theme primary. Buttons, links, badges, testimonial accents, section dividers (`src/css/custom.css`).
- **Pine Shadow** (#205d3b): Darkest light ramp, particle dots in light theme, header stroke base (`src/components/Header/header.css`).
- **Meadow** (#3cad6e): Lightest light ramp, particle links in light theme (`src/components/Header/header.css`).
- **Mint Signal** (#25c2a0): Default dark-theme primary. Same roles as Forest Canopy when `[data-theme="dark"]`.
- **Deep Teal** (#1a8870): Darkest dark ramp, particle links in dark theme.
- **Mint Glow** (#4fddbf): Lightest dark ramp, particle dots in dark theme.

Full ramps are normative in `src/css/custom.css`: light `#29784c, #277148, #205d3b, #33925d, #359962, #3cad6e`; dark `#21af90, #1fa588, #1a8870, #29d5b0, #32d8b4, #4fddbf`.

### Neutral
- **Infima Surface** (`var(--ifm-background-surface-color)`): Service cards, testimonial cards, elevated cards.
- **Infima Emphasis Wash** (`var(--ifm-color-emphasis-100)`): Testimonial section band (`section--testimonials`).
- **Hairline** (`var(--ifm-color-emphasis-200)`): Card borders, stats-bar top/bottom rules.
- **Ink / Muted** (#1a1a1a / #555555 in light card scope; `var(--ifm-font-color-base)` + `var(--ifm-color-emphasis-700)` elsewhere): Body copy and subheadlines.

Functional one-offs, not system accents: View Details blue (#1976d2 in `FeaturedWork`), iFolio AI badge gradient (#667eea → #764ba2). Do not promote these to palette roles.

### Named Rules
**The One Voice Rule.** Green is the only accent on any screen. Its rarity is the point — rarity preserves the booking CTA.

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

### Named Rules
**The Display-Once Rule.** Anton italic with stroke appears in the site header and nowhere else. Section hierarchy stays in the system sans.

## Layout

Centered `container` with full-bleed section bands. Base section rhythm is generous and even (4rem vertical padding, 2rem for stats-bar). Content grids are auto-fit and breakpoint-driven, not fixed columns.

- Services: `repeat(auto-fit, minmax(300px, 1fr))` with 2rem gap, 2rem top margin.
- Engagement: `repeat(auto-fit, minmax(280px, 1fr))` with 1.5rem gap.
- Stats: 3 equal columns centered, collapsing to 1 column under 768px.
- Secondary services: 2 columns collapsing to 1 under 768px.
- Header: split row (copy left, portrait right) flipping to `column-reverse` centered under 996px to match Docusaurus navbar breakpoint.
- Spacing scale in use: 8px, 16px, 24px (1.5rem), 32px (2rem), 64px (4rem section).

## Elevation & Depth

Flat by default. Depth is feedback, not decoration — surfaces sit flush with hairline borders and tonal fills, then lift briefly on hover.

### Shadow Vocabulary
- **Card hover lift** (`box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12)` with `translateY(-2px)`): Elevated cards (`src/css/custom.css`).
- **Service lift** (`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)` with `translateY(-4px)`): Service cards.
- **Button lift** (`box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2)` with `translateY(-1px)`): Primary buttons.
- **Portrait tilt shadow** (`box-shadow: 2px 35px 32px -8px var(--profileShadowColor)`): Header portrait on hover with 3D tilt (`perspective(900px) rotateX(25deg)`).
- **Testimonial pop** (`filter: drop-shadow(0px 20px 10px #0008)` with `scale(0.85 → 1)`): Testimonial cards on hover.
- **Inset field** (`box-shadow: inset 0.2rem 0.2rem 0.5rem grey`): Neumorphic contact inputs at rest, lifting to outer shadow on focus.

### Named Rules
**The Flat-By-Default Rule.** No persistent shadows at rest except hairlines. Shadows appear only as a response to hover, focus, or tilt.

## Shapes

Gently rounded rectangles with one fully round exception. Corners get rounder as surfaces get larger.

- Cards and buttons: softly squared (8px for buttons, service cards, testimonials, header CTAs; 12px for elevated cards).
- Portrait and cover: slightly soft photo tile (10px radius), grayscale at rest, color character layer on hover.
- Pills: fully round tag (999px radius, 2px? 1px green stroke, semibold green text).
- Testimonials: small radius (0.25em) with deliberate rotation (-4deg / 4deg alternating, settling to 0deg on hover) and angled gradient edges.
- Inputs: large soft well (16px / 1rem radius, 326px × 64px field with inner shadow).
- Borders: 1px neutral hairline for cards, 2px green stroke for primary/outline buttons.

## Components

### Buttons
Restrained and confident. White fill with 2px green stroke and green text at rest (8px radius, 12px 24px padding, 600 weight); fills green with white text and lifts on hover. Header CTAs follow the same contract in particle greens (primary filled, secondary outline, both lifting -2px on hover).

- **Shape:** Soft rectangle (8px radius).
- **Primary:** White background, green text/border; hover inverts to green fill.
- **Secondary / Ghost:** Transparent with green stroke; hover fills green.
- **Focus:** Standard Docusaurus focus; no custom ring invented.

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
Docusaurus navbar with Home title, logo (`logo.svg` / `logoDark.svg`), left Blog (docs sidebar), Showcase dropdown (Apps, Businesses, Hardware, Other, Websites), About, and emoji shortcuts. Dark footer with copyright only. Mobile collapses at 996px per Docusaurus default.

### Signature Components
- **Header hero:** Particle field behind split hero, stroked italic title, grayscale portrait that tilts in 3D and reveals a color character layer on hover.
- **Testimonial collage:** Alternating angled cards with rotated avatar tiles (grayscale → color on hover) and highlight-marker names.
- **Logos marquee:** Infinite 25s scroll track with edge fade masks in primary green, pausing on hover, items dimmed (grayscale + 0.7 opacity) until hovered.

## Do's and Don'ts

Concrete guardrails grounded in the shipped code.

### Do:
- **Do** use the theme-correct green (Forest Canopy #2e8555 in light, Mint Signal #25c2a0 in dark) for every accent, stroke, and CTA fill.
- **Do** keep surfaces flat at rest with 1px neutral hairlines; add shadow only on hover/focus/tilt.
- **Do** reserve Anton italic + stroke for the site header; set all section titles in the system sans.
- **Do** preserve external CTA attributes (`target="_blank" rel="noopener noreferrer"`) on cal.com and outbound links.
- **Do** collapse 3-col stats and 2-col secondary grids to 1 column under 768px, and the header split under 996px.

### Don't:
- **Don't** introduce a new accent hue or promote the one-off blues/purples (#1976d2, #667eea) to system roles.
- **Don't** apply persistent drop shadows or glass blur to base cards — lift is feedback only.
- **Don't** reuse display rotation, text-stroke, or testimonial tilt outside their signature components.
- **Don't** invent testimonials, client names, stats, or pricing beyond `Testimonials`, `LogosCarousel`, `FeaturedWork`, and `PRODUCT.md` evidence.
