const copy = {
  title: "Fivetran | Nimzo Data",
  description: "Fivetran setup and optimization on BigQuery. Connector configuration, MAR cost control, and reliability monitoring.",
  toolCategory: "ELT / Data Ingestion",
  heroPositioning: "When setup speed and managed reliability matter more than cost control, Fivetran gets pipelines running in hours, not weeks.",
  title2: "How we use it",
  items: [
        "Evaluate whether Fivetran or Airbyte is the right fit based on data volume, team capacity, and connector needs",
        "Provision and configure Fivetran connectors for CRM, marketing, finance, and product analytics sources",
        "Optimize Fivetran sync frequency and filtering to control MAR costs",
        "Integrate Fivetran-normalized schemas with downstream dbt or Dataform transformation layers",
        "Set up dbt source freshness tests to detect Fivetran sync failures before they affect dashboards",
        "Configure webhook and email alerts so sync failures surface in Slack or PagerDuty before they affect dashboards",
      ],
  title3: "Fivetran or Airbyte?",
  blocks: [
        {
          heading: 'Choose Fivetran when:',
          bullets: [
            'You want a very polished managed ELT, with zero maintenance',
            'Your sources are mainstream SaaS (Salesforce, HubSpot, Stripe, Shopify)',
            "You value zero-maintenance pipelines over cost optimization",
          ],
        },
        {
          heading: 'Choose Airbyte when:',
          bullets: [
            'Overall cost matters more than maximum polish. Airbyte is cheaper at most scales',
            'You need custom connectors for internal APIs or unusual sources',
            'You want vendor independence across ingestion and transformation (post Fivetran + dbt merger)',
          ],
        },
        {
          heading: 'Choose direct API integration when:',
          bullets: [
            'You only need one or two simple sources, no schema evolution needed',
            'You want full control over the integration logic',
            'Ongoing cost matters more than upfront engineering work',
          ],
        },
      ],
  p1: "Fivetran is a fully managed ELT platform with 700+ connectors. It handles schema evolution automatically, retries failures, and maintains connector code as sources change their APIs. You pay per monthly active row (MAR) synced.",
  p2: "Fivetran's managed reliability is its main selling point. For companies that want pipelines that simply work without a data engineer babysitting connector updates, Fivetran is a safe choice. The connector quality for major SaaS tools (Salesforce, HubSpot, Stripe, Shopify) is among the strongest.",
  p3: "One thing to watch: Fivetran and dbt Labs have merged, so choosing Fivetran means committing to the same vendor across ingestion and transformation. That's convenient for some teams and a lock-in concern for others, so make the choice deliberately.",
  sectionTitle: "What it is",
  sectionTitle2: "Why we chose it",
};

export type Copy = typeof copy;
export default copy;
