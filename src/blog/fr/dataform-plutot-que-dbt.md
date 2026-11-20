---
title: "dbt est le meilleur outil. Dataform est le meilleur choix."
description: "Dans une entreprise qui compte zéro ou un profil data, le coût qui pèse est celui de la possession, pas celui de la licence. Pourquoi nous choisissons Dataform par défaut sur BigQuery, dans quels cas dbt l’emporte, et quoi répondre à un client qui a déjà décidé d’utiliser dbt."
pubDate: 2026-09-09
draft: false
translationOf: dataform-not-dbt
---

En 2024, aucun acheteur sans profil data n’avait entendu parler de dbt. En 2026, de plus en plus d’entreprises nous contactent avec le choix déjà fait : la couche de transformation sera dbt, reste à savoir qui la construit. Certaines ont lu des articles. Plus souvent, elles ont demandé à un assistant IA comment monter une plateforme data, et il a répondu dbt, parce que c’est ce que disent ses données d’entraînement.

Nous recommandons quand même Dataform par défaut à la plupart d’entre elles. Sur nos vingt dernières missions environ, une sur dix a fini sur dbt, et chacune correspondait à l’une des quatre situations décrites plus bas. Les autres tournent sur Dataform, la couche de transformation intégrée à BigQuery.

## Ce que dbt fait mieux

Presque tout ce qui concerne le travail d’un développeur. La documentation est meilleure, les tests sont plus riches, l’écosystème de packages n’a pas d’équivalent. Le moteur en Rust de dbt analyse les gros projets en une fraction du temps qu’exigeait la version Python. Le vivier de recrutement connaît dbt.

Il y a ensuite l’IA. Les modèles eux-mêmes sont du SQL ordinaire dans les deux outils, et Dataform a repris la structure de projet de dbt : un assistant IA écrit donc aussi bien un modèle de staging pour l’un que pour l’autre. L’écart se situe dans tout ce qui entoure le SQL : syntaxe de configuration, ligne de commande, packages, conventions de projet. Là, Claude Code, Cursor et les autres connaissent nettement mieux dbt, car il y en a beaucoup plus en ligne dans les données sur lesquelles ils ont été entraînés. En septembre 2026, un analyste seul est mieux aidé par l’IA sur un projet dbt que sur un projet Dataform.

Si vous employez deux ou trois personnes qui passent leurs journées dans une base de code de transformation, dbt est le bon choix et nous le dirons dès le premier appel.

Un article « dbt ou Dataform » compare d’ordinaire les fonctionnalités, l’écosystème et la portabilité entre entrepôts. Il s’adresse à des équipes qui ont des data engineers. La plupart de nos clients en ont zéro ou un, et quand il y en a un, [c’est un analyste](/fr/blog/premier-data-analyst-plateforme-data/).

## À quoi sert une couche de transformation dans une entreprise de 50 personnes

Un client type a cinq ou six sources et 100 à 150 modèles : surtout des tables de staging, puis des dimensions, des faits et des tables de reporting construites par-dessus. [Aeyde](/fr/etudes-de-cas/aeyde/), dont l’étude de cas figure sur ce site, en exploite 164. L’analyste intervient sur la couche quand une source s’ajoute, quand la définition d’un indicateur change ou quand un rapport a besoin d’une nouvelle table : chaque semaine dans les mois qui suivent une passation, moins souvent une fois le reporting stabilisé. C’est toujours une seule personne, et le travail consiste presque toujours à modifier du SQL.

Le confort de développement qui fait la réputation de dbt ne devient rentable que quand plusieurs personnes travaillent ensemble sur le même code : packages, macros, tests unitaires, site de documentation, contrôles à chaque pull request. Une personne qui modifie une requête n’en tire presque rien. Dans ce cas, ce qui pèse, c’est le coût de possession de l’outil. Nous en comptons trois : une seconde plateforme, le compteur de builds, et le fait de faire tourner dbt Core soi-même.

**Une seconde plateforme, hors de BigQuery.** Les deux projets se ressemblent presque trait pour trait : des fichiers SQL avec un bloc de configuration en tête, quelques fichiers de configuration, une arborescence de modèles staging, intermédiaires et marts, et un ordonnanceur. Dataform ajoute du JavaScript facultatif, dbt ajoute du Jinja et du YAML. Qui sait maintenir l’un ne sera pas perdu dans l’autre.

La différence tient à l’endroit où Dataform s’exécute : dans BigQuery, dont il est une fonctionnalité et non un service à part. Vous créez un dépôt Dataform, vous travaillez dans des espaces de travail et vous planifiez des workflows, le tout depuis la console BigQuery, dans le projet Google Cloud où se trouve déjà l’entrepôt : mêmes utilisateurs, mêmes permissions, même facture, avec un compte de service à configurer une seule fois.

Un projet dbt sur dbt Cloud, c’est un compte sur la plateforme d’un autre éditeur, avec ses propres utilisateurs à créer, ses propres permissions, son propre accord de traitement des données, sa propre facture, et une clé de compte de service BigQuery envoyée chez cet éditeur, qu’il faut garder à jour. Chaque point est mineur, mais dans une entreprise sans profil data, personne n’est chargé de s’en occuper. Chez Aeyde, une marque de chaussures et d’accessoires avec une équipe BI d’une seule personne, la stack que nous avons remplacée comptait quatre éditeurs à administrer : Stitch, Panoply, dbt et Looker. Celle que nous avons construite en compte deux, Google et Airbyte, et tout, sauf la collecte, s’administre depuis la console que l’entreprise utilisait déjà.

**Le compteur de builds.** dbt Cloud facture au nombre de modèles exécutés chaque mois. Tarifs en septembre 2026 :

| Offre | Prix | Builds de modèles réussis inclus | Au-delà |
|---|---|---|---|
| Developer | Gratuit, 1 licence | 3 000 par mois | Les exécutions planifiées sont suspendues jusqu’au mois suivant |
| Starter | 100 $ par licence développeur et par mois, jusqu’à 5 licences | 15 000 par mois | Facturé au build, à un tarif que la page des prix n’indique plus |
| Enterprise | Négocié, annuel | 100 000 par mois | Négocié |

Les builds sont comptés dans chaque environnement de déploiement, production comme staging ; seules les exécutions depuis l’éditeur de développement sont gratuites. Quand le compteur a été lancé en août 2023, le dépassement coûtait un cent (0,01 $) par build, et les guides tarifaires tiers citent toujours ce chiffre en septembre 2026. La page de dbt dit seulement que l’usage supplémentaire est facturé aux tarifs de la page des prix, et cette page n’en donne aucun.

L’offre gratuite couvre un projet de 100 modèles exécuté une fois par jour, sans aucune marge pour une relance. [Aeyde](/fr/etudes-de-cas/aeyde/) exécute ses 164 modèles une fois par jour et 16 d’entre eux une seconde fois l’après-midi : environ 5 400 builds par mois, presque le double de l’offre gratuite et un tiers du quota Starter. Sur dbt Cloud, cela fait une licence et aucun dépassement, 1 200 $ par an. Si Aeyde rafraîchissait tout quatre fois par jour, ce qui arrive vite quand une entreprise veut suivre ses chiffres en cours de journée, cela ferait environ 20 000 builds par mois, au-dessus des 15 000 de Starter.

Notre plus gros projet Dataform, chez [Tameson](/fr/etudes-de-cas/tameson/), compte environ 550 modèles, construits en deux ans. Ils s’exécutent tous les jours en production et en staging, et sont reconstruits en entier le dimanche : cela fait environ 35 000 builds par mois, et huit personnes auraient besoin d’une licence développeur. C’est au-dessus du plafond de cinq licences de l’offre Starter : il faudrait passer par une négociation Enterprise. Au tarif Starter, il faut compter au minimum 800 $ par mois de licences, auxquels s’ajoutent environ 200 $ de builds au tarif de dépassement de 2023, soit 12 000 $ par an. Le même pipeline sur Dataform ne coûte rien de plus que BigQuery.

Ce montant repose sur le tarif de dépassement de 2023, et nous ne connaissons pas le tarif de septembre 2026. Tameson a plus de modèles et plus de personnes qui y touchent que la plupart de nos clients, mais tous les projets grandissent dans ce sens.

Le montant compte moins que la façon dont dbt facture : à la licence, puis au build. dbt Labs a changé trois fois son modèle de prix depuis 2022 : le prix de la licence a doublé en décembre 2022, le compteur de builds est arrivé en août 2023, et des fonctionnalités facturées à l’usage sont venues avec la fusion de 2026. Les deux derniers changements ont déplacé le coût des licences vers la consommation. Rien ne garantit que le budget de janvier soit la facture de décembre, et personne chez vous n’est chargé de le remarquer.

**Faire tourner dbt Core soi-même.** dbt Core est un logiciel libre, mais il faut quand même un endroit pour l’exécuter : un conteneur, un ordonnanceur, des identifiants, une mise à jour chaque fois qu’une dépendance change. Airbyte et Dataform embarquent chacun leur propre ordonnanceur. Ajouter un ordonnanceur externe pour un seul outil, cela coûte soit du temps à votre analyste, soit du temps à nous, dans un [forfait mensuel de support](/fr/services/support-plateforme-data/).

Rien de tout cela n’est énorme. Mais cela revient à payer un outillage de développement pensé pour des équipes alors qu’une seule personne s’en sert, et à le payer chaque année, dans une entreprise où la data est le premier budget que l’on remet en question dès que ça se tend. C’est notre argument pour Dataform, et il est plus précis que « c’est gratuit ».

## L’argument contre Dataform, c’est le passé de Google, et la réponse, c’est BigQuery

Voici l’argument le plus fort contre notre choix par défaut. Autant l’exposer nous-mêmes : vous l’entendrez de toute façon un jour, de la bouche d’un confrère ou d’un autre prestataire.

Google a racheté Dataform en 2020, et son bilan avec les produits qu’il absorbe n’a rien de rassurant. Lisez les notes de version de Dataform pour 2025 et 2026 : la plupart des entrées concernent des contrôles d’accès, des politiques d’organisation, des modes de sécurité et des options de chiffrement. Utile aux administrateurs d’entreprise, invisible pour l’analyste qui écrit du SQL. Le confort de développement a peu bougé depuis la disponibilité générale en 2023. Pendant ce temps, dbt a réécrit son moteur, et les outils de codage IA ont appris dbt.

Ce qui nous rassure, c’est que Dataform a cessé d’être un produit à part pour devenir une fonctionnalité de BigQuery. On l’utilise directement depuis la console BigQuery, et les notes de version traitent les workflows Dataform et les pipelines BigQuery comme un seul système. Les ajouts de 2026 vont dans ce sens : une gestion centralisée des mises en production reliée à Git (juillet 2026) et un serveur MCP (août 2026), qui permet à des agents IA de piloter un projet Dataform. Google investit là autant dans BigQuery que dans Dataform. Il ferme des produits autonomes, pas des fonctionnalités de l’un de ses services de données centraux. Parmi les produits rachetés par Google, celui-ci a été absorbé plutôt qu’abandonné.

## Quand un acheteur arrive avec dbt déjà choisi

Nous posons une seule question : qui, dans votre équipe, va l’ouvrir ?

Si la réponse est « notre analyste, un jour » ou « l’IA le fera », nous répondons : dbt ajoute une seconde plateforme et un compteur pour obtenir des outils de développement pensés pour une équipe. Dataform fournit les mêmes tables, les mêmes tests, le lignage et l’historique Git, sans rien ajouter à BigQuery. Les tests et le lignage y sont moins riches que dans dbt, mais suffisants à cette échelle.

Si un client entend tout cela et préfère quand même dbt, nous construisons du dbt. C’est un bon outil et nous aimons travailler dessus. Dataform est notre choix par défaut, pas une condition pour travailler avec nous.

## Quand nous recommandons dbt sans qu’on nous le demande

Quatre situations, dans l’ordre où nous les rencontrons.

Deux personnes ou plus qui modifient des modèles chaque semaine. Plus il y a de personnes dans le code, plus le confort de développement de dbt rapporte. À partir de là, dbt vaut son coût, et nous le disons avant même qu’on nous pose la question.

Un projet dbt existant qui fonctionne. Une couche de transformation qui marche vaut plus qu’une migration. Nous la maintenons telle qu’elle est et ne proposons pas de la réécrire pour servir notre choix par défaut.

Une équipe qui a déjà pratiqué dbt dans ses emplois précédents. Elle y travaille plus vite, et lui imposer un autre outil ferait perdre de l’argent au client.

Lightdash OSS, quand des agents IA doivent interroger vos indicateurs. C’est le seul cas où l’architecture impose le choix. En septembre 2026, l’édition open source de Lightdash ne peut pas exposer ses indicateurs à des agents IA externes sans clé de licence payante ; l’autre voie passe par la couche sémantique de dbt Cloud. Partout ailleurs, la couche sémantique se trouve dans l’outil de BI (Steep, Metabase, Lightdash Cloud ou Looker), et Dataform, qui travaille en coulisses, n’est pas désavantagé.

## La fusion, en bref

Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Elle met la collecte et la transformation entre les mains d’un seul éditeur. Si vous utilisez Fivetran et dbt, cette consolidation sera commode jusqu’au premier renouvellement. Avec Airbyte et Dataform, les deux couches restent chez deux éditeurs, et cette séparation a de la valeur pour une entreprise qui ne pèse pas dans la négociation.

## Notre intérêt, et notre règle

Nous vendons des [projets Dataform](/fr/services/amelioration-plateforme-data/) et du [support mensuel Dataform](/fr/services/support-plateforme-data/). Nous construisons aussi du dbt, quand l’une des quatre situations s’applique ou quand un client le préfère simplement. Notre préférence pour Dataform n’est donc pas neutre : tenez-en compte quand vous pesez ce qui précède.

Notre règle : choisir par défaut l’outil qui n’ajoute rien à BigQuery, ni plateforme, ni facture, ni compteur de builds, et expliquer ce choix par écrit. Quand la situation d’un client justifie une exception, notre recommandation l’indique et en donne les raisons.
