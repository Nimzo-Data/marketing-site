import type { Copy } from './metabase.en';

const copy: Copy = {
  title: "Consultant Metabase sur BigQuery | Nimzo Data",
  description: "Mise en place de Metabase sur BigQuery : tableaux de bord, indicateurs gouvernés, assistant IA Metabot et options de déploiement souples (cloud ou auto-hébergé).",
  toolCategory: "Business Intelligence",
  heroPositioning: "Metabase est une BI en libre-service pour les équipes où beaucoup de monde consulte les chiffres : elle inclut un assistant IA, peut être auto-hébergée et coûte bien moins cher que Looker.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Metabase : Cloud (managé), ou auto-hébergé sur Cloud Run / GKE pour garder la main",
        "Définir des Models et des Metrics, pour des définitions cohérentes dans les tableaux de bord comme dans les requêtes IA",
        "Configurer Metabot avec la clé Anthropic du client, pour explorer les données en langage naturel",
        "Construire des tableaux de bord opérationnels et de direction, envoyés par e-mail ou Slack",
        "Mettre en place des permissions par ligne et par colonne pour que chaque équipe ne voie que ses propres données",
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
            'Il vous faut une gouvernance LookML adaptée aux grandes entreprises, ou de la BI embarquée pour beaucoup d’utilisateurs',
            'Votre budget est de 5 000 € par mois ou plus et vous avez plus de 20 utilisateurs dans plusieurs services',
          ],
        },
        {
          heading: 'Choisissez plutôt Lightdash quand :',
          bullets: [
            "Vous utilisez déjà dbt et vous voulez des indicateurs définis dans le code",
            'Vous voulez un tarif qui n’augmente pas avec le nombre d’utilisateurs',
          ],
        },
        {
          heading: 'Choisissez plutôt Steep quand :',
          bullets: [
            "Personne dans l’équipe n’écrit de SQL et vous voulez l’outil le plus simple, organisé autour des indicateurs",
            'Votre budget est inférieur à 500 € par mois et l’équipe est petite',
          ],
        },
      ],
  p1: "Metabase est une BI en libre-service : tableaux de bord, indicateurs, et questions posées directement aux données. Les équipes métier explorent en cliquant, les analystes définissent des Models et des Metrics réutilisables qui fixent les mêmes définitions pour tous, les experts écrivent du SQL au besoin. Metabot, l’assistant IA de Metabase (passé en open source dans la version 60), génère des graphiques, écrit du SQL, analyse les résultats et répond aux questions en langage naturel.",
  p2: "Metabase coûte moins cher que Looker et couvre plus de besoins que Steep. Vous pouvez l’auto-héberger entièrement sur Cloud Run, utiliser Metabase Cloud ou commencer gratuitement avec la Community Edition. La couche sémantique (Models, Metrics, Data Studio) a beaucoup progressé en 2025 et 2026. Metabot, l’assistant IA, fonctionne aussi en auto-hébergé avec votre propre clé API Anthropic, ce que Looker ne permet pas (cloud uniquement).",
  p3: "La fiabilité de Metabot dépend des Models et des Metrics que vous définissez dans Data Studio. Ce sont les mêmes indicateurs gouvernés que dans vos tableaux de bord. Nous mettons en place les Models et les Metrics avant d’activer Metabot : plus la couche sémantique est solide, meilleures sont les réponses de l’IA.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
