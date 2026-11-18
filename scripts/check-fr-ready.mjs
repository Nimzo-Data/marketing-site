// What's left before French can launch: French copy modules still exporting
// placeholder(en), and published English posts with no French version.
// Usage: npm run check:fr   (exits 1 while anything is left)
// The build itself enforces both once SHOW_FRENCH is true; this is the to-do list.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
};

const placeholders = walk('src')
  .filter((f) => f.endsWith('.fr.ts'))
  .filter((f) => /\bplaceholder\(/.test(readFileSync(f, 'utf8')))
  .sort();

const frontmatter = (file) => {
  const fm = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*["']?([^"'\\n]+)["']?\\s*$`, 'm'))?.[1];
  return { draft: get('draft') !== 'false', translationOf: get('translationOf') };
};

const posts = (dir) =>
  existsSync(dir) ? readdirSync(dir).filter((f) => /\.mdx?$/.test(f)).map((f) => ({ file: join(dir, f), id: f.replace(/\.mdx?$/, '') })) : [];
const translated = new Set(posts('src/blog/fr').map((p) => frontmatter(p.file).translationOf).filter(Boolean));
const missingPosts = posts('src/blog')
  .filter((p) => !frontmatter(p.file).draft && !translated.has(p.id))
  .map((p) => p.file);

if (!placeholders.length && !missingPosts.length) {
  console.log('check:fr: French is complete.');
  process.exit(0);
}
if (placeholders.length) console.log(`French copy still to write (${placeholders.length}):\n` + placeholders.map((f) => `  - ${f}`).join('\n'));
if (missingPosts.length) console.log(`Posts without a French version (${missingPosts.length}):\n` + missingPosts.map((f) => `  - ${f}`).join('\n'));
process.exit(1);
