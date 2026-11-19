import { href } from '../../i18n/routes';
import type { Copy } from './support.en';
import { eur } from '../../i18n/format';
import { prices } from '../../data/prices';

const day = eur(prices.support.extraDay, 'fr');

const copy: Copy = {
  tiers: [
    { name: 'Maintien', subtitle: 'Nous la faisons tourner', price: `${eur(prices.support.run, 'fr')} HT par mois`, fit: 'votre plateforme doit continuer à tourner telle quelle' },
    { name: 'Évolution', subtitle: 'Nous la faisons aussi évoluer', price: `${eur(prices.support.extend, 'fr')} HT par mois`, fit: 'il vous faut des évolutions régulières : nouveaux indicateurs, sources, tableaux de bord' },
    { name: 'Pilotage', subtitle: 'Nous la pilotons aussi avec vous', price: `${eur(prices.support.lead, 'fr')} HT par mois`, fit: 'vous voulez un interlocuteur pour cadrer vos choix data' },
  ],
  rows: [
    { label: 'Jours de développement', values: [false, '1 jour par mois', '2 jours par mois'] },
    { label: 'Appels', values: ['Aucun, messages uniquement', 'Deux appels d’une heure par mois', 'Jusqu’à 1 heure par semaine'] },
    { label: 'Arbitrages d’architecture, de choix d’outils et de priorités', values: [false, false, true] },
    { label: 'Atelier feuille de route avec votre direction', values: [false, false, 'Chaque trimestre, une demi-journée'] },
    { label: 'Surveillance et incidents, délai de prise en charge', values: ['2 heures ouvrées', '2 heures ouvrées', '2 heures ouvrées'] },
    { label: 'Rapport mensuel, coûts BigQuery compris', values: [true, true, true] },
    { label: 'Gestion des utilisateurs et des accès', values: [true, true, true] },
  ],
  contractTerms: [
    'Sans engagement de durée. Préavis de 30 jours pour résilier ou passer à une offre inférieure ; un passage à l’offre supérieure s’applique dès le mois de facturation suivant.',
    'Paiement annuel d’avance : 10 % de remise. Prix révisés une fois par an selon l’indice Syntec.',
    'Heures ouvrées : du lundi au vendredi, 9 h – 18 h, heure de Paris.',
    'Si vous nous quittez, la surveillance et les alertes restent dans vos comptes et vous sont transmises.',
    'Si une même panne se répète pour une cause hors de notre contrôle, nous proposons une correction. Tant qu’elle n’est pas en place, chaque traitement consomme des jours de développement.',
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
        'Le « faire tourner » est au forfait : surveillance, incidents, rapport mensuel, et le fait d’être prévenu par nous en premier. Rien de cela n’est compté en temps. Seuls les développements sont plafonnés, et nous les comptons en jours, car c’est ainsi que nous les estimons et les planifions.',
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
        'Les alertes nous arrivent automatiquement : vous l’apprenez par nous en premier. Nous vous donnons la cause et vous tenons informé jusqu’à la résolution. Si plusieurs pannes surviennent en même temps, nous réparons d’abord ce qui touche vos chiffres clés. Sont aussi couverts les changements d’un éditeur qui font tomber un pipeline, ou sont sur le point de le faire. Si une source doit être reconstruite, nous la chiffrons comme un développement ou un projet Amélioration.',
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
  whoBody: 'Aux entreprises qui veulent une plateforme data en bonne santé sans recruter de data engineer. Ce que nous construisons vous appartient : vous pouvez le faire tourner sans nous. Le Support, c’est quand vous voulez que nous restions : pour la faire tourner, la faire évoluer au rythme de vos questions, ou cadrer vos choix data avec vous.',
  tiersHeading: 'Trois offres.',
  tiersIntro: 'Chaque offre comprend tout ce que contient la précédente.',
  tiersNotePrices: 'Prix mensuels en euros, hors taxes (HT).',
  tiersNoteHours: 'Les délais de prise en charge se comptent en heures ouvrées : du lundi au vendredi, 9 h – 18 h, heure de Paris.',
  monthlyHeading: 'Ce que vous voyez chaque mois.',
  monthlyBody: 'Chaque offre reçoit un rapport d’une page par mois : traitements réussis, fraîcheur respectée, incidents détectés, modifications chez vos fournisseurs de données prises en charge, évolution des coûts BigQuery, risques ouverts, le prochain chantier que nous recommandons et, dans les offres Évolution et Pilotage, les jours de développement consommés.',
  promiseLabel: 'Notre engagement',
  promiseBody: 'Si quelque chose que nous surveillons tombe en panne, vous l’apprenez par nous en premier. Les alertes arrivent automatiquement dans un canal partagé avec vous.',
  changeHeading: 'Les jours de développement.',
  changeIntro: 'Dans les offres Évolution et Pilotage.',
  changeRulesHtml: [
    `Chaque développement est estimé avant de commencer, mise à jour de la documentation comprise.`,
    `Si elle s’avère plus importante, nous nous arrêtons et vous prévenons avant de dépasser. Vous choisissez : continuer le mois suivant, ajouter des jours, réduire le périmètre, ou en faire un projet <a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a>.`,
    `Les jours supplémentaires sont facturés ${day} HT le jour, après votre accord préalable.`,
    `Les jours et les appels non utilisés ne sont pas reportés.`,
    `Un appel qui devient une séance de travail compte comme du développement.`,
    `Les nouveaux chantiers, comme un nouveau domaine métier, un nouvel outil de BI ou une migration, sont des projets <a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a>.`,
  ],
  dayHeading: 'Ce qui tient en une journée',
  dayBody: 'Environ une nouvelle source via un connecteur managé, deux ou trois modifications de tableaux de bord, ou un nouvel indicateur avec son tableau de bord. Vérifier un chiffre qui semble faux ou paramétrer un agent d’IA consomme aussi des jours de développement.',
  exampleLabel: 'Exemple',
  exampleBody: `Un client de l’offre Évolution demande une intégration Salesforce et un tableau de bord commercial, environ 2 jours de travail. Nous pouvons l’étaler sur ce mois-ci et le suivant, ou ajouter un jour pour ${day}. Au-delà, cela devient un projet Amélioration.`,
  termsHeading: 'Conditions.',
  contractHeading: 'Contrat',
  notIncludedHeading: 'Non inclus, facturé à part',
  notIncludedImproveHtml: `Le travail de la taille d’un projet <a href="${href('improve', 'fr')}" class="inline-link">Amélioration</a> : nouveaux domaines métier, nouveaux outils de BI, migrations`,
  faqHeading: 'Questions fréquentes.',
  notThereHeading: 'Ce n’est pas encore le moment ?',
  notThereBody: 'Le Support commence après un projet avec nous. Une Construction comprend son premier mois de l’offre Évolution, puis passe à l’offre Maintien sauf si vous choisissez autrement. Un projet Amélioration comprend son premier mois de l’offre Maintien, sur le travail livré.',
  metaTitle: 'Maintenance et support de plateforme data | Nimzo Data',
  metaDescription: `Support mensuel d’une plateforme data que nous avons construite, améliorée ou auditée. Offres Maintien, Évolution et Pilotage à ${eur(prices.support.run, 'fr')}, ${eur(prices.support.extend, 'fr')} et ${eur(prices.support.lead, 'fr')} HT par mois. Sans engagement de durée.`,
  heroTitle: 'Votre plateforme est en service. Reste à la maintenir en état.',
  heroSubtitle: 'Un support mensuel pour une plateforme que nous avons construite, améliorée ou auditée, sans recruter de data engineer pour la garder en bonne santé. Trois offres, un prix mensuel chacune.',
  leadAuditEyebrow: 'Quelqu’un d’autre a construit votre plateforme',
  leadBuildEyebrow: 'Pas encore de plateforme utilisable',
  leadImproveEyebrow: 'Quelque chose ne fonctionne pas ou manque',
};

export default copy;
