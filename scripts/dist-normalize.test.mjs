import { describe, it, expect } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { normalizeHtml, normalizeCss, diffDist } from './dist-normalize.mjs';

describe('normalizeHtml', () => {
  it('ignores Astro scope attributes, scope classes and whitespace runs', () => {
    expect(normalizeHtml('<p data-astro-cid-abc123 class="x astro-ab12cd34">A  \n b</p>')).toBe(
      normalizeHtml('<p class="x" data-astro-cid-zzz>A b</p>')
    );
  });

  it('treats an entity and its character as equal', () => {
    expect(normalizeHtml('<p>a&rarr;b</p>')).toBe(normalizeHtml('<p>a→b</p>'));
  });

  it('detects a dropped <br>', () => {
    expect(normalizeHtml('<p>a<br>b</p>')).not.toBe(normalizeHtml('<p>a b</p>'));
  });

  it('detects a changed href', () => {
    expect(normalizeHtml('<a href="/a/">x</a>')).not.toBe(normalizeHtml('<a href="/b/">x</a>'));
  });

  it('ignores hashed asset filenames', () => {
    expect(normalizeHtml('<link href="/_astro/index.Ab12.css">')).toBe(
      normalizeHtml('<link href="/_astro/index.Zz99.css">')
    );
  });

  it('ignores scope hashes inside inline style blocks', () => {
    expect(normalizeHtml('<style>.a[data-astro-cid-abc123]{color:red}</style>')).toBe(
      normalizeHtml('<style>.a[data-astro-cid-zzz999] { color:red }</style>')
    );
  });

  it('ignores attribute order', () => {
    expect(normalizeHtml('<a href="/x/" class="c">x</a>')).toBe(normalizeHtml('<a class="c" href="/x/">x</a>'));
  });
});

describe('normalizeCss', () => {
  it('ignores scope attribute selectors and whitespace', () => {
    expect(normalizeCss('.a[data-astro-cid-abc]{color:red}')).toBe(normalizeCss('.a[data-astro-cid-zzz] { color:red }'));
  });
});

describe('diffDist', () => {
  it('reports a page that exists in only one directory, and nothing for equal pages', () => {
    const a = mkdtempSync(join(tmpdir(), 'base-'));
    const b = mkdtempSync(join(tmpdir(), 'dist-'));
    for (const d of [a, b]) writeFileSync(join(d, 'index.html'), '<p>same</p>');
    mkdirSync(join(b, 'new'));
    writeFileSync(join(b, 'new', 'index.html'), '<p>new</p>');
    const result = diffDist(a, b);
    expect(result.map((r) => r.path)).toEqual(['new/index.html']);
  });

  it('treats CSS moved between an inline style block and a stylesheet as unchanged', () => {
    const a = mkdtempSync(join(tmpdir(), 'base-'));
    const b = mkdtempSync(join(tmpdir(), 'dist-'));
    writeFileSync(join(a, 'index.html'), '<style>.x[data-astro-cid-aaa]{color:red}</style><p>p</p>');
    writeFileSync(join(b, 'index.html'), '<p>p</p>');
    mkdirSync(join(b, '_astro'));
    writeFileSync(join(b, '_astro', 'page.Hash1234.css'), '.x[data-astro-cid-bbb]{color:red}');
    expect(diffDist(a, b)).toEqual([]);
  });

  it('reports a changed CSS rule', () => {
    const a = mkdtempSync(join(tmpdir(), 'base-'));
    const b = mkdtempSync(join(tmpdir(), 'dist-'));
    writeFileSync(join(a, 'index.html'), '<style>.x{color:red}</style>');
    writeFileSync(join(b, 'index.html'), '<style>.x{color:blue}</style>');
    expect(diffDist(a, b).map((r) => r.path)).toEqual(['[all css]']);
  });

  it('reports changed text', () => {
    const a = mkdtempSync(join(tmpdir(), 'base-'));
    const b = mkdtempSync(join(tmpdir(), 'dist-'));
    writeFileSync(join(a, 'index.html'), '<p>old copy</p>');
    writeFileSync(join(b, 'index.html'), '<p>new copy</p>');
    const result = diffDist(a, b);
    expect(result).toHaveLength(1);
    expect(result[0].diff).toContain('old copy');
    expect(result[0].diff).toContain('new copy');
  });
});
