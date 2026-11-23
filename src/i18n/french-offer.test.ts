import { describe, it, expect } from 'vitest';
import { offerFrench } from './french-offer';

describe('offerFrench', () => {
  it('offers French when the browser’s main language is French', () => {
    expect(offerFrench(['fr-FR', 'en'], false)).toBe(true);
    expect(offerFrench(['fr'], false)).toBe(true);
    expect(offerFrench(['FR-be'], false)).toBe(true);
  });
  it('does not offer it when French is only a secondary language', () => {
    expect(offerFrench(['en-GB', 'fr'], false)).toBe(false);
  });
  it('does not offer it once dismissed', () => {
    expect(offerFrench(['fr-FR'], true)).toBe(false);
  });
  it('does not offer it without language information', () => {
    expect(offerFrench([], false)).toBe(false);
  });
});
