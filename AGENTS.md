# AGENTS.md - Development Guide for mrKannahV4

## Project Overview

This is a Docusaurus 3.9.2 personal portfolio website built with React 19 and TypeScript. It showcases services, featured work, skills, and testimonials for a technology consultant.

## Build Commands

```bash
# Start development server with hot reload
npm start

# Build for production
npm run build

# Run TypeScript type checking
npm run typecheck

# Serve the production build locally
npm run serve

# Clear Docusaurus cache
npm run clear
```

## Code Style Guidelines

### TypeScript

- Use TypeScript for all files (`.tsx` for components, `.ts` for utilities)
- Extend `@docusaurus/tsconfig` - see `tsconfig.json`
- Use `import type { JSX } from "react"` for type-only imports
- Prefer explicit type annotations for function parameters and return types

```typescript
// Good
import type { JSX } from "react";
import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function MyComponent({ title }: Props): JSX.Element {
  return <div>{title}</div>;
}
```

### Imports

- Use Docusaurus path aliases for internal imports:
  - `@site/src/components/...` - local components
  - `@theme/...` - Docusaurus built-in components (Layout, Heading, etc.)
  - `@docusaurus/...` - Docusaurus core modules

```typescript
// Good imports
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Contact from "@site/src/components/Contact";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
```

- Order imports: external → Docusaurus → local components

### Components

- Use `index.tsx` pattern for component directories with default export
- Components should be functional components returning `JSX.Element`
- Define types for component props above the component

```typescript
// src/components/MyComponent/index.tsx
import React, { type JSX } from "react";
import Heading from "@theme/Heading";

type MyComponentProps = {
  title: string;
  items: string[];
};

export default function MyComponent({ title, items }: MyComponentProps): JSX.Element {
  return (
    <div>
      <Heading as="h2">{title}</Heading>
      {/* content */}
    </div>
  );
}
```

### File Organization

```
src/
├── components/          # Reusable React components
│   ├── ComponentName/
│   │   └── index.tsx
│   └── index.ts (if single component)
├── pages/               # Docusaurus pages (file-based routing)
│   ├── index.tsx        # Home page
│   └── subfolder/       # Nested pages
├── theme/               # Custom theme overrides
└── css/                 # Custom styles (if needed)
```

### Styling

- Use Docusaurus/Infima CSS classes for consistent styling
- Use inline styles sparingly for dynamic values
- Common Infima classes: `container`, `card`, `card__body`, `hero`, `hero--primary`, `section`, `button--primary`, `margin-top--md`, `text--center`

```typescript
// Using Infima classes
<div className="card">
  <div className="card__body">
    <h3 className="hero__title">Title</h3>
  </div>
</div>

// Inline styles for dynamic values
<div style={{ display: "flex", gap: "1rem" }}>
```

### Naming Conventions

- **Files**: kebab-case (e.g., `my-component.tsx`, `index.tsx`)
- **Components**: PascalCase (e.g., `MyComponent`, `FeaturedWork`)
- **Types/Interfaces**: PascalCase with descriptive names (e.g., `FeaturedWorkItem`)
- **Variables**: camelCase

### Error Handling

- No formal error handling patterns required
- For external links, always use `target="_blank" rel="noopener noreferrer"`
- Use TypeScript null checks when accessing optional properties

### Type Checking

Run `npm run typecheck` before committing to catch type errors. This project uses strict TypeScript settings from `@docusaurus/tsconfig`.

## Adding New Features

### Adding a New Page

1. Create a new `.tsx` file in `src/pages/`
2. Export a default component function
3. The file path determines the URL (e.g., `src/pages/about.tsx` → `/about`)

### Adding a New Component

1. Create a new folder in `src/components/`
2. Add `index.tsx` with the component code
3. Import using `@site/src/components/ComponentName`

### Adding External Links

Always include security attributes:
```tsx
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link Text
</a>
```

## Dependencies

Key dependencies:
- `@docusaurus/core` - Docusaurus framework
- `react` / `react-dom` - React 19
- `@fortawesome/react-fontawesome` - Icons
- `@tsparticles/react` - Particle effects
- `react-player` - Video/audio playback
- `react-photo-album` - Photo galleries

## Development Workflow

1. Run `npm start` for local development
2. Make changes to `src/pages/` or `src/components/`
3. Run `npm run typecheck` to verify types
4. Run `npm run build` to test production build

# Important

None of this applies to projects in the static folder. Those are just static files that are served as-is.