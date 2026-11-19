import type { Copy } from './dagster.en';

const copy: Copy = {
  title: "Consultant Dagster, orchestration de pipelines | Nimzo Data",
  description: "Consultant Dagster pour orchestrer vos pipelines de données : pipelines orientés assets, contrôles de qualité des données, alertes et déploiement sur Dagster Cloud ou Google Cloud.",
  toolCategory: "Orchestration",
  heroPositioning: "Dagster pilote vos pipelines à partir des données qu’ils produisent (les assets). Dépendances, contrôles de qualité et planification sont écrits dans le code.",
  title2: "Comment nous l’utilisons",
  items: [
        "Orchestrer des scripts Python sur mesure en plusieurs étapes, avec dépendances explicites et contrôles de qualité entre chaque étape",
        "Définir et suivre les « assets » : les tables et fichiers que produit votre pipeline, pas seulement les tâches qui les construisent",
        "Lancer dbt Core depuis le même orchestrateur que vos pipelines sur mesure, quand le planificateur de dbt Cloud ne suffit pas",
        "Utiliser Dagster Components et la CLI dg pour des pipelines définis en YAML, faciles à relire par votre équipe comme par un agent de code IA",
        "Mettre en place Dagster Cloud (hébergement managé) quand le client ne veut pas maintenir d’infrastructure GKE",
        "Envoyer les alertes Dagster par Slack, PagerDuty ou e-mail, là où votre équipe regarde déjà",
      ],
  title3: "Quand Dagster est le bon orchestrateur, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Dagster quand :',
          bullets: [
            'Vous avez au moins 4 pipelines sur mesure qui dépendent les uns des autres',
            'Vous voulez des contrôles de qualité des données à part entière dans le pipeline',
            'Vos développeurs y travailleront tous les jours et le confort de développement compte pour eux',
          ],
        },
        {
          heading: 'Pas besoin d’orchestrateur quand :',
          bullets: [
            'Votre plateforme est Airbyte + Dataform + un outil de BI : chaque outil se planifie tout seul',
            "Il n’y a pas de pipeline sur mesure à coordonner entre vos outils",
          ],
        },
        {
          heading: 'Choisissez des fonctions Cloud Run + Cloud Scheduler quand :',
          bullets: [
            'Vous avez 1 à 3 scripts planifiés simples, indépendants les uns des autres',
            "Vous n’avez pas besoin de gérer des dépendances entre ces scripts",
          ],
        },
        {
          heading: 'Choisissez Airflow quand :',
          bullets: [
            "Vous utilisez déjà Airflow et vous avez beaucoup investi pour le faire tourner",
            "Migrer vous coûterait plus cher que ce que Dagster vous apporterait",
          ],
        },
      ],
  p1: "Dagster est un orchestrateur : il planifie vos pipelines, gère leurs dépendances, relance ce qui a échoué et montre ce qui a tourné, quand et pourquoi une panne est survenue. Concurrent d’Airflow et de Prefect, il mise davantage sur la qualité des données et le confort de développement. Les dernières versions ajoutent Dagster Components (pipelines écrits en YAML, adaptés aux agents de code IA) et un serveur MCP pour piloter Dagster directement depuis des outils comme Claude Code et Cursor.",
  p2: "La plupart de nos projets n’ont pas besoin d’orchestration. Airbyte et Dataform se planifient eux-mêmes, et pour une plateforme simple, ajouter un orchestrateur serait surdimensionné. Quand l’orchestration est nécessaire (scripts sur mesure avec dépendances, contrôles de qualité poussés, coordination entre pipelines), nous préférons Dagster à Airflow : son interface est plus claire et son modèle par assets correspond à la façon dont les équipes data pensent leurs pipelines.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
