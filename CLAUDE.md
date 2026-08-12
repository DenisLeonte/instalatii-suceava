# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Website for **Leonte Install** (PFA Leonte GH Cătălin, CUI 37412949), a plumbing,
heating and HVAC business in Suceava, Romania. Static multi-page site, no backend.

Live at `https://instalatiisuceava.ro`.

## Commands

- `npm run dev` — dev server on localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the production build
- `node scripts/generate-icons.mjs` — regenerate icons and `og-image.jpg`

There is no test suite.

## Tech Stack

- Astro 7, static output (`build.format: 'directory'`, `trailingSlash: 'always'`)
- **No UI framework.** The only interactive element is the mobile menu, which is
  ~40 lines of vanilla JS in `Header.astro`. Do not reach for React to add small
  interactions — check whether a `<details>` element or a short script will do.
- Pure CSS, two files, no scoping or preprocessor
- Deployed to Cloudflare Pages on push to `main`

## Data lives in config, never in components

`src/config/business.ts` is the single source of truth for business identity.
`services.ts` and `portfolio.ts` hold the services and completed work.

**Never hard-code a business detail into a component, page or `<head>` tag.** The
trading name is provisional and must stay a one-line change. If you find yourself
typing the phone number, an address, the number of years, or the warranty length,
import it instead.

Fields are optional by design: absent data renders nothing, and the compiler
forces callers to handle it. Never fill a config field with placeholder text to
make a page look finished.

## Content rules — these carry real risk

- **Do not advertise gas work.** No ANRE authorisation is held.
- **Do not use the word "autorizat"** anywhere until `business.credentials` holds
  a real authority and document number. Gate any such display on
  `hasValidCredentials()`.
- **The warranty is verbal.** Use `warrantyLabel()`, which renders "Garanție 12
  luni". Do not write "garanție scrisă".
- **Never invent statistics, reviews, ratings or testimonials.** The previous
  version of this site claimed "500+ proiecte finalizate" and "100% clienți
  mulțumiți". Both were removed because neither could be substantiated, and both
  cost more trust than they bought.
- **No street address or precise geo coordinates.** This is a service-area
  business; `areaServed` uses a GeoCircle around a public city reference point.
- Only claim service areas and localities where work has genuinely been done.

## Voice

Singular and named: Cătălin Leonte works with helpers but attends every job
personally. Write "sunt", "execut", "vin personal" — never "suntem" or "echipa
noastră". The old site mixed both and it read as unedited template text.

All user-facing text is Romanian. Code, section IDs and filenames are English.

## Adding a page

One file per URL in `src/pages/`. Every page passes `title` and `description` to
`Layout.astro`, which handles canonical, Open Graph, Twitter card and the
`Plumber` JSON-LD. Service pages use `ServicePage.astro` for the shared chrome
but write their body content by hand — templated service copy reads as templated.

The sitemap is generated from the routes; do not hand-maintain one.

A service only earns its own page when there is genuine first-hand content and
real photography for it. Otherwise set `slug: null` in `services.ts` so it is
listed without a URL. Thin pages compete with the pages that have substance.

## Images

Source photography goes in `src/assets/` at full size, referenced via Astro's
`<Picture>` (AVIF + WebP, multiple widths, `srcset`/`sizes`, intrinsic
dimensions, `loading="lazy"` below the fold). Do not put photographs in
`public/` — that skips optimisation. The homepage previously shipped ~11 MB of
images; it now ships around 124 KB.

## Styling

- `src/styles/base.css` — CSS custom properties, resets, global elements
- `src/styles/app.css` — all component styles

Dark theme, navy/orange/blue. Variables: `--navy`, `--orange`, `--blue`,
`--gray-50` through `--gray-900`, `--shadow-*`, `--radius-*`, `--transition`.
Note that the gray scale is inverted for a dark UI: `--gray-50` is darkest.

Breakpoints: 768px, and 899px for the mobile navigation.

Accessibility constraints that are easy to regress:
- Touch targets stay at least 44×44 px.
- The closed mobile nav is hidden with `visibility: hidden`, not just moved
  off-screen — otherwise its links stay keyboard-focusable.
- Filter controls are toggle buttons with `aria-pressed`, not a fake tablist.
