import type { NavigationCopy } from './navigation.en';

const copy: NavigationCopy = {
  services: 'Services',
  technology: 'Technologies',
  resources: 'Ressources',
  about: 'À propos',
  contact: 'Contact',
  cta: 'Parlons-en',
  serviceItems: {
    audit: { label: 'Audit', description: 'Savoir sur quoi reposent vos chiffres' },
    build: { label: 'Construction', description: 'Une nouvelle plateforme, ou un remplacement' },
    improve: { label: 'Amélioration', description: 'Corriger ou ajouter, un projet à la fois' },
    support: { label: 'Support', description: 'Un data engineer senior qui surveille votre plateforme' },
  },
  techGroups: {
    cloud: 'Cloud et entrepôt',
    etl: 'Collecte (ETL / ELT)',
    transformation: 'Transformation',
    bi: 'Business Intelligence',
    orchestration: 'Orchestration',
  },
  allTechnologies: 'Toutes les technologies',
  resourceItems: {
    blog: { label: 'Blog', description: 'Notre façon de penser les plateformes data' },
    caseStudies: { label: 'Études de cas', description: 'Ce que nous avons construit, et ce qui a changé' },
    sampleAudit: { label: 'Exemple d’audit', description: 'Un audit complet, pour une entreprise fictive' },
  },
  legal: {
    privacy: 'Politique de confidentialité',
    terms: 'CGU',
    legalNotice: 'Mentions légales',
  },
};

export default copy;
