import type { Step } from '../../components/content/ProcessSteps.astro';

const copy = {
  calendarHeading: "Pick a time that works.",
  calendarSub: "All times shown in your local timezone. 45 minutes is usually enough to know if there's a fit.",
  emailHtml: `Write to <a href="mailto:hello@nimzodata.com" class="email-link">hello@nimzodata.com</a>. We reply within one business day, usually the same day.`,
  steps: [
        { icon: 'mail', title: "Book a call or email us", description: "Use the calendar above. Or email us if you'd rather write first." },
        { icon: 'clipboard-list', title: "A few short questions", description: "You answer them while booking: your stack, what's changed, who handles data today. The call starts from your situation, not from zero." },
        { icon: 'video', title: "The discovery call", description: "45-minute conversation. We listen, ask questions, tell you whether we're a fit." },
        { icon: 'file-text', title: "The proposal", description: "Within 5 business days if there's a fit. Usually a paid 1–2 week audit. If you already know the scope of an Improve project, we quote it directly." },
      ] as Step[],
  whereBody: "Based in France. Working remotely across Europe, with occasional on-site visits for kickoffs or hands-on workshops on larger engagements.",
  stepsHeading: "What happens after you reach out.",
  notReadyHeading: "Not ready to talk?",
  metaTitle: "Contact | Book a Call | Nimzo Data",
  metaDescription: "45-minute call about your data stack. No sales pitch. We tell you whether we're a fit. hello@nimzodata.com.",
  heroTitle: "Let's talk about your data stack.",
  heroSubtitle: "A free 45-minute call, with no sales pitch. We ask about your current setup, what isn't working, and what you want to achieve, then tell you whether we're a fit.",
  calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WUIRsRks4hxf6-nWhuq942Xpp7WNKM1rKJHUqthdkdPUKyq7QICNNAZ-F72XLef1Pj_h3FSVu?gv=true",
  emailTitle: "Prefer email?",
  whereTitle: "Where we are.",
  servicesCardTitle: "See our services",
  servicesCardDescription: "See how we can help: scope, timeline, and pricing for each engagement.",
  servicesCardButton: "Browse services",
  techCardTitle: "Browse the stack",
  techCardDescription: "Every tool we work with and our honest opinion on when to use it.",
  techCardButton: "See technologies",
};

export type Copy = typeof copy;
export default copy;
