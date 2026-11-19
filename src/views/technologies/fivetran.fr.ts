import type { Copy } from './fivetran.en';

const copy: Copy = {
  title: "Consultant Fivetran sur BigQuery | Nimzo Data",
  description: "Mise en place et optimisation de Fivetran sur BigQuery : configuration des connecteurs, maîtrise des coûts MAR et surveillance de la fiabilité.",
  toolCategory: "ELT / Collecte de données",
  heroPositioning: "Quand la rapidité et la fiabilité d’un service entièrement géré comptent plus que le coût, Fivetran met vos pipelines en route en quelques heures, pas en quelques semaines.",
  title2: "Comment nous l’utilisons",
  items: [
        "Choisir entre Fivetran et Airbyte selon vos volumes, la capacité de l’équipe et les connecteurs nécessaires",
        "Configurer les connecteurs Fivetran de vos sources CRM, marketing, finance et analytics produit",
        "Optimiser la fréquence de synchronisation et le filtrage pour maîtriser les coûts MAR",
        "Raccorder les schémas normalisés par Fivetran à vos couches de transformation dbt ou Dataform",
        "Mettre en place des tests de fraîcheur des sources dans dbt, pour repérer les échecs de synchronisation avant les tableaux de bord",
        "Configurer des alertes par webhook et par e-mail, qui arrivent dans Slack ou PagerDuty avant d’affecter les tableaux de bord",
      ],
  title3: "Fivetran ou Airbyte ?",
  blocks: [
        {
          heading: 'Choisissez Fivetran quand :',
          bullets: [
            'Vous voulez l’ELT managé le plus abouti du marché, sans maintenance',
            'Vos sources sont des outils SaaS courants (Salesforce, HubSpot, Stripe, Shopify)',
            "Vous préférez des pipelines sans maintenance à l’optimisation des coûts",
          ],
        },
        {
          heading: 'Choisissez Airbyte quand :',
          bullets: [
            'Le coût global compte plus que la finition. Airbyte est moins cher à la plupart des volumes',
            'Vous avez besoin de connecteurs sur mesure pour des API internes ou des sources inhabituelles',
            'Vous voulez éviter un seul éditeur pour la collecte et la transformation (après la fusion Fivetran + dbt)',
          ],
        },
        {
          heading: 'Choisissez l’intégration directe par API quand :',
          bullets: [
            'Vous n’avez qu’une ou deux sources simples, sans évolution de schéma à gérer',
            'Vous voulez maîtriser toute la logique d’intégration',
            'Le coût récurrent compte plus que l’effort d’ingénierie initial',
          ],
        },
      ],
  p1: "Fivetran est une plateforme ELT entièrement managée, avec plus de 700 connecteurs. Elle gère seule l’évolution des schémas, relance automatiquement ce qui a échoué et maintient le code des connecteurs quand les sources changent leurs API. Vous payez au nombre de lignes actives par mois (MAR, monthly active rows) synchronisées, avec une offre gratuite et des offres payantes Standard, Enterprise et Business Critical.",
  p2: "Le grand atout de Fivetran, c’est la fiabilité managée. Pour des pipelines qui tournent tout seuls, sans data engineer pour surveiller les mises à jour de connecteurs, il est difficile à battre. Ses connecteurs pour les grands outils SaaS (Salesforce, HubSpot, Stripe, Shopify) sont les meilleurs du marché.",
  p3: "Un point de vigilance : Fivetran et dbt Labs ont annoncé leur fusion en octobre 2025 (en attente de validation réglementaire). Choisir Fivetran revient donc de plus en plus à confier collecte et transformation au même éditeur. Pratique pour certaines équipes, risque de dépendance pour d’autres : mieux vaut en faire un choix conscient.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
