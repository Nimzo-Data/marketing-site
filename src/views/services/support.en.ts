import { href } from '../../i18n/routes';
import { eur } from '../../i18n/format';
import { prices } from '../../data/prices';

const copy = {
  tiers: [
  { name: 'Run', subtitle: 'We keep it running', price: `${eur(prices.support.run, 'en')} a month`, fit: 'your platform should keep running as it is' },
  { name: 'Extend', subtitle: 'We also change it', price: `${eur(prices.support.extend, 'en')} a month`, fit: 'you need regular changes: new metrics, sources, dashboards' },
  { name: 'Lead', subtitle: 'We also lead it with you', price: `${eur(prices.support.lead, 'en')} a month`, fit: 'you want someone to lead your data decisions' },
],
  rows: [
  { label: 'Change work', values: [false, '1 day a month', '2 days a month'] },
  { label: 'Calls', values: ['None, messages only', 'Two 1-hour calls a month', 'Up to 1 hour a week'] },
  { label: 'Architecture, vendor and priority decisions', values: [false, false, true] },
  { label: 'Roadmap session with your leadership team', values: [false, false, 'Quarterly, half a day'] },
  { label: 'Monitoring and incidents, acknowledged within', values: ['2 business hours', '2 business hours', '2 business hours'] },
  { label: 'Monthly report, including BigQuery costs', values: [true, true, true] },
  { label: 'User and access admin', values: [true, true, true] },
] as { label: string; values: (string | boolean)[] }[],
  contractTerms: [
  "Month to month, with 30 days' notice to cancel or downgrade. Upgrades apply from the next billing month.",
  'Annual prepayment: 10% off. Prices revised once a year on the Syntec index.',
  'Business hours: Monday to Friday, 9:00 to 18:00 Paris time.',
  'If you leave, the monitoring and alerts stay in your accounts, and we hand them over.',
  "If the same breakage keeps coming from outside our control, we propose a fix. Until it's in place, handling it uses change days.",
],
  notIncluded: [
  "Work on components we didn't build or audit",
  'Tool licences, which you pay directly to vendors',
  'Work outside business hours',
  'Training new users: not on Run; on Extend and Lead it uses change days',
  'Real-time pipelines, data science and ML',
],
  faqs: [
  {
    question: 'Why days, not hours?',
    answer:
      'Running the platform is priced on outcomes: monitoring, incidents, the monthly report, and hearing it from us first. None of that is counted in time. Only change work has a cap, and we count it in days because that is how we estimate and plan changes.',
  },
  {
    question: 'What happens to unused days?',
    answer:
      "They don't carry over, and neither do unused calls. If you expect a quiet stretch, move down to Run with 30 days' notice and move back up from the next billing month.",
  },
  {
    question: 'What if a change grows?',
    answer:
      'We stop and tell you before going over the estimate. You choose: continue next month, add extra days at €1,000 each, reduce it, or make it an Improve project.',
  },
  {
    question: 'What happens when something breaks?',
    answer:
      "Alerts reach us automatically, and you hear it from us first. We tell you the cause and keep you updated until it's fixed. When several things break at once, we fix what affects your core numbers first. This includes vendor changes that break a pipeline or are about to. If a source has to be rebuilt, we quote it as a change or an Improve project.",
  },
  {
    question: 'Is it an incident or a change?',
    answer:
      "If it worked and broke, it's an incident, and every tier covers it. If it's new, it uses change days.",
  },
  {
    question: 'Our analyst makes changes too. Can you review them?',
    answer: "Yes, on Extend and Lead, using change days. Run doesn't include reviews.",
  },
  {
    question: 'What if our budget gets cut?',
    answer:
      "Move down to Run with 30 days' notice. Run keeps the platform as delivered running, fresh and correct, and you can move back up from the next billing month.",
  },
],
  whoHeading: "Who Support is for.",
  whoBody: "For companies that want their data platform kept healthy without hiring a data engineer. You own what we build and can run it without us. Support is for when you want us to stay: to keep it running, to change it as your questions change, or to lead your data decisions with you.",
  tiersHeading: "Three tiers.",
  tiersIntro: "Each tier includes everything in the one before.",
  tiersNotePrices: "Monthly prices, excluding VAT.",
  tiersNoteHours: "Response times count in business hours: Monday to Friday, 9:00 to 18:00 Paris time.",
  monthlyHeading: "What you see each month.",
  monthlyBody: "Every tier gets a one-page report each month: runs succeeded, freshness on time, incidents caught, upstream changes absorbed, BigQuery cost trend, open risks, the next change we recommend and, on Extend and Lead, change days used.",
  promiseLabel: "Our promise",
  promiseBody: "If something we monitor breaks, you hear it from us first. Alerts go to a channel we share with you, automatically.",
  changeHeading: "Change work.",
  changeIntro: "On Extend and Lead.",
  changeRules: [
    `Every change is estimated before we start, and includes updating the documentation.`,
    `If it turns out bigger, we stop and tell you before going over. You choose: continue next month, add extra days, reduce it, or make it an <a href="${href('improve', 'en')}" class="inline-link">Improve</a> project.`,
    `Extra days cost €1,000 each, agreed in advance.`,
    `Unused days and calls don't carry over.`,
    `A call that becomes a working session counts as change work.`,
    `New capabilities, such as a new business domain, a new BI tool or a migration, are <a href="${href('improve', 'en')}" class="inline-link">Improve</a> projects.`,
  ],
  dayHeading: "What fits in a day",
  dayBody: "Roughly one new source through a managed connector, two or three dashboard changes, or a new metric with its dashboard. Checking a number that looks wrong and AI agent setup or tuning also use change days.",
  exampleLabel: "Example",
  exampleBody: "An Extend client asks for a Salesforce integration and a sales dashboard, about 2 days of work. We can spread it over this month and next, or add one extra day for €1,000. Anything larger becomes an Improve project.",
  termsHeading: "Terms.",
  contractHeading: "Contract",
  notIncludedHeading: "Not included, billed separately",
  notIncludedImproveHtml: `<a href="${href('improve', 'en')}" class="inline-link">Improve</a>-sized work: new business domains, new BI tools, migrations`,
  faqHeading: "Common questions.",
  notThereHeading: "Not there yet?",
  notThereBody: "Support starts after a project with us. A Build includes its first month of Extend, then moves to Run unless you choose otherwise. An Improve project includes its first month of Run, on the work we delivered.",
  metaTitle: "Data Platform Support | Nimzo Data",
  metaDescription: "Monthly support for a data platform we built, improved or audited. Run, Extend and Lead tiers at €950, €2,250 and €3,950 a month excl. VAT. Month to month.",
  heroTitle: "Your platform is live. Someone still has to keep it running.",
  heroSubtitle: "Monthly support for a platform we have built, improved or audited, so you don't need to hire a data engineer to keep it healthy. Three tiers, one monthly price each.",
  leadAuditEyebrow: "Someone else built your platform",
  leadBuildEyebrow: "No usable platform yet",
  leadImproveEyebrow: "Something's broken or missing",
};

export type Copy = typeof copy;
export default copy;
