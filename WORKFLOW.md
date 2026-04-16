# Development Workflow — Full Reference

**This document is for YOU (the human). Claude Code does NOT auto-load this file — it's not for the LLM.** For the machine-readable routing rules that Claude reads, see `CLAUDE.md`.

---

## Framework Responsibilities

| Framework | Owns | Strongest at |
|-----------|------|-------------|
| **gstack** | Decisions, design, QA, security | Multi-perspective judgment, visual QA with real browser, design system generation |
| **Compound Engineering (CE)** | Brainstorming, planning, knowledge compounding | Research-driven planning that scans project history, persistent knowledge across sessions |
| **Superpowers** | Execution | TDD-first implementation, subagent dispatching, autonomous 30min–2hr coding sessions |

---

## The Workflow

```
DECIDE (gstack) → PLAN (CE) → EXECUTE (Superpowers) → QA (gstack) → COMPOUND (CE)
```

### Phase 1 — DECIDE (gstack)

**Model: Opus** | Interactive | 5–30 min

| Command | What it does | When to run |
|---------|-------------|-------------|
| `/gstack-office-hours` | Six forcing questions that challenge your framing | Always, even for small features |
| `/gstack-plan-ceo-review` | Product gate — is this worth building? 4 scope modes | Init builds and significant features |
| `/gstack-plan-eng-review` | Architecture gate — data flow, edge cases, test plan | Init builds, features touching data models/APIs/auth |
| `/gstack-plan-design-review` | Report-only design audit with letter grades and AI slop detection | Overlap: /gstack-design-review does the same + fixes. Skip this. |
| `/gstack-design-consultation` | Builds design system (colors, typography, components) → DESIGN.md. Generates interactive HTML preview pages with realistic mockups. | Once per project (init build only) |
| `/gstack-design-shotgun` | Generates 3–6 AI mockup variants for a specific section, opens comparison board in browser. Needs OpenAI API key. | Optional, for exploring multiple visual directions for a specific section (like hero) |
| `/gstack-design-html` | Converts approved mockups to production HTML via Pretext | Only after `/gstack-design-shotgun` if you used it |
| `/gstack-autoplan` | Runs CEO → design → eng review automatically in one command | Overlap: replaces the three separate commands. Use if you want speed over control. |

### Phase 2 — PLAN (CE)

**Model: Opus** | Interactive → autonomous | 10–15 min

| Command | What it does | When to run |
|---------|-------------|-------------|
| `/ce:brainstorm` | Explores requirements, scans project history and docs/solutions/ | Always |
| `/ce:plan` | Produces detailed implementation plan from brainstorm + codebase research | Always |

CE is used instead of Superpowers for planning because its research agents scan your commit logs and past learnings from `/ce:compound`.

### Phase 3 — EXECUTE (Superpowers)

**Model: Sonnet** (switch with `/model sonnet` before approving plan) | Autonomous | 30 min–2 hrs

Superpowers takes the CE plan and:
1. Creates a git worktree (isolated feature branch)
2. Breaks plan into 2–5 min micro-tasks
3. Dispatches a fresh subagent per task (no context drift)
4. Enforces TDD on every task (red-green-refactor)
5. Two-stage review per task (spec compliance, then code quality)

**Do not interrupt unless something is clearly wrong.**

### Phase 4 — QA (gstack)

**Model: Sonnet for /gstack-qa, Opus for /gstack-design-review and /gstack-cso**

| Command | What it does | When to run |
|---------|-------------|-------------|
| `/gstack-qa` | Real Chromium browser, real clicks, real screenshots | Every feature |
| `/gstack-design-review` | 80-item visual audit + AI Slop Score | Every feature touching UI |
| `/gstack-cso` | Security audit (OWASP Top 10 + STRIDE) | Features touching auth, payments, user data, APIs, scraping |

### Phase 5 — COMPOUND (CE)

**Model: Sonnet** | Autonomous | 1–2 min

| Command | What it does | When to run |
|---------|-------------|-------------|
| `/ce:compound` | Extracts lessons → writes to docs/solutions/ | **ALWAYS. NEVER SKIP.** |

### How compound knowledge flows

`/ce:compound` writes markdown files to `docs/solutions/` inside your project.

**Who reads those files:**
- **CE's `/ce:plan`** — automatically scans `docs/solutions/` when planning the next feature. This is the main payoff: feature N+1's plan knows what broke in feature N.
- **Claude Code generally** — can read them if it looks (they're just markdown in your repo), but nothing else auto-loads them.

**Who does NOT read them:**
- **gstack** — has its own learning system (`/gstack-learn` → `~/.gstack/projects/`). Don't mix the two.
- **Superpowers** — benefits indirectly because CE hands it a smarter plan. No direct integration.

**Practical implication:** The knowledge flow is `/ce:compound` → `docs/solutions/` → next session's `/ce:plan` → Superpowers executes a smarter plan. No explicit handoff step is needed. Just run `/ce:compound` at the end of every session.

If gstack's QA phase needs to know about past issues (like a flaky integration test), mention it in your prompt — gstack won't auto-discover the compound files.

---

## Design flow nuances (OpenAI API)

`/gstack-design-consultation` is the main design command. It:
- Has a conversation about your product, users, aesthetic direction
- Researches the landscape (screenshots competitor sites)
- Proposes design system: fonts, colors, spacing, motion
- **Generates interactive HTML preview pages with realistic mockups rendered in your design system**
- Writes DESIGN.md to your repo

It does **not** require an OpenAI API key — the preview pages are HTML/CSS generated from your design system.

`/gstack-design-shotgun` is different. It generates actual **AI image mockups** (4–6 variants) using GPT Image. That requires an OpenAI API key because image generation is a paid OpenAI feature. Each mockup generation costs ~$0.02–$0.20.

**Bottom line:** You can build the entire design system with `/gstack-design-consultation` and no API key. Use `/gstack-design-shotgun` later if you want to explore multiple visual directions for a specific section (like "show me 4 different hero section options").

To add OpenAI later:
1. Go to https://platform.openai.com/api-keys
2. Create account, deposit minimum $5
3. Generate API key
4. `export OPENAI_API_KEY="sk-..."` (add to `~/.bashrc` to persist)

---

## Codex second-opinion review

`/gstack-codex` gives you an independent code review from OpenAI's Codex CLI — a completely different model looking at the same diff. Three modes: review (pass/fail gate), adversarial challenge, or open consultation.

**When it's worth using:**
- Production code projects where correctness matters (data pipelines, security-critical code, payment flows)
- Complex bugs where you want a fresh perspective after Claude has reviewed
- Before merging to main on high-stakes PRs

**When it's overkill:**
- Static marketing sites (like the agency website)
- Prototypes and quick iterations
- Anything where Superpowers' built-in two-stage review is sufficient

**Setup (optional, skip for now):**
1. Install OpenAI Codex CLI separately (see OpenAI docs)
2. Set `OPENAI_API_KEY` environment variable
3. Review costs: ~$1–$10 per review depending on code size and model chosen

Revisit for the political transparency tool, SEC filings scraper, or any project where code quality genuinely matters.

---

## Init Build vs. Feature Addition vs. Bug Fix

**Init build (nothing exists):**
- Full Phase 1 including /gstack-design-consultation (~20–30 min)
- Full Phases 2–5
- Phase 3 will be longer (~1–2 hrs for full scaffold)

**Feature addition:**
- Phase 1: /gstack-office-hours only + /gstack-plan-eng-review if architecturally significant (~5 min)
- Full Phases 2–5

**Bug fix:**
- Skip Phase 1
- Use `/gstack-investigate` for non-obvious bugs (enforces "no fixes without investigation")
- For simple bugs: /ce:brainstorm briefly → /ce:plan
- Superpowers executes fix (test reproducing bug first)
- /gstack-qa → /ce:compound

---

## Other gstack commands (not in the main flow)

These don't fit cleanly into the 5-phase flow. Some are worth using, some overlap with CE/Superpowers and should be skipped.

| Command | When to use | Overlap / notes |
|---------|-------------|-----------------|
| `/gstack-ship` | End of feature — syncs main, runs tests, pushes, opens PR | Replaces manual git commands. Use if you want automation. |
| `/gstack-investigate` | Non-obvious bugs, systematic root-cause debugging | Stricter than Superpowers' default debugging. **Use this instead** for hard bugs. |
| `/gstack-retro` | Weekly/Sunday review | No overlap. Useful for keeping track across projects. |
| `/gstack-learn` | Persists project learnings across sessions | **Overlap with /ce:compound. Skip this.** Use /ce:compound as the single source of truth for knowledge persistence. Mixing both causes confusion about which system owns the canonical learnings. |
| `/gstack-review` | Staff-engineer code review — finds bugs, auto-fixes obvious ones | Overlap with Superpowers' built-in two-stage review. Skip unless you want a fresh pass after execution. |
| `/gstack-land-and-deploy` | Merge PR + deploy + verify production | Requires `/gstack-setup-deploy` first. For later, once you're shipping features to prod. |
| `/gstack-canary` | Post-deploy monitoring loop, watches for errors/regressions | Requires deploy setup. For later. |
| `/gstack-benchmark` | Baseline page load times, Core Web Vitals | Useful for performance work. Not needed for init build. |
| `/gstack-document-release` | Updates project docs after shipping | Useful for keeping README fresh. Can skip until docs start drifting. |
| `/gstack-codex` | Second-opinion code review from OpenAI Codex | Requires OpenAI API key. See Codex section below. |
| `/gstack-careful` | Adds safety guardrails before destructive commands | Useful when working near prod code. |
| `/gstack-freeze` | Locks edits to one directory | Useful during debugging to prevent accidental changes outside scope. |
| `/gstack-guard` | Combines /gstack-careful + /gstack-freeze | Maximum safety for prod work. |
| `/gstack-unfreeze` | Removes the /gstack-freeze boundary | Companion to /gstack-freeze. |
| `/gstack-browse` | Real Chromium browser for any web browsing task | Called internally by /gstack-qa. Rarely need to invoke directly. |
| `/gstack-setup-browser-cookies` | Import cookies from real browser into headless session | Needed for testing authenticated pages in /gstack-qa. |
| `/gstack-setup-deploy` | One-time deploy configuration | Run once per project before /gstack-land-and-deploy. |
| `/gstack-qa-only` | Bug report without code changes | Report-only version of /gstack-qa. Use when you want to review issues before fixing. |
| `/gstack-upgrade` | Self-updater for gstack | Auto-runs if `auto_upgrade: true` is set. |
| `/gstack-open-gstack-browser` | Launches GStack Browser with sidebar | For advanced browser workflows. Rare. |
| `/gstack-pair-agent` | Coordinate multiple AI agents through shared browser | Advanced use case. Skip for now. |

---

## Model Strategy

**Opus for thinking, Sonnet for doing.**

| Phase | Model | Why | % of token budget |
|-------|-------|-----|-------------------|
| 1. Decide | Opus | Sharper product thinking, better architecture challenges | ~5–10% |
| 2. Plan | Opus | Better research synthesis, more thorough plans | ~10–15% |
| 3. Execute | Sonnet | Micro-tasks are explicit enough for Sonnet. Saves ~1.7x tokens | ~70–80% |
| 4a. QA | Sonnet | Browser testing doesn't need complex reasoning | ~3% |
| 4b. Review | Opus (if budget allows) | Catches subtle visual/security issues | ~3% |
| 5. Compound | Sonnet | Extraction/summarization, not complex reasoning | ~2% |

Switch with `/model sonnet` before Phase 3. Switch back with `/model opus` before Phase 4b if budget allows.

**Exceptions** — use Opus for execution when:
- Complex multi-file refactoring with interdependent tasks
- Architectural changes with system-wide implications
- Debugging with non-obvious root causes

---

## Anti-Patterns

- Do not let gstack handle execution (no Build skill — Claude reverts to default)
- Do not let Superpowers handle product decisions (weaker than gstack's decision layer)
- Do not let CE handle QA (no browser testing)
- Do not skip /ce:compound (without it, CE = vanilla Claude Code)
- Do not use both /ce:compound and /gstack-learn (they overlap — pick one system)
- Do not enable all three auto-activation simultaneously (conflicts)
- Do not use Opus for Phase 3 by default (burns budget for marginal gain)

---

## Token Tips

- Use /compact when sessions get long
- Start fresh sessions when switching projects
- Batch edits > multiple small follow-ups
- Enable "extra usage" pay-as-you-go in Claude settings as a safety net
