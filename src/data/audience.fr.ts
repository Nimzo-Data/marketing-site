import type { AudienceCopy } from './audience.en';

const copy: AudienceCopy = {
  isFor: [
    'Vous êtes sur Google Cloud, ou vous comptez y aller.',
    'Vous avez dépassé l’« ère du tableur » et il vous faut une vraie plateforme.',
    'Vous avez des analystes, pas de data engineers. Ou pas d’équipe du tout.',
    'Il vous faut du data engineering senior, pas un recrutement à temps plein.',
    'Vous voulez que l’IA réponde juste aux questions data de vos équipes.',
    'Vous pouvez prendre une décision. Nos meilleures missions démarrent après deux semaines de discussion, pas quatre mois.',
  ],
  isNot: [
    'Il vous faut une nouvelle plateforme sur AWS ou Azure. Nous ne construisons de nouvelles plateformes que sur Google Cloud.',
    'Vous n’avez pas encore trouvé votre marché. La data n’est pas encore votre goulot d’étranglement.',
    'Il vous faut des analystes ou des data scientists. Nous sommes data engineers.',
    'Vous cherchez le taux horaire le plus bas. Nous nous distinguons par l’expérience, pas par le prix.',
    'Il vous faut du temps réel à grande échelle (Kafka, Flink, latence sous la seconde). C’est un autre métier.',
  ],
};

export default copy;
