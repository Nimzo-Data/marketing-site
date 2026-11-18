import { href } from '../../i18n/routes';
import type { Copy } from './audit.en';
import { eurRange } from '../../i18n/format';
import { prices } from '../../data/prices';

const copy: Copy = {
  startingPoints: [
    {
      from: ['Rien encore.', 'Vous vous apprêtez à construire.'],
      look: 'Vos sources et leurs volumes, les chiffres dont la direction a besoin, et ce que votre équipe peut faire tourner au quotidien.',
    },
    {
      from: ['Des fichiers Excel ou Google Sheets et Looker Studio,', 'reliés par des connecteurs.'],
      look: 'Quels connecteurs alimentent quels rapports, ce qui ne fonctionne plus quand un fichier change, et si les chiffres concordent avec les systèmes sources.',
      sample: href('sampleAudit', 'fr'),
    },
    {
      from: ['Une application de reporting développée en interne ou avec des outils d’IA comme Claude,', 'qui lit vos sources ou sa propre base.'],
      look: 'D’où viennent les données, si des clés traînent dans le code, qui peut modifier la production, et si chaque indicateur n’est défini qu’une fois.',
    },
    {
      // Non-breaking hyphen (U+2011) so "ex‑salarié" never splits across lines.
      from: ['Un entrepôt construit par une agence, un ex‑salarié,', 'ou votre propre équipe au fil des ans.'],
      look: 'Ce que fait chaque pipeline et chaque table, ce qui sert encore, qui a encore accès, et ce que tout cela coûte.',
    },
  ],
  checks: [
    { icon: 'security', area: 'Sécurité et accès', detail: 'Clés et mots de passe dans le code, anciens comptes, droits d’accès à la base, flux de données personnelles.' },
    { icon: 'collection', area: 'Collecte', detail: 'Si chaque source se charge bien, et si une panne passerait inaperçue.' },
    { icon: 'data-model', area: 'Modèle de données', detail: 'Structure de l’entrepôt, tables en double, chargements complets ou incrémentaux.' },
    { icon: 'figures', area: 'Chiffres', detail: 'Une définition par indicateur. Données de test, remboursements, devises, fuseaux horaires.' },
    { icon: 'reports', area: 'Rapports et temps de chargement', detail: 'Quels rapports servent, officiels ou abandonnés, et à quelle vitesse ils chargent.' },
    { icon: 'operations', area: 'Exploitation', detail: 'Fraîcheur des données, séparation test et production, droits de déploiement, sauvegardes testées.' },
    { icon: 'maintainability', area: 'Maintenabilité', detail: 'Documentation, tests sur les chiffres, revues, garde-fous pour le code écrit par l’IA, dépendance à une seule personne.' },
    { icon: 'ai', area: 'Préparation à l’IA', detail: 'Indicateurs gouvernés, et ce que les outils d’IA peuvent lire.' },
    { icon: 'costs', area: 'Coûts', detail: 'Infrastructure, outils et licences, et ce qui fait monter la facture.' },
  ],
  faqs: [
    {
      question: 'Pourquoi l’audit est-il payant ?',
      answer:
        'Parce que c’est un travail concret, qui débouche sur un livrable précis. Vous recevez une cartographie écrite de ce que vous faites tourner, des constats classés par gravité, un verdict par couche et un prix fixe pour la suite. Si vous décidez de ne pas continuer avec nous, ce document reste utilisable par un autre prestataire.',
    },
    {
      question: 'Pourquoi ne pas nous faire directement un devis ?',
      answer:
        'Pour une plateforme, un prix fixe n’est honnête que si le périmètre est bien cerné. Après un appel de 45 minutes, nous en serions réduits à deviner vos volumes de données, vos coûts actuels et les outils adaptés à votre équipe. L’audit remplace ces hypothèses par des faits : le prix de la proposition est alors un prix que nous pouvons tenir. Pour une correction bien définie, nous faisons un devis direct : c’est un projet Amélioration.',
    },
    {
      question: 'Et si nous ne continuons pas avec vous après l’audit ?',
      answer:
        'Vous gardez le livrable et ne devez rien de plus. Certains clients mettent le rapport en œuvre en interne, ou le confient à un autre prestataire. C’est une issue tout à fait normale. L’audit n’engage à rien de plus.',
    },
    {
      question: 'En quoi êtes-vous différents d’un grand cabinet ou d’un freelance ?',
      answer:
        'Un grand cabinet vend une mission de six mois et la confie à une équipe junior. Un freelance traite la demande du moment. Nous sommes entre les deux : des ingénieurs seniors, un prix fixe, un périmètre défini et une passation soignée, pour que ce que nous construisons vous appartienne.',
    },
    {
      question: 'Notre reporting a été construit avec Claude ou Cursor. Est-ce un problème ?',
      answer:
        'Non, et c’est de plus en plus courant. Beaucoup de ces applications font bien ce pour quoi elles ont été construites. Ce que nous trouvons souvent autour : des clés d’API dans le dépôt et encore dans l’historique Git, une application connectée à la base de production avec tous les droits, un même indicateur calculé de deux façons sur deux écrans, des commandes de test comptées dans le chiffre d’affaires, aucun test sur les chiffres, et des changements poussés directement en production sans relecture. L’essentiel se corrige vite une fois écrit noir sur blanc, et l’audit le classe pour que les points dangereux soient traités en premier.',
    },
    {
      question: 'Allez-vous nous imposer de passer sur Google Cloud ?',
      answer:
        'Seulement si c’est la meilleure réponse. Nous auditons ce que vous utilisez, quel qu’il soit. Nous construisons les nouvelles plateformes sur Google Cloud. Si autre chose convient mieux, nous le disons, puis nous corrigeons ce que vous avez ou relisons le travail de votre équipe.',
    },
    {
      question: 'Avez-vous besoin d’accès en écriture ?',
      answer:
        'Non. Nous travaillons avec un accès en lecture seule à votre dépôt, votre base de données, votre outil de BI et vos sources. Rien de ce que nous faisons pendant l’audit ne peut modifier vos données ou votre production.',
    },
  ],
  startHeading: 'Votre point de départ.',
  startIntro: 'La méthode et le format du rapport sont les mêmes pour tout le monde. Ce que nous regardons en premier, et ce que nous recommandons, dépendent de votre point de départ.',
  problemsHeading: 'Les situations que nous rencontrons le plus souvent.',
  questionItems: [
    'Pouvons-nous faire confiance à ces chiffres ?',
    'Y a-t-il quelque chose d’exposé : des clés dans le code, d’anciens accès encore ouverts ?',
    'Qu’est-ce qui casse si la personne qui l’a construit s’en va ?',
    'Combien cela va-t-il nous coûter sur 12 mois ?',
    'De quels outils avons-nous besoin, et desquels pouvons-nous nous passer ?',
    'Nos données sont-elles prêtes pour l’IA ?',
    'Le devis ou le dossier du conseil que nous avons sous les yeux tient-il la route ?',
  ],
  answerItems: [
    'Les chiffres clés recalculés depuis la source.',
    'Clés et mots de passe, comptes et rôles passés en revue.',
    'Une cartographie de ce qui tourne où, et de qui en est responsable.',
    'Un coût sur 12 mois, prestations et infrastructure comprises.',
    'Un verdict par couche, argumenté.',
    'Ce que les outils d’IA peuvent interroger sans risque, et ce qui manque.',
    'Un second avis écrit, vérifié sur vos données.',
  ],
  checkHeading: 'Ce que nous vérifions.',
  checkIntro: 'Les neuf domaines, quel que soit votre outillage. Seule la profondeur change : un reporting sur fichiers Excel a peu à vérifier côté exploitation, un entrepôt hérité beaucoup.',
  walkHeading: 'Ce que vous obtenez.',
  walkItemsHtml: [
    `<strong>Synthèse pour la direction.</strong> Une page : le verdict global, les risques critiques, ce qu’il faut faire en premier.`,
    `<strong>Cartographie de l’existant.</strong> Sources, pipelines, tables, rapports, planifications et responsables.`,
    `<strong>Constats classés.</strong> Chacun par gravité, avec les preuves et la correction.`,
    `<strong>Vérification des chiffres.</strong> Les chiffres clés recalculés et comparés à vos rapports.`,
    `<strong>Verdict par couche.</strong> Collecte, entrepôt, modélisation, BI et IA : garder, corriger, ajouter ou remplacer.`,
    `<strong>Restitution par visioconférence.</strong> Puis 14 jours pour nous poser vos questions.`,
  ],
  nextStepTitle: 'Et la suite, chiffrée',
  nextBuildBody: 'Architecture cible, choix des outils argumenté, coût sur 12 mois et proposition de construction au forfait.',
  nextImproveBody: 'Les projets dans l’ordre, le premier à prix fixe valable 30 jours, et ce que votre équipe peut faire elle-même.',
  processHeading: 'Comment se déroule un audit.',
  processSteps: [
    { icon: 'video', title: 'Lancement et accès', description: 'Un appel de lancement, puis un accès en lecture seule à votre dépôt, votre base, votre outil de BI et vos sources.' },
    { icon: 'search', title: 'Audit technique', description: 'Les neuf domaines ci-dessus passés en revue, et vos chiffres clés recalculés.' },
    { icon: 'scale', title: 'Évaluation des outils (si nécessaire)', description: `Seulement quand une couche est ajoutée ou remplacée. <a href='${href('technologies', 'fr')}' class='step-link'>Les outils avec lesquels nous travaillons</a>.` },
    { icon: 'clipboard-list', title: 'Constats et recommandation', description: 'Le rapport écrit : synthèse, cartographie, constats classés, vérification des chiffres, verdict par couche.' },
    { icon: 'mail', title: 'Restitution et proposition', description: 'Nous vous présentons le rapport et vous envoyons un prix fixe pour la suite.' },
  ],
  pricingHeading: 'Prix.',
  pricingLabel: 'Prix fixe',
  pricingAmount: `${eurRange(prices.audit.min, prices.audit.max, 'fr')} HT`,
  pricingSub: '1 à 2 semaines, HT, payable en totalité à la commande : nous facturons à la signature et démarrons à réception du règlement. Votre place dans cette fourchette dépend du nombre de sources et du nombre d’indicateurs à recalculer.',
  leadsHeading: 'Ce que l’audit permet ensuite.',
  leadsIntro: 'Le verdict par couche décide de la suite. Et l’audit se suffit à lui-même.',
  notFitHeading: 'Quand l’audit n’est pas la bonne option.',
  notFitItemsHtml: [
    `<strong>Vous savez exactement ce que vous voulez construire, avec un périmètre clair.</strong> L’<a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a> vous conviendra mieux : vous décrivez le projet lors d’un appel gratuit, et nous le chiffrons directement.`,
    `<strong>Votre activité n’a pas encore trouvé son marché et vous n’avez pas encore de données significatives.</strong> C’est trop tôt. Revenez quand il y aura quelque chose à mesurer.`,
    `<strong>Il vous faut un test d’intrusion ou une certification de sécurité.</strong> Nous signalons les risques de la plateforme data, accès, clés et mots de passe compris, mais ce n’est pas un audit de sécurité formel.`,
  ],
  faqHeading: 'Questions fréquentes.',
  metaTitle: 'Audit data Google Cloud et BigQuery | Nimzo Data',
  metaDescription: 'Audit payant de votre plateforme data en 1 à 2 semaines : constats classés par gravité, verdict par couche et prix fixe pour la suite. Le rapport vous reste dans tous les cas.',
  heroTitle: 'Avant de construire ou de corriger quoi que ce soit,<br>sachez sur quoi reposent vos chiffres.',
  heroSubtitle: 'Un audit payant de 1 à 2 semaines de ce que vous utilisez aujourd’hui, de vos fichiers Excel à l’entrepôt de données laissé par un prestataire. Vous repartez avec un verdict sur chaque couche de votre plateforme et un prix fixe pour la suite. Le livrable vous reste dans tous les cas.',
  thFrom: 'Si vous utilisez',
  thLook: 'Ce que nous regardons en premier',
  thSample: 'Exemple',
  sampleLink: 'Exemple d’audit',
  comingSoon: 'Bientôt',
  questionsTitle: 'Les questions :',
  answersTitle: 'Ce que l’audit y répond :',
  ifVerdict: 'Si le verdict est',
  leadBuildEyebrow: 'Une plateforme à créer ou à remplacer',
  leadBuildTitle: 'Construction',
  leadBuildBody: 'Une nouvelle plateforme, ou le remplacement de celle qui doit partir. L’audit produit la proposition de construction au forfait ; vous décidez de donner suite ou non.',
  leadBuildLink: 'Voir la Construction',
  leadImproveEyebrow: 'Une brique à ajouter, ou des corrections',
  leadImproveTitle: 'Amélioration',
  leadImproveBody: 'L’audit découpe le travail en projets et chiffre le premier. Vous les menez un par un et décidez de chacun séparément.',
  leadImproveLink: 'Voir l’Amélioration',
  leadNothingEyebrow: 'Votre équipe prend le relais',
  leadNothingTitle: 'Rien de plus',
  leadNothingBody: 'Le rapport vous appartient. Votre équipe ou un autre prestataire peut le mettre en œuvre, et les constats classés indiquent par où commencer.',
};

export default copy;
