# French version of nimzodata.com — design

Date: 2026-11-18
Status: approved by Antoine, 2026-11-18

## Intent

Add a complete French version of the marketing site, alongside the English one.

Why, in Antoine's words:

1. **Better conversions from French companies**, since not all of their buyers are comfortable reading English.
2. **Make it obvious that Nimzo Data is French and France-based.** This pre-qualifies leads further. Today the only signals are a footer line ("Based in France. Serving Europe."), the About facts ("Working languages: English and French") and the French-only Mentions légales.

Success looks like this:

- A French buyer can go through the whole journey in French without hitting English: landing page, services, proof, booking a call.
- Any visitor sees at a glance, from the FR switch in the header, that the company works in French.

## Goals

- **Full mirror (decided).** Every public page has a French version: home, the 4 service pages, about, contact, case studies (index and both studies), technologies (index and all 10), sample audit, blog (index and every post), privacy policy, terms of service, 404.
- **French is written for French readers, not translated word for word.** Use *vouvoiement*. Keep the house style (short sentences, no jargon). Use the terms French buyers actually search for.
- **French ships together with English (decided).** From launch on, every copy change and every new post or sample audit is written in both languages in the same change. Antoine writes or reviews the French himself.
- **The build enforces it.** A page, post or copy string that exists in one language and not the other fails the build. A half-translated site cannot ship.
- **One layout per page (decided, approach 1 below).** A design or layout change is made once and both languages follow.

## Non-goals

- Languages other than English and French. The design shouldn't block a third language, but it doesn't need to make one easy.
- Automatic redirects based on browser language or IP address.
- A translation management tool, a CMS or machine-translation tooling. The copy lives in the repo as it does today.
- Changing any English URL.

## Anti-goals (failure even if it technically works)

- **French that reads like a translation.** Literal anglicisms, *tutoiement*, or an awkward register would undo goal 2. A buyer would read it as "not really French".
- **A FR switch that drops visitors into English** anywhere in the journey.
- **A drop in English search rankings**, for example from changed English URLs, wrong canonicals, or hreflang pointing at the wrong page.
- **Duplicated layouts that drift apart** over time.

## Constraints and current state

- **Stack.** Astro 5, static output, Tailwind 4, MDX, `@astrojs/sitemap`, hosted on Vercel. `trailingSlash: 'always'`, and `vercel.json` adds `trailingSlash: true`, redirects and security headers (the CSP allows the Google Calendar iframe and GA4).
- **Copy is hardcoded today.** About 7,000 lines across `src/pages/**/*.astro`: the sample audit is about 1,200 lines and the audit service page about 700. Pages also hold copy arrays at the top of the frontmatter (`faqs`, `checks`, `problemRows`, and so on) and pass strings as props to shared components (`HeroLarge`, `ServiceCard`, `ProcessSteps`, `FAQAccordion`, and so on). Some components already render props with `set:html`, for example the hero subtitle with `<br>`.
- **Shared data files contain copy:** `src/data/navigation.ts` (menus, descriptions, footer links), `services.ts`, `caseStudies.ts`, `technologies.ts`, `audience.ts`, `founder.ts`.
- **Components contain hardcoded copy:** Header and MobileMenu, Footer ("Based in France. Serving Europe.", legal links), CookieConsent ("Accept"/"Decline" and its message), and the diagram components (`AeydeBeforeAfterDiagram` "Before"/"After", `DataPlatformDiagram`, `ModelingLayersDiagram`, `PlatformLayersDiagram`, `TamesonLayersDiagram`), plus others to be found during the build.
- **`BaseLayout.astro`** hardcodes `<html lang="en">`, the Organization JSON-LD description, the breadcrumb label "Home", the RSS `<link>`, and the OG defaults.
- **Blog.** A content collection with the glob loader on `src/blog/*.{md,mdx}`; the filename is the slug. The `draft` flag defaults to true and draft visibility rules live in `src/data/blog.ts`. Dates are formatted with `toLocaleDateString('en-GB')`. A hand-rolled `src/pages/rss.xml.ts` has `<language>en</language>`.
- **Mentions légales is already French-only** at `/mentions-legales/` and is a French legal requirement.
- **Images with English text baked in:** `public/images/data-flow-audit-diagram-3x.png`, `data-flow-target-diagram-3x.png`, the OG images in `public/og/` and `og-image.png`, and the sample audit PDF `public/Nimzo-Data-Sample-Audit.pdf`.
- **Booking** is a Google Calendar appointment schedule embedded as an iframe on `/contact/`. Its booking questions ("a few short questions" in the contact page process) are written in English inside Google Calendar.
- **Timing.** Antoine is adding new blog posts and new sample audits next week. **The restructuring (approach 1) must land on `main` before he starts that content,** so new pages are born bilingual. The French copy for existing pages can follow, as long as nothing ships half-translated (see Rollout).

## Approaches considered

1. **Shared layout per page, with copy in per-language files (chosen).** Each page's text moves out of the `.astro` file into a pair of copy modules, for example `audit.en.ts` and `audit.fr.ts`. The French module is typed against the English one, so a missing key is a type or build error. One template renders both locales.
   - Pros: layout changes are made once; missing translations are caught by the compiler; the two copy files sit side by side when editing.
   - Cons: a large one-off refactor of every page; rich text (links, emphasis) inside strings needs a convention.
2. **A duplicate `.astro` page per language** (`src/pages/fr/...` as copies), with a build check that every English page has a French twin.
   - Pros: fastest to start; copy stays inline as today.
   - Cons: every layout tweak is done twice; the two versions drift; the check proves a twin exists, not that it matches.
   - Rejected because of drift and double layout work.
3. **Move pages into Markdown/MDX per locale.** Rejected: the pages are mostly cards, grids, tables and diagrams, not running text, so they would become frontmatter blobs. (The blog already is Markdown and stays that way.)

Antoine picked approach 1.

## Design

### URLs

- **English stays at the root, unchanged.** `/`, `/services/data-platform-audit/`, and so on.
- **French lives under `/fr/`, with French slugs.** For example `/fr/`, `/fr/services/audit-plateforme-data/`, `/fr/a-propos/`, `/fr/contact/`, `/fr/etudes-de-cas/aeyde/`, `/fr/technologies/bigquery/`, `/fr/blog/<french-slug>/`.
- Tool names, client names and the brand stay as they are in slugs.
- The exact French slugs are drafted by the builder and reviewed by Antoine with the copy.
- **A single route map is the source of truth for page pairs:** page id → `{ en: path, fr: path }`. The language switch, hreflang tags, navigation and internal links all read from it. Internal links in copy refer to pages by id (or go through a helper), not by hardcoded path, so a French page never links to an English URL by accident.
- `/mentions-legales/` stays French and is linked from both footers. `/fr/mentions-legales/` either redirects to it or is the same page; builder's call. There is no English mentions légales page.

### Copy structure (approach 1)

- Each page gets a copy module per locale, with the English module as the type source. The French module must satisfy the same type, so a missing or extra key fails `astro check` and the build.
- Copy modules live next to the page or under a parallel tree; builder's call.
- Shared data files (`navigation.ts`, `services.ts`, `caseStudies.ts`, `technologies.ts`, `audience.ts`, `founder.ts`) split into language-neutral data (slugs, prices as numbers, logos, URLs) and per-locale copy, by the same rule.
- Component strings (header, mobile menu, footer, cookie banner, diagram labels, "See Audit"-style link text, aria-labels) go into a shared UI dictionary per locale, with the same typing rule.
- **Rich text convention:** strings may contain limited inline HTML (`<a>`, `<strong>`, `<em>`, `<br>`), rendered with `set:html`. This matches what the components already do, and all copy is authored in the repo. The builder may choose a tiny inline-Markdown helper instead, if it stays simpler to edit.
- **Page templates.** Each page's markup moves into a single template (component or layout), and thin route files render it for each locale. Whether this uses `[lang]` dynamic routes, Astro's `i18n` config, or two thin route files per page is the builder's call. The constraint is that translated slugs must work, which Astro's built-in `getRelativeLocaleUrl` does not handle on its own.
- **The current locale is available everywhere** (a prop, or `Astro.currentLocale` if the i18n config is used), so components pick the right dictionary.

### Locale formatting

- **Prices in French:** `3 000 €`, `15 000 – 50 000 €`, `950 €/mois`, with non-breaking spaces. Prices are stored as numbers where practical and formatted per locale, so a price change happens once.
- **Dates:** `fr-FR`, for example "9 septembre 2026".
- **Durations and time ranges** in French style, for example "1 à 2 semaines" and "9 h – 18 h, heure de Paris".
- French typography: non-breaking space before `: ; ? !` and French quotation marks « » in the French copy. The builder adds a small helper or writes the characters directly.

### Language switch

- An "EN / FR" control in the header (desktop) and the mobile menu.
- It links to the same page in the other language, using the route map.
- It is a plain link, not JavaScript and not a remembered preference, and it carries `hreflang` and `lang` attributes.

### SEO and metadata

- `<html lang>` follows the page locale (`en` / `fr`).
- **Each page outputs `<link rel="alternate" hreflang>`** for `en`, `fr` and `x-default` (pointing at English), built from the route map.
- **The canonical is self-referencing per locale.** A French page's canonical is its own French URL.
- `og:locale` is `en_GB` or `fr_FR`, with `og:locale:alternate` for the other.
- The sitemap includes every French URL. hreflang lives in the `<head>`, not the sitemap: the `@astrojs/sitemap` i18n option assumes identical paths across locales, which translated slugs break. The builder can add sitemap hreflang through a custom `serialize` if it's simple; it's not required.
- **JSON-LD:** breadcrumbs say "Accueil" in French; the Organization description, FAQ schema and BlogPosting schema use the page language; add `inLanguage`.
- **Titles and meta descriptions are written in French** for French search (for example "audit data", "plateforme data", "consultant BigQuery"), not translated literally.
- The blog-visibility sitemap filter (`SHOW_BLOG`) also covers `/fr/blog/`.

### Blog

- English posts stay where they are, at the same URLs.
- French posts are added as separate files, in `src/blog/fr/` or similar, each with its own French slug and a frontmatter field naming its English counterpart.
- **The build fails when** a non-draft post has no counterpart, or the counterparts' `draft` status differs, so both publish together.
- Draft rules in `src/data/blog.ts` apply per language unchanged.
- The French blog index lists French posts only, with French dates.
- **French RSS feed** at `/fr/rss.xml` with `<language>fr</language>`. The French pages' `<link rel="alternate" type="application/rss+xml">` points to it.
- Existing internal links inside post bodies, for example `[Aeyde](/case-studies/aeyde/)`, are rewritten to French URLs in the French posts.

### Pages with special handling

- **Contact.** Same layout; the copy is French. The calendar booking is covered under open questions.
- **Sample audit.** The whole page in French, including table headers, the fictional company narrative and the notes. The embedded PNG diagrams and the PDF are covered under open questions.
- **Legal pages.** The French privacy policy and terms are proper French legal text, drafted from the English and reviewed by Antoine. Mentions légales is unchanged.
- **Case studies.** The narrative is in French. How client quotes are handled is covered under open questions.
- **404.** A single 404 page, since Vercel serves one. It is bilingual (short EN and FR text, both home links), or it detects `/fr/` in the path client-side; builder's call.

### Analytics

- GA4 tracking stays the same.
- `data-track` names stay identical across languages, so conversions aggregate.
- Language is read from the page path (`/fr/`). The builder may add a `language` event parameter if it's trivial.
- The cookie banner is translated; the consent mechanics are unchanged.

### Writing the French

- Claude drafts the French copy for every page, post and legal text, following a short **glossary** fixed before drafting (see open questions for the service names). Antoine reviews and edits all of it.
- **Register:** *vouvoiement*, short sentences, the same tone as the English. Avoid anglicisms where a natural French term exists; keep established English tech terms French data people use as-is ("pipeline", "dashboard" where natural, tool names).

### Rollout

1. **Restructure first (blocks next week's content).** Move all copy into English copy modules and dictionaries, create the route map, and make the templates locale-aware. Ship with **English output byte-for-byte equivalent** (no visible change), verified by diffing `dist/` before and after, apart from attributes that change on purpose.
2. **French drafts** on a branch: all pages, posts, legal text and the UI dictionary.
3. **Antoine reviews the French.**
4. **Launch French in one go.** The `/fr/` routes, language switch, hreflang and French sitemap entries go live together. Until launch, the `/fr/` routes aren't built in production, behind a flag similar to `SHOW_BLOG`, so step 1 can ship without exposing half-finished French.
5. **From then on:** every new page, post or sample audit includes its French version in the same change; the build enforces it.

### Verification

- `astro check` and `astro build` pass. A missing French key, a missing post counterpart or a route map entry without both paths fails the build.
- The `dist/` diff for the English output after step 1 shows no copy changes.
- A link check over `dist/fr/` finds no links to English pages except where intended (the switch, technology vendor links, mentions légales).
- Lighthouse CI passes on a sample of French pages (SEO ≥ 0.95, accessibility ≥ 0.95, as configured).
- Manual pass: the switch round-trips on every page; hreflang and canonical are correct on a sample of pages; the cookie banner, mobile menu and diagrams render in French; French prices and dates are formatted correctly.

### Settled after the builder check (Claude's calls unless marked)

- **The launch flag** is a single constant, `SHOW_FRENCH` in `src/data/siteConfig.ts`, like `SHOW_BLOG`. While it is false, all of these are off in production: the `/fr/` routes, the language switch, hreflang tags, `og:locale:alternate` and French sitemap entries. That way step 1's English output stays equivalent and nothing points at a 404. Launch is one commit that flips it. French routes still build in `astro dev` and Vercel previews, matching the draft rule in `src/data/blog.ts`, so Antoine can review on a preview URL.
- **All four existing blog posts get French versions at launch** (follows from the full-mirror decision). There is no grandfather exemption; the counterpart rule applies from day one.
- **No French redirects.** The old `/services/...` redirects in `vercel.json` are English-only legacy. French URLs are new. Vercel's `trailingSlash: true` covers `/fr` → `/fr/`.
- **OG images.** The metadata layer takes an optional per-locale OG image and falls back to the English one. French OG images (the default and the two case studies) are nice to have, not a launch blocker; they can be added later without code changes.

### Decided by Antoine after the builder check

- **Booking.** Antoine creates a second Google Calendar appointment schedule with the same availability and French booking questions, and provides its embed URL. `/fr/contact/` embeds it. The French "a few short questions" copy describes the French questions. The embed URL lives per locale in the contact copy or data.
- **Client quotes** (case studies, homepage testimonials) are shown in French with a small "Traduit de l'anglais" note. Antoine gives each client a heads-up. The data model holds a per-locale quote text plus an original-language flag that renders the note.
- **Sample audit PDF.** The PDF is exported from a Google Doc. The French PDF is made the same way: a French copy of the Google Doc, filled from the reviewed French page copy (Claude can fill it through the Google Drive connector if Antoine wants), then exported. It's served at its own French path; the French page links to it, with the same `data-track` name. If the two flow-diagram PNGs come from that Doc, they're translated there and exported again; otherwise Claude redraws them as inline SVG with translatable labels. The same process applies to next week's new sample audits.

## Glossary rule (what stays in English)

Readers of the French site are French founders, CEOs, CFOs and ops leads at SMEs, usually not data people. The test for each term: **would that buyer say it out loud in a meeting in French?**

- **Translate** when a natural, everyday French term exists. For example: tableau de bord (dashboard), rapport (report), indicateur (metric), tableur / fichiers Excel (spreadsheets), passation (handover), forfait mensuel (retainer), astreinte (on call), prix fixe / au forfait (fixed price).
- **Keep in English** when that is what French businesses actually say and the French term sounds like an administrative document. For example: data (équipe data, plateforme data), reporting (le reporting), pipeline, BI, SQL, cloud, data analyst, data engineer, and every tool and product name.
- **Both, on first mention** when the buyer may know either: "entrepôt de données (data warehouse)", then the French term alone after that.
- **Tiebreaker:** the term French buyers search for, checked while drafting titles and descriptions.
- **Service names follow the same rule:** keep the name when it's the same word in French, translate it when the English name doesn't speak to the buyer. Final names are in the glossary below.

The glossary lives in the repo (`docs/fr-glossary.md`). It's drafted before the copy and grows with every recurring fix from Antoine's review.

### Service and tier names (decided)

| EN | FR | Why |
|---|---|---|
| Audit | Audit | Same word |
| Build | Construction | "Build" is IT jargon; the buyer isn't in IT |
| Improve | Amélioration | The English name doesn't speak |
| Support | Support | Normal in French business |
| Run / Extend / Lead | Maintien / Évolution / Pilotage | "Extend" doesn't speak; the set reads as a progression |

The French service slugs are `/fr/services/audit-plateforme-data/`, `/fr/services/construction-plateforme-data/`, `/fr/services/amelioration-plateforme-data/` and `/fr/services/support-plateforme-data/`.

## Open questions for Antoine

None.

## Left to the builder

- File layout of copy modules and templates; the route mechanism (`[lang]` vs thin route files vs the Astro `i18n` config).
- Whether rich text uses inline HTML or a tiny inline-Markdown helper.
- How `/fr/mentions-legales/` resolves, and the 404 approach.
- Sitemap hreflang through `serialize` (optional).
- The exact French slugs (drafted, then reviewed by Antoine).
