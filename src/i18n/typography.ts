// French typography, applied to every French copy string (see pickCopy) and
// to French blog posts, so writers type ordinary spaces:
//   "Prix : 3 000 €"  -> non-breaking space before ":"
//   "Pourquoi ?"      -> narrow non-breaking space before ";", "?", "!"
//   "« build »"       -> non-breaking spaces inside guillemets
// Only an existing space is replaced, so URLs ("https:", "?a=1") never change.
const NBSP = ' ';
const NNBSP = ' ';

export function frenchTypography(text: string): string {
  return text
    .replace(/ :/g, `${NBSP}:`)
    .replace(/ ([;?!])/g, `${NNBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/ »/g, `${NBSP}»`);
}

/** Applies frenchTypography to every string in a copy object, functions included. */
export function frenchTypographyDeep<T>(value: T): T {
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') return frenchTypography(v);
    if (Array.isArray(v)) return v.map(walk);
    if (typeof v === 'function') return (...args: unknown[]) => walk((v as (...a: unknown[]) => unknown)(...args));
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(value) as T;
}
