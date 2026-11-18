import type { Copy } from './dagster.en';

const copy: Copy = {
  title: "Consultant Dagster, orchestration de pipelines | Nimzo Data",
  description: "Orchestration Dagster pour pipelines de données complexes : modélisation par assets, contrôles de qualité des données et déploiement Dagster Cloud sur GCP.",
  toolCategory: "Orchestration",
  heroPositioning: "Une orchestration par assets pour vos pipelines. Dépendances, contrôles de qualité et planification sont définis dans le code, avec la meilleure expérience développeur de la catégorie.",
  title2: "Comment nous l’utilisons",
  items: [
        "Orchestrer des scripts Python sur mesure en plusieurs étapes, avec des dépendances explicites et des contrôles de qualité entre chaque étape",
        "Définir et suivre les « assets » : les tables et fichiers que produit réellement votre pipeline, et pas seulement les tâches qui les construisent",
        "Piloter les exécutions de dbt Core en parallèle de pipelines sur mesure, quand le planificateur de dbt Cloud ne suffit pas",
        "Utiliser Dagster Components et la CLI dg pour des pipelines définis en YAML, lisibles par des humains et adaptés aux agents de code IA",
        "Mettre en place Dagster Cloud pour l’hébergement managé, quand le client ne veut pas maintenir une infrastructure GKE",
        "Brancher les alertes Dagster sur Slack, PagerDuty ou l’e-mail, pour que les échecs remontent là où votre équipe regarde déjà",
      ],
  title3: "Quand Dagster est le bon orchestrateur, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Dagster quand :',
          bullets: [
            'Vous avez au moins 4 pipelines sur mesure qui dépendent les uns des autres',
            'Vous voulez des contrôles de qualité des données comme éléments à part entière du pipeline',
            'Vous voulez la meilleure expérience développeur en orchestration',
          ],
        },
        {
          heading: 'Pas besoin d’orchestrateur quand :',
          bullets: [
            'Votre plateforme est Airbyte + Dataform + un outil de BI. Chaque outil se planifie tout seul',
            "Vous n’avez pas de pipelines sur mesure à coordonner entre plusieurs outils",
          ],
        },
        {
          heading: 'Choisissez des fonctions Cloud Run + Cloud Scheduler quand :',
          bullets: [
            'Vous avez 1 à 3 scripts planifiés simples, indépendants les uns des autres',
            "Vous n’avez pas besoin de gérer des dépendances entre eux",
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
  p1: "Dagster est un orchestrateur de données moderne : l’outil qui chapeaute vos pipelines et vos transformations pour les planifier, gérer leurs dépendances, relancer les échecs et vous montrer ce qui a tourné, quand, et pourquoi quelque chose a cassé. Il concurrence Airflow et Prefect, avec une attention plus forte à la qualité des données et à l’expérience développeur. Les dernières versions ajoutent Dagster Components (pipelines écrits en YAML, adaptés aux agents de code IA) et un serveur MCP pour l’intégration directe avec des outils comme Claude Code et Cursor.",
  p2: "La plupart de nos projets n’ont pas besoin d’orchestration. Airbyte et Dataform se planifient eux-mêmes, et pour une plateforme simple, ajouter un orchestrateur serait du sur-dimensionnement. Quand l’orchestration est vraiment nécessaire (scripts sur mesure avec dépendances, contrôles de qualité poussés, coordination entre pipelines), Dagster est la nette amélioration par rapport à Airflow. La qualité d’ingénierie est sensiblement supérieure, l’interface est réellement utilisable, et le modèle par assets correspond à la façon dont les équipes data pensent leurs pipelines.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
