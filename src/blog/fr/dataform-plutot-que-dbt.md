---
title: "dbt est le meilleur outil. Dataform est le meilleur choix."
description: "Pour une entreprise avec zéro ou un profil data, le coût qui compte est celui de la prise en charge, pas de la licence. Pourquoi nous choisissons Dataform par défaut sur BigQuery, où dbt l’emporte, et ce que nous répondons à un acheteur qui arrive avec dbt déjà décidé."
pubDate: 2026-09-09
draft: false
translationOf: dataform-not-dbt
---

Il y a deux ans, aucun acheteur sans formation data n’avait entendu parler de dbt. Cette année, une part croissante des entreprises qui nous contactent arrivent avec le choix déjà fait : la couche de transformation sera dbt, et la seule question est de savoir qui la construit. Certaines ont lu des articles. Plus nombreuses sont celles qui ont demandé à un assistant IA comment monter une plateforme data et à qui l’on a répondu dbt, parce que c’est ce que disent les données d’entraînement.

Nous recommandons quand même Dataform par défaut à la plupart d’entre elles. Sur nos vingt dernières missions environ, une sur dix a fini sur dbt, et chacune venait de l’une des quatre situations décrites plus bas. Les autres tournent sur Dataform, la couche de transformation intégrée à BigQuery.

Cet article explique le raisonnement, en commençant par ce que dbt fait mieux.

## Ce que dbt fait mieux

Presque tout ce qui concerne le travail d’un développeur. La documentation est meilleure, les tests sont plus riches, l’écosystème de packages n’a pas d’équivalent. Le moteur Fusion, désormais le moteur d’exécution de dbt Core v2.0, analyse les gros projets en une fraction du temps qu’exigeait la version Python. Le vivier de recrutement connaît dbt.

Il y a ensuite l’IA. Les modèles eux-mêmes sont du SQL ordinaire dans les deux outils, et Dataform a repris la structure de projet de dbt : un assistant IA écrit donc aussi bien un modèle de staging pour l’un que pour l’autre. L’écart se situe dans tout ce qui entoure le SQL : syntaxe de configuration, ligne de commande, packages, conventions de projet. Là, Claude Code, Cursor et les autres connaissent dbt bien mieux, parce qu’il y en a bien plus en ligne pour apprendre. Un analyste seul obtient aujourd’hui une meilleure aide de l’IA sur un projet dbt que sur un projet Dataform.

Si vous employez deux ou trois personnes qui vivent toute la journée dans une base de code de transformation, dbt est le bon choix et nous le dirons dès le premier appel.

C’est la comparaison que propose tout article « dbt ou Dataform ». Tableau de fonctionnalités, taille de l’écosystème, portabilité entre entrepôts, verdict. Il est écrit pour des équipes qui ont des data engineers. La plupart des entreprises avec lesquelles nous travaillons en ont zéro ou un, et [ce poste est tenu par un analyste](/fr/blog/premier-data-analyst-plateforme-data/).

## À quoi sert réellement une couche de transformation dans une entreprise de 50 personnes

Un client type a cinq ou six sources et 100 à 150 modèles, dont la plupart sont des tables de staging, le reste étant les dimensions, les faits et les tables de reporting construites par-dessus. [Aeyde](/fr/etudes-de-cas/aeyde/), dont l’étude de cas figure sur ce site, en exploite 164. L’analyste intervient sur la couche quand une source s’ajoute, quand la définition d’un indicateur change ou quand un rapport a besoin d’une nouvelle table : chaque semaine dans les mois qui suivent une passation, moins souvent une fois le reporting stabilisé. C’est toujours une seule personne, et le travail consiste presque toujours à modifier du SQL.

Le confort de développement qui fait la réputation de dbt est rentable quand plusieurs personnes construisent ensemble une base de code : packages, macros, tests unitaires, site de documentation, contrôles à chaque pull request. Une personne qui modifie une requête n’en tire presque rien. Pour cet usage, le coût qui compte est celui de possession de l’outil, et nous en voyons trois sources.

**Une seconde plateforme, hors de BigQuery.** Structurellement, les deux projets sont presque le même objet. Ce sont des fichiers SQL avec un bloc de configuration en tête, quelques fichiers de configuration, une arborescence de modèles staging, intermédiaires et marts, et un ordonnanceur. Dataform ajoute du JavaScript facultatif, dbt ajoute du Jinja et du YAML. Qui sait maintenir l’un ne sera pas perdu dans l’autre.

La différence tient à l’endroit où il se trouve. Dataform est une fonctionnalité de BigQuery, pas un service séparé. Vous créez un dépôt, vous travaillez dans des espaces de travail et vous planifiez des workflows, le tout depuis la console BigQuery, dans le projet Google Cloud où se trouve déjà l’entrepôt : mêmes utilisateurs, mêmes permissions, même facture, avec un compte de service à configurer une seule fois. Un projet dbt sur dbt Cloud, c’est un compte sur la plateforme d’un autre éditeur, avec ses propres utilisateurs à créer, ses propres permissions, son propre accord de traitement des données, sa propre facture, et une clé de compte de service BigQuery téléversée chez lui qu’il faut maintenir valide. Chaque point est mineur. Pour une entreprise sans profil data, chacun est aussi un point dont personne n’a la charge. Chez Aeyde, une marque de mode avec une équipe BI d’une seule personne, la stack que nous avons remplacée comptait quatre éditeurs à administrer : Stitch, Panoply, dbt et Looker. Celle que nous avons construite en compte deux, Google et Airbyte, et tout, sauf la collecte, s’administre depuis la console que l’entreprise utilisait déjà.

**Le compteur.** Tarifs de dbt Cloud, en septembre 2026 :

| Offre | Prix | Builds de modèles réussis inclus | Au-delà |
|---|---|---|---|
| Developer | Gratuit, 1 licence | 3 000 par mois | Les exécutions planifiées sont suspendues jusqu’au mois suivant |
| Starter | 100 $ par licence développeur et par mois, jusqu’à 5 licences | 15 000 par mois | Facturé au build, à un tarif que la page des prix n’indique plus |
| Enterprise | Négocié, annuel | 100 000 par mois | Négocié |

Les builds sont comptés dans chaque environnement de déploiement, production comme staging ; seules les exécutions depuis l’éditeur de développement sont gratuites. Quand le compteur a été lancé en août 2023, le dépassement coûtait un centime par build, et c’est toujours le chiffre que citent les guides tarifaires tiers en 2026 ; la page de dbt dit désormais seulement que l’usage supplémentaire est facturé aux tarifs de la page des prix, et la page des prix n’en donne aucun.

L’offre gratuite couvre un projet de 100 modèles exécuté une fois par jour, sans aucune marge pour une relance. [Aeyde](/fr/etudes-de-cas/aeyde/) exécute ses 164 modèles une fois par jour et 16 d’entre eux une seconde fois l’après-midi : environ 5 400 builds par mois, presque le double de l’offre gratuite et un tiers du quota Starter. Sur dbt Cloud, cela fait une licence et aucun dépassement, 1 200 $ par an. Si Aeyde rafraîchissait tout quatre fois par jour, demande normale dès qu’une entreprise se met à surveiller des chiffres en cours de journée, on atteindrait environ 20 000 builds, au-dessus du seuil. Notre plus gros dépôt Dataform, chez [Tameson](/fr/etudes-de-cas/tameson/), compte environ 550 modèles construits en deux ans, exécutés chaque jour en production, chaque jour en staging, et reconstruits en entier le dimanche : environ 35 000 builds par mois, avec huit personnes qui auraient besoin d’une licence développeur. C’est au-dessus du plafond de cinq licences de Starter, ce serait donc une négociation Enterprise. Aux tarifs Starter, le plancher est de 800 $ par mois de licences, plus, au tarif de dépassement de 2023, environ 200 $ de builds : 12 000 $ par an, pour un pipeline qui ne coûte rien au-delà de BigQuery sur Dataform. Au tarif de dépassement actuel, nous ne savons pas vous le dire. Tameson a plus de modèles et plus de personnes qui y touchent que la plupart de nos clients, mais tous les projets grandissent dans ce sens.

Les montants comptent moins que l’unité de facturation. dbt Labs a changé trois fois son modèle de prix en quatre ans : le prix de la licence a doublé en décembre 2022, le compteur de builds est arrivé en août 2023, et des fonctionnalités facturées à l’usage sont venues avec la fusion de 2026. Les deux derniers changements ont déplacé le coût des licences vers la consommation. Rien ne garantit que le chiffre budgété en janvier soit celui que vous paierez en décembre, et la personne qui s’en apercevrait est celle que vous n’avez pas.

**Faire tourner dbt Core soi-même.** dbt Core est un logiciel libre, et Fusion l’a rendu rapide, mais il faut quand même un endroit pour l’exécuter : un conteneur, un ordonnanceur, des identifiants, une mise à jour chaque fois qu’une dépendance change. Airbyte et Dataform embarquent chacun leur propre ordonnanceur. Ajouter un ordonnanceur externe pour faire tourner un seul outil, c’est soit le temps de l’analyste, soit le nôtre dans le cadre d’un forfait mensuel.

Rien de cela n’est énorme. Mais on paie alors pour un outillage de développement conçu pour des équipes, dans une entreprise où une seule personne s’en servira, et cela revient chaque année dans une entreprise où la data est la première ligne de budget qu’on remet en cause quand les temps se durcissent. C’est l’argument en faveur de Dataform. Il est plus étroit que « c’est gratuit », et c’est pourquoi nous préférons l’énoncer avec précision.

## L’argument contre Dataform, c’est le passé de Google, et la réponse, c’est BigQuery

Nous devons formuler l’argument le plus fort contre notre propre choix par défaut, parce que des clients l’entendront de quelqu’un.

Google a racheté Dataform en 2020, et son passé avec les produits rachetés ne rassure personne. Lisez les notes de version de Dataform pour 2025 et 2026 : la plupart des entrées concernent des contrôles d’accès, des politiques d’organisation, des modes de sécurité et des options de chiffrement. Utile aux administrateurs d’entreprise, invisible pour l’analyste qui écrit du SQL. L’expérience de développement a peu bougé depuis la disponibilité générale en 2023. Pendant ce temps, dbt a livré un nouveau moteur, et les outils de codage IA ont appris dbt.

Ce qui nous rassure, c’est ce que Dataform est devenu. Il a cessé d’être un produit pour devenir une fonctionnalité de BigQuery. Il vit dans la console BigQuery, les notes de version décrivent désormais les workflows Dataform et les pipelines BigQuery comme un seul système, et les ajouts récents, une gestion centralisée des versions reliée à Git en juillet 2026 et un serveur MCP en août 2026 pour que des agents IA puissent piloter un dépôt Dataform, sont des investissements dans BigQuery autant que dans Dataform. Google arrête des produits autonomes. Il n’arrête pas des fonctionnalités de l’un de ses services de données centraux. Pour un rachat, celui-ci a été absorbé plutôt qu’abandonné.

## Quand un acheteur arrive avec dbt déjà choisi

Nous posons une seule question : qui, dans votre équipe, va l’ouvrir ?

Si la réponse est « notre analyste, un jour » ou « l’IA le fera », nous disons ce qui est écrit plus haut : une seconde plateforme et un compteur, pour obtenir un outillage de développement conçu pour une équipe, alors que Dataform donne les mêmes tables modélisées, les mêmes tests et le même lignage, suffisants à cette échelle bien que moins riches que ceux de dbt, et le même historique Git, sans rien ajouter à BigQuery.

Si un client entend tout cela et préfère quand même dbt, nous construisons du dbt. C’est un bon outil et nous aimons travailler dessus. Notre choix par défaut est une préférence, pas une condition.

## Quand nous recommandons dbt sans qu’on nous le demande

Quatre situations, dans l’ordre où nous les rencontrons.

Deux personnes ou plus qui modifient des modèles chaque semaine. L’avantage croît avec le nombre de personnes qui s’en servent. À ce stade, dbt justifie son coût, et nous le disons spontanément.

Un projet dbt existant qui fonctionne. Une couche de transformation qui marche vaut plus qu’une migration. Nous la maintenons telle qu’elle est et ne proposons pas de la réécrire pour servir notre choix par défaut.

Une équipe qui connaît dbt de ses emplois précédents. La familiarité est un atout, et aller à son encontre coûte de l’argent au client.

Lightdash OSS avec accès pour des agents IA. C’est le seul cas où l’architecture tranche. L’édition open source de Lightdash ne peut pas exposer ses indicateurs à des agents IA externes sans clé de licence payante ; l’autre voie passe par la couche sémantique de dbt Cloud. Partout ailleurs, la couche sémantique vit dans l’outil de BI, que ce soit Steep, Metabase, Lightdash Cloud ou Looker, et Dataform en dessous n’y perd rien.

## La fusion, en bref

Fivetran et dbt Labs ont finalisé leur fusion le 1er juin 2026. Elle met la collecte et la transformation entre les mains d’un seul éditeur. Si vous êtes sur Fivetran plus dbt, cette consolidation sera pratique jusqu’au premier renouvellement. Airbyte plus Dataform garde les deux couches chez deux éditeurs, et cette séparation a de la valeur pour une entreprise qui n’a aucun levier de négociation.

## Notre biais, et la règle

Nous vendons des [projets Dataform](/fr/services/amelioration-plateforme-data/) et des [forfaits mensuels Dataform](/fr/services/support-plateforme-data/). Nous construisons aussi du dbt, quand l’une des quatre situations s’applique ou quand un client le préfère simplement. Le biais est dans le choix par défaut, et vous devez peser l’argument ci-dessus en en tenant compte.

La règle que nous appliquons : choisir par défaut l’outil qui n’ajoute ni plateforme, ni facture, ni compteur au-dessus de BigQuery, et écrire les raisons. Quand la situation d’un client fait exception, la recommandation le dit, raisonnement à l’appui.
