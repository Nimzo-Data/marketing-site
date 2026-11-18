import { href } from '../../i18n/routes';
import type { Step } from '../../components/content/ProcessSteps.astro';
import type { LineIconName } from '../../components/ui/LineIcon.astro';
import { eurRange } from '../../i18n/format';
import { prices } from '../../data/prices';

const copy = {
  startingPoints: [
  {
    from: ['Nothing yet.', "You're about to build."],
    look: 'Your sources and their volumes, the figures leadership needs, and what your team can run day to day.',
  },
  {
    from: ['Spreadsheets and Looker Studio,', 'held together by connectors.'],
    look: 'Which connectors feed which reports, what breaks when a sheet changes, and whether the figures match the source systems.',
    sample: href('sampleAudit', 'en'),
  },
  {
    from: ['A reporting app built in-house or with AI tools like Claude,', 'reading from your sources or its own database.'],
    look: 'Where the data comes from, whether keys sit in the code, who can change production, and whether each metric is defined once.',
  },
  {
    // Non-breaking hyphen (U+2011) so "ex-employee" never splits across lines.
    from: ['A warehouse built by an agency, an ex‑employee,', 'or your own team over the years.'],
    look: 'What each pipeline and table does, which of it anyone still uses, who still has access, and what it costs to run.',
  },
],
  checks: [
  { icon: 'security', area: 'Security and access', detail: 'Secrets in code, old accounts, database roles, personal data flows.' },
  { icon: 'collection', area: 'Collection', detail: 'Whether each source runs, and whether it fails silently.' },
  { icon: 'data-model', area: 'Data model', detail: 'Warehouse structure, duplicated tables, full versus incremental loads.' },
  { icon: 'figures', area: 'Figures', detail: 'One definition per metric. Test data, refunds, currency, timezone.' },
  { icon: 'reports', area: 'Reports and speed', detail: 'Which reports are used, official or dead, and how fast they load.' },
  { icon: 'operations', area: 'Operations', detail: 'Freshness, test versus production, who can deploy, a tested restore.' },
  { icon: 'maintainability', area: 'Maintainability', detail: 'Docs, tests on the figures, reviews, AI coding guardrails, one-person risk.' },
  { icon: 'ai', area: 'AI readiness', detail: 'Governed metrics, and what AI tools can read.' },
  { icon: 'costs', area: 'Costs', detail: 'Infrastructure, tools and licences, and what drives the bill.' },
] as { icon: LineIconName; area: string; detail: string }[],
  faqs: [
  {
    question: 'Why is the audit paid?',
    answer:
      "Because it's real work with a real deliverable. You get a written map of what you run, findings ranked by severity, a verdict per layer, and a fixed price for the next step. If you decide not to continue with us, you can hand that document to another provider and it's still useful.",
  },
  {
    question: 'Why can\'t you just quote me directly?',
    answer:
      "For a platform, a fixed price is only honest if the scope is right. After a 45-minute call we'd be guessing at your data volumes, your current costs, and which tools fit your team. The audit replaces those guesses with evidence, so the number in the proposal is one we stand behind. For one well-defined fix, we do quote directly: that's an Improve project.",
  },
  {
    question: "What if we don't continue with you after the audit?",
    answer:
      "You keep the deliverable and owe nothing more. Some clients take the report and execute internally, or hand it to another provider. That's a fine outcome. There's no obligation built into the price.",
  },
  {
    question: 'How do you compare to a big consultancy or a freelancer?',
    answer:
      'A big firm sells a six-month engagement and staffs it with a junior team. A freelancer solves the ticket in front of them. We sit between: senior engineering, fixed price, defined scope, and a clean handover so you own what we built.',
  },
  {
    question: 'Our reporting was built with Claude or Cursor. Is that a problem?',
    answer:
      "No, and it's increasingly common. Many of these apps work well for what they were built to do. What we typically find around them: API keys committed to the repository and still in the Git history, an app connecting to the production database with full rights, the same metric computed two different ways on two screens, test orders counted in revenue, no tests on the figures, and changes pushed straight to production with no review. Most of it is quick to fix once it's written down, and the audit ranks it so the dangerous items get fixed first.",
  },
  {
    question: 'Will you tell us to move to Google Cloud?',
    answer:
      "Only if it's the better answer. We review whatever you run. We build new platforms on Google Cloud. If something else fits better, we say so, and then we either fix what you have or review your team's work.",
  },
  {
    question: 'Do you need write access?',
    answer:
      'No. We work from read-only access to your repo, database, BI tool and sources. Nothing we do during the audit can change your data or your production setup.',
  },
],
  startHeading: "Where you're starting from.",
  startIntro: "The method and the report format are the same whatever you run. What we look at first, and what we recommend, depend on where you start.",
  problemsHeading: "What brings most clients here.",
  questionItems: [
        "Can we trust these numbers?",
        "Is anything exposed: keys in code, old access still open?",
        "What breaks if the person who built it leaves?",
        "What will this cost us over 12 months?",
        "Which tools do we need, and which can we skip?",
        "Is our data ready for AI?",
        "Is the quote or board pack in front of us sound?",
      ],
  answerItems: [
        "Headline figures recomputed from source.",
        "Secrets, accounts and roles reviewed.",
        "A map of what runs where, and who owns it.",
        "A 12-month cost, fees plus infrastructure.",
        "A verdict per layer, with the reasoning.",
        "What AI tools can safely query, and what's missing.",
        "A written second opinion, checked against your data.",
      ],
  checkHeading: "What we check.",
  checkIntro: "All nine areas, whatever you run. Only the depth changes: a spreadsheet setup has little to check under Operations, an inherited warehouse a lot.",
  walkHeading: "What you walk away with.",
  walkItemsHtml: [
    `<strong>Summary for leadership.</strong> One page: the overall verdict, the critical risks, what to do first.`,
    `<strong>Current-state map.</strong> Sources, pipelines, tables, reports, schedules and owners.`,
    `<strong>Ranked findings.</strong> Each one by severity, with the evidence and the fix.`,
    `<strong>Numbers check.</strong> Headline figures recomputed and compared with your reports.`,
    `<strong>Verdict per layer.</strong> Collection, warehouse, modeling, BI and AI: keep, fix, add or replace.`,
    `<strong>Recommendation call.</strong> Then 14 days of follow-up questions.`,
  ],
  nextStepTitle: "Plus the next step, priced",
  nextBuildBody: "Target architecture, tool choice with the reasoning, a 12-month cost, and a fixed-price build proposal.",
  nextImproveBody: "The projects in order, the first at a fixed price valid 30 days, and what your team can do itself.",
  processHeading: "How an audit runs.",
  processSteps: [
        { icon: 'video', title: "Kickoff & access", description: "Kickoff call, then read-only access to your repo, database, BI tool and sources." },
        { icon: 'search', title: "Technical audit", description: "The nine areas above reviewed, and your headline figures recomputed." },
        { icon: 'scale', title: "Tool evaluation (when needed)", description: `Only when a layer is added or replaced. <a href='${href('technologies', 'en')}' class='step-link'>The tools we work with</a>.` },
        { icon: 'clipboard-list', title: "Findings & recommendation", description: "The written report: summary, map, ranked findings, numbers check, verdict per layer." },
        { icon: 'mail', title: "Recommendation call & proposal", description: "We walk you through it and send a fixed price for the next step." },
      ] as Step[],
  pricingHeading: "Pricing.",
  pricingLabel: "Fixed price",
  pricingAmount: eurRange(prices.audit.min, prices.audit.max, 'en'),
  pricingSub: "1–2 weeks, paid 100% upfront: we invoice when you sign, and work starts once it's paid. Where you land in this range depends on the number of sources and the number of metrics to recompute.",
  leadsHeading: "Where this leads.",
  leadsIntro: "The verdict per layer decides the next step. An audit is also a real deliverable on its own.",
  notFitHeading: "When this isn't the right fit.",
  notFitItemsHtml: [
    `<strong>You already know exactly what you want built and have a clear scope.</strong> <a href="${href('improve', 'en')}" class="inline-link">Improve</a> is a better fit: you describe the project on a free call, and we quote it directly.`,
    `<strong>You're pre-product-market-fit with no real data yet.</strong> Too early. Come back when there's something to measure.`,
    `<strong>You need a penetration test or a security certification.</strong> We flag data-platform risks, including access and secrets, but this is not a formal security audit.`,
  ],
  faqHeading: "Common questions.",
  metaTitle: "Data Platform Audit | Nimzo Data",
  metaDescription: "A paid 1–2 week audit of whatever your reporting runs on: findings ranked by severity, a verdict per layer, and a fixed price for the next step. Yours to keep either way.",
  heroTitle: "Before you build or fix anything,<br>find out what your numbers run on.",
  heroSubtitle: "A 1–2 week paid audit of whatever you run today, from spreadsheets to a warehouse someone left behind. You leave with a verdict on each layer of your platform and a fixed price for the next step. Yours to keep either way.",
  thFrom: "If you run",
  thLook: "What we look at first",
  thSample: "Sample",
  sampleLink: "Sample audit",
  comingSoon: "Coming soon",
  questionsTitle: "The questions:",
  answersTitle: "What the audit answers:",
  ifVerdict: "If the verdict is",
  leadBuildEyebrow: "Most of the platform new or replaced",
  leadBuildTitle: "Build",
  leadBuildBody: "A new platform, or a replacement for one that has to go. The audit produces the fixed-price build proposal; you decide whether to proceed.",
  leadBuildLink: "See Build",
  leadImproveEyebrow: "One piece added, or fixes",
  leadImproveTitle: "Improve",
  leadImproveBody: "The audit splits the work into projects and prices the first one. You run them one at a time and decide on each separately.",
  leadImproveLink: "See Improve",
  leadNothingEyebrow: "Your team takes it from here",
  leadNothingTitle: "Nothing more",
  leadNothingBody: "The report is yours. Your team or another provider can execute it, and the ranked findings tell them where to start.",
};

export type Copy = typeof copy;
export default copy;
