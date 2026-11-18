import type { Copy } from './dataform.en';

const copy: Copy = {
  tamesonQuote: "Quand Antoine a commencé avec nous, la plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. Le socle Dataform qu’il a contribué à bâtir a complètement changé la donne.",
  title: "Consultant Dataform, transformation SQL BigQuery | Nimzo Data",
  description: "Consultant Dataform pour BigQuery : transformation SQL, modélisation SQLX, modèles incrémentaux, tests de qualité des données et mise en production.",
  toolCategory: "Transformation SQL",
  heroPositioning: "Dataform est notre premier choix pour la transformation SQL sur GCP. Il transforme les données brutes de BigQuery en modèles d’analyse fiables, versionnés, prêts pour la production.",
  title2: "Comment nous l’utilisons",
  items: [
        "Migrer des scripts SQL en vrac vers des projets Dataform structurés, avec des couches claires : staging, intermédiaire, marts et rapports",
        "Mettre en place des modèles incrémentaux qui ne traitent que les nouvelles données, pour réduire nettement la facture BigQuery",
        "Écrire des assertions et des tests SQLX qui détectent les problèmes de qualité avant qu’ils n’atteignent les tableaux de bord",
        "Déclencher les mises en production à partir de tags Git, pour des déploiements maîtrisés",
        "Configurer les variables de compilation Dataform pour une logique propre à chaque environnement (dev, staging, prod)",
        "Mettre en place une gouvernance CI/CD : classification des changements de schéma, validation avant push et contrôles automatiques qui bloquent les modifications risquées",
      ],
  title3: "Dataform ou dbt ?",
  blocks: [
        {
          heading: 'Choisissez Dataform quand :',
          bullets: [
            "Vous êtes sur GCP et vous n’avez pas besoin de portabilité entre clouds",
            "Votre équipe n’a pas déjà investi dans dbt",
            'Vous voulez le chemin le plus simple des données brutes à la couche de reporting',
            "Vous préférez l’intégration native à BigQuery à la portabilité",
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
            "Vous êtes à l’aise pour monter votre propre orchestration (en général Dagster ou GitHub Actions)",
          ],
        },
      ],
  metric: "Plus de 10 sources modélisées dans une plateforme Dataform en couches.",
  body: "En cours depuis juin 2024.",
  p1: "Dataform est l’outil de transformation SQL managé de Google, intégré nativement à la console GCP. Il permet d’écrire des chaînes de transformation SQL modulaires (fichiers SQLX), de définir les dépendances entre tables, de tester vos données et de déployer les changements via Git, sans quitter BigQuery. Gemini y est intégré pour générer du SQLX et corriger les erreurs.",
  p2: "Pour les équipes qui travaillent sur GCP, Dataform est le chemin le plus direct vers du SQL bien structuré. Pas d’orchestrateur externe : Dataform gère planification, dépendances et relances. L’intégration à GCP évite d’avoir des identifiants à gérer, et la facturation passe directement par votre compte BigQuery existant.",
  p3: "Les modèles que vous construisez dans Dataform deviennent la couche gouvernée sur laquelle s’appuient vos futures fonctions d’IA. Quand un outil d’IA interroge vos données, il interroge ces modèles. Des transformations propres, c’est le socle de l’IA.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
