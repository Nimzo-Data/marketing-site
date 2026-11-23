// Copy modules come in pairs: x.en.ts is the type source, x.fr.ts must match
// it. Until a French module is written it exports placeholder(en), which
// renders English on previews and is refused by the build once French ships.
import { SHOW_FRENCH } from '../data/siteConfig';
import type { Locale } from './locales';
import { frenchTypographyDeep } from './typography';

const PLACEHOLDER = Symbol.for('nimzo.fr-placeholder');

// PSEUDO_FR=1 marks every placeholder string ⟦like this⟧, so
// `npm run check:fr:pseudo` can spot English that doesn't come from copy.
const pseudo = typeof process !== 'undefined' && process.env.PSEUDO_FR === '1';

function mark(value: unknown): unknown {
  if (typeof value === 'string') {
    if (/^(\/|https?:|mailto:|#)/.test(value) || !/[A-Za-z]/.test(value)) return value;
    // Mark the text between tags, leave tags and attributes alone.
    return value.replace(/(^|>)([^<]+)(?=<|$)/g, (_, open, text) => (/[A-Za-z]/.test(text) ? `${open}⟦${text}⟧` : `${open}${text}`));
  }
  if (Array.isArray(value)) return value.map(mark);
  if (typeof value === 'function') return (...args: unknown[]) => mark((value as (...a: unknown[]) => unknown)(...args));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mark(v)]));
  return value;
}

export function placeholder<T extends object>(en: T): T {
  const base = pseudo ? (mark(en) as T) : en;
  return Object.assign(Object.create(Object.getPrototypeOf(en)), base, { [PLACEHOLDER]: true });
}

export function isPlaceholder(value: unknown): boolean {
  return typeof value === 'object' && value !== null && PLACEHOLDER in value;
}

const typeset = new WeakMap<object, unknown>();

export function pickCopy<T>(copies: Record<Locale, T>, locale: Locale, hint = 'unknown'): T {
  const copy = copies[locale];
  if (locale === 'fr' && SHOW_FRENCH && isPlaceholder(copy)) {
    throw new Error(`French copy missing (placeholder) for ${hint}`);
  }
  // Written French gets its non-breaking spaces here (see typography.ts).
  if (locale === 'fr' && !isPlaceholder(copy) && copy && typeof copy === 'object') {
    if (!typeset.has(copy)) typeset.set(copy, frenchTypographyDeep(copy));
    return typeset.get(copy) as T;
  }
  return copy;
}
