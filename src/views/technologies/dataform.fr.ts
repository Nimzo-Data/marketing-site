import type { Copy } from './dataform.en';

const copy: Copy = {
  tamesonQuote: "Quand Antoine a commencé avec nous, la plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. Le socle Dataform qu’il a contribué à bâtir a complètement changé la donne.",
  title: "Consultant Dataform, transformation SQL BigQuery | Nimzo Data",
  description: "Consultant Dataform pour BigQuery : transformation SQL, modélisation SQLX, modèles incrémentaux, tests de qualité des données et mise en production.",
  toolCategory: "Transformation SQL",
  heroPositioning: "Dataform est notre premier choix pour organiser le SQL sur GCP : vos tables brutes BigQuery deviennent des modèles testés, versionnés dans Git.",
  title2: "Comment nous l’utilisons",
  items: [
        "Migrer des scripts SQL en vrac vers des projets Dataform structurés, avec des couches claires : staging, intermédiaire, marts et rapports",
        "Mettre en place des modèles incrémentaux qui ne traitent que les nouvelles données, pour réduire la facture BigQuery",
        "Écrire des assertions et des tests SQLX qui détectent les problèmes de qualité avant les tableaux de bord",
        "Déployer en production à partir d’un tag Git, pour savoir exactement ce qui tourne",
        "Paramétrer dev, staging et prod à partir du même code",
        "Mettre en place une gouvernance CI/CD : classification des changements de schéma, validation avant push et contrôles automatiques qui bloquent les modifications risquées",
      ],
  title3: "Dataform ou dbt ?",
  blocks: [
        {
          heading: 'Choisissez Dataform quand :',
          bullets: [
            "Vous êtes sur GCP et n’avez pas besoin de portabilité entre clouds",
            "Votre équipe n’a pas encore investi dans dbt",
            'Vous voulez le chemin le plus simple des données brutes au reporting',
            "Vous ne voulez pas payer de licence en plus de BigQuery",
          ],
        },
        {
          heading: 'Choisissez dbt Cloud quand :',
          bullets: [
            'Vous voulez la meilleure expérience développeur du marché',
            'Votre équipe travaille déjà dans dbt tous les jours',
            'Vous voulez pouvoir passer plus tard à Snowflake ou à un autre entrepôt',
          ],
        },
        {
          heading: 'Choisissez dbt Core quand :',
          bullets: [
            'Vous voulez dbt en open source, sans payer dbt Cloud',
            "Vous montez vous-même l’orchestration (en général Dagster ou GitHub Actions)",
          ],
        },
      ],
  metric: "Plus de 10 sources modélisées dans une plateforme Dataform en couches.",
  body: "En cours depuis juin 2024.",
  p1: "Dataform est l’outil de transformation SQL managé de Google, intégré nativement à la console GCP. Il permet d’écrire des transformations SQL modulaires (fichiers SQLX), de définir les dépendances entre tables, de tester vos données et de déployer via Git, sans quitter BigQuery. Gemini y est intégré pour générer du SQLX et corriger les erreurs.",
  p2: "Sur GCP, Dataform est le chemin le plus direct vers du SQL bien structuré. Pas d’orchestrateur externe : Dataform gère planification, dépendances et relances. Grâce à l’intégration à GCP, pas d’identifiants à gérer, et la facturation passe par votre compte BigQuery existant.",
  p3: "Un outil d’IA qui interroge vos données passe par les modèles construits dans Dataform : plus ils sont propres, plus ses réponses sont justes.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
