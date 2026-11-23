// Structured prices shown in more than one place. Copy formats them per
// language with eur()/eurRange() from src/i18n/format.ts, so a price change
// happens here once. Prices inside prose (examples, case studies) stay in copy.
export const prices = {
  audit: { min: 3000, max: 5000 },
  build: { min: 15000, max: 50000 },
  improve: { min: 5000, max: 15000 },
  support: { run: 950, extend: 1950, lead: 3950, extraDay: 1000 },
} as const;
