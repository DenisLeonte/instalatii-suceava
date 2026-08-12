# Hero Process Panel Design

Status: approved visual direction, pending implementation plan

Date: 2026-08-09

## Context

The current right-hand hero panel is visually consistent with the industrial design, but its schematic of water, heat, air, and a 100 km marker does not communicate a useful message without explanation. The replacement should preserve the technical character while explaining the real customer journey.

## Objective

Replace the abstract hero schematic with a compact, immediately understandable four-step process. A visitor should understand what happens after contacting Leonte Install before pressing the call or WhatsApp button.

## Confirmed process and copy

The panel uses a personal, direct voice and presents these steps in this order:

1. **MĂ CONTACTEZI** — TELEFON SAU WHATSAPP
2. **VIN LA LOCAȚIE** — VĂD EXACT CE ESTE DE FĂCUT
3. **PRIMEȘTI DEVIZUL** — ȘTII COSTUL ÎNAINTE SĂ ÎNCEP
4. **EXECUT LUCRAREA** — PERSONAL · GARANȚIE 12 LUNI

Footer summary: `CONTACT → VIZITĂ → DEVIZ → EXECUȚIE`

## Visual direction

- Preserve the current industrial workshop language: dark mineral panel, fine technical grid, condensed headings, monospace labels, and offset red shadow.
- Use a vertical route suited to the narrow hero column.
- Show four numbered connection points joined by three straight colored segments.
- Use blue for the first contact segment, a neutral mineral tone for the assessment segment, and red for the transition into execution.
- Keep the route abstract enough to feel designed, but make the meaning explicit through the process copy.
- Do not reintroduce the old water, heat, air, active-status, or 100 km schematic labels. The service-area section already communicates the travel radius.

## Alignment rules

- Every connecting segment must start and end at the exact center of its adjacent circles.
- Circles share one vertical axis and use identical dimensions.
- Each main step title is vertically centered on the corresponding circle.
- The small explanatory line sits below the title and must not shift the title away from the circle axis.
- Step numbers align with their corresponding circles.
- The footer remains visually separate from the process through a horizontal rule.

## Responsive behavior

- On desktop, the panel remains in the right-hand hero column and should not make the hero taller than necessary.
- On narrow screens, the panel moves below the hero copy and calls to action at full available width.
- The process must remain readable without horizontal scrolling, clipping, or overlapping text.
- Type and spacing may scale down at small breakpoints, but all four steps and their explanatory lines remain visible.
- The circles, segments, and titles must keep the same alignment rules at every breakpoint.

## Semantics and accessibility

- Implement the four steps as an ordered list or equivalent meaningful HTML structure.
- Treat the grid, lines, and circles as decorative so assistive technology reads only the useful process content.
- Do not rely on color alone to communicate sequence; numbers and text provide the meaning.
- Maintain sufficient text contrast against the dark panel.
- The panel has no required interaction or animation.

## Scope

In scope:

- Replace only the existing schematic inside the homepage hero.
- Add the necessary responsive styles for the new process panel.
- Remove CSS that is exclusive to the obsolete schematic when it is no longer referenced.

Out of scope:

- Changes to the hero headline, description, call or WhatsApp buttons.
- Changes to the separate 100 km service-area section.
- Changes to service pages, SEO content, header, footer, or brand assets.

## Acceptance criteria

1. The hero panel clearly presents contact, site visit, estimate, and execution in that order.
2. The wording matches the confirmed copy above, including the personal singular voice.
3. Each line segment meets the centers of its adjacent circles exactly.
4. Each title is centered on the same horizontal axis as its circle; subtitles sit independently below.
5. The obsolete schematic labels and 100 km diamond are absent from the hero.
6. The panel fits cleanly at desktop and mobile widths without overflow or overlap.
7. The homepage build succeeds and the finished hero is visually checked at representative desktop and mobile viewports.
