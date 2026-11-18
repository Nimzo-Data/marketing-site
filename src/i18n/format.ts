import type { Locale } from './locales';

const intlLocale: Record<Locale, string> = { en: 'en-GB', fr: 'fr-FR' };

const currency = (locale: Locale) =>
  new Intl.NumberFormat(intlLocale[locale], { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

const number = (locale: Locale) => new Intl.NumberFormat(intlLocale[locale], { maximumFractionDigits: 0 });

/** €3,000 in English, 3 000 € in French (non-breaking spaces). */
export function eur(amount: number, locale: Locale): string {
  return currency(locale).format(amount);
}

/** €3,000 – €5,000 in English, 3 000 – 5 000 € in French. */
export function eurRange(min: number, max: number, locale: Locale): string {
  return locale === 'fr'
    ? `${number(locale).format(min)} – ${eur(max, locale)}`
    : `${eur(min, locale)} – ${eur(max, locale)}`;
}

/** "9 September 2026" / "9 septembre 2026". */
export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(intlLocale[locale], { day: 'numeric', month: 'long', year: 'numeric' });
}
