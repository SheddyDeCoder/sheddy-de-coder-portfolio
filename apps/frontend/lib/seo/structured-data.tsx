
import { SITE_CONFIG } from "./site-config";

const personId = `${SITE_CONFIG.url}/#person`;
const websiteId = `${SITE_CONFIG.url}/#website`;
const organizationId = `${SITE_CONFIG.organization.url}#organization`;

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    jobTitle: SITE_CONFIG.jobTitle,
    description: SITE_CONFIG.defaultDescription,
    sameAs: SITE_CONFIG.sameAs,
    worksFor: {
      "@id": organizationId,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_CONFIG.organization.name,
    founder: {
      "@id": personId,
    },
    subjectOf: {
      "@type": "WebPage",
      url: SITE_CONFIG.organization.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
    author: {
      "@id": personId,
    },
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}