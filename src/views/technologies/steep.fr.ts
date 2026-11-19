import type { Copy } from './steep.en';

const copy: Copy = {
  title: "Consultant Steep, BI par indicateurs sur BigQuery | Nimzo Data",
  description: "Mise en place de Steep pour une BI par indicateurs sur BigQuery : définition des indicateurs, Steep AI et exploration en libre-service pour les équipes non techniques.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Steep est une BI par indicateurs pour les équipes non techniques : vous définissez vos indicateurs une fois, puis chacun les explore en cliquant ou pose sa question en langage naturel à Steep AI, sans SQL.",
  title2: "Comment nous l’utilisons",
  items: [
        "Connecter Steep à BigQuery et configurer l’accès aux jeux de données",
        "Définir la couche d’indicateurs dans Steep : chiffre d’affaires, utilisateurs actifs, conversion, tout ce qui pilote votre activité",
        "Brancher Steep sur la Semantic Layer de dbt quand le client y maintient déjà ses indicateurs",
        "Former les équipes métier : explorer les indicateurs, faire un tableau de bord, interroger Steep AI, y compris depuis Claude ou ChatGPT",
        "Programmer l’envoi hebdomadaire ou mensuel des rapports par e-mail aux équipes et à la direction",
        "Déployer Steep aux côtés de Lightdash, Metabase ou Looker dans les organisations aux profils techniques variés",
      ],
  title3: "Quand Steep est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Steep quand :',
          bullets: [
            'Les utilisateurs principaux ne sont pas techniques (marketing, opérations, ventes)',
            'Vous voulez des définitions d’indicateurs partagées, sans maintenir une couche sémantique complète',
            'Le budget est inférieur à 500 € par mois pour une petite équipe',
            "L’accès SQL n’est pas une exigence",
          ],
        },
        {
          heading: 'Choisissez plutôt Metabase quand :',
          bullets: [
            'Vous avez besoin de plus que l’exploration d’indicateurs (tableaux de bord, intégration, accès SQL)',
            'Votre équipe mêle utilisateurs techniques et non techniques',
            'Vous voulez pouvoir auto-héberger, avec un assistant IA complet inclus',
          ],
        },
        {
          heading: 'Choisissez plutôt Lightdash quand :',
          bullets: [
            'Vous voulez des indicateurs versionnés dans le code (YAML dbt ou YAML Lightdash)',
            "L’accès SQL pour les utilisateurs avancés compte",
          ],
        },
        {
          heading: 'Choisissez plutôt Looker quand :',
          bullets: [
            'Une gouvernance adaptée aux grandes entreprises et une couche sémantique centralisée sont indispensables',
            'Vous avez plus de 20 utilisateurs dans plusieurs départements',
          ],
        },
      ],
  p1: "Steep est un outil de BI par indicateurs. Les indicateurs sont définis une seule fois (en général par un responsable data ou un analyste), et les équipes métier les explorent par une interface visuelle ou avec Steep AI, qui répond en langage naturel à partir des indicateurs gouvernés. Un graphique et une réponse de l’IA utilisent ainsi la même définition du « chiffre d’affaires » ou de l’« utilisateur actif ».",
  p2: "Steep a sa propre couche sémantique native pour définir les indicateurs. Il peut aussi se brancher sur la Semantic Layer de dbt si le client y maintient déjà ses indicateurs : un seul modèle d’indicateurs, deux interfaces. Steep expose ses indicateurs via MCP (Model Context Protocol) : les mêmes données gouvernées sont interrogeables depuis des outils d’IA comme Claude ou ChatGPT, sans quitter les outils que l’équipe utilise déjà.",
  p3Html: `Si vos utilisateurs ne sont pas techniques et veulent des chiffres cohérents sans apprendre le SQL, Steep suffit, pour une fraction du prix de Looker. Les crédits Steep AI (questions-réponses en langage naturel) sont inclus dans chaque offre payante.`,
  p4: "Steep AI s’appuie sur les mêmes indicateurs que vos tableaux de bord, donc ses chiffres ne les contredisent pas.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
