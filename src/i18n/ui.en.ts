// Interface strings shared by every page: layout chrome, the cookie banner and
// the labels components render themselves. French lives in ui.fr.ts and must
// match this shape. Keys ending in Html hold HTML and render with set:html.
const ui = {
  site: {
    organizationDescription:
      'Boutique GCP data consulting: data platform audits, builds, improvements, and support.',
    breadcrumbHome: 'Home',
    rssTitle: 'Nimzo Data Blog',
  },
  header: {
    logoAria: 'Nimzo Data — Home',
    mainNav: 'Main navigation',
    openMenu: 'Open navigation menu',
  },
  mobileMenu: {
    dialog: 'Navigation menu',
    close: 'Close navigation menu',
    nav: 'Mobile navigation',
  },
  footer: {
    tagline: 'Google Cloud data platforms for growing European companies.',
    location: 'Based in France. Serving Europe.',
    services: 'Services',
    technologies: 'Technologies',
    viewAll: 'View all',
    resources: 'Resources',
    company: 'Company',
    getInTouch: 'Get in touch',
    letsTalk: "Let's talk",
    cookiePreferences: 'Cookie preferences',
  },
  cookie: {
    label: 'Cookie consent',
    message: 'We use analytics cookies to improve your experience. You can opt out at any time.',
    accept: 'Accept',
    decline: 'Decline',
  },
};

export type UiCopy = typeof ui;
export default ui;
