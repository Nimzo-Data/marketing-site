import type { CaseStudiesCopy } from './caseStudies.en';

const copy: CaseStudiesCopy = {
  aeyde: {
    headline:
      'Aeyde : tableaux de bord Looker en quelques secondes, 77 % de coûts data en moins, et la confiance retrouvée dans les chiffres',
    subline:
      'En cinq ans, la stack data d’Aeyde a grossi sans plan, répartie sur plusieurs outils. Les tableaux de bord étaient lents et certains KPI avaient deux définitions.',
    company: { size: '10 à 50 salariés', sector: 'Chaussures et accessoires (D2C + B2B)' },
    service: {
      label: 'Construction',
      shortDescription:
        'Une nouvelle plateforme data sur Google Cloud, ou le remplacement de celle qu’il faut abandonner. Les deux tournent en parallèle jusqu’à ce que les chiffres concordent.',
    },
    shortQuote: {
      text: 'Les tableaux de bord qui mettaient des minutes à charger s’affichent en quelques secondes, … et toute l’équipe a de nouveau confiance dans les données.',
      authorTitle: 'Responsable BI, Aeyde',
      translatedFrom: 'en',
    },
  },
  tameson: {
    headline:
      'Tameson : de données BigQuery inexploitées à des analyses sur 6 marchés',
    subline:
      'Les pipelines tournaient, les données arrivaient dans BigQuery, mais l’essentiel restait non modélisé et inutilisé.',
    company: { size: '10 à 50 salariés', sector: 'E-commerce de fournitures industrielles' },
    service: {
      label: 'Amélioration',
      shortDescription:
        'Corriger ce qui ne marche pas ou ajouter ce qui manque, un projet à la fois, à prix fixe.',
    },
    shortQuote: {
      text: '… la plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. … C’est la plateforme sur laquelle tournent réellement nos analyses.',
      authorTitle: 'CTO et cofondateur, Tameson',
      translatedFrom: 'en',
    },
  },
};

export default copy;
