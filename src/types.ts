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
