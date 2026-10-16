# AGENTS.md

Docusaurus portfolio site (React 19, TypeScript) for a technology consultant. Projects in `static/` are served as-is; none of this applies to them.

## Read before UI work

- `PRODUCT.md` and `DESIGN.md`: product context and the design system, including its Do's and Don'ts. `.impeccable/` holds the design sidecar and per-surface direction contracts.
- `docs/superpowers/`: specs and plans, local only and gitignored. `docs/` publishes at `/blog`, so `docusaurus.config.ts` also excludes `superpowers/**`.
- Client proof appears in `src/pages/case-studies/`, `src/components/ProofShowcase`, `LogosCarousel` and the `/consulting` page.

## Conventions

- Components: `src/components/<PascalCase>/index.tsx`, a default-export function returning `JSX.Element` (`import type { JSX } from "react"`), props type above it, styles in `styles.module.css`. Other files are kebab-case.
- Shared primitives are Infima and `src/css/custom.css` classes (`section`, `card--elevated`, `button--primary`). Component styling goes in CSS modules.
- Imports use `@site/src/...`, `@theme/...`, `@docusaurus/...`, ordered external, Docusaurus, local.
- External links carry `target="_blank" rel="noopener noreferrer"`.
- Reviewers apply `CODING_STANDARDS.md`.

## Verify

- `npm run typecheck`, then `npm run build && npm run check:build`. CI runs the same.
- Check the browser console on the production build (`npm run serve`) as well as `npm start`: React #418 hydration errors surfaced only there.
- Full-page screenshots taller than about 16,000 device px wrap onto themselves. Capture per section or at DPR 1.
