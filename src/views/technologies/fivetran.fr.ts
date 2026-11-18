import type { Copy } from './fivetran.en';

const copy: Copy = {
  title: "Consultant Fivetran sur BigQuery | Nimzo Data",
  description: "Mise en place et optimisation de Fivetran sur BigQuery : configuration des connecteurs, maîtrise des coûts MAR et surveillance de la fiabilité.",
  toolCategory: "ELT / Collecte de données",
  heroPositioning: "Quand la rapidité de mise en place et la fiabilité managée comptent plus que la maîtrise des coûts, Fivetran met vos pipelines en route en quelques heures, pas en quelques semaines.",
  title2: "Comment nous l’utilisons",
  items: [
        "Évaluer si Fivetran ou Airbyte convient le mieux, selon vos volumes de données, la capacité de l’équipe et les connecteurs nécessaires",
        "Mettre en place et configurer les connecteurs Fivetran pour vos sources CRM, marketing, finance et analytics produit",
        "Optimiser la fréquence de synchronisation et le filtrage dans Fivetran pour maîtriser les coûts MAR",
        "Raccorder les schémas normalisés par Fivetran à vos couches de transformation dbt ou Dataform",
        "Mettre en place des tests de fraîcheur des sources dans dbt, pour repérer les échecs de synchronisation Fivetran avant qu’ils n’atteignent les tableaux de bord",
        "Configurer des alertes par webhook et par e-mail, pour que les échecs de synchronisation remontent dans Slack ou PagerDuty avant d’affecter les tableaux de bord",
      ],
  title3: "Fivetran ou Airbyte ?",
  blocks: [
        {
          heading: 'Choisissez Fivetran quand :',
          bullets: [
            'Vous voulez l’ELT managé le plus abouti du marché, sans aucune maintenance',
            'Vos sources sont des outils SaaS courants (Salesforce, HubSpot, Stripe, Shopify)',
            "Vous préférez des pipelines sans maintenance à l’optimisation des coûts",
          ],
        },
        {
          heading: 'Choisissez Airbyte quand :',
          bullets: [
            'Le coût global compte plus que le dernier degré de finition. Airbyte est moins cher à la plupart des volumes',
            'Vous avez besoin de connecteurs sur mesure pour des API internes ou des sources inhabituelles',
            'Vous voulez rester indépendant d’un seul éditeur pour la collecte et la transformation (après la fusion Fivetran + dbt)',
          ],
        },
        {
          heading: 'Choisissez l’intégration directe par API quand :',
          bullets: [
            'Vous n’avez qu’une ou deux sources simples, sans évolution de schéma à gérer',
            'Vous voulez maîtriser entièrement la logique d’intégration',
            'Le coût récurrent compte plus que l’effort d’ingénierie initial',
          ],
        },
      ],
  p1: "Fivetran est une plateforme ELT entièrement managée, avec plus de 700 connecteurs. Elle gère seule l’évolution des schémas, relance les échecs et maintient le code des connecteurs quand les sources changent leurs API. Vous payez à la ligne active par mois (MAR, monthly active rows) synchronisée, avec une offre gratuite et des offres payantes Standard, Enterprise et Business Critical.",
  p2: "La fiabilité managée est le principal atout de Fivetran. Pour les entreprises qui veulent des pipelines qui tournent tout seuls, sans data engineer pour surveiller les mises à jour de connecteurs, Fivetran est difficile à battre. La qualité des connecteurs pour les grands outils SaaS (Salesforce, HubSpot, Stripe, Shopify) est la meilleure du marché.",
  p3: "Un point de vigilance : Fivetran et dbt Labs ont annoncé leur fusion en octobre 2025 (en attente de validation réglementaire). Choisir Fivetran revient donc de plus en plus à confier la collecte et la transformation au même éditeur. C’est pratique pour certaines équipes, et un risque de dépendance pour d’autres. Dans les deux cas, mieux vaut en faire un choix conscient.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
