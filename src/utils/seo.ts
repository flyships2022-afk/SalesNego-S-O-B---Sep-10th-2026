import { useEffect } from 'react';
import { RoutePath, RouteSEOConfig } from '../types';

/**
 * Base site URL and default brand metadata
 */
export const SITE_URL = 'https://salesnego.com';
export const SITE_NAME = 'SalesNego';
export const DEFAULT_OG_IMAGE = 'https://salesnego.com/favicon-32x32.png';
export const DEFAULT_TWITTER_CARD = 'summary_large_image' as const;

/**
 * Centralized SEO Configuration for all routes in the application
 */
export const SEO_CONFIG: Record<RoutePath, RouteSEOConfig> = {
  '/': {
    title: 'SalesNego | B2B GTM, RevOps & Commercial Execution',
    description:
      'SalesNego helps B2B SaaS, AI and technology companies connect GTM strategy, Revenue Operations, AI-accelerated sales and end-to-end commercial execution from market signal to closed revenue.',
    keywords:
      'B2B GTM strategy, revenue operations, RevOps, AI sales execution, commercial execution, founder-led sales, B2B SaaS sales, pipeline generation, enterprise sales consulting',
    canonical: `${SITE_URL}/`,
    ogTitle: 'SalesNego | B2B GTM, RevOps & Commercial Execution',
    ogDescription:
      'SalesNego helps B2B SaaS, AI and technology companies connect GTM strategy, Revenue Operations, AI-accelerated sales and end-to-end commercial execution from market signal to closed revenue.',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'SalesNego | B2B GTM, RevOps & Commercial Execution',
    twitterDescription:
      'SalesNego connects GTM strategy, RevOps, AI workflows, and commercial execution from market signal to closed revenue.',
    twitterImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'SalesNego',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        'SalesNego connects GTM strategy, Revenue Operations, AI-accelerated sales and end-to-end commercial execution from market signal to closed revenue.',
      sameAs: ['https://www.linkedin.com/company/salesnego'],
      offers: {
        '@type': 'Offer',
        category: 'B2B Commercial Consulting & Execution',
      },
    },
  },
  '/services': {
    title: 'Services | One Commercial System, Three Connected Capabilities | SalesNego',
    description:
      'Explore SalesNego\'s three integrated commercial pillars: GTM Strategy & Market Intelligence, RevOps & AI-Accelerated Sales Workflows, and End-to-End Commercial Execution.',
    keywords:
      'B2B commercial services, GTM execution capabilities, sales operations consulting, AI sales workflows, RevOps architecture, sales enablement, B2B deal closing',
    canonical: `${SITE_URL}/services`,
    ogTitle: 'Services | One Commercial System, Three Connected Capabilities | SalesNego',
    ogDescription:
      'Three connected capabilities under one commercial partnership: GTM Strategy, Revenue Operations + AI, and Direct Founder-Led Execution.',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Commercial Services & Architecture | SalesNego',
    twitterDescription:
      'One Commercial System across three connected capabilities: GTM Strategy, RevOps + AI, and Direct Execution.',
    twitterImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SalesNego Commercial System',
      serviceType: 'B2B Go-To-Market & Revenue Operations',
      provider: {
        '@type': 'Organization',
        name: 'SalesNego',
        url: SITE_URL,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SalesNego Commercial Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'GTM Strategy & Market Intelligence',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Revenue Operations & AI-Accelerated Sales',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'End-to-End Commercial Execution',
            },
          },
        ],
      },
    },
  },
  '/services/gtm-strategy-market-intelligence': {
    title: 'GTM Strategy & Market Intelligence | SalesNego',
    description:
      'Diagnose market dynamics, pinpoint target accounts, define value propositions, and align ideal customer profiles (ICPs) with commercial reality.',
    keywords:
      'B2B GTM strategy, market intelligence, ICP definition, account tiering, competitive positioning, commercial diagnosis, customer segmentation',
    canonical: `${SITE_URL}/services/gtm-strategy-market-intelligence`,
    ogTitle: 'GTM Strategy & Market Intelligence | SalesNego',
    ogDescription:
      'Turn fragmented market assumptions into clear target accounts, validated ICP boundaries, and disciplined commercial direction.',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services/gtm-strategy-market-intelligence`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'GTM Strategy & Market Intelligence | SalesNego',
    twitterDescription:
      'Diagnose market dynamics, pinpoint target accounts, and align ICPs with commercial reality.',
    twitterImage: DEFAULT_OG_IMAGE,
  },
  '/services/revops-ai-sales': {
    title: 'Revenue Operations & AI-Accelerated Sales | SalesNego',
    description:
      'Modern RevOps infrastructure combining CRM architecture, data enrichment, AI research agents, pipeline velocity metrics, and workflow automation.',
    keywords:
      'Revenue Operations, RevOps, AI sales workflows, CRM architecture, pipeline automation, commercial enablement, sales intelligence, CRM hygiene',
    canonical: `${SITE_URL}/services/revops-ai-sales`,
    ogTitle: 'Revenue Operations & AI-Accelerated Sales | SalesNego',
    ogDescription:
      'Build repeatable revenue engines with CRM data governance, AI account intelligence, and automated commercial workflows.',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services/revops-ai-sales`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'RevOps & AI-Accelerated Sales | SalesNego',
    twitterDescription:
      'Modern RevOps infrastructure combining CRM architecture, AI research agents, and workflow automation.',
    twitterImage: DEFAULT_OG_IMAGE,
  },
  '/services/commercial-execution': {
    title: 'End-to-End Commercial Execution | SalesNego',
    description:
      'Founder-level commercial leadership executing outbound discovery, multi-stakeholder navigation, business case justification, and complex negotiation toward closed revenue.',
    keywords:
      'commercial execution, B2B deal closing, complex negotiation, founder-led sales, enterprise discovery, contract closure, pipeline acceleration',
    canonical: `${SITE_URL}/services/commercial-execution`,
    ogTitle: 'End-to-End Commercial Execution | SalesNego',
    ogDescription:
      'From qualification and discovery to business justification and contract negotiation—hands-on deal execution.',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/services/commercial-execution`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'End-to-End Commercial Execution | SalesNego',
    twitterDescription:
      'Hands-on commercial leadership executing discovery, qualification, and high-value negotiation.',
    twitterImage: DEFAULT_OG_IMAGE,
  },
  '/about': {
    title: 'About SalesNego | Commercial Strategy Connected to Execution',
    description:
      'Learn about SalesNego\'s founder-led commercial philosophy, 14+ years of cross-border B2B experience, and commitment to disciplined execution over abstract advisory.',
    keywords:
      'About SalesNego, commercial leadership, B2B sales track record, founder sales execution, RevOps expertise, cross-border commercial execution',
    canonical: `${SITE_URL}/about`,
    ogTitle: 'About SalesNego | Commercial Strategy Connected to Execution',
    ogDescription:
      'Disciplined commercial execution built on 14+ years of cross-border B2B software, tech services, and enterprise negotiation experience.',
    ogType: 'profile',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/about`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'About SalesNego | Commercial Strategy Connected to Execution',
    twitterDescription:
      '14+ years of cross-border B2B commercial leadership connecting market intelligence directly to closed revenue.',
    twitterImage: DEFAULT_OG_IMAGE,
  },
  '/case-studies': {
    title: 'Commercial Track Record & Case Studies | SalesNego',
    description:
      'Explore verified client case studies and anonymized commercial wins across B2B SaaS, HealthTech, AI platforms, and technology professional services.',
    keywords:
      'B2B case studies, commercial results, SaaS sales portfolio, RevOps case studies, pipeline conversion wins, client track record',
    canonical: `${SITE_URL}/case-studies`,
    ogTitle: 'Commercial Track Record & Case Studies | SalesNego',
    ogDescription:
      'Demonstrated commercial impact across B2B SaaS, HealthTech, Tax Tech, and technology services globally.',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/case-studies`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Commercial Track Record & Case Studies | SalesNego',
    twitterDescription:
      'Client case studies and verified commercial outcomes across high-growth technology markets.',
    twitterImage: DEFAULT_OG_IMAGE,
  },
  '/contact': {
    title: 'Contact SalesNego | Discuss Your Growth Priorities',
    description:
      'Schedule a 30-minute commercial alignment session with our founder or send a direct inquiry to discuss your pipeline, GTM strategy, or RevOps requirements.',
    keywords:
      'contact SalesNego, schedule commercial consultation, B2B sales inquiry, GTM strategy discussion, Calendly booking',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact SalesNego | Discuss Your Growth Priorities',
    ogDescription:
      'Connect with SalesNego to discuss your pipeline generation, commercial execution, or revenue operations roadmap.',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/contact`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Contact SalesNego | Let\'s Discuss Your Priorities',
    twitterDescription:
      'Schedule a direct commercial consultation with founder leadership.',
    twitterImage: DEFAULT_OG_IMAGE,
  },
  '/privacy': {
    title: 'Privacy Policy | SalesNego',
    description:
      'Our transparent data handling, client confidentiality, and information privacy practices across our website and commercial engagements.',
    keywords: 'privacy policy, data confidentiality, SalesNego privacy, client data security',
    canonical: `${SITE_URL}/privacy`,
    ogTitle: 'Privacy Policy | SalesNego',
    ogDescription:
      'How SalesNego handles, safeguards, and respects business information and personal data.',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: `${SITE_URL}/privacy`,
    twitterCard: DEFAULT_TWITTER_CARD,
    twitterTitle: 'Privacy Policy | SalesNego',
    twitterDescription: 'Data privacy and confidentiality commitment at SalesNego.',
    twitterImage: DEFAULT_OG_IMAGE,
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
 * Helper to update or inject a meta element by name or property
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string | undefined) {
  if (typeof document === 'undefined' || !content) return;

  let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

/**
 * Helper to update or inject canonical link
 */
function setCanonicalLink(href: string | undefined) {
  if (typeof document === 'undefined' || !href) return;

  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
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
  if (finalConfig.keywords) {
    setMetaTag('name', 'keywords', finalConfig.keywords);
  }

  // 3. OpenGraph Tags
  setMetaTag('property', 'og:title', finalConfig.ogTitle || finalConfig.title);
  setMetaTag('property', 'og:description', finalConfig.ogDescription || finalConfig.description);
  setMetaTag('property', 'og:type', finalConfig.ogType || 'website');
  setMetaTag('property', 'og:url', finalConfig.ogUrl || finalConfig.canonical || `${SITE_URL}${path}`);
  setMetaTag('property', 'og:site_name', SITE_NAME);
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

  // 5. Canonical Link
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
