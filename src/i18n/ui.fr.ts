import type { UiCopy } from './ui.en';

const ui: UiCopy = {
  site: {
    organizationDescription:
      'Conseil data spécialisé sur Google Cloud : audit, construction, amélioration et support de plateformes data.',
    breadcrumbHome: 'Accueil',
    rssTitle: 'Blog Nimzo Data',
    rssDescription:
      'Articles sur BigQuery, Dataform et l’architecture Google Cloud, tirés de nos missions.',
  },
  blog: {
    updated: 'Mis à jour le',
  },
  header: {
    logoAria: 'Nimzo Data — Accueil',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
  },
  mobileMenu: {
    dialog: 'Menu de navigation',
    close: 'Fermer le menu',
    nav: 'Navigation mobile',
  },
  footer: {
    tagline: 'Plateformes data Google Cloud pour les PME et ETI en croissance.',
    location: 'Basés en France. Clients dans toute l’Europe.',
    services: 'Services',
    technologies: 'Technologies',
    viewAll: 'Tout voir',
    resources: 'Ressources',
    company: 'Entreprise',
    getInTouch: 'Nous contacter',
    letsTalk: 'Parlons-en',
    cookiePreferences: 'Préférences cookies',
  },
  components: {
    learnMore: 'En savoir plus',
    logoAlt: (name: string) => `Logo ${name}`,
    serviceType: 'Conseil data',
    ctaBanner: {
      heading: 'Parlons de votre plateforme data.',
      subtitle: 'Un appel de 45 minutes, sans engagement.',
      button: 'Parlons-en',
    },
    founder: {
      moreAbout: 'En savoir plus sur Antoine',
      and: ' et ',
    },
    caseStudy: {
      eyebrow: 'Étude de cas',
      engagementDetails: 'La mission en bref',
      company: 'Entreprise',
      service: 'Service',
      tools: 'Outils',
      readCaseStudy: 'Lire l’étude de cas',
      readClientCaseStudy: (client: string) => `Lire l’étude de cas ${client}`,
      photoOf: (name: string) => `Photo de ${name}`,
      translatedFromEnglish: 'Traduit de l’anglais',
    },
    problemOutcome: {
      problem: 'Le problème',
      outcome: 'Ce que vous obtenez',
    },
    techLayout: {
      leadAuditEyebrow: 'Vous ne savez pas encore ce qu’il vous faut',
      leadBuildEyebrow: 'Pas encore de plateforme data',
      leadImproveEyebrow: (tool: string) => `Besoin d’aide avec ${tool}`,
    },
    pricing: {
      factorsTitle: 'Ce qui fait varier le prix',
      factor: 'Critère',
      lower: 'Prix plus bas',
      higher: 'Prix plus haut',
      scenarios: 'Exemples',
    },
    retainer: {
      fitLabel: 'Fait pour vous si',
      included: 'Inclus',
      notIncluded: 'Non inclus',
      everythingIn: (tier: string) => `Tout ce que contient l’offre ${tier}, plus :`,
    },
  },
  diagrams: {
    dataPlatform: {
      aria: 'Schéma de plateforme data Nimzo Data : les sources passent par l’ETL vers BigQuery, sont transformées, puis exposées dans les outils de BI. Dagster orchestre l’ensemble.',
      sources: 'Sources',
      andMore: '+ et d’autres',
      etl: 'ETL / ELT',
      warehouse: 'Entrepôt',
      bi: 'Business Intelligence',
      transformation: 'Transformation',
      orchestration: 'Orchestration',
    },
    tameson: {
      aria: 'Architecture Dataform en couches chez Tameson : données brutes collectées via Dagster, Datastream, Fivetran et Stitch dans BigQuery, puis modélisées dans Dataform en couches staging, intermédiaire, marts et rapports.',
      bigQueryNote: 'Tout est dans BigQuery',
      raw: 'Brut',
      ingestedVia: 'Collecté via :',
      modeledIn: 'Modélisé dans Dataform',
      layers: [
        { label: 'Staging', blurb: 'Une table par table brute. Renommage, typage, nettoyage léger.' },
        { label: 'Intermédiaire', blurb: 'Jointures et logique au sein d’un même domaine.' },
        { label: 'Marts', blurb: 'Logique métier transverse : faits et dimensions.' },
        { label: 'Rapports', blurb: 'Tables plates prêtes pour Data Studio.' },
      ],
    },
    aeyde: {
      aria: 'Stack data d’Aeyde : avant et après la mission.',
      before: 'Avant',
      after: 'Après',
      etl: 'ETL',
      warehouse: 'Entrepôt',
      transformation: 'Transformation',
      bi: 'BI',
      splitLogic: 'logique éclatée',
      derivedTablesBefore: '119 tables dérivées',
      onePlace: 'un seul endroit',
      derivedTablesAfter: '0 table dérivée',
      perMonth: (amount: string) => `${amount}/mois`,
    },
    modelingLayers: [
      { label: 'Brut', caption: 'tables sources telles que chargées' },
      { label: 'Staging', caption: 'renommées, typées, une par table source' },
      { label: 'Intermédiaire', caption: 'jointures et logique métier' },
      { label: 'Marts', caption: 'faits et dimensions, documentés, testés' },
      { label: 'Indicateurs gouvernés', caption: 'indicateurs définis une fois, dans l’outil de BI', gapBefore: true },
    ],
    platformLayers: [
      { label: 'Sources', caption: 'Shopify, Stripe, CRM, GA4, une base de données' },
      { label: 'Collecte', caption: 'Airbyte' },
      { label: 'Entrepôt', caption: 'BigQuery' },
      { label: 'Transformation', caption: 'Dataform ou dbt : modèles, tests, lignage' },
      { label: 'BI', caption: 'tableaux de bord, indicateurs, analyse' },
    ],
  },
  cookie: {
    label: 'Consentement aux cookies',
    message: 'Nous utilisons des cookies de mesure d’audience pour améliorer le site. Vous pouvez les accepter ou les refuser, et changer d’avis à tout moment.',
    accept: 'Accepter',
    decline: 'Refuser',
  },
};

export default ui;
