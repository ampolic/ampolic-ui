# @ampolic/ui

## 0.5.2

### Patch Changes

- 1265fb2: FaqList: the card now hugs its content — the height reservation moved to an
  unstyled outer frame, so leftover ghost space blends into the page background
  instead of showing as empty card.

## 0.5.1

### Patch Changes

- 34632eb: FaqList: items are closable again (the keep-one-open script is removed — the
  ghost sizer keeps the card height stable even with everything closed). The
  first item still opens by default. Component is now zero-JS.

## 0.5.0

### Minor Changes

- 2fcc4ad: FaqList: answers render at natural height — the card reserves `questions +
tallest answer` via a CSS ghost sizer, so short answers no longer sit in
  oversized boxes and tall answers no longer scroll internally (a max-height
  safety valve remains). The `answerHeight` prop is removed. Outer card height
  stays constant; zero JS involved in sizing.

## 0.4.1

### Patch Changes

- 44ff2d2: FaqList keeps exactly one item open when `defaultOpen` is set: closing the open
  item re-opens the first. Tiny progressive-enhancement script; no-JS behavior
  unchanged.

## 0.4.0

### Minor Changes

- 0a737ef: FaqList card design: optional per-item `icon` (astro-icon name) in a
  brand-tinted circle, bordered card container with dividers, soft brand tint on
  the open item. Mechanics unchanged (single-open, reserved height).

## 0.3.0

### Minor Changes

- c8f9563: FaqList redesign: layout-shift-free accordion. Native `<details name>` single-open
  grouping, reserved answer height (`answerHeight` prop) with internal scrolling,
  `defaultOpen` and `name` props, self-contained styles (chevron/fade transitions,
  reduced-motion aware). Sites no longer need global `[data-faq]` CSS.

## 0.2.0

### Minor Changes

- 0d44e06: Add PricingTiers (props-driven tier cards with featured emphasis and
  strikethrough regular pricing), TeamMemberCard (portrait, role, bio, action
  link), and WorkCard (portfolio screenshot card with external visit action) —
  generalized from the site-ampolic rebuild.

## 0.1.0

### Minor Changes

- ca16ed4: Initial release: Button, Card, Callout, CtaBand, EmailLink, FaqList, Prose,
  SectionHeading, TestimonialCard — extracted from ampolic-astro-template.
