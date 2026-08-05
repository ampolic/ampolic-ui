# @ampolic/ui

Shared Astro components for Ampolic client sites. Ships **`.astro` source** — the
consuming site compiles them, so there is no build step here. All styling is
Tailwind v4 utility classes referencing the consumer's design tokens
(`--color-brand`, `--radius-base`, `--spacing-section`, …); the package bundles
no CSS, so components automatically adopt each site's brand.

## Components

Button · Callout · Card · CtaBand · EmailLink · FaqList · Prose ·
SectionHeading · TestimonialCard

```astro
---
import { Button, Card } from '@ampolic/ui';
---
```

Peer dependencies: `astro` ^5, `astro-icon` ^1 (Callout uses Lucide icons —
the site must have the `astro-icon` integration and `@iconify-json/lucide`).

## Installing in a site repo (one-time auth setup)

The package is published to **GitHub Packages**, which requires auth even for reads.

1. In the site repo, commit an `.npmrc` containing:
   `@ampolic:registry=https://npm.pkg.github.com`
2. In your **user** `~/.npmrc` (never committed), add:
   `//npm.pkg.github.com/:_authToken=<classic PAT with read:packages>`
3. In CI, pass the token via `NODE_AUTH_TOKEN` (the reusable
   `ampolic-core` site-ci workflow already wires this).
4. `pnpm add @ampolic/ui` (see `.npmrc.example`).

## Development

```bash
pnpm install
pnpm dev     # playground at http://localhost:4321 — every component rendered
pnpm smoke   # astro check + build (the CI gate)
```

## Releasing

Versioning is [changesets](https://github.com/changesets/changesets)-driven:

1. On `dev`: `pnpm changeset` — describe the change, pick a bump.
2. Merge `dev` → `main` via PR. The Release workflow opens/updates a
   **Version Packages** PR.
3. A human merges that PR → the workflow publishes to GitHub Packages.

Branch model: `dev` (working, default) → `main` (release, via PR). No feature branches.
