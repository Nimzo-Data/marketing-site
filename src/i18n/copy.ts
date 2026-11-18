// Copy modules come in pairs: x.en.ts is the type source, x.fr.ts must match
// it. Until a French module is written it exports placeholder(en), which
// renders English on previews and is refused by the build once French ships.
import { SHOW_FRENCH } from '../data/siteConfig';
import type { Locale } from './locales';

const PLACEHOLDER = Symbol.for('nimzo.fr-placeholder');

export function placeholder<T extends object>(en: T): T {
  return Object.assign(Object.create(Object.getPrototypeOf(en)), en, { [PLACEHOLDER]: true });
}

export function isPlaceholder(value: unknown): boolean {
  return typeof value === 'object' && value !== null && PLACEHOLDER in value;
}

export function pickCopy<T>(copies: Record<Locale, T>, locale: Locale, hint = 'unknown'): T {
  const copy = copies[locale];
  if (locale === 'fr' && SHOW_FRENCH && isPlaceholder(copy)) {
    throw new Error(`French copy missing (placeholder) for ${hint}`);
  }
  return copy;
}
