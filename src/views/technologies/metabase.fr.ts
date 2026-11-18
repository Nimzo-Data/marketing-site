import type { Copy } from './metabase.en';

const copy: Copy = {
  title: "Consultant Metabase sur BigQuery | Nimzo Data",
  description: "Mise en place de Metabase sur BigQuery : tableaux de bord, indicateurs gouvernés, assistant IA Metabot et options de déploiement souples (cloud ou auto-hébergé).",
  toolCategory: "Business Intelligence",
  heroPositioning: "Metabase est une BI en libre-service pour les équipes qui veulent un accès large, un vrai assistant IA, et la possibilité d’auto-héberger sans budget de grande entreprise.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Metabase : Cloud pour un service managé, ou auto-hébergé sur Cloud Run / GKE pour garder la main",
        "Définir des Models et des Metrics, pour que les équipes métier aient des définitions cohérentes dans les tableaux de bord comme dans les requêtes IA",
        "Configurer Metabot avec le fournisseur de modèle de langage du client (Anthropic), pour explorer les données en langage naturel",
        "Construire des tableaux de bord opérationnels et de direction, avec envoi par e-mail ou Slack",
        "Mettre en place des permissions au niveau des lignes et des colonnes pour un accès multi-équipes",
        "Intégrer les métadonnées dbt via le package communautaire dbt-metabase quand le client utilise dbt",
      ],
  title3: "Quand Metabase est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Metabase quand :',
          bullets: [
            'Vous voulez une BI en libre-service avec un vrai assistant IA, à un prix raisonnable',
            "Vous voulez pouvoir auto-héberger (Community Edition gratuite, Pro auto-hébergé payant)",
            "Vous voulez les fonctions d’IA de Metabot avec votre propre clé Anthropic, y compris en auto-hébergé",
            'Votre équipe mêle utilisateurs techniques et non techniques',
          ],
        },
        {
          heading: 'Choisissez plutôt Looker quand :',
          bullets: [
            'Vous avez besoin de la gouvernance LookML des grandes entreprises et de BI embarquée sur de gros volumes',
            'Votre budget est de 5 000 € par mois ou plus et vous déployez auprès de plus de 50 utilisateurs',
          ],
        },
        {
          heading: 'Choisissez plutôt Lightdash quand :',
          bullets: [
            "Vous utilisez déjà dbt et vous voulez des indicateurs définis dans le code",
            'Vous préférez un tarif forfaitaire qui ne grimpe pas avec les effectifs',
          ],
        },
        {
          heading: 'Choisissez plutôt Steep quand :',
          bullets: [
            "L’équipe est entièrement non technique et vous voulez l’expérience la plus simple, centrée sur les indicateurs",
            'Le budget est inférieur à 500 € par mois pour une petite équipe',
          ],
        },
      ],
  p1: "Metabase est une BI accessible : tableaux de bord, indicateurs, et questions posées directement aux données. Les équipes métier explorent les données par une interface visuelle. Les analystes construisent des Models et des Metrics réutilisables, qui imposent des définitions cohérentes. Les utilisateurs avancés passent en SQL quand ils en ont besoin. Metabot, l’assistant IA de Metabase (passé en open source dans la version 60), génère des graphiques, écrit du SQL, analyse les résultats et répond aux questions en langage naturel.",
  p2: "Metabase est le juste milieu pragmatique du marché de la BI. Il est moins cher que Looker, plus large que Steep et plus souple que Lightdash. Vous pouvez l’auto-héberger entièrement sur Cloud Run, utiliser Metabase Cloud, ou commencer gratuitement avec la Community Edition. La couche sémantique (Models + Metrics + Data Studio) a mûri vite en 2025–2026, et les fonctions d’IA de Metabot (y compris l’IA en auto-hébergé avec votre propre clé API Anthropic) en font une option solide pour une BI dopée à l’IA, sans la dépendance au cloud de Looker.",
  p3: "La fiabilité de Metabot dépend des Models et des Metrics que vous définissez dans Data Studio, les mêmes définitions gouvernées que celles de vos tableaux de bord. Nous mettons en place les Models et les Metrics avant d’activer Metabot : plus la couche sémantique est solide, meilleures sont les réponses de l’IA.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
