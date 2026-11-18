import type { Locale } from '../i18n/locales';
import { pickCopy } from '../i18n/copy';
import en, { type AudienceCopy } from './audience.en';
import fr from './audience.fr';

/** "Who we work with" lists, shown on the homepage and About. */
export function getAudience(locale: Locale): AudienceCopy {
  return pickCopy({ en, fr }, locale, 'data/audience');
}
