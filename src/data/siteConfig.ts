// Site-wide feature flags.
//
// SHOW_BLOG is the single switch for making the blog public. While it is
// false the blog stays reachable by URL but is not advertised: the Resources
// menu has no Blog item and the sitemap skips every /blog/ URL. Flip it to
// true when the first post ships, and both follow.
export const SHOW_BLOG = true;
