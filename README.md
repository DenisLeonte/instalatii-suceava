# instalatiisuceava.ro

Website for **Leonte Install** (PFA Leonte GH Cătălin), a plumbing, heating and
HVAC business in Suceava, Romania.

Static site built with [Astro](https://astro.build). No UI framework, no backend,
no client-side routing.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `node scripts/generate-icons.mjs` | Regenerate favicons, PWA icons and `og-image.jpg` from `src/assets/logo.png` |

## Deployment

Cloudflare Pages, via `.github/workflows/deploy-cloudflare.yml`, which runs on
push to `main`. It needs the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
repository secrets. The custom domain is set by `public/CNAME`.

## Changing business details

**Everything about the business lives in `src/config/business.ts`** — name, legal
name, CUI, phone, email, hours, service area, warranty. Components, `<head>` tags
and the JSON-LD all read from it, so the public name is a one-line change.

The trading name `Leonte Install` is provisional; that is why it is a single
constant rather than a string repeated across the codebase.

Empty fields render nothing rather than placeholder text. `credentials` and
`socials` are deliberately empty and must stay that way until real values exist —
see "Content rules" below.

`src/config/services.ts` holds the services. A service with `slug: null` appears
in lists but has no page of its own yet, because there is no real content or
photography for one.

## Content rules

These are not stylistic preferences. Breaking them creates legal or trust risk:

- **No gas work may be advertised.** No ANRE authorisation is held.
- **The word "autorizat" may not appear** until `business.credentials` contains a
  real authority and document number. `hasValidCredentials()` gates the display.
- **The warranty is verbal, not written.** `warrantyLabel()` renders
  "Garanție 12 luni", not "Garanție scrisă". Only flip `warranty.written` when it
  is genuinely printed on the invoice.
- **No invented statistics, reviews or ratings.** The previous site claimed
  "500+ proiecte" and "100% clienți mulțumiți"; neither could be substantiated.
- No street address or precise coordinates: this is a service-area business.

## Structure

```
src/
  config/       business.ts, services.ts, portfolio.ts — all real-world data
  layouts/      Layout.astro (head, schema), ServicePage.astro
  components/   Header, Footer, ActionBar, ServicesGrid, PortfolioGrid, …
  pages/        one file per URL
  styles/       base.css (tokens, resets), app.css (components)
  assets/       source photography, optimised at build time
```

All user-facing text is Romanian. Code, IDs and filenames are English.

## Images

Photographs go in `src/assets/` at full size and are referenced through Astro's
`<Picture>`, which emits AVIF and WebP at multiple widths with correct
`srcset`/`sizes` and intrinsic dimensions. Do not hand-optimise or put
photographs in `public/` — that bypasses the pipeline.
