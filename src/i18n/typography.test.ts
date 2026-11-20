import { describe, it, expect } from 'vitest';
import { frenchTypography } from './typography';

const NBSP = ' ';
const NNBSP = ' ';

describe('frenchTypography', () => {
  it('puts a non-breaking space before a colon', () => {
    expect(frenchTypography('Prix : oui')).toBe(`Prix${NBSP}: oui`);
  });
  it('puts a narrow non-breaking space before ; ? !', () => {
    expect(frenchTypography('Pourquoi ? Parce que ! Enfin ; voilà')).toBe(`Pourquoi${NNBSP}? Parce que${NNBSP}! Enfin${NNBSP}; voilà`);
  });
  it('keeps guillemets with their words', () => {
    expect(frenchTypography('le « build » du site')).toBe(`le «${NBSP}build${NBSP}» du site`);
  });
  it('leaves URLs, tags and text without spaces alone', () => {
    const html = '<a href="https://nimzodata.com/fr/?a=1">lien</a>';
    expect(frenchTypography(html)).toBe(html);
  });
  it('keeps hand-typed thousands together', () => {
    expect(frenchTypography('environ 35 000 builds')).toBe(`environ 35${NNBSP}000${NBSP}builds`.replace(`${NBSP}builds`, ' builds'));
  });
  it('keeps a number with its unit', () => {
    expect(frenchTypography('500 € par mois, 77 %, 30 à 99 $')).toBe(`500${NBSP}€ par mois, 77${NBSP}%, 30${NBSP}à${NBSP}99${NBSP}$`);
    expect(frenchTypography('15 000 € HT')).toBe(`15${NNBSP}000${NBSP}€${NBSP}HT`);
  });
  it('keeps a duration range together', () => {
    expect(frenchTypography('Construction (7 à 14 semaines)')).toBe(`Construction (7${NBSP}à${NBSP}14${NBSP}semaines)`);
    expect(frenchTypography('en 3 jours')).toBe(`en 3${NBSP}jours`);
  });
  it('leaves years and ordinary numbers followed by words alone', () => {
    expect(frenchTypography('en 2026 nous avons 12 clients')).toBe('en 2026 nous avons 12 clients');
  });
  it('is idempotent', () => {
    const once = frenchTypography('Prix : 15 000 € HT, 7 à 14 semaines ?');
    expect(frenchTypography(once)).toBe(once);
  });
});
