# Project Instructions

## gstack

Use /gstack-browse for all web browsing. Never use mcp__claude-in-chrome__* tools.

Available gstack skills: /gstack-office-hours, /gstack-plan-ceo-review, /gstack-plan-eng-review, /gstack-plan-design-review, /gstack-design-consultation, /gstack-design-shotgun, /gstack-design-html, /gstack-review, /gstack-ship, /gstack-land-and-deploy, /gstack-canary, /gstack-benchmark, /gstack-browse, /gstack-qa, /gstack-qa-only, /gstack-design-review, /gstack-setup-browser-cookies, /gstack-setup-deploy, /gstack-retro, /gstack-investigate, /gstack-document-release, /gstack-codex, /gstack-cso, /gstack-autoplan, /gstack-careful, /gstack-freeze, /gstack-guard, /gstack-unfreeze, /gstack-upgrade, /gstack-learn.

If gstack skills aren't working, run `cd ~/.claude/skills/gstack && ./setup`.

## Framework Routing

This project uses three frameworks. Each owns specific phases. Never use a framework outside its designated phase.

- **gstack** → Decisions, design, QA, security
- **Compound Engineering (CE)** → Brainstorming, planning, knowledge compounding
- **Superpowers** → Execution (TDD-first, subagent-driven, autonomous)

## Workflow Sequence

DECIDE (gstack) → PLAN (CE) → EXECUTE (Superpowers) → QA (gstack) → COMPOUND (CE)

### Phase 1 — DECIDE (gstack) — Model: Opus
/gstack-office-hours → /gstack-plan-ceo-review → /gstack-plan-eng-review
For init builds, also run: /gstack-design-consultation

### Phase 2 — PLAN (CE) — Model: Opus
/ce:brainstorm → /ce:plan

### Phase 3 — EXECUTE (Superpowers) — Model: Sonnet
Switch to Sonnet: /model sonnet
Tell Claude to execute the plan. Superpowers auto-activates.

### Phase 4 — QA (gstack) — Model: Sonnet for /gstack-qa, Opus for /gstack-design-review and /gstack-cso
/gstack-qa → /gstack-design-review → /gstack-cso

### Phase 5 — COMPOUND (CE) — Model: Sonnet
/ce:compound — NEVER skip this step.

## Bug fixing
For non-obvious bugs, use /gstack-investigate instead of jumping to a fix. It enforces "no fixes without investigation."

## Rules
- Only Superpowers auto-activates. Invoke gstack and CE commands manually at the appropriate phase.
- Use Sonnet for execution (Phase 3). Opus for thinking (Phases 1–2) and review (Phase 4b).
- Do not let gstack handle execution. Do not let Superpowers handle product decisions. Do not let CE handle QA.
- Use CE's /ce:compound for knowledge persistence, not /gstack-learn (they overlap — avoid conflicts).
- Start fresh sessions when switching projects. Use /compact when sessions get long.
