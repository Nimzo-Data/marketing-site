const copy = {
  title: "Dagster | Nimzo Data",
  description: "Dagster orchestration for complex data pipelines. Asset-based modeling, data quality checks, and Dagster Cloud deployment on GCP.",
  toolCategory: "Orchestration",
  heroPositioning: "Asset-based orchestration for data pipelines. Define dependencies, data quality checks, and schedules as code, with a developer experience we like.",
  title2: "How we use it",
  items: [
        "Orchestrate multi-step custom Python scripts with explicit dependencies and data quality checks between steps",
        "Define and monitor \"assets\": the actual tables and files your pipeline produces, not just the jobs that build them",
        "Coordinate dbt Core runs alongside custom pipelines when dbt Cloud's scheduler isn't enough",
        "Use Dagster Components and the dg CLI for YAML-driven pipeline definitions, readable for humans and friendly to AI coding agents",
        "Set up Dagster Cloud for managed hosting when clients don't want to maintain GKE infrastructure",
        "Integrate Dagster alerts with Slack, PagerDuty, or email so failures surface in the tools your team already watches",
      ],
  title3: "When Dagster is the right orchestrator, and when it isn't",
  blocks: [
        {
          heading: 'Choose Dagster when:',
          bullets: [
            'You have 4+ custom pipelines with cross-pipeline dependencies',
            'You need data quality checks as first-class pipeline elements',
            'Your developers will spend time in it and the experience matters',
          ],
        },
        {
          heading: 'Choose no orchestrator when:',
          bullets: [
            'Your stack is Airbyte + Dataform + a BI tool. Each tool self-schedules',
            "You don't have custom pipelines that need cross-tool coordination",
          ],
        },
        {
          heading: 'Choose Cloud Run functions + Cloud Scheduler when:',
          bullets: [
            'You have 1–3 simple scheduled scripts, each independent',
            "You don't need dependency management between them",
          ],
        },
        {
          heading: 'Choose Airflow when:',
          bullets: [
            "You're already in an Airflow shop with operational investment",
            "The cost of switching outweighs Dagster's advantages",
          ],
        },
      ],
  p1: "Dagster is a modern data orchestrator: the tool that sits on top of your pipelines and transformations to schedule them, handle dependencies, retry failures, and give you visibility into what ran, when, and why something broke. It competes with Airflow and Prefect, with a stronger focus on data quality and developer experience. Recent releases add Dagster Components (YAML-first pipeline authoring, friendly to AI coding agents) and an MCP server for direct integration with tools like Claude Code and Cursor.",
  p2: "Most of our projects don't need orchestration. Airbyte and Dataform both schedule themselves, and for simple stacks adding an orchestrator is over-engineering. When orchestration is needed (custom scripts with dependencies, complex data quality checks, cross-pipeline coordination), we prefer Dagster to Airflow. Its UI is clearer and the asset-based model matches how data teams think about pipelines.",
  sectionTitle: "What it is",
  sectionTitle2: "Why we chose it",
};

export type Copy = typeof copy;
export default copy;
