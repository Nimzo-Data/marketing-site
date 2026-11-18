import type { Copy } from './contact.en';

const copy: Copy = {
  calendarHeading: 'Choisissez un créneau.',
  calendarSub: 'Les horaires s’affichent dans votre fuseau horaire. 45 minutes suffisent en général pour savoir si nous pouvons vous aider.',
  emailHtml: `Écrivez à <a href="mailto:hello@nimzodata.com" class="email-link">hello@nimzodata.com</a>. Nous répondons sous un jour ouvré, souvent le jour même.`,
  steps: [
    { icon: 'mail', title: 'Réservez un appel ou écrivez-nous', description: 'Utilisez le calendrier ci-dessus. Ou écrivez-nous si vous préférez commencer par un message.' },
    { icon: 'clipboard-list', title: 'Quelques questions rapides', description: 'En réservant, vous répondez à quelques questions : vos outils, ce qui a changé, qui s’occupe de la data aujourd’hui. Ainsi, l’appel part de votre situation.' },
    { icon: 'video', title: 'L’appel découverte', description: '45 minutes d’échange. Nous écoutons, posons des questions, puis vous disons si nous sommes la bonne équipe pour vous.' },
    { icon: 'file-text', title: 'La proposition', description: 'Sous 5 jours ouvrés, si nous pensons pouvoir vous aider. Le plus souvent un audit payant de 1 à 2 semaines. Si vous connaissez déjà le périmètre d’un projet Amélioration, nous le chiffrons directement.' },
  ],
  whereBody: 'Basés en France. Nous travaillons à distance dans toute l’Europe, avec des déplacements ponctuels pour un lancement ou des ateliers sur les missions les plus importantes.',
  stepsHeading: 'Les étapes, de l’appel à la proposition.',
  notReadyHeading: 'Pas encore prêt à en parler ?',
  metaTitle: 'Contact | Réserver un appel | Nimzo Data',
  metaDescription: 'Un appel de 45 minutes sur votre plateforme data. Sans engagement. Nous vous disons si nous pouvons vous aider. hello@nimzodata.com.',
  heroTitle: 'Parlons de votre plateforme data.',
  heroSubtitle: 'Un appel gratuit de 45 minutes, sans engagement. Nous vous posons des questions sur votre dispositif actuel, ce qui ne fonctionne pas et ce que vous attendez, puis nous vous disons si nous sommes la bonne équipe pour vous.',
  // TODO(fr): replace with the French booking schedule once Antoine sends its link (plan Task 18).
  calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WUIRsRks4hxf6-nWhuq942Xpp7WNKM1rKJHUqthdkdPUKyq7QICNNAZ-F72XLef1Pj_h3FSVu?gv=true',
  emailTitle: 'Vous préférez écrire ?',
  whereTitle: 'Où nous sommes.',
  servicesCardTitle: 'Nos services',
  servicesCardDescription: 'Ce que nous pouvons faire pour vous : périmètre, délais et prix de chaque offre.',
  servicesCardButton: 'Voir les services',
  techCardTitle: 'Nos outils',
  techCardDescription: 'Chaque outil avec lequel nous travaillons, et notre avis sans détour sur les cas où il se justifie.',
  techCardButton: 'Voir les technologies',
};

export default copy;
