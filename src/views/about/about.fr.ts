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
    { label: 'Accord de traitement des données (DPA)', value: 'Sur demande' },
    { label: 'Hébergement des données', value: 'Dans l’UE par défaut' },
    {
      label: 'Facturation',
      value: 'En euros par défaut, par virement. GBP et USD possibles sur demande.',
    },
    { label: 'Langues de travail', value: 'Français et anglais' },
    { label: 'Heures ouvrées', value: 'Du lundi au vendredi, 9 h – 18 h, heure de Paris' },
  ],
  principles: [
    {
      icon: 'compass',
      title: 'Nous pilotons, sans nous installer chez vous',
      body: 'Nous menons le travail technique. Votre équipe participe aux revues et peut prendre des parties en main quand c’est pertinent. Pas de points quotidiens, pas d’immersion à plein temps.',
    },
    {
      icon: 'database',
      title: 'Le socle d’abord, les analyses ensuite',
      body: 'Un tableau de bord ne vaut que par les données qui l’alimentent. Les fonctions d’IA aussi : elles ont besoin de modèles de données gouvernés pour être justes. Nous commençons par les fondations.',
    },
    {
      icon: 'target',
      title: 'Un seul cloud, par choix',
      body: 'Nous ne construisons que sur GCP. Un seul cloud, c’est le connaître en profondeur ; un cabinet réparti sur trois connaît moins bien chacun.',
    },
    {
      icon: 'tag',
      title: 'Prix transparents, périmètre défini',
      body: 'Le conseil data a la réputation de missions qui gonflent. Prix fixes, fourchettes publiées sur nos pages de services, aucune vente additionnelle de travail dont vous n’avez pas besoin.',
    },
    {
      icon: 'message-square',
      title: 'Une culture européenne, un langage direct',
      body: 'Basés en France, nous travaillons dans toute l’Europe. Pas de jargon, des phrases courtes.',
    },
    {
      icon: 'graduation-cap',
      title: 'Des équipes autonomes plutôt que des clients dépendants',
      body: 'Chaque mission se termine par de la documentation, une formation et une passation propre. Votre équipe comprend ce que nous avons construit et pourquoi. Si un jour vous n’avez plus besoin de nous, c’est une réussite.',
    },
  ],
  existsHeading: 'Pourquoi Nimzo Data existe.',
  reason1Title: 'Un vide sur le marché',
  reason1Body: 'Une entreprise de 40 personnes avec un seul analyste a besoin d’une plateforme data et n’a personne pour la construire. Les grands cabinets chiffrent ce travail pour des budgets de grands comptes, et un recrutement senior à temps plein dépasse ce que demande le poste. Nous le faisons en projet au forfait, dimensionné pour une équipe de zéro ou une personne.',
  reason2Title: 'Une seule chose, bien faite',
  reason2Body: 'GCP, parce que BigQuery est un entrepôt qu’une entreprise peut faire tourner sans personne de la data : il n’y a pas de cluster à administrer ni à régler. Au forfait, parce que la facturation à l’heure récompense les mauvais réflexes. Pas de couche commerciale : la personne au bout du fil est celle qui répond du travail.',
  reason3Title: 'Petits, par choix',
  reason3Body: 'Moins de clients, c’est un meilleur travail pour chacun.',
  nameBody: 'Nimzo Data tient son nom de la défense Nimzo-indienne, où les Noirs cèdent la paire de fous, un avantage visible, contre un atout structurel qui dure toute la partie. Nous construisons de la même façon : les fondations que personne ne voit valent plus que le tableau de bord que tout le monde regarde.',
  founderHeading: 'Qui dirige Nimzo Data.',
  principlesHeading: 'Comment nous travaillons.',
  procurementHeading: 'Pour votre service achats.',
  procurementFooter: 'Pour tout autre document requis par votre référencement fournisseur, demandez-le pendant l’appel et nous vous l’enverrons.',
  metaTitle: 'À propos | Conseil data Google Cloud basé en France | Nimzo Data',
  metaDescription: 'Cabinet de conseil data spécialisé Google Cloud, basé en France. Plateformes data pour les entreprises européennes en croissance. Audit payant, construction au forfait, ingénierie senior uniquement.',
  heroTitle: 'Un cabinet data à taille humaine.<br>Et qui le restera.',
  heroSubtitle: 'Petite équipe. Un seul cloud. Audit payant, construction au forfait.<br>Nous travaillons avec peu de clients à la fois, pour aller en profondeur.',
  heroCta: 'Parlons-en',
  nameTitle: 'Pourquoi Nimzo ?',
};

export default copy;
