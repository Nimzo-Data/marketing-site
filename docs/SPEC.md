# Nimzo Data — Website Content Spec

---

## Part 1: Brand Voice & Tone

**Core attributes:** Direct, expert, trustworthy. We write like a senior engineer explaining their work to a technical manager — no jargon for jargon's sake, but we don't talk down either.

**Problem-first framing:** Every page leads with the problem the client is experiencing before we describe what we do. Prospects don't search for "GCP consulting" — they search for "BigQuery costs out of control" or "data pipelines breaking every week."

**"We" not "I":** Even though Antoine runs the agency solo, we use "we" throughout. It signals professionalism and invites clients to think of the engagement as a partnership.

**GCP-only positioning is a strength:** We don't apologize for specializing. Being cloud-agnostic sounds versatile but means being mediocre everywhere. Being GCP-only means we've seen every failure mode, know every product team, and have opinions formed by real production experience.

**What to avoid:**
- Buzzwords: "leverage," "synergies," "cutting-edge," "world-class," "thought leadership"
- Vague claims: "fast," "scalable," "robust" without specifics
- Passive voice and corporate hedging
- Exclamation points in body copy

**Tone by page:**
- Homepage: confident, welcoming, clear about who we serve
- Service pages: practical, detailed, transparent about pricing
- Technology pages: opinionated and technical — we have real views
- About: personal and honest — the chess metaphor is genuine, not a gimmick
- Contact: warm, low-pressure, specific about next steps

---

## Part 2: Navigation Copy

### Header Nav

**Logo:** Nimzo Data (links to /)

**Primary nav items:**
- Services (dropdown)
- Technology (dropdown)
- About
- Contact

**Services dropdown:**
- Data Analytics Platform Implementation
- Data Analytics Platform Optimization
- Expert Implementation Services
- Ongoing Support & Retainers

**Technology dropdown — "Tools we use":**
- Google Cloud Platform
- BigQuery
- Dataform
- dbt
- Airbyte
- Fivetran
- Looker
- Lightdash
- Steep

**CTA button (header):** Book a free call

---

### Footer

**Column 1 — Nimzo Data**
Tagline: Boutique GCP data consulting for European companies.
- © 2025 Nimzo Data. All rights reserved.
- Based in France · Serving Europe

**Column 2 — Services**
- Data Platform Implementation
- Data Platform Optimization
- Expert Implementation
- Ongoing Support

**Column 3 — Technology**
- Google Cloud Platform
- BigQuery
- Dataform & dbt
- Airbyte & Fivetran
- Looker, Lightdash & Steep

**Column 4 — Company**
- About
- Contact
- Privacy Policy
- Terms of Service

---

## Part 3: Technology Pages Content

### Google Cloud Platform

**Hero positioning:** We build exclusively on GCP — not because it's what we know, but because it's the right choice for European data teams that need compliance, global reach, and a best-in-class analytics stack.

**What It Is:** Google Cloud Platform is Google's suite of cloud computing services. For data work, it offers an integrated stack — from storage (Cloud Storage, BigQuery) to transformation (Dataform, Dataproc) to visualization (Looker) — all designed to work together without custom glue code.

**Why We Chose It:** GCP's analytics stack is the most cohesive in the market. BigQuery alone changes how you think about data — serverless, fast, and economical at the right scale. The tight integration between services means less time debugging infrastructure and more time building value.

**How We Use It:**
- Design and provision GCP project architecture with proper IAM, VPC, and billing structure
- Configure BigQuery datasets, access controls, and cost governance (slot reservations, column-level security)
- Set up Cloud Composer (managed Airflow) or Cloud Workflows for orchestration
- Implement Cloud Storage lifecycle policies and data landing zones for ingestion pipelines
- Advise on GCP region selection for EU data residency requirements (GDPR compliance)

---

### BigQuery

**Hero positioning:** BigQuery is where your data actually lives — we build the schemas, optimize the queries, and control the costs so it stays that way.

**What It Is:** BigQuery is Google's serverless, fully managed data warehouse. It can query terabytes in seconds without any infrastructure to manage. Its columnar storage format and distributed query engine make it fast for analytics workloads by default — but you still need to model your data well to get the most out of it.

**Why We Chose It:** Every major cloud has a data warehouse. BigQuery is the one where cost at scale is predictable, partitioning and clustering work without ceremony, and the ecosystem of tools (Dataform, Looker, dbt) is purpose-built around it. For European companies, BigQuery also supports EU multi-region storage natively.

**How We Use It:**
- Design partitioned and clustered table schemas that keep query costs predictable
- Write and optimize complex SQL — window functions, nested structs, JSON parsing, incremental logic
- Implement column-level security and row-level access policies for multi-tenant datasets
- Set up BigQuery reservations and slot commitments for teams moving off on-demand pricing
- Audit slow or expensive queries and rewrite them — typically achieving 60-90% cost reductions
- Configure BigQuery scheduled queries and materialized views for performance-critical reporting tables

---

### Dataform

**Hero positioning:** Dataform is our first choice for SQL transformation on GCP — it turns raw BigQuery data into production-grade, version-controlled analytics models.

**What It Is:** Dataform is Google's managed SQL transformation tool, natively integrated into the GCP console. It lets you write modular SQL workflows (SQLX files), define dependencies between tables, run tests on your data, and deploy changes through a Git-based workflow — all without leaving BigQuery.

**Why We Chose It:** For GCP-native teams, Dataform is the lowest-friction path to well-structured SQL. No external orchestrator needed — Dataform handles scheduling, dependencies, and retries. The GCP integration means no credentials to manage and billing tied directly to your existing BigQuery setup.

**How We Use It:**
- Migrate spaghetti SQL scripts into structured Dataform projects with clear staging, intermediate, and output layers
- Implement incremental models that only process new data, reducing BigQuery costs significantly
- Write SQLX assertions and data tests to catch data quality issues before they reach dashboards
- Set up scheduled releases tied to Git tags for controlled production deployments
- Configure Dataform compilation variables for environment-specific logic (dev/staging/prod)

---

### dbt

**Hero positioning:** When clients need open-source portability or are already on a dbt workflow, we bring the same rigor — tested models, version control, and documentation as code.

**What It Is:** dbt (data build tool) is the open-source standard for SQL-based data transformation. It compiles templated SQL into warehouse queries, manages dependencies, runs tests, and generates documentation automatically. It works with BigQuery as well as Snowflake, Redshift, and others.

**Why We Chose It:** dbt is the most widely adopted transformation tool in modern data engineering. When clients have existing dbt projects, multi-cloud requirements, or teams with established dbt expertise, we work within that ecosystem rather than pushing a migration. dbt Cloud also offers a fully managed workflow that mirrors what Dataform provides natively on GCP.

**How We Use It:**
- Build and restructure dbt projects following the staging → intermediate → marts layer convention
- Write Jinja-templated SQL macros for reusable transformation logic
- Implement dbt tests (not null, unique, referential integrity, custom) across critical models
- Configure dbt documentation and lineage graphs so new team members understand data flow
- Set up dbt Cloud jobs with CI/CD integration — run tests on PRs before merging
- Advise on Dataform vs. dbt tradeoffs for greenfield GCP projects

---

### Airbyte

**Hero positioning:** Airbyte is our preferred open-source ELT tool — hundreds of connectors, full control over your infrastructure, and no per-connector pricing surprises.

**What It Is:** Airbyte is an open-source data integration platform with 300+ pre-built connectors. It handles extraction from sources (APIs, databases, SaaS tools) and loading into destinations like BigQuery. You can run it self-hosted on GCP or use Airbyte Cloud for a managed experience.

**Why We Chose It:** Airbyte's open-source model means no vendor lock-in and no connector-based pricing tiers. For companies with many data sources, the cost difference versus Fivetran at scale is significant. The custom connector framework (Python CDK) also lets us build connectors for internal APIs or unusual sources when needed.

**How We Use It:**
- Deploy and maintain Airbyte on GCP using Kubernetes (GKE) or Cloud Run for cost-efficient self-hosting
- Configure and monitor sync jobs from CRMs, marketing platforms, databases, and internal APIs
- Build custom Python connectors for sources without official Airbyte support
- Implement normalized schema conventions that work cleanly with downstream Dataform or dbt models
- Set up alerting on sync failures using Airbyte's webhook notifications and Cloud Monitoring

---

### Fivetran

**Hero positioning:** When setup speed and managed reliability matter more than cost control, Fivetran gets pipelines running in hours — not weeks.

**What It Is:** Fivetran is a fully managed ELT platform with 500+ connectors. It handles schema evolution automatically, retries failures, and maintains connector code as sources change their APIs. You pay per monthly active row (MAR) synced.

**Why We Chose It:** Fivetran's managed reliability is its main selling point. For companies that want pipelines that simply work — without a data engineer babysitting connector updates — Fivetran is hard to beat. The MAR pricing model is predictable for stable data volumes, and the connector quality for major SaaS tools (Salesforce, HubSpot, Stripe) is best-in-class.

**How We Use It:**
- Evaluate whether Fivetran or Airbyte is the right fit based on data volume, team capacity, and connector needs
- Provision and configure Fivetran connectors for CRM, marketing, finance, and product analytics sources
- Optimize Fivetran sync frequency and filtering to control MAR costs
- Integrate Fivetran-normalized schemas with downstream dbt or Dataform transformation layers
- Set up dbt source freshness tests to detect Fivetran sync failures before they affect dashboards

---

### Looker

**Hero positioning:** Looker is the most powerful BI tool in the GCP ecosystem — we implement it for companies that need a centralized semantic layer and are ready to invest accordingly.

**What It Is:** Looker is Google's enterprise BI platform, now part of Google Cloud. Its core differentiator is LookML — a modeling language that defines business logic (metrics, dimensions, joins) in version-controlled code rather than in each individual report. This creates a single source of truth for how your company defines revenue, churn, or any other metric.

**Why We Chose It:** For companies with 20+ BI users, multiple teams consuming the same metrics, and a need for governed self-service analytics, Looker's semantic layer is worth the investment. LookML eliminates the problem of conflicting metric definitions across teams. It's expensive — but so is having every team calculate retention differently.

**How We Use It:**
- Design and build LookML models from BigQuery schemas — views, explores, joins, derived tables
- Define business-critical measures and dimensions so non-technical users can self-serve accurately
- Build Looker dashboards and scheduled reports for executive and operational audiences
- Implement Looker Blocks (pre-built LookML packages) for common data sources
- Configure user attributes, access filters, and permission sets for row-level security in Looker
- Train client teams on LookML development so they can extend models independently

**When to choose Looker vs. alternatives:**
- Choose Looker when: 20+ BI users, multiple teams need the same metrics, centralized semantic layer is required, budget allows for enterprise licensing (typically €50K+/year)
- Choose Lightdash instead when: team is already on dbt, metrics need to be version-controlled alongside transformations, budget is under €20K/year
- Choose Steep instead when: primary users are non-technical business users, self-service exploration without SQL is the goal, budget is under €500/month

---

### Lightdash

**Hero positioning:** Lightdash turns your dbt project into a BI tool — if you're already writing dbt models, your metrics are already defined. We make them explorable.

**What It Is:** Lightdash is an open-source BI tool built on top of dbt. Metrics and dimensions are defined in your dbt YAML files — the same place where you define tests and documentation. Lightdash reads those definitions and generates an explorable interface without any additional modeling layer.

**Why We Chose It:** For dbt-native teams, Lightdash is the most coherent choice. Metrics live in version control alongside transformations. There's no semantic layer to maintain separately. And for teams with 5–20 users, Lightdash Cloud pricing is a fraction of Looker while delivering the key capabilities most teams actually need.

**How We Use It:**
- Configure Lightdash to connect to BigQuery and read dbt project YAML
- Define explores, metrics, and custom dimensions in dbt models for Lightdash
- Build dashboards for operational and executive reporting
- Set up Lightdash Cloud or self-hosted deployment on GCP
- Implement row-level security via dbt's access controls

**When to choose Lightdash vs. alternatives:**
- Choose Lightdash when: already using dbt, want version-controlled metrics, 5–20 users, budget is €500–€2,000/month
- Choose Looker instead when: need enterprise governance, 20+ users, or LookML's semantic layer capabilities are required
- Choose Steep instead when: primary audience is non-technical users who need a no-code interface

---

### Steep

**Hero positioning:** Steep puts self-service analytics in the hands of business users who shouldn't need to know SQL — we implement it when the goal is broad data access, not deep technical analysis.

**What It Is:** Steep is a no-code BI tool designed for business users. It connects to BigQuery and provides a drag-and-drop interface for exploring data, building charts, and sharing reports — without writing a single line of SQL. It's particularly strong for companies where the primary data consumers are in marketing, sales, or operations rather than engineering.

**Why We Chose It:** Not every company needs a LookML semantic layer or dbt-driven metrics. When the audience is non-technical and the primary need is "let me explore this data and share a chart," Steep delivers at a fraction of the cost of Looker. It's honest about what it is: an accessible, affordable BI tool.

**How We Use It:**
- Connect Steep to BigQuery and configure dataset access
- Design simplified table structures in BigQuery that work well for Steep's no-code interface
- Train business users on Steep's exploration and charting features
- Set up scheduled report delivery for regular stakeholder updates
- Implement Steep alongside Lightdash or Looker in organizations with mixed technical audiences

**When to choose Steep vs. alternatives:**
- Choose Steep when: primary users are non-technical, budget is under €500/month, self-service exploration is the goal, no SQL access needed
- Choose Lightdash instead when: users need metric version control or SQL access, team is on dbt
- Choose Looker instead when: enterprise governance and a centralized semantic layer are required

---

## Part 4: About Page Content

### Company Story

Nimzo Data was founded by [Antoine's personal story TBD — to be filled in with Antoine's background: where he studied, his early career in data engineering, the types of companies he's worked with across Europe, and the specific moment he decided to package his expertise as a consultancy].

### The Name

Nimzo Data takes its name from the Nimzo-Indian Defense — a chess opening known for controlling the center through indirect pressure rather than direct occupation. The Nimzo-Indian doesn't charge forward. It creates the conditions for a structural advantage that compounds over time.

We build data infrastructure the same way. We're not interested in impressive-looking dashboards that don't connect to decisions. We're interested in creating the conditions for insight: clean pipelines, reliable models, clear metrics, and systems that compound in value as your data grows.

The name is also a signal about how we work. Chess is a game of precision, patience, and long-term thinking. We bring that same orientation to data consulting — no quick fixes that create three new problems, no architectures optimized for demos rather than production.

### Our Approach — 6 Principles

**1. Infrastructure first, insights second**
The most beautiful dashboard is worthless if the data feeding it is unreliable. We build the plumbing before we talk about the taps. Every engagement starts with understanding what's broken at the foundation.

**2. GCP-only, by design**
We don't offer multi-cloud flexibility because we don't think it's a virtue. Depth of expertise in one stack is more valuable than surface familiarity with five. Every GCP service we recommend is one we've run in production at multiple clients.

**3. Transparent pricing, defined scope**
Data consulting has a reputation for ballooning engagements. We quote fixed-price projects where possible, explain our pricing factors in plain language, and don't upsell services you don't need.

**4. We leave teams more capable, not more dependent**
Every engagement includes documentation, knowledge transfer, and training. The goal is that your team understands what we built and why. We want repeat clients because they trust us, not because they can't operate without us.

**5. We say no to bad fits**
We don't take every project. If you need multi-cloud, real-time streaming at massive scale, or a tool we don't specialize in, we'll tell you that upfront and recommend someone better suited.

**6. Long-term architecture over short-term speed**
We've seen what "move fast" data architecture looks like two years later. We design for the company you're becoming, not just the one you are today — while being honest about when simplicity is the right answer.

### Who We're For / Who We're Not For

**Nimzo Data is for companies that:**
- Are building on GCP or seriously considering it
- Have 6–500 employees and growing data needs
- Are frustrated by unreliable pipelines, confusing metrics, or runaway BigQuery costs
- Want a senior technical partner, not just hands on keyboards
- Are based in Europe or operate under European data regulations (GDPR)

**Nimzo Data is not the right fit if you:**
- Need AWS or Azure expertise
- Are looking for the cheapest option (we're not)
- Need a large team of analysts or data scientists (we're data engineers, not analysts)
- Want a fully outsourced data function indefinitely — we're best for companies with or building in-house capability
- Need real-time streaming infrastructure at high scale (Kafka, Flink) — that's not our specialty

---

## Part 5: Contact Page Content

### Heading
Work with us

### Subheading
The best way to start is a 30-minute call. We'll ask about your current setup, what's not working, and what you're trying to achieve. No sales pitch — just an honest conversation about whether we're a good fit.

### Email Section
**Direct email:** hello@nimzodata.com

If you'd prefer email, write us directly. We respond within one business day.

### What to expect
After your first message or call:
1. We'll ask for a brief overview of your data stack and main challenge
2. We'll schedule a 30-minute discovery call (Calendly link)
3. If there's a fit, we'll send a scoping questionnaire and proposal within 5 business days

### Location
Based in France. We work remotely across Europe, with occasional on-site visits for larger engagements.

### Fallback CTA
Not ready to book a call? Browse our service pages to see what a typical engagement looks like, including scope, timeline, and pricing ranges.

---

## Part 6: Page-by-Page Content

---

### Homepage

**H1:** Your GCP data infrastructure, done right.

**Subtitle:** We build and optimize data platforms on Google Cloud for European companies — from raw ingestion to reliable dashboards. No buzzwords. Fixed-price projects. Senior expertise only.

---

**Service card teasers:**

**1. Platform Implementation**
Build your data platform from scratch — ingestion, transformation, and reporting — on a modern GCP stack.
*€15,000 – €35,000*

**2. Platform Optimization**
Your pipelines exist but something's wrong: costs are high, dashboards are slow, or nobody trusts the numbers. We find out why and fix it.
*Audit from €3,000 · Full optimization from €15,000*

**3. Expert Implementation**
Targeted help with a specific layer of your stack — BigQuery performance, Dataform setup, ETL pipelines, or BI tooling.
*€3,000 – €15,000 depending on scope*

**4. Ongoing Support**
Monthly retainers for monitoring, incident response, and continuous improvement — so your platform stays reliable as your data grows.
*€1,000 – €4,500/month*

---

**Is for / Isn't for:**

**We work best with teams that:**
- Are on GCP or planning to move there
- Have 10–500 employees and growing data complexity
- Are spending more than €5,000/month on BigQuery without a clear picture of why
- Want a senior technical partner who can explain decisions, not just execute them

**We're probably not the right fit if you:**
- Need AWS or Azure expertise
- Are looking for the lowest hourly rate available
- Need a team of data analysts or data scientists (we're data engineers)
- Need a fully outsourced, indefinite data team

---

**Process steps:**

**1. Discovery call (free)**
We spend 30 minutes understanding your stack, your problems, and your goals. If we're not a good fit, we'll say so.

**2. Scoping & proposal**
We document the engagement scope, deliverables, timeline, and fixed price. No hidden fees or change orders without your approval.

**3. Implementation**
We build. You're involved in reviews and decisions, but we handle the technical execution. Weekly updates, async communication.

**4. Handover & documentation**
Every engagement ends with documentation, a walkthrough session, and a 30-day support window for questions.

---

**Why GCP Only:**

We don't offer multi-cloud consulting. This isn't a limitation — it's a deliberate choice.

Google Cloud's analytics stack — BigQuery, Dataform, Looker, Cloud Storage — is the most cohesive data platform available today. The services are designed to work together, billed together, and managed together. When you specialize in one stack, you develop the kind of depth that only comes from running it in production across dozens of engagements: you know the failure modes, the hidden costs, the features that sound good in the docs but don't work as advertised, and the patterns that scale.

Multi-cloud expertise is largely a myth. Consultants who claim to be equally expert in AWS, Azure, and GCP are usually mediocre at all three. We'd rather be genuinely excellent at one thing.

---

**CTA Banner:**
Heading: Ready to talk about your data stack?
Button: Book a free 30-minute call

---

### Service: Data Analytics Platform Implementation

**H1:** Build your data platform on GCP — from raw data to reliable dashboards.

**Subtitle:** We design and implement end-to-end data platforms for companies starting from scratch or replacing a fragile existing setup. Fixed-price engagements. Senior engineer on every project.

---

**Challenges (what brings clients here):**
- You're pulling data manually from multiple sources into spreadsheets and losing hours every week
- Your data lives in silos — CRM, product database, marketing tools — and there's no single place to see it together
- You tried to build something internally but it's unreliable, undocumented, and only one person understands it
- You're about to hire a data analyst or BI tool but have no clean data to give them
- Leadership is making decisions based on gut feel because the data isn't trustworthy or accessible

**What you get:**
- A fully functional GCP data platform: ingestion → storage → transformation → reporting
- Documented architecture that your team can operate and extend
- Reliable pipelines with monitoring and alerting configured
- Transformation models with data quality tests built in
- A final walkthrough session and 30-day support window

**What We Build (3 columns):**

**Ingestion layer**
We connect your data sources — databases, APIs, SaaS tools — using Airbyte or Fivetran. Data lands in BigQuery on a reliable schedule with failure alerting.

**Transformation layer**
Raw data is cleaned, modeled, and documented using Dataform or dbt. We build the staging, intermediate, and reporting models your team needs.

**Reporting layer**
We connect a BI tool (Looker, Lightdash, or Steep depending on your needs) and build the initial dashboards your team will actually use.

---

**Pricing:**

Range: €15,000 – €35,000

**What drives the price:**
- Number of data sources (each source is a connector to configure, test, and monitor)
- Complexity of transformation logic (simple pass-through vs. multi-join business logic)
- BI tool choice (Looker implementation takes longer than Lightdash or Steep)

**Example scenarios:**

*Small team, 3 sources, Lightdash:* €15,000 – €18,000 / 6–8 weeks
Typical: startup with Postgres, Stripe, and HubSpot data, Lightdash for dashboards.

*Mid-size company, 6–8 sources, complex metrics, Looker:* €25,000 – €35,000 / 10–14 weeks
Typical: scale-up with multiple product databases, marketing APIs, and finance tools. Looker with LookML for governed metrics.

*Data migration + rebuild, mixed stack:* €20,000 – €30,000 / 8–12 weeks
Typical: company with existing fragile pipelines that need to be replaced without downtime.

---

**FAQ:**

**Do we need to be on GCP already?**
No. We can help you migrate to GCP from AWS or Azure as part of the engagement, or start from scratch if you have no existing cloud data infrastructure.

**How involved do we need to be?**
We ask for a dedicated point of contact (usually a technical co-founder, head of engineering, or data lead) for weekly check-ins and key decisions. Day-to-day implementation is handled by us.

**What happens after the engagement ends?**
Every project ends with full documentation and a handover session. After the 30-day support window, you can extend with a retainer, book ad-hoc work, or operate independently. We design systems to be maintainable by an in-house team.

**Do you offer ongoing support after implementation?**
Yes. We offer monthly retainers starting at €1,000/month for monitoring and incident response. Details on the Ongoing Support page.

---

### Service: Data Analytics Platform Optimization

**H1:** Your data platform exists. It's not working well. Let's fix it.

**Subtitle:** We audit your current GCP data setup, find what's broken or expensive, and implement a structured improvement plan. Two phases: understand first, then fix.

---

**Challenges:**
- BigQuery costs grew 3x in 6 months and nobody knows why
- Dashboards take 45 seconds to load and analysts have stopped trusting them
- Pipelines break every few weeks — you find out when someone files a support ticket
- You inherited a data platform from a previous team and don't understand what it does
- Metrics are inconsistent across teams — finance calculates revenue differently than product

**What you get:**
- A written audit report: what's working, what's broken, what's costing money, and why
- A prioritized remediation roadmap with effort and impact estimates
- Implementation of approved improvements with documented changes
- Monitoring and alerting configured so problems surface early
- 30-day support window after implementation

**Two-phase pricing:**

**Phase 1: Audit**
€3,000 – €5,000 · 2–3 weeks

We review your entire data stack: BigQuery schema and query patterns, pipeline architecture, transformation logic, and BI layer. We interview key stakeholders to understand what decisions people are trying to make with data and where trust has broken down. You receive a written report with findings and a prioritized roadmap.

**Phase 2: Implementation**
€15,000 – €45,000 · 6–12 weeks (based on audit findings)

We implement the improvements identified in the audit. Scope is agreed after the audit report — you decide which items to address and in what order. Common work includes BigQuery optimization (partitioning, clustering, materialized views), pipeline reliability improvements, transformation layer restructuring, and BI query optimization.

**Why Optimization Costs More Than Implementation:**

It seems counterintuitive. You'd expect building something new to cost more than fixing something existing. But optimization work is harder for two reasons.

First, we're working with systems we didn't design. Understanding an existing architecture — including undocumented decisions, implicit assumptions, and technical debt — takes significant time before we can safely change anything.

Second, we're often fixing multiple interconnected problems simultaneously. A slow dashboard might be caused by a missing partition key in BigQuery, which is caused by a pipeline that doesn't set the correct date field, which is caused by a source schema assumption that was never validated. Fixing the visible symptom without understanding the root cause creates new problems.

The audit phase exists precisely to do this diagnostic work properly before committing to a fixed-price implementation.

---

**FAQ:**

**What if we just want the audit, not the implementation?**
The audit is available as a standalone engagement. Many clients use the report to brief an internal team or to get budget approval for the implementation phase.

**How disruptive is the audit process?**
We work from read-only access to your GCP environment and query logs. We typically need 3–4 hours of stakeholder time across the audit period for interviews and questions.

**Can you give us a ballpark before the audit?**
We can give you a range based on a 30-minute scoping call. The audit is specifically designed to give us the information we need to quote the implementation accurately.

**We've already tried to fix some of these problems. Why would this be different?**
Usually because internal teams are too close to the problem. We've seen the same failure patterns across many clients and can diagnose quickly what others have been debugging for months. We also have the time to do it right — internal teams typically fix the symptom and move on.

---

### Service: Expert Implementation Services

**H1:** Targeted help with a specific layer of your data stack.

**Subtitle:** Not every engagement needs a full platform build. Sometimes you have a working data platform and need senior expertise on a specific technical problem — BigQuery performance, a new Dataform project, or a BI tool implementation.

---

**Who this is for:**
- Companies with an existing GCP data stack that has a specific technical gap
- Engineering teams that are competent but need specialist expertise for a defined problem
- Organizations that have done a platform audit and want to implement specific improvements
- Startups that need a specific capability built fast, without a long-term engagement

---

**Expert Service Types:**

**1. BigQuery Performance Optimization**
€5,000 – €12,000 · 2–4 weeks

We audit your BigQuery usage, identify expensive or slow queries, and implement structural improvements: partitioning, clustering, materialized views, query rewrites, and slot governance. Typically achieves 40–80% cost reduction for companies that haven't optimized their setup.

**2. Dataform / dbt Implementation**
€7,000 – €15,000 · 3–6 weeks

We set up a structured transformation project from scratch or restructure an existing one. Includes project architecture, staging and mart layer models, data quality tests, CI/CD integration, and documentation. We also provide training for your team to maintain and extend the project.

**3. ETL/ELT Pipeline Setup**
€6,000 – €12,000 · 3–5 weeks

We configure and deploy data ingestion pipelines using Airbyte or Fivetran, connect your sources to BigQuery, and set up monitoring and alerting. For complex or unusual sources, we can build custom connectors.

**4. BI Tool Implementation**
€5,000 – €10,000 · 2–4 weeks

We implement Looker (LookML), Lightdash, or Steep on top of your existing BigQuery data. Includes semantic layer design, initial dashboard build, user training, and access control configuration.

**5. Data Platform Audit**
€3,000 – €5,000 · 1–2 weeks

A standalone technical audit of your GCP data platform. We review architecture, costs, pipeline reliability, and data quality, then deliver a written report with a prioritized roadmap. No implementation included — useful for scoping future work or getting a second opinion.

---

**Process:**

**1. Scoping call**
We spend 30 minutes understanding the specific problem and what success looks like.

**2. Technical assessment**
For most expert services, we need read access to your GCP environment and a 1–2 hour technical interview with your data lead to understand the current state.

**3. Fixed-price proposal**
We send a proposal with defined scope, deliverables, timeline, and fixed price within 3 business days.

**4. Implementation & handover**
We do the work, check in weekly, and end with documentation and a walkthrough session.

---

**FAQ:**

**Can we combine multiple expert services?**
Yes, and we often do. A common combination is BigQuery optimization + Dataform implementation, or Pipeline setup + BI implementation. Combined engagements are scoped holistically and priced accordingly.

**Do you work alongside our internal team?**
Yes. For expert implementation services, we often work alongside existing data engineers or analysts. We're happy to run knowledge transfer sessions so your team can maintain what we build.

**How quickly can you start?**
We typically have capacity to start within 2–3 weeks of a signed proposal. For urgent situations, contact us and we'll let you know our current availability.

---

### Service: Ongoing Support & Retainers

**H1:** Your data platform keeps running. We make sure it does.

**Subtitle:** Monthly retainers for monitoring, incident response, and continuous improvement — so you don't need to hire a full-time data engineer to keep your platform healthy.

---

**Who this is for:**
- Companies that completed a platform build (with us or another team) and need ongoing reliability
- Organizations where the data lead wears many hats and can't dedicate time to platform maintenance
- Teams that want a senior technical resource available without full-time hiring cost
- Companies experiencing rapid data growth that want architecture guidance as they scale

---

**Retainer Tiers:**

**Maintenance**
€1,000 – €1,500 / month

What's included:
- Monthly BigQuery cost and performance review
- Pipeline monitoring — we check for failures before you notice them
- Incident response for pipeline or dashboard outages (response within 4 business hours)
- Quarterly check-in call (60 minutes) to review platform health and upcoming needs
- Minor configuration changes and documentation updates

Best for: Companies with a stable, well-functioning data platform that needs a safety net.

---

**Growth** *(Recommended)*
€2,000 – €3,000 / month

Everything in Maintenance, plus:
- Monthly strategy session (60 minutes) — roadmap planning, architecture decisions, tool evaluations
- Minor feature work (new data source connections, new dashboard sections, model additions) — up to 8 hours/month included
- Priority response for incidents (within 2 business hours)
- Slack/Teams channel access for async technical questions

Best for: Companies actively growing their data usage and wanting continuous improvement alongside reliability.

---

**Partnership**
€3,500 – €4,500 / month

Everything in Growth, plus:
- Weekly check-in call (30 minutes) — real-time alignment on priorities
- Dedicated capacity for larger feature work — up to 20 hours/month included
- Architecture review for major new initiatives before implementation
- First priority scheduling for additional ad-hoc work

Best for: Companies where data is central to the business and they want a senior data engineering partner, not just a support contract.

---

**Terms:**

- Minimum commitment: 3 months. Data platforms take time to stabilize and monitor effectively — we don't offer month-to-month retainers.
- Notice period: 30 days written notice to end or change tier. Month-to-month after the initial commitment.
- Scope boundaries: Retainers cover ongoing operations and incremental improvements. New platform builds or major new feature sets are scoped and quoted separately.
- Hours don't roll over: Included hours in Growth and Partnership tiers are for that month. We don't bank unused hours.

---

**FAQ:**

**We didn't build our platform with you. Can we still get a retainer?**
Yes, but we require a platform audit first (€3,000–€5,000) so we understand the architecture and can support it properly. This is non-negotiable — we won't take responsibility for a system we don't understand.

**What counts as an "incident"?**
Pipeline failure (no data loaded for X hours), dashboard returning incorrect data, BigQuery slot exhaustion causing query failures, or any other outage that affects business operations. We monitor proactively but also respond to things you report.

**What if we need more hours than included in our tier?**
Additional hours are billed at our standard rate (available on request). We'll always flag if a request is likely to exceed the monthly inclusion before starting.

**Can we pause the retainer?**
No. Retainers are continuous commitments. If you need to pause, the correct path is to give 30 days notice and restart when ready. We'll treat it as a new engagement.

---

### 404 Page

**Heading:** This page doesn't exist.

**Body:** You might have followed a broken link or mistyped the URL. Either way, there's nothing here.

**Link:** Go back to the homepage

---

### Privacy Policy

**DRAFT — Pending legal review. Do not treat this as legal advice.**

*Last updated: April 2025*

---

**1. Who we are**

Nimzo Data is a data consulting business operated by Antoine Anicotte, based in France (EU). We can be reached at privacy@nimzodata.com.

As a data controller, we are responsible for the personal data collected through this website.

---

**2. What data we collect**

We collect the following categories of personal data:

**Contact and inquiry data:** When you contact us via email or our contact form, we collect your name, email address, company name, and the content of your message. We use this to respond to your inquiry and to assess whether there is a potential engagement.

**Analytics data:** We use Google Analytics 4 (GA4) to understand how visitors use this website. GA4 collects anonymized data about page views, session duration, referral source, and general location (country/city level). We do not use this data for individual profiling.

**Scheduling data:** If you book a call via Calendly, Calendly collects your name, email address, and any information you provide in the booking form. We receive this data to prepare for and conduct the call. Calendly's own privacy policy applies to their processing.

**Server logs:** Our hosting provider (Vercel or similar) automatically logs basic request information (IP address, browser type, pages visited) for security and performance purposes.

---

**3. Legal basis for processing**

We process your personal data under the following legal bases (GDPR Article 6):

- **Legitimate interest:** Analytics and server logs, for understanding website performance and security
- **Contract performance / pre-contractual steps:** Contact and inquiry data, when you're considering engaging us
- **Consent:** Marketing cookies (if any) — we ask for your consent before setting non-essential cookies

---

**4. Cookies**

We use the following cookies:

- **Strictly necessary:** Session and security cookies. These cannot be opted out.
- **Analytics (opt-in):** GA4 analytics cookies. We request your consent before setting these. You can withdraw consent at any time via the cookie settings link in the footer.

We do not use advertising or retargeting cookies.

---

**5. Third parties**

We share data with the following third parties:

- **Google Analytics (GA4):** Anonymized analytics data. Google may process this data on servers outside the EU. We have enabled IP anonymization and use GA4 in a privacy-preserving configuration.
- **Calendly:** If you book a call, Calendly processes your name and email. Calendly is based in the US and participates in the EU-US Data Privacy Framework.
- **Email provider:** We use standard email infrastructure to receive and respond to inquiries. Emails may be stored on servers within the EU.

We do not sell your personal data. We do not share it with any third parties beyond the above.

---

**6. Data retention**

- Contact and inquiry data: Retained for 3 years after the last contact, or for the duration of any engagement plus 5 years.
- Analytics data: Retained in GA4 for 14 months (the minimum configurable period).
- Server logs: Retained for 90 days.

---

**7. Your rights**

Under GDPR, you have the right to:

- **Access** the personal data we hold about you
- **Rectification** of inaccurate data
- **Erasure** ("right to be forgotten") — subject to our legal retention obligations
- **Data portability** — receive your data in a machine-readable format
- **Object** to processing based on legitimate interest
- **Withdraw consent** at any time for consent-based processing

To exercise any of these rights, email privacy@nimzodata.com. We will respond within 30 days.

If you believe we have not handled your data appropriately, you have the right to lodge a complaint with the CNIL (Commission Nationale de l'Informatique et des Libertés), the French data protection authority.

---

**8. Data transfers outside the EU**

Some third-party services (Google, Calendly) may process data outside the EU. Where this occurs, we ensure appropriate safeguards are in place (Standard Contractual Clauses or participation in the EU-US Data Privacy Framework).

---

**9. Changes to this policy**

We may update this policy periodically. Material changes will be noted with an updated "last updated" date at the top of this page.

---

### Terms of Service

**DRAFT — Pending legal review. Do not treat this as legal advice.**

*Last updated: April 2025*

---

**1. Services**

Nimzo Data provides data engineering consulting services, including but not limited to: data platform design and implementation, data pipeline development, data transformation modeling, BI tool implementation, and ongoing technical support.

We are a consulting business, not a software-as-a-service provider. We do not sell software licenses, subscriptions, or access to platforms. All services are delivered as professional consulting engagements.

---

**2. Engagement terms**

Each consulting engagement is governed by a separate Statement of Work (SOW) or engagement letter that defines the scope, deliverables, timeline, and pricing. In the event of any conflict between these Terms and an SOW, the SOW takes precedence.

We reserve the right to decline any engagement without providing a reason.

---

**3. Payment terms**

- Fixed-price projects: 50% due on engagement start, 50% due on completion and delivery.
- Retainer engagements: Invoiced monthly in advance.
- Payment is due within 14 days of invoice date.
- Late payments accrue interest at 3% per month after the due date.
- We reserve the right to pause work on engagements with outstanding invoices beyond 30 days.

All prices are in Euros (€) and exclude applicable taxes (VAT). Clients based in France will be charged VAT at the applicable rate. EU business clients outside France may be subject to reverse charge VAT.

---

**4. Intellectual property**

- **Client IP:** Any pre-existing client IP (data, systems, code) remains the property of the client.
- **Deliverables:** Upon receipt of full payment, all deliverables created specifically for the client (data models, pipelines, documentation) become the property of the client.
- **Our tooling and methodologies:** General methodologies, frameworks, and reusable tools we bring to the engagement remain our property. We retain the right to use non-confidential learnings and patterns from any engagement in future work.

---

**5. Confidentiality**

We treat all client data, business information, and technical systems as confidential. We do not share client information with third parties except as required to deliver the engagement (e.g., cloud service providers).

Clients agree to keep our pricing, methodologies, and proposal details confidential.

Confidentiality obligations survive the end of any engagement for a period of 3 years.

---

**6. Data processing**

Where we access or process client personal data as part of an engagement, we act as a data processor on behalf of the client. We will enter into a Data Processing Agreement (DPA) with clients where required by GDPR. Our processing is limited to what is necessary to deliver the agreed services.

---

**7. Limitation of liability**

We deliver our services with professional care and skill. However:

- We are not liable for indirect, consequential, or incidental damages arising from our work.
- Our total liability for any engagement is limited to the fees paid for that engagement.
- We are not responsible for downtime, data loss, or service interruptions caused by third-party cloud providers (Google Cloud Platform, etc.).

---

**8. Warranties and disclaimers**

We warrant that services will be delivered with reasonable professional skill and care. We do not warrant that our work will be error-free or that it will meet every unstated expectation.

Technology recommendations (tools, architectures) are based on our professional judgment. Technology evolves; we cannot guarantee that recommended tools will remain optimal indefinitely.

---

**9. Termination**

Either party may terminate an engagement with 30 days written notice. In the case of termination:

- Fixed-price projects: Work completed to the termination date will be invoiced pro-rata if not covered by the initial deposit.
- Retainers: The final month's retainer fee is due regardless of termination date within that month.

We may terminate immediately and without notice if a client engages in illegal activity, fails to pay invoices beyond 60 days, or acts in ways that make continuation of the engagement unreasonable.

---

**10. Governing law**

These Terms and any engagement governed by them are subject to French law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Paris, France.

---

**11. Contact**

For questions about these terms: hello@nimzodata.com

Nimzo Data
France
