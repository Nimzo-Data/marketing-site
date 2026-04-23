# Tech page copy review — research findings + proposed updates

Research conducted April 2026. All 10 tech tools audited against current official sources. Below is a per-tool comparison of what's on your pages now vs. what's actually current, and proposed copy updates.

Status legend:
- ✅ Still accurate, no change needed
- ⚠️ Outdated or partially wrong
- 🆕 New feature worth adding
- ❓ Need your confirmation

---

## Executive summary — biggest findings

1. **BI tool AI features are now a major differentiator.** Looker, Lightdash, and Steep all have GA AI features. Our pages don't mention them at all. This is the single biggest gap.
2. **Pricing is out of date on multiple pages.** Specifically:
   - **Lightdash**: our page says "€500–€2,000/month" — actual is **$3,000/month flat for Cloud Pro (unlimited users)**. Big difference.
   - **dbt Cloud**: our page says "$100/developer/month" — actual is now **Developer tier is FREE**, Starter is $100/user/month (5 seats minimum). Also dbt has restructured entirely (Developer / Starter / Enterprise / Enterprise+).
   - **Looker**: our page says "€3,000–€6,000+/month for Looker Core" — Google no longer publishes public pricing; all sales-quoted now.
3. **Fivetran + dbt Labs merged in October 2025** (~$600M combined ARR). Worth mentioning — changes the competitive dynamic across multiple pages.
4. **Connector counts are off**: Airbyte says 400+ (actual 600+), Fivetran says 500+ (actual 700+).
5. **Dagster pricing updated May 2026**: Solo $10/mo, Starter $100/mo (up from previous).
6. **Gemini integration** across GCP, BigQuery, Dataform, Looker is GA and worth surfacing on those pages.

---

## 1. Google Cloud Platform

### Current state (verified)
- Positioning shifted to "**AI-native data cloud**" / "agentic enterprise" / "Google Agentic Data Cloud"
- EU sovereignty: three tiers now available
  - Data residency (region selection)
  - Assured Workloads for EU (EU-only storage + processing + support)
  - Dedicated/Trusted Cloud partnerships: **S3NS (Thales + Google, France, SecNumCloud-aligned)** and T-Systems (Germany)
- Gemini integrated across BigQuery, Looker, Vertex AI

### Proposed copy updates
**What It Is** — keep largely, add AI dimension:
> Google Cloud Platform is Google's suite of cloud computing services. For data work, it offers an integrated stack — from storage (Cloud Storage, BigQuery) to transformation (Dataform, Dataproc) to visualization (Looker) to AI (Vertex AI, Gemini) — all designed to work together without custom glue code.

**Why We Chose It** — add the sovereignty angle:
> GCP's analytics stack is the most cohesive in the market. BigQuery alone changes how you think about data — serverless, fast, and economical at the right scale. For European clients specifically, GCP now offers three levels of data sovereignty — standard residency, Assured Workloads for EU, and sovereign partnerships like S3NS (Thales + Google, SecNumCloud-aligned) — which matter when GDPR, regulated sectors, or procurement requirements enter the picture.

**Choose GCP when** — add a bullet:
> - AI workloads (Gemini, Vertex AI) are part of your data roadmap

---

## 2. BigQuery

### Current state (verified)
- On-demand: **$6.25 per TiB scanned**, first 1 TiB/month free
- Editions (capacity): Standard (~$0.04/slot-hour), Enterprise ($0.06 pay-as-you-go, $0.048 1yr commit, $0.036 3yr commit), Enterprise Plus (higher, sales-quoted)
- Storage: $0.02/GiB active, $0.01/GiB long-term (auto)
- **BI Engine** included in Enterprise / Enterprise Plus
- **Gemini in BigQuery (GA)**: Data Canvas, Gemini CLI, AI.GENERATE / AI.FORECAST / ML.PREDICT SQL functions
- **BigLake Iceberg tables + Iceberg REST Catalog** now GA — lakehouse story is real

### Proposed copy updates
**Hero positioning** — keep largely
> "BigQuery is where your data actually lives — we build the schemas, optimize the queries, and control the costs so it stays that way."

**What It Is** — add the AI dimension:
> BigQuery is Google's serverless, fully managed data warehouse. It can query terabytes in seconds without any infrastructure to manage. Its columnar storage format and distributed query engine make it fast for analytics workloads by default. Recent releases add first-class Gemini integration (SQL-native AI functions, Data Canvas, conversational analytics) and BigLake Iceberg tables for lakehouse architectures — but you still need to model your data well to get the most out of it.

**How We Use It** — add 2 items:
> - Implement Gemini in BigQuery features where they matter — Data Canvas for exploration, AI.GENERATE/AI.FORECAST SQL functions for in-warehouse AI
> - Use BigLake Iceberg tables for teams that need lakehouse architecture or cross-engine compatibility

**Choose BigQuery when** — add a bullet:
> - You want in-warehouse AI features without bolting on a separate ML platform (Gemini in BigQuery is GA)

---

## 3. Dataform

### Current state (verified)
- Still free on GCP (no paid tier)
- **Gemini assistance is live in Dataform** — generates SQLX, fixes SQL errors, reads metadata
- Git integration (GitHub, GitLab) via web UI

### Proposed copy updates
**What It Is** — add Gemini:
> Dataform is Google's managed SQL transformation tool, natively integrated into the GCP console. It lets you write modular SQL workflows (SQLX files), define dependencies between tables, run tests on your data, and deploy changes through a Git-based workflow — all without leaving BigQuery. Gemini assistance is built in for SQLX generation and error fixing.

**How We Use It** — add 1 item:
> - Use Gemini assistance inside Dataform to speed up SQLX authoring and error fixes — without sending row data outside the project

---

## 4. dbt ⚠️ MAJOR PRICING UPDATE

### Current state (verified)
- **dbt Core** (Apache 2.0): still free
- **Developer** tier: **FREE** single-seat, 3,000 models/month (new free tier!)
- **Starter**: **$100/user/month**, 5 seats, 15,000 models/month
- **Enterprise**: custom
- **Enterprise+**: custom, adds PrivateLink, Hybrid projects
- **dbt Fusion** (Rust engine): public beta since May 2025, still beta as of April 2026
- **dbt Copilot**: GA. BYOK Azure OpenAI GA.
- **dbt Mesh**: Enterprise-tier feature
- **dbt Semantic Layer (MetricFlow)**: GA
- 🚨 **Fivetran + dbt Labs merged October 2025**

### Proposed copy updates
**Hero positioning** — keep
**What It Is** — mostly keep, maybe add:
> dbt (data build tool) is the open-source standard for SQL-based data transformation. It compiles templated SQL into warehouse queries, manages dependencies, runs tests, and generates documentation automatically. Works with BigQuery, Snowflake, Redshift, and others. Recent releases add dbt Copilot (AI SQL assistance), the Fusion engine (Rust-based, much faster than Core), and a GA Semantic Layer.

**Why We Chose It** — add merger context or leave:
> dbt is the most widely adopted transformation tool in modern data engineering. When clients have existing dbt projects, multi-cloud requirements, or teams with established dbt expertise, we work within that ecosystem rather than pushing a migration. Following the Fivetran + dbt Labs merger (October 2025), dbt is also becoming the transformation layer of the broader Fivetran data platform.

**Choose dbt Cloud when** — update pricing bullet:
> - You want managed CI/CD, documentation hosting, Copilot, and the Metrics Layer without DIY
> - **dbt Cloud now has a free Developer tier (single seat)**; Starter is $100/user/month for 5 seats and up

**Choose dbt Core when** — keep
**Choose Dataform instead when** — keep

---

## 5. Airbyte ⚠️ CONNECTOR COUNT + PRICING

### Current state (verified)
- **600+ connectors** (not 400+)
- **Self-Managed / Core**: always free, open source
- **Cloud pricing — new "Data Workers" / credits model**:
  - Standard: volume-based, starts at $10/month
  - Plus: annual billing with bulk credit discounts
  - Pro: $49/month, 10,000 credits, $0.01/credit overage
  - Enterprise: custom
- **Connection AI Copilot** (Standard+): AI assists connector configuration
- **Agent Engine** (new product): managed Context Store for AI agents; Pro $49/mo, 10,000 tool calls
- **Python CDK** now `airbyte-python-cdk` package (standalone)

### Proposed copy updates
**What It Is** — update connector count:
> Airbyte is an open-source data integration platform with **600+ pre-built connectors**. It handles extraction from sources (APIs, databases, SaaS tools) and loading into destinations like BigQuery. You can run it self-hosted on GCP or use Airbyte Cloud for a managed experience.

**Why We Chose It** — update MAR framing (MAR is legacy now):
> Airbyte's open-source model means no vendor lock-in and no connector-based pricing tiers. For companies with many data sources, the cost difference versus Fivetran at scale is significant. The custom connector framework (Python CDK) also lets us build connectors for internal APIs or unusual sources when needed. Airbyte has also launched an Agent Engine product — a managed Context Store that feeds SaaS data to AI agents — worth watching if your roadmap includes AI agent workflows.

**How We Use It** — add:
> - Build connectors with the Python CDK or the no-code Connector Builder for sources Airbyte doesn't ship out of the box

**Choose Airbyte when** — rewrite bullet 1:
> - You have 8+ data sources and Fivetran's pricing would push annual spend significantly higher

(Dropped "per-MAR pricing" since Fivetran is now per-connection MAR and Airbyte is on credits — the framing is legacy.)

---

## 6. Fivetran ⚠️ CONNECTOR COUNT + MERGER + PRICING

### Current state (verified)
- **700+ connectors** (not 500+)
- Plans: **Free / Standard / Enterprise / Business Critical** (Starter and Private Deployment retired March 2025)
- **Free tier**: 500K MAR ingestion, 3,500 MAR activations, 5,000 model runs
- **MAR pricing**: $5 base per connection, tiered ($2.50/M for 0–5M MAR, $2.00/M for 5–20M, etc.). **Change as of 2026: MAR calculated per-connection, not per-account** (tends to increase bills with many connectors).
- **Hybrid Deployment GA**: agent in customer VPC, control plane stays with Fivetran
- 🚨 **Fivetran + dbt Labs merged October 2025**
- **AI-assisted pipeline creation** via Connector SDK (no branded "Copilot")

### Proposed copy updates
**What It Is** — update count + plans:
> Fivetran is a fully managed ELT platform with **700+ connectors**. It handles schema evolution automatically, retries failures, and maintains connector code as sources change their APIs. You pay per monthly active row (MAR) synced, with a Free tier (500K MAR) and Standard / Enterprise / Business Critical paid tiers. **Note: as of 2026, MAR is billed per-connection rather than per-account** — which changes the cost calculus for customers with many connectors.

**Why We Chose It** — add dbt merger context:
> Fivetran's managed reliability is its main selling point. For companies that want pipelines that simply work — without a data engineer babysitting connector updates — Fivetran is hard to beat. The connector quality for major SaaS tools (Salesforce, HubSpot, Stripe) is best-in-class. Following the Fivetran + dbt Labs merger (October 2025), Fivetran is also evolving into a broader ingestion-plus-transformation platform.

**How We Use It** — add:
> - Use Hybrid Deployment when data residency or network policies require the connector agent to run inside the client's VPC

**Choose Fivetran when** — tighten:
> - Your sources are mainstream SaaS (Salesforce, HubSpot, Stripe, Shopify) and you want zero-maintenance pipelines
> - You need audit-grade reliability with Hybrid Deployment in regulated environments

---

## 7. Dagster ⚠️ PRICING UPDATED MAY 2026

### Current state (verified)
- Dagster+ tiers (May 2026 update):
  - **Solo**: $10/mo + $0.040/credit
  - **Starter**: $100/mo + $0.035/credit, up to 3 users, 5 code locations
  - **Pro**: contact sales (unlimited code locations, BigQuery/Snowflake cost insights)
  - **Enterprise**: contact sales (SAML, audit logs, column-level lineage)
  - Serverless: $0.010/min. Hybrid: no serverless compute charge.
- **Dagster Components + `dg` CLI** — YAML-first, AI-agent-friendly authoring
- **MCP server** for Dagster (AI integration)
- **dagster-io/skills** repo — Claude Code / Codex / Cursor / Cline skills

### Proposed copy updates
**What It Is** — add Components:
> Dagster is a modern data orchestrator — the tool that sits on top of your pipelines and transformations to schedule them, handle dependencies, retry failures, and give you visibility into what ran, when, and why something broke. It competes with Airflow and Prefect, with a stronger focus on data quality, developer experience, and asset-based modeling. Recent releases add Dagster Components (YAML-first, AI-friendly authoring) and an MCP server for agent integration.

**How We Use It** — add:
> - Use Dagster Components and the `dg` CLI for YAML-driven pipeline definitions, friendly to both humans and AI coding agents

**Choose Dagster when** — keep; note pricing update would go in the footer if we want to quote it.

---

## 8. Looker ⚠️ PRICING + HUGE AI UPDATE

### Current state (verified)
- Three products: **Looker** (enterprise "Agentic BI"), **Looker Studio** (free), **Looker Core** (Google Cloud integrated version)
- Three editions: **Standard** (<50 users), **Enterprise**, **Embed**
- Each includes 1 instance + 10 Standard Users + 2 Developer Users baseline
- **All pricing sales-quoted** — Google no longer publishes per-seat numbers
- Named Leader in 2025 Gartner Magic Quadrant for ABI
- 🚨 **AI features (GA or announced):**
  - **Conversational Analytics** — Gemini-powered natural-language Q&A over governed LookML
  - **Dashboard Agents** — AI summaries/deep-dives embedded in dashboards
  - **Gemini assistants** — build visualizations from natural language, write LookML expressions, analyze ad-hoc CSVs
  - **Conversational Analytics APIs + SDK**
  - Token-based pricing kicks in Oct 1, 2026 ($3/1M input, $20/1M output); unlimited fair-use until then

### Proposed copy updates
**Hero positioning** — rewrite to reflect Agentic BI:
> Looker is Google's Agentic BI platform — LookML's governed semantic layer plus Gemini-powered conversational analytics, dashboard agents, and SDK-accessible AI. We implement it for companies that need enterprise governance and are ready to invest in a serious BI stack.

**What It Is** — add AI:
> Looker is Google's enterprise BI platform, built around LookML — a modeling language that defines a governed semantic layer sitting between your data warehouse and your end users. Every metric, dimension, and relationship is defined once in LookML and reused consistently across all reports and dashboards. Gemini is now integrated across the platform: Conversational Analytics for natural-language Q&A over LookML, Dashboard Agents for AI-generated summaries and deep-dives, and LookML-aware assistants for writing expressions and building visualizations.

**Why We Chose It** — unchanged

**How We Use It** — add 2 items:
> - Configure Conversational Analytics and Dashboard Agents so business users can ask governed questions in natural language
> - Set up Conversational Analytics APIs / SDK for embedded AI analytics in client-facing apps

**Choose Looker when** — update budget line:
> - Budget: Looker is sales-quoted (no public per-seat pricing). Expect enterprise-tier spend — €4k+/month for teams of 20+. Confirm during scoping.

---

## 9. Lightdash ⚠️ PRICING (big change) + AI features

### Current state (verified)
- Positioning: **"the only open source AI-native BI platform"** / "BI-as-code"
- **Lightdash YAML** (standalone semantic layer without dbt) — confirmed, real feature
- **Pricing**:
  - **Cloud Pro**: $3,000/month flat, **unlimited users** (was $500–$2,000/month per our page — outdated)
  - **Enterprise**: custom
  - **Core**: free, open-source, self-hosted
- 🚨 **AI Analyst** (launched Oct 2024, Accel-backed): natural-language Q&A, operates largely on metadata, BYO LLM (OpenAI, Anthropic, BYOK)
- AI agents that assemble dashboards
- Slack-integrated AI assistant

### Proposed copy updates
**Hero positioning** — surface AI:
> Lightdash is open-source AI-native BI with metrics in code — in your dbt project or in Lightdash's own YAML. AI Analyst answers natural-language questions over the semantic layer; governance and permissions are built in, and the LLM is yours to choose.

**What It Is** — restructure:
> Lightdash is an open-source BI tool where metrics and dimensions live in YAML. You can define them in your dbt project (Lightdash's original design) or in Lightdash's own native semantic layer (added for teams without dbt). AI Analyst sits on top — natural-language queries over the governed semantic layer, returning charts or answers. Lightdash operates largely on metadata (not raw warehouse data) and lets you bring your own LLM provider.

**Why We Chose It** — update pricing context:
> For teams that want version-controlled metrics plus open-source AI without Looker-tier spend, Lightdash is the right middle ground. Cloud Pro is flat-rate ($3,000/month, unlimited users) rather than per-seat — which flips the economics for growing teams. Core is free and self-hostable for teams that want full control.

**How We Use It** — add:
> - Configure Lightdash AI Analyst with the client's LLM provider (OpenAI, Anthropic, or BYOK) — metadata-only by default

**Choose Lightdash when** — update pricing bullet + add AI:
> - You want metrics defined in code and AI-native BI on top, without per-seat pricing
> - Team can justify $3,000/month flat (works out cheaper than Looker above 10–15 users)
> - You want to choose your own LLM provider for governed AI analytics
> - You need open-source optionality (Lightdash Core is self-hostable)

Drop the "team is 5–20 users" and "budget €500–€2,000" bullets — both are wrong now.

---

## 10. Steep ⚠️ PRICING + AI

### Current state (verified)
- **Metrics-first positioning** confirmed
- Pricing (per-seat):
  - **Free**: up to 3 seats on Pro, 1,000 AI credits
  - **Pro**: $15/seat/month — unlimited reports, up to 80 metrics, native semantic layer, AI
  - **Business**: $25/seat/month — unlimited metrics, private metrics/teams, SSO, higher AI limits
  - **Enterprise**: custom
- **Steep AI** — natural-language questions over governed metrics, AI credits metered
- dbt + Cube integration confirmed
- ❓ BigQuery support not explicit in fetched marketing content (but Steep did support it historically)

### Proposed copy updates
**Hero positioning** — mention AI:
> Steep is metric-based BI for non-technical teams — metrics defined once, explored visually, asked in natural language with Steep AI. No SQL required.

**What It Is** — add AI:
> Steep is a metric-based BI tool. Metrics are defined once — typically by a data lead or analyst — and business users explore them through a visual interface or Steep AI, which answers natural-language questions directly against the governed metrics. The metric-first model means every chart and every AI answer shares the same definition of "revenue" or "active user", no matter who built it.

**How We Use It** — add:
> - Configure Steep AI credits and train business users on asking natural-language questions over governed metrics

**Choose Steep when** — update budget line:
> - Pricing: Pro $15/seat/month, Business $25/seat/month. For a team of 20, that's ~€285–€475/month — well under Looker / Lightdash for small teams.

---

## ❓ Items I need your confirmation on

1. **BigQuery pricing** — do you want to quote specific numbers on the tech page ($6.25/TiB, $0.02/GiB) or keep it descriptive? Adding exact pricing makes it concrete but requires updating when Google changes prices.
2. **Lightdash pricing** — the $3,000/month flat for unlimited users is a bigger change. Should we quote the flat fee on the page or keep the "at scale it's cheaper than Looker" framing?
3. **dbt tier names** — should we call out the Fivetran merger? It changes the competitive narrative (Fivetran + dbt under one roof vs. Airbyte + Dataform alternative).
4. **Looker pricing** — since Google stopped publishing public pricing, should we say "sales-quoted" or give a vague range ("enterprise-tier spend, expect €4k+/month for 20 users") based on historical data?
5. **Fivetran per-connection MAR change** — worth mentioning on the page? It's a recent billing change that affects existing customers more than prospects.
6. **AI features on BI pages** — do you want a dedicated "AI features" subsection on each BI page, or weave AI into the existing sections?
7. **"Agentic" / "AI-native" language** — Looker markets as "Agentic BI", Lightdash as "AI-native". Comfortable using that language, or tone it down?
8. **New tools to add?** — Research flagged that Fivetran's Hybrid Deployment, Airbyte's Agent Engine, Dagster Components + MCP are all net-new since your pages were written. Include or skip?

---

## Unverified claims to double-check before publishing

- BigQuery Enterprise Plus exact slot-hour rate — not cleanly in sources, verify at cloud.google.com/bigquery/pricing
- Fivetran "Capacity" pricing as a distinct SKU — could not verify; annual discounts only
- "Fivetran Copilot" branded product — AI assistance exists, no distinct SKU name
- "Dagster Copilot" branded product — strategy is third-party copilot integration via MCP
- Steep BigQuery support — known historically; not explicitly listed in current marketing pages
- Airbyte MAR pricing fully retired vs. legacy contracts — current public pricing is Data Workers / credits

---

## Source links

All facts above are drawn from the official product pages and docs of each tool, accessed April 2026. See the research agent reports for URL-level citations.
