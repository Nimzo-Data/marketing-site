// Compare dist/ with .dist-baseline/ (see dist-normalize.mjs for what is
// ignored). Exits 1 on any difference. Usage: npm run diff:dist [-- --full]
import { diffDist } from './dist-normalize.mjs';

const results = diffDist('.dist-baseline', 'dist');
if (!results.length) {
  console.log('diff:dist: no differences');
  process.exit(0);
}
const full = process.argv.includes('--full');
for (const { path, diff } of results) {
  console.log(`\n=== ${path}`);
  const lines = diff.split('\n');
  console.log((full ? lines : lines.slice(0, 20)).join('\n'));
  if (!full && lines.length > 20) console.log(`... ${lines.length - 20} more lines`);
}
console.log(`\ndiff:dist: ${results.length} file(s) differ`);
process.exit(1);
