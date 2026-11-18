import type { Locale } from './locales';
import { pickCopy } from './copy';
import en, { type UiCopy } from './ui.en';
import fr from './ui.fr';

export type { UiCopy };

/** Interface strings for a locale. */
export function t(locale: Locale): UiCopy {
  return pickCopy({ en, fr }, locale, 'i18n/ui');
}
