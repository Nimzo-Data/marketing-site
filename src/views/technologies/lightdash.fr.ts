import type { Copy } from './lightdash.en';

const copy: Copy = {
  title: "Consultant Lightdash, BI sur dbt et BigQuery | Nimzo Data",
  description: "Mise en place de Lightdash sur dbt et BigQuery : couche sémantique dans le code, agents IA, tableaux de bord as code, Lightdash Cloud ou auto-hébergé.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Lightdash est une BI dont les indicateurs sont définis dans le code, dans votre projet dbt ou dans le YAML de Lightdash. Prix fixe, utilisateurs illimités, bien moins cher que Looker dès que l’équipe grandit.",
  title2: "Comment nous l’utilisons",
  items: [
        "Mettre en place Lightdash Cloud, ou Lightdash Core auto-hébergé sur GCP",
        "Connecter Lightdash à BigQuery via le YAML de dbt ou la couche sémantique native de Lightdash",
        "Définir les explores, indicateurs et dimensions dans les modèles dbt ou dans le YAML de Lightdash",
        "Construire des tableaux de bord pour l’opérationnel et la direction",
        "Programmer l’envoi des tableaux de bord par Slack et par e-mail",
        "Créer un agent IA par équipe (marketing, ventes, finance), chacun avec son propre prompt et ses propres indicateurs",
        "Connecter le serveur MCP de Lightdash aux outils d’IA du client (Claude, Cursor), pour interroger en langage naturel des données gouvernées",
        "Utiliser les tableaux de bord as code de Lightdash, pour que des agents de code construisent et fassent évoluer les tableaux de bord directement dans Git",
      ],
  title3: "Quand Lightdash est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Lightdash quand :',
          bullets: [
            "Vous voulez des indicateurs définis dans le code, en YAML dbt ou dans la couche sémantique native de Lightdash",
            "Vous voulez un prix fixe qui ne grimpe pas avec les effectifs (moins cher que Looker au-delà de 10 à 15 utilisateurs environ)",
            'Vous voulez brancher vos propres outils d’IA (Claude, Cursor) sur des données gouvernées via MCP',
            'Les tableaux de bord as code conviennent à votre équipe : des agents de code IA peuvent travailler directement dessus',
          ],
        },
        {
          heading: 'Choisissez plutôt Looker quand :',
          bullets: [
            'Vous avez besoin d’une gouvernance adaptée aux grandes entreprises, avec plus de 20 utilisateurs dans plusieurs services',
            "Vous avez besoin de toute la puissance de la couche sémantique LookML ou d’un lien étroit avec BI Engine",
            'La BI embarquée ou le reporting multi-clients sur de gros volumes figure sur votre feuille de route',
          ],
        },
        {
          heading: 'Choisissez plutôt Metabase quand :',
          bullets: [
            'Il vous faut une BI plus large que le seul pilotage par indicateurs (tableaux de bord, intégration dans vos produits, SDK)',
            "Votre équipe n’a pas adopté dbt",
            'Vous voulez auto-héberger avec les fonctions d’IA incluses : Metabot est désormais open source',
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
  p1: "Lightdash est un outil de BI open source où les indicateurs et les dimensions sont définis dans des fichiers YAML. Vous pouvez les définir dans votre projet dbt (la conception initiale de Lightdash) ou dans la couche sémantique native de Lightdash (ajoutée pour les équipes sans dbt). Dans les deux cas, vos définitions d’indicateurs restent versionnées, au lieu d’être enfermées dans une interface de tableaux de bord.",
  p2: "Lightdash Cloud permet de créer des agents IA dédiés directement dans l’interface : un agent marketing avec les indicateurs de campagne, un agent commercial relié aux données du pipeline de ventes, chacun avec ses instructions et ses indicateurs. Un serveur MCP permet aussi à des outils d’IA externes (Claude, Cursor ou des agents sur mesure) d’interroger la même couche sémantique gouvernée. Cloud propose aussi les tableaux de bord as code (versionnés dans Git) : des agents de code IA peuvent les écrire directement.",
  p3: "Avec Lightdash Cloud, vos indicateurs sont versionnés et l’IA est incluse, pour bien moins cher que Looker. Le prix est fixe, sans limite d’utilisateurs : dès 10 à 15 utilisateurs environ, c’est moins cher que les outils facturés par utilisateur. Une édition Core auto-hébergée existe aussi, pour garder la main.",
  p4: "Côté IA, les agents dédiés et le serveur MCP interrogent la couche sémantique gouvernée, avec les mêmes définitions que vos tableaux de bord. Il n’y a pas de préparation des données à faire en plus pour l’IA.",
  p5: "À savoir : la plupart des fonctions d’IA de Lightdash (agents IA dédiés, serveur MCP, tableaux de bord as code, assistant Slack) sont réservées à l’offre Cloud payante, pas à la version open source Core. Les Agent Skills open source sont une fonction à part : ils apprennent aux agents de code à écrire la configuration YAML de Lightdash, pas à interroger les données.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
