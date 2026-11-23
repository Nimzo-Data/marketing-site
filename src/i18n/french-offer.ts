// Whether to offer the French version to a visitor on an English page: only
// when their browser's main language is French and they haven't closed the
// offer before. It never redirects (see FrenchOffer.astro).
export function offerFrench(languages: readonly string[], dismissed: boolean): boolean {
  return !dismissed && (languages[0] ?? '').toLowerCase().startsWith('fr');
}

/** localStorage key remembering that the visitor closed the offer. */
export const FRENCH_OFFER_DISMISSED_KEY = 'nimzo-fr-offer-dismissed';
