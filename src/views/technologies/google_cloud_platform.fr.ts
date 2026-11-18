import type { Copy } from './google_cloud_platform.en';

const copy: Copy = {
  title: "Consultant data Google Cloud (GCP) | Nimzo Data",
  description: "Nous construisons exclusivement sur GCP : BigQuery, Dataform, Cloud Storage et l’outil de BI adapté à votre équipe. Conseil data sur Google Cloud pour les entreprises européennes.",
  toolCategory: "Plateforme cloud",
  heroPositioning: "Nous construisons exclusivement sur GCP. C’est un choix délibéré, et des années de pratique nous en ont donné la maîtrise : c’est le bon choix pour les équipes data européennes qui ont besoin de conformité, de portée mondiale et d’une plateforme d’analyse parmi les meilleures du marché.",
  title2: "Comment nous l’utilisons",
  items: [
        "Concevoir et mettre en place l’architecture de projet GCP, avec une gestion des accès (IAM), un réseau (VPC) et une facturation bien structurés",
        "Configurer les jeux de données BigQuery, les contrôles d’accès et la maîtrise des coûts (réservations de slots, sécurité au niveau des colonnes)",
        "Mettre en place des fonctions Cloud Run et Cloud Scheduler pour les tâches planifiées légères et les intégrations d’API sur mesure",
        "Définir les règles de cycle de vie de Cloud Storage et les zones de dépôt des données pour les pipelines de collecte",
        "Conseiller sur le choix de la région GCP et les options de souveraineté pour l’hébergement des données dans l’UE (RGPD, Assured Workloads, S3NS)",
        "Mettre en place des tableaux de bord Cloud Monitoring et des alertes pour suivre la santé des pipelines et les coûts BigQuery",
      ],
  title3: "Quand GCP est le bon choix, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez GCP quand :',
          bullets: [
            'Votre usage principal est l’analyse (BigQuery est l’entrepôt au meilleur rapport qualité-prix du marché)',
            'Vous avez besoin de données hébergées en Europe, avec un stockage multirégion dans l’UE',
            "Vous êtes déjà dans l’écosystème Google (Google Ads, GA4, Workspace)",
            'L’IA (Gemini, Vertex AI) fait partie de votre feuille de route data',
          ],
        },
        {
          heading: 'Choisissez AWS quand :',
          bullets: [
            "Vous exploitez des applications complexes sur Lambda, SQS, DynamoDB et le reste de l’écosystème AWS",
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
  p1: "Google Cloud Platform est l’ensemble de services cloud de Google. Pour la data, il offre une plateforme intégrée, du stockage (Cloud Storage, BigQuery) à la transformation (Dataform, Dataproc), à la visualisation (Looker) et à l’IA (Vertex AI, Gemini), le tout conçu pour fonctionner ensemble sans code d’intégration sur mesure. Les fonctions d’IA de GCP sont pensées pour s’appuyer sur les couches sémantiques que vous construisez dans Looker, Dataform et BigQuery. Une plateforme data bien modélisée est aussi une infrastructure pour l’IA.",
  p2: "La plateforme d’analyse de GCP est la plus cohérente du marché. BigQuery seul change la façon de penser la donnée : serverless, rapide et économique à la bonne échelle. L’intégration étroite entre les services fait gagner du temps sur le dépannage d’infrastructure.",
  p3: "Pour les clients européens en particulier, GCP propose aujourd’hui trois niveaux de souveraineté des données : l’hébergement régional standard, Assured Workloads pour l’UE (stockage, traitement et support exclusivement dans l’UE) et des partenariats souverains comme S3NS (Thales + Google, aligné sur SecNumCloud, en France). Ils comptent dès que le RGPD, un secteur réglementé ou un appel d’offres l’exige.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
  whenIntro: "Nous construisons uniquement sur GCP, mais cela ne veut pas dire que GCP convient à tout le monde.",
};

export default copy;
