# @ampolic/ui — agent rules

Shared Astro component library for all Ampolic client sites. Ships `.astro`
source to GitHub Packages; sites compile it themselves.

## Branch rule (absolute)

Agents commit ONLY to `dev`, never to `main`. Humans merge `dev` -> `main` via
PR; merging to `main` triggers the changesets release flow. No feature branches.

## Rules

- Components are props-driven and token-driven: NO hardcoded hex/radii/shadows,
  NO site-specific facts, NO imports from any site repo. Tokens come from the
  consuming site's `@theme` block.
- Every component ≤ 80 lines, pure `.astro` (no React/Vue/Svelte).
- Every change that touches `src/` needs a changeset (`pnpm changeset`) in the
  same commit, and a playground entry in `playground/pages/index.astro`.
- Verify before done: `pnpm smoke` (astro check + build).
- A component moved here from a site must be generalized (props, not baked-in
  copy) and deleted from the site in the same coordinated change.

## Agents must NOT

- Push to `main`, publish manually (`npm publish`), or edit versions/CHANGELOG
  by hand — changesets owns those
- Add dependencies without a TODO note flagging them for review
- Break the public API (`src/index.ts`) without a major-bump changeset

Knowledge base (resolves in the workspace): `../ampolic-core/kb/conventions/astro.md`,
`../ampolic-core/kb/components/README.md`.
