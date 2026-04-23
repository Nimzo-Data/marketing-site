# Tech page copy v2 — final plan based on your feedback

## Summary of your decisions
- **GCP**: drop the Azure dig ("BigQuery is still the better warehouse"). How-we-use-it: replace Cloud Composer with Cloud Run Functions + Scheduler.
- **BigQuery**: drop scheduled queries bullet (we use dbt/Dataform). Drop BigLake Iceberg bullet (too technical). Rewrite the "Our default: BigQuery" footer since we only do BigQuery.
- **Dataform**: keep Gemini assistance bullet as optional — you mostly use coding agents now, but it signals AI awareness.
- **dbt**: skip the free Developer tier mention (3k models/month too low to be useful). Drop the "Dataform is free, native, simpler" footer on dbt's own Dataform-comparison block.
- **Airbyte**: keep open-source as a talking point but lead with Airbyte Cloud (easier for clients). Rework how-we-use-it to mention Connector Builder (no-code for custom APIs) + SDK (for truly complex sources).
- **Fivetran**: mention dbt merger as a concern (vendor lock-in risk).
- **Dagster**: OK as planned.
- **Looker**: drop Looker Studio from comparisons (design-heavy, not self-service). Budget line = "5k+/month".
- **Lightdash**: flag that most AI is cloud-paid (not OSS). Mention dashboards-as-code (new) and metric-slice UI. Pricing: still cheaper than Looker.
- **Steep**: own semantic layer, but also plugs into dbt's semantic layer.
- **Metabase**: add. Middle-tier BI between Steep and Lightdash.

## Question answers confirmed
1. BigQuery pricing: skip
2. Lightdash: "way cheaper than Looker" framing (no $ amount)
3. Fivetran + dbt merger: mention as lock-in concern
4. Looker: "5k+/month"
5. Fivetran per-connection MAR: skip specific mention; just say "Airbyte is cheaper overall"
6. AI features: woven into existing sections (no dedicated subsection)
7. Agentic/AI-native language: use my own terms
8. New tools: maybe MCP mentions, rest skip

---

## Metabase — research findings

Positioning: "Open source analytics that answers back." Self-service BI with AI-native features. Good for both technical and non-technical users.

**Pricing (verified April 2026):**
- **Open Source (self-host)**: free, unlimited users
- **Starter** (Cloud): $100 base + $6/user/month (5 users included)
- **Pro** (Cloud or self-host): $575 base + $12/user/month (10 users included)
- **Enterprise**: custom, starts ~$20k/year

**Metabot AI (v60, April 2026):**
- Natural language → chart
- Natural language → SQL
- Chart analysis / X-ray, SQL error fixing, docs search
- **Now open-sourced** (OSS Metabot shipped with MCP server in v60)
- Self-host supports BYO LLM key — **Anthropic only** currently
- Cloud: request-based add-on or BYOK

**Semantic layer:**
- **Data Studio** (v59, March 2026): analyst workbench for building semantic layers in SQL or Python with AI code-gen
- **Metrics**: reusable aggregation definitions (real metric layer, not just saved questions)
- **Models**: curated datasets with metadata
- dbt Semantic Layer native integration: **NOT AVAILABLE** (community `dbt-metabase` package propagates metadata)

**BigQuery**: first-class data source. Service account setup, supports GoogleSQL, some quirks around permission impersonation (not available for BigQuery specifically).

**Embedding**: React SDK, Guest Embeds (no-auth viewer), full white-label on Pro.

**vs other BI tools:**
- vs Looker: cheaper, OSS, less enterprise governance polish
- vs Lightdash: broader (dashboards + embedding + SDK); less dbt-native; newer metrics-first story (Data Studio)
- vs Steep: broader BI stack; more expensive per-seat at scale; less metrics-first UX

---

## `src/data/technologies.ts` — new taglines + Metabase addition

```ts
export const technologies: Technology[] = [
  { name: 'Google Cloud Platform', slug: 'google-cloud-platform', category: 'cloud',
    tagline: 'Our foundation. AI-native data cloud with European sovereignty options.',
    logoPath: '/logos/googlecloud.svg' },

  { name: 'BigQuery', slug: 'bigquery', category: 'warehouse',
    tagline: 'Serverless data warehouse. Gemini-native. EU multi-region ready.',
    logoPath: '/logos/bigquery.svg' },

  { name: 'Dataform', slug: 'dataform', category: 'transformation',
    tagline: 'SQL transformations, GCP-native. Our first choice on fresh projects.',
    logoPath: '/logos/dataform.svg' },

  { name: 'dbt', slug: 'dbt', category: 'transformation',
    tagline: 'When clients bring dbt, we work within it.',
    logoPath: '/logos/dbt.svg' },

  { name: 'Airbyte', slug: 'airbyte', category: 'etl',
    tagline: 'Cloud or open-source ELT. 600+ connectors, plus a builder for custom APIs.',
    logoPath: '/logos/airbyte.svg' },

  { name: 'Fivetran', slug: 'fivetran', category: 'etl',
    tagline: 'Managed ELT when reliability matters more than cost.',
    logoPath: '/logos/fivetran.svg' },

  { name: 'Looker', slug: 'looker', category: 'bi',
    tagline: 'Enterprise BI with LookML governance and Gemini-powered conversational analytics.',
    logoPath: '/logos/looker.svg' },

  { name: 'Lightdash', slug: 'lightdash', category: 'bi',
    tagline: 'BI with metrics in code. AI-native. Flat-rate instead of per-seat.',
    logoPath: '/logos/lightdash.svg' },

  // NEW — Metabase
  { name: 'Metabase', slug: 'metabase', category: 'bi',
    tagline: 'Open-source BI for everyone. Dashboards, metrics, and an AI that answers back.',
    logoPath: '/logos/metabase.svg' },

  { name: 'Steep', slug: 'steep', category: 'bi',
    tagline: 'Metric-based BI for non-technical teams. Ask questions, get answers.',
    logoPath: '/logos/steep.svg' },

  { name: 'Dagster', slug: 'dagster', category: 'orchestration',
    tagline: 'Orchestration when the pipeline gets complex.',
    logoPath: '/logos/dagster.svg' },
];
```

BI order in the directory: **Looker → Lightdash → Metabase → Steep** (as you specified).

---

## Metabase tech page — proposed content

**Title**: `Metabase | Nimzo Data`
**Description**: `Metabase implementation on BigQuery — dashboards, semantic layer, AI-assisted self-service, and open-source or cloud deployment.`
**toolCategory**: `Business Intelligence`
**heroPositioning**:
> Metabase is self-service BI for teams that want broad access, a real AI assistant, and the flexibility to self-host — without enterprise-tier spend.

**What It Is**:
> Metabase is open-source BI with a full dashboarding, metric, and question-building surface. Business users explore data through a visual interface; analysts build reusable Models and Metrics that enforce consistent definitions; power users drop into SQL when they need it. Metabot — Metabase's AI assistant, now open-source as of v60 — generates charts, writes SQL, analyzes results, and answers questions in natural language.

**Why We Chose It**:
> Metabase is the pragmatic middle of the BI market. It's cheaper than Looker, broader than Steep, and more flexible than Lightdash — you can run it fully self-hosted, use the cloud tier, or start free on the Community Edition. The semantic layer (Models + Metrics + Data Studio) matured fast in 2025–2026, and Metabot's AI features — including self-hosted AI with your own Anthropic key — make it credible as an AI-native BI tool without the cloud-only lock-in of Looker.

**How We Use It** (items):
- Stand up Metabase — either Metabase Cloud for managed, or self-hosted on Cloud Run / GKE for full control
- Define Models and Metrics so business users get consistent definitions across dashboards and AI queries
- Set up Metabot with the client's own LLM provider (Anthropic) for natural-language exploration
- Build operational and executive dashboards, with subscription-based email/Slack delivery
- Configure row-level and column-level permissions for multi-team access
- Integrate dbt metadata into Metabase via the community `dbt-metabase` package when the client is on dbt

**When Metabase is the right BI tool — and when it isn't**

| Choose Metabase when | Choose Looker instead when | Choose Lightdash instead when | Choose Steep instead when |
|---|---|---|---|
| You want self-service BI with a real AI assistant, at a reasonable price | You need enterprise LookML governance and embedded analytics at scale | You're already on dbt and want metrics in code | The team is entirely non-technical and you want the simplest metric-first UX |
| You want the option to self-host (Community Edition free, Pro self-host paid) | Budget is 5k+/month and you're scaling across 50+ users | You need flat-rate pricing that doesn't scale with headcount | Budget is under €500/month for a small team |
| You want Metabot AI features with BYO Anthropic key, including in self-hosted | | | |
| Your team mixes technical and non-technical users | | | |

Note: Metabase's AI features are strongest in Cloud — but v60 open-sourced Metabot, which is unusual in the BI market.

---

## Places Metabase gets mentioned (beyond its own page)

### Implementation page, "Three layers" — BI layer
Current: `We connect the BI tool that fits your team — Looker, Lightdash, or Steep`
Updated: `We connect the BI tool that fits your team — Looker, Lightdash, Metabase, or Steep`

### Optimization page, "Three layers" — BI layer
Current: `Migrate off BI tools your team has given up on. Rebuild trust in the numbers...`
No BI tool list — keep as-is.

### Expert Services — "BI & Analytics Development" card
Current bullets:
- Looker LookML modeling
- Lightdash or Steep setup, semantic layer design
- Initial dashboards and user training

Updated bullets:
- Looker LookML modeling for enterprise governance
- Lightdash / Metabase / Steep setup — semantic layer, dashboards, AI assistant config
- Initial dashboards and user training

### Homepage "The tools we build with" (LogoGrid)
Drop GCP, keep 10 tools total: BigQuery, Dataform, dbt, Airbyte, Fivetran, Looker, Lightdash, Metabase, Steep, Dagster.

GCP stays as a dedicated tech page but not in the grid.

### Other service pages' LogoGrid
Same treatment: drop GCP from the displayed grid, add Metabase. 10 tools visible.

### Cross-references on other BI tool pages
Looker page — add a "Choose Metabase instead when" block:
- Budget is below Looker tier
- You want self-host optionality
- You want a real AI assistant without Looker's commitment

Lightdash page — add "Choose Metabase instead when":
- You need broader BI (dashboards + embedding + SDK) beyond metric-first
- Team isn't ready to commit to dbt-native workflows
- You want self-host optionality with AI features included

Steep page — add "Choose Metabase instead when":
- You need more than metric exploration (dashboards, embedding, SQL access)
- Team mixes technical + non-technical users

---

## Full per-page copy changes (ordered by page)

### GCP
- **What It Is**: add Vertex AI, Gemini to the integrated-stack list
- **Why We Chose It**: add European sovereignty paragraph (three tiers, S3NS mention)
- **How We Use It**: **replace Cloud Composer bullet with Cloud Run Functions + Cloud Scheduler**
- **Choose GCP when**: add AI workloads bullet
- **Footer**: **remove** "Azure's data services work, but BigQuery is still the better warehouse"

### BigQuery
- **What It Is**: add Gemini integration paragraph
- **How We Use It**: **remove** the scheduled queries bullet. Add Gemini SQL functions bullet.
- **Choose BigQuery when**: add in-warehouse AI bullet
- **Footer**: **rewrite** to "BigQuery is the only warehouse we build on. Our reasoning: depth over breadth, the reasoning behind our Why only Google Cloud? stance on the homepage."

### Dataform
- **What It Is**: mention Gemini assistance
- **How We Use It**: leave Gemini bullet out (you use coding agents instead)

### dbt
- **What It Is**: mention Fusion engine, Copilot GA, Semantic Layer
- **Why We Chose It**: mention Fivetran + dbt Labs merger as competitive context / concern
- **Choose dbt Cloud when**: **do not add** free Developer tier bullet
- **Choose Dataform instead when**: **remove** "Dataform is free, native, simpler to run" note

### Airbyte
- **What It Is**: 400+ → **600+ connectors**. Lead with Cloud as default, OSS as option.
- **How We Use It**: rework — mention Connector Builder (no-code) for custom APIs, SDK for complex sources, Airbyte Cloud as default deployment, OSS as option for clients who need it

### Fivetran
- **What It Is**: 500+ → **700+ connectors**
- **Why We Chose It**: mention dbt merger as a concern (potential vendor lock-in, harder to pair with Airbyte + Dataform stack)
- **Choose Airbyte instead when** section (inside Fivetran's WhenToChoose): add a bullet about the merger: "You prefer to avoid the Fivetran + dbt stack for vendor-independence reasons"

### Dagster
- **What It Is**: mention Dagster Components + MCP
- **How We Use It**: add Components + dg CLI bullet

### Looker
- **Hero**: rewrite as "Agentic BI with LookML governance and Gemini-powered conversational analytics"
- **What It Is**: add AI/Gemini paragraph
- **How We Use It**: add Conversational Analytics + Dashboard Agents bullets
- **Choose Looker when**: change budget bullet → "Budget: 5k+/month for teams of 20+ users"
- **Do not mention Looker Studio** (per your note)

### Lightdash
- **Hero**: "BI with metrics in code — dbt or Lightdash YAML. AI-native. Way cheaper than Looker at scale."
- **What It Is**: update to mention AI Analyst (cloud paid), dashboards-as-code, BYO LLM
- **Why We Chose It**: flat-rate pricing framing, cheaper than Looker, flag that most AI is cloud-paid not OSS
- **How We Use It**: add AI Analyst configuration, dashboards-as-code for coding-agent workflows
- **Choose Lightdash when**: update bullets to flat-rate pricing, AI Analyst, dashboards-as-code

### Steep
- **Hero**: mention Steep AI + metric-based
- **What It Is**: already updated to metric-based. Add: "Steep's semantic layer is native, but can also sit on top of dbt's Semantic Layer."
- **How We Use It**: add dbt Semantic Layer integration option

### Metabase (new page)
Full content above.

### Technologies directory
- Add Metabase card in BI row between Lightdash and Steep
- Update taglines per new `technologies.ts`

### Homepage LogoGrid + service page LogoGrids
- Drop GCP display
- Add Metabase
- Keep 10 total

### Implementation page "Three layers" BI line
- Add Metabase

### Expert Services "BI & Analytics Development"
- Update bullets to include Metabase

### BI tool cross-references
- Add "Choose Metabase instead when" block to Looker, Lightdash, Steep pages

---

## SVG check

- [public/logos/metabase.svg](public/logos/metabase.svg) already exists per my earlier audit (from `public/images/tech/metabase.svg` untracked file)
- **Confirm Metabase logo is in `/logos/`** before I ship. If it's in `/images/tech/`, I'll move it.

---

## Ready to apply?

If this plan looks good, I'll:
1. Update `src/data/technologies.ts` (taglines + add Metabase)
2. Create `src/pages/technologies/metabase.astro` (full content above)
3. Update 10 existing tech pages (per per-page list)
4. Update Implementation + Expert Services for BI tool mentions
5. Verify LogoGrid drops GCP and shows Metabase
6. Tech directory: confirms Metabase appears in the right order

Flag any lines in this doc you want me to tweak before I go.
