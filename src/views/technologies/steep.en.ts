const copy = {
  title: "Steep | Nimzo Data",
  description: "Steep implementation for metric-based business intelligence on BigQuery. Metric definitions, Steep AI, and self-service exploration for non-technical teams.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Steep is metric-based BI for non-technical teams. Metrics defined once, explored visually or asked in natural language with Steep AI. No SQL required.",
  title2: "How we use it",
  items: [
        "Connect Steep to BigQuery and configure dataset access",
        "Define the metrics layer in Steep: revenue, active users, conversion, whatever your business runs on",
        "Plug Steep into the dbt Semantic Layer when the client already maintains metrics there",
        "Train business users on metric exploration, dashboard creation, Steep AI, and MCP access from Claude or ChatGPT. No SQL required",
        "Set up scheduled report delivery for regular stakeholder updates",
        "Implement Steep alongside Lightdash, Metabase, or Looker in organizations with mixed technical audiences",
      ],
  title3: "When Steep is the right BI tool, and when it isn't",
  blocks: [
        {
          heading: 'Choose Steep when:',
          bullets: [
            'Primary users are non-technical (marketing, ops, sales)',
            'You want shared metric definitions without maintaining a full semantic layer',
            'Budget is under €500/month for a small team',
            'SQL access is not a requirement',
          ],
        },
        {
          heading: 'Choose Metabase instead when:',
          bullets: [
            'You need more than metric exploration (dashboards, embedding, SQL access)',
            'Your team mixes technical and non-technical users',
            'You want self-host optionality with a real AI assistant included',
          ],
        },
        {
          heading: 'Choose Lightdash instead when:',
          bullets: [
            'You want version-controlled metrics in code (dbt YAML or Lightdash YAML)',
            'SQL access for power users matters',
          ],
        },
        {
          heading: 'Choose Looker instead when:',
          bullets: [
            'Enterprise governance and a centralized semantic layer are required',
            'You have 20+ users across multiple departments',
          ],
        },
      ],
  p1: "Steep is a metric-based BI tool. Metrics are defined once (typically by a data lead or analyst) and business users explore them through a visual interface or Steep AI, which answers natural-language questions directly against the governed metrics. The metric-first model means every chart and every AI answer shares the same definition of \"revenue\" or \"active user\", no matter who built it. Particularly strong for companies where the primary data consumers are in marketing, sales, or operations rather than engineering.",
  p2: "Steep has its own native semantic layer for metric definitions. It can also plug into dbt's Semantic Layer if the client already maintains metrics there: one metrics model, two surfaces. Steep exposes its metrics via MCP (Model Context Protocol), so the same governed data is queryable from AI tools like Claude or ChatGPT without leaving the tools the team already uses.",
  p3Html: `Not every company needs LookML's governance or dbt-driven metrics. When the audience is non-technical and the primary need is consistent, explorable metrics without training everyone on SQL, Steep delivers at a fraction of Looker's cost. Steep AI credits (natural-language Q&A) are included in every paid tier.`,
  p4: "Because every chart and every AI answer shares the same governed definitions, Steep AI can't produce numbers that contradict your dashboards. And with Steep's MCP server, those governed metrics are available wherever the team already works, not only inside Steep's UI.",
  sectionTitle: "What it is",
  sectionTitle2: "Why we chose it",
};

export type Copy = typeof copy;
export default copy;
