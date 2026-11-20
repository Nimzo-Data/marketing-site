import type { Copy } from './looker.en';

const copy: Copy = {
  title: "Expert Looker et LookML sur BigQuery | Nimzo Data",
  description: "Mise en place de Looker et LookML sur BigQuery : conception de la couche sémantique, indicateurs gouvernés, analyse conversationnelle avec Gemini et contrôle des accès.",
  toolCategory: "Business Intelligence",
  heroPositioning: "Looker est l’outil de BI de Google : les indicateurs sont définis une fois dans LookML, et Gemini permet de les interroger en langage courant. Nous le mettons en place pour les entreprises qui veulent une couche sémantique centralisée et sont prêtes à y investir.",
  title2: "Comment nous l’utilisons",
  items: [
        "Concevoir et mettre en place des modèles LookML : views, explores, tables dérivées et mesures",
        "Construire des tableaux de bord pour la direction et pour les équipes opérationnelles, sur des indicateurs gouvernés",
        "Configurer Conversational Analytics et les Dashboard Agents pour interroger en langage courant des données gouvernées par LookML",
        "Programmer l’envoi des tableaux de bord et des Looks par e-mail et par Slack",
        "Mettre en place le contrôle des accès et les permissions par groupe",
        "Connecter le serveur MCP de Looker aux outils d’IA du client (Claude, Cursor) pour interroger en langage courant le modèle LookML gouverné",
      ],
  title3: "Quand Looker est le bon outil de BI, et quand il ne l’est pas",
  blocks: [
        {
          heading: 'Choisissez Looker quand :',
          bullets: [
            'Plusieurs équipes doivent utiliser exactement les mêmes définitions (chiffre d’affaires, client actif…)',
            'Vous avez plus de 20 utilisateurs de BI dans plusieurs services',
            'Vous voulez de la BI embarquée ou du reporting multi-clients sur de gros volumes',
            'Vous voulez de l’analyse conversationnelle avec Gemini, sur une couche sémantique gouvernée',
            'Votre budget est de 5 000 € par mois ou plus (le prix de Looker se fait sur devis)',
          ],
        },
        {
          heading: 'Choisissez plutôt Lightdash quand :',
          bullets: [
            "Vous voulez des indicateurs versionnés (YAML dbt ou couche sémantique native de Lightdash)",
            'Vous préférez un tarif qui ne monte pas avec le nombre d’utilisateurs',
            "Vous n’avez pas besoin de toute la couche sémantique LookML",
          ],
        },
        {
          heading: 'Choisissez plutôt Metabase quand :',
          bullets: [
            'Votre budget est inférieur à 5 000 € par mois, mais il vous faut une BI complète (tableaux de bord, BI embarquée, accès SQL)',
            'Vous voulez pouvoir auto-héberger la BI',
            'Vous voulez un assistant IA complet, sans l’engagement financier de Looker',
          ],
        },
        {
          heading: 'Choisissez plutôt Steep quand :',
          bullets: [
            'Vos utilisateurs sont surtout des gens des métiers, pas des profils techniques',
            'Vous voulez que les équipes métier trouvent seules leurs chiffres, sans passer par un data analyst',
            'Votre budget est inférieur à 500 € par mois, pour une petite équipe',
          ],
        },
      ],
  metric: "Des tableaux de bord qui chargent en quelques secondes, au lieu de quelques minutes.",
  body: "Les coûts d’infrastructure ont aussi baissé de 77 %, et 119 tables dérivées Looker sont regroupées dans une seule couche Dataform.",
  p1: "Looker est l’outil de BI de Google, construit autour de LookML, un langage de modélisation. Avec LookML, chaque chiffre (chiffre d’affaires, marge, client actif) est écrit une seule fois entre votre entrepôt de données (data warehouse) et vos utilisateurs : c’est la couche sémantique. Tous les rapports et tableaux de bord reprennent ensuite exactement la même définition. Looker appartient à Google Cloud : il s’appuie sur BigQuery (accélération BI Engine) et sur Gemini.",
  p2: "Avec Conversational Analytics, les équipes métier posent leurs questions comme à un collègue, sur le modèle LookML gouverné. Les Dashboard Agents rédigent des synthèses directement dans les tableaux de bord. Côté développeurs, des assistants qui comprennent LookML aident à écrire des expressions et des visualisations, et les API de Conversational Analytics permettent d’intégrer ces questions-réponses dans vos applications.",
  p3: "Si la finance et le produit ne doivent pas avoir deux définitions du « chiffre d’affaires », Looker est le bon choix. Cette couche sémantique convient aussi à la BI embarquée et au reporting multi-clients.",
  p4: "La couche sémantique LookML rend aussi l’IA de Looker fiable. Gemini interroge des définitions d’indicateurs gouvernées, pas du SQL brut. Selon les propres benchmarks de Google, LookML réduit nettement les erreurs des requêtes IA. Le serveur MCP officiel de Looker va plus loin : des outils d’IA externes (Claude, Cursor) peuvent interroger directement la couche LookML gouvernée, avec délégation OAuth et permissions propres à chaque utilisateur.",
  sectionTitle: "Ce que c’est",
  sectionTitle2: "Pourquoi nous l’avons choisi",
};

export default copy;
