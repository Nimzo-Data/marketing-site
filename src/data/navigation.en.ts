// Menu labels and descriptors. Structure, links and icons are in navigation.ts.
const copy = {
  services: 'Services',
  technology: 'Technology',
  resources: 'Resources',
  about: 'About',
  contact: 'Contact',
  cta: "Let's talk",
  serviceItems: {
    audit: { label: 'Audit', description: 'Find out what your numbers run on' },
    build: { label: 'Build', description: 'A new platform, or a replacement' },
    improve: { label: 'Improve', description: 'Fix or add, one project at a time' },
    support: { label: 'Support', description: 'A senior engineer on call, monthly' },
  },
  techGroups: {
    cloud: 'Cloud & Warehouse',
    etl: 'ETL / ELT',
    transformation: 'Transformation',
    bi: 'Business Intelligence',
    orchestration: 'Orchestration',
  },
  allTechnologies: 'All technologies',
  resourceItems: {
    blog: { label: 'Blog', description: 'How we think about data platforms' },
    caseStudies: { label: 'Case Studies', description: 'What we built, and what changed' },
    sampleAudit: { label: 'Sample Audit Deliverable', description: 'A full audit, for a fictional company' },
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    legalNotice: 'Mentions légales',
  },
};

export type NavigationCopy = typeof copy;
export default copy;
