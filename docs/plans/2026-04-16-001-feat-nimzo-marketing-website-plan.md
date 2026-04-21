---
title: "feat: Build Nimzo Data marketing website"
type: feat
status: active
date: 2026-04-16
origin: docs/brainstorms/nimzo-marketing-website-requirements.md
---

# feat: Build Nimzo Data marketing website

## Overview

Build a 19-page static marketing website for Nimzo Data, a boutique GCP data consulting agency. The site launches the brand, surfaces transparent pricing, and positions Antoine's freelance practice as a professional agency. Built with Astro 5, Tailwind CSS v4, and vanilla JS. Deployed on Vercel.

## Problem Frame

Antoine is an active freelance data consultant packaging his practice into a branded agency. The website needs to accomplish three jobs: (1) generate inbound leads via SEO, (2) pre-qualify buyers with visible pricing (€5K-50K ranges), (3) project agency credibility to command higher rates. The website is the launch vehicle for the Nimzo Data brand. (see origin: docs/brainstorms/nimzo-marketing-website-requirements.md)

## Requirements Trace

- R1. 19 visible pages + hidden blog infrastructure
- R2. All content from `docs/SPEC.md`
- R3. Responsive at 375px, 768px, 1280px
- R4-R6. Header with dropdowns, mobile menu with focus trap, 5-column footer
- R7-R10. Service pages with problem-first framing, pricing, cross-links, retainer grid
- R11-R12. Technology pages with shared template, BI comparison sections
- R13-R14. Calendly popup (lazy) + embed + mailto fallback
- R15-R16. Design system from brand guidelines, DESIGN.md
- R17-R18. GDPR opt-in consent, privacy/terms pages
- R19-R21. SEO foundations, structured data, OG image
- R22-R23. data-track attributes, GA4 behind consent
- R24-R25. Lighthouse CI, astro check
- R26. DataPlatformDiagram

## Scope Boundaries

- English only (no i18n)
- No dark mode
- No blog content, no email capture on blog
- No stock photography
- No case studies at launch
- No contact form (Calendly + mailto)
- No custom animations or scroll effects
- No test framework (Lighthouse CI + manual QA)

### Deferred to Separate Tasks

- Social proof / anonymized engagement summaries: P1 post-launch TODO
- Per-page OG images: post-launch optimization
- Blog email capture: when blog content exists

## Context & Research

### Relevant Code and Patterns

No existing code (greenfield). Brand guidelines at `docs/brand/`. Logo PNGs at `docs/brand/LOGO & ASSETS/PNG/`. Illustrator source at `docs/brand/LOGO & ASSETS/Editable.ai`.

### Institutional Learnings

- Tailwind v4 uses `@tailwindcss/vite`, NOT `@astrojs/tailwind` (v3 only). Confidence 9/10.
- Self-hosting fonts eliminates CDN blocking time, helps Lighthouse 90+ gates. Confidence 8/10.
- Consulting sites without social proof have a major conversion gap. Anonymized engagement summaries are the highest-ROI content addition. Confidence 9/10.
- Roboto Regular is the designer's deliberate choice for body text. Confidence 10/10.
- Stock photography rejected for website; brand guide imagery is for collateral. Confidence 10/10.

### External References

- Astro 5 docs: static mode (no SSR adapter needed)
- Tailwind v4: CSS-native `@theme` config, `@tailwindcss/vite` plugin
- Calendly: popup widget API (`Calendly.initPopupWidget()`)
- focus-trap npm package for mobile menu
- Schema.org: Organization, Service, BreadcrumbList, FAQPage

## Key Technical Decisions

- **Astro 5 static mode:** No SSR adapter. All pages pre-rendered. `@astrojs/sitemap` for sitemap. (see origin: Key Decisions)
- **Tailwind v4 via Vite plugin:** `@tailwindcss/vite` in `astro.config.mjs`, CSS-native `@theme` tokens in `global.css`. (see origin: Key Decisions)
- **Self-hosted fonts:** Download Archivo (600) + Roboto (400, 500) from Google Fonts. WOFF2 format, Latin subset. `@font-face` in `global.css` with `font-display: swap`.
- **DataPlatformDiagram as CSS component:** Flexbox boxes with connecting arrows (CSS `::after` pseudo-elements), not hand-drawn SVG. Tool icons as small inline SVGs. Simpler, responsive, maintainable.
- **Static OG image:** One default PNG (teal background + wordmark). No build-time generation.
- **Cookie consent as opt-in:** GA4 `<script>` tag dynamically injected only after explicit "Accept" click. Not script-then-pause.

## Open Questions

### Resolved During Planning

- **DataPlatformDiagram approach:** CSS flexbox with boxes + arrows, not SVG illustration. Tool icons as small inline SVGs sourced from official brand kits or Simple Icons.
- **OG image:** Static default PNG. No dynamic generation.
- **Font file strategy:** WOFF2 only, Latin subset, 3 weights (Archivo 600, Roboto 400, Roboto 500). ~150KB total.

### Deferred to Implementation

- Exact Calendly booking URL (placeholder until account setup)
- GA4 measurement ID (placeholder until property created)
- About page company story text (needs Antoine's personal input, will use placeholder)
- Logo SVG export from Illustrator (PNGs used as fallback if SVGs not ready)

## Output Structure

```
marketing-site/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .nvmrc
├── DESIGN.md
├── docs/
│   ├── SPEC.md
│   └── brand/                          # (already exists)
├── public/
│   ├── fonts/
│   │   ├── archivo-semibold.woff2
│   │   ├── roboto-regular.woff2
│   │   └── roboto-medium.woff2
│   ├── images/
│   │   ├── logos/                       # nimzo logo variants
│   │   ├── tech/                        # technology tool SVGs
│   │   └── og-default.png
│   ├── favicon.svg
│   └── robots.txt
├── .github/
│   └── workflows/
│       └── lighthouse-ci.yml
├── src/
│   ├── styles/
│   │   └── global.css
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── technologies.ts
│   │   └── retainers.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileMenu.astro
│   │   ├── heroes/
│   │   │   ├── HeroLarge.astro
│   │   │   ├── HeroStandard.astro
│   │   │   └── HeroTech.astro
│   │   ├── cards/
│   │   │   ├── ServiceCard.astro
│   │   │   ├── ServiceCardSmall.astro
│   │   │   ├── CTACard.astro
│   │   │   └── CTABanner.astro
│   │   ├── content/
│   │   │   ├── TwoColumnSplit.astro
│   │   │   ├── ProcessSteps.astro
│   │   │   ├── PricingRange.astro
│   │   │   ├── RetainerGrid.astro
│   │   │   ├── LogoGrid.astro
│   │   │   ├── TextSection.astro
│   │   │   ├── DataPlatformDiagram.astro
│   │   │   └── FAQSchema.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── SectionWrapper.astro
│   │   │   └── CookieConsent.astro
│   │   └── integrations/
│   │       ├── CalendlyPopup.astro
│   │       └── CalendlyEmbed.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ServiceLayout.astro
│   │   ├── TechnologyLayout.astro
│   │   └── BlogLayout.astro
│   ├── content/
│   │   └── config.ts                   # blog MDX collection
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── 404.astro
│       ├── privacy-policy.astro
│       ├── terms-of-service.astro
│       ├── blog.astro                  # hidden, not in nav
│       ├── services/
│       │   ├── data-analytics-platform-implementation.astro
│       │   ├── data-analytics-platform-optimization.astro
│       │   ├── expert-implementation-services.astro
│       │   └── ongoing-support-retainers.astro
│       └── technologies/
│           ├── google-cloud-platform.astro
│           ├── bigquery.astro
│           ├── dataform.astro
│           ├── dbt.astro
│           ├── airbyte.astro
│           ├── fivetran.astro
│           ├── looker.astro
│           ├── lightdash.astro
│           └── steep.astro
```

## Implementation Units

- [ ] **Unit 1: Project scaffold + design tokens**

**Goal:** Working Astro 5 project with Tailwind v4, self-hosted fonts, and DESIGN.md.

**Requirements:** R15, R16

**Dependencies:** None

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore`
- Create: `src/styles/global.css` (Tailwind v4 @theme tokens + @font-face)
- Create: `public/fonts/archivo-semibold.woff2`, `public/fonts/roboto-regular.woff2`, `public/fonts/roboto-medium.woff2`
- Create: `DESIGN.md`
- Create: `docs/SPEC.md` (commit the full website spec)

**Approach:**
- `npm create astro@latest` with empty template
- Add `@tailwindcss/vite` to `astro.config.mjs` vite.plugins (NOT `@astrojs/tailwind`)
- Add `@astrojs/sitemap`
- Add `focus-trap` dependency
- Download font files from Google Fonts (WOFF2, Latin subset)
- Map all design tokens from brand guidelines to `@theme` in `global.css`
- Create `.nvmrc` with Node 18+
- Fix `.gitignore`: replace `.next/` with `.astro/`

**Patterns to follow:**
- Tailwind v4 CSS-native config: https://tailwindcss.com/docs/theme

**Test scenarios:**
- Happy path: `npm run dev` starts dev server, serves a page with correct fonts and colors
- Happy path: Tailwind utility classes (`text-primary`, `bg-card`, `font-heading`) render correctly
- Edge case: Font files load with `font-display: swap` (visible text during font load)

**Verification:**
- Dev server runs. Browser shows page with Archivo headings and Roboto body text. Tailwind utilities apply brand colors.

---

- [ ] **Unit 2: BaseLayout + UI primitives**

**Goal:** HTML shell with meta tags, cookie consent banner, and reusable Button/SectionWrapper components.

**Requirements:** R17, R19, R21, R22

**Dependencies:** Unit 1

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/ui/Button.astro`
- Create: `src/components/ui/SectionWrapper.astro`
- Create: `src/components/ui/CookieConsent.astro`
- Create: `public/images/og-default.png` (static branded OG image)

**Approach:**
- BaseLayout renders full HTML shell: `<html>`, `<head>` (meta, OG, canonical, fonts), `<body>` with `<slot/>`
- Props: title, description, ogImage (defaults to og-default.png)
- CookieConsent: renders banner at bottom, "Accept"/"Decline" buttons. On Accept: dynamically create and inject GA4 `<script>` tag. On Decline: save preference, hide banner. localStorage key: `nimzo-consent`. Default (no localStorage): no GA4.
- Button: 3 variants (primary/accent bg, secondary/outline, ghost). Props: variant, href, size, data-track
- SectionWrapper: max-width 1200px, horizontal padding, configurable vertical spacing and bg color

**Patterns to follow:**
- Astro layout pattern: https://docs.astro.build/en/basics/layouts/

**Test scenarios:**
- Happy path: Page renders with correct `<title>`, `<meta description>`, OG tags, canonical URL
- Happy path: Cookie banner appears on first visit
- Happy path: Clicking "Accept" saves consent to localStorage and loads GA4 script
- Happy path: Clicking "Decline" saves preference, hides banner, no GA4
- Edge case: Returning visitor with saved consent — banner does not appear, GA4 loads automatically
- Edge case: localStorage unavailable (Safari private browsing) — banner shows, defaults to no-consent on decline
- Happy path: Button renders in all 3 variants with correct styling
- Happy path: SectionWrapper constrains content to 1200px max-width

**Verification:**
- Test page renders with meta tags in `<head>`. Cookie banner appears. Accept/Decline flow works. Buttons render all variants.

---

- [ ] **Unit 3: Header + Footer + Mobile Menu**

**Goal:** Site navigation with desktop dropdowns, mobile menu with focus trap, and 5-column footer.

**Requirements:** R4, R5, R6

**Dependencies:** Unit 2

**Files:**
- Create: `src/components/layout/Header.astro`
- Create: `src/components/layout/Footer.astro`
- Create: `src/components/layout/MobileMenu.astro`
- Create: `src/data/navigation.ts`

**Approach:**
- Header: logo (text fallback if SVG not ready) + nav links + Services dropdown (simple list) + Technologies dropdown (grouped: Cloud & Warehouse, Transformation, ETL/ELT, Business Intelligence) + "Schedule a Call" CTA
- Desktop dropdowns: CSS `:hover` + `:focus-within` for show/hide. Tiny inline `<script>` for `aria-expanded` toggling and 200ms CSS transition.
- MobileMenu: hamburger button toggles slide-out panel. Uses `focus-trap` npm package for Tab/Shift+Tab wrapping, Escape to close, focus restoration, body scroll lock.
- Footer: 5-column CSS grid. Responsive: stacks to 2-col on tablet, 1-col on mobile. Bottom bar with copyright + privacy/terms links.
- navigation.ts: typed data structure for all nav links and dropdown groups.

**Patterns to follow:**
- focus-trap docs: https://github.com/focus-trap/focus-trap

**Test scenarios:**
- Happy path: Desktop nav renders all links, dropdowns open on hover
- Happy path: Keyboard Tab cycles through nav items, dropdown opens on focus
- Happy path: Mobile hamburger opens slide-out menu, all links visible
- Happy path: Focus trap prevents Tab from leaving mobile menu
- Happy path: Escape closes mobile menu, focus returns to hamburger button
- Edge case: Body scroll locked while mobile menu open
- Happy path: Footer renders 5 columns with all links on desktop
- Edge case: Footer stacks columns on mobile (375px)
- Happy path: "Schedule a Call" CTA in header triggers Calendly (or fallback)

**Verification:**
- Desktop: dropdowns work via hover and keyboard. Mobile: menu opens/closes, focus trapped, Escape works. Footer renders all 5 columns. All links point to correct URLs.

---

- [ ] **Unit 4: Hero components + card components**

**Goal:** All hero variants and card components ready for page assembly.

**Requirements:** R7, R8, R10, R11

**Dependencies:** Unit 2

**Files:**
- Create: `src/components/heroes/HeroLarge.astro`
- Create: `src/components/heroes/HeroStandard.astro`
- Create: `src/components/heroes/HeroTech.astro`
- Create: `src/components/cards/ServiceCard.astro`
- Create: `src/components/cards/ServiceCardSmall.astro`
- Create: `src/components/cards/CTACard.astro`
- Create: `src/components/cards/CTABanner.astro`
- Create: `src/data/services.ts`

**Approach:**
- HeroLarge: centered H1 + subtitle + dual CTA (primary + secondary). Full-width, generous spacing (128px vertical).
- HeroStandard: left-aligned H1 + subtitle. Reused by service/about/contact pages. Props: title, subtitle.
- HeroTech: tool logo (SVG) + H1 + one-line positioning + category badge. Props: toolName, toolLogo, toolCategory, positioning.
- ServiceCard: large card with icon area, question heading ("No data platform yet?"), description, price range + timeline badges, "Learn more" link. Props driven by services.ts data.
- ServiceCardSmall: compact card for expert services grid. Title, price range, timeline, details list.
- CTACard: cross-link card with heading, short text, arrow link. Props: title, description, href.
- CTABanner: full-width strip with teal or accent bg, centered heading + Button + optional email link. Props: heading, buttonText, buttonHref, email.
- services.ts: typed metadata (name, slug, shortDescription, priceRange, timeline) for card rendering and cross-links.

**Test scenarios:**
- Happy path: HeroLarge renders centered with H1 + subtitle + 2 CTAs
- Happy path: HeroStandard renders left-aligned with H1 + subtitle
- Happy path: HeroTech renders with tool logo, title, category badge
- Happy path: ServiceCard displays price range and timeline badges
- Edge case: ServiceCard without price range (graceful fallback)
- Happy path: CTABanner renders full-width with button and optional email
- Edge case: All cards stack to single column on mobile (375px)

**Verification:**
- All hero variants render with correct typography scale. Cards display content from services.ts. CTABanner spans full width. All responsive at 3 breakpoints.

---

- [ ] **Unit 5: Content section components**

**Goal:** All reusable content components ready for page assembly.

**Requirements:** R7, R8, R10, R26

**Dependencies:** Unit 2

**Files:**
- Create: `src/components/content/TwoColumnSplit.astro`
- Create: `src/components/content/ProcessSteps.astro`
- Create: `src/components/content/PricingRange.astro`
- Create: `src/components/content/RetainerGrid.astro`
- Create: `src/components/content/LogoGrid.astro`
- Create: `src/components/content/TextSection.astro`
- Create: `src/components/content/DataPlatformDiagram.astro`
- Create: `src/components/content/FAQSchema.astro`
- Create: `src/data/technologies.ts`
- Create: `src/data/retainers.ts`

**Approach:**
- TwoColumnSplit: left/right columns with icon indicators (checkmark/X or bullet). Variant prop for "challenges/solution" vs "is for/not for". Stacks vertically on mobile.
- ProcessSteps: numbered steps with title + description. Horizontal connected layout (CSS flexbox + `::after` connecting lines) on desktop, vertical on mobile. Props: steps array.
- PricingRange: price range header + factor comparison table (horizontal scroll on mobile) + example scenario cards grid.
- RetainerGrid: 3-column comparison table. ✓/— indicators. "Growth" column highlighted with border + badge. Horizontal scroll on mobile.
- LogoGrid: responsive CSS grid of clickable tech logos. Props driven by technologies.ts.
- TextSection: simple heading + paragraph(s) in SectionWrapper. Props: title, children slot.
- DataPlatformDiagram: CSS flexbox layout with 5 styled boxes (rounded, teal border) connected by arrow pseudo-elements. Tool icons inside each box. Horizontal scroll with visible scrollbar on mobile.
- FAQSchema: renders `<script type="application/ld+json">` with FAQPage schema from a questions/answers array prop. No visual output.
- technologies.ts: name, slug, category, logoPath for all 10 tools.
- retainers.ts: 3 tiers with pricing, features, response time, check-in frequency.

**Test scenarios:**
- Happy path: TwoColumnSplit renders challenges (left, X icons) and solutions (right, checkmark icons)
- Edge case: TwoColumnSplit stacks columns vertically on mobile
- Happy path: ProcessSteps renders 4 numbered steps with connecting lines on desktop
- Edge case: ProcessSteps switches to vertical layout on mobile
- Happy path: PricingRange renders price range, factor table, and scenario cards
- Edge case: Factor table scrolls horizontally on mobile (375px)
- Happy path: RetainerGrid renders 3 tiers with Growth highlighted
- Edge case: RetainerGrid scrolls horizontally on mobile
- Happy path: LogoGrid renders 10 clickable tech logos in responsive grid
- Happy path: DataPlatformDiagram shows 5 stages with arrows and tool icons
- Edge case: DataPlatformDiagram scrolls horizontally on mobile with scroll indicator
- Happy path: FAQSchema outputs valid JSON-LD in `<script>` tag

**Verification:**
- All content components render correctly on desktop and mobile. Tables scroll on mobile. DataPlatformDiagram shows 5 pipeline stages. FAQSchema outputs valid JSON-LD.

---

- [ ] **Unit 6: Calendly integration**

**Goal:** Calendly popup and embed components ready for use across all pages.

**Requirements:** R13, R14

**Dependencies:** Unit 2

**Files:**
- Create: `src/components/integrations/CalendlyPopup.astro`
- Create: `src/components/integrations/CalendlyEmbed.astro`

**Approach:**
- CalendlyPopup: renders a Button. On click, dynamically loads Calendly's widget script (`assets.calendly.com/assets/external/widget.js`) if not already loaded, then calls `Calendly.initPopupWidget({url})`. If script load fails, falls back to `window.location.href = '/contact/'`. Props: url (Calendly booking URL, defaults to placeholder), buttonText, data-track.
- CalendlyEmbed: renders Calendly inline widget div + loads widget CSS/JS. For contact page. Props: url.
- Both use a shared Calendly script loader utility (inline `<script>` in CalendlyPopup that caches the load promise).

**Test scenarios:**
- Happy path: Clicking CTA button loads Calendly script and opens popup
- Happy path: CalendlyEmbed renders inline widget on contact page
- Edge case: Calendly script already loaded (second click) — popup opens immediately without re-loading
- Error path: Script fails to load — user redirected to /contact/ page
- Edge case: Calendly popup works on mobile Safari and Chrome

**Verification:**
- CTA click opens Calendly popup (or redirects to /contact/ on failure). Embed renders on contact page.

---

- [ ] **Unit 7: Layout templates**

**Goal:** ServiceLayout and TechnologyLayout wrap page content with shared structure.

**Requirements:** R9, R11

**Dependencies:** Units 3, 4, 5

**Files:**
- Create: `src/layouts/ServiceLayout.astro`
- Create: `src/layouts/TechnologyLayout.astro`
- Create: `src/layouts/BlogLayout.astro`

**Approach:**
- ServiceLayout: extends BaseLayout. Renders HeroStandard + content slot + CTACard (link to retainers) + CTABanner. Props: heroTitle, heroSubtitle, title, description.
- TechnologyLayout: extends BaseLayout. Renders HeroTech + content slot + 3 fixed CTACards ("No platform yet?" → Implementation, "Platform not working?" → Optimization, "Need help with [tool]?" → Expert Services) + CTABanner. Props: toolName, toolLogo, toolCategory, heroPositioning, title, description.
- BlogLayout: extends BaseLayout. Minimal, for future MDX blog posts. Just BaseLayout + content slot with article styling.

**Test scenarios:**
- Happy path: ServiceLayout renders hero + content + retainer CTA + banner
- Happy path: TechnologyLayout renders hero with tool logo + content + 3 CTAs + banner
- Happy path: TechnologyLayout CTAs link to correct service page URLs
- Happy path: BlogLayout renders article content within BaseLayout

**Verification:**
- Service page wrapped in ServiceLayout shows hero, content, and correct cross-links. Technology page wrapped in TechnologyLayout shows 3 correct CTAs.

---

- [ ] **Unit 8: Homepage**

**Goal:** Complete homepage with all 7 sections from the spec.

**Requirements:** R1, R2, R4, R7, R22

**Dependencies:** Units 3, 4, 5, 6

**Files:**
- Create: `src/pages/index.astro`

**Approach:**
- 7 sections: HeroLarge → 3 ServiceCards → TwoColumnSplit (is/isn't for) → ProcessSteps (4 steps) → TextSection ("Why GCP Only") → LogoGrid (10 tech logos) → CTABanner
- All content from `docs/SPEC.md` Part 6, Homepage section
- `data-track` attributes on Calendly CTA, service card links

**Test scenarios:**
- Happy path: Page renders all 7 sections in correct order
- Happy path: 3 service cards link to correct service page URLs
- Happy path: Logo grid shows 10 technology logos, all clickable
- Happy path: CTA triggers Calendly popup
- Edge case: All sections stack vertically on mobile
- Happy path: Page has unique `<title>`, `<meta description>`, single H1

**Verification:**
- Homepage renders at `/`. All sections visible. Service cards link correctly. Logos link to tech pages. Calendly CTA works. Responsive at all breakpoints.

---

- [ ] **Unit 9: Service pages (4 pages)**

**Goal:** Implementation, Optimization, Expert Services, and Retainers pages with full content.

**Requirements:** R1, R2, R7, R8, R9, R10, R20, R22

**Dependencies:** Units 5, 6, 7

**Files:**
- Create: `src/pages/services/data-analytics-platform-implementation.astro`
- Create: `src/pages/services/data-analytics-platform-optimization.astro`
- Create: `src/pages/services/expert-implementation-services.astro`
- Create: `src/pages/services/ongoing-support-retainers.astro`

**Approach:**
- Implementation: HeroStandard + TwoColumnSplit (challenges/solution) + DataPlatformDiagram + 3-col "What We Build" + PricingRange (factors + 3 scenarios) + FAQSchema. All content from spec Part 6.
- Optimization: Same structure. Two-phase pricing (audit + implementation). "Why More Expensive" TextSection. FAQSchema.
- Expert Services: HeroStandard + "Who This Is For" TextSection + 5 ServiceCardSmall grid + ProcessSteps (4 steps) + CTACards (cross-links to Implementation/Optimization) + CTABanner. FAQSchema.
- Retainers: HeroStandard + "Who This Is For" + RetainerGrid + rules/terms TextSection + 3 CTACards (cross-links) + CTABanner.
- All 4 pages use ServiceLayout. Each has unique title, meta description, H1.
- `data-track` on all CTAs.

**Test scenarios:**
- Happy path: Each page renders at correct URL with all sections
- Happy path: Pricing tables display correct ranges and factors
- Happy path: FAQ schema outputs valid JSON-LD on Implementation, Optimization, Expert Services
- Happy path: Cross-link CTAs navigate to correct service pages
- Happy path: Retainer grid highlights Growth tier
- Edge case: Pricing tables scroll horizontally on mobile
- Edge case: Each page has unique `<title>` and single H1

**Verification:**
- All 4 service pages render at correct URLs. Pricing visible. Cross-links work. FAQ schema valid. Responsive.

---

- [ ] **Unit 10: Technology pages (9 pages)**

**Goal:** All 9 technology pages with shared template and unique content.

**Requirements:** R1, R2, R11, R12, R22

**Dependencies:** Unit 7

**Files:**
- Create: `src/pages/technologies/google-cloud-platform.astro`
- Create: `src/pages/technologies/bigquery.astro`
- Create: `src/pages/technologies/dataform.astro`
- Create: `src/pages/technologies/dbt.astro`
- Create: `src/pages/technologies/airbyte.astro`
- Create: `src/pages/technologies/fivetran.astro`
- Create: `src/pages/technologies/looker.astro`
- Create: `src/pages/technologies/lightdash.astro`
- Create: `src/pages/technologies/steep.astro`

**Approach:**
- Each page uses TechnologyLayout. Content sections (What It Is, Why We Chose It, How We Use It) are inline TextSections with content from `docs/SPEC.md` Part 3.
- BI pages (Looker, Lightdash, Steep): add "When to choose X vs Y" comparison section with pricing crossover tables from spec Part 3.3.
- Tool logos: SVG from official brand assets or Simple Icons. Fallback: colored placeholder.
- Each page has unique title, meta description, H1.
- `data-track` on CTAs.

**Test scenarios:**
- Happy path: Each page renders at correct URL with tool logo, content, 3 CTAs
- Happy path: BI pages include comparison sections with pricing crossover
- Happy path: 3 CTA cards link to Implementation, Optimization, Expert Services
- Edge case: Missing tool logo SVG — page still renders (text-only hero)
- Edge case: Each page has unique `<title>` and single H1

**Verification:**
- All 9 tech pages render. BI pages have comparison sections. CTAs link correctly. Responsive.

---

- [ ] **Unit 11: About, Contact, Legal, 404, Blog**

**Goal:** Remaining pages: about, contact, privacy, terms, 404, and hidden blog.

**Requirements:** R1, R2, R14, R18

**Dependencies:** Units 3, 6

**Files:**
- Create: `src/pages/about.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/privacy-policy.astro`
- Create: `src/pages/terms-of-service.astro`
- Create: `src/pages/404.astro`
- Create: `src/pages/blog.astro`
- Create: `src/layouts/BlogLayout.astro` (if not already in Unit 7)
- Create: `src/content/config.ts` (blog MDX collection)

**Approach:**
- About: HeroStandard + company story (placeholder for Antoine's input) + chess name origin (subtle, 1-2 sentences) + 6 approach principles + TwoColumnSplit (is/isn't for) + CTABanner.
- Contact: HeroStandard + CalendlyEmbed (or mailto fallback) + email section (hello@nimzodata.com) + location ("Based in France") + CTACards ("Not ready?" linking to services/tech).
- Privacy Policy + Terms: BaseLayout + legal text (AI-drafted, clearly marked "Draft, pending legal review").
- 404: BaseLayout + "Page not found" message + link to homepage.
- Blog: BaseLayout + simple "Blog" heading. NOT linked in nav or footer. Content collection config for future MDX posts.

**Test scenarios:**
- Happy path: About page renders all sections including approach principles
- Happy path: Contact page shows Calendly embed (or mailto fallback)
- Happy path: Privacy/Terms pages render legal text
- Happy path: 404 page renders with link home
- Happy path: Blog page exists at /blog/ but is NOT linked in nav or footer
- Edge case: About page with placeholder company story is still presentable
- Edge case: Contact page with mailto fallback (no Calendly) still looks professional

**Verification:**
- All 6 pages render at correct URLs. Contact page has Calendly or fallback. Blog page exists but is not discoverable from nav/footer. 404 works for invalid URLs.

---

- [ ] **Unit 12: SEO, structured data, and CI**

**Goal:** Complete SEO setup, structured data, and Lighthouse CI.

**Requirements:** R19, R20, R21, R24, R25

**Dependencies:** All page units (8-11)

**Files:**
- Create: `public/robots.txt`
- Create: `.github/workflows/lighthouse-ci.yml`
- Modify: `astro.config.mjs` (sitemap config)
- Modify: `src/layouts/BaseLayout.astro` (structured data injection)

**Approach:**
- robots.txt: allow all, reference sitemap URL.
- Sitemap: `@astrojs/sitemap` with site URL in astro.config.mjs. Exclude /blog/ from sitemap.
- Structured data in BaseLayout: Organization schema (JSON-LD) on every page. Service schema on service pages (passed as prop). BreadcrumbList on all pages.
- Lighthouse CI: GitHub Action that runs `npm run build`, then `lhci autorun` against built pages. Thresholds: performance 90, accessibility 95, SEO 95. Run on push to main and PRs.
- astro check: add to CI workflow as a separate step.
- Verify: unique `<title>` and `<meta description>` on every page. Single H1 per page.

**Test scenarios:**
- Happy path: `npm run build` succeeds with no errors
- Happy path: Sitemap generated at /sitemap-index.xml
- Happy path: robots.txt accessible at /robots.txt, references sitemap
- Happy path: Organization JSON-LD present on every page
- Happy path: Service JSON-LD present on service pages
- Happy path: BreadcrumbList JSON-LD present on all pages
- Happy path: FAQ JSON-LD present on Implementation, Optimization, Expert Services pages
- Happy path: Lighthouse CI passes all gates
- Edge case: Blog page excluded from sitemap

**Verification:**
- Clean build. Sitemap generated. Structured data valid (test with Google Rich Results Test). Lighthouse CI workflow runs and passes. `astro check` passes.

## System-Wide Impact

- **Interaction graph:** Header CTA → CalendlyPopup → Calendly widget. CookieConsent → GA4 script injection. ServiceCard/CTACard → page navigation. FAQSchema → `<head>` JSON-LD injection.
- **Error propagation:** Calendly widget failure → contact page fallback. GA4 script failure → no analytics (silent, acceptable). Font load failure → system font swap.
- **State lifecycle risks:** Cookie consent preference in localStorage. No other persistent state. No partial-write risks (static site).
- **API surface parity:** No APIs. All pages are static HTML.
- **Integration coverage:** Calendly popup + embed are the only external integrations. Both have fallbacks.
- **Unchanged invariants:** No existing code to preserve (greenfield).

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Logo SVGs not exported from Illustrator | Text-only wordmark fallback in header/footer. PNG logos as interim. |
| Calendly account not set up at launch | mailto:hello@nimzodata.com fallback on all CTAs |
| Domain DNS not configured | Deploy to Vercel preview URL. Switch when DNS ready. |
| About page without personal content | Placeholder text with clear TODO marker |
| Tailwind v4 breaking changes vs docs | Pin `tailwindcss@4` in package.json, test early |
| DataPlatformDiagram complexity | CSS approach (flexbox + pseudo-elements) vs SVG reduces risk |

## Sources & References

- **Origin document:** [docs/brainstorms/nimzo-marketing-website-requirements.md](docs/brainstorms/nimzo-marketing-website-requirements.md)
- **Brand guidelines:** `docs/brand/BRAND GUIDELINES/Brand Guidelines.pdf`
- **Design doc:** `~/.gstack/projects/Nimzo-Data-marketing-site/antoine-main-design-20260416-115124.md`
- **CEO plan:** `~/.gstack/projects/Nimzo-Data-marketing-site/ceo-plans/2026-04-16-marketing-website.md`
- **Gstack plan:** Plan mode file with build order and parallelization strategy
- Astro 5 docs: https://docs.astro.build
- Tailwind v4 docs: https://tailwindcss.com/docs
- focus-trap: https://github.com/focus-trap/focus-trap
- Calendly widget API: https://help.calendly.com/hc/en-us/articles/223147027
