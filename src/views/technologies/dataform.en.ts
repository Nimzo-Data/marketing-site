const copy = {
  tamesonQuote: "When Antoine started with us, most of our BigQuery data wasn't usable for analysis. The Dataform foundation he helped build … turned that around completely.",
  title: "Dataform | Nimzo Data",
  description: "Dataform experts for BigQuery. SQLX modeling, incremental models, data quality tests, and production deployment workflows.",
  toolCategory: "SQL Transformation",
  heroPositioning: "Dataform is our first choice for SQL transformation on GCP. It turns raw BigQuery data into production-grade, version-controlled analytics models.",
  title2: "How we use it",
  items: [
        "Migrate spaghetti SQL scripts into structured Dataform projects with clear staging, intermediate, and output layers",
        "Implement incremental models that only process new data, reducing BigQuery costs significantly",
        "Write SQLX assertions and data tests to catch data quality issues before they reach dashboards",
        "Set up scheduled releases tied to Git tags for controlled production deployments",
        "Configure Dataform compilation variables for environment-specific logic (dev/staging/prod)",
        "Implement CI/CD governance: schema-change classification, pre-push validation, and automated checks blocking unsafe changes",
      ],
  title3: "Dataform or dbt?",
  blocks: [
        {
          heading: 'Choose Dataform when:',
          bullets: [
            "You're on GCP and don't need cross-cloud portability",
            "Your team doesn't already have dbt investment",
            'You want the simplest path from raw data to reporting layer',
            'You don’t want to pay for a license on top of BigQuery',
          ],
        },
        {
          heading: 'Choose dbt Cloud when:',
          bullets: [
            'You want a richer developer experience',
            'Your team already works in dbt every day',
            'You need portability to Snowflake or other warehouses down the line',
          ],
        },
        {
          heading: 'Choose dbt Core when:',
          bullets: [
            'You want open-source dbt without dbt Cloud pricing',
            "You're comfortable wiring up your own orchestration (usually Dagster or GitHub Actions)",
          ],
        },
      ],
  metric: "10+ sources modeled into a layered Dataform platform.",
  body: "Ongoing since June 2024.",
  p1: "Dataform is Google's managed SQL transformation tool, natively integrated into the GCP console. It lets you write modular SQL workflows (SQLX files), define dependencies between tables, run tests on your data, and deploy changes through a Git-based workflow, all without leaving BigQuery. Gemini assistance is built in for SQLX generation and error fixing.",
  p2: "For GCP-native teams, Dataform is the lowest-friction path to well-structured SQL. No external orchestrator needed. Dataform handles scheduling, dependencies, and retries. The GCP integration means no credentials to manage and billing tied directly to your existing BigQuery setup.",
  p3: "The models you build in Dataform become the governed layer that downstream AI features rely on: when AI tools query your data, they're querying these models.",
  sectionTitle: "What it is",
  sectionTitle2: "Why we chose it",
};

export type Copy = typeof copy;
export default copy;
