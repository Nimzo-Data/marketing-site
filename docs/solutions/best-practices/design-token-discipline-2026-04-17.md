---
title: Design-token discipline — declare, enforce, audit
date: 2026-04-17
category: docs/solutions/best-practices
module: nimzo-marketing-site
problem_type: best_practice
component: frontend_stimulus
severity: high
applies_when:
  - "Starting a new Tailwind v4 or CSS-first project where design tokens are declared in a global stylesheet"
  - "Running pre-launch design review on a static site (Astro, Next, SvelteKit)"
  - "Adding a new color, spacing, or typography scale that must be enforced across many files"
  - "Performing an outside-voice / second-model review on visual consistency"
  - "Shipping a boutique agency site where brand consistency is part of the product"
symptoms:
  - "Design tokens declared in global.css but referenced zero times in components"
  - "Raw hex colors leaking across many component files (e.g. #ffffff despite --color-white existing)"
  - "Hardcoded pixel spacing values instead of spacing-scale tokens"
  - "Off-palette colors appearing for success/error/border/surface states because no semantic token exists"
  - "Token layer looks complete in the design-system doc but is ignored in practice"
root_cause: inadequate_documentation
resolution_type: workflow_improvement
related_components:
  - documentation
  - tooling
  - development_workflow
tags:
  - design-tokens
  - tailwind-v4
  - css-variables
  - design-system
  - astro
  - pre-launch-audit
  - palette-discipline
  - subagent-review
---

# Design-token discipline — declare, enforce, audit

## Context

Design-token layers drift because **declaring tokens** and **using tokens** are two separate disciplines, and only the first one feels productive. Phase 1 (declare `--color-*` and `--spacing-*` variables in `global.css`) ships in an hour. Phase 2 (enforce those tokens as the *only* way to spell a color or spacing value, across every component, forever) is unglamorous maintenance work no ticket ever asks for.

In the Nimzo marketing site this played out cleanly — and the prior-session archaeology makes the failure mode unusually legible (session history):

1. **Plan phase** specified a minimal `@theme` block (primary, accent, background, card, text, white). Spacing scale `--spacing-1..--spacing-32` declared for completeness.
2. **Unit 1 review** (session `2edcc0c2`, subagent `ae724ae8ef55328fd`) noticed the spacing-token gap. Verdict: *"Not a bug, just worth noting."* The review approved the scaffold. **This was the moment the "declared-but-not-enforced" pattern got ratified** — the review saw the tokens, confirmed they existed, and moved on. Checking whether downstream components actually used them was not in scope.
3. **Unit 2 review** caught three files using raw `#ffffff`/`#004f4c`/`#493441`. A fix-up subagent patched three files — but **swapped some `#ffffff` for the CSS keyword `white` instead of `var(--color-white)`**. That white-vs-var-vs-hex trichotomy is the exact smell that tells you nothing is enforcing anything.
4. **Units 3-11** added roughly 27 more components. Each one passed its own Unit-level code-quality review. The reviewers were briefed to check "design tokens used consistently" but each reviewer only saw its own Unit's files. There was no cumulative audit.
5. **Pre-launch /gstack-design-review** dispatched an independent outside-voice subagent (session history). Its finding, verbatim: *"`global.css:18-27` defines `--spacing-1` through `--spacing-32`. They are referenced zero times across the entire `src/` tree. Every component inlines raw pixels... 104 hardcoded px spacing values in 30 files. **The token system is theater.**"*

By the time the cross-cutting audit ran: **104 hardcoded pixel values in 30 files, 13 raw `#ffffff` in 6 components, and 6 off-palette greys** (`#e5e7eb`, `#f0f4f4`, `#f0f0f0`, `#f9fbfb`, `#16a34a`, `#dc2626`) had leaked in.

The important meta-lesson is not "declare AND enforce tokens" in the abstract — that's obvious. It's: **the subagent-driven Unit-by-Unit review flow cannot catch cross-cutting drift because no reviewer sees the whole codebase at once.** You need a cross-file audit at a ratchet point. On this project, that ratchet was `/gstack-design-review`. On other projects, it can be a pre-commit hook or a CI check.

## Guidance

### 1. Declare AND verify — the two-line audit

The moment tokens land in `global.css` (or wherever), add this to the project's setup checklist or run it in CI:

```bash
# Find every hex color outside the tokens file
grep -rnE '#[0-9a-fA-F]{3,8}' src/components/ src/pages/ 2>/dev/null

# Spacing distribution — if your top hits aren't on the declared scale, the scale is fiction
grep -rn "padding:\|margin:\|gap:" src/components/ \
  | grep -oE '[0-9]+px' | sort | uniq -c | sort -rn
```

Every hex hit outside `global.css` is a violation. Every spacing value off the declared scale (`28px` in a 4px-base system is the tell) is evidence no one is thinking about tokens at all.

### 2. SVG attribute tokens — the non-obvious trick

Most devs assume CSS custom properties only work inside `style` attributes or stylesheets, so they inline `fill="#16a34a"` in SVG. **Modern browsers accept `var(--token)` directly in SVG presentation attributes:**

```html
<!-- Works in all modern browsers -->
<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
  <circle cx="9" cy="9" r="9"
          fill="var(--color-success)" fill-opacity="0.12"/>
  <path d="M5 9.5L7.5 12L13 7"
        stroke="var(--color-success)" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

This matters because icons are where hex codes most often leak in — they come straight from Figma exports with raw colors baked into the markup. Tokenize the paint, not just the stylesheet.

### 3. Drift reveals gaps, not just violations

When the audit surfaces off-palette hex, the answer isn't always "ban the hex." Sometimes it's **"add the missing token."** If the brand guide defines 7 colors but components need a border grey, a hover-surface tint, and a subtle-bg off-white, your token layer is missing 3 semantic tokens. Fix:

```css
/* global.css — after the drift audit */
@theme {
  /* Brand core (from guide) */
  --color-primary: #004f4c;
  --color-accent: #493441;
  --color-background: #f4faff;
  --color-card: #dee7e7;
  --color-text: #1a1a1a;
  --color-text-secondary: #6b7280;
  --color-white: #ffffff;

  /* Semantic tokens added after drift audit */
  --color-border: #e5e7eb;
  --color-surface-hover: #f0f4f4;
  --color-surface-subtle: #f9fbfb;
  --color-success: #16a34a;
  --color-error: #dc2626;
}
```

Adding the token AFTER finding the drift is fine — the failure wasn't declaring the wrong tokens, it was not having a token for a real need. Don't make components suffer through a stricter palette than the design actually requires.

### 4. Grep-and-replace, one pattern at a time

The tempting shortcut is "let me just fix the obvious ones." That leaves the tail. Commit to draining the full list of one token in one pass:

```bash
# Find every file with the offending hex
grep -rln "#e5e7eb" src/components/ src/pages/

# Batch replace across all matches
# (use Edit tool with replace_all:true in Claude Code, or sed for unambiguous literals)
```

Then re-run the grep until it returns zero hits for that pattern. Then move to the next hex. Boring, reliable, done in an hour.

### 5. Ratchet the enforcement somewhere

Three escalating options, pick one based on how critical brand consistency is:

- **Quarterly audit** — run the grep commands above. Cheap, catches drift before it compounds. Good default for small projects.
- **Pre-commit hook** — grep the staged diffs for raw hex and off-scale `px` in component files. Fail the commit with a pointer to `global.css`. Right for team projects where the author and reviewer are different people.
- **CI check** — same grep in the PR pipeline. Highest friction, highest signal. Worth it on sites where brand consistency is literally a selling point (boutique agencies, design tools, anything where `view-source` is a sales vector).

Example pre-commit (Husky + lint-staged):

```json
{
  "lint-staged": {
    "src/components/**/*.astro": [
      "bash -c 'if grep -nE \"#[0-9a-fA-F]{3,8}\" $0; then echo \"Raw hex found — use tokens from global.css\"; exit 1; fi'"
    ]
  }
}
```

### 6. When NOT to tokenize

Tokens encode decisions that should move together. Cases where hardcoded values are fine:

- **One-off SVG paint** that will never be re-themed — illustration art, a brand mark, a photograph.
- **Animation tweaks** (`transform: translateY(-2px)`, `scale(0.98)`) where the context-specific number matters more than system consistency.
- **Content geometry** (`width: 18` on a specific icon, `viewBox="0 0 24 24"` on an SVG) — tokenizing these creates false coupling.

The test: *if this value changed in the design system, would I want this instance to change with it?* If yes, tokenize. If no, leave it — and note it with a comment so a future audit doesn't re-flag it.

## Why this matters

### Maintenance cost

A design-system change — "let's tighten the vertical rhythm by 8px" or "the border grey is too warm, try `#e7e7e7`" — is a two-minute edit if you tokenized and a thirty-minute grep-and-replace across 30 files if you didn't. The cost compounds: every component added before the refactor adds another file to the next refactor. Tokens aren't a nice-to-have; they're the amortization mechanism that keeps design changes cheap.

### Brand consistency

Off-palette values leak in as "just this once" and stay forever. A developer grabs `#e5e7eb` from a Tailwind default because it's "close enough" to the brand border grey. Six components later, the site has four border greys within 5% of each other — close enough that no single instance looks wrong, far enough that the whole thing feels sloppy. Nobody can name what's off. The token layer exists precisely to prevent this drift, *if you enforce it.*

### Credibility

For a boutique design agency (or anyone whose product is "we care about craft"), the gap between claimed and actual discipline is existential. A prospect who views-source and finds five hover-surface greys and 104 hardcoded pixel values has evidence that the craft story is marketing, not practice. This is especially true for the audiences most likely to view-source — other designers, engineers evaluating agencies, anyone with the taste the site is trying to attract.

### The Unit-review blind spot (session history)

The most durable insight from this project is not about tokens per se — it's about review coverage:

> **Subagent-driven Unit-by-Unit code reviews cannot catch cross-cutting drift.** Each reviewer sees only its own Unit's files. Patterns that span Units (design tokens, heading scales, component duplication, breakpoint sprawl) are systematically missed until a cross-file audit runs.

The Nimzo session showed this clearly: Unit 2 review caught hex leakage in 3 files. Units 3-11 reintroduced the same pattern because each reviewer only audited its own Unit. Not a single Unit review ever said "stop, there are 104 hardcoded values across the codebase" — because no reviewer had seen all 104 files.

The fix is to insert a cross-cutting audit at a known ratchet point — at minimum once before launch (what `/gstack-design-review` does), and ideally continuously via a pre-commit hook or CI check.

## When to apply

- **Any new project with a declared design-token layer** — set up the audit grep on day one, before the token layer rots.
- **Before shipping v1 of any marketing site or landing page** — the site's entire job is to communicate care; token discipline is that care made mechanical.
- **As a second pass in design-system adoption** — first pass: define tokens. Second pass (critical and usually skipped): enforce them. Budget the second pass explicitly; it will not happen spontaneously.
- **When an outside voice flags one palette leak** — treat it as a SYMPTOM, not a bug. Audit the whole codebase the same day. The "just this once" hex code is always accompanied by a dozen siblings.
- **After any multi-Unit subagent-driven build** — the Unit-by-Unit review flow structurally misses cross-cutting drift. Budget a cross-file consistency audit as part of QA.
- **When a design refresh is upcoming** — convert to tokens *before* the refresh, not during. Tokenizing and re-styling simultaneously mixes mechanical and creative work; you will ship bugs in both.
- **On any codebase claiming "design system"** — the claim obligates enforcement.

## Examples

### Example 1 — Off-palette hex leak (before)

Six Nimzo components contained raw hex values for states the brand guide didn't explicitly spec:

```astro
<!-- Header.astro, MobileMenu.astro, PricingRange.astro, etc. — 6 files, 6 off-palette colors -->
<style>
  .header { border-bottom: 1px solid #e5e7eb; }
  .nav-link:hover { background-color: #f0f4f4; }
  .pricing-row:nth-child(even) { background-color: #f9fbfb; }
  .checkmark { fill: #16a34a; }
  .xmark { fill: #dc2626; }
</style>
```

Plus 13 `#ffffff` occurrences despite `--color-white` existing.

### Example 2 — The fix (after)

Token declarations added to `global.css:13-20`:

```css
@theme {
  /* Surfaces & borders */
  --color-border: #e5e7eb;
  --color-surface-hover: #f0f4f4;
  --color-surface-subtle: #f9fbfb;

  /* Semantic (success/error) */
  --color-success: #16a34a;
  --color-error: #dc2626;
}
```

Components rewritten:

```astro
<style>
  .header { border-bottom: 1px solid var(--color-border); }
  .nav-link:hover { background-color: var(--color-surface-hover); }
  .pricing-row:nth-child(even) { background-color: var(--color-surface-subtle); }
  .checkmark { fill: var(--color-success); }
  .xmark { fill: var(--color-error); }
</style>
```

Post-fix grep: zero raw hex outside `global.css`. Verified:

```bash
$ grep -rnE '#[0-9a-fA-F]{3,8}' src/components/ src/pages/
# (no output)
```

Landed in commit `5cb82a7`.

### Example 3 — SVG attribute tokens

Before, `TwoColumnSplit.astro` had raw hex in SVG attributes:

```astro
<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
  <circle cx="9" cy="9" r="9" fill="#16a34a" fill-opacity="0.12"/>
  <path d="M5 9.5L7.5 12L13 7" stroke="#16a34a" stroke-width="1.8"/>
</svg>
```

After — same SVG, tokens in the attributes:

```astro
<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
  <circle cx="9" cy="9" r="9" fill="var(--color-success)" fill-opacity="0.12"/>
  <path d="M5 9.5L7.5 12L13 7" stroke="var(--color-success)" stroke-width="1.8"/>
</svg>
```

Works in all modern browsers. Change the success green once in `global.css` and every check icon updates.

### Example 4 — The "declared but unused" anti-pattern

`global.css:26-36` declared a complete 4px scale:

```css
@theme {
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-24: 96px;
  --spacing-32: 128px;
}
```

Audit command:

```bash
grep -rn "padding:\|margin:\|gap:" src/components/ \
  | grep -oE '[0-9]+px' | sort | uniq -c | sort -rn
```

Result: 104 hits across 30 files, none referencing `var(--spacing-*)`. The tell isn't just "tokens unused" — it's **the presence of off-scale values** like `28px` and `40px` in a 4px-base system. If anyone were even trying to use the scale, they'd round to `32px` or `24px` and reach for the token. Off-scale values are the unmistakable signature of token theater.

Flagged as F-018 in the design-review audit for a dedicated refactor pass.

### Example 5 — The `white` keyword anti-pattern (session history)

During Unit 2's fix-up (session `2edcc0c2`, commit `04502ab`), a reviewer-initiated fix swapped some `#ffffff` for the CSS keyword `white` instead of `var(--color-white)`. The reasoning was "white is fine, it's readable" — which is true for the reader but catastrophic for the audit:

```css
/* Post-fix-up state — three spellings for the same color */
.button-primary { color: #ffffff; }     /* ServiceCard.astro — still raw hex */
.hero-title { color: var(--color-white); }  /* HeroLarge.astro — tokenized */
.nav-active { color: white; }           /* Header.astro — CSS keyword */
```

Any grep for `#ffffff` misses the `white` keywords; any grep for `white` has massive false positives. **The ambiguity defeats the audit.** The lesson: pick one spelling (`var(--color-white)`) and enforce it. "Mostly using tokens" is worse than "always using tokens" because the auditor loses confidence in every search result.

## Related

- `/gstack-design-review` — the cross-cutting audit that surfaced this on Nimzo (session `a7dba6ed`). On future projects, insert this (or an equivalent) at a known ratchet point.
- `/gstack-cso` — parallel pattern for security hardening: declared security posture vs. actual enforcement (e.g., security headers declared in DESIGN.md but no `vercel.json` deploys them).
- Related drift found in the same audit, **not** fixed in this session (adjacent risks of the same "declared abstraction, per-component override" pattern):
  - **Heading scale drift** — 7 different H1/H2 size declarations across components, 38 inline `style=` attributes redeclaring heading sizes in service/tech pages
  - **Breakpoint sprawl** — 5 breakpoints in the wild (375/480/640/768/900/1024) vs 4 declared (`--breakpoint-sm` never used)
  - **Button component duplication** — `HeroLarge.astro` reimplements `.btn/.btn-primary/.btn-secondary` CSS instead of using the shared `Button.astro`
