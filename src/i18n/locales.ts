export type Locale = 'en' | 'fr';

export const locales: readonly Locale[] = ['en', 'fr'];

export const defaultLocale: Locale = 'en';

export function ogLocale(locale: Locale): 'en_GB' | 'fr_FR' {
  return locale === 'fr' ? 'fr_FR' : 'en_GB';
}
