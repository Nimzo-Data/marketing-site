import type { CaseStudiesCopy } from './caseStudies.en';

const copy: CaseStudiesCopy = {
  aeyde: {
    headline:
      'Aeyde : des tableaux de bord Looker qui s’affichent en quelques secondes, 77 % de coûts d’infrastructure data en moins, des chiffres à nouveau fiables',
    subline:
      'Cinq ans de croissance avaient éparpillé la stack data d’Aeyde sur plusieurs systèmes, ralentissant le reporting et compliquant les décisions.',
    company: { size: '10 à 50 salariés', sector: 'Chaussures et accessoires (D2C + B2B)' },
    service: {
      label: 'Construction',
      shortDescription:
        'Une nouvelle plateforme data Google Cloud, ou le remplacement de celle qui doit partir. L’ancienne et la nouvelle tournent en parallèle jusqu’à ce que les chiffres concordent.',
    },
    shortQuote: {
      text: 'Les tableaux de bord qui mettaient des minutes à charger s’affichent en quelques secondes, et toute l’équipe a de nouveau pleinement confiance dans les données.',
      authorTitle: 'Responsable BI, Aeyde',
      translatedFrom: 'en',
    },
  },
  tameson: {
    headline:
      'Tameson : des données BigQuery inexploitées devenues le socle d’analyse de 6 marchés',
    subline:
      'Les pipelines tournaient et les données arrivaient dans BigQuery, mais l’essentiel restait non modélisé et inutilisé.',
    company: { size: '10 à 50 salariés', sector: 'E-commerce de fournitures industrielles' },
    service: {
      label: 'Amélioration',
      shortDescription:
        'Ajouter la couche qui manque ou réparer celle qui ne marche pas, un projet à la fois, à prix fixe, avec l’équipe que vous avez déjà.',
    },
    shortQuote: {
      text: 'La plupart de nos données BigQuery n’étaient pas exploitables pour l’analyse. C’est aujourd’hui la plateforme sur laquelle tournent réellement nos analyses.',
      authorTitle: 'CTO, Tameson',
      translatedFrom: 'en',
    },
  },
};

export default copy;
