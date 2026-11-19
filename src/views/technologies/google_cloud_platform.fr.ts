import type { Copy } from './google_cloud_platform.en';

const copy: Copy = {
  title: "Consultant data Google Cloud (GCP) | Nimzo Data",
  description: "Nous ne construisons que sur Google Cloud : BigQuery, Dataform, Cloud Storage et l’outil de BI adapté à votre équipe. Pour les PME et ETI en croissance.",
  toolCategory: "Plateforme cloud",
  heroPositioning: "Nous ne construisons que sur Google Cloud. Nous l’avons choisi en connaissance de cause, puis passé des années à le maîtriser. Pour une équipe data européenne, il offre l’hébergement dans l’UE et une stack analytique intégrée.",
  title2: "Comment nous l’utilisons",
  items: [
        "Organiser vos projets Google Cloud : accès (IAM), réseau (VPC) et facturation",
        "Configurer les jeux de données BigQuery, les accès et la maîtrise des coûts (réservations de slots, sécurité par colonne)",
        "Mettre en place des fonctions Cloud Run et Cloud Scheduler pour les tâches planifiées légères et les intégrations d’API sur mesure",
        "Configurer Cloud Storage : où arrivent les fichiers bruts et combien de temps ils sont conservés",
        "Conseiller sur la région Google Cloud et les options de souveraineté pour l’hébergement dans l’UE (RGPD, Assured Workloads, S3NS)",
        "Surveiller l’état des pipelines et les coûts BigQuery avec des tableaux de bord et des alertes Cloud Monitoring",
      ],
  title3: "Quand Google Cloud est le bon choix, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Google Cloud quand :',
          bullets: [
            'Votre usage principal est l’analyse de données (reporting, tableaux de bord) : BigQuery est l’un des meilleurs choix sur ce terrain',
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
            'Vous avez besoin du catalogue de services le plus étendu, pour une grande organisation',
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
  p1: "Google Cloud Platform est l’ensemble de services cloud de Google. Pour la data, c’est une plateforme intégrée (Cloud Storage, BigQuery, Dataform, Looker, Vertex AI, Gemini) dont les services se connectent sans code d’intégration sur mesure. Les fonctions d’IA de Google s’appuient sur les tables et définitions que vous construisez dans BigQuery, Dataform et Looker. Une plateforme bien modélisée prépare donc aussi l’IA.",
  p2: "La stack analytique de Google Cloud est très intégrée. BigQuery est serverless et rapide, et il reste économique tant que vos volumes sont modestes à moyens. Comme les services de Google Cloud s’intègrent bien entre eux, on passe moins de temps à dépanner l’infrastructure.",
  p3: "Pour les clients européens, Google Cloud propose trois niveaux de souveraineté des données : l’hébergement régional standard, Assured Workloads pour l’UE (stockage, traitement et support exclusivement dans l’UE) et une offre souveraine comme S3NS, en France (portée par Thales et Google, alignée sur SecNumCloud). Ces niveaux comptent dès que le RGPD, un secteur réglementé ou un appel d’offres entre en jeu.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
  whenIntro: "Nous construisons uniquement sur Google Cloud, mais il ne convient pas à tout le monde.",
};

export default copy;
