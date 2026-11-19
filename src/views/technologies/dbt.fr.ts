import type { Copy } from './dbt.en';

const copy: Copy = {
  title: "Consultant dbt sur BigQuery | Nimzo Data",
  description: "Mise en place de dbt sur BigQuery : architecture de projet, couches staging et marts, tests de données, CI/CD et formation des équipes.",
  toolCategory: "Transformation SQL",
  heroPositioning: "dbt est notre choix quand vous voulez un outil open source qui marche sur d’autres entrepôts, ou que vous l’utilisez déjà : modèles testés, versionnés et documentés dans le code.",
  title2: "Comment nous l’utilisons",
  items: [
        "Construire et restructurer des projets dbt selon la convention de couches staging → intermédiaires → marts",
        "Écrire des macros SQL en Jinja pour réutiliser la logique de transformation",
        "Mettre en place des tests dbt (non nul, unicité, intégrité référentielle, tests sur mesure) sur les modèles critiques",
        "Configurer la documentation dbt et les graphes de lignage, pour que les nouveaux arrivants suivent le parcours des données",
        "Paramétrer des jobs dbt Cloud avec CI/CD : lancer les tests sur chaque pull request avant la fusion",
        "Connecter le serveur MCP de dbt aux outils d’IA du client (Claude, Cursor), pour interroger en langage naturel des indicateurs gouvernés",
      ],
  title3: "dbt ou Dataform ?",
  blocks: [
        {
          heading: 'Choisissez dbt quand :',
          bullets: [
            'Vous avez déjà investi dans dbt (projets, CI/CD, compétences de l’équipe)',
            'Vous utilisez aussi Snowflake, ou vous pourriez changer de cloud plus tard',
            'Votre équipe travaille déjà dans dbt tous les jours',
          ],
        },
        {
          heading: 'Choisissez dbt Cloud quand :',
          bullets: [
            'Vous voulez un CI/CD managé, la documentation hébergée et la couche sémantique, sans les monter vous-même',
            "Vous acceptez de payer à partir d’environ 100 $ par développeur et par mois",
          ],
        },
        {
          heading: 'Choisissez dbt Core quand :',
          bullets: [
            'Vous ne voulez pas payer dbt Cloud',
            "Vous acceptez de gérer l’ordonnancement vous-même (en général Dagster ou GitHub Actions)",
          ],
        },
        {
          heading: 'Choisissez plutôt Dataform quand :',
          bullets: [
            "Vous êtes uniquement sur Google Cloud, sans projet multi-cloud",
            'Votre équipe débute dans la transformation des données en SQL',
            'Vous ne voulez pas avoir d’ordonnanceur à gérer',
          ],
        },
      ],
  p1: "dbt (data build tool) est un outil open source très répandu pour la transformation de données en SQL. Il compile des modèles SQL (avec Jinja) en requêtes exécutées dans l’entrepôt, gère les dépendances, lance les tests et génère la documentation automatiquement. Il fonctionne avec BigQuery, Snowflake, Redshift et d’autres. Les dernières versions ajoutent dbt Copilot (assistance IA pour le SQL, disponible sur les offres payantes) et le moteur Fusion (écrit en Rust, encore en préversion sur BigQuery). La couche sémantique (Semantic Layer), qui repose sur MetricFlow, est désormais disponible pour tous.",
  p2: "Le serveur MCP officiel de dbt laisse des outils d’IA (Claude, Cursor) interroger vos indicateurs MetricFlow. L’IA ne rédige pas le SQL : MetricFlow le génère à partir des définitions, ce qui rend les réponses fiables.",
  p3: "Si vous avez déjà des projets dbt, des besoins multi-cloud ou une équipe qui le maîtrise, nous travaillons avec dbt, sans vous faire migrer. Avec dbt Cloud, l’exécution et le suivi des jobs sont gérés pour vous, comme Dataform le fait en standard sur Google Cloud.",
  p4: "Une réserve : Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Pour les clients qui utilisent déjà Fivetran et dbt, c’est pratique, mais cela les rend un peu plus dépendants d’un seul éditeur. Airbyte avec Dataform (ou dbt Core) garde collecte et transformation chez des éditeurs différents.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
