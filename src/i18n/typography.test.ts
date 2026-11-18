import { describe, it, expect } from 'vitest';
import { frenchTypography } from './typography';

const NBSP = ' ';
const NNBSP = ' ';

describe('frenchTypography', () => {
  it('puts a non-breaking space before a colon', () => {
    expect(frenchTypography('Prix : 3 000 €')).toBe(`Prix${NBSP}: 3 000 €`);
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
  it('is idempotent', () => {
    const once = frenchTypography('Prix : oui ?');
    expect(frenchTypography(once)).toBe(once);
  });
});
