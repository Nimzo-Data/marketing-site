import type { Copy } from './steep.en';

const copy: Copy = {
  title: "Consultant Steep, BI par indicateurs sur BigQuery | Nimzo Data",
  description: "Mise en place de Steep pour une BI par indicateurs sur BigQuery : définition des indicateurs, Steep AI et exploration en libre-service pour les équipes non techniques.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Steep est une BI par indicateurs pour les équipes non techniques. Les indicateurs sont définis une fois, puis explorés visuellement ou interrogés en langage naturel avec Steep AI. Aucun SQL requis.",
  title2: "Comment nous l’utilisons",
  items: [
        "Connecter Steep à BigQuery et configurer l’accès aux jeux de données",
        "Définir la couche d’indicateurs dans Steep : chiffre d’affaires, utilisateurs actifs, conversion, tout ce qui fait tourner votre activité",
        "Brancher Steep sur la Semantic Layer de dbt quand le client y maintient déjà ses indicateurs",
        "Former les équipes métier à l’exploration des indicateurs, à la création de tableaux de bord, à Steep AI et à l’accès MCP depuis Claude ou ChatGPT. Aucun SQL requis",
        "Programmer l’envoi de rapports réguliers aux équipes et aux décideurs concernés",
        "Déployer Steep aux côtés de Lightdash, Metabase ou Looker dans les organisations où les profils techniques sont variés",
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
            'Vous voulez pouvoir auto-héberger, avec un vrai assistant IA inclus',
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
  p1: "Steep est un outil de BI par indicateurs. Les indicateurs sont définis une seule fois (en général par un responsable data ou un analyste), et les équipes métier les explorent par une interface visuelle ou avec Steep AI, qui répond en langage naturel directement à partir des indicateurs gouvernés. Grâce à ce modèle, chaque graphique et chaque réponse de l’IA partagent la même définition du « chiffre d’affaires » ou de l’« utilisateur actif », quel que soit leur auteur. Steep convient particulièrement aux entreprises dont les principaux utilisateurs de données travaillent au marketing, aux ventes ou aux opérations plutôt que côté technique.",
  p2: "Steep a sa propre couche sémantique native pour définir les indicateurs. Il peut aussi se brancher sur la Semantic Layer de dbt si le client y maintient déjà ses indicateurs : un seul modèle d’indicateurs, deux interfaces. Steep expose ses indicateurs via MCP (Model Context Protocol), si bien que les mêmes données gouvernées sont interrogeables depuis des outils d’IA comme Claude ou ChatGPT, sans quitter les outils que l’équipe utilise déjà.",
  p3Html: `Toutes les entreprises n’ont pas besoin de la gouvernance de LookML ni d’indicateurs pilotés par dbt. Quand le public n’est pas technique et que le besoin principal est d’avoir des indicateurs cohérents et explorables, sans former tout le monde au SQL, Steep fait très bien l’affaire, pour une fraction du coût de Looker. Les indicateurs restent cohérents, et l’exploration reste accessible. Les crédits Steep AI (questions-réponses en langage naturel) sont inclus dans chaque offre payante.`,
  p4: "Comme chaque graphique et chaque réponse de l’IA partagent les mêmes définitions gouvernées, Steep AI ne peut pas produire de chiffres qui contredisent vos tableaux de bord. La couche d’indicateurs est la couche d’IA. Et avec le serveur MCP de Steep, ces indicateurs gouvernés ne restent pas enfermés dans l’interface de Steep. Ils sont disponibles partout où l’équipe travaille déjà.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
