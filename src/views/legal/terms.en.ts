import { href } from '../../i18n/routes';

const copy = {
  metaTitle: "Terms of Service | Nimzo Data",
  metaDescription: "Terms governing the use of nimzodata.com and Nimzo Data consulting engagements.",
  l1: "Terms of Service",
  l2: "Last updated: 23 April 2026",
  l3: `These Terms of Service ("Terms") govern your access to and use of the website
<a href="https://nimzodata.com">nimzodata.com</a> (the "Site") operated by Nimzo Data SARL
("Nimzo Data", "we", "us", "our"). By accessing or using the Site, you agree to be bound by these
Terms. If you do not agree, please do not use the Site.`,
  l4: `These Terms cover use of the Site only. Consulting engagements between Nimzo Data and its clients
are governed by a separate services agreement signed at the start of each engagement.`,
  l5: "1. About us",
  l6: `Nimzo Data SARL is a data consulting company registered in France under SIRET
994 080 497 00013, with its registered office at 36 Rue de la Convention, 93230 Romainville,
France. Full legal identification is available on our <a href="${href('legalNotice', 'en')}">Mentions
légales</a> page.`,
  l7: "2. Use of the Site",
  l8: `You may browse the Site for personal, non-commercial informational purposes and to contact us
about our services. You agree not to:`,
  l9: [
    "Use the Site in any way that violates applicable laws or regulations.",
    "Attempt to gain unauthorised access to the Site, its servers, or any associated systems or networks.",
    "Scrape, crawl, or extract content from the Site in a way that degrades service for others.",
    "Reproduce, duplicate, copy, sell, or exploit any portion of the Site without our written consent.",
  ],
  l10: "3. Content and disclaimers",
  l11: `The content published on the Site (including articles, service descriptions, pricing ranges, and
opinions about technologies) is provided for general information only. It does not constitute
professional advice. You should not rely on this content for decisions about your specific data
stack, infrastructure, or business without seeking tailored guidance.`,
  l12: `Pricing ranges shown on the Site are indicative and reflect recent engagements. Actual pricing
for any engagement is confirmed in a written proposal before work begins.`,
  l13: `We make no warranty that the Site will be uninterrupted, error-free, or free from security
vulnerabilities. The Site is provided "as is" to the fullest extent permitted by law.`,
  l14: "4. Intellectual property",
  l15: `All content on the Site, including the Nimzo Data name and logo, design, text, layout, images,
and code, is owned by Nimzo Data SARL or its licensors and is protected by applicable
intellectual property laws.`,
  l16: `You may view, print, and share links to the Site for personal, non-commercial use. Any other use,
including reproduction, redistribution, modification, or commercial use, requires our prior
written consent.`,
  l17: `Third-party marks (e.g., BigQuery, dbt, Dataform, Lightdash, Metabase, Looker) shown on the Site
are the property of their respective owners. Their presence does not imply endorsement of Nimzo
Data by those owners.`,
  l18: "5. Third-party links and services",
  l19: `The Site contains links to third-party websites and embeds third-party services (notably Google
Calendar Appointment Scheduling). We are not responsible for the content, privacy practices, or
availability of third-party sites or services. Your use of them is governed by the terms of the
respective third parties.`,
  l20: "6. Privacy",
  l21: `Your use of the Site is also governed by our <a href="${href('privacy', 'en')}">Privacy Policy</a>, which
explains how we collect, use, and protect personal data.`,
  l22: "7. Limitation of liability",
  l23: `To the fullest extent permitted by applicable law, Nimzo Data shall not be liable for any
indirect, incidental, consequential, or punitive damages arising from or related to your use of
the Site, even if we have been advised of the possibility of such damages.`,
  l24: `Our total liability for any claim arising out of or relating to the Site is limited to
one hundred euros (€100).`,
  l25: `This limitation does not apply to liability that cannot be excluded under applicable law
(including, in France, liability for gross negligence or intentional fault).`,
  l26: "8. Changes to these Terms",
  l27: `We may update these Terms from time to time. The updated version takes effect when posted to
this page, with the "Last updated" date revised. Your continued use of the Site after changes
are posted constitutes acceptance of the revised Terms.`,
  l28: "9. Governing law and jurisdiction",
  l29: `These Terms are governed by French law. Any dispute arising out of or related to these Terms or
your use of the Site that cannot be resolved amicably will be submitted to the competent courts
of Paris, France, unless mandatory consumer protection rules provide otherwise.`,
  l30: "10. Contact",
  l31: `For questions about these Terms, contact us at
<a href="mailto:hello@nimzodata.com">hello@nimzodata.com</a>.`,
};

export type Copy = typeof copy;
export default copy;
