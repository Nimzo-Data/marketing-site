import { href } from '../../i18n/routes';
import type { Copy } from './support.en';
import { eur } from '../../i18n/format';
import { prices } from '../../data/prices';

const day = eur(prices.support.extraDay, 'fr');

const copy: Copy = {
  tiers: [
    { name: 'Maintien', subtitle: 'Nous la surveillons et la réparons', price: `${eur(prices.support.run, 'fr')} HT par mois`, fit: 'votre plateforme doit continuer à tourner telle quelle' },
    { name: 'Évolution', subtitle: 'Nous la surveillons et la développons', price: `${eur(prices.support.extend, 'fr')} HT par mois`, fit: 'vous ajoutez régulièrement des indicateurs, des sources ou des tableaux de bord' },
    { name: 'Pilotage', subtitle: 'Nous la surveillons, la développons et vous conseillons', price: `${eur(prices.support.lead, 'fr')} HT par mois`, fit: 'vous voulez quelqu’un avec qui décider des priorités et des outils data' },
  ],
  rows: [
    { label: 'Jours de développement', values: [false, '1 jour par mois', '2 jours par mois'] },
    { label: 'Appels', values: ['Aucun, messages uniquement', 'Deux appels d’une heure par mois', 'Jusqu’à 1 heure par semaine'] },
    { label: 'Conseil sur l’architecture, les outils et les priorités', values: [false, false, true] },
    { label: 'Atelier feuille de route avec votre direction', values: [false, false, 'Chaque trimestre, une demi-journée'] },
    { label: 'Surveillance et incidents, délai de prise en charge', values: ['2 heures ouvrées', '2 heures ouvrées', '2 heures ouvrées'] },
    { label: 'Rapport mensuel, coûts BigQuery compris', values: [true, true, true] },
    { label: 'Gestion des utilisateurs et des accès', values: [true, true, true] },
  ],
  contractTerms: [
    'Sans engagement de durée. Préavis de 30 jours pour résilier ou passer à une offre inférieure ; un passage à l’offre supérieure s’applique dès le mois de facturation suivant.',
    'Paiement annuel d’avance : 10 % de remise. Prix révisés une fois par an selon l’indice Syntec.',
    'Heures ouvrées : du lundi au vendredi, 9 h – 18 h, heure de Paris.',
    'Si vous nous quittez, la surveillance et les alertes restent dans vos comptes. Nous vous passons la main.',
    'Si une même panne revient à cause d’un élément que nous ne maîtrisons pas (un outil tiers, par exemple), nous proposons une correction. Tant qu’elle n’est pas en place, chaque intervention consomme des jours de développement.',
  ],
  notIncluded: [
    'Le travail sur des composants que nous n’avons ni construits ni audités',
    'Les licences d’outils, que vous payez directement aux éditeurs',
    'Le travail en dehors des heures ouvrées',
    'La formation de nouveaux utilisateurs (non incluse dans l’offre Maintien ; dans les offres Évolution et Pilotage, elle consomme des jours de développement)',
    'Les pipelines temps réel, la data science et le machine learning',
  ],
  faqs: [
    {
      question: 'Pourquoi des jours, et pas des heures ?',
      answer:
        'Faire tourner la plateforme est au forfait : surveillance, incidents, rapport mensuel, alertes. Seuls les développements sont plafonnés. Nous les comptons en jours, parce que nous les estimons et les planifions ainsi.',
    },
    {
      question: 'Que deviennent les jours non utilisés ?',
      answer:
        'Ils ne sont pas reportés, pas plus que les appels non utilisés. Si vous prévoyez une période calme, passez à l’offre Maintien avec un préavis de 30 jours, puis repassez à l’offre supérieure dès le mois de facturation suivant.',
    },
    {
      question: 'Et si un développement prend de l’ampleur ?',
      answer:
        `Nous nous arrêtons et vous prévenons avant de dépasser l’estimation. Vous choisissez : continuer le mois suivant, ajouter des jours à ${day} le jour, réduire le périmètre, ou en faire un projet Amélioration.`,
    },
    {
      question: 'Que se passe-t-il quand quelque chose ne fonctionne plus ?',
      answer:
        'Les alertes nous arrivent automatiquement. Nous vous donnons la cause et vous tenons informé jusqu’à la résolution. Si plusieurs pannes surviennent en même temps, nous réparons d’abord ce qui touche vos chiffres clés. Un éditeur modifie son outil et cela fait tomber un pipeline, ou risque de le faire ? C’est couvert aussi. Si une source doit être reconstruite, nous la chiffrons comme un développement ou un projet Amélioration.',
    },
    {
      question: 'Comment distinguer un incident d’un développement ?',
      answer:
        'Si cela fonctionnait avant et ne fonctionne plus, c’est un incident, et toutes les offres le couvrent. Si c’est nouveau, cela consomme des jours de développement.',
    },
    {
      question: 'Notre analyste fait aussi des modifications. Pouvez-vous les relire ?',
      answer: 'Oui, dans les offres Évolution et Pilotage, sur les jours de développement. L’offre Maintien n’inclut pas de relecture.',
    },
    {
      question: 'Et si notre budget est réduit ?',
      answer:
        'Passez à l’offre Maintien avec un préavis de 30 jours. Elle fait tourner la plateforme telle que livrée, à jour et fiable, et vous pouvez repasser à l’offre supérieure dès le mois de facturation suivant.',
    },
  ],
  whoHeading: 'À qui s’adresse le Support.',
  whoBody: 'Aux entreprises qui veulent une plateforme data qui tourne sans recruter de data engineer. Ce que nous construisons vous appartient : vous pouvez le faire tourner sans nous. Si vous préférez que nous restions, le Support la fait tourner, la complète selon vos demandes ou vous aide à décider de vos priorités data.',
  tiersHeading: 'Trois offres.',
  tiersIntro: 'Chaque offre inclut la précédente.',
  tiersNotePrices: 'Prix mensuels en euros, hors taxes (HT).',
  tiersNoteHours: 'Les délais de prise en charge se comptent en heures ouvrées : du lundi au vendredi, 9 h – 18 h, heure de Paris.',
  monthlyHeading: 'Ce que vous voyez chaque mois.',
  monthlyBody: 'Chaque mois, vous recevez un rapport d’une page : traitements réussis, données à jour à l’heure prévue, incidents détectés, changements chez les éditeurs de vos sources de données, évolution des coûts BigQuery, points de vigilance, prochain chantier recommandé et, dans les offres Évolution et Pilotage, jours de développement consommés.',
  promiseLabel: 'Notre engagement',
  promiseBody: 'Si quelque chose que nous surveillons tombe en panne, vous l’apprenez par nous en premier. Les alertes arrivent automatiquement dans un canal partagé avec vous.',
  changeHeading: 'Les jours de développement.',
  changeIntro: 'Dans les offres Évolution et Pilotage.',
  changeRulesHtml: [
    `Chaque développement est estimé avant de commencer, mise à jour de la documentation comprise.`,
    `Si un développement s’avère plus gros que prévu, nous nous arrêtons et vous prévenons avant de dépasser l’estimation. Vous choisissez : continuer le mois suivant, ajouter des jours, réduire le périmètre, ou en faire un projet <a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a>.`,
    `Les jours supplémentaires sont facturés ${day} HT le jour, après votre accord préalable.`,
    `Les jours et les appels non utilisés ne sont pas reportés.`,
    `Un appel qui devient une séance de travail compte comme du développement.`,
    `Les nouveaux chantiers, comme un nouveau domaine métier, un nouvel outil de BI ou une migration, sont des projets <a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a>.`,
  ],
  dayHeading: 'Ce qui tient en une journée',
  dayBody: 'Environ une nouvelle source via un connecteur prêt à l’emploi, deux ou trois modifications de tableaux de bord, ou un nouvel indicateur avec son tableau de bord. Vérifier un chiffre qui semble faux ou paramétrer un agent d’IA consomme aussi des jours de développement.',
  exampleLabel: 'Exemple',
  exampleBody: `Un client de l’offre Évolution demande une intégration Salesforce et un tableau de bord commercial, environ 2 jours de travail. Nous pouvons l’étaler sur ce mois-ci et le suivant, ou ajouter un jour pour ${day}. Au-delà, cela devient un projet Amélioration.`,
  termsHeading: 'Conditions.',
  contractHeading: 'Contrat',
  notIncludedHeading: 'Non inclus, facturé à part',
  notIncludedImproveHtml: `Le travail de la taille d’un projet <a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a> : nouveaux domaines métier, nouveaux outils de BI, migrations`,
  faqHeading: 'Questions fréquentes.',
  notThereHeading: 'Ce n’est pas encore le moment ?',
  notThereBody: 'Le Support démarre en général après un projet avec nous. Une Construction comprend son premier mois de l’offre Évolution, puis passe à l’offre Maintien sauf si vous choisissez autrement. Un projet Amélioration comprend son premier mois de l’offre Maintien, sur le travail livré. Après un audit seul, c’est possible si votre plateforme est en assez bon état : l’audit nous le dit.',
  metaTitle: 'Maintenance et support de plateforme data | Nimzo Data',
  metaDescription: `Support mensuel d’une plateforme data que nous avons construite, améliorée ou auditée. Offres Maintien, Évolution et Pilotage à ${eur(prices.support.run, 'fr')}, ${eur(prices.support.extend, 'fr')} et ${eur(prices.support.lead, 'fr')} HT par mois. Sans engagement de durée.`,
  heroTitle: 'Votre plateforme tourne. Qui la maintient ?',
  heroSubtitle: 'Un support mensuel pour une plateforme que nous avons construite, améliorée ou auditée. Sans data engineer à recruter. Trois offres, à prix mensuel fixe.',
  leadAuditEyebrow: 'Quelqu’un d’autre a construit votre plateforme',
  leadBuildEyebrow: 'Pas encore de plateforme utilisable',
  leadImproveEyebrow: 'Un tableau de bord faux, ou qui manque',
};

export default copy;
