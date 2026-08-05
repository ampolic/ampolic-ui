/* Public API of @ampolic/ui. Consumers do:
     import { Button, Card } from '@ampolic/ui';
   Components ship as .astro source; the consuming Astro project compiles them.
   All styling is Tailwind v4 utility classes referencing the consumer's design
   tokens (--color-brand, --radius-base, …) — no styles are bundled here. */
export { default as Button } from './Button.astro';
export { default as Callout } from './Callout.astro';
export { default as Card } from './Card.astro';
export { default as CtaBand } from './CtaBand.astro';
export { default as EmailLink } from './EmailLink.astro';
export { default as FaqList } from './FaqList.astro';
export { default as Prose } from './Prose.astro';
export { default as SectionHeading } from './SectionHeading.astro';
export { default as TestimonialCard } from './TestimonialCard.astro';
