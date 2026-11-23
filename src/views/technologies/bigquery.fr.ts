import type { Copy } from './bigquery.en';

const copy: Copy = {
  tamesonQuote: "Quand Antoine a commencé avec nous, la plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. Le socle Dataform qu’il a aidé à construire … a complètement changé la donne.",
  title: "Expert BigQuery, consultant GCP | Nimzo Data",
  description: "Experts BigQuery : modélisation, optimisation des requêtes SQL, maîtrise des coûts et sécurité par colonne. Entrepôt de données sur Google Cloud.",
  toolCategory: "Entrepôt de données",
  heroPositioning: "BigQuery stocke et interroge vos données. Nous concevons les tables, réécrivons les requêtes lentes et gardons la facture sous contrôle.",
  title2: "Comment nous l’utilisons",
  items: [
        "Concevoir des tables partitionnées et clusterisées, pour un coût de requêtes prévisible",
        "Écrire et optimiser du SQL complexe : fonctions de fenêtrage, structures imbriquées, traitement de JSON, chargements incrémentaux",
        "Sécuriser par colonne et par ligne les jeux de données multi-clients",
        "Configurer les réservations et engagements de slots pour les équipes qui quittent la facturation à la demande",
        "Auditer et réécrire les requêtes lentes ou coûteuses : en général 60 à 90 % de réduction de coût sur les requêtes réécrites",
        "Appeler Gemini depuis le SQL (AI.GENERATE, AI.CLASSIFY…) pour classer ou résumer du texte dans l’entrepôt",
      ],
  title3: "Quand BigQuery est le bon entrepôt, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez BigQuery quand :',
          bullets: [
            'Vous faites surtout de l’analyse, pas de transactions applicatives',
            'Vous voulez payer à l’usage, sans serveur qui tourne à vide',
            "Vous êtes déjà sur Google Cloud, ou vous comptez l’être",
            "Vous avez besoin de données hébergées en Europe, avec un stockage multirégion dans l’UE",
            'Vous voulez de l’IA dans l’entrepôt, sans plateforme de machine learning à part',
          ],
        },
        {
          heading: 'Choisissez Snowflake quand :',
          bullets: [
            'Vous avez besoin de dimensionner finement les ressources, ou d’isoler la puissance de calcul par usage',
            "Vous êtes multi-cloud et il vous faut un entrepôt qui tourne sur les trois grands clouds",
            'Vous avez besoin de fonctions propres à Snowflake (Snowpark, clonage sans copie, partage de données)',
          ],
        },
        {
          heading: 'Choisissez Databricks quand :',
          bullets: [
            'Le machine learning et la data science passent avant le reporting analytique',
            'Vous exploitez des pipelines Spark ou vous voulez un environnement centré sur les notebooks',
            'Une architecture lakehouse avec Delta Lake est une exigence explicite',
          ],
        },
        {
          heading: 'Choisissez Redshift quand :',
          bullets: [
            "Vous avez beaucoup investi dans AWS et le coût des transferts de données pèse plus que la qualité de l’entrepôt",
            'Votre équipe maîtrise déjà Redshift et une migration rapporterait peu',
          ],
        },
      ],
  metric: "Plus de 10 sources modélisées dans une plateforme Dataform en couches.",
  body: "En cours depuis juin 2024.",
  p1: "BigQuery est l’entrepôt de données (data warehouse) serverless et entièrement géré de Google. Il interroge des téraoctets en quelques secondes, sans infrastructure à gérer. Il intègre Gemini : on peut utiliser l’IA directement en SQL et explorer vos données en langage naturel (Data Canvas). La fiabilité des réponses de l’IA dépend de la qualité de votre modélisation : un entrepôt bien structuré, avec une couche sémantique gouvernée, donne des réponses utiles plutôt que des erreurs présentées avec aplomb.",
  p2: "Nous l’avons choisi parce que son coût reste prévisible quand les volumes grandissent. Le partitionnement et le clustering s’y mettent en place simplement, et Dataform, Looker et dbt s’y branchent directement. Pour une entreprise européenne, le stockage multirégion dans l’UE est natif.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
