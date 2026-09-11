---
title: "dbt is the better tool. Dataform is the better purchase."
description: "For a company with zero or one data person, the cost that matters is ownership, not licence. Why we default to Dataform on BigQuery, where dbt wins, and what we say when a buyer arrives with dbt already decided."
pubDate: 2026-09-09
draft: false
---

Two years ago, no buyer without a data background had heard of dbt. This year, a growing share of the companies that contact us arrive with it already decided: the transformation layer will be dbt, and the only question is who builds it. Some have read about it. More have asked an AI assistant how to set up a data platform and been told dbt, because that is what the training data says.

We still default to Dataform for most of them. Over our last twenty or so engagements, about one in ten ended up on dbt, and each of those came through one of four situations described below. The rest run on Dataform, the transformation layer built into BigQuery.

This piece explains the reasoning, starting with the part where dbt wins.

## What dbt does better

Nearly everything a developer touches. The documentation is better, the tests are richer, the package ecosystem has no equivalent. The Fusion engine, now the runtime of dbt Core v2.0, parses large projects in a fraction of the time the Python version took. The hiring pool knows dbt.

Then there is AI. The models themselves are plain SQL in both tools, and Dataform borrowed dbt's project structure, so an AI assistant writes a staging model equally well for either. The gap is in everything around the SQL: config syntax, the command-line tool, packages, project conventions. There, Claude Code, Cursor and the rest know dbt far better, because there is far more of it online to have learned from. A lone analyst gets better AI help on a dbt project than a Dataform one today.

If you employ two or three people who live in a transformation codebase all day, dbt is the right choice and we will say so on the first call.

That is the comparison every dbt-versus-Dataform article runs. Feature table, ecosystem size, warehouse portability, a verdict. It is written for teams with data engineers. Most of the companies we work with have zero or one, and [the one is an analyst](/blog/first-data-analyst/).

## What a 50-person company actually does with a transformation layer

A typical client of ours has five or six sources and 100 to 150 models, most of them staging tables, the rest the dimensions, facts and reporting tables built on top. [Aeyde](/case-studies/aeyde/), whose case study is on this site, runs 164. The analyst touches the layer when a source is added, a metric definition changes, or a report needs a new table: weekly in the months after a handover, less often once the reporting settles. It is always one person, and the work is almost always editing SQL.

The developer experience that earns dbt its reputation pays off when several people build a codebase together: packages, macros, unit tests, a documentation site, checks on every pull request. One person changing a query gets little from any of it. For that usage pattern, the cost that matters is owning the tool, and we count three such costs.

**A second platform, outside BigQuery.** Structurally the two projects are almost the same object. Both are SQL files with a config block at the top, a few configuration files, a folder structure of staging, intermediate and mart models, and a scheduler. Dataform adds optional JavaScript, dbt adds Jinja and YAML. Nobody who can maintain one would be lost in the other.

The difference is where it lives. Dataform is a feature of BigQuery, not a separate service. You create a repository, work in workspaces, and schedule workflows, all from the BigQuery console, on the Google Cloud project where the warehouse already sits: same users, same permissions, same invoice, with a service account you set up once. A dbt project on dbt Cloud is an account on another vendor's platform, with its own users to create, its own permissions, its own data processing agreement, its own bill, and a BigQuery service account key uploaded to it that someone has to keep valid. Each item is small. For a company with no data person, each is also a thing nobody owns. At Aeyde, a fashion brand with a one-person BI team, the stack we replaced had four vendors to administer: Stitch, Panoply, dbt and Looker. The one we built has two, Google and Airbyte, and everything except ingestion is administered from the console the company already used.

**The meter.** dbt Cloud pricing, as of September 2026:

| Plan | Price | Successful model builds included | Beyond that |
|---|---|---|---|
| Developer | Free, 1 seat | 3,000 a month | Scheduled runs are cancelled until next month |
| Starter | $100 per developer seat per month, up to 5 seats | 15,000 a month | Billed per build, at a rate the pricing page no longer states |
| Enterprise | Negotiated, annual | 100,000 a month | Negotiated |

Builds are counted in every deployment environment, production and staging alike; only runs from the development editor are free. When the meter launched in August 2023, the overage was one cent per build, and that is still the figure third-party pricing guides quote in 2026; dbt's own page now says only that additional usage is billed at the rates on the pricing page, and the pricing page gives none.

The free tier covers a 100-model project run once a day, with nothing left over for a rerun. [Aeyde](/case-studies/aeyde/) runs all 164 models once a day and 16 of them a second time in the afternoon: about 5,400 builds a month, nearly twice the free tier and a third of the Starter allowance. On dbt Cloud that is one seat and no overage, $1,200 a year. If Aeyde refreshed everything four times a day, a normal request once a business starts watching intraday numbers, it would be about 20,000 builds and over the line. Our largest Dataform repository, at [Tameson](/case-studies/tameson/), is about 550 models built over two years, run daily in production, daily in staging, and rebuilt in full on Sundays: roughly 35,000 builds a month, with eight people who would need a developer seat. That is over Starter's five-seat cap, so it would be an Enterprise negotiation. At Starter rates the floor is $800 a month in seats plus, at the 2023 overage rate, around $200 in builds: $12,000 a year, for a pipeline that costs nothing above BigQuery on Dataform. At today's overage rate, we cannot tell you. Tameson has more models and more people touching them than most of our clients, but every project grows in that direction.

The amounts matter less than the unit. dbt Labs has changed its pricing model three times in four years: the seat price doubled in December 2022, the build meter arrived in August 2023, and usage-priced features came with the 2026 merger. The last two moved cost from seats to consumption. The number you budget in January is not reliably the number you pay in December, and the person who would notice is the person you don't have.

**Running dbt Core yourself.** dbt Core is free software, and Fusion made it fast, but it still needs somewhere to run: a container, a scheduler, credentials, an upgrade whenever a dependency changes. Airbyte and Dataform both schedule themselves. Adding an orchestrator to run one tool is either the analyst's time or ours on a retainer.

None of it is large. But it buys developer tooling built for teams, at a company where one person will use it, and it recurs every year at a company where data is the first budget line to be questioned when things get tight. That is the case for Dataform. It is narrower than "it's free," which is why we prefer to state it precisely.

## The case against Dataform is Google's record, and the answer is BigQuery

We should make the strongest argument against our own default, because clients will hear it from someone.

Google bought Dataform in 2020, and Google's record with acquired products does not reassure anyone. Read the Dataform release notes for 2025 and 2026 and most entries are access controls, organisation policies, security modes and encryption options. Useful to enterprise administrators, invisible to the analyst writing SQL. The developer experience has moved slowly since general availability in 2023. In the same period dbt shipped a new engine, and the AI coding tools learned dbt.

What makes us comfortable is what Dataform became. It stopped being a product and became a feature of BigQuery. It lives inside the BigQuery console, and the release notes now describe Dataform workflows and BigQuery pipelines as one system, and the recent additions, a centralised Git-connected way to manage releases in July 2026 and an MCP server in August 2026 so AI agents can operate a Dataform repository, are BigQuery investments as much as Dataform ones. Google retires standalone products. It does not retire features of one of its core data services. As acquisitions go, this one was absorbed rather than abandoned.


## When a buyer arrives with dbt already chosen

We ask one question: who on your team will open it?

If the answer is "our analyst, eventually" or "the AI will," we say what is written above: a second platform and a meter, to get developer tooling built for a team, when Dataform gives the same modeled tables, tests and lineage adequate at this scale though less rich than dbt's, and the same Git history, for nothing above BigQuery.

If a client hears all of that and still prefers dbt, we build dbt. It is a good tool and we like working in it. Our default is a preference, not a condition.

## When we recommend dbt without being asked

Four situations, in the order we see them.

Two or more people changing models every week. Developer experience compounds with use. At that point dbt earns its cost, and we say so unprompted.

An existing dbt project that works. A working transformation layer is worth more than a migration. We support it as it is and do not propose a rewrite to serve our default.

A team that is dbt-fluent from previous jobs. Familiarity is an asset, and fighting it wastes the client's money.

Lightdash OSS with AI agent access. This is the one architectural edge case. Lightdash's open-source edition cannot expose its metrics to external AI agents without a paid licence key; the alternative path runs through dbt Cloud's semantic layer. Everywhere else, the semantic layer lives in the BI tool, whether Steep, Metabase, Lightdash Cloud or Looker, and Dataform underneath loses nothing.

## The merger, briefly

Fivetran and dbt Labs completed their merger on 1 June 2026. It puts ingestion and transformation in one vendor's hands. If you are on Fivetran plus dbt, that consolidation will be convenient right up to the first renewal. Airbyte plus Dataform keeps the two layers with two vendors, and that separation is worth something to a company with no negotiating leverage of its own.

## Our bias, and the rule

We sell [Dataform builds](/services/data-platform-implementation/) and [Dataform retainers](/services/ongoing-support-retainers/). We also build dbt, when one of the four situations applies or when a client simply prefers it. The bias is in the default, and you should weigh the argument above with it in mind.

The rule we apply: default to the tool that adds no platform, no bill and no meter on top of BigQuery, and write down the reasons. When a client's situation breaks the default, the recommendation says so, with the reasoning attached.
