// Every published post exists in both languages, and both publish together.
// English posts live at src/blog/<slug>.md; each French post lives at
// src/blog/fr/<french-slug>.md and names its English post in `translationOf`.

export interface PostPairInfo {
  /** Collection id: "<slug>" for English, "fr/<slug>" for French. */
  id: string;
  draft: boolean;
  translationOf?: string;
}

/** Ids of posts that break the pairing rule, sorted. Empty means every pair is whole. */
export function findUnpairedPosts(posts: PostPairInfo[]): string[] {
  const english = new Map(posts.filter((p) => !p.id.startsWith('fr/')).map((p) => [p.id, p]));
  const french = posts.filter((p) => p.id.startsWith('fr/'));
  const bad = new Set<string>();

  const claims = new Map<string, PostPairInfo[]>();
  for (const f of french) {
    const target = f.translationOf ? english.get(f.translationOf) : undefined;
    if (!target) {
      bad.add(f.id);
      continue;
    }
    claims.set(target.id, [...(claims.get(target.id) ?? []), f]);
  }

  for (const [id, en] of english) {
    const pair = claims.get(id) ?? [];
    if (pair.length > 1) pair.forEach((f) => bad.add(f.id));
    else if (pair.length === 1 && pair[0].draft !== en.draft) {
      bad.add(id);
      bad.add(pair[0].id);
    } else if (pair.length === 0 && !en.draft) bad.add(id);
  }

  return [...bad].sort();
}
