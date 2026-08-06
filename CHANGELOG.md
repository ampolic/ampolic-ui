# @ampolic/ui

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
