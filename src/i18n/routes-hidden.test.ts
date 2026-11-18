import { describe, it, expect, vi } from 'vitest';

vi.mock('./flags', () => ({ frenchBuilt: false }));

import { routes, alternateLinks } from './routes';

describe('alternateLinks while French is not built', () => {
  it('returns nothing, so no hreflang points at a missing page', () => {
    expect(alternateLinks(routes.about, new URL('https://nimzodata.com'))).toEqual([]);
  });
});
