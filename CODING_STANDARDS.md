# Coding standards

Judgement calls for review. Mechanical rules live in checks (`npm run typecheck`, `npm run check:build`).

## Specificity

A CSS-module class (0,1,0) loses to Infima globals such as `.button--primary:focus-visible` and `[data-theme="dark"] .button--primary`. When a module restyles an Infima element (buttons, links, `hero--primary` bands), find the winning rule in light and dark, for default, `:hover` and `:focus-visible`. A focus ring needs at least 3:1 against the band behind it.

## Drift

A change that removes or renames behaviour updates every statement that describes it in the same commit: code comments, `DESIGN.md`, `.impeccable/surfaces/`. Grep the old term.

## Hydration

Fix a hydration mismatch at its source (move an inline `<style>` into a CSS module). `suppressHydrationWarning` hides the mismatch and leaves it in place.

## Spine scrub

Detail, showcase, and about spines stay scroll-scrubbed: `CaseSection` is always `scrub`. The `/case-studies` index ledger stays Reveal-fill by design (verified 2026-10-21 in-browser: scrub keyframes attach but complete instantly on ~270px rows with only ~866px page scroll, so no visible draw). A new scrubbed spine section without `scrub` is a regression unless DESIGN.md names it as an exception. The Reveal node-fill stays as the fallback (mobile, no `animation-timeline`, reduced motion).
