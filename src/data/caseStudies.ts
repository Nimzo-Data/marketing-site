import type { Locale } from '../i18n/locales';
import { pickCopy } from '../i18n/copy';
import { href, type RouteId } from '../i18n/routes';
import type { ServiceId } from './services';
import en from './caseStudies.en';
import fr from './caseStudies.fr';

export interface CaseStudyTool {
  name: string;
  href: string;
  logo: string;
}

export interface CaseStudyShortQuote {
  text: string;
  authorName: string;
  authorTitle: string;
  authorPhoto: string;
  /** Set when the quote is shown translated; renders a "translated from" note. */
  translatedFrom?: Locale;
}

export interface CaseStudyCompany {
  flag: string;
  city: string;
  size: string;
  sector: string;
}

export interface CaseStudyMeta {
  slug: string;
  client: string;
  clientUrl: string;
  logo: string;
  headline: string;
  subline: string;
  hidden?: boolean;
  company: CaseStudyCompany;
  service: { label: string; href: string; shortDescription: string };
  tools: CaseStudyTool[];
  shortQuote: CaseStudyShortQuote;
}

type Slug = keyof typeof en;

interface CaseStudyBase {
  slug: Slug;
  client: string;
  clientUrl: string;
  logo: string;
  hidden?: boolean;
  company: { flag: string; city: string };
  service: ServiceId;
  tools: { name: string; route: RouteId; logo: string }[];
  shortQuote: { authorName: string; authorPhoto: string };
}

const base: CaseStudyBase[] = [
  {
    slug: 'aeyde',
    client: 'Aeyde',
    clientUrl: 'https://aeyde.com',
    logo: '/case-studies/logos/aeyde.svg',
    company: { flag: '🇩🇪', city: 'Berlin' },
    service: 'build',
    tools: [
      { name: 'Airbyte', route: 'tech:airbyte', logo: '/logos/airbyte.svg' },
      { name: 'BigQuery', route: 'tech:bigquery', logo: '/logos/bigquery.svg' },
      { name: 'Dataform', route: 'tech:dataform', logo: '/logos/dataform.svg' },
      { name: 'Looker', route: 'tech:looker', logo: '/logos/looker.svg' },
    ],
    shortQuote: { authorName: 'Phoebe Pham', authorPhoto: '/case-studies/photos/aeyde-phoebe.png' },
  },
  {
    slug: 'tameson',
    client: 'Tameson',
    clientUrl: 'https://tameson.com',
    logo: '/case-studies/logos/tameson.svg',
    company: { flag: '🇳🇱', city: 'Eindhoven' },
    service: 'improve',
    tools: [
      { name: 'BigQuery', route: 'tech:bigquery', logo: '/logos/bigquery.svg' },
      { name: 'Dataform', route: 'tech:dataform', logo: '/logos/dataform.svg' },
    ],
    shortQuote: { authorName: 'Paul van Oorschot', authorPhoto: '/case-studies/photos/tameson-paul.jpg' },
  },
];

export function getCaseStudies(locale: Locale): CaseStudyMeta[] {
  const c = pickCopy({ en, fr }, locale, 'data/caseStudies');
  return base.map((b) => {
    const text = c[b.slug];
    return {
      slug: b.slug,
      client: b.client,
      clientUrl: b.clientUrl,
      logo: b.logo,
      headline: text.headline,
      subline: text.subline,
      ...(b.hidden ? { hidden: true } : {}),
      company: { ...b.company, ...text.company },
      service: { label: text.service.label, href: href(b.service, locale), shortDescription: text.service.shortDescription },
      tools: b.tools.map((tool) => ({ name: tool.name, href: href(tool.route, locale), logo: tool.logo })),
      shortQuote: {
        text: text.shortQuote.text,
        authorName: b.shortQuote.authorName,
        authorTitle: text.shortQuote.authorTitle,
        authorPhoto: b.shortQuote.authorPhoto,
        ...(text.shortQuote.translatedFrom ? { translatedFrom: text.shortQuote.translatedFrom } : {}),
      },
    };
  });
}

export function getVisibleCaseStudies(locale: Locale): CaseStudyMeta[] {
  return getCaseStudies(locale).filter((cs) => !cs.hidden);
}

export function findCaseStudy(slug: string, locale: Locale): CaseStudyMeta | undefined {
  return getCaseStudies(locale).find((cs) => cs.slug === slug);
}
