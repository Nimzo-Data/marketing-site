# French Version Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a full French mirror of nimzodata.com under `/fr/`, with one shared layout per page, copy in typed per-locale modules, and a build that refuses half-translated output.

**Architecture:** Every page's markup moves into a view component under `src/views/` that takes a `locale` prop and reads its text from a pair of copy modules (`*.en.ts` and `*.fr.ts`). The French module is typed against the English one.
- English route files stay at their current paths as thin wrappers.
- One catch-all route, `src/pages/fr/[...path].astro`, renders every French page from a route map. It returns no paths while French is switched off.
- Phase 1 ships the restructure with **byte-equivalent English output** and French hidden; it must reach `main` before next week's new content.
- Phase 2 writes the French copy, then launches it by flipping one constant.

**Tech Stack:** Astro 5 (static), TypeScript, Tailwind 4, MDX content collections, `@astrojs/sitemap`, Vercel. New dev dependencies: `vitest`, `node-html-parser`.

**Spec:** `docs/superpowers/specs/2026-11-18-french-version-design.md`

## Global Constraints

- **English URLs never change.** French lives under `/fr/` with French slugs, except `/mentions-legales/`, which is shared.
- `trailingSlash: 'always'`. Every generated internal URL ends in `/`.
- **No automatic language redirects.** The language switch is a plain `<a>` with `hreflang` and `lang` attributes.
- `SHOW_FRENCH` in `src/data/siteConfig.ts` (default `false`) is the only launch switch. While it is false, production output contains no `/fr/` pages, no language switch, no hreflang, no `og:locale:alternate` and no French sitemap entries. French still builds in `astro dev`, on Vercel previews (`VERCEL_ENV === 'preview'`), and locally with `INCLUDE_FRENCH=1`.
- **Copy modules:**
  - No `as const` in `*.en.ts`. Export `type XCopy = typeof copy`, and annotate the French module `const copy: XCopy`.
  - A key holding HTML ends in `Html` and is rendered with `set:html`. Every other key is plain text.
  - Internal links inside copy use `href(id, locale)`. Never a literal path.
- **`data-track` values are identical in both locales.**
- **French copy rules:**
  - *vouvoiement*;
  - non-breaking space (` `) before `: ; ? !` and inside « »;
  - glossary in `docs/fr-glossary.md`;
  - service names Audit / Construction / Amélioration / Support, tiers Maintien / Évolution / Pilotage.
- **Prices:** EN `€3,000`, `€3,000 – €5,000`. FR `3 000 €`, `3 000 – 5 000 €` (`Intl` `fr-FR` separators).
- **Dates:** EN `en-GB` "9 September 2026", FR `fr-FR` "9 septembre 2026".
- **Client quotes in French** show a "Traduit de l'anglais" note.

## Review Focus

1. **A French page linking to an English URL** because copy contains a literal path. Expected: the check fails the build. Covered by `checkFrenchLinks` in Task 12.
2. **A switch or hreflang link pointing at a page that doesn't exist** (mentions légales, 404, a post without its pair). Expected: the switch is hidden and hreflang is omitted. Covered by `checkAlternatesResolve` in Task 12.
3. **`/fr/` leaking into production while `SHOW_FRENCH` is false** (a switch, hreflang, sitemap entry or file). Expected: none at all. Covered by `checkNoFrenchLeak` in Task 12.
4. **An English copy change hidden by the diff normaliser** (a dropped `<br>`, a changed entity, a lost attribute). Expected: the diff reports it. Covered by the `diffDist` tests in Task 1.
5. **French strings overflowing fixed-width UI at phone width** (nav, buttons, chips, pricing cards; French runs about 20% longer). Expected: no clipping or horizontal scroll at 375px. Covered by a manual step in Task 19, because it can't be cheaply automated.

---

## Phase 1 — Restructure (English unchanged, French hidden). Must merge before next week's content.

Work on branch `feat/i18n`. Each task ends with `npm run build && npm run diff:dist` showing no differences.

### Task 1: Baseline snapshot and dist diff tool

**Files:**
- Create: `scripts/dist-normalize.mjs`, `scripts/diff-dist.mjs`, `scripts/dist-normalize.test.mjs`
- Modify: `package.json` (scripts `test`, `diff:dist`, `baseline`; devDependencies `vitest`, `node-html-parser`), `.gitignore` (`.dist-baseline/`)

**Interfaces:**
- Produces:
  - `normalizeHtml(html: string): string`
  - `normalizeCss(css: string): string`
  - `diffDist(baselineDir: string, distDir: string): { path: string; diff: string }[]`
  - CLI `npm run diff:dist` exits 1 on any difference.
  - `npm run baseline` builds the site and copies `dist/` to `.dist-baseline/`.

- [ ] **Step 1: Write the failing tests** in `scripts/dist-normalize.test.mjs`:
  - `normalizeHtml` treats `<p data-astro-cid-abc123 class="x astro-ab12cd34">A  \n b</p>` and `<p class="x" data-astro-cid-zzz>A b</p>` as equal.
  - It treats `<p>a&rarr;b</p>` and `<p>a→b</p>` as equal.
  - It treats `<p>a<br>b</p>` and `<p>a b</p>` as **not** equal.
  - It treats `href="/a/"` and `href="/b/"` as not equal.
  - It treats `/_astro/index.Ab12.css` and `/_astro/index.Zz99.css` as equal.
  - `diffDist` reports a page that exists in only one directory.
- [ ] **Step 2: Run** `npx vitest run scripts/` → FAIL (module not found).
- [ ] **Step 3: Implement.**
  - `normalizeHtml` parses with `node-html-parser` and serialises a canonical form: tag, sorted attributes, decoded text with whitespace runs collapsed, whitespace-only text nodes dropped. It removes `data-astro-cid-*` attributes and `astro-xxxxxxxx` class tokens, and replaces `/_astro/<name>.<hash>.<ext>` with `/_astro/<name>.<ext>`.
  - `normalizeCss` applies the same cid and hash stripping and collapses whitespace.
  - `diffDist` walks both directories (`.html`, `.css`, `.xml`) and returns a line diff per changed file.
- [ ] **Step 4: Run** `npx vitest run scripts/` → PASS.
- [ ] **Step 5: Capture the baseline.** `src/` is still untouched; the new scripts don't affect the build. Run `npm run baseline`, then `npm run diff:dist` → "no differences".
- [ ] **Step 6: Commit** `chore(i18n): baseline snapshot and dist diff tool`.

### Task 2: i18n core: locales, route map, flags, copy helpers, formatting

**Files:**
- Create:
  - `src/i18n/locales.ts`, `routes.ts`, `flags.ts`, `copy.ts`, `format.ts`
  - `src/data/prices.ts`
  - tests `src/i18n/routes.test.ts`, `copy.test.ts`, `format.test.ts`
- Modify: `src/data/siteConfig.ts` (add `export const SHOW_FRENCH = false;` with a comment mirroring `SHOW_BLOG`), `package.json` (`test` runs `vitest run`)

**Interfaces:**
- Produces:
  - `locales.ts`:
    - `type Locale = 'en' | 'fr'`
    - `locales: readonly Locale[]`
    - `ogLocale(l: Locale): 'en_GB' | 'fr_FR'`
  - `routes.ts`:
    - `routes`: `Record<RouteId, Record<Locale, string>>`
    - `type RouteId`
    - `href(id: RouteId, locale: Locale): string`
    - `routeIdForPath(pathname: string): RouteId | undefined`
    - `frenchPaths(): { id: RouteId; path: string | undefined }[]`: the catch-all params; `/fr/` → `undefined`, `/fr/a-propos/` → `'a-propos'`; ids whose FR path does not start with `/fr/` are excluded.
  - `alternateLinks(paths: Record<Locale, string>, site: URL): { hreflang: 'en' | 'fr' | 'x-default'; href: string }[]` returns `[]` when `!frenchBuilt` or `paths.en === paths.fr`. Otherwise it returns `en`, `fr` and `x-default` (equal to `en`), as absolute URLs.
  - `flags.ts`: `frenchBuilt: boolean` is true when any of these holds:
    - `SHOW_FRENCH`;
    - `!import.meta.env.PROD`;
    - `process.env.VERCEL_ENV === 'preview'`;
    - `process.env.INCLUDE_FRENCH === '1'`.
  - `copy.ts`:
    - `placeholder<T>(en: T): T` tags the object with a symbol.
    - `isPlaceholder(x: unknown): boolean`
    - `pickCopy<T>(copies: Record<Locale, T>, locale: Locale): T` throws `French copy missing (placeholder) for <hint>` when `locale === 'fr' && SHOW_FRENCH && isPlaceholder(copies.fr)`. It takes an optional third arg `hint: string`.
  - `format.ts`:
    - `eur(amount: number, locale: Locale): string`
    - `eurRange(min: number, max: number, locale: Locale): string`
    - `formatDate(d: Date, locale: Locale): string`
  - `prices.ts`: the named numbers for every structured price currently shown, for example `audit: { min: 3000, max: 5000 }`, `build`, `improve`, `support: { run: 950, extend: 2250, lead: 3950 }`.

Route map. These French slugs are final unless Antoine changes them in review:

| id | en | fr |
|---|---|---|
| home | `/` | `/fr/` |
| about | `/about/` | `/fr/a-propos/` |
| contact | `/contact/` | `/fr/contact/` |
| audit | `/services/data-platform-audit/` | `/fr/services/audit-plateforme-data/` |
| build | `/services/data-platform-build/` | `/fr/services/construction-plateforme-data/` |
| improve | `/services/data-platform-improvement/` | `/fr/services/amelioration-plateforme-data/` |
| support | `/services/data-platform-support/` | `/fr/services/support-plateforme-data/` |
| caseStudies / aeyde / tameson | `/case-studies/…` | `/fr/etudes-de-cas/`, `/fr/etudes-de-cas/aeyde/`, `/fr/etudes-de-cas/tameson/` |
| technologies and `tech:<slug>` for all 10 | `/technologies/<slug>/` | `/fr/technologies/<slug>/` |
| sampleAudit | `/sample-audit/` | `/fr/exemple-audit/` |
| blog | `/blog/` | `/fr/blog/` |
| privacy | `/privacy-policy/` | `/fr/politique-de-confidentialite/` |
| terms | `/terms-of-service/` | `/fr/conditions-generales/` |
| legalNotice | `/mentions-legales/` | `/mentions-legales/` |

- [ ] **Step 1: Write the failing tests:**
  - `href('audit','fr') === '/fr/services/audit-plateforme-data/'`.
  - Every route value starts and ends with `/`.
  - No two ids share an FR path, except `legalNotice`.
  - `routeIdForPath('/fr/a-propos/') === 'about'` and `routeIdForPath('/about/') === 'about'`.
  - `frenchPaths()` excludes `legalNotice` and includes `{id:'home', path: undefined}`.
  - `alternateLinks` returns `[]` for `legalNotice`'s paths.
  - `eur(3000,'en') === '€3,000'`.
  - `eurRange(3000,5000,'en') === '€3,000 – €5,000'`.
  - `eur(3000,'fr')` matches `/^3\s000\s€$/u`.
  - `formatDate(new Date('2026-09-09'),'fr') === '9 septembre 2026'`.
  - `pickCopy` returns `en` for `'en'` and the FR object when it is not a placeholder.
  - `isPlaceholder(placeholder({a:1})) === true`.
- [ ] **Step 2: Run** `npm test` → FAIL.
- [ ] **Step 3: Implement** the modules above. Mock `SHOW_FRENCH` and `frenchBuilt` in the tests with `vi.mock`.
- [ ] **Step 4: Run** `npm test` → PASS. `npx astro check` → 0 errors.
- [ ] **Step 5: Commit** `feat(i18n): locales, route map, flags, copy and format helpers`.

### Task 3: Locale-aware base layout, UI dictionary, header, footer, language switch, cookie banner

**Files:**
- Create:
  - `src/i18n/ui.en.ts`, `src/i18n/ui.fr.ts` (`placeholder(en)`), `src/i18n/ui.ts`
  - `src/components/layout/LanguageSwitch.astro`
  - `src/data/navigation.en.ts`, `src/data/navigation.fr.ts`
- Modify:
  - `src/layouts/BaseLayout.astro`
  - `src/components/layout/Header.astro`, `MobileMenu.astro`, `Footer.astro`
  - `src/components/ui/CookieConsent.astro`
  - `src/data/navigation.ts`
  - `astro.config.mjs`. The sitemap filter also drops `/fr/` unless `SHOW_FRENCH`, and the `SHOW_BLOG` rule covers `/fr/blog/` as well as `/blog/`.

**Interfaces:**
- Consumes: Task 2.
- Produces:
  - `t(locale: Locale): UiCopy`. It holds header, footer, cookie, switch, breadcrumb "Home", Organization description, RSS title, CTA banner, "Traduit de l'anglais", and every component string found in Task 4 step 1.
  - `getNavigation(locale): { navItems: NavItem[]; ctaLink: NavLink; serviceLinks: NavLink[]; technologyGroups: TechnologyGroup[]; companyLinks: NavLink[] }`. `NavItemDropdown` gains `id: 'services' | 'technology' | 'resources'`. Header and MobileMenu branch on `id`, not `label`.
  - `BaseLayout` props gain:
    - `locale?: Locale` (default `'en'`);
    - `routeId?: RouteId`;
    - `alternates?: Record<Locale, string>` (for blog posts).
  - `LanguageSwitch` props: `locale`, `alternates?: Record<Locale,string>`. It renders nothing when `!frenchBuilt` or when no alternate exists for the other locale.
- BaseLayout output:
  - `<html lang>`;
  - hreflang `<link>`s via `alternateLinks`;
  - `og:locale` plus `og:locale:alternate` (only when alternates exist);
  - the breadcrumb root is `href('home', locale)` with `t(locale).breadcrumbHome`;
  - Organization `description` from `t(locale)`;
  - RSS `<link>` points to `/rss.xml` or `/fr/rss.xml`;
  - `inLanguage` on the breadcrumb.
  - Header, Footer and CookieConsent receive `locale`.

- [ ] **Step 1:** Move the strings into `ui.en.ts` and `navigation.en.ts`. Navigation hrefs come from `href(id,'en')`. Keep `navigation.ts` re-exporting the EN values under the old names until the last consumer moves, then delete those re-exports in Task 13.
- [ ] **Step 2:** Implement the BaseLayout, LanguageSwitch (header right of the nav, and the top of the mobile menu), Header, MobileMenu, Footer and CookieConsent changes above.
- [ ] **Step 3: Run** `npx astro check && npm run build && npm run diff:dist` → no differences (the switch and hreflang are absent because French isn't built in production).
- [ ] **Step 4: Run** `INCLUDE_FRENCH=1 npm run build` → succeeds. Pages still have no switch, because no FR alternates are routed yet. That is expected.
- [ ] **Step 5: Commit** `feat(i18n): locale-aware layout, UI dictionary, navigation and language switch`.

### Task 4: Shared data and components read locale

**Files:**
- Modify:
  - `src/data/services.ts`, `caseStudies.ts`, `technologies.ts`, `audience.ts`, `founder.ts`
  - components: `PricingRange`, `RetainerGrid`, `CaseStudyHero`, `CaseStudyRelated`, `CaseStudyCard`, `CaseStudyQuote`, `ProblemOutcomeCards`, `FounderBlock`, `ServiceChip`, `CTABanner`, `LeadCard`, `HomepageTestimonials`, `DataPlatformDiagram`, `TamesonLayersDiagram`, `AeydeBeforeAfterDiagram`, `ModelingLayersDiagram`, `PlatformLayersDiagram`, and anything else step 1 finds.
- Create: a `*.en.ts` / `*.fr.ts` (placeholder) pair next to each data file that holds copy.

**Interfaces:**
- Produces:
  - `getServices(locale): Service[]`
  - `getServiceLeads(locale): Record<'audit'|'build'|'improve'|'support', ServiceLead>`
  - `getCaseStudies(locale): CaseStudyMeta[]`, `findCaseStudy(slug, locale)`
  - `getTechnologies(locale): Technology[]`
  - `getAudience(locale): { isFor: string[]; isNot: string[] }`
  - `getFounder(locale): Founder`
  - Language-neutral fields (slugs, logos, photos, URLs, prices from `prices.ts`) stay in the base file. Text comes from the locale pair. Every href comes from `href()`.
  - `CaseStudyShortQuote` gains `translatedFrom?: Locale`. `CaseStudyQuote` and `HomepageTestimonials` render `t(locale).translatedFromEnglish` when it is set.
  - Every component that shows text gains `locale: Locale`.

- [ ] **Step 1: Inventory.** Run `grep -rnE ">[A-Z][a-z][^<{]{3,}<|(text|label|title|eyebrow|alt|aria-label)=\"[A-Z]" src/components src/layouts`. Every hit becomes a `t(locale)` key or a prop.
- [ ] **Step 2: Implement** the getters and component changes. Keep the old exports (`services`, `serviceLeads`, `caseStudies`, …) as EN aliases until Task 13.
- [ ] **Step 3: Run** `npx astro check && npm run build && npm run diff:dist` → no differences.
- [ ] **Step 4: Commit** `refactor(i18n): shared data and components take a locale`.

### Tasks 5–10: Page migrations

All six tasks follow one pattern. Each one ends with `npx astro check && npm run build && npm run diff:dist` showing no differences, then a commit.

**Pattern for page X:**
1. Create `src/views/<area>/<X>.astro` with `Props { locale: Locale }`. It holds the page's markup and scoped styles, moved verbatim.
2. Create `src/views/<area>/<x>.en.ts`. Every string from the page moves here, including title, description, ogTitle and the frontmatter arrays. Prose blocks become one `…Html` template literal per section.
3. Create `src/views/<area>/<x>.fr.ts` exporting `placeholder(en)`.
4. In the view, `const c = pickCopy({ en, fr }, locale, '<area>/<x>')`. Pass `locale` and `routeId` to the layout and `locale` to every component.
5. Replace the existing `src/pages/...` file with a thin wrapper `<X locale="en" />`.
6. Register the view in `src/views/registry.ts`: `views: Record<RouteId, AstroComponentFactory>`, which Task 12 consumes.

- **Task 5: Home, About, Contact.** `contact.en.ts` gets `calendarUrl` (the current URL). The FR placeholder keeps it until Task 18.
- **Task 6: The four service pages + `ServiceLayout`.** The layout takes `locale`; the hero CTA text and href come from `t()` and `href('contact', locale)`. The `Service` JSON-LD gets `inLanguage`. Prices use `eur`/`eurRange` with `prices.ts`.
- **Task 7: Case studies (index, Aeyde, Tameson).** Quotes are read from the locale copy with `translatedFrom` support.
- **Task 8: Technologies index + 10 tool pages + `TechnologyLayout`.** Tool pages share one view per page, not one generic template. The layout's eyebrows (`Need help with ${toolName}`) come from `t()` as functions `(tool: string) => string`.
- **Task 9: Sample audit.**
  - Sections become `…Html` keys.
  - The PDF link and diagram `src`s come from copy keys `pdfHref` and `diagrams.audit`/`diagrams.target`, so French can point at French assets.
  - Keep `data-track="sample-audit-pdf-download"`.
  - Remove the explicit `canonicalUrl` prop; BaseLayout derives it.
- **Task 10: Privacy policy, Terms, 404, Mentions légales.**
  - Mentions légales keeps its French text inline. It is rendered with `locale="fr"` and `routeId="legalNotice"`. Its `<html lang>` becomes `fr`, which is an intended diff: confirm the only difference is the `lang` attribute, then refresh the baseline for that file.
  - 404 stays a single file. It shows a short French line and a link to `/fr/` only when `frenchBuilt`.

### Task 11: Bilingual blog

**Files:**
- Modify:
  - `src/content.config.ts` (schema adds `translationOf: z.string().optional()`)
  - `src/data/blog.ts`
  - `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/pages/rss.xml.ts`
  - `src/layouts/BlogLayout.astro`
- Create:
  - `src/views/blog/BlogIndex.astro` + copy pair
  - `src/data/blog-pairs.ts` + `src/data/blog-pairs.test.ts`
  - `src/blog/fr/.gitkeep`
  - `src/pages/fr/blog/[slug].astro`, `src/pages/fr/[feed].xml.ts`

**Interfaces:**
- Produces:
  - `postLocale(post): Locale`: `'fr'` when `post.id` starts with `fr/`.
  - `postSlug(post): string`: the id without the `fr/` prefix.
  - `getPublishedPosts(locale: Locale = 'en')`
  - `postUrl(post)`: `/blog/<slug>/` or `/fr/blog/<slug>/`.
  - `postAlternates(post, all): Record<Locale,string> | undefined`
  - `formatPostDate(date, locale)` delegates to `formatDate`.
  - `findUnpairedPosts(posts: { id: string; draft: boolean; translationOf?: string }[]): string[]` (pure). It returns the ids of:
    - non-draft EN posts with no FR post whose `translationOf` equals the EN id;
    - FR posts whose `translationOf` is missing or unknown;
    - pairs whose `draft` flags differ.
  - `getPublishedPosts` throws `Unpaired blog posts: <ids>` when `SHOW_FRENCH && findUnpairedPosts(all).length`.
  - FR post route and FR RSS (`getStaticPaths` returns `[{ params: { feed: 'rss' } }]` only when `frenchBuilt`, else `[]`). The RSS gets `<language>fr</language>`, a French title and description from `t('fr')`, and links to French post URLs.
  - BlogLayout takes `locale` and `alternates`. Its canonical becomes `postUrl`, and the article schema gets `inLanguage`.

- [ ] **Step 1: Write the failing tests** for `findUnpairedPosts`:
  - an EN-only non-draft post is reported;
  - an EN draft without a pair is not reported;
  - a pair with `draft` false/true is reported;
  - an FR post with `translationOf: 'nope'` is reported;
  - a proper pair is not reported.
- [ ] **Step 2: Run** `npm test` → FAIL.
- [ ] **Step 3: Implement** the interfaces above. English post files stay where they are.
- [ ] **Step 4: Run** `npm test && npx astro check && npm run build && npm run diff:dist` → PASS, no differences. EN post URLs and the RSS are unchanged.
- [ ] **Step 5: Commit** `feat(i18n): bilingual blog with pair enforcement and French feed`.

### Task 12: French catch-all route and dist checks

**Files:**
- Create:
  - `src/pages/fr/[...path].astro`
  - `scripts/check-dist.mjs`, `scripts/check-dist.test.mjs`
- Modify: `package.json` (`"postbuild": "node scripts/check-dist.mjs"`), `.github/workflows/lighthouse-ci.yml` (add `npm test` before the build)

**Interfaces:**
- Consumes: `frenchPaths()`, the `views` registry, `frenchBuilt`.
- `[...path].astro`: `getStaticPaths` returns `frenchBuilt ? frenchPaths().map(p => ({ params: { path: p.path }, props: { id: p.id } })) : []`, then renders `<View locale="fr" />`.
- `check-dist.mjs` exports pure checks over `{ path, html }[]` and runs all of them on `dist/`:
  - `checkLang(pages)`: `<html lang>` is `fr` under `/fr/` and on `/mentions-legales/`, and `en` elsewhere.
  - `checkFrenchLinks(pages)`: in `/fr/` pages, no `<a href>` points at an internal path that isn't `/fr/…`. Allowed: the language switch (`[data-lang-switch]`), `/mentions-legales/`, assets (`/_astro/`, files with extensions), `mailto:`, and external URLs.
  - `checkAlternatesResolve(pages, distDir)`: every hreflang href and switch href maps to an existing `index.html` in `dist/`, and every hreflang set is reciprocal.
  - `checkNoFrenchLeak(pages, sitemapXml)`: when the built output contains no `/fr/` directory, no page has a hreflang, switch or `/fr/` link, and the sitemap has no `/fr/` URL.
  - `checkCanonical(pages)`: the canonical equals the page's own URL.
- The CLI exits 1 and lists the failures.

- [ ] **Step 1: Write the failing tests:** one passing and one failing fixture per check, including:
  - an FR page with `<a href="/contact/">` → fails `checkFrenchLinks`;
  - a hreflang to `/fr/missing/` → fails `checkAlternatesResolve`;
  - an EN page with a switch while `/fr/` is absent → fails `checkNoFrenchLeak`.
- [ ] **Step 2: Run** `npx vitest run scripts/` → FAIL.
- [ ] **Step 3: Implement** the route and the checks.
- [ ] **Step 4: Run** `npm run build` (postbuild runs the checks) → PASS, then `npm run diff:dist` → no differences.
- [ ] **Step 5: Run** `INCLUDE_FRENCH=1 npm run build` → PASS. `dist/fr/` holds every route with placeholder (English) copy and the switch round-trips. Spot-check `/fr/services/audit-plateforme-data/` with `npm run preview`.
- [ ] **Step 6: Commit** `feat(i18n): French catch-all route and dist integrity checks`.

### Task 13: Phase 1 wrap-up and merge

**Files:**
- Modify: `src/data/navigation.ts`, `services.ts`, `caseStudies.ts` (remove the EN alias exports and repoint any remaining imports), `README.md`
- Create: `scripts/check-fr-ready.mjs` (`npm run check:fr`)

- [ ] **Step 1:** Remove the alias exports and fix the imports. Run `npx astro check` → 0 errors.
- [ ] **Step 2:** Implement `check:fr`. It lists every `src/**/*.fr.ts` still calling `placeholder(` and every EN post without a FR pair, and exits 1 if any remain. Run it → it lists every file (expected for now).
- [ ] **Step 3:** Add a README section, "Copy in two languages". Cover:
  - where copy lives;
  - the `Html` suffix rule;
  - `href()`;
  - adding a page (route map, views registry, copy pair, thin EN route);
  - adding a post (`src/blog/fr/<french-slug>.md` with `translationOf`);
  - `SHOW_FRENCH`.
- [ ] **Step 4: Run** `npm test && npx astro check && npm run build && npm run diff:dist` → all pass, no differences.
- [ ] **Step 5: Commit** `docs(i18n): two-language copy workflow`. Merge `feat/i18n` into `main` after Antoine's go-ahead.

---

## Phase 2 — French copy and launch

Branch `feat/fr-copy` from `main`. Drafts are written by Claude to the spec's writing rules; Antoine reviews them in Task 19.

### Task 14: Glossary

**Files:**
- Create: `docs/fr-glossary.md`

- [ ] **Step 1:** Write the glossary from the spec's rule.
  - Three lists: translate, keep in English, both on first mention.
  - The service and tier names.
  - About 40 recurring terms taken from the EN copy modules (grep the most frequent nouns).
  - The typography rules.
- [ ] **Step 2: Commit** `docs(i18n): French glossary`.

### Tasks 15–17: French copy

**Files:** replace `placeholder(en)` with real French in each `*.fr.ts`, and add `src/blog/fr/*.md`.

- **Task 15: Pages that sell.** UI dictionary, navigation, shared data (`services`, `serviceLeads`, `audience`, `founder`, `caseStudies` meta), home, the 4 services, about, contact.
  - French titles and meta descriptions target French search terms ("audit data", "plateforme data", "consultant BigQuery").
- **Task 16: Proof pages.** Case studies (quotes in French with `translatedFrom: 'en'`), sample audit, technologies index and the 10 tool pages.
- **Task 17: Legal and blog.**
  - Privacy policy and terms are drafted as proper French legal text.
  - The 4 posts become `src/blog/fr/<french-slug>.md` with `translationOf` and the same `draft` status.
  - Internal links inside the posts point at French URLs.
  - The French RSS strings.

Each task: after writing, run `npm run check:fr` (the remaining list shrinks), `npx astro check`, then `INCLUDE_FRENCH=1 npm run build` (checks pass). Commit per task (`copy(fr): …`).

### Task 18: French assets

- [ ] **Step 1:** Antoine creates the French Google Calendar appointment schedule (same availability, French questions). Put its URL in `contact.fr.ts` `calendarUrl`. Update the French "a few short questions" step to match the real questions.
- [ ] **Step 2:** Make a French copy of the sample audit Google Doc and fill it from the reviewed `sampleAudit` French copy (Claude can do this via the Google Drive connector if Antoine wants). Export the PDF to `public/Nimzo-Data-Exemple-Audit.pdf` and set `pdfHref` in `sample-audit.fr.ts`.
- [ ] **Step 3:** The diagrams.
  - If the two flow diagrams live in that Doc, translate them there and export `public/images/data-flow-audit-diagram-fr-3x.png` and `…-target-…-fr-3x.png`.
  - Otherwise, redraw them as inline SVG in the view with labels from copy.
  - Set `diagrams.*` either way.
- [ ] **Step 4:** Run `INCLUDE_FRENCH=1 npm run build` → PASS. Commit `copy(fr): French booking, sample audit PDF and diagrams`.

### Task 19: Antoine's review (human gate)

- [ ] **Step 1:** Push `feat/fr-copy` and share the Vercel preview URL (French is built on previews).
- [ ] **Step 2:** Antoine reads in this order: home, services, contact, about, case studies, sample audit, technologies, blog, legal. He sends fixes, and each recurring fix goes into `docs/fr-glossary.md` and is applied everywhere.
- [ ] **Step 3: Manual check at 375px and 1280px** on `/fr/`, one service page, `/fr/services/support-plateforme-data/` (tier cards), `/fr/contact/` and the mobile menu. Look for:
  - no clipping or horizontal scroll;
  - buttons, chips and nav fit;
  - the switch round-trips;
  - the cookie banner is in French;
  - prices and dates are in French format.
- [ ] **Step 4:** Antoine confirms the French slugs in the route map. Any change is made before launch (no redirects needed yet).

### Task 20: Launch

- [ ] **Step 1:** Set `SHOW_FRENCH = true`.
- [ ] **Step 2: Run** `npm run check:fr` → nothing left. Then `npm test && npx astro check && npm run build` → PASS. The postbuild checks pass: hreflang reciprocal, no English links in French pages, canonicals self-referencing, sitemap includes `/fr/`.
- [ ] **Step 3:** Add `/fr/` and `/fr/services/audit-plateforme-data/` to Lighthouse CI collection (`.lighthouserc.json` `collect.url` with `staticDistDir`). Run CI → SEO ≥ 0.95 and accessibility ≥ 0.95 on the French pages.
- [ ] **Step 4: Commit** `feat(i18n): launch French version`. Merge after Antoine's go-ahead. After deploy, submit the sitemap in Google Search Console.
