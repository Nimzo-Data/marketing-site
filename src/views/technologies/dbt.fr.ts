import type { Copy } from './dbt.en';

const copy: Copy = {
  title: "Consultant dbt sur BigQuery | Nimzo Data",
  description: "Mise en place de dbt sur BigQuery : architecture de projet, couches staging et marts, tests de données, CI/CD et formation des équipes.",
  toolCategory: "Transformation SQL",
  heroPositioning: "Quand un client veut la portabilité de l’open source ou travaille déjà avec dbt, nous apportons la même rigueur : des modèles testés, versionnés, et une documentation écrite dans le code.",
  title2: "Comment nous l’utilisons",
  items: [
        "Construire et restructurer des projets dbt selon la convention de couches staging → intermédiaires → marts",
        "Écrire des macros SQL en Jinja pour une logique de transformation réutilisable",
        "Mettre en place des tests dbt (non nul, unicité, intégrité référentielle, tests sur mesure) sur les modèles critiques",
        "Configurer la documentation dbt et les graphes de lignage, pour que les nouveaux arrivants comprennent le parcours des données",
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
            'Vous voulez un CI/CD managé, l’hébergement de la documentation et la couche d’indicateurs, sans les monter vous-même',
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
            'Vous voulez éviter complètement la couche d’orchestration',
          ],
        },
      ],
  p1: "dbt (data build tool) est le standard open source de la transformation de données en SQL. Il compile des modèles SQL (avec Jinja) en requêtes exécutées dans l’entrepôt, gère les dépendances, lance les tests et génère la documentation automatiquement. Il fonctionne avec BigQuery, Snowflake, Redshift et d’autres. Les dernières versions ajoutent dbt Copilot (assistance IA pour le SQL, disponible sur les offres payantes), le moteur Fusion (écrit en Rust, bientôt en disponibilité générale et déjà utilisé par défaut sur les nouveaux projets dbt Cloud) et une Semantic Layer désormais en disponibilité générale, propulsée par MetricFlow.",
  p2: "La Semantic Layer de dbt devient le socle de la fiabilité de l’IA dans la plateforme data. Le serveur MCP officiel permet aux outils d’IA (Claude, Cursor) d’interroger directement les définitions MetricFlow. Le modèle de langage n’écrit jamais de SQL brut : MetricFlow compile des requêtes gouvernées à partir des définitions d’indicateurs.",
  p3: "dbt est l’outil de transformation le plus répandu dans le data engineering moderne. Quand un client a déjà des projets dbt, des besoins multi-cloud ou une équipe qui maîtrise dbt, nous travaillons dans cet écosystème plutôt que d’imposer une migration. dbt Cloud propose aussi un fonctionnement entièrement managé, qui ressemble à ce que Dataform offre nativement sur GCP.",
  p4: "Une réserve à connaître : Fivetran et dbt Labs ont annoncé leur fusion en octobre 2025 (en attente de validation réglementaire, attendue en 2026). Ce rapprochement est pratique pour les clients sur la voie Fivetran + dbt, mais il faut garder à l’esprit le risque de dépendance à un seul éditeur. Associer Airbyte à Dataform (ou à dbt Core) garde la collecte et la transformation entre des mains différentes.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
