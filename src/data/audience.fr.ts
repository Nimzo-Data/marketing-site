import type { AudienceCopy } from './audience.en';

const copy: AudienceCopy = {
  isFor: [
    'Vous êtes sur Google Cloud, ou vous comptez y aller.',
    'Excel et Google Sheets ne suffisent plus : il vous faut une plateforme à part entière.',
    'Vous avez des analystes, pas de data engineers. Ou pas d’équipe du tout.',
    'Il vous faut un data engineer senior, sans recruter à temps plein.',
    'Vous voulez que l’IA donne des réponses fiables aux questions data de vos équipes.',
    'Vous savez décider vite. Nos meilleures missions démarrent après deux semaines d’échanges, pas quatre mois.',
  ],
  isNot: [
    'Il vous faut une nouvelle plateforme sur AWS ou Azure. Nous ne construisons de nouvelles plateformes que sur Google Cloud.',
    'Vous cherchez encore votre marché. La data n’est pas encore ce qui freine votre croissance.',
    'Il vous faut des analystes ou des data scientists. Nous sommes data engineers.',
    'Vous cherchez le taux horaire le plus bas. Nous ne sommes pas les moins chers : notre atout est l’expérience.',
    'Il vous faut du temps réel à grande échelle (Kafka, Flink, latence sous la seconde). C’est un autre métier.',
  ],
};

export default copy;
