import type { Copy } from './looker.en';

const copy: Copy = {
  title: "Expert Looker et LookML sur BigQuery | Nimzo Data",
  description: "Mise en place de Looker et LookML sur BigQuery : conception de la couche sémantique, indicateurs gouvernés, analyse conversationnelle avec Gemini et contrôle des accès.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Looker est l’outil de BI le plus puissant de l’écosystème GCP : la gouvernance de LookML, plus l’IA de Gemini. Nous le déployons pour les entreprises qui ont besoin d’une couche sémantique centralisée et sont prêtes à y investir.",
  title2: "Comment nous l’utilisons",
  items: [
        "Concevoir et mettre en place des modèles LookML : views, explores, tables dérivées et mesures",
        "Construire des tableaux de bord pour la direction et pour l’opérationnel, avec des indicateurs gouvernés",
        "Configurer Conversational Analytics et les Dashboard Agents pour interroger en langage naturel des données gouvernées par LookML",
        "Programmer l’envoi des tableaux de bord et des Looks par e-mail et par Slack",
        "Mettre en place le contrôle des accès des utilisateurs et les permissions par groupe",
        "Connecter le serveur MCP de Looker aux outils d’IA du client (Claude, Cursor), pour interroger en langage naturel un LookML gouverné",
      ],
  title3: "Quand Looker est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Looker quand :',
          bullets: [
            'Vous avez besoin d’une gouvernance de niveau grande entreprise et d’indicateurs cohérents entre les équipes',
            'Vous avez plus de 20 utilisateurs de BI dans plusieurs départements',
            'Vous voulez de l’analytique embarquée ou du reporting multi-clients à grande échelle',
            'Vous voulez de l’analyse conversationnelle avec Gemini, sur une couche sémantique gouvernée',
            'Votre budget est de 5 000 € par mois ou plus (le prix de Looker se fait sur devis)',
          ],
        },
        {
          heading: 'Choisissez plutôt Lightdash quand :',
          bullets: [
            "Vous voulez des indicateurs versionnés (YAML dbt ou couche sémantique native de Lightdash)",
            'Vous préférez un tarif forfaitaire qui ne grimpe pas avec les effectifs',
            "Vous n’avez pas besoin de toute la couche sémantique LookML",
          ],
        },
        {
          heading: 'Choisissez plutôt Metabase quand :',
          bullets: [
            'Votre budget est inférieur à celui de Looker, mais vous avez quand même besoin d’une BI large (tableaux de bord, intégration, accès SQL)',
            'Vous voulez pouvoir auto-héberger la couche de BI',
            'Vous voulez un vrai assistant IA, sans l’engagement financier de Looker',
          ],
        },
        {
          heading: 'Choisissez plutôt Steep quand :',
          bullets: [
            'Les utilisateurs principaux ne sont pas techniques',
            'L’objectif est un large accès en libre-service pour les métiers',
            'Le budget est inférieur à 500 € par mois',
          ],
        },
      ],
  metric: "De quelques minutes à quelques secondes.",
  body: "Avec en plus 77 % de baisse des coûts d’infrastructure, et 119 tables dérivées Looker regroupées dans une seule couche Dataform.",
  p1: "Looker est la plateforme de BI d’entreprise de Google, construite autour de LookML, un langage de modélisation qui définit une couche sémantique gouvernée entre votre entrepôt de données (data warehouse) et vos utilisateurs. Chaque indicateur, dimension et relation est défini une fois dans LookML, puis réutilisé à l’identique dans tous les rapports et tableaux de bord.",
  p2: "L’IA est désormais au cœur de Looker. Conversational Analytics permet aux équipes métier de poser des questions en langage naturel sur le modèle LookML gouverné. Les Dashboard Agents génèrent des synthèses et des analyses approfondies par IA directement dans les tableaux de bord. Des assistants qui comprennent LookML aident les développeurs à écrire des expressions et à construire des visualisations. Les API de Conversational Analytics donnent aussi cette capacité aux applications embarquées.",
  p3: "Pour les organisations où la gouvernance des données et la cohérence des indicateurs comptent, où la finance et le produit ne peuvent pas avoir deux définitions du « chiffre d’affaires », Looker est le bon outil. La couche sémantique LookML rend aussi Looker particulièrement puissant pour l’analytique embarquée et le reporting multi-clients. L’intégration native à GCP (Looker fait désormais partie de Google Cloud) apporte en plus un lien plus étroit avec BigQuery, notamment l’accélération BI Engine, et Gemini par-dessus.",
  p4: "C’est aussi la couche sémantique LookML qui rend l’IA de Looker fiable. Gemini interroge des définitions d’indicateurs gouvernées, pas du SQL brut. Selon les propres benchmarks de Google, LookML réduit de 66 % les erreurs des requêtes IA. Le serveur MCP officiel de Looker va plus loin : des outils d’IA externes (Claude, Cursor) peuvent interroger directement la couche LookML gouvernée, avec transmission OAuth et permissions au niveau de chaque utilisateur.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
