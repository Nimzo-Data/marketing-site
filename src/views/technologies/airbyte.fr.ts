import type { Copy } from './airbyte.en';

const copy: Copy = {
  title: "Expert Airbyte sur Google Cloud | Nimzo Data",
  description: "Consultant Airbyte sur GCP : déploiement d’Airbyte Cloud ou auto-hébergé, connecteurs sur mesure pour vos API, CDK Python et surveillance de vos pipelines ELT.",
  toolCategory: "ELT / Collecte de données",
  heroPositioning: "Airbyte est notre outil ELT par défaut : un service managé, plus de 600 connecteurs et un constructeur low-code pour les API sur mesure. L’auto-hébergement est possible si vous voulez garder la main.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Airbyte Cloud, notre déploiement par défaut : managé, rapide à lancer, simple à maintenir",
        "Configurer et surveiller les synchronisations de vos CRM, plateformes marketing, bases de données et API internes",
        "Construire des connecteurs sur mesure avec le Connector Builder low-code, pour les API absentes du catalogue",
        "Passer au CDK Python pour les sources complexes (authentification, pagination atypique, schémas inhabituels)",
        "Déployer Airbyte en auto-hébergé sur GKE pour les clients qui veulent maîtriser l’infrastructure",
        "Appliquer des conventions de schéma qui se raccordent à vos modèles Dataform ou dbt",
      ],
  title3: "Airbyte ou Fivetran ?",
  blocks: [
        {
          heading: 'Choisissez Airbyte quand :',
          bullets: [
            "Vous voulez de l’ELT managé, avec une facture plus prévisible que Fivetran quand les volumes grandissent",
            'Vous avez besoin de connecteurs sur mesure. Le Connector Builder couvre la plupart des API sans code',
            'Vous voulez pouvoir auto-héberger, pour la conformité ou le coût',
            'Vous préférez que collecte et transformation viennent de deux éditeurs différents',
          ],
        },
        {
          heading: 'Choisissez Fivetran quand :',
          bullets: [
            'Vous voulez l’ELT managé le plus abouti du marché, quel qu’en soit le coût',
            'Toutes vos sources sont des outils SaaS courants (Salesforce, HubSpot, Stripe, Shopify)',
            "Vous standardisez sur Fivetran + dbt, chez un seul éditeur",
          ],
        },
        {
          heading: 'Choisissez des fonctions Cloud Run sur mesure quand :',
          bullets: [
            'La source est inhabituelle, les volumes sont faibles, et ni Airbyte ni Fivetran n’ont de connecteur',
            "Vous utilisez déjà beaucoup Cloud Run, et un outil ELT complet serait disproportionné pour un seul pipeline",
          ],
        },
      ],
  metric: "D’une boîte noire à des pipelines que l’équipe peut suivre.",
  body: "Panoply remplacé par Airbyte et BigQuery : le coût d’infrastructure passe de 1 300 $ à environ 300 $ par mois.",
  p1: "Airbyte est une plateforme d’intégration de données avec plus de 600 connecteurs prêts à l’emploi. Elle extrait les données de vos sources (API, bases de données, outils SaaS) et les charge dans une destination comme BigQuery. Notre déploiement par défaut est Airbyte Cloud : managé, rapide à mettre en place, simple à maintenir. Pour les clients qui veulent garder la main ou ont des contraintes de conformité, il existe aussi une version open source à auto-héberger, éprouvée.",
  p2: "Dès que les volumes montent, la facturation d’Airbyte est plus prévisible que celle de Fivetran, basée sur les lignes actives par mois (MAR). Et si une source n’existe pas, nous la construisons : avec le Connector Builder low-code (suffisant pour la plupart des API sur mesure) ou avec le CDK Python pour les cas complexes. Cette souplesse est la principale raison pour laquelle nous choisissons Airbyte par défaut sur les nouveaux projets.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
