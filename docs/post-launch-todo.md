# Post-launch TODO

Saved 23 April 2026, right after shipping `nimzodata.com`. Updated with leftover items found in gstack design audit + CE plan.

## Must do

### Verify GA4 firing in prod
- Wait 48h, check GA4 → Reports → Realtime + Acquisition reports
- If still 0 users after 48h:
  - Test from Chrome/Firefox (not Brave) in a non-incognito session
  - Accept cookies
  - DevTools Network → filter `collect` → should be 204
  - If 204 but still no data, issue is in GA4 property config, not the site

### Safari manual spot-check
- Test on real iPhone + real Mac Safari
- Priority spots flagged by cross-browser code review:
  - Header dropdown (`focus-within` + JS — Safari sometimes inconsistent)
  - Sticky header behavior when scrolling
  - `/contact/` Google Calendar iframe
  - Mobile menu slide-out + body scroll lock

## Worth 10 min

### Submit sitemap to Google Search Console
- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Add property → `nimzodata.com`
- Verify ownership via DNS TXT record in OVHcloud
- Submit sitemap: `https://nimzodata.com/sitemap-index.xml`
- Speeds up indexing by weeks vs. waiting for organic crawl

## Nice-to-have (can wait weeks/months)

### Content
- Case studies — real client stories close deals faster than generic positioning
- Team photo + about imagery
- First blog post (infrastructure ready at `src/content/blog/`)

### Design polish
- First-class OG image per page (currently one static image site-wide). Vercel OG library supports dynamic SVG→PNG with page title. ~2h of work.
- Investigate Cal.com migration if Google Calendar blue stands out too much on `/contact/`
  - Cal.com is free, open-source, supports full brand theming
  - Drop-in iframe replacement; ~30 min migration

### Security / compliance
- **Bump CSP to A+ grade**: remove `'unsafe-inline'` by switching inline scripts to external files OR using nonce-based CSP. ~30 min. Current A grade is already above average.
- **Iubenda subscription or lawyer review** before first enterprise client — they'll want to DPA-review your legal pages. €36/yr (Iubenda) or €400-800 one-time (French avocat en droit du numérique).
- **DPA template** for signing with clients before touching their data — separate from the website's terms, this is client-engagement protection.

## Known behaviors (not bugs)

- Brave users with Shields on don't see the cookie banner and don't fire GA4. Correct privacy-first outcome.
- Cookie banner shows on every new browser session until user clicks Accept or Decline. Footer "Cookie preferences" link re-shows it for anyone who wants to change their mind.
- First load of GA4 Realtime after new property creation can lag up to 5 min.

## Deferred ideas

- Contact form alternative to Google Calendar (e.g., a simple form that sends to your email)
- Testimonial section on home or about
- Pricing calculator / ROI tool
- Newsletter capture (requires double opt-in under GDPR)
