import type { Copy } from './dataform.en';

const copy: Copy = {
  tamesonQuote: "Quand Antoine a commencé avec nous, la plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. Le socle Dataform qu’il a aidé à construire … a complètement changé la donne.",
  title: "Consultant Dataform, transformation SQL BigQuery | Nimzo Data",
  description: "Consultant Dataform pour BigQuery : transformation SQL, modélisation SQLX, modèles incrémentaux, tests de qualité des données et mise en production.",
  toolCategory: "Transformation SQL",
  heroPositioning: "Dataform est notre premier choix pour organiser le SQL sur Google Cloud : vos tables brutes BigQuery deviennent des modèles testés, versionnés dans Git.",
  title2: "Comment nous l’utilisons",
  items: [
        "Migrer des scripts SQL en vrac vers des projets Dataform structurés, avec des couches claires : staging, intermédiaires et marts",
        "Mettre en place des modèles incrémentaux qui ne traitent que les nouvelles données, pour réduire la facture BigQuery",
        "Écrire des assertions et des tests SQLX qui détectent les problèmes de qualité avant les tableaux de bord",
        "Planifier les mises en production à partir de tags Git, pour savoir exactement ce qui tourne",
        "Paramétrer dev, staging et prod à partir du même code",
        "Ajouter à la CI/CD des contrôles automatiques : les changements de schéma sont classés selon leur risque, le code est validé avant le push et les modifications risquées sont bloquées",
      ],
  title3: "Dataform ou dbt ?",
  blocks: [
        {
          heading: 'Choisissez Dataform quand :',
          bullets: [
            "Vous êtes sur Google Cloud et n’avez pas besoin de portabilité entre clouds",
            "Votre équipe n’a pas encore investi dans dbt",
            'Vous voulez aller le plus simplement possible des données brutes au reporting',
            "Vous ne voulez pas payer de licence en plus de BigQuery",
          ],
        },
        {
          heading: 'Choisissez dbt Cloud quand :',
          bullets: [
            'Vous voulez un environnement de développement plus complet (éditeur en ligne, documentation intégrée)',
            'Votre équipe travaille déjà dans dbt tous les jours',
            'Vous voulez pouvoir passer plus tard à Snowflake ou à un autre entrepôt de données',
          ],
        },
        {
          heading: 'Choisissez dbt Core quand :',
          bullets: [
            'Vous voulez dbt en open source, sans payer dbt Cloud',
            "Vous êtes à l’aise pour monter vous-même l’ordonnanceur (en général Dagster ou GitHub Actions)",
          ],
        },
      ],
  metric: "Plus de 10 sources modélisées dans une plateforme Dataform en couches.",
  body: "En cours depuis juin 2024.",
  p1: "Dataform est le service géré de transformation SQL de Google, intégré nativement à la console Google Cloud. Il permet d’écrire des transformations SQL modulaires (fichiers SQLX), de définir les dépendances entre tables, de tester vos données et de déployer via Git, sans quitter BigQuery. Gemini y est intégré pour générer du SQLX et corriger les erreurs.",
  p2: "Sur Google Cloud, Dataform est le moyen le plus direct d’avoir des modèles SQL en couches et testés. Pas d’ordonnanceur externe : Dataform gère planification, dépendances et relances. Comme Dataform est intégré à Google Cloud, vous n’avez pas d’identifiants à gérer, et la facturation passe par votre compte BigQuery existant.",
  p3: "Un outil d’IA qui interroge vos données s’appuie sur les modèles construits dans Dataform : mieux ils sont testés et documentés, plus ses réponses sont fiables.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
