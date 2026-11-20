const copy = {
  title: "Metabase | Nimzo Data",
  description: "Metabase implementation on BigQuery. Dashboards, governed metrics, Metabot AI, and flexible deployment options.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Metabase is self-service BI for teams that want broad access, a real AI assistant, and the flexibility to self-host without enterprise-tier spend.",
  title2: "How we use it",
  items: [
        "Stand up Metabase: Cloud for managed, or self-hosted on Cloud Run / GKE for full control",
        "Define Models and Metrics so business users get consistent definitions across dashboards and AI queries",
        "Configure Metabot with the client's own LLM provider (Anthropic) for natural-language exploration",
        "Build operational and executive dashboards with email/Slack subscription delivery",
        "Set up row-level and column-level permissions for multi-team access",
        "Integrate dbt metadata via the community dbt-metabase package when the client is on dbt",
      ],
  title3: "When Metabase is the right BI tool, and when it isn't",
  blocks: [
        {
          heading: 'Choose Metabase when:',
          bullets: [
            'You want self-service BI with a real AI assistant, at a reasonable price',
            'You want the option to self-host (a free open-source edition is available)',
            "You want Metabot AI features with BYO Anthropic key, available even in self-hosted",
            'Your team mixes technical and non-technical users',
          ],
        },
        {
          heading: 'Choose Looker instead when:',
          bullets: [
            'You need enterprise LookML governance and embedded analytics at scale',
            'Budget is €5k+/month and you have 20+ users across departments',
          ],
        },
        {
          heading: 'Choose Lightdash instead when:',
          bullets: [
            "You're already on dbt and want metrics defined in code",
            'You want flat-rate pricing that does not scale with headcount',
          ],
        },
        {
          heading: 'Choose Steep instead when:',
          bullets: [
            'The team is entirely non-technical and you want the simplest metric-first UX',
            'Budget is under €500/month for a small team',
          ],
        },
      ],
  p1: "Metabase is approachable BI with a full dashboarding, metric, and question-building surface. Business users explore data through a visual interface; analysts build reusable Models and Metrics that enforce consistent definitions; power users drop into SQL when they need it. Metabot (Metabase's AI assistant, which is open source) generates charts, writes SQL, analyzes results, and answers questions in natural language.",
  p2: "Metabase costs less than Looker and covers more needs than Steep. You can run it fully self-hosted on Cloud Run, use Metabase Cloud, or start free with the open-source edition. The semantic layer (Models + Metrics + Data Studio) and Metabot's AI features (including self-hosted AI with your own Anthropic API key) make it a strong option for AI-powered BI without the cloud-only lock-in of Looker.",
  p3: "Metabot's accuracy depends on the Models and Metrics you define in Data Studio, the same governed definitions your dashboards use. We set up Models and Metrics before enabling Metabot because the better the semantic layer, the better the AI answers.",
  sectionTitle: "What it is",
  sectionTitle2: "Why we chose it",
};

export type Copy = typeof copy;
export default copy;
