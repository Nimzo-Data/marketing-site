// Next-step card copy, shared by the "Not sure this is the right fit?" blocks
// and the technology pages. Structure and links are in services.ts.
const copy = {
  audit: {
    title: 'Audit',
    body: 'A verdict on each part of your platform and a fixed price for the next step.',
    linkText: 'See Audit',
  },
  build: {
    title: 'Build',
    body: 'A new Google Cloud data platform, or a replacement for one that has to go. Priced after an audit.',
    linkText: 'See Build',
  },
  improve: {
    title: 'Improve',
    body: "Fix what's broken or add what's missing, one fixed-price project at a time.",
    linkText: 'See Improve',
  },
  support: {
    title: 'Support',
    body: 'A senior engineer on call for monitoring, incidents and small improvements.',
    linkText: 'See Support',
  },
};

export type ServicesCopy = typeof copy;
export default copy;
