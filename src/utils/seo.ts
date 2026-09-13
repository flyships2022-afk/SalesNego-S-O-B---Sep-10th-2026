import { useEffect } from 'react';
import { RoutePath, RouteSEOConfig } from '../types';

/**
 * Base site URL and default brand metadata
 */
export const SITE_URL = 'https://salesnego.com';
export const SITE_NAME = 'SalesNego';
export const BRAND_LOGO_URL = 'https://salesnego.com/salesnego-logo-1.png';
export const DEFAULT_OG_IMAGE = 'https://salesnego.com/salesnego-logo-1.png';
export const DEFAULT_TWITTER_CARD = 'summary_large_image' as const;
export const DEFAULT_ROBOTS = 'index, follow';

/**
 * Route-Specific SEO Configuration matching exact canonical, titles, descriptions, and schemas
 */
export const SEO_CONFIG: Record<RoutePath, RouteSEOConfig> = {
  '/': {
    title: 'SalesNego | B2B GTM, RevOps & Commercial Execution',
    description:
      'SalesNego helps B2B SaaS, AI and technology companies connect GTM strategy, Revenue Operations, AI-accelerated sales and end-to-end commercial execution from market signal to closed revenue.',
    canonical: `${SITE_URL}/`,
    ogTitle: 'SalesNego | B2B GTM, RevOps & Commercial Execution',
    ogDescription:
      'SalesNego helps B2B SaaS, AI and technology companies connect GTM strategy, Revenue Operations, AI-accelerated sales and end-to-end commercial execution from market signal to closed revenue.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'SalesNego | B2B GTM, RevOps & Commercial Execution',
    twitterDescription:
      'SalesNego helps B2B SaaS, AI and technology companies connect GTM strategy, Revenue Operations, AI-accelerated sales and end-to-end commercial execution from market signal to closed revenue.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'SalesNego',
          url: `${SITE_URL}/`,
          logo: BRAND_LOGO_URL,
          sameAs: ['https://www.linkedin.com/company/salesnego/'],
        },
        {
          '@type': 'WebSite',
          name: 'SalesNego',
          url: `${SITE_URL}/`,
        },
      ],
    },
  },
  '/about': {
    title: 'About SalesNego | Commercial Strategy & Execution',
    description:
      'Learn how SalesNego connects market intelligence, Revenue Operations and full-cycle commercial execution for B2B SaaS, AI and technology companies.',
    canonical: `${SITE_URL}/about`,
    ogTitle: 'About SalesNego | Commercial Strategy & Execution',
    ogDescription:
      'Learn how SalesNego connects market intelligence, Revenue Operations and full-cycle commercial execution for B2B SaaS, AI and technology companies.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/about`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'About SalesNego | Commercial Strategy & Execution',
    twitterDescription:
      'Learn how SalesNego connects market intelligence, Revenue Operations and full-cycle commercial execution for B2B SaaS, AI and technology companies.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
  },
  '/services': {
    title: 'B2B GTM, RevOps & Commercial Execution Services | SalesNego',
    description:
      'Explore SalesNego’s connected commercial services across GTM strategy, market intelligence, RevOps, AI-accelerated sales and end-to-end commercial execution.',
    canonical: `${SITE_URL}/services`,
    ogTitle: 'B2B GTM, RevOps & Commercial Execution Services | SalesNego',
    ogDescription:
      'Explore SalesNego’s connected commercial services across GTM strategy, market intelligence, RevOps, AI-accelerated sales and end-to-end commercial execution.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'B2B GTM, RevOps & Commercial Execution Services | SalesNego',
    twitterDescription:
      'Explore SalesNego’s connected commercial services across GTM strategy, market intelligence, RevOps, AI-accelerated sales and end-to-end commercial execution.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'B2B GTM, RevOps & Commercial Execution Services',
      serviceType: 'B2B Commercial Strategy & Execution',
      provider: {
        '@type': 'Organization',
        name: 'SalesNego',
        url: `${SITE_URL}/`,
      },
      description:
        'Explore SalesNego’s connected commercial services across GTM strategy, market intelligence, RevOps, AI-accelerated sales and end-to-end commercial execution.',
    },
  },
  '/services/gtm-strategy-market-intelligence': {
    title: 'GTM Strategy & Market Intelligence | SalesNego',
    description:
      'SalesNego helps B2B SaaS, AI and technology companies define markets, ICPs, buyers, positioning, account priorities and market-entry direction.',
    canonical: `${SITE_URL}/services/gtm-strategy-market-intelligence`,
    ogTitle: 'GTM Strategy & Market Intelligence | SalesNego',
    ogDescription:
      'SalesNego helps B2B SaaS, AI and technology companies define markets, ICPs, buyers, positioning, account priorities and market-entry direction.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services/gtm-strategy-market-intelligence`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'GTM Strategy & Market Intelligence | SalesNego',
    twitterDescription:
      'SalesNego helps B2B SaaS, AI and technology companies define markets, ICPs, buyers, positioning, account priorities and market-entry direction.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'GTM Strategy & Market Intelligence',
      serviceType: 'Go-To-Market Strategy & Market Intelligence',
      provider: {
        '@type': 'Organization',
        name: 'SalesNego',
        url: `${SITE_URL}/`,
      },
      description:
        'SalesNego helps B2B SaaS, AI and technology companies define markets, ICPs, buyers, positioning, account priorities and market-entry direction.',
    },
  },
  '/services/revops-ai-sales': {
    title: 'RevOps & AI-Accelerated Sales | SalesNego',
    description:
      'SalesNego connects CRM, data, sales intelligence, qualification and AI-enabled workflows to improve commercial visibility and execution.',
    canonical: `${SITE_URL}/services/revops-ai-sales`,
    ogTitle: 'RevOps & AI-Accelerated Sales | SalesNego',
    ogDescription:
      'SalesNego connects CRM, data, sales intelligence, qualification and AI-enabled workflows to improve commercial visibility and execution.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services/revops-ai-sales`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'RevOps & AI-Accelerated Sales | SalesNego',
    twitterDescription:
      'SalesNego connects CRM, data, sales intelligence, qualification and AI-enabled workflows to improve commercial visibility and execution.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'RevOps & AI-Accelerated Sales',
      serviceType: 'Revenue Operations & AI Sales Acceleration',
      provider: {
        '@type': 'Organization',
        name: 'SalesNego',
        url: `${SITE_URL}/`,
      },
      description:
        'SalesNego connects CRM, data, sales intelligence, qualification and AI-enabled workflows to improve commercial visibility and execution.',
    },
  },
  '/services/commercial-execution': {
    title: 'End-to-End Commercial Execution | SalesNego',
    description:
      'SalesNego supports prospect engagement, discovery, qualification, solution alignment, proposals, negotiation, closure and customer growth.',
    canonical: `${SITE_URL}/services/commercial-execution`,
    ogTitle: 'End-to-End Commercial Execution | SalesNego',
    ogDescription:
      'SalesNego supports prospect engagement, discovery, qualification, solution alignment, proposals, negotiation, closure and customer growth.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services/commercial-execution`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'End-to-End Commercial Execution | SalesNego',
    twitterDescription:
      'SalesNego supports prospect engagement, discovery, qualification, solution alignment, proposals, negotiation, closure and customer growth.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'End-to-End Commercial Execution',
      serviceType: 'B2B Commercial Execution & Deal Closing',
      provider: {
        '@type': 'Organization',
        name: 'SalesNego',
        url: `${SITE_URL}/`,
      },
      description:
        'SalesNego supports prospect engagement, discovery, qualification, solution alignment, proposals, negotiation, closure and customer growth.',
    },
  },
  '/case-studies': {
    title: 'Case Studies | SalesNego',
    description:
      'Explore selected SalesNego commercial experience across SaaS, AI and technology sales, market development and full-cycle commercial execution.',
    canonical: `${SITE_URL}/case-studies`,
    ogTitle: 'Case Studies | SalesNego',
    ogDescription:
      'Explore selected SalesNego commercial experience across SaaS, AI and technology sales, market development and full-cycle commercial execution.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/case-studies`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Case Studies | SalesNego',
    twitterDescription:
      'Explore selected SalesNego commercial experience across SaaS, AI and technology sales, market development and full-cycle commercial execution.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
  },
  '/contact': {
    title: 'Contact SalesNego | Discuss Your Growth Priorities',
    description:
      'Discuss your GTM, RevOps, pipeline or commercial execution priorities with SalesNego.',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact SalesNego | Discuss Your Growth Priorities',
    ogDescription:
      'Discuss your GTM, RevOps, pipeline or commercial execution priorities with SalesNego.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/contact`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Contact SalesNego | Discuss Your Growth Priorities',
    twitterDescription:
      'Discuss your GTM, RevOps, pipeline or commercial execution priorities with SalesNego.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
  },
  '/privacy': {
    title: 'Privacy Policy | SalesNego',
    description:
      'Read the SalesNego Privacy Policy and learn how information submitted through the website is handled.',
    canonical: `${SITE_URL}/privacy`,
    ogTitle: 'Privacy Policy | SalesNego',
    ogDescription:
      'Read the SalesNego Privacy Policy and learn how information submitted through the website is handled.',
    ogType: 'website',
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/privacy`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Privacy Policy | SalesNego',
    twitterDescription:
      'Read the SalesNego Privacy Policy and learn how information submitted through the website is handled.',
    twitterImage: DEFAULT_OG_IMAGE,
    robots: DEFAULT_ROBOTS,
  },
};

/**
 * Fallback SEO metadata if a route is not explicitly mapped
 */
export const DEFAULT_SEO_CONFIG: RouteSEOConfig = SEO_CONFIG['/'];

/**
 * Retrieves the full SEO configuration for a given pathname
 */
export function getSEOConfig(path: RoutePath | string): RouteSEOConfig {
  if (path in SEO_CONFIG) {
    return SEO_CONFIG[path as RoutePath];
  }
  return DEFAULT_SEO_CONFIG;
}

/**
 * Helper to update or inject a meta element by name or property, removing any duplicates
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string | undefined) {
  if (typeof document === 'undefined' || !content) return;

  const selector = `meta[${attrName}="${attrValue}"]`;
  const existingElements = document.querySelectorAll(selector);

  if (existingElements.length > 0) {
    // Update the first element and remove any accidental duplicates
    (existingElements[0] as HTMLMetaElement).setAttribute('content', content);
    for (let i = 1; i < existingElements.length; i++) {
      existingElements[i].remove();
    }
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
}

/**
 * Helper to update or inject canonical link, ensuring strictly ONE canonical link in document head
 */
function setCanonicalLink(href: string | undefined) {
  if (typeof document === 'undefined' || !href) return;

  const existingLinks = document.querySelectorAll('link[rel="canonical"]');
  if (existingLinks.length > 0) {
    (existingLinks[0] as HTMLLinkElement).setAttribute('href', href);
    for (let i = 1; i < existingLinks.length; i++) {
      existingLinks[i].remove();
    }
  } else {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', href);
    document.head.appendChild(link);
  }
}

/**
 * Helper to update or inject JSON-LD structured data script
 */
function setStructuredData(data: Record<string, unknown> | undefined) {
  if (typeof document === 'undefined') return;

  const scriptId = 'salesnego-seo-jsonld';
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!data) {
    if (script) {
      script.remove();
    }
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data, null, 2);
}

/**
 * Imperatively updates the document's SEO tags in <head> based on the path and optional overrides
 */
export function updateDocumentSEO(path: RoutePath | string, overrides?: Partial<RouteSEOConfig>): RouteSEOConfig {
  const baseConfig = getSEOConfig(path);
  const finalConfig: RouteSEOConfig = {
    ...baseConfig,
    ...overrides,
  };

  if (typeof document === 'undefined') {
    return finalConfig;
  }

  // 1. Document title
  document.title = finalConfig.title;

  // 2. Standard Meta Tags
  setMetaTag('name', 'description', finalConfig.description);
  setMetaTag('name', 'robots', finalConfig.robots || DEFAULT_ROBOTS);

  // 3. OpenGraph Tags
  setMetaTag('property', 'og:title', finalConfig.ogTitle || finalConfig.title);
  setMetaTag('property', 'og:description', finalConfig.ogDescription || finalConfig.description);
  setMetaTag('property', 'og:type', finalConfig.ogType || 'website');
  setMetaTag('property', 'og:url', finalConfig.ogUrl || finalConfig.canonical || `${SITE_URL}${path}`);
  setMetaTag('property', 'og:site_name', finalConfig.ogSiteName || SITE_NAME);
  setMetaTag('property', 'og:image', finalConfig.ogImage || DEFAULT_OG_IMAGE);

  // 4. Twitter Card Tags
  setMetaTag('name', 'twitter:card', finalConfig.twitterCard || DEFAULT_TWITTER_CARD);
  setMetaTag('name', 'twitter:title', finalConfig.twitterTitle || finalConfig.ogTitle || finalConfig.title);
  setMetaTag(
    'name',
    'twitter:description',
    finalConfig.twitterDescription || finalConfig.ogDescription || finalConfig.description
  );
  setMetaTag('name', 'twitter:image', finalConfig.twitterImage || finalConfig.ogImage || DEFAULT_OG_IMAGE);

  // 5. Canonical Link (Strictly 1 tag)
  setCanonicalLink(finalConfig.canonical || `${SITE_URL}${path === '/' ? '/' : path}`);

  // 6. JSON-LD Structured Data
  setStructuredData(finalConfig.structuredData);

  return finalConfig;
}

/**
 * Custom React Hook for managing page-level SEO dynamically
 */
export function useSEO(path: RoutePath | string, overrides?: Partial<RouteSEOConfig>) {
  useEffect(() => {
    updateDocumentSEO(path, overrides);
  }, [path, overrides]);
}
