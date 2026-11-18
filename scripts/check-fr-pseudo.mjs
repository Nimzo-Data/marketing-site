// Finds English on French pages that doesn't come from a copy module.
// Usage: npm run check:fr:pseudo
// It builds with French on and PSEUDO_FR=1, which marks every placeholder
// string ⟦like this⟧, then lists visible text and labels on /fr/ pages that
// are left unmarked: those are hardcoded in a template or component.
import { parse, NodeType } from 'node-html-parser';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Proper nouns and codes that read the same in French.
const ALLOW = /^(Nimzo|Data|Nimzo Data|LinkedIn|FR|EN|Google|Cloud|BigQuery|Dataform|dbt|Airbyte|Fivetran|Looker|Lightdash|Metabase|Steep|Dagster|Platform|GCP|Shopify|Postgres|Stripe|Salesforce|Meta|Ads|HubSpot|Amplitude|Datastream|Stitch|Panoply|Make|LookML|Run|Aeyde|Tameson|Verdure|B\.V\.|Antoine|Anicotte|Phoebe|Pham|Paul|van|Oorschot|Cloud Run|SIRET|SARL|Berlin|Eindhoven|Amsterdam|English|version)$/;

const leftovers = new Map();
const note = (text, path) => {
  let rest = text.replace(/[\w.+-]+@[\w.-]+/g, ' ');
  // Markers can nest (a marked string passed into a marked function): strip innermost first.
  while (/⟦[^⟦⟧]*⟧/.test(rest)) rest = rest.replace(/⟦[^⟦⟧]*⟧/g, ' ');
  rest = rest.replace(/[^A-Za-zÀ-ÿ' ]+/g, ' ').trim();
  const words = rest.split(/\s+/).filter((w) => w.length > 2 && !ALLOW.test(w));
  if (!words.length) return;
  const key = text.trim().slice(0, 90);
  if (!leftovers.has(key)) leftovers.set(key, new Set());
  leftovers.get(key).add(path);
};

const walk = (dir, out = []) => {
  for (const n of readdirSync(dir)) {
    const f = join(dir, n);
    statSync(f).isDirectory() ? walk(f, out) : n === 'index.html' && out.push(f);
  }
  return out;
};

for (const file of walk('dist/fr')) {
  const root = parse(readFileSync(file, 'utf8'));
  const path = file.replace(/^dist/, '').replace(/index\.html$/, '');
  for (const el of root.querySelectorAll('title, meta[name="description"], [alt], [aria-label], [title]')) {
    for (const attr of ['alt', 'aria-label', 'title', 'content']) {
      const v = el.getAttribute(attr);
      if (v && !(el.tagName === 'META' && attr !== 'content')) note(v, path);
    }
    if (el.tagName === 'TITLE') note(el.text, path);
  }
  const visit = (node) => {
    if (node.nodeType === NodeType.TEXT_NODE) return note(node.text, path);
    const tag = node.rawTagName?.toLowerCase();
    if (['script', 'style', 'svg', 'head', 'code'].includes(tag)) return;
    if (node.hasAttribute?.('data-lang-switch')) return;
    node.childNodes.forEach(visit);
  };
  visit(root.querySelector('body'));
}

if (!leftovers.size) {
  console.log('check:fr:pseudo: no English outside copy modules.');
  process.exit(0);
}
console.log(`check:fr:pseudo: ${leftovers.size} English text(s) outside copy modules:`);
for (const [text, paths] of leftovers) console.log(`  - "${text}"  (${[...paths].slice(0, 3).join(', ')}${paths.size > 3 ? `, +${paths.size - 3}` : ''})`);
process.exit(1);
