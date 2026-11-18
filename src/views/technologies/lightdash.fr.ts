import type { Copy } from './lightdash.en';

const copy: Copy = {
  title: "Consultant Lightdash, BI sur dbt et BigQuery | Nimzo Data",
  description: "Mise en place de Lightdash sur dbt et BigQuery : couche sémantique dans le code, agents IA, tableaux de bord as code, Lightdash Cloud ou auto-hébergé.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Lightdash est une BI dont les indicateurs vivent dans le code, dans votre projet dbt ou dans le YAML propre à Lightdash. Tarif forfaitaire, utilisateurs illimités, et bien moins cher que Looker dès que l’équipe grandit.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Lightdash Cloud, ou Lightdash Core auto-hébergé sur GCP",
        "Connecter Lightdash à BigQuery via l’intégration YAML de dbt ou la couche sémantique native de Lightdash",
        "Définir les explores, indicateurs et dimensions dans les modèles dbt ou dans le YAML de Lightdash",
        "Construire des tableaux de bord pour le reporting opérationnel et la direction",
        "Configurer l’envoi programmé des tableaux de bord par Slack et par e-mail",
        "Créer des agents IA dédiés à chaque équipe (marketing, ventes, finance), chacun avec son propre prompt et ses propres indicateurs",
        "Connecter le serveur MCP de Lightdash aux outils d’IA du client (Claude, Cursor), pour interroger en langage naturel des données gouvernées",
        "Utiliser le mode tableaux de bord as code de Lightdash, pour que des agents de code puissent construire et faire évoluer les tableaux de bord directement dans Git",
      ],
  title3: "Quand Lightdash est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Lightdash quand :',
          bullets: [
            "Vous voulez des indicateurs définis dans le code, en YAML dbt ou dans la couche sémantique native de Lightdash",
            "Vous voulez un tarif forfaitaire qui ne grimpe pas avec les effectifs (moins cher que Looker au-delà de 10 à 15 utilisateurs environ)",
            'Vous voulez brancher vos propres outils d’IA (Claude, Cursor) sur des données gouvernées via MCP',
            'Les tableaux de bord as code conviennent à votre équipe. Des agents de code IA peuvent travailler directement sur la couche des tableaux de bord',
          ],
        },
        {
          heading: 'Choisissez plutôt Looker quand :',
          bullets: [
            'Vous avez besoin d’une gouvernance adaptée aux grandes entreprises, avec plus de 20 utilisateurs répartis dans plusieurs services',
            "Vous avez besoin de toute la puissance de la couche sémantique LookML ou d’un lien étroit avec BI Engine",
            'La BI embarquée ou le reporting multi-clients sur de gros volumes figure sur votre feuille de route',
          ],
        },
        {
          heading: 'Choisissez plutôt Metabase quand :',
          bullets: [
            'Vous avez besoin d’une BI plus large (tableaux de bord, intégration dans vos produits, SDK) que le seul pilotage par indicateurs',
            "Votre équipe n’a pas adopté dbt comme base de travail",
            'Vous voulez pouvoir auto-héberger avec les fonctions d’IA incluses. Metabot est désormais open source',
          ],
        },
        {
          heading: 'Choisissez plutôt Steep quand :',
          bullets: [
            'Le public principal n’est pas technique',
            'Une expérience centrée sur les indicateurs compte plus que le versionnement',
            'Le budget est inférieur à 500 € par mois pour une petite équipe',
          ],
        },
      ],
  p1: "Lightdash est un outil de BI open source où les indicateurs et les dimensions vivent dans des fichiers YAML. Vous pouvez les définir dans votre projet dbt (la conception d’origine de Lightdash) ou dans la couche sémantique native de Lightdash (ajoutée pour les équipes sans dbt). Dans les deux cas, vos définitions d’indicateurs restent versionnées, au lieu d’être enfermées dans une interface de tableaux de bord.",
  p2: "Lightdash Cloud permet de créer directement dans l’interface des agents IA dédiés : un agent marketing avec accès aux indicateurs de campagne, un agent commercial relié aux données du pipeline de ventes, chacun avec son propre prompt et son propre périmètre d’indicateurs. Un serveur MCP permet aussi à des outils d’IA externes (Claude, Cursor ou des agents sur mesure) d’interroger la même couche sémantique gouvernée. Cloud propose enfin les tableaux de bord as code (définitions de tableaux de bord dans Git), qui s’accordent bien avec des agents de code IA qui écrivent les tableaux de bord directement depuis le dépôt.",
  p3: "Pour les équipes qui veulent des indicateurs versionnés et de l’IA analytique sans le budget de Looker, Lightdash Cloud est le bon compromis. Le tarif est forfaitaire, pour un nombre d’utilisateurs illimité : un modèle radicalement différent des outils facturés par utilisateur, ce qui fait pencher la balance en votre faveur au-delà de 10 à 15 utilisateurs environ. Une édition Core auto-hébergée existe aussi, pour les équipes qui veulent garder la main.",
  p4: "Le volet IA compte aussi : les agents IA dédiés et le serveur MCP interrogent tous deux la couche sémantique gouvernée, pas les tables brutes. Quand vous définissez vos indicateurs dans le code, les outils d’IA utilisent les mêmes définitions que vos tableaux de bord. Pas besoin d’une « préparation des données pour l’IA » à part.",
  p5: "À savoir : la plupart des fonctions d’IA de Lightdash (agents IA dédiés, serveur MCP, tableaux de bord as code, assistant Slack) font partie du produit Cloud payant, pas de la version open source Core. Les Agent Skills open source sont une fonction à part : ils apprennent aux agents de code à écrire la configuration YAML de Lightdash, pas à interroger les données.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
