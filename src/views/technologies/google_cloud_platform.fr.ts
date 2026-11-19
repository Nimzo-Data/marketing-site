import type { Copy } from './google_cloud_platform.en';

const copy: Copy = {
  title: "Consultant data Google Cloud (GCP) | Nimzo Data",
  description: "Nous construisons exclusivement sur GCP : BigQuery, Dataform, Cloud Storage et l’outil de BI adapté à votre équipe. Conseil data sur Google Cloud pour les entreprises européennes.",
  toolCategory: "Plateforme cloud",
  heroPositioning: "Nous construisons exclusivement sur GCP, par choix et avec des années de pratique. C’est le bon choix pour les équipes data européennes qui ont besoin de conformité, de portée mondiale et d’une des meilleures plateformes d’analyse du marché.",
  title2: "Comment nous l’utilisons",
  items: [
        "Concevoir l’architecture de projet GCP : gestion des accès (IAM), réseau (VPC) et facturation bien structurés",
        "Configurer les jeux de données BigQuery, les accès et la maîtrise des coûts (réservations de slots, sécurité par colonne)",
        "Mettre en place des fonctions Cloud Run et Cloud Scheduler pour les tâches planifiées légères et les intégrations d’API sur mesure",
        "Définir les règles de cycle de vie de Cloud Storage et les zones de dépôt des pipelines de collecte",
        "Conseiller sur la région GCP et les options de souveraineté pour l’hébergement dans l’UE (RGPD, Assured Workloads, S3NS)",
        "Mettre en place des tableaux de bord et des alertes Cloud Monitoring pour suivre la santé des pipelines et les coûts BigQuery",
      ],
  title3: "Quand GCP est le bon choix, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez GCP quand :',
          bullets: [
            'L’analyse est votre usage principal (BigQuery est l’entrepôt au meilleur rapport qualité-prix du marché)',
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
  p1: "Google Cloud Platform est l’ensemble de services cloud de Google. Pour la data, c’est une plateforme intégrée, du stockage (Cloud Storage, BigQuery) à la transformation (Dataform, Dataproc), à la visualisation (Looker) et à l’IA (Vertex AI, Gemini), conçue pour fonctionner ensemble sans code d’intégration sur mesure. Ses fonctions d’IA s’appuient sur les couches sémantiques que vous construisez dans Looker, Dataform et BigQuery : une plateforme data bien modélisée est aussi une infrastructure pour l’IA.",
  p2: "La plateforme d’analyse de GCP est la plus cohérente du marché. BigQuery seul change la façon de penser la donnée : serverless, rapide et économique à la bonne échelle. L’intégration étroite entre les services fait gagner du temps de dépannage.",
  p3: "Pour les clients européens, GCP propose trois niveaux de souveraineté des données : l’hébergement régional standard, Assured Workloads pour l’UE (stockage, traitement et support exclusivement dans l’UE) et des partenariats souverains comme S3NS (Thales + Google, aligné sur SecNumCloud, en France). Ils comptent dès que le RGPD, un secteur réglementé ou un appel d’offres l’exige.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
  whenIntro: "Nous construisons uniquement sur GCP, mais GCP ne convient pas à tout le monde.",
};

export default copy;
