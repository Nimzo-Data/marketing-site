import type { Copy } from './dbt.en';

const copy: Copy = {
  title: "Consultant dbt sur BigQuery | Nimzo Data",
  description: "Mise en place de dbt sur BigQuery : architecture de projet, couches staging et marts, tests de données, CI/CD et formation des équipes.",
  toolCategory: "Transformation SQL",
  heroPositioning: "Quand un client veut la portabilité de l’open source ou travaille déjà avec dbt, même rigueur : modèles testés, versionnés, documentation écrite dans le code.",
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
            'Vous avez besoin de portabilité entre clouds (BigQuery + Snowflake, ou un changement futur)',
            'Votre équipe travaille déjà dans dbt tous les jours',
          ],
        },
        {
          heading: 'Choisissez dbt Cloud quand :',
          bullets: [
            'Vous voulez un CI/CD managé, la documentation hébergée et la couche d’indicateurs, sans les monter vous-même',
            "Le prix vous convient (à partir d’environ 100 $ par développeur et par mois)",
          ],
        },
        {
          heading: 'Choisissez dbt Core quand :',
          bullets: [
            'Votre budget exclut dbt Cloud',
            "Vous acceptez de gérer l’orchestration vous-même (en général Dagster ou GitHub Actions)",
          ],
        },
        {
          heading: 'Choisissez plutôt Dataform quand :',
          bullets: [
            "Vous êtes uniquement sur GCP, sans projet multi-cloud",
            'Votre équipe découvre l’analytics engineering',
            'Vous voulez éviter toute couche d’orchestration',
          ],
        },
      ],
  p1: "dbt (data build tool) est le standard open source de la transformation de données en SQL. Il compile des modèles SQL (avec Jinja) en requêtes exécutées dans l’entrepôt, gère les dépendances, lance les tests et génère la documentation automatiquement. Il fonctionne avec BigQuery, Snowflake, Redshift et d’autres. Les dernières versions ajoutent dbt Copilot (assistance IA pour le SQL, disponible sur les offres payantes), le moteur Fusion (écrit en Rust, bientôt en disponibilité générale et déjà utilisé par défaut sur les nouveaux projets dbt Cloud) et une Semantic Layer désormais en disponibilité générale, propulsée par MetricFlow.",
  p2: "La Semantic Layer de dbt est le socle de la fiabilité de l’IA dans la plateforme data. Le serveur MCP officiel permet aux outils d’IA (Claude, Cursor) d’interroger directement les définitions MetricFlow. Le modèle de langage n’écrit jamais de SQL brut : MetricFlow compile des requêtes gouvernées à partir des définitions d’indicateurs.",
  p3: "dbt est l’outil de transformation le plus répandu dans le data engineering moderne. Quand un client a déjà des projets dbt, des besoins multi-cloud ou une équipe qui maîtrise dbt, nous travaillons dans cet écosystème plutôt que d’imposer une migration. dbt Cloud offre aussi un fonctionnement entièrement managé, proche de ce que Dataform fait en natif sur GCP.",
  p4: "Une réserve : Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Ce rapprochement est pratique pour les clients sur Fivetran + dbt, mais il crée un risque de dépendance à un seul éditeur. Airbyte avec Dataform (ou dbt Core) garde collecte et transformation chez des éditeurs différents.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
