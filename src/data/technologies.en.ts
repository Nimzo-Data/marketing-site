// Tool taglines, keyed by slug. Names, categories and logos are in technologies.ts.
const copy = {
  taglines: {
    'google-cloud-platform': 'Our foundation. AI-native data cloud with European sovereignty options.',
    'bigquery': 'Serverless data warehouse with built-in Gemini AI and EU data residency.',
    'dataform': 'SQL transformations built into BigQuery, with no extra licensing. Our default.',
    'dbt': 'Widely used SQL transformations. Full support for your existing dbt projects.',
    'airbyte': 'Managed ELT with 700+ connectors and a builder for custom APIs.',
    'fivetran': 'Fully managed ELT with 700+ connectors and automated schema handling.',
    'looker': 'Enterprise BI with LookML governance and Gemini conversational analytics.',
    'lightdash': 'BI with metrics in code, dbt or native YAML. Flat-rate pricing, unlimited users.',
    'metabase': 'Approachable BI with dashboards, governed metrics, Metabot AI, and self-hosting.',
    'steep': 'AI analytics built on governed metrics. Non-technical teams ask questions and get trusted answers.',
    'dagster': 'Asset-based orchestration. Declare pipelines and dependencies as code.',
  },
};

export type TechnologiesCopy = typeof copy;
export default copy;
