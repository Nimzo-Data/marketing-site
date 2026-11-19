---
title: "dbt est le meilleur outil. Dataform est le meilleur choix."
description: "Avec zéro ou un profil data, le coût qui compte est celui de la possession, pas de la licence. Pourquoi nous choisissons Dataform par défaut sur BigQuery, où dbt l’emporte, et que répondre à un acheteur qui arrive avec dbt déjà décidé."
pubDate: 2026-09-09
draft: false
translationOf: dataform-not-dbt
---

Il y a deux ans, aucun acheteur sans formation data n’avait entendu parler de dbt. Cette année, de plus en plus d’entreprises nous contactent avec le choix déjà fait : la couche de transformation sera dbt, reste à savoir qui la construit. Certaines ont lu des articles. Plus souvent, c’est un assistant IA qui leur a répondu dbt quand elles ont demandé comment monter une plateforme data : c’est ce que disent ses données d’entraînement.

Nous recommandons quand même Dataform par défaut à la plupart d’entre elles. Sur nos vingt dernières missions environ, une sur dix a fini sur dbt, et chacune correspondait à l’une des quatre situations décrites plus bas. Les autres tournent sur Dataform, la couche de transformation intégrée à BigQuery.

## Ce que dbt fait mieux

Presque tout ce qui concerne le travail d’un développeur. La documentation est meilleure, les tests sont plus riches, l’écosystème de packages n’a pas d’équivalent. Le moteur Fusion, le moteur en Rust de dbt (encore en préversion sur BigQuery), analyse les gros projets en une fraction du temps qu’exigeait la version Python. Le vivier de recrutement connaît dbt.

Il y a ensuite l’IA. Les modèles eux-mêmes sont du SQL ordinaire dans les deux outils, et Dataform a repris la structure de projet de dbt : un assistant IA écrit donc aussi bien un modèle de staging pour l’un que pour l’autre. L’écart se situe dans tout ce qui entoure le SQL : syntaxe de configuration, ligne de commande, packages, conventions de projet. Là, Claude Code, Cursor et les autres connaissent dbt bien mieux, parce qu’il y en a bien plus en ligne pour apprendre. Un analyste seul obtient aujourd’hui une meilleure aide de l’IA sur un projet dbt que sur un projet Dataform.

Si vous employez deux ou trois personnes qui passent leurs journées dans une base de code de transformation, dbt est le bon choix et nous le dirons dès le premier appel.

Un article « dbt ou Dataform » compare d’ordinaire les fonctionnalités, l’écosystème et la portabilité entre entrepôts. Il s’adresse à des équipes qui ont des data engineers. La plupart de nos clients en ont zéro ou un, et quand il y en a un, [c’est un analyste](/fr/blog/premier-data-analyst-plateforme-data/).

## À quoi sert une couche de transformation dans une entreprise de 50 personnes

Un client type a cinq ou six sources et 100 à 150 modèles, dont la plupart sont des tables de staging, le reste des dimensions, des faits et les tables de reporting construites par-dessus. [Aeyde](/fr/etudes-de-cas/aeyde/), dont l’étude de cas figure sur ce site, en exploite 164. L’analyste intervient sur la couche quand une source s’ajoute, quand la définition d’un indicateur change ou quand un rapport a besoin d’une nouvelle table : chaque semaine dans les mois qui suivent une passation, moins souvent une fois le reporting stabilisé. C’est toujours une seule personne, et le travail consiste presque toujours à modifier du SQL.

Le confort de développement qui fait la réputation de dbt ne sert que quand plusieurs personnes travaillent sur le même code : packages, macros, tests unitaires, site de documentation, contrôles à chaque pull request. Une personne qui modifie une requête n’en tire presque rien. Pour cet usage, ce qui compte, c’est le coût de possession. Nous en voyons trois : une seconde plateforme, le compteur de builds et l’hébergement de dbt Core.

**Une seconde plateforme, hors de BigQuery.** Les deux projets se ressemblent presque trait pour trait : des fichiers SQL avec un bloc de configuration en tête, quelques fichiers de configuration, une arborescence de modèles staging, intermédiaires et marts, et un ordonnanceur. Dataform ajoute du JavaScript facultatif, dbt ajoute du Jinja et du YAML. Qui sait maintenir l’un ne sera pas perdu dans l’autre.

La différence tient à l’endroit où Dataform s’exécute : dans BigQuery, dont il est une fonctionnalité et non un service à part. Vous créez un dépôt Dataform, vous travaillez dans des espaces de travail et vous planifiez des workflows, le tout depuis la console BigQuery, dans le projet Google Cloud où se trouve déjà l’entrepôt : mêmes utilisateurs, mêmes permissions, même facture, avec un compte de service à configurer une seule fois.

Un projet dbt sur dbt Cloud, c’est un compte sur la plateforme d’un autre éditeur, avec ses propres utilisateurs à créer, ses propres permissions, son propre accord de traitement des données, sa propre facture, et une clé de compte de service BigQuery téléversée chez lui qu’il faut maintenir valide. Chaque point est mineur. Pour une entreprise sans profil data, chacun est aussi un point dont personne n’a la charge. Chez Aeyde, une marque de chaussures et d’accessoires avec une équipe BI d’une seule personne, la stack que nous avons remplacée comptait quatre éditeurs à administrer : Stitch, Panoply, dbt et Looker. Celle que nous avons construite en compte deux, Google et Airbyte, et tout, sauf la collecte, s’administre depuis la console que l’entreprise utilisait déjà.

**Le compteur de builds.** dbt Cloud facture au nombre de modèles exécutés chaque mois. Tarifs en septembre 2026 :

| Offre | Prix | Builds de modèles réussis inclus | Au-delà |
|---|---|---|---|
| Developer | Gratuit, 1 licence | 3 000 par mois | Les exécutions planifiées sont suspendues jusqu’au mois suivant |
| Starter | 100 $ par licence développeur et par mois, jusqu’à 5 licences | 15 000 par mois | Facturé au build, à un tarif que la page des prix n’indique plus |
| Enterprise | Négocié, annuel | 100 000 par mois | Négocié |

Les builds sont comptés dans chaque environnement de déploiement, production comme staging ; seules les exécutions depuis l’éditeur de développement sont gratuites. Quand le compteur a été lancé en août 2023, le dépassement coûtait un cent (0,01 $) par build, et les guides tarifaires tiers citent toujours ce chiffre en 2026. La page de dbt dit désormais seulement que l’usage supplémentaire est facturé aux tarifs de la page des prix, et cette page n’en donne aucun.

L’offre gratuite couvre un projet de 100 modèles exécuté une fois par jour, sans aucune marge pour une relance. [Aeyde](/fr/etudes-de-cas/aeyde/) exécute ses 164 modèles une fois par jour et 16 d’entre eux une seconde fois l’après-midi : environ 5 400 builds par mois, presque le double de l’offre gratuite et un tiers du quota Starter. Sur dbt Cloud, cela fait une licence et aucun dépassement, 1 200 $ par an. Si Aeyde rafraîchissait tout quatre fois par jour, ce qui arrive vite quand une entreprise veut suivre ses chiffres en cours de journée, cela ferait environ 20 000 builds par mois, au-dessus des 15 000 de Starter.

Notre plus gros projet Dataform, chez [Tameson](/fr/etudes-de-cas/tameson/), compte environ 550 modèles construits en deux ans, exécutés chaque jour en production, chaque jour en staging, et reconstruits en entier le dimanche : environ 35 000 builds par mois, avec huit personnes qui auraient besoin d’une licence développeur. C’est au-dessus du plafond de cinq licences de Starter, ce serait donc une négociation Enterprise. Aux tarifs Starter, le plancher est de 800 $ par mois de licences, plus, au tarif de dépassement de 2023, environ 200 $ de builds : 12 000 $ par an, alors que le même pipeline sur Dataform ne coûte rien de plus que BigQuery.

Ce montant repose sur le tarif de dépassement de 2023, et nous ne connaissons pas le tarif actuel. Tameson a plus de modèles et plus de personnes qui y touchent que la plupart de nos clients, mais tous les projets grandissent dans ce sens.

Le montant compte moins que la façon dont dbt facture : à la licence, puis au build. dbt Labs a changé trois fois son modèle de prix en quatre ans : le prix de la licence a doublé en décembre 2022, le compteur de builds est arrivé en août 2023, et des fonctionnalités facturées à l’usage sont venues avec la fusion de 2026. Les deux derniers changements ont déplacé le coût des licences vers la consommation. Rien ne garantit que le budget de janvier soit la facture de décembre, et personne chez vous n’est chargé de le remarquer.

**Faire tourner dbt Core soi-même.** dbt Core est un logiciel libre, et Fusion le rend plus rapide, mais il faut quand même un endroit pour l’exécuter : un conteneur, un ordonnanceur, des identifiants, une mise à jour chaque fois qu’une dépendance change. Airbyte et Dataform embarquent chacun leur propre ordonnanceur. Ajouter un ordonnanceur externe pour faire tourner un seul outil, c’est soit le temps de l’analyste, soit le nôtre, dans une offre de [support mensuel](/fr/services/support-plateforme-data/).

Rien de cela n’est énorme. Mais vous payez un outil conçu pour des équipes alors qu’une seule personne s’en sert, et vous le payez chaque année, dans une entreprise où la data est le premier poste que l’on remet en cause dès qu’il faut réduire les coûts. C’est notre argument pour Dataform, et il est plus précis que « c’est gratuit ».

## L’argument contre Dataform, c’est le passé de Google, et la réponse, c’est BigQuery

C’est l’argument le plus fort contre notre choix par défaut, et nos clients finissent par l’entendre.

Google a racheté Dataform en 2020, et son passé avec les produits rachetés ne rassure personne. Lisez les notes de version de Dataform pour 2025 et 2026 : la plupart des entrées concernent des contrôles d’accès, des politiques d’organisation, des modes de sécurité et des options de chiffrement. Utile aux administrateurs d’entreprise, invisible pour l’analyste qui écrit du SQL. Le confort de développement a peu bougé depuis la disponibilité générale en 2023. Pendant ce temps, dbt a livré un nouveau moteur, et les outils de codage IA ont appris dbt.

Ce qui nous rassure, c’est ce que Dataform est devenu. Il a cessé d’être un produit pour devenir une fonctionnalité de BigQuery. Il se trouve dans la console BigQuery, les notes de version décrivent désormais les workflows Dataform et les pipelines BigQuery comme un seul système, et les ajouts récents vont dans ce sens : une gestion centralisée des mises en production reliée à Git (juillet 2026) et un serveur MCP (août 2026) qui permet à des agents IA de piloter un projet Dataform. Ce sont des investissements dans BigQuery autant que dans Dataform. Google arrête des produits autonomes. Il n’arrête pas des fonctionnalités de l’un de ses services de données centraux. Pour un rachat, celui-ci a été absorbé plutôt qu’abandonné.

## Quand un acheteur arrive avec dbt déjà choisi

Nous posons une seule question : qui, dans votre équipe, va l’ouvrir ?

Si la réponse est « notre analyste, un jour » ou « l’IA le fera », nous répondons : dbt ajoute une seconde plateforme et un compteur, pour un outil conçu pour une équipe. Dataform donne les mêmes tables, les mêmes tests, le lignage et l’historique Git (un peu moins riches que ceux de dbt, mais suffisants à cette échelle), sans rien ajouter à BigQuery.

Si un client entend tout cela et préfère quand même dbt, nous construisons du dbt. C’est un bon outil et nous aimons travailler dessus. Dataform est notre choix par défaut, pas une condition pour travailler avec nous.

## Quand nous recommandons dbt sans qu’on nous le demande

Quatre situations, dans l’ordre où nous les rencontrons.

Deux personnes ou plus qui modifient des modèles chaque semaine. Le confort de développement de dbt profite à chaque personne de plus qui s’en sert. À partir de là, dbt justifie son coût, et nous le disons spontanément.

Un projet dbt existant qui fonctionne. Une couche de transformation qui marche vaut plus qu’une migration. Nous la maintenons telle qu’elle est et ne proposons pas de la réécrire pour servir notre choix par défaut.

Une équipe qui connaît dbt de ses emplois précédents. Une équipe qui connaît déjà dbt y travaille plus vite, et lui imposer un autre outil fait perdre du temps et de l’argent au client.

Lightdash OSS avec accès pour des agents IA. C’est le seul cas où l’architecture tranche. L’édition open source de Lightdash ne peut pas exposer ses indicateurs à des agents IA externes sans clé de licence payante ; l’autre voie passe par la couche sémantique de dbt Cloud. Partout ailleurs, la couche sémantique se trouve dans l’outil de BI, que ce soit Steep, Metabase, Lightdash Cloud ou Looker, et Dataform, en coulisses, n’y perd rien.

## La fusion, en bref

Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Elle met la collecte et la transformation entre les mains d’un seul éditeur. Si vous êtes sur Fivetran avec dbt, cette consolidation sera pratique jusqu’au premier renouvellement. Airbyte avec Dataform garde les deux couches chez deux éditeurs, et cette séparation vous protège quand vous n’avez aucun poids dans la négociation.

## Notre intérêt, et notre règle

Nous vendons des [projets Dataform](/fr/services/amelioration-plateforme-data/) et du [support mensuel Dataform](/fr/services/support-plateforme-data/). Nous construisons aussi du dbt, quand l’une des quatre situations s’applique ou quand un client le préfère simplement. Cela peut orienter notre choix par défaut. Gardez-le en tête en lisant l’argument ci-dessus.

La règle que nous appliquons : prendre par défaut l’outil qui n’ajoute à BigQuery ni nouvelle plateforme, ni nouvelle facture, ni compteur de builds, et en donner les raisons par écrit. Quand la situation d’un client fait exception, la recommandation le dit, raisonnement à l’appui.
