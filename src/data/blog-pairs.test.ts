import { describe, it, expect } from 'vitest';
import { findUnpairedPosts } from './blog-pairs';

const en = (id: string, draft = false) => ({ id, draft });
const fr = (id: string, translationOf: string | undefined, draft = false) => ({ id: `fr/${id}`, draft, translationOf });

describe('findUnpairedPosts', () => {
  it('reports a published English post with no French version', () => {
    expect(findUnpairedPosts([en('dataform-not-dbt')])).toEqual(['dataform-not-dbt']);
  });

  it('ignores an English draft without a French version', () => {
    expect(findUnpairedPosts([en('wip', true)])).toEqual([]);
  });

  it('accepts a proper pair', () => {
    expect(findUnpairedPosts([en('dataform-not-dbt'), fr('dataform-plutot-que-dbt', 'dataform-not-dbt')])).toEqual([]);
  });

  it('reports a pair whose draft flags differ, so both publish together', () => {
    expect(findUnpairedPosts([en('a'), fr('a-fr', 'a', true)])).toEqual(['a', 'fr/a-fr']);
  });

  it('reports a French post that points at an unknown or missing English post', () => {
    expect(findUnpairedPosts([fr('orphan', 'nope')])).toEqual(['fr/orphan']);
    expect(findUnpairedPosts([fr('orphan', undefined)])).toEqual(['fr/orphan']);
  });

  it('reports two French posts claiming the same English post', () => {
    expect(findUnpairedPosts([en('a'), fr('x', 'a'), fr('y', 'a')])).toEqual(['fr/x', 'fr/y']);
  });
});
