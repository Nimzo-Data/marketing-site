import type { Copy } from './fivetran.en';

const copy: Copy = {
  title: "Consultant Fivetran sur BigQuery | Nimzo Data",
  description: "Mise en place et optimisation de Fivetran sur BigQuery : configuration des connecteurs, maîtrise des coûts MAR et surveillance de la fiabilité.",
  toolCategory: "ELT / Collecte de données",
  heroPositioning: "Fivetran est un ELT entièrement managé : vos pipelines tournent en quelques heures et personne n’a à les maintenir. Il coûte plus cher qu’Airbyte.",
  title2: "Comment nous l’utilisons",
  items: [
        "Choisir entre Fivetran et Airbyte selon vos volumes, la capacité de l’équipe et les connecteurs nécessaires",
        "Configurer les connecteurs Fivetran de vos sources CRM, marketing, finance et analytics produit",
        "Optimiser la fréquence de synchronisation et le filtrage pour maîtriser les coûts MAR",
        "Raccorder les schémas normalisés par Fivetran à vos couches de transformation dbt ou Dataform",
        "Mettre en place des tests de fraîcheur des sources dans dbt, pour repérer les échecs de synchronisation avant les tableaux de bord",
        "Envoyer les alertes de synchronisation dans Slack, PagerDuty ou par e-mail",
      ],
  title3: "Fivetran ou Airbyte ?",
  blocks: [
        {
          heading: 'Choisissez Fivetran quand :',
          bullets: [
            'Vous voulez l’ELT managé le plus abouti du marché, sans maintenance',
            'Vos sources sont des outils SaaS courants (Salesforce, HubSpot, Stripe, Shopify)',
            "Vous préférez payer plus pour ne rien maintenir",
          ],
        },
        {
          heading: 'Choisissez Airbyte quand :',
          bullets: [
            'Le coût global compte plus que la finition. Airbyte est moins cher à la plupart des volumes',
            'Vous avez besoin de connecteurs sur mesure pour des API internes ou des sources inhabituelles',
            'Vous ne voulez pas dépendre d’un seul éditeur pour la collecte et la transformation (depuis la fusion Fivetran–dbt)',
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
  p2: "Ses connecteurs pour les grands outils SaaS (Salesforce, HubSpot, Stripe, Shopify) sont parmi les plus solides du marché.",
  p3: "Un point de vigilance : Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Choisir Fivetran revient donc de plus en plus à confier collecte et transformation au même éditeur, avec un risque de dépendance sur les prix et la feuille de route.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
