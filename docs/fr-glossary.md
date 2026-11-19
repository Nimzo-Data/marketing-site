# French glossary

The terms and rules the French site uses. Every recurring fix from review goes here, then gets applied everywhere.

**Who reads the French site:** founders, CEOs, CFOs and operations leads at French SMEs, usually not data people.
**The test for every term:** would that reader say it out loud in a meeting, in French?

## Voice

- *Vouvoiement*, always.
- The same voice as the English: short sentences, no jargon, concrete numbers, no sales superlatives.
- Write French, don't translate. Restructure a sentence when the literal version sounds translated.
- Use "nous" for Nimzo Data, as the English uses "we". Antoine is named in the third person where the English names him.

## Typography

- Type ordinary spaces before `: ; ? !` and inside « ». The site turns them into non-breaking spaces (`src/i18n/typography.ts`).
- Use « guillemets » for quotes. Use the typographic apostrophe ’.
- Prices: `3 000 €`, `15 000 – 50 000 €`, `950 € par mois`. Prices listed in `src/data/prices.ts` are formatted by `eur()` / `eurRange()`.
- Write « HT » after every price shown to a buyer, not only monthly ones: home service cards, audit, build and improve amounts and labels, support tier prices (`${eur(...)} HT par mois`, `${eurRange(...)} HT`). In running text, once per sentence is enough.
- Full amounts in running text (« 200 000 € »). « k€ » only in headings. Ranges in running text use « 84 à 90 % », not an en dash.
- Durations: "1 à 2 semaines", "8 à 16 semaines". Keep the en dash in compact ranges such as "2–3 sources".
- Hours: "9 h – 18 h, heure de Paris".
- Dates: "9 septembre 2026".
- Capitalisation: sentence case for headings, as in the English. No capital after a colon.

## Service and tier names

| English | French |
|---|---|
| Audit | Audit |
| Build | Construction |
| Improve | Amélioration |
| Support | Support |
| Run / Extend / Lead | Maintien / Évolution / Pilotage |

These names are written with a capital letter when they name the service ("un projet Amélioration", "l’offre Maintien").

## Translate

| English | French |
|---|---|
| dashboard | tableau de bord |
| report | rapport |
| metric | indicateur |
| KPI | KPI (kept) |
| spreadsheet | « Excel et Google Sheets » (never « tableur », which no buyer says) |
| handover | passation |
| retainer, monthly plan | forfait mensuel (« forfait » is kept for Support only) |
| on call, monitored | « qui surveille », « qui veille sur » (never « d’astreinte »: support is business hours only) |
| fixed price (projects) | « à prix fixe » (« une construction à prix fixe », « un projet à la fois, à prix fixe »). Never « au forfait » for projects: it would clash with Support’s « forfait mensuel ». |
| quote (noun) | devis |
| proposal | proposition |
| scope | périmètre |
| deliverable | livrable |
| finding | constat |
| verdict per layer | verdict par couche |
| layer (of the platform) | couche |
| source (of data) | source |
| connector | connecteur |
| sync | synchronisation |
| ingestion / collection | collecte |
| modeling | modélisation |
| semantic layer | couche sémantique |
| governed metrics | indicateurs gouvernés |
| incident | incident |
| monitoring and alerts | surveillance et alertes |
| business hours | heures ouvrées |
| business day | jour ouvré |
| discovery call | appel découverte |
| kickoff | lancement |
| walkthrough | présentation commentée |
| change work | développement(s) (« Seuls les développements sont plafonnés ») |
| change day | jour de développement |
| leadership | direction |
| board pack, board meeting | dossier du conseil, conseil d’administration |
| case study | étude de cas |
| sample audit | exemple d’audit |
| GDPR | RGPD |

## Keep in English

French businesses say these as they are:

- data (équipe data, plateforme data, besoin data);
- reporting (le reporting);
- pipeline;
- BI;
- SQL, API, CI/CD;
- cloud;
- data analyst, data engineer;
- startup, scale-up, e-commerce;
- every tool, product and company name.

## Both, on first mention

Give the French term and the English one in brackets the first time on a page, then use the French term alone:

- entrepôt de données (data warehouse), then "entrepôt";
- tables de staging, intermédiaires et marts: keep these layer names in English. They are the names in the code.

## Fixed phrases

| English | French |
|---|---|
| Let’s talk | Parlons-en |
| Learn more | En savoir plus |
| See Audit / See Build … | Voir l’Audit / Voir la Construction … |
| Not sure this is the right fit? | Vous hésitez ? |
| What brings most clients here. | Les situations que nous rencontrons le plus souvent. |
| Common questions. | Questions fréquentes. |
| No sales pitch. | Sans engagement. |
| Based in France. Serving Europe. | Basés en France. Clients dans toute l’Europe. |

## Avoid

Words that read as translated or bookish to a French buyer, found in review:

- « goulot » / « goulot d’étranglement » for a person: say what happens instead (« tout passe par une seule personne », « une seule personne détient tout »).
- « tableur »: say « Excel et Google Sheets ».
- « goulot » / « point de défaillance unique » for a person → « tout repose sur une seule personne ».
- « astreinte » / « d’astreinte »: support is business hours → « qui surveille », « qui veille sur ».
- « ingénierie senior », « data engineering senior » → « des ingénieurs seniors », « un data engineer senior ». One term: « data engineer senior », not « ingénieur senior » or « aide senior ».
- « secrets » (in code) → « clés et mots de passe ».
- « vit / vivent » for where data, definitions or software sit → « se trouve », « est défini », « s’exécute ».
- « juste » for accurate (« à jour et juste ») → « fiable », « exact ».
- « répond du travail » → « est responsable du travail ».
- « Comment X a fait Y » case-study headlines → nominal: « Aeyde : tableaux de bord Looker qui chargent en quelques secondes ».
- « aide sur », « besoin d’aide sur X » → « aide avec X ».
- « verrouillé » → « sécurisé »; « en dessous » (underneath) → « en coulisses ».
- Tier names take an article: « l’offre Maintien », « passer à l’offre Maintien », « dans les offres Évolution et Pilotage ». Never bare « au Maintien », « dans Maintien ».
- « remonter » for moving to a higher tier → « repasser à l’offre supérieure ».
- Layer names: « staging, intermédiaire, marts, rapports » (never « sorties », never « transformation et reporting »). « jeux de données » for datasets.
- One term for the metric layer: « indicateurs gouvernés », not « définitions validées ».
- « dossier du conseil », not « rapports pour le conseil »; « fuseau horaire », not « fuseau ».
- « à la date de » (as of) → « en septembre 2026 ».
- « coût de la prise en charge » for cost of ownership → « coût de possession ».
- « digne de la production », « de niveau production » (production-grade) → « prêt pour la production ».
- « de niveau grande entreprise » (enterprise-grade) → « adapté aux grandes entreprises ».
- « très investi sur X » → « avoir beaucoup investi dans X ».
- « propre » for clean (« passation propre », « stockage propre ») → say what it is: « passation soignée ».
- « parties prenantes » → « décideurs », « équipes concernées ».
- « sans cérémonie », « d’origine », « de la catégorie » → « sans lourdeur », « en standard », « du marché ».
- « analytique embarquée » → « BI embarquée »; « sur-dimensionnement » → « surdimensionné »; « le data engineering » is masculine.
- « onglets d’union » → « onglets de consolidation »; « dans le métier » (in the industry) → drop it or « chez les professionnels ».
- « GCP » in prose → « Google Cloud » (« GCP » stays only in tool-page titles and slugs).
- « frais de mise en œuvre » for our fee → « honoraires de mise en œuvre ».
- « déboguer » for exports, connectors, breakdowns → « corriger », « dépanner ».
- « au niveau client / produit / commande » → « par client », « par produit », « par commande »; « au-dessus de » (on top of) → « à partir de », « en plus de ».
- « Attribut / Détails » table headers → « Élément / Détail »; « Effet : » on quick wins → « Bénéfice attendu : ».
- « tableaux de bord » for dashboards, not a mix with « rapports Data Studio » for the same object (except in a tool name).
- « casser / cassé / casse » for failures → « tomber en panne », « ne fonctionne plus », « dysfonctionnement ». Keep it for one or two punchy lines.
- « un vrai X » (a real X) → « un X concret », « complet », « à part entière ».
- « de niveau », « capacités », « asynchrone par défaut », « démo », « installation » (setup), « le livrable vous reste » → « ingénieurs seniors », « nouveaux chantiers », « par écrit par défaut », « démonstration », « dispositif actuel ».
- « entreprises européennes en croissance » → « PME et ETI en croissance » (address the reader; Europe only in the location line).
- « sans discours commercial », « avis franc » → « sans engagement », « avis sans détour ».
- « plus de » for « fini le » (inverted logic): check every « plus de temps perdu ».
- « expérience de développement » → « confort de développement »; « cela achète », « de manière fiable » → rephrase with the natural French verb.
- Mixed terms: « ordonnanceur » (not « orchestrateur », outside the Dagster tool page), « rachat » (not « acquisition »).
- Capitals in running text: « la présente politique de confidentialité », « les présentes conditions générales d’utilisation ». Capitals only in headings and page-name links.
- Legal wording: « dans toute la mesure permise par la loi », « né de » / « lié à » (not « découlant de … ou s’y rapportant »), « appropriées » for « reasonable » measures, « art. 6, § 1, point f) ».
- « partent tout seuls » for reports → « envoyés par e-mail », « mis à jour tout seuls ».

- « visioconférence » → « visio » (« Restitution en visio »).
- « votre dépôt » (code repository) → « votre code ». « dépôt Git » only on technical pages, when the repository itself is the point.
- « le livrable / le rapport vous reste » → « le rapport est à vous, quoi que vous décidiez ».
- « périmètre cerné » → « périmètre connu » or « défini ».
- « quel qu’il soit » → say what it covers: « tout type de plateforme ».
- « laissé par un prestataire » → « hérité d’un ancien prestataire ».
- « tient-il la route ? » → « pouvons-nous nous fier à … ? ».
- « Ce que l’audit y répond » → « Les réponses de l’audit ».
- « verdict par couche » in sales copy: the reader hasn’t seen the layers yet → « un verdict sur chaque partie de votre plateforme », « de la collecte aux tableaux de bord », or name the parts. Keep « couche » where the layers are shown (Construction diagram, sample audit table).
- A link standing alone after a sentence starts with a verb: « Voir les outils… ».

## Layout

- Lines split in two in the copy (home problem/outcome rows) show each part on its own line on desktop. Keep each part to about 45 characters so it fits on one line at 1280px, and split where a reader would pause, not just at a comma.
- Short labels that sit beside fixed-width columns (home “Par où commencer” notes) should stay close to the English length.
- « Évolution » is the name of the second Support tier only. Change work is « développement » (« jours de développement »), never « travaux d’évolution ». Generic « évolution(s) » is fine where it can't be read as either.
