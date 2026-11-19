import type { Copy } from './dagster.en';

const copy: Copy = {
  title: "Consultant Dagster, orchestration de pipelines | Nimzo Data",
  description: "Consultant Dagster pour orchestrer vos pipelines de données : pipelines orientés assets, contrôles de qualité des données, alertes et déploiement sur Dagster Cloud ou GCP.",
  toolCategory: "Orchestration",
  heroPositioning: "Une orchestration par assets. Dépendances, contrôles de qualité et planification sont définis dans le code, avec le meilleur confort de développement du marché.",
  title2: "Comment nous l’utilisons",
  items: [
        "Orchestrer des scripts Python sur mesure en plusieurs étapes, avec dépendances explicites et contrôles de qualité entre chaque étape",
        "Définir et suivre les « assets » : les tables et fichiers que produit votre pipeline, pas seulement les tâches qui les construisent",
        "Piloter dbt Core en parallèle de pipelines sur mesure, quand le planificateur de dbt Cloud ne suffit pas",
        "Utiliser Dagster Components et la CLI dg pour des pipelines définis en YAML, lisibles par des humains et adaptés aux agents de code IA",
        "Mettre en place Dagster Cloud (hébergement managé) quand le client ne veut pas maintenir d’infrastructure GKE",
        "Brancher les alertes Dagster sur Slack, PagerDuty ou l’e-mail, là où votre équipe regarde déjà",
      ],
  title3: "Quand Dagster est le bon orchestrateur, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Dagster quand :',
          bullets: [
            'Vous avez au moins 4 pipelines sur mesure qui dépendent les uns des autres',
            'Vous voulez des contrôles de qualité des données à part entière dans le pipeline',
            'Vous voulez l’orchestrateur le plus agréable pour vos développeurs',
          ],
        },
        {
          heading: 'Pas besoin d’orchestrateur quand :',
          bullets: [
            'Votre plateforme est Airbyte + Dataform + un outil de BI : chaque outil se planifie tout seul',
            "Aucun pipeline sur mesure à coordonner entre plusieurs outils",
          ],
        },
        {
          heading: 'Choisissez des fonctions Cloud Run + Cloud Scheduler quand :',
          bullets: [
            'Vous avez 1 à 3 scripts planifiés simples, indépendants les uns des autres',
            "Aucune dépendance à gérer entre eux",
          ],
        },
        {
          heading: 'Choisissez Airflow quand :',
          bullets: [
            "Vous êtes déjà équipé d’Airflow, avec un investissement opérationnel conséquent",
            "Le coût du changement dépasse les avantages de Dagster",
          ],
        },
      ],
  p1: "Dagster est un orchestrateur de données moderne : l’outil qui chapeaute vos pipelines et vos transformations : il les planifie, gère leurs dépendances, relance ce qui a échoué et montre ce qui a tourné, quand, et pourquoi quelque chose est tombé en panne. Concurrent d’Airflow et de Prefect, il mise davantage sur la qualité des données et le confort de développement. Les dernières versions ajoutent Dagster Components (pipelines écrits en YAML, adaptés aux agents de code IA) et un serveur MCP pour l’intégration directe avec des outils comme Claude Code et Cursor.",
  p2: "La plupart de nos projets n’ont pas besoin d’orchestration. Airbyte et Dataform se planifient eux-mêmes, et pour une plateforme simple, ajouter un orchestrateur serait surdimensionné. Quand l’orchestration est nécessaire (scripts sur mesure avec dépendances, contrôles de qualité poussés, coordination entre pipelines), Dagster est nettement supérieur à Airflow : produit mieux conçu, interface réellement utilisable, et un modèle par assets qui correspond à la façon dont les équipes data pensent leurs pipelines.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
