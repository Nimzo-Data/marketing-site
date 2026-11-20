import { describe, it, expect, vi } from 'vitest';

const flags = vi.hoisted(() => ({ SHOW_FRENCH: false }));
vi.mock('../data/siteConfig', () => flags);

import { placeholder, isPlaceholder, pickCopy } from './copy';

const en = { title: 'Hello' };

describe('copy helpers', () => {
  it('tags a placeholder without changing its content', () => {
    const fr = placeholder(en);
    expect(isPlaceholder(fr)).toBe(true);
    expect(fr.title).toBe('Hello');
    expect(isPlaceholder(en)).toBe(false);
    expect(isPlaceholder({ title: 'Bonjour' })).toBe(false);
  });

  it('picks the copy for the locale', () => {
    const fr = { title: 'Bonjour' };
    expect(pickCopy({ en, fr }, 'en')).toBe(en);
    expect(pickCopy({ en, fr }, 'fr')).toEqual(fr);
  });

  it('allows a placeholder while French is not launched', () => {
    flags.SHOW_FRENCH = false;
    expect(pickCopy({ en, fr: placeholder(en) }, 'fr', 'home').title).toBe('Hello');
  });

  it('refuses a placeholder once French is launched', () => {
    flags.SHOW_FRENCH = true;
    expect(() => pickCopy({ en, fr: placeholder(en) }, 'fr', 'home')).toThrow(
      'French copy missing (placeholder) for home'
    );
    flags.SHOW_FRENCH = false;
  });

  it('applies French typography to French copy', () => {
    const fr = { title: 'Pourquoi ?' };
    expect(pickCopy({ en, fr }, 'fr').title).toBe('Pourquoi\u202F?');
  });
});
