import type { Copy } from './google_cloud_platform.en';

const copy: Copy = {
  title: "Consultant data Google Cloud (GCP) | Nimzo Data",
  description: "Nous construisons exclusivement sur GCP : BigQuery, Dataform, Cloud Storage et l’outil de BI adapté à votre équipe. Conseil data sur Google Cloud pour les entreprises européennes.",
  toolCategory: "Plateforme cloud",
  heroPositioning: "Nous ne construisons que sur GCP, depuis des années. Pour une équipe data européenne, l’hébergement dans l’UE, la souveraineté et BigQuery font la différence.",
  title2: "Comment nous l’utilisons",
  items: [
        "Organiser vos projets GCP : accès (IAM), réseau (VPC) et facturation",
        "Configurer les jeux de données BigQuery, les accès et la maîtrise des coûts (réservations de slots, sécurité par colonne)",
        "Mettre en place des fonctions Cloud Run et Cloud Scheduler pour les tâches planifiées légères et les intégrations d’API sur mesure",
        "Configurer Cloud Storage : où arrivent les fichiers bruts et combien de temps ils sont conservés",
        "Conseiller sur la région GCP et les options de souveraineté pour l’hébergement dans l’UE (RGPD, Assured Workloads, S3NS)",
        "Mettre en place des tableaux de bord et des alertes Cloud Monitoring pour suivre la santé des pipelines et les coûts BigQuery",
      ],
  title3: "Quand GCP est le bon choix, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez GCP quand :',
          bullets: [
            'Vous faites surtout de l’analyse : BigQuery y est très compétitif',
            'Vous avez besoin de données hébergées en Europe, avec un stockage multirégion dans l’UE',
            "Vous êtes déjà dans l’écosystème Google (Google Ads, GA4, Workspace)",
            'L’IA (Gemini, Vertex AI) fait partie de votre feuille de route data',
          ],
        },
        {
          heading: 'Choisissez AWS quand :',
          bullets: [
            "Vous exploitez des applications complexes sur Lambda, SQS, DynamoDB et le reste d’AWS",
            'Votre équipe data travaille déjà largement sur AWS',
            'Vous avez besoin de l’offre de services la plus large pour les grandes entreprises',
          ],
        },
        {
          heading: 'Choisissez Azure quand :',
          bullets: [
            'Votre organisation est déjà très équipée en solutions Microsoft (M365, Power BI, Active Directory)',
            'Vos données sont déjà sur Azure et les déplacer coûterait plus que cela ne rapporterait',
          ],
        },
      ],
  p1: "Google Cloud Platform est l’ensemble de services cloud de Google. Pour la data, c’est une plateforme intégrée (Cloud Storage, BigQuery, Dataform, Looker, Vertex AI, Gemini) dont les services se connectent sans code d’intégration sur mesure. Les fonctions d’IA de Google s’appuient sur les tables et définitions que vous construisez dans BigQuery, Dataform et Looker.",
  p2: "Avec un seul fournisseur, les services se connectent sans code et vous n’avez qu’un interlocuteur quand quelque chose casse.",
  p3: "Pour les clients européens, GCP propose trois niveaux de souveraineté des données : l’hébergement régional standard, Assured Workloads pour l’UE (stockage, traitement et support exclusivement dans l’UE) et des partenariats souverains comme S3NS (Thales + Google, aligné sur SecNumCloud, en France). Ils comptent dès que le RGPD, un secteur réglementé ou un appel d’offres l’exige.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
  whenIntro: "Nous construisons uniquement sur GCP, mais GCP ne convient pas à tout le monde.",
};

export default copy;
