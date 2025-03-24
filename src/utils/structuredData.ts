import { siteMetadata } from '@/config/siteMetadata';

/**
 * Generate LocalBusiness structured data
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteMetadata.siteUrl}#organization`,
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
    image: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
    email: siteMetadata.email,
    telephone: siteMetadata.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.address,
    },
    openingHours: siteMetadata.businessHours,
    sameAs: [
      siteMetadata.social.facebook,
      siteMetadata.social.twitter,
      siteMetadata.social.instagram,
    ],
  };
}

/**
 * Generate Service structured data
 */
export function getServiceSchema(service: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteMetadata.siteUrl}#organization`,
      name: siteMetadata.title,
    },
    url: service.url,
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
