const copy = {
  tamesonQuote: "When Antoine started with us, most of our BigQuery data wasn't usable for analysis. The Dataform foundation he helped build … turned that around completely.",
  title: "BigQuery | Nimzo Data",
  description: "BigQuery experts: schema design, query optimization, cost governance, and column-level security. GCP data consulting.",
  toolCategory: "Data Warehouse",
  heroPositioning: "BigQuery is where your data lives. We design the schemas and tune the queries, and we keep the costs under control.",
  title2: "How we use it",
  items: [
        "Design partitioned and clustered table schemas that keep query costs predictable",
        "Write and optimize complex SQL: window functions, nested structs, JSON parsing, incremental logic",
        "Implement column-level security and row-level access policies for multi-tenant datasets",
        "Set up BigQuery reservations and slot commitments for teams moving off on-demand pricing",
        "Audit slow or expensive queries and rewrite them, typically achieving 60–90% cost reductions on the rewritten queries",
        "Use Gemini in BigQuery where it fits: AI.GENERATE, AI.CLASSIFY, and other SQL-native AI functions for in-warehouse AI",
      ],
  title3: "When BigQuery is the right warehouse, and when it isn't",
  blocks: [
        {
          heading: 'Choose BigQuery when:',
          bullets: [
            'Analytics is your primary workload (SQL queries, not OLTP transactions)',
            'You want serverless pricing that scales from zero, no idle compute to pay for',
            "You're already on GCP or planning to be",
            "You need EU data residency with clean multi-region storage",
            'You want in-warehouse AI features without bolting on a separate ML platform',
          ],
        },
        {
          heading: 'Choose Snowflake when:',
          bullets: [
            'You need fine-grained warehouse sizing or per-workload compute isolation',
            "You're multi-cloud and need a warehouse that runs on all three clouds",
            'Specific Snowflake features matter (Snowpark, zero-copy cloning, data sharing)',
          ],
        },
        {
          heading: 'Choose Databricks when:',
          bullets: [
            'ML and data science workloads are the primary use case, not analytics reporting',
            'You run Spark-based pipelines or need a notebook-first environment',
            'A lakehouse architecture with Delta Lake is an explicit requirement',
          ],
        },
        {
          heading: 'Choose Redshift when:',
          bullets: [
            "You're deeply on AWS and data movement costs outweigh warehouse quality",
            'Your team is already fluent in Redshift and migration ROI is weak',
          ],
        },
      ],
  metric: "10+ sources modeled into a layered Dataform platform.",
  body: "Ongoing since June 2024.",
  p1: "BigQuery is Google's serverless, fully managed data warehouse. It can query terabytes in seconds without any infrastructure to manage. Its columnar storage format and distributed query engine make it fast for analytics workloads by default. Recent releases add first-class Gemini integration: SQL-native AI functions, Data Canvas for natural-language exploration, and conversational analytics. AI accuracy depends on how well your data is modeled. A well-structured BigQuery warehouse with governed semantic layers gives you useful answers instead of confident hallucinations.",
  p2: "Every major cloud has a data warehouse. BigQuery is the one where cost at scale is predictable, partitioning and clustering work without ceremony, and the ecosystem of tools (Dataform, Looker, dbt) is purpose-built around it. For European companies, BigQuery also supports EU multi-region storage natively.",
  sectionTitle: "What it is",
  sectionTitle2: "Why we chose it",
};

export type Copy = typeof copy;
export default copy;
