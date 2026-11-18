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
};
