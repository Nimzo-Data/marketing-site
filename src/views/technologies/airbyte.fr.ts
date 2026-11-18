import type { Copy } from './airbyte.en';

const copy: Copy = {
  title: "Expert Airbyte sur Google Cloud | Nimzo Data",
  description: "Consultant Airbyte sur GCP : mise en place d’Airbyte Cloud, Connector Builder pour vos API sur mesure, CDK Python pour les sources complexes et surveillance des pipelines.",
  toolCategory: "ELT / Collecte de données",
  heroPositioning: "Airbyte est notre outil ELT de prédilection : un service managé avec plus de 600 connecteurs et un constructeur low-code pour les API sur mesure. Un déploiement auto-hébergé est possible si vous voulez garder la main.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Airbyte Cloud comme déploiement par défaut : managé, rapide à lancer, simple à maintenir pour vos équipes",
        "Configurer et surveiller les synchronisations depuis vos CRM, plateformes marketing, bases de données et API internes",
        "Construire des connecteurs sur mesure avec le Connector Builder low-code, pour les API qu’Airbyte ne couvre pas d’origine",
        "Passer au CDK Python pour les sources vraiment complexes (authentification, pagination atypique, schémas inhabituels)",
        "Déployer Airbyte en auto-hébergé sur GKE pour les clients qui veulent maîtriser toute l’infrastructure",
        "Appliquer des conventions de schéma qui s’enchaînent proprement avec vos modèles Dataform ou dbt",
      ],
  title3: "Airbyte ou Fivetran ?",
  blocks: [
        {
          heading: 'Choisissez Airbyte quand :',
          bullets: [
            "Vous voulez de l’ELT managé, avec une facture plus prévisible que Fivetran quand les volumes grandissent",
            'Vous avez besoin de connecteurs sur mesure. Le Connector Builder couvre la plupart des API sans code',
            'Vous voulez pouvoir héberger vous-même, pour des raisons de conformité ou de coût',
            'Vous préférez une plateforme où collecte et transformation viennent de deux éditeurs différents',
          ],
        },
        {
          heading: 'Choisissez Fivetran quand :',
          bullets: [
            'Vous voulez l’ELT managé le plus abouti du marché, et le coût passe au second plan',
            'Toutes vos sources sont des outils SaaS courants (Salesforce, HubSpot, Stripe, Shopify)',
            "Vous standardisez sur Fivetran + dbt et vous voulez un seul éditeur",
          ],
        },
        {
          heading: 'Choisissez des fonctions Cloud Run sur mesure quand :',
          bullets: [
            'La source est inhabituelle, les volumes sont faibles, et ni Airbyte ni Fivetran n’ont de connecteur',
            "Vous utilisez déjà beaucoup les fonctions Cloud Run, et un outil ELT complet serait disproportionné pour un seul pipeline",
          ],
        },
      ],
  metric: "D’une boîte noire à des pipelines que l’équipe peut suivre.",
  body: "Panoply remplacé par Airbyte et BigQuery : le coût d’infrastructure passe de 1 300 $ à environ 300 $ par mois.",
  p1: "Airbyte est une plateforme d’intégration de données avec plus de 600 connecteurs prêts à l’emploi. Elle extrait les données de vos sources (API, bases de données, outils SaaS) et les charge dans une destination comme BigQuery. Notre déploiement par défaut est Airbyte Cloud : managé, rapide à mettre en place, simple à maintenir. Pour les clients qui veulent garder la main ou ont des contraintes de conformité, Airbyte propose aussi une version open source auto-hébergée, mature.",
  p2: "La facturation d’Airbyte est plus prévisible que le modèle Fivetran, basé sur les lignes actives par mois (MAR), dès que les volumes montent. Et quand une source n’existe pas, nous pouvons la construire : avec le Connector Builder low-code (suffisant pour la plupart des API sur mesure) ou avec le CDK Python pour les cas vraiment complexes. Cette souplesse est la raison principale pour laquelle nous choisissons Airbyte par défaut sur les nouveaux projets.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
