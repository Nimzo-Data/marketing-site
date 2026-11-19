import type { CaseStudiesCopy } from './caseStudies.en';

const copy: CaseStudiesCopy = {
  aeyde: {
    headline:
      'Aeyde : tableaux de bord Looker en quelques secondes, 77 % de coûts data en moins',
    subline:
      'En cinq ans, la stack data d’Aeyde a grossi sans plan : tableaux de bord lents, KPI définis en double.',
    company: { size: '10 à 50 salariés', sector: 'Chaussures et accessoires (D2C + B2B)' },
    service: {
      label: 'Construction',
      shortDescription:
        'Une nouvelle plateforme data Google Cloud, ou le remplacement de celle qui doit partir. Ancienne et nouvelle tournent en parallèle jusqu’à ce que les chiffres concordent.',
    },
    shortQuote: {
      text: 'Les tableaux de bord qui mettaient des minutes à charger s’affichent en quelques secondes, et toute l’équipe a de nouveau pleinement confiance dans les données.',
      authorTitle: 'Responsable BI, Aeyde',
      translatedFrom: 'en',
    },
  },
  tameson: {
    headline:
      'Tameson : des données BigQuery inexploitées, devenues le socle d’analyse de 6 marchés',
    subline:
      'Les pipelines tournaient, les données arrivaient dans BigQuery, mais l’essentiel restait non modélisé et inutilisé.',
    company: { size: '10 à 50 salariés', sector: 'E-commerce de fournitures industrielles' },
    service: {
      label: 'Amélioration',
      shortDescription:
        'Compléter ou réparer un morceau de votre plateforme data, avec votre équipe actuelle. Un projet à la fois, à prix fixe.',
    },
    shortQuote: {
      text: 'La plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. C’est aujourd’hui la plateforme sur laquelle tournent réellement nos analyses.',
      authorTitle: 'CTO, Tameson',
      translatedFrom: 'en',
    },
  },
};

export default copy;
