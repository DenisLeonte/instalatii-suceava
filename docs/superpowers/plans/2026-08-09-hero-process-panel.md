# Hero Process Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage hero's ambiguous schematic with the approved four-step customer process while preserving exact line, circle, and text alignment at desktop and mobile sizes.

**Architecture:** Keep the process markup local to `src/pages/index.astro` because it is homepage-only content. Replace the obsolete schematic styles in `src/styles/app.css` with a semantic ordered-list component whose connectors are absolutely positioned from one node center to the next; responsive rules adjust spacing and typography without changing the alignment model.

**Tech Stack:** Astro 7, semantic HTML, project CSS custom properties, PowerShell verification commands, browser screenshot QA.

## Global Constraints

- The copy must remain exactly: `MĂ CONTACTEZI`, `VIN LA LOCAȚIE`, `PRIMEȘTI DEVIZUL`, `EXECUT LUCRAREA` with the approved explanatory lines.
- The route has four identical circles on one vertical axis and three segments that meet adjacent circle centers exactly.
- Each main title is vertically centered on its circle; its subtitle is positioned independently below it.
- Preserve the existing dark mineral panel, fine grid, condensed headings, monospace labels, and offset red shadow.
- Remove the obsolete water, heat, air, active-state, 100 km diamond, and `CL–15` content from the hero.
- Do not change the hero headline, description, CTAs, separate service-area section, header, footer, service pages, SEO content, or brand assets.
- Do not add dependencies or JavaScript animation.
- Preserve all unrelated working-tree and staged changes; do not create an implementation commit unless the user requests one.

## Design map

- **Subject:** a local Suceava plumbing firm whose owner personally assesses and executes work.
- **Audience:** homeowners and property managers who want to know what happens and what it costs before work starts.
- **Single job:** remove uncertainty between first contact and completed work.
- **Palette:** `--ink` panel, `--paper` primary copy, `--water-light` contact, `#b6ccc8` site assessment, `--paper` estimate, `--heat-light` execution, `--copper` offset shadow.
- **Type:** existing `--font-display` for stage titles, `--font-mono` for numbers and supporting labels, existing body face outside the panel.
- **Signature:** a plumbing-like vertical line that is also a literal customer journey.

```text
┌──────────────────────────────────┐
│ FLUX / LUCRARE             01—04 │
├──────────────────────────────────┤
│ 01  ○  MĂ CONTACTEZI             │
│     │  TELEFON SAU WHATSAPP      │
│ 02  ○  VIN LA LOCAȚIE            │
│     │  VĂD EXACT CE ESTE DE FĂCUT│
│ 03  ○  PRIMEȘTI DEVIZUL          │
│     │  ȘTII COSTUL ÎNAINTE...    │
│ 04  ○  EXECUT LUCRAREA           │
│        PERSONAL · GARANȚIE 12 LUNI│
├──────────────────────────────────┤
│ SUCEAVA  CONTACT → ... → EXECUȚIE│
└──────────────────────────────────┘
```

The sequence numbering is justified because order is the content. The grid and pipe vocabulary come from technical installation drawings; the meaningless pseudo-system code is removed so every structural label communicates something true.

---

### Task 1: Replace the hero schematic with semantic process markup

**Files:**
- Modify: `src/pages/index.astro:99-129`

**Interfaces:**
- Consumes: `business.warranty.months` for the confirmed warranty value.
- Produces: `.hero-process`, `.hero-process__header`, `.hero-process__steps`, `.hero-process__step`, `.hero-process__number`, `.hero-process__track`, `.hero-process__node`, `.hero-process__segment`, `.hero-process__copy`, `.hero-process__title`, `.hero-process__detail`, and `.hero-process__footer` elements for CSS.

- [x] **Step 1: Build the unchanged page and verify the new process is absent**

Run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
rg -n "MĂ CONTACTEZI|hero-process__step" dist/index.html
```

Expected: Astro build passes; `rg` finds no approved process markup.

- [x] **Step 2: Replace the obsolete schematic markup**

Replace the existing `.hero__schematic` block with:

```astro
<aside class="hero-process" aria-labelledby="hero-process-title">
  <div class="hero-process__header">
    <span id="hero-process-title">Flux / lucrare</span>
    <strong>01—04</strong>
  </div>
  <ol class="hero-process__steps">
    <li class="hero-process__step hero-process__step--contact">
      <span class="hero-process__number" aria-hidden="true">01</span>
      <span class="hero-process__track" aria-hidden="true"><span class="hero-process__node"></span><span class="hero-process__segment"></span></span>
      <span class="hero-process__copy"><strong class="hero-process__title">Mă contactezi</strong><small class="hero-process__detail">Telefon sau WhatsApp</small></span>
    </li>
    <li class="hero-process__step hero-process__step--visit">
      <span class="hero-process__number" aria-hidden="true">02</span>
      <span class="hero-process__track" aria-hidden="true"><span class="hero-process__node"></span><span class="hero-process__segment"></span></span>
      <span class="hero-process__copy"><strong class="hero-process__title">Vin la locație</strong><small class="hero-process__detail">Văd exact ce este de făcut</small></span>
    </li>
    <li class="hero-process__step hero-process__step--estimate">
      <span class="hero-process__number" aria-hidden="true">03</span>
      <span class="hero-process__track" aria-hidden="true"><span class="hero-process__node"></span><span class="hero-process__segment"></span></span>
      <span class="hero-process__copy"><strong class="hero-process__title">Primești devizul</strong><small class="hero-process__detail">Știi costul înainte să încep</small></span>
    </li>
    <li class="hero-process__step hero-process__step--work">
      <span class="hero-process__number" aria-hidden="true">04</span>
      <span class="hero-process__track" aria-hidden="true"><span class="hero-process__node"></span></span>
      <span class="hero-process__copy"><strong class="hero-process__title">Execut lucrarea</strong><small class="hero-process__detail">Personal · garanție {business.warranty.months} luni</small></span>
    </li>
  </ol>
  <div class="hero-process__footer" aria-hidden="true"><span>Suceava</span><span>Contact → vizită → deviz → execuție</span></div>
</aside>
```

- [x] **Step 3: Rebuild and verify semantic content**

Run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
rg -n "Mă contactezi|Vin la locație|Primești devizul|Execut lucrarea" dist/index.html
rg -n "TRASEE / SISTEM|KM RAZĂ|01 / ACTIV" dist/index.html
```

Expected: build passes; all four new steps are found; obsolete labels are absent.

### Task 2: Implement the exact route geometry and responsive styles

**Files:**
- Modify: `src/styles/app.css:408-585`
- Modify: `src/styles/app.css:1598-2052`

**Interfaces:**
- Consumes: the `.hero-process*` structure from Task 1 and existing color/font custom properties.
- Produces: a stable 78 px desktop row model and a 72 px narrow-screen row model; `.hero-process__segment` always has `top: 50%` and `height: 100%`, so it runs from one circle center to the next.

- [x] **Step 1: Replace all obsolete schematic selectors**

Implement these geometry rules in the main hero section:

```css
.hero-process { position: relative; overflow: hidden; background: var(--ink); box-shadow: 12px 12px 0 var(--copper); color: var(--paper); isolation: isolate; }
.hero-process::before { position: absolute; z-index: -1; inset: 0; opacity: .12; background-image: linear-gradient(rgba(248,250,248,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(248,250,248,.6) 1px,transparent 1px); background-size: 23px 23px; content: ""; }
.hero-process__header,.hero-process__footer { display:flex; min-height:58px; align-items:center; justify-content:space-between; gap:18px; padding:0 20px; font-family:var(--font-mono); font-size:.63rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; }
.hero-process__header { border-bottom:1px solid var(--line-dark); }
.hero-process__header strong { color:var(--water-light); font-size:.71rem; }
.hero-process__steps { margin:0; padding:23px 31px; list-style:none; }
.hero-process__step { --step-color:var(--paper); position:relative; display:grid; height:78px; grid-template-columns:30px 34px minmax(0,1fr); align-items:center; }
.hero-process__number { color:var(--step-color); font-family:var(--font-mono); font-size:.61rem; font-weight:700; }
.hero-process__track { position:relative; width:16px; height:16px; }
.hero-process__node { position:absolute; z-index:2; inset:0; box-sizing:border-box; border:4px solid var(--ink); border-radius:50%; background:var(--step-color); box-shadow:0 0 0 2px var(--step-color); }
.hero-process__segment { position:absolute; z-index:1; top:50%; left:6px; width:4px; height:78px; background:var(--segment-color,var(--step-color)); }
.hero-process__copy { position:relative; display:flex; height:24px; align-items:center; min-width:0; }
.hero-process__title { font-family:var(--font-display); font-size:1.48rem; font-weight:700; letter-spacing:.01em; line-height:24px; text-transform:uppercase; white-space:nowrap; }
.hero-process__detail { position:absolute; top:29px; left:0; color:#9db0b4; font-family:var(--font-mono); font-size:.53rem; font-weight:600; letter-spacing:.055em; line-height:1.3; text-transform:uppercase; white-space:nowrap; }
.hero-process__step--contact { --step-color:var(--water-light); --segment-color:var(--water); }
.hero-process__step--visit { --step-color:#b6ccc8; --segment-color:#8fa5aa; }
.hero-process__step--estimate { --step-color:var(--paper); --segment-color:var(--heat); }
.hero-process__step--work { --step-color:var(--heat-light); }
.hero-process__footer { min-height:61px; border-top:1px solid var(--line-dark); color:#b6c5c8; font-size:.57rem; }
```

- [x] **Step 2: Replace the old responsive exceptions**

At `max-width: 1120px`, reduce process horizontal padding to `21px` and title size to `1.32rem`. At `max-width: 900px`, set `.hero-process` to `width: min(100%, 580px); margin: 5px 0 8px auto`. At `max-width: 700px`, use an 8 px shadow, `padding-inline: 18px`, 72 px rows and segments, and a `1.25rem` title. At `max-width: 430px`, use `padding-inline: 14px`, `grid-template-columns: 27px 30px minmax(0,1fr)`, `.hero-process__title { font-size: 1.08rem; }`, `.hero-process__detail { font-size: .46rem; letter-spacing: .035em; }`, and hide only the footer's summary, not process content.

- [x] **Step 3: Verify no obsolete selectors remain and CSS syntax is buildable**

Run:

```powershell
rg -n "hero__schematic|schematic__" src/styles/app.css src/pages/index.astro
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

Expected: `rg` returns no matches and the Astro build succeeds.

### Task 3: Visual and regression verification

**Files:**
- Verify: `src/pages/index.astro`
- Verify: `src/styles/app.css`

**Interfaces:**
- Consumes: completed hero process markup and CSS.
- Produces: verified desktop and mobile rendering with no code changes outside the approved scope unless a measured visual defect requires a local correction.

- [x] **Step 1: Run the Astro development server**

Run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run dev -- --host 127.0.0.1
```

Expected: the homepage is available locally.

- [x] **Step 2: Inspect desktop at 1440 × 900**

Verify the entire hero, specifically that every connector meets circle centers, titles align with circle centers, all copy is visible, and the panel does not increase the hero beyond the intended composition.

- [x] **Step 3: Inspect mobile at 390 × 844 and narrow mobile at 320 px width**

Verify the panel appears below the CTAs, has no horizontal scroll, all four steps and subtitles remain visible, and alignment is unchanged.

- [x] **Step 4: Run final checks**

Run:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
git diff --check -- src/pages/index.astro src/styles/app.css
git diff -- src/pages/index.astro src/styles/app.css
```

Expected: build passes; `git diff --check` reports no whitespace errors; diff contains only the approved hero process replacement and its responsive CSS.
