const copy = {
  title: "Google Cloud Platform | Nimzo Data",
  description: "We build exclusively on GCP: BigQuery, Dataform, Cloud Storage, and the right BI tool for your team. Expert GCP data consulting for European companies.",
  toolCategory: "Cloud Platform",
  heroPositioning: "We build exclusively on GCP. We chose it deliberately, then spent years getting deep on it: the right choice for European data teams that need compliance, global reach, and a best-in-class analytics stack.",
  title2: "How We Use It",
  items: [
        "Design and provision GCP project architecture with proper IAM, VPC, and billing structure",
        "Configure BigQuery datasets, access controls, and cost governance (slot reservations, column-level security)",
        "Set up Cloud Run functions and Cloud Scheduler for lightweight scheduled jobs and custom API integrations",
        "Implement Cloud Storage lifecycle policies and data landing zones for ingestion pipelines",
        "Advise on GCP region selection and sovereignty options for EU data residency (GDPR, Assured Workloads, S3NS)",
        "Set up Cloud Monitoring dashboards and alerting policies for pipeline health and BigQuery cost tracking",
      ],
  title3: "When GCP is the right choice, and when it isn't",
  blocks: [
        {
          heading: 'Choose GCP when:',
          bullets: [
            'Your primary workload is analytics (BigQuery is the best-value warehouse in the market)',
            'You need European data residency with clean EU multi-region support',
            "You're already in the Google ecosystem (Google Ads, GA4, Workspace)",
            'AI workloads (Gemini, Vertex AI) are part of your data roadmap',
          ],
        },
        {
          heading: 'Choose AWS when:',
          bullets: [
            "You're running complex multi-service applications on Lambda, SQS, DynamoDB, and the AWS-native stack",
            'Your data team is already deep in AWS infrastructure',
            'You need the broadest enterprise feature set available',
          ],
        },
        {
          heading: 'Choose Azure when:',
          bullets: [
            'Your organization is heavily Microsoft-invested (M365, Power BI, Active Directory)',
            'Data gravity is already on Azure and moving it would cost more than it saves',
          ],
        },
      ],
  p1: "Google Cloud Platform is Google's suite of cloud computing services. For data work, it offers an integrated stack, from storage (Cloud Storage, BigQuery) to transformation (Dataform, Dataproc) to visualization (Looker) to AI (Vertex AI, Gemini), all designed to work together without custom glue code. GCP's AI features are designed to consume the semantic layers you build in Looker, Dataform, and BigQuery, so a well-modeled data platform is also your AI infrastructure.",
  p2: "GCP's analytics stack is the most cohesive in the market. BigQuery alone changes how you think about data: serverless, fast, and economical at the right scale. The tight integration between services means less time debugging infrastructure.",
  p3: "For European clients specifically, GCP now offers three levels of data sovereignty: standard regional residency, Assured Workloads for EU (EU-only storage, processing, and support), and sovereign partnerships like S3NS (Thales + Google, SecNumCloud-aligned in France). These matter when GDPR, regulated sectors, or procurement requirements enter the picture.",
  sectionTitle: "What It Is",
  sectionTitle2: "Why We Chose It",
  whenIntro: "We only build on GCP, but that doesn't mean GCP is right for everyone.",
};

export type Copy = typeof copy;
export default copy;
