import { SITE_URL, SITE_NAME, CONTACT, SOCIAL, SERVICES, PLANS, FAQ_ITEMS, GOOGLE_REVIEWS } from './constants';

// ============================================================
// Organization Schema
// ============================================================
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phoneRaw,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.zip,
      addressCountry: 'BR',
    },
  };
}

// ============================================================
// LocalBusiness Schema
// ============================================================
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: `${SITE_URL}/images/og-image.jpg`,
    url: SITE_URL,
    telephone: CONTACT.phoneRaw,
    priceRange: 'R$ 49,90 - R$ 149,90',
    description:
      'Coworking com imóvel próprio em Fortaleza. Endereço fiscal e comercial com Processo Gestor do Corpo de Bombeiros, Alvará de Funcionamento e toda a estrutura para abertura de empresas.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.zip,
      addressCountry: 'BR',
      neighborhood: CONTACT.address.neighborhood,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -3.735,
      longitude: -38.527,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_REVIEWS.rating.toString(),
      reviewCount: GOOGLE_REVIEWS.count.toString(),
      bestRating: '5',
    },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin],
  };
}

// ============================================================
// WebSite Schema
// ============================================================
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Coworking com imóvel próprio em Fortaleza. Endereço fiscal e comercial para empresas.',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

// ============================================================
// FAQPage Schema
// ============================================================
export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ============================================================
// Service Schemas
// ============================================================
export function getServiceSchemas() {
  return SERVICES.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Fortaleza',
    },
  }));
}

// ============================================================
// Offer Schemas (Plans)
// ============================================================
export function getOfferSchemas() {
  return PLANS.filter((plan) => plan.priceAnnual !== null).map((plan) => ({
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: plan.name,
    description: plan.description,
    price: plan.priceAnnual?.replace(',', '.'),
    priceCurrency: 'BRL',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: plan.priceAnnual?.replace(',', '.'),
      priceCurrency: 'BRL',
      unitCode: 'MON',
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: '1',
        unitCode: 'MON',
      },
    },
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
    },
  }));
}

// ============================================================
// BreadcrumbList Schema
// ============================================================
export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
    ],
  };
}
