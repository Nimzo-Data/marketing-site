import type { Locale } from '../i18n/locales';
import { pickCopy } from '../i18n/copy';
import { href } from '../i18n/routes';
import en from './services.en';
import fr from './services.fr';

export type ServiceId = 'audit' | 'build' | 'improve' | 'support';

// Next-step card copy. Every "Not sure this is the right fit?" block (Build,
// Improve, Support) and the technology pages show the other services with the
// same icon, name, one line and link; only the small label above each card
// changes per page. Spread one of these into <LeadCard> and pass `eyebrow` and
// `dataTrack` alongside.
export interface ServiceLead {
  icon: ServiceId;
  title: string;
  body: string;
  href: string;
  linkText: string;
}

export function getServiceLeads(locale: Locale): Record<ServiceId, ServiceLead> {
  const c = pickCopy({ en, fr }, locale, 'data/services');
  const lead = (id: ServiceId): ServiceLead => ({ icon: id, ...c[id], href: href(id, locale) });
  return { audit: lead('audit'), build: lead('build'), improve: lead('improve'), support: lead('support') };
}
