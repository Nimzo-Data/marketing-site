import type { Copy } from './fivetran.en';

const copy: Copy = {
  title: "Consultant Fivetran sur BigQuery | Nimzo Data",
  description: "Mise en place et optimisation de Fivetran sur BigQuery : configuration des connecteurs, maîtrise des coûts MAR et surveillance de la fiabilité.",
  toolCategory: "ELT / Collecte de données",
  heroPositioning: "Fivetran est un ELT entièrement managé : vos pipelines tournent en quelques heures et personne n’a à les maintenir. Il coûte plus cher qu’Airbyte.",
  title2: "Comment nous l’utilisons",
  items: [
        "Choisir entre Fivetran et Airbyte selon vos volumes, le temps dont dispose votre équipe et les connecteurs dont vous avez besoin",
        "Configurer les connecteurs Fivetran de vos sources CRM, marketing, finance et suivi d’usage du produit",
        "Optimiser la fréquence de synchronisation et le filtrage pour maîtriser les coûts MAR",
        "Raccorder les schémas normalisés par Fivetran à vos couches de transformation dbt ou Dataform",
        "Vérifier dans dbt que les données sont à jour, pour repérer une synchronisation en échec avant qu’elle n’atteigne vos tableaux de bord",
        "Envoyer les alertes de synchronisation dans Slack, PagerDuty ou par e-mail",
      ],
  title3: "Fivetran ou Airbyte ?",
  blocks: [
        {
          heading: 'Choisissez Fivetran quand :',
          bullets: [
            'Vous n’avez pas de data engineer pour suivre les mises à jour des connecteurs',
            'Vos sources sont des outils SaaS courants (Salesforce, HubSpot, Stripe, Shopify)',
            "Vous préférez payer plus pour ne rien maintenir",
          ],
        },
        {
          heading: 'Choisissez Airbyte quand :',
          bullets: [
            'Le coût compte plus que le confort. Airbyte coûte moins cher dans la plupart des cas',
            'Vous avez besoin de connecteurs sur mesure pour des API internes ou des sources inhabituelles',
            'Vous ne voulez pas dépendre d’un seul éditeur pour la collecte et la transformation (depuis la fusion Fivetran–dbt)',
          ],
        },
        {
          heading: 'Choisissez l’intégration directe par API quand :',
          bullets: [
            'Vous n’avez qu’une ou deux sources simples, dont la structure ne change pas',
            'Vous voulez maîtriser toute la logique d’intégration',
            'Vous préférez ne pas payer chaque mois, quitte à investir plus au départ',
          ],
        },
      ],
  p1: "Fivetran est une plateforme ELT entièrement managée, avec plus de 700 connecteurs. Elle gère seule l’évolution des schémas, relance automatiquement ce qui a échoué et maintient le code des connecteurs quand les sources changent leurs API. Vous payez au nombre de lignes actives par mois (MAR, monthly active rows) synchronisées, avec une offre gratuite et des offres payantes Standard, Enterprise et Business Critical.",
  p2: "Son principal atout est de tourner sans surveillance, sans data engineer pour suivre les mises à jour des connecteurs. Ceux des grands outils SaaS sont parmi les plus solides du marché.",
  p3: "Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Choisir Fivetran, c’est donc de plus en plus confier la collecte et la transformation au même éditeur. C’est pratique pour certaines équipes, mais cela crée une dépendance vis-à-vis de l’éditeur, notamment sur les prix et la feuille de route : à choisir en connaissance de cause.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
