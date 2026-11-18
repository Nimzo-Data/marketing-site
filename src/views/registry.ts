// Every page view, by route id. src/pages/fr/[...path].astro renders French
// pages from this map; English pages are thin files under src/pages/.
import type { RouteId } from '../i18n/routes';
import Home from './home/Home.astro';
import About from './about/About.astro';
import Contact from './contact/Contact.astro';
import Audit from './services/Audit.astro';
import Build from './services/Build.astro';
import Improve from './services/Improve.astro';
import Support from './services/Support.astro';
import CaseStudies from './case-studies/CaseStudies.astro';
import Aeyde from './case-studies/Aeyde.astro';
import Tameson from './case-studies/Tameson.astro';
import SampleAudit from './sample-audit/SampleAudit.astro';
import TechnologiesIndex from './technologies/TechnologiesIndex.astro';
import Airbyte from './technologies/Airbyte.astro';
import Bigquery from './technologies/Bigquery.astro';
import Dagster from './technologies/Dagster.astro';
import Dataform from './technologies/Dataform.astro';
import Dbt from './technologies/Dbt.astro';
import Fivetran from './technologies/Fivetran.astro';
import GoogleCloudPlatform from './technologies/GoogleCloudPlatform.astro';
import Lightdash from './technologies/Lightdash.astro';
import Looker from './technologies/Looker.astro';
import Metabase from './technologies/Metabase.astro';
import Steep from './technologies/Steep.astro';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type View = (props: { locale: 'en' | 'fr' }) => any;

export const views: Partial<Record<RouteId, View>> = {
  home: Home,
  about: About,
  contact: Contact,
  audit: Audit,
  build: Build,
  improve: Improve,
  support: Support,
  caseStudies: CaseStudies,
  aeyde: Aeyde,
  tameson: Tameson,
  technologies: TechnologiesIndex,
  sampleAudit: SampleAudit,
  'tech:airbyte': Airbyte,
  'tech:bigquery': Bigquery,
  'tech:dagster': Dagster,
  'tech:dataform': Dataform,
  'tech:dbt': Dbt,
  'tech:fivetran': Fivetran,
  'tech:google-cloud-platform': GoogleCloudPlatform,
  'tech:lightdash': Lightdash,
  'tech:looker': Looker,
  'tech:metabase': Metabase,
  'tech:steep': Steep,
};
