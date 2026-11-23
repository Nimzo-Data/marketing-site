import { describe, it, expect } from 'vitest';
import { remarkFrenchTypography } from './remark-french';

const tree = () => ({
  type: 'root',
  children: [
    { type: 'paragraph', children: [{ type: 'text', value: 'Pourquoi ?' }, { type: 'inlineCode', value: 'a : b' }] },
  ],
});

describe('remarkFrenchTypography', () => {
  it('typesets text in French posts and leaves code alone', () => {
    const t = tree();
    remarkFrenchTypography()(t, { path: '/site/src/blog/fr/post.md' });
    expect(t.children[0].children[0].value).toBe('Pourquoi ?');
    expect(t.children[0].children[1].value).toBe('a : b');
  });

  it('leaves English posts untouched', () => {
    const t = tree();
    remarkFrenchTypography()(t, { path: '/site/src/blog/post.md' });
    expect(t.children[0].children[0].value).toBe('Pourquoi ?');
  });
});
