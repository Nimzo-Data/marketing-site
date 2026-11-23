// Site-wide feature flags.
//
// SHOW_BLOG is the single switch for making the blog public. While it is
// false the blog stays reachable by URL but is not advertised: the Resources
// menu has no Blog item and the sitemap skips every /blog/ URL. Flip it to
// true when the first post ships, and both follow.
export const SHOW_BLOG = true;

// SHOW_FRENCH is the single switch for launching the French site. While it is
// false, production builds contain no /fr/ page, no language switch, no
// hreflang and no French sitemap entry. French still builds in `astro dev`, on
// Vercel previews, and locally with INCLUDE_FRENCH=1, so it can be reviewed.
// Flipping it to true also makes the build refuse any French copy that is
// still a placeholder, and any blog post without its French pair.
export const SHOW_FRENCH = true;
