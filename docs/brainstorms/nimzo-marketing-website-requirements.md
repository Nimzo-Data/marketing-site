---
date: 2026-04-16
topic: nimzo-marketing-website
---

# Nimzo Data Marketing Website

## Problem Frame

Antoine is a freelance data engineer/BI consultant who works daily with European companies on GCP data infrastructure. He wants to package his freelance practice into a branded agency ("Nimzo Data") and needs a professional marketing website to accomplish three jobs: (1) generate inbound leads via SEO, (2) pre-qualify buyers with transparent pricing, (3) project agency credibility to command higher rates than freelance positioning allows. The website is the launch vehicle for the Nimzo Data brand.

## Requirements

**Core Site**
- R1. 19 visible pages: homepage, 4 service pages, 9 technology pages, about, contact, privacy policy, terms of service, 404. Plus hidden blog infrastructure (not linked in nav/footer until first post exists).
- R2. All page content sourced from the spec document (`docs/SPEC.md`, created as build step 0). Contains complete copy for every section of every page, including headlines, body text, pricing tables, and CTAs.
- R3. Responsive design at 3 breakpoints: mobile (375px), tablet (768px), desktop (1280px). Tables horizontally scrollable on mobile.

**Navigation & Chrome**
- R4. Header with logo, desktop nav, two dropdown menus (Services as simple list, Technologies grouped by category), and "Schedule a Call" CTA button.
- R5. Mobile hamburger menu with slide-out panel, accessible focus trap, Escape to close.
- R6. 5-column footer (Brand, Services, Technologies, Company, Contact) with bottom bar (copyright, privacy policy, terms of service links).

**Service Pages**
- R7. Problem-first framing: challenges the prospect faces (left column) paired with what they get (right column).
- R8. Transparent pricing: price ranges, pricing factor tables, and example scenario cards visible on every service page. Implementation €15-35K, Optimization €20-50K (two-phase: audit €3-5K + implementation), Expert Services €5-15K, Retainers €1-4K/mo.
- R9. Cross-linking: every service page links to related services and the retainers page. "Not sure what you need?" CTAs route to Calendly.
- R10. Retainer comparison grid: 3-tier table (Maintenance/Growth/Partnership) with checkmark/dash indicators, Growth tier highlighted as recommended.

**Technology Pages**
- R11. Shared template: hero with tool logo + positioning, "What It Is", "Why We Chose It", "How We Use It", 3 fixed CTA cards linking to Implementation, Optimization, and Expert Services (not Retainers, which is cross-linked from service pages instead), final CTA banner.
- R12. BI pages (Lightdash, Steep, Looker) include "When to choose X vs Y" comparison sections with pricing crossover analysis.

**Calendly Integration**
- R13. All "Schedule a Call" CTAs trigger Calendly popup widget. Popup script loads lazily on first CTA click (not in initial page load). If Calendly fails to load, the contact page (R14) serves as the fallback channel.
- R14. Contact page has inline Calendly embed (loads on render), plus email fallback.

**Design System**
- R15. Professional brand guidelines as source of truth (`docs/brand/`). Colors: #004F4C (primary teal), #F4FAFF (background), #DEE7E7 (card), #493441 (accent burgundy). Typography: Archivo SemiBold (headings), Roboto Regular (body text per brand guidelines), Roboto Medium (UI labels/emphasis only, implementation choice). Self-hosted fonts. No stock photography on website (brand guide imagery is for collateral only, per design consultation decision 2026-04-16).
- R16. Create `DESIGN.md` in repo root with complete design token documentation.

**GDPR & Privacy**
- R17. Cookie consent banner: opt-in model (no GA4 script injected until explicit "Accept" click). localStorage saves preference. Defaults to no-consent if localStorage is unavailable.
- R18. Privacy Policy and Terms of Service pages with AI-drafted content, marked for legal review.

**SEO & Structured Data**
- R19. Unique title and meta description per page. Single H1 per page. Sitemap via @astrojs/sitemap. robots.txt. Canonical URLs.
- R20. Structured data: Organization schema (site-wide), Service schema (service pages), BreadcrumbList (all pages), FAQ schema (Implementation, Optimization, Expert Services pages).
- R21. Default branded OG image (teal background + wordmark + page title).

**Analytics & Tracking**
- R22. `data-track` attributes on key CTAs (Calendly buttons, service card "Learn more" links, email links) using kebab-case convention (e.g., `data-track="cta-hero-schedule"`). Not exhaustive on every clickable element. No analytics JS at launch, ready for GA4 activation (R23) or any future analytics tool.
- R23. GA4 integration behind cookie consent. Measurement ID from pre-implementation checklist.

**CI/CD & Quality**
- R24. Lighthouse CI GitHub Action with gates: 90+ performance, 95+ accessibility, 95+ SEO.
- R25. `astro check` in CI for TypeScript validation.

**Data Platform Diagram**
- R26. Inline SVG component showing 5 horizontal pipeline stages (Data Sources → ETL/ELT → BigQuery Warehouse → Transformation → BI/Dashboards) with tool icons at each stage. Horizontal scroll with scroll indicator on mobile.

## Success Criteria

1. A prospect receiving the link perceives Nimzo Data as a professional agency, not a freelancer with a website.
2. Service pages clearly communicate scope, pricing, and process, reducing "what do you do exactly?" questions on discovery calls.
3. Pricing visibility pre-qualifies: prospects who book calls understand engagements start at €5K.
4. Lighthouse scores: 90+ performance, 95+ accessibility, 95+ SEO.
5. All internal links resolve. Calendly CTAs work (or fallback triggers). Mobile navigation functions properly.
6. Technology pages demonstrate opinionated expertise to prospects who dig deeper.

## Scope Boundaries

- No multi-language support (English only)
- No dark mode
- No blog content (infrastructure only, hidden)
- No email capture on blog page (deferred until content exists)
- No stock photography on the website
- No case studies or testimonials at launch (P1 TODO: anonymized engagement summaries)
- No contact form (Calendly + mailto is sufficient)
- No custom animations or scroll effects

## Key Decisions

- **Full Launch over Two-Wave:** All 19 pages ship at once. AI compresses the marginal cost of 9 tech pages to near-zero. No broken links, no footer workarounds.
- **Astro 5 + Tailwind v4:** Zero JS by default. `@tailwindcss/vite` (not `@astrojs/tailwind`). CSS-native `@theme` config.
- **Roboto over DM Sans:** Professional brand guidelines specify Roboto Regular. Designer's deliberate choice confirmed by user.
- **Self-hosted fonts:** Eliminates Google Fonts CDN dependency. Better Lighthouse performance.
- **focus-trap package:** Battle-tested mobile menu accessibility over custom vanilla JS.
- **Opt-in cookie consent:** GDPR requirement for European target market. No GA4 until explicit Accept.
- **No test framework:** Lighthouse CI + /gstack-qa covers the static site. Vitest for one component is over-engineering.

## Dependencies / Assumptions

- Logo SVGs need to be exported from Illustrator source file (`docs/brand/LOGO & ASSETS/Editable.ai`). Only PNGs currently exist.
- Calendly account and booking URL must be set up (fallback to mailto if not ready).
- Domain (nimzodata.com) and email (hello@nimzodata.com) must be configured for production launch. Can deploy to Vercel preview URL in the meantime.
- GA4 property must be created for measurement ID.
- About page company story needs Antoine's personal input.

## Outstanding Questions

### Resolve Before Planning
(None. All product decisions resolved during gstack DECIDE phase.)

### Deferred to Planning
- [Affects R26][Technical] DataPlatformDiagram SVG: exact layout dimensions, mobile scroll behavior, and tool icon sourcing strategy.
- [Affects R21][Technical] OG image generation: static PNG asset vs build-time generation.
- [Affects R15][Needs research] Archivo + Roboto font file optimization: which weights/subsets to self-host for minimal file size.

## Next Steps

-> `/ce:plan` for structured implementation planning
