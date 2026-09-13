export type IndustryCategory = 'All' | 'SaaS' | 'FinTech' | 'AI' | 'Tech Services';

export interface ClientCaseStudy {
  title: string;
  domain: string;
  badge: string;
  summary: string;
  challenge: string;
  intervention: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  image?: string;
  imageAlt?: string;
}

export interface ClientLogoItem {
  id: string;
  name: string;
  image: string;
  darkImage?: string;
  fallbackUrl: string;
  alt: string;
  sizeClass?: string;
  industries: Array<'SaaS' | 'FinTech' | 'AI' | 'Tech Services'>;
  primaryIndustry: 'SaaS' | 'FinTech' | 'AI' | 'Tech Services';
  tagline: string;
  caseStudy: ClientCaseStudy;
}

export const CLIENT_LOGOS_DATA: ClientLogoItem[] = [
  {
    id: 'tc-lims',
    name: 'TC+ LIMS',
    image: '/tclims-logo.png',
    fallbackUrl: '/tclims-logo.png',
    alt: 'TC+ LIMS Logo',
    industries: ['SaaS'],
    primaryIndustry: 'SaaS',
    tagline: 'Laboratory Digitisation & Life Sciences Enterprise SaaS',
    caseStudy: {
      title: 'Laboratory Digitisation & Life Sciences Enterprise SaaS',
      domain: 'Life Sciences & Diagnostic SaaS',
      badge: 'Vertical SaaS',
      summary:
        'Enterprise laboratory digitisation and cloud LIMS workflow optimization across research and diagnostic environments.',
      challenge:
        'Faced lengthy 9-month sales cycles with technical laboratory directors and compliance officers skeptical of cloud migration and validation risks.',
      intervention:
        'Mapped end-to-end laboratory workflows, built value-based compliance positioning, qualified enterprise RFPs, and aligned commercial pricing to diagnostic throughput rather than generic seat licenses.',
      outcomes:
        [
          'Secured enterprise contracts with tier-1 diagnostic research networks',
          'Accelerated technical evaluation cycles using structured discovery frameworks',
          'Expanded account lifetime value via modular workflow deployment milestones',
        ],
      metrics: [
        { label: 'Evaluation Method', value: 'Structured Discovery' },
        { label: 'Commercial Process', value: 'Enterprise Stakeholder Alignment' },
      ],
      image: '/tc-lims-lab-session.jpg',
      imageAlt: 'TC+ LIMS enterprise laboratory digitisation workflow session with scientist and commercial consultant',
    },
  },
  {
    id: 'kidoye',
    name: 'KidOye',
    image: '/kidoye-logo.png',
    fallbackUrl: '/kidoye-logo.png',
    alt: 'KidOye Logo',
    industries: ['AI', 'SaaS'],
    primaryIndustry: 'AI',
    tagline: 'AI-Powered Adaptive Learning & Interactive EdTech',
    caseStudy: {
      title: 'AI-Powered Adaptive Learning & Interactive EdTech',
      domain: 'AI & Interactive Learning Systems',
      badge: 'AI Application',
      summary:
        'Commercial positioning and institutional pilot-to-contract conversion for an AI-accelerated adaptive learning platform.',
      challenge:
        'Initial market positioning over-indexed on technical machine learning algorithms rather than verifiable student engagement outcomes and institutional value for school leaders.',
      intervention:
        'Re-anchored ICP messaging around measurable learning outcomes, structured institutional pilot programs with clear conversion gates, and automated outbound pipeline generation.',
      outcomes:
        [
          'Converted pilot institutions into annual recurring institutional subscriptions',
          'Built repeatable B2B institutional sales playbook for school network executives',
          'Validated product-market fit and outbound pipeline following revised GTM launch',
        ],
      metrics: [
        { label: 'Commercial Motion', value: 'Pilot-to-Contract' },
        { label: 'ICP Positioning', value: 'Outcome-Led' },
      ],
      image: '/ai-scoping-custom-software.jpg',
      imageAlt: 'AI adaptive learning platform technology architecture and educational product scoping session',
    },
  },
  {
    id: 'infocodec',
    name: 'Infocodec',
    image: '/infocodec-logo.png',
    fallbackUrl: '/infocodec-logo.png',
    alt: 'Infocodec Logo',
    industries: ['AI', 'Tech Services'],
    primaryIndustry: 'AI',
    tagline: 'Deep Tech, Enterprise AI Scoping & Data Engineering',
    caseStudy: {
      title: 'Deep Tech, Enterprise AI Scoping & Machine Learning Engineering',
      domain: 'AI & Data Engineering',
      badge: 'Deep Tech & AI',
      summary:
        'Translating complex bespoke AI and data engineering capabilities into packaged commercial solutions for international enterprise buyers.',
      challenge:
        'Engineering-led founders struggled to translate complex machine learning models into qualified commercial enterprise contracts, resulting in heavy unpaid pre-sales technical overhead.',
      intervention:
        'Designed packaged AI discovery workshops, established statement-of-work (SOW) qualification gates, and targeted enterprise CTOs with outcome-led value propositions.',
      outcomes:
        [
          'Secured cross-border enterprise AI development mandates',
          'Reduced unbillable pre-sales engineering hours via structured discovery qualification',
          'Expanded outbound pipeline across North American and European enterprise accounts',
        ],
      metrics: [
        { label: 'Target Geography', value: 'North America & Europe' },
        { label: 'Commercial Scope', value: 'Bespoke AI Architecture' },
      ],
      image: '/ai-scoping-custom-software.jpg',
      imageAlt: 'AI machine learning architecture and technical scoping session',
    },
  },
  {
    id: 'maple-tax',
    name: 'Maple Tax',
    image: '/mapletax-logo.png',
    fallbackUrl: '/mapletax-logo.png',
    alt: 'Maple Tax Logo',
    sizeClass: 'max-h-12 max-w-[145px]',
    industries: ['FinTech', 'SaaS'],
    primaryIndustry: 'FinTech',
    tagline: 'FinTech Tax Compliance & Cloud Workflow Automation',
    caseStudy: {
      title: 'FinTech Compliance & Cloud Tax Workflow Automation',
      domain: 'FinTech & Automated Compliance SaaS',
      badge: 'FinTech SaaS',
      summary:
        'Accelerating B2B acquisition of high-value corporate tax accounting practices and mid-market enterprises through disciplined commercial qualification.',
      challenge:
        'High customer acquisition costs and fragmented inbound leads requiring heavy manual follow-up without systematic pipeline qualification or deal scoring.',
      intervention:
        'Implemented automated RevOps lead scoring, restructured pricing tiers for multi-entity filers, and targeted mid-market accounting firms with outbound commercial campaigns.',
      outcomes:
        [
          'Strengthened qualified pipeline of corporate tax practices',
          'Automated deal progression tracking through integrated CRM and revenue intelligence',
          'Enhanced average contract value (ACV) through tiered enterprise compliance features',
        ],
      metrics: [
        { label: 'Market Segment', value: 'Corporate Tax Practices' },
        { label: 'RevOps Architecture', value: 'Automated Lead Scoring' },
      ],
      image: '/strategic-commercial-advisory.jpg',
      imageAlt: 'FinTech tax compliance and automated cloud workflow advisory session',
    },
  },
  {
    id: 'metafic',
    name: 'Metafic',
    image: '/metafic-logo-clean.png',
    fallbackUrl: '/metafic-logo-clean.png',
    alt: 'Metafic Logo',
    industries: ['SaaS', 'Tech Services'],
    primaryIndustry: 'SaaS',
    tagline: 'Enterprise Software Architecture & Custom Product Engineering',
    caseStudy: {
      title: 'Enterprise Software Architecture & Custom Product Engineering',
      domain: 'Enterprise Technology & Services',
      badge: 'Enterprise Services',
      summary:
        'Elevating boutique product engineering into high-ticket enterprise contracts and cross-border commercial technology partnerships.',
      challenge:
        'Price pressure from commodity development providers and lack of consultative technical-commercial positioning at the executive decision-maker level.',
      intervention:
        'Shifted positioning to executive architectural advisory, instituted rigorous RFP qualification criteria, and introduced risk-mitigated phased delivery roadmaps.',
      outcomes:
        [
          'Closed enterprise technology transformation contracts',
          'Established predictable pipeline of recurring engineering engagements',
          'Differentiated service delivery through senior consultative commercial alignment',
        ],
      metrics: [
        { label: 'Commercial Motion', value: 'Executive Advisory' },
        { label: 'RFP Discipline', value: 'Rigorous SOW Gates' },
      ],
      image: '/enterprise-it-services.jpg',
      imageAlt: 'Enterprise IT architecture and technology services strategy session with senior executives',
    },
  },
  {
    id: 'leadnics',
    name: 'Leadnics',
    image: '/leadnics-light.png',
    darkImage: '/leadnics-dark.png',
    fallbackUrl: '/leadnics-logo.png',
    alt: 'Leadnics Logo',
    industries: ['SaaS', 'AI'],
    primaryIndustry: 'SaaS',
    tagline: 'B2B Sales Intelligence, AI Prospecting & RevOps Automation',
    caseStudy: {
      title: 'B2B Sales Intelligence, AI Prospecting & RevOps Automation',
      domain: 'B2B SaaS & Revenue Intelligence',
      badge: 'Sales Tech & AI',
      summary:
        'Scaling a modern B2B sales intelligence platform by aligning ICP definition with automated multi-channel outbound execution.',
      challenge:
        'Broad product appeal resulting in unfocused sales efforts across disparate company tiers with inconsistent customer churn rates.',
      intervention:
        'Narrowed ICP to high-intent B2B tech scale-ups, built automated pipeline orchestration workflows, and implemented evidence-led sales demonstrations.',
      outcomes:
        [
          'Accelerated outbound demo-to-opportunity progression with qualified accounts',
          'Reduced customer acquisition cycle times by introducing interactive product proof points',
          'Streamlined sales tech stack integration for rapid customer onboarding',
        ],
      metrics: [
        { label: 'Target ICP', value: 'B2B Tech Scale-Ups' },
        { label: 'Sales Motion', value: 'Evidence-Led Demos' },
      ],
      image: '/revops-ai-sales.jpg',
      imageAlt: 'RevOps sales intelligence and automated pipeline orchestration dashboard session',
    },
  },
  {
    id: 'aarav-nexus',
    name: 'Aarav Nexus',
    image: '/aarav-nexus-light.png',
    darkImage: '/aarav-nexus-dark.png',
    fallbackUrl: '/aarav-nexus-logo.png',
    alt: 'Aarav Nexus Logo',
    sizeClass: 'max-h-12 max-w-[145px]',
    industries: ['FinTech', 'Tech Services'],
    primaryIndustry: 'FinTech',
    tagline: 'Enterprise Cloud Infrastructure & Digital Banking Platforms',
    caseStudy: {
      title: 'Enterprise Cloud Infrastructure & Digital Banking Platforms',
      domain: 'FinTech Infrastructure & Cloud Platforms',
      badge: 'Cloud & FinTech',
      summary:
        'Positioning enterprise-grade digital infrastructure solutions for regulated financial entities and fintech innovators.',
      challenge:
        'Strict financial regulatory requirements and conservative banking procurement committees slowing commercial momentum and pilot approvals.',
      intervention:
        'Crafted compliance-first commercial collateral, engaged C-level risk and technology stakeholders, and structured phased proof-of-value implementations.',
      outcomes:
        [
          'Navigated multi-stakeholder enterprise procurement to secure production banking rollouts',
          'Established recurring strategic advisory retainer alongside implementation contracts',
          'Expanded referenceable accounts across regional financial technology ecosystems',
        ],
      metrics: [
        { label: 'Procurement Motion', value: 'Enterprise Procurement Navigation' },
        { label: 'Governance Support', value: 'Security & Risk Review Support' },
      ],
      image: '/strategic-commercial-advisory.jpg',
      imageAlt: 'Enterprise cloud infrastructure and digital banking commercial advisory meeting',
    },
  },
];

export const INDUSTRY_CATEGORIES: { id: IndustryCategory; label: string; count: number }[] = [
  { id: 'All', label: 'All Work', count: CLIENT_LOGOS_DATA.length },
  {
    id: 'SaaS',
    label: 'SaaS',
    count: CLIENT_LOGOS_DATA.filter((item) => item.industries.includes('SaaS')).length,
  },
  {
    id: 'FinTech',
    label: 'FinTech',
    count: CLIENT_LOGOS_DATA.filter((item) => item.industries.includes('FinTech')).length,
  },
  {
    id: 'AI',
    label: 'AI',
    count: CLIENT_LOGOS_DATA.filter((item) => item.industries.includes('AI')).length,
  },
  {
    id: 'Tech Services',
    label: 'Tech Services',
    count: CLIENT_LOGOS_DATA.filter((item) => item.industries.includes('Tech Services')).length,
  },
];
