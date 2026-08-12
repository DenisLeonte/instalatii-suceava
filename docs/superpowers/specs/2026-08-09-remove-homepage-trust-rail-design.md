# Remove Homepage Trust Rail Design

Status: approved design, pending implementation plan

Date: 2026-08-09

## Context

The dark trust rail below the homepage hero repeats the same four claims already communicated in the hero: 15 years of experience, personal attendance, an estimate before work starts, and a 12-month warranty. On mobile, stacking these four desktop cells makes the repeated section long and visually incomplete.

## Decision

Remove the trust rail entirely instead of redesigning it. The homepage content order becomes:

`Hero and process → Services → Work → About → Service area → FAQ → Contact`

The section receives no replacement heading, cards, decorative band, or call to action. The existing Services section header and its technical rule provide the next meaningful entry point.

## Implementation scope

- Remove the homepage `trust` data array because it has no remaining consumer.
- Remove the `<section class="trust">` markup from the homepage.
- Remove all `.trust`, `.trust__grid`, and `.trust__item` styles, including responsive overrides.
- Preserve the hero, process panel, Services content, section order after Services, and mobile action bar.
- Do not move the four claims elsewhere; they already exist in the hero.
- Do not add new copy or a new transition component.

## Responsive behavior

- On every viewport, Services follows the hero directly.
- Mobile must no longer contain the four stacked trust cells.
- The transition must rely on the existing end of the hero and the existing Services section header; it must not introduce excessive empty space or horizontal overflow.

## Accessibility and SEO

- Removing the duplicated section must not remove the claims from the hero content.
- Heading order remains unchanged because the removed section has no heading.
- No structured data or metadata changes are required.

## Acceptance criteria

1. No `.trust` section is present in the homepage source or generated homepage HTML.
2. No `.trust*` selectors remain in the application stylesheet.
3. The four claims remain available in the hero where applicable.
4. Services follows the hero directly in the document order.
5. Desktop and mobile layouts show a deliberate, uncluttered transition without the repeated dark block.
6. The Astro build succeeds for all pages.
