// A French copy module is either a whole placeholder(en) (not written yet) or
// entirely French. Mixing the two would type-check and pass the placeholder
// guard while shipping English, so it's refused (scripts/fr-lint.test.mjs).
export function frModuleProblems(source) {
  const code = source
    // A comment starts with // not preceded by ":" (so "https://" in a string isn't one).
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^import .*$/gm, '')
    // Text inside strings is French ("en cours") or a locale code ('en'), never the module.
    .replace(/'(?:[^'\\\n]|\\.)*'/g, "''")
    .replace(/"(?:[^"\\\n]|\\.)*"/g, '""')
    .replace(/`(?:[^`\\]|\\.)*`/g, '``');
  const uses = code.match(/\ben\b/g)?.length ?? 0;
  const whole = code.match(/=\s*placeholder\(en\)\s*;/g)?.length ?? 0;
  if (uses === 0 || (uses === 1 && whole === 1)) return [];
  return ['mixes English copy into French: use placeholder(en) for the whole module, or write every key in French'];
}
