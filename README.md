# nimzodata.com

Marketing website for Nimzo Data, built with Astro.

## Copy in two languages

The site exists in English (at the root) and French (under `/fr/`, with French URLs). Every page is one layout with its text in two files side by side, so a design change is made once and the text is written twice.

### Where the text lives

| What | English | French |
|---|---|---|
| A page | `src/views/<area>/<page>.en.ts` | `src/views/<area>/<page>.fr.ts` |
| Header, footer, cookie banner, component labels | `src/i18n/ui.en.ts` | `src/i18n/ui.fr.ts` |
| Menus | `src/data/navigation.en.ts` | `src/data/navigation.fr.ts` |
| Services, case studies, tools, founder, audience | `src/data/<name>.en.ts` | `src/data/<name>.fr.ts` |
| Blog posts | `src/blog/<slug>.md` | `src/blog/fr/<french-slug>.md` |

The page layout itself is `src/views/<area>/<Page>.astro`. Files under `src/pages/` are thin wrappers.

### Rules

- **The French file has exactly the keys of the English one.** A missing or extra key is a type error (`npx astro check`).
- **Keys ending in `Html` hold HTML** (links, `<strong>`, `<br>`); every other key is plain text.
- **Internal links go through `href()`:** `<a href="${href('contact', 'fr')}">`, never a typed path. URLs per page are in `src/i18n/routes.ts`.
- **Prices shown in several places** come from `src/data/prices.ts` through `eur()` / `eurRange()` (`€3,000` in English, `3 000 €` in French).
- **French style:** *vouvoiement*, short sentences, a non-breaking space before `: ; ? !`, and the terms in `docs/fr-glossary.md`.

### Adding things

- **A page:** add its URLs to `src/i18n/routes.ts` and its view to `src/views/registry.ts` (a type error until you do), create the view and its `.en.ts` / `.fr.ts` pair, and add a thin `src/pages/...` file rendering `<View locale="en" />`.
- **A blog post:** write `src/blog/<slug>.md` and `src/blog/fr/<french-slug>.md` with `translationOf: <slug>` in its frontmatter. Both must have the same `draft` value; once French is live, the build stops on a post without its pair.
- **Until a French file is written** it exports `placeholder(en)`: the French page shows English on previews, and the build refuses it once French is live.

### Launching and checking

- `SHOW_FRENCH` in `src/data/siteConfig.ts` is the single switch. While it is `false`, production has no French page, language switch, hreflang or French sitemap entry. French pages still build in `astro dev`, on Vercel previews, and locally with `INCLUDE_FRENCH=1 npm run build`.
- `npm run check:fr` lists what's left before launch: French files still on `placeholder(en)` and posts without a French version.
- Every build runs `scripts/check-dist.mjs`: page language, canonicals, language links that lead nowhere, French pages linking to English ones (an error once launched), and nothing French leaking before launch.
- `npm test` runs the unit tests (route map, formatting, copy helpers, blog pairing, build checks).
