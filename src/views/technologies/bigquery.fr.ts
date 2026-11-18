import type { Copy } from './bigquery.en';

const copy: Copy = {
  tamesonQuote: "Quand Antoine a commencé avec nous, la plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. Le socle Dataform qu’il a contribué à bâtir a complètement changé la donne.",
  title: "Expert BigQuery, consultant GCP | Nimzo Data",
  description: "Experts BigQuery : conception de schémas, optimisation des requêtes, maîtrise des coûts et sécurité au niveau des colonnes. Conseil data sur Google Cloud.",
  toolCategory: "Entrepôt de données",
  heroPositioning: "BigQuery, c’est là que vivent vos données. Nous construisons les schémas, optimisons les requêtes et maîtrisons les coûts pour que cela dure.",
  title2: "Comment nous l’utilisons",
  items: [
        "Concevoir des tables partitionnées et clusterisées, pour garder des coûts de requêtes prévisibles",
        "Écrire et optimiser du SQL complexe : fonctions de fenêtrage, structures imbriquées, lecture de JSON, logique incrémentale",
        "Mettre en place la sécurité au niveau des colonnes et des lignes pour les jeux de données multi-clients",
        "Configurer les réservations et engagements de slots pour les équipes qui quittent la facturation à la demande",
        "Auditer les requêtes lentes ou coûteuses et les réécrire, avec en général 60 à 90 % de réduction de coût sur les requêtes réécrites",
        "Utiliser Gemini dans BigQuery quand c’est pertinent : AI.GENERATE, AI.CLASSIFY et d’autres fonctions d’IA en SQL, directement dans l’entrepôt",
      ],
  title3: "Quand BigQuery est le bon entrepôt, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez BigQuery quand :',
          bullets: [
            'L’analyse est votre usage principal (des requêtes SQL, pas des transactions applicatives)',
            'Vous voulez une facturation serverless qui part de zéro, sans serveur inactif à payer',
            "Vous êtes déjà sur GCP, ou vous comptez l’être",
            "Vous avez besoin de données hébergées en Europe, avec un stockage multi-région propre",
            'Vous voulez de l’IA dans l’entrepôt, sans ajouter une plateforme de machine learning à part',
          ],
        },
        {
          heading: 'Choisissez Snowflake quand :',
          bullets: [
            'Vous avez besoin de dimensionner finement les ressources, ou d’isoler la puissance de calcul par usage',
            "Vous êtes multi-cloud et il vous faut un entrepôt qui tourne sur les trois grands clouds",
            'Des fonctions propres à Snowflake comptent (Snowpark, clonage sans copie, partage de données)',
          ],
        },
        {
          heading: 'Choisissez Databricks quand :',
          bullets: [
            'Le machine learning et la data science sont l’usage principal, plus que le reporting analytique',
            'Vous exploitez des pipelines Spark ou vous voulez un environnement centré sur les notebooks',
            'Une architecture lakehouse avec Delta Lake est une exigence explicite',
          ],
        },
        {
          heading: 'Choisissez Redshift quand :',
          bullets: [
            "Vous êtes très investi sur AWS et le coût des transferts de données pèse plus que la qualité de l’entrepôt",
            'Votre équipe maîtrise déjà Redshift et une migration rapporterait peu',
          ],
        },
      ],
  metric: "Plus de 10 sources modélisées dans une plateforme Dataform en couches.",
  body: "En cours depuis juin 2024.",
  p1: "BigQuery est l’entrepôt de données (data warehouse) serverless et entièrement managé de Google. Il interroge des téraoctets en quelques secondes, sans infrastructure à gérer. Son stockage en colonnes et son moteur de requêtes distribué le rendent rapide pour l’analyse, dès le départ. Les dernières versions intègrent Gemini de bout en bout : fonctions d’IA en SQL, Data Canvas pour explorer en langage naturel, analyse conversationnelle. La fiabilité de l’IA dépend de la qualité de votre modélisation : un entrepôt BigQuery bien structuré, avec une couche sémantique gouvernée, c’est ce qui sépare une IA utile d’une IA qui hallucine avec aplomb.",
  p2: "Chaque grand cloud a son entrepôt de données. BigQuery est celui où le coût reste prévisible à grande échelle, où le partitionnement et le clustering se configurent sans cérémonie, et dont l’écosystème d’outils (Dataform, Looker, dbt) est pensé autour de lui. Pour les entreprises européennes, BigQuery propose aussi nativement un stockage multi-région dans l’UE.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
