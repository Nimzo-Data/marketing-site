import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { frModuleProblems } from './fr-lint.mjs';

describe('frModuleProblems', () => {
  it('accepts a whole placeholder and a fully written module', () => {
    expect(frModuleProblems("import en, { type Copy } from './x.en';\nconst copy: Copy = placeholder(en);")).toEqual([]);
    expect(frModuleProblems("import type { Copy } from './x.en';\nconst copy: Copy = { title: 'Bonjour' };")).toEqual([]);
  });

  it('flags English spread into a French module', () => {
    expect(frModuleProblems("import en, { type Copy } from './x.en';\nconst copy: Copy = { ...en, title: 'Bonjour' };")).toHaveLength(1);
  });

  it('flags English values reused key by key', () => {
    expect(frModuleProblems("import en, { type Copy } from './x.en';\nconst copy: Copy = { title: 'Bonjour', faqs: en.faqs };")).toHaveLength(1);
  });

  it('flags a placeholder on part of a module', () => {
    expect(frModuleProblems("import en, { type Copy } from './x.en';\nconst copy: Copy = { title: 'Bonjour', faqs: placeholder(en.faqs) };")).toHaveLength(1);
  });
});

describe('French copy modules in src/', () => {
  const walk = (d, out = []) => {
    for (const n of readdirSync(d)) {
      const f = join(d, n);
      statSync(f).isDirectory() ? walk(f, out) : f.endsWith('.fr.ts') && out.push(f);
    }
    return out;
  };
  it('are either a whole placeholder or fully French', () => {
    const problems = walk('src').flatMap((f) => frModuleProblems(readFileSync(f, 'utf8')).map((p) => `${f}: ${p}`));
    expect(problems).toEqual([]);
  });
});
