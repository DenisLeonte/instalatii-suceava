# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Business website for **Instalatii Suceava**, a Romanian plumbing/heating/AC company. Single-page application with no backend — all content is hardcoded in components.

## Commands

- `npm start` — Dev server on localhost:3000
- `npm run build` — Production build to `build/`
- `npm test` — Run tests (jest, watch mode)
- `npm run deploy` — Build and deploy to GitHub Pages

## Tech Stack

- React 19 + TypeScript (Create React App)
- Pure CSS (no framework) — dark mode design
- GitHub Pages deployment (`https://denisleonte.github.io/instalatii-suceava`)

## Architecture

Single-page app with anchor-based navigation (no router). All components render sequentially in `App.tsx`:

```
App → Header | Hero | About | Experience | Services | Portfolio | Contact | Footer
```

**Navigation** uses hash anchors: `#acasa`, `#despre`, `#experienta`, `#servicii`, `#portofoliu`, `#contact`. Sections use `scroll-margin-top: 80px` for fixed header offset.

**Data** lives directly in each component as typed arrays/objects — no API, CMS, or global state. Local `useState` only in Header (scroll/mobile menu) and Portfolio (active filter).

## Styling

Two CSS files with no component scoping:
- `src/index.css` — CSS variables, resets, global styles
- `src/App.css` — All component styles

**CSS variables** (defined in `:root`): `--navy`, `--orange`, `--blue` + variants, `--gray-50` through `--gray-900`, `--shadow-*`, `--radius-*`, `--transition`. Dark theme with navy/orange/blue palette.

**Responsive breakpoints**: 768px and 900px. Mobile-first with hamburger nav.

**Fonts** (loaded via Google Fonts in `public/index.html`): Inter (400-800) for body, Plus Jakarta Sans (600-800) for headings.

## Content Language

All user-facing text is in **Romanian**. Section IDs, variable names, and code are in English.
