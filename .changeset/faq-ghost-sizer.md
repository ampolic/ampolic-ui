---
'@ampolic/ui': minor
---

FaqList: answers render at natural height — the card reserves `questions +
tallest answer` via a CSS ghost sizer, so short answers no longer sit in
oversized boxes and tall answers no longer scroll internally (a max-height
safety valve remains). The `answerHeight` prop is removed. Outer card height
stays constant; zero JS involved in sizing.
