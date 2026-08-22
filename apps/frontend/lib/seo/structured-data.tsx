import { SITE_CONFIG } from "./site-config";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    jobTitle: SITE_CONFIG.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.organization.name,
      url: SITE_CONFIG.organization.url,
    },
    sameAs: SITE_CONFIG.sameAs,
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
    name: SITE_CONFIG.organization.name,
    url: SITE_CONFIG.organization.url,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.legalName,
      alternateName: SITE_CONFIG.name,
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
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.legalName,
      alternateName: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}