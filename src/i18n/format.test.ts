import { describe, it, expect } from 'vitest';
import { eur, eurRange, usd, formatDate } from './format';

describe('eur', () => {
  it('formats English prices as the site shows them today', () => {
    expect(eur(3000, 'en')).toBe('€3,000');
    expect(eur(950, 'en')).toBe('€950');
  });

  it('formats French prices with spaces and a trailing euro sign', () => {
    expect(eur(3000, 'fr')).toMatch(/^3\s000\s€$/u);
    expect(eur(3000, 'fr')).not.toContain(' '); // no breakable plain spaces
  });
});

describe('usd', () => {
  it('formats dollars the English and French way', () => {
    expect(usd(1300, 'en')).toBe('$1,300');
    expect(usd(1300, 'fr')).toMatch(/^1\s300\s\$$/u);
    expect(usd(1300, 'fr')).not.toContain(' ');
  });
});

describe('eurRange', () => {
  it('matches the current English range format', () => {
    expect(eurRange(3000, 5000, 'en')).toBe('€3,000\u00a0– €5,000');
  });

  it('puts one euro sign at the end in French', () => {
    expect(eurRange(3000, 5000, 'fr')).toMatch(/^3\s000\u00a0– 5\s000\s€$/u);
  });
});

describe('formatDate', () => {
  it('uses long British dates in English and French dates in French', () => {
    expect(formatDate(new Date('2026-09-09'), 'en')).toBe('9 September 2026');
    expect(formatDate(new Date('2026-09-09'), 'fr')).toBe('9 septembre 2026');
  });
});
