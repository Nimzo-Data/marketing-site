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
- Write "HT" after monthly prices where the English says "excl. VAT".
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
| spreadsheet | tableur, or fichiers Excel / Google Sheets when it reads better |
| handover | passation |
| retainer, monthly plan | forfait mensuel |
| on call | d’astreinte |
| fixed price | prix fixe, au forfait |
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
| change work | travaux d’évolution |
| change day | jour d’évolution |
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
| What brings most clients here. | Ce qui amène la plupart de nos clients. |
| Common questions. | Questions fréquentes. |
| No sales pitch. | Sans discours commercial. |
| Based in France. Serving Europe. | Basés en France. Clients dans toute l’Europe. |
