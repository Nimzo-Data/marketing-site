import type { Copy } from './metabase.en';

const copy: Copy = {
  title: "Consultant Metabase sur BigQuery | Nimzo Data",
  description: "Mise en place de Metabase sur BigQuery : tableaux de bord, indicateurs gouvernés, assistant IA Metabot et options de déploiement souples (cloud ou auto-hébergé).",
  toolCategory: "Business Intelligence",
  heroPositioning: "Metabase est une BI en libre-service pour les équipes qui veulent un accès large, un assistant IA complet et la possibilité d’auto-héberger, sans budget de grande entreprise.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Metabase : Cloud (managé), ou auto-hébergé sur Cloud Run / GKE pour garder la main",
        "Définir des Models et des Metrics, pour des définitions cohérentes dans les tableaux de bord comme dans les requêtes IA",
        "Configurer Metabot avec le fournisseur de modèle de langage du client (Anthropic), pour explorer les données en langage naturel",
        "Construire des tableaux de bord opérationnels et de direction, envoyés par e-mail ou Slack",
        "Mettre en place des permissions par ligne et par colonne pour un accès multi-équipes",
        "Intégrer les métadonnées dbt via le package communautaire dbt-metabase quand le client utilise dbt",
      ],
  title3: "Quand Metabase est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Metabase quand :',
          bullets: [
            'Vous voulez des tableaux de bord en libre-service et un assistant IA sans payer le prix de Looker',
            "Vous voulez pouvoir auto-héberger (Community Edition gratuite, Pro auto-hébergé payant)",
            "Vous voulez Metabot avec votre propre clé Anthropic, y compris en auto-hébergé",
            'Votre équipe mêle utilisateurs techniques et non techniques',
          ],
        },
        {
          heading: 'Choisissez plutôt Looker quand :',
          bullets: [
            'Il vous faut la gouvernance LookML des grandes entreprises et de la BI embarquée sur de gros volumes',
            'Votre budget est de 5 000 € par mois ou plus et vous déployez auprès de plus de 50 utilisateurs',
          ],
        },
        {
          heading: 'Choisissez plutôt Lightdash quand :',
          bullets: [
            "Vous utilisez déjà dbt et vous voulez des indicateurs définis dans le code",
            'Vous préférez un prix fixe qui ne grimpe pas avec les effectifs',
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
  p1: "Metabase est une BI en libre-service : tableaux de bord, indicateurs, et questions posées directement aux données. Les équipes métier explorent en cliquant, les analystes définissent des Models et des Metrics réutilisables, les experts écrivent du SQL au besoin. Metabot, l’assistant IA de Metabase (passé en open source dans la version 60), génère des graphiques, écrit du SQL, analyse les résultats et répond aux questions en langage naturel.",
  p2: "Metabase coûte moins cher que Looker et couvre plus de besoins que Steep. Vous pouvez l’auto-héberger entièrement sur Cloud Run, utiliser Metabase Cloud ou commencer gratuitement avec la Community Edition. La couche sémantique (Models, Metrics, Data Studio) a beaucoup progressé en 2025–2026. Metabot ajoute un assistant IA, y compris en auto-hébergé avec votre propre clé API Anthropic.",
  p3: "La fiabilité de Metabot dépend des Models et des Metrics que vous définissez dans Data Studio, les mêmes définitions gouvernées que celles de vos tableaux de bord. Nous mettons en place les Models et les Metrics avant d’activer Metabot : plus la couche sémantique est solide, meilleures sont les réponses de l’IA.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
