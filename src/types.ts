export type RoutePath =
  | '/'
  | '/about'
  | '/services'
  | '/services/gtm-strategy-market-intelligence'
  | '/services/revops-ai-sales'
  | '/services/commercial-execution'
  | '/case-studies'
  | '/contact'
  | '/privacy';

export interface RouteSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogUrl?: string;
  ogSiteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  structuredData?: Record<string, unknown>;
}

export interface JourneyStage {
  id: string;
  name: string;
  description: string;
}

export interface ClientTrackRecord {
  name: string;
  category: string;
  description: string;
}

export interface AnonymizedDeal {
  id: string;
  category: string;
  title: string;
  scope: string;
  commercialFocus: string;
}
