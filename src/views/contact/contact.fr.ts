import type { Copy } from './contact.en';

const copy: Copy = {
  calendarHeading: 'Choisissez un créneau.',
  calendarSub: 'Les horaires s’affichent dans votre fuseau horaire. 45 minutes suffisent en général pour savoir si nous pouvons vous aider.',
  emailHtml: `Écrivez à <a href="mailto:hello@nimzodata.com" class="email-link">hello@nimzodata.com</a>. Nous répondons sous un jour ouvré, souvent le jour même.`,
  steps: [
    { icon: 'mail', title: 'Réservez un appel ou écrivez-nous', description: 'Choisissez un créneau dans le calendrier, ou envoyez-nous un e-mail.' },
    { icon: 'clipboard-list', title: 'Quelques questions rapides', description: 'En réservant, vous répondez à quelques questions : vos outils, ce qui vous pose problème, qui s’occupe de la data aujourd’hui. Nous préparons l’appel avec vos réponses.' },
    { icon: 'video', title: 'L’appel découverte', description: '45 minutes. Nous vous écoutons, puis nous vous disons franchement si nous pouvons vous aider.' },
    { icon: 'file-text', title: 'La proposition', description: 'Sous 5 jours ouvrés, si nous pouvons vous aider. Le plus souvent, un audit payant de 1 à 2 semaines. Pour un projet Amélioration au périmètre déjà connu, nous envoyons directement un devis.' },
  ],
  whereBody: 'Basés en France. Nous travaillons à distance dans toute l’Europe, et nous nous déplaçons parfois pour le lancement ou des ateliers sur les gros projets.',
  stepsHeading: 'Comment ça se passe.',
  notReadyHeading: 'Pas encore prêt à en parler ?',
  metaTitle: 'Contact | Réserver un appel | Nimzo Data',
  metaDescription: 'Un appel gratuit de 45 minutes sur votre plateforme data, sans engagement. Nous vous disons si nous pouvons vous aider. Ou écrivez à hello@nimzodata.com.',
  heroTitle: 'Parlons de votre plateforme data.',
  heroSubtitle: 'Un appel gratuit de 45 minutes, sans engagement. Vous nous racontez ce qui ne va pas dans vos données, nous vous disons si nous pouvons vous aider.',
  // TODO(fr): replace with the French booking schedule once Antoine sends its link (plan Task 18).
  calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WUIRsRks4hxf6-nWhuq942Xpp7WNKM1rKJHUqthdkdPUKyq7QICNNAZ-F72XLef1Pj_h3FSVu?gv=true',
  emailTitle: 'Vous préférez écrire ?',
  whereTitle: 'Où nous sommes.',
  servicesCardTitle: 'Nos services',
  servicesCardDescription: 'Périmètre, délais et prix de chaque offre.',
  servicesCardButton: 'Voir les services',
  techCardTitle: 'Nos outils',
  techCardDescription: 'Les outils avec lesquels nous travaillons, et quand nous les recommandons ou non.',
  techCardButton: 'Voir les technologies',
};

export default copy;
