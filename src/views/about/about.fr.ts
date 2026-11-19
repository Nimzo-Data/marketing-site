import type { Copy } from './about.en';
import { eur } from '../../i18n/format';

const copy: Copy = {
  procurementFacts: [
    { label: 'Entité juridique', value: 'Nimzo Data SARL, immatriculée en France' },
    { label: 'SIRET', value: '994 080 497 00013' },
    { label: 'Numéro de TVA', value: 'FR74994080497' },
    {
      label: 'Responsabilité civile professionnelle',
      value: `Assurée chez Beazley, couverture de ${eur(500000, 'fr')}. Attestation sur demande.`,
    },
    { label: 'Accord de sous-traitance des données (DPA)', value: 'Sur demande' },
    { label: 'Hébergement des données', value: 'Dans l’UE par défaut' },
    {
      label: 'Facturation',
      value: 'En euros par défaut, par virement. Livres sterling et dollars possibles sur demande.',
    },
    { label: 'Langues de travail', value: 'Français et anglais' },
    { label: 'Heures ouvrées', value: 'Du lundi au vendredi, 9 h – 18 h, heure de Paris' },
  ],
  principles: [
    {
      icon: 'compass',
      title: 'Nous faisons le travail, sans nous installer chez vous',
      body: 'Votre équipe participe aux revues et reprend certaines parties quand c’est utile, sans point quotidien ni présence à plein temps.',
    },
    {
      icon: 'database',
      title: 'Les données fiables d’abord, les tableaux de bord ensuite',
      body: 'Un tableau de bord ne vaut que par ses données, et l’IA aussi : elle a besoin de données bien définies et testées pour donner des réponses fiables.',
    },
    {
      icon: 'target',
      title: 'Uniquement Google Cloud',
      body: 'Nous ne construisons que sur Google Cloud, et nous le connaissons à fond : BigQuery, Dataform, Dagster.',
    },
    {
      icon: 'tag',
      title: 'Des prix affichés, un périmètre fixé d’avance',
      body: 'Les missions de conseil data dépassent souvent le budget et les délais. Nos projets sont à prix fixe, avec des fourchettes publiées sur les pages de services, et nous ne vous vendons que ce dont vous avez besoin.',
    },
    {
      icon: 'message-square',
      title: 'En français ou en anglais, sans jargon',
      body: 'Basés en France, nous travaillons avec des clients dans toute l’Europe.',
    },
    {
      icon: 'graduation-cap',
      title: 'Votre équipe doit pouvoir se passer de nous',
      body: 'Chaque mission se termine par de la documentation, une formation et une passation. Votre équipe sait ce que nous avons construit et pourquoi, et peut s’en servir sans nous.',
    },
  ],
  existsHeading: 'Pourquoi Nimzo Data existe.',
  reason1Title: 'Personne ne s’adresse aux petites équipes data',
  reason1Body: 'Une entreprise de 40 personnes avec un seul analyste a besoin d’une plateforme data, mais n’a personne pour la construire. Les grands cabinets sont hors de prix pour elle, et un data engineer senior à temps plein, c’est trop. Nous travaillons à prix fixe pour les entreprises qui ont un analyste, ou aucun.',
  reason2Title: 'Google Cloud, à prix fixe, sans intermédiaire',
  reason2Body: 'Google Cloud, parce que BigQuery se gère sans spécialiste : aucun serveur à administrer. À prix fixe, parce que la facturation à l’heure pousse à passer du temps, pas à finir. Pas de commercial : la personne que vous avez eue au téléphone est celle qui fait le travail.',
  reason3Title: 'Une petite équipe',
  reason3Body: 'Nous prenons peu de clients à la fois, pour rester disponibles pour chacun.',
  nameBody: 'Nimzo Data tient son nom de la défense Nimzo-indienne, où les Noirs cèdent la paire de fous, un avantage visible, pour une meilleure structure qui compte jusqu’à la fin de la partie. Nous travaillons pareil : les fondations qu’on ne voit pas comptent plus que le tableau de bord que tout le monde regarde.',
  founderHeading: 'Qui dirige Nimzo Data.',
  principlesHeading: 'Comment nous travaillons.',
  procurementHeading: 'Pour votre service achats.',
  procurementFooter: 'Votre service achats a besoin d’un autre document ? Demandez-le pendant l’appel, nous vous l’enverrons.',
  metaTitle: 'À propos | Conseil data Google Cloud basé en France | Nimzo Data',
  metaDescription: 'Cabinet de conseil data spécialisé Google Cloud, basé en France. Plateformes data pour les PME et ETI en croissance. Audit payant, puis construction à prix fixe, par des data engineers seniors.',
  heroTitle: 'Un petit cabinet data,<br>avec peu de clients à la fois.',
  heroSubtitle: 'Nous travaillons uniquement sur Google Cloud.<br>Audit payant, puis construction à prix fixe.',
  heroCta: 'Parlons-en',
  nameTitle: 'Pourquoi Nimzo ?',
};

export default copy;
