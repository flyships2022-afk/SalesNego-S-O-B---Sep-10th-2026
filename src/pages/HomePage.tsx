import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  UserCheck,
  Target,
  Cpu,
  Mail,
  GraduationCap,
  Search,
  Handshake,
  Sparkles,
  Clock,
  BarChart3,
  Layers,
  Send,
  Building2,
  Calendar,
  Play,
  Pause,
  ChevronLeft,
  FlaskConical,
  Server,
  Brain,
  Compass,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { ExperienceMarqueeSlider } from '../components/ExperienceMarqueeSlider';
import { ProcessCircleMotion } from '../components/ProcessCircleMotion';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { ScrollReveal, StaggerGroup, StaggerItem } from '../components/ScrollReveal';
import { LogoWallSection } from '../components/LogoWallSection';
import { LazyImage } from '../components/LazyImage';
import { SEO } from '../components/SEO';
import { scrollToSection } from '../utils/scroll';

export const HomePage: React.FC = () => {
  const { navigate, openCalendly } = useNavigation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const shouldReduceMotion = useReducedMotion();

  // Metafic-style dynamic typing phrases
  const typingPhrases = [
    'From Market Signal to Closed Revenue',
    'GTM Strategy & Market Intelligence',
    'RevOps & AI-Accelerated Sales',
    'End-to-End Commercial Execution',
    'Founder-Led Commercial Ownership',
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typing phrases for "How We Are Different" section
  const diffTypingPhrases = [
    'Full-Cycle Commercial Execution',
    'Senior Commercial Ownership',
    'Discovery, Dealcraft & Closure',
    'Continuous Commercial Partnership',
  ];
  const [diffPhraseIndex, setDiffPhraseIndex] = useState(0);
  const [diffDisplayedText, setDiffDisplayedText] = useState('');
  const [diffIsDeleting, setDiffIsDeleting] = useState(false);

  // Quick inquiry form state
  const [hoveredServiceCardId, setHoveredServiceCardId] = useState<string | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCategory, setInquiryCategory] = useState('B2B SaaS / Tech');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [inquiryErrorMessage, setInquiryErrorMessage] = useState('');

  // Typing effect loop
  useEffect(() => {
    const fullPhrase = typingPhrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < fullPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullPhrase.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullPhrase.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  // Typing effect loop for Differentiator pill
  useEffect(() => {
    const fullDiffPhrase = diffTypingPhrases[diffPhraseIndex];
    let diffTimer: NodeJS.Timeout;

    if (!diffIsDeleting) {
      if (diffDisplayedText.length < fullDiffPhrase.length) {
        diffTimer = setTimeout(() => {
          setDiffDisplayedText(fullDiffPhrase.slice(0, diffDisplayedText.length + 1));
        }, 65);
      } else {
        diffTimer = setTimeout(() => {
          setDiffIsDeleting(true);
        }, 2400);
      }
    } else {
      if (diffDisplayedText.length > 0) {
        diffTimer = setTimeout(() => {
          setDiffDisplayedText(fullDiffPhrase.slice(0, diffDisplayedText.length - 1));
        }, 35);
      } else {
        setDiffIsDeleting(false);
        setDiffPhraseIndex((prev) => (prev + 1) % diffTypingPhrases.length);
      }
    }

    return () => clearTimeout(diffTimer);
  }, [diffDisplayedText, diffIsDeleting, diffPhraseIndex]);

  // Motion animation for 5-stage commercial progression pipeline (Right Market -> Closed Deals)
  const [activePipelineIndex, setActivePipelineIndex] = useState(0);
  const pipelineStages = [
    'Right Market',
    'Right Accounts',
    'Right Dialogues',
    'Qualified Opps',
    'Closed Deals',
  ];

  useEffect(() => {
    const pipelineTimer = setInterval(() => {
      setActivePipelineIndex((prev) => (prev + 1) % 5);
    }, 3200);

    return () => clearInterval(pipelineTimer);
  }, []);

  const coreServices = [
    {
      id: 'gtm',
      title: 'GTM Strategy & Market Intelligence',
      subtitle: 'Know where to compete, who to target and why they should care.',
      badge: 'Strategy',
      image: '/gtm-strategy-session.jpg',
      imageAlt: 'B2B Go-To-Market strategy session with senior commercial strategist and business leader collaborating on market intelligence frameworks',
      imageTag: 'GTM Strategy & ICP Priority',
      path: '/services/gtm-strategy-market-intelligence',
      description:
        'We help define markets, ICPs, buyers, positioning, account priorities and commercial hypotheses before execution begins.',
      keyAreas: [
        'Market Intelligence',
        'ICP & Buyer Definition',
        'Competitive Intelligence',
        'Positioning & Messaging',
        'Account Prioritisation',
        'Market Entry',
      ],
    },
    {
      id: 'revops',
      title: 'RevOps & AI-Accelerated Sales',
      subtitle: 'Build the commercial infrastructure required for disciplined execution.',
      badge: 'Infrastructure & AI',
      image: '/revops-ai-sales-dashboard.jpg',
      imageAlt: 'Modern high-tech B2B revenue operations dashboard showing pipeline visualization, CRM workflows, automated triggers, and AI qualification metrics',
      imageTag: 'RevOps & AI Workflows',
      path: '/services/revops-ai-sales',
      description:
        'We connect CRM, data, qualification, workflows and AI-supported automation so commercial teams can execute with better intelligence and less manual workload.',
      keyAreas: [
        'CRM & Pipeline Architecture',
        'Qualification',
        'Data & Enrichment',
        'AI Research Workflows',
        'Trigger Monitoring',
        'Sales Automation',
        'Pipeline Intelligence',
      ],
    },
    {
      id: 'execution',
      title: 'End-to-End Commercial Execution',
      subtitle: 'Take qualified opportunities beyond the meeting and through the buying process.',
      badge: 'Execution',
      image: '/commercial-execution-deal-closing.jpg',
      imageAlt: 'Enterprise B2B commercial review and deal-closing session in a modern glass conference room with senior operator and executive client team',
      imageTag: 'Deal Execution & Close',
      path: '/services/commercial-execution',
      description:
        'SalesNego supports the commercial journey from account engagement through discovery, qualification, solution alignment, proposals, negotiation, closure and account growth.',
      keyAreas: [
        'Account Engagement',
        'Discovery',
        'Qualification',
        'Solution Alignment',
        'Proposals',
        'Negotiation',
        'Closure',
        'Customer Growth',
      ],
    },
  ];

  const whySalesnegoPillars = [
    {
      number: '01',
      title: 'Senior Commercial Ownership',
      description: 'Founder-led commercial execution with senior judgment, avoiding the handoff friction and qualification gaps common in conventional outsourced models.',
      icon: UserCheck,
    },
    {
      number: '02',
      title: 'Evidence Over Volume',
      description: 'Signals identify where to look. Discovery confirms whether there is a real buying conversation.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Full Commercial Loop',
      description: 'Connecting market positioning, account research, qualification, deal progression and expansion.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'AI + Human Judgment',
      description: 'AI accelerates research, signals and workflows. Experienced commercial operators drive the conversations.',
      icon: Cpu,
    },
  ];

  const commercialJourneyStages = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Market, ICP, buyers, value proposition and commercial hypothesis.',
    },
    {
      step: '02',
      title: 'Position',
      desc: 'Messaging, differentiation, commercial narrative and objection handling.',
    },
    {
      step: '03',
      title: 'Prioritise',
      desc: 'Account lists, intelligence, signals and priority scoring.',
    },
    {
      step: '04',
      title: 'Engage',
      desc: 'Outreach, relevant angles, conversation initiation and response handling.',
    },
    {
      step: '05',
      title: 'Diagnose',
      desc: 'Discovery, pain verification, qualification, buying criteria and stakeholder mapping.',
    },
    {
      step: '06',
      title: 'Qualify',
      desc: 'Opportunity validation, budget, decision process, timeline and fit.',
    },
    {
      step: '07',
      title: 'Convert',
      desc: 'Solution presentation, commercial proposal, negotiation and signature.',
    },
    {
      step: '08',
      title: 'Expand',
      desc: 'Onboarding alignment, customer success handover, retention and expansion potential.',
    },
  ];

  const trackRecordDomains = [
    {
      domain: 'Laboratory Digitisation & Life Sciences SaaS',
      sector: 'Life Sciences & Biotech',
      desc: 'SaaS and laboratory digitisation experience spanning discovery, workflow mapping, solution positioning, implementation coordination, user adoption and multi-year account growth.',
      highlights: ['Enterprise LIMS', 'Workflow Digitisation', 'Multi-Year Retention'],
      icon: FlaskConical,
      image: '/tc-lims-lab-session.jpg',
      imageAlt: 'Laboratory digitisation and TC+ LIMS enterprise workflow session with scientist and commercial consultant',
      imageTag: 'TC+ LIMS · Enterprise Workflow',
    },
    {
      domain: 'Enterprise Technology & IT Services Platform',
      sector: 'Enterprise Platforms & IT',
      desc: 'Enterprise technology and IT-services selling involving complex technical-commercial alignment, RFP qualification, statement-of-work scoping, proposal negotiation and regional expansion.',
      highlights: ['Complex RFP Alignment', 'SOW Scoping', 'Regional Expansion'],
      icon: Server,
      image: '/enterprise-it-services.jpg',
      imageAlt: 'Enterprise IT architecture and technology services strategy session with senior consultant and executives',
      imageTag: 'Enterprise Platforms · System Architecture',
    },
    {
      domain: 'AI Scoping & Custom Software Development',
      sector: 'Artificial Intelligence & Custom Dev',
      desc: 'International business development across artificial intelligence, enterprise SaaS, digital products and custom software, including technical scoping, proposals, negotiation and closure.',
      highlights: ['AI Scoping', 'Multi-Market Proposals', 'Deal Closure'],
      icon: Brain,
      image: '/ai-scoping-custom-software.jpg',
      imageAlt: 'AI scoping and custom software development technical session with machine learning neural network architecture and API diagrams',
      imageTag: 'AI & Custom Dev · Technical Scoping',
    },
    {
      domain: 'Strategic Commercial Advisory & Expansion',
      sector: 'Strategic Advisory & Scale',
      desc: 'Commercial development and advisory engagements focused on authoritative commercial execution, cross-border market entry and disciplined pipeline qualification.',
      highlights: ['Executive Advisory', 'Cross-Border Entry', 'Pipeline Rigor'],
      icon: Compass,
      image: '/strategic-commercial-advisory.jpg',
      imageAlt: 'Strategic commercial advisory and cross-border expansion meeting with enterprise executives overlooking city skyline',
      imageTag: 'Executive Advisory · Global Market Entry',
    },
  ];

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim()) return;
    setInquiryStatus('submitting');
    setInquiryErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xqpkpera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: inquiryName,
          email: inquiryEmail,
          company: inquiryCompany,
          phone: inquiryPhone,
          category: inquiryCategory,
          message: inquiryMessage,
          _subject: `SalesNego Commercial Proposal Inquiry: ${inquiryCompany ? inquiryCompany + ' (' + inquiryName + ')' : inquiryName}`,
        }),
      });

      if (response.ok) {
        setInquiryStatus('success');
      } else {
        const data = await response.json();
        setInquiryErrorMessage(data?.error || 'Unable to submit the inquiry. Please try again or email us at sales@salesnego.com.');
        setInquiryStatus('error');
      }
    } catch {
      setInquiryErrorMessage('Network error occurred. Please email us directly at sales@salesnego.com.');
      setInquiryStatus('error');
    }
  };

  const handleResetInquiry = () => {
    setInquiryName('');
    setInquiryEmail('');
    setInquiryCompany('');
    setInquiryPhone('');
    setInquiryCategory('B2B SaaS / Tech');
    setInquiryMessage('');
    setInquiryStatus('idle');
    setInquiryErrorMessage('');
  };

  return (
    <div className="relative w-full flex flex-col font-sans">
      <SEO path="/" />
      {/* 1. METAFIC FRAMED HERO CANVAS */}
      <section
        id="hero-section"
        aria-label="Hero Introduction"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section relative w-full bg-[#F5F2EC] dark:bg-[#07080A] p-2.5 sm:p-3.5 lg:p-4"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#FFFDFB] via-[#FAF4ED] to-[#F2E7D8] text-[#161519] dark:from-[#150D08] dark:via-[#0D0B0F] dark:to-[#060608] dark:text-white p-3.5 sm:p-6 md:p-10 lg:p-12 min-h-0 lg:min-h-[560px] flex flex-col justify-between border border-[#E5DDD0] dark:border-[#2A1D16] shadow-xl transition-colors duration-200">
            {/* Subtle Ambient Background Mesh - Darker Warm Orange & Obsidian Black Undertones */}
            <div className="absolute -top-12 -right-12 w-[520px] h-[520px] bg-gradient-to-bl from-[#FF6004]/18 via-[#C84500]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-[460px] h-[460px] bg-gradient-to-tr from-[#FF6004]/10 via-[#2563EB]/08 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/3 w-[360px] h-[360px] bg-[#FF6004]/05 dark:bg-[#FF6004]/08 rounded-full blur-[110px] pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px]" />

            {/* Top Eyebrow Bar - Balanced optical alignment across mobile, tablet, and desktop */}
            <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap pb-2 sm:pb-3 sm:pl-0 md:pl-0 lg:pl-6 xl:pl-8">
              {/* 1. Eyebrow Tag */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-100 border border-black/10 dark:border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF6004] animate-pulse" />
                <span>B2B GTM, RevOps &amp; Commercial Execution</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-[#FF6004]" />
                <span>14+ Years B2B Commercial Ownership</span>
              </div>
            </div>

            {/* Main Content Area: Left Headline & Narrative + Right Process Circle Motion Block */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center py-2 sm:py-4 my-auto w-full">
              {/* Left Column: Headline, Focus Pill, Description, CTAs (lg:col-span-7) */}
              <div className="lg:col-span-7 xl:col-span-7 max-w-2xl sm:pl-0 md:pl-0 lg:pl-6 xl:pl-8">
                {/* 2. Main H1 Title with Fluid Clamp Typography */}
                <h1
                  style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)' }}
                  className="font-lexend font-bold leading-tight mb-3 text-[#161519] dark:text-white fluid-hero-heading"
                >
                  From Market Signal <br className="hidden sm:inline" /> to Closed Revenue.
                </h1>

                {/* 3. Commercial Focus Pill & Copy */}
                <div className="mb-4">
                  <div className="h-[34px] min-h-[34px] max-h-[34px] flex items-center flex-nowrap gap-1.5 sm:gap-2.5 mb-2.5 overflow-hidden max-w-full">
                    <span className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400 shrink-0 whitespace-nowrap">
                      Commercial Focus:
                    </span>
                    <span className="inline-flex items-center rounded-[10px] bg-[#2563EB] px-2.5 sm:px-3.5 text-white font-medium text-[11px] xs:text-xs sm:text-sm md:text-base tracking-tight sm:tracking-wide shadow-sm h-[30px] sm:h-[34px] overflow-hidden whitespace-nowrap min-w-0 max-w-full shrink">
                      <span className="truncate min-w-0">{displayedText || '\u00A0'}</span>
                      <span className="ml-1 inline-block w-[2px] h-[0.9em] bg-white align-middle animate-mf-caret shrink-0" />
                    </span>
                  </div>

                  <div className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed max-w-xl">
                    <p>
                      SalesNego helps B2B SaaS, AI and technology companies turn market intelligence into qualified opportunities, customers and account growth.
                    </p>
                    <p>
                      We connect strategy, revenue operations, AI-accelerated workflows and founder-led sales execution under one commercial partnership.
                    </p>
                  </div>
                </div>

                {/* 4. Action Buttons */}
                <div className="flex flex-wrap gap-3.5 sm:gap-4 mb-4">
                  <button
                    type="button"
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold text-white bg-[#FF6004] hover:bg-[#E05300] active:scale-98 transition-all shadow-lg shadow-[#FF6004]/25 hover:shadow-[#FF6004]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] shrink-0 cursor-pointer"
                  >
                    <span>Discuss Your Growth Priorities</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const scrolled = scrollToSection('services-section', { smooth: true });
                      if (!scrolled) navigate('/services');
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium text-[#161519] dark:text-white bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/20 backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] shrink-0 cursor-pointer"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 5. Trust Line (Now firmly above the fold) */}
                <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 font-medium">
                  Founder-led commercial execution across North America, UAE, Europe, India and Australia.
                </p>
              </div>

              {/* Right Column: Process Circle Motion Block (lg:col-span-5) */}
              <div
                style={{ maxWidth: '100%', height: 'auto' }}
                className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end w-full max-w-full overflow-hidden h-auto pr-0 sm:pr-0 lg:pr-2 my-2 sm:my-4 lg:my-0"
              >
                <ProcessCircleMotion />
              </div>
            </div>

            {/* Bottom Hero Trust Metrics Bar with Staggered Scroll Entrance */}
            <div className="relative z-10 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-black/10 dark:border-white/10 w-full">
              <StaggerGroup
                staggerDelay={0.08}
                className="max-w-2xl lg:max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center text-center"
              >
                <StaggerItem distance={16}>
                  <div className="px-2 sm:px-3">
                    <span className="block font-lexend text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">14+</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">Years B2B Commercial Leadership</span>
                  </div>
                </StaggerItem>
                <StaggerItem distance={16}>
                  <div className="px-2 sm:px-3 sm:border-x sm:border-black/10 dark:sm:border-white/10">
                    <span className="block font-lexend text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">5</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">Key Markets — North America | UAE | Europe | India | Australia</span>
                  </div>
                </StaggerItem>
                <StaggerItem distance={16}>
                  <div className="px-2 sm:px-3">
                    <span className="block font-lexend text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">Full-Cycle</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 block">Commercial Execution</span>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNERS, NOT JUST CLIENTS & CASE STUDY DISCOVERY (Industry Filtered Logo Wall) */}
      <LogoWallSection />

      {/* 3. THE COMMERCIAL GAP & THE CHALLENGE */}
      <section
        id="commercial-gap-section"
        aria-label="The Commercial Gap"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <ScrollReveal direction="up" distance={28} duration={0.8} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Context & 5-Stage Commercial Progression */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-3">
                  The Challenge
                </span>
                <h2 className="font-lexend text-[28px] sm:text-[36px] lg:text-[42px] font-normal leading-[1.18] text-[#161519] dark:text-white mb-4">
                  More Sales Activity Does Not Automatically Create Revenue.
                </h2>

                <div className="space-y-3 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed">
                  <p>
                    Companies often invest heavily in targeting, bloated tool stacks, aggressive automation, and frantic outbound activity—only to find that opportunities stall and fail to convert into closed revenue.
                  </p>
                  <p className="font-medium text-[#161519] dark:text-white">
                    SalesNego bridges the commercial gap: connecting deep market intelligence, executive-level deal positioning, and disciplined pipeline qualification into closed revenue.
                  </p>
                </div>
              </div>

              {/* 5-Stage Commercial Progression Pipeline with Active Blue Motion Highlighter */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    The Commercial Progression System
                  </p>
                  <span className="text-[11px] font-mono text-[#2563EB] dark:text-[#3B82F6] font-medium hidden sm:inline-block">
                    Stage 0{activePipelineIndex + 1} / 05 Active
                  </span>
                </div>
                
                {/* Desktop & Tablet Progression Flow */}
                <div className="hidden sm:flex items-center justify-between gap-1.5 text-xs font-bold text-[#161519] dark:text-white">
                  {pipelineStages.map((stage, idx) => {
                    const isActive = activePipelineIndex === idx;
                    return (
                      <React.Fragment key={stage}>
                        <button
                          type="button"
                          onClick={() => setActivePipelineIndex(idx)}
                          className={`px-2.5 py-1.5 rounded-lg text-center text-[11px] lg:text-xs font-bold transition-colors duration-300 border cursor-pointer ${
                            isActive
                              ? 'bg-[#2563EB] dark:bg-[#3B82F6] text-white border-[#2563EB] dark:border-[#3B82F6] shadow-xs'
                              : 'bg-[#F6F5F2] dark:bg-white/5 border-[#E5E3DC] dark:border-white/10 text-[#161519] dark:text-zinc-200 hover:border-[#2563EB]/40'
                          }`}
                        >
                          {stage}
                        </button>
                        {idx < pipelineStages.length - 1 && (
                          <span
                            className={`font-black text-xs shrink-0 transition-colors duration-300 ${
                              activePipelineIndex === idx
                                ? 'text-[#2563EB] dark:text-[#3B82F6]'
                                : 'text-[#FF6004]'
                            }`}
                          >
                            &rarr;
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Mobile Compact Interactive Flow */}
                <div className="grid grid-cols-1 sm:hidden gap-1.5 text-xs font-bold text-[#161519] dark:text-white">
                  {pipelineStages.map((stage, idx) => {
                    const isActive = activePipelineIndex === idx;
                    return (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setActivePipelineIndex(idx)}
                        className={`py-2 px-3 rounded-lg text-center border flex items-center justify-between transition-colors duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-[#2563EB] dark:bg-[#3B82F6] text-white border-[#2563EB] dark:border-[#3B82F6] shadow-xs'
                            : 'bg-[#F6F5F2] dark:bg-white/5 border-[#E5E3DC] dark:border-white/10 text-[#161519] dark:text-zinc-300'
                        }`}
                      >
                        <span className="text-[10px] opacity-75 font-mono">Stage 0{idx + 1}</span>
                        <span className="text-xs font-bold">{stage}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-white opacity-90" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Placement (Whiteboard Diagnostic Session) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#1C1B20] shadow-md group">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                  <LazyImage
                    src="/the-challenge-whiteboard.jpg"
                    alt="Whiteboard strategy diagnostic session illustrating why high sales activity creates stalled opportunities instead of closed revenue"
                    referrerPolicy="no-referrer"
                    containerClassName="w-full h-full absolute inset-0"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Ambient Badge Overlay */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/75 backdrop-blur-xs border border-white/15 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] animate-pulse" />
                    <span>The Activity vs. Revenue Trap</span>
                  </div>
                </div>

                {/* Content Box (Clean dedicated card below image - zero overlap on diagram) */}
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#1C1B20] border-t border-[#E5E3DC] dark:border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-bold text-[#FF6004] dark:text-[#FE9E30]">Pipeline Bottleneck Analysis</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">Diagnostic</span>
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-[#555459] dark:text-zinc-300 leading-snug">
                    High outreach volume, frantic automation, and bloated tech stacks stall at the deal table without commercial dealcraft and strategic qualification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. SERVICES */}
      <section
        id="services-section"
        aria-label="Core Services"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
              What We Do
            </span>
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
              Three Capabilities. One Commercial System.
            </h2>
            <div className="mt-3 space-y-1 text-base text-[#555459] dark:text-zinc-400 leading-relaxed">
              <p>
                SalesNego does not treat strategy, revenue operations and sales execution as separate projects.
              </p>
              <p className="font-semibold text-[#2563EB] dark:text-[#3B82F6]">
                We connect all three under one commercial partnership.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Services Grid: 1 column on mobile, 3 columns on tablet portrait, landscape & desktop */}
          <div onMouseLeave={() => setHoveredServiceCardId(null)}>
            <StaggerGroup
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 py-2 items-start"
            >
              {coreServices.map((svc) => {
              const isCardHovered = hoveredServiceCardId === svc.id;

              return (
                <StaggerItem key={svc.id} distance={24} className="w-full">
                  <div
                    onMouseEnter={() => setHoveredServiceCardId(svc.id)}
                    onMouseLeave={() => {
                      setHoveredServiceCardId((curr) => (curr === svc.id ? null : curr));
                    }}
                    className={`group relative p-5 sm:p-6 lg:p-7 xl:p-8 rounded-[20px] border transition-all duration-300 ease-out flex flex-col justify-between will-change-transform ${
                      isCardHovered
                        ? 'bg-[#161519] dark:bg-black border-[#FF6004] dark:border-[#FF6004] scale-102 lg:scale-105 -translate-y-1 shadow-2xl shadow-black/20 dark:shadow-black/70 z-10'
                        : 'bg-[#F6F5F2] dark:bg-[#1C1B20] border-[#E5E3DC] dark:border-white/10 shadow-xs hover:border-[#FF6004]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-300 ${
                            isCardHovered
                              ? 'bg-[#FF6004] text-white'
                              : 'bg-[#FF6004]/10 text-[#FF6004] dark:bg-white/10 dark:text-zinc-200'
                          }`}
                        >
                          {svc.badge}
                        </span>
                        <button
                          type="button"
                          onClick={() => navigate(svc.path as any)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs hover:scale-110 active:scale-95 ${
                            isCardHovered
                              ? 'bg-[#FF6004] text-white'
                              : 'bg-white dark:bg-white/10 text-[#161519] dark:text-white hover:bg-[#FF6004] hover:text-white'
                          }`}
                          aria-label={`View detailed service page for ${svc.title}`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>

                      {svc.image && (
                        <div className="mb-5">
                          <div className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden border bg-zinc-900 shadow-xs group/img transition-colors duration-300 ${
                            isCardHovered ? 'border-white/20' : 'border-[#E5E3DC] dark:border-white/10'
                          }`}>
                            <LazyImage
                              src={svc.image}
                              alt={svc.imageAlt || svc.title}
                              referrerPolicy="no-referrer"
                              containerClassName="w-full h-full absolute inset-0"
                              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          {svc.imageTag && (
                            <div className={`mt-2.5 flex items-center justify-between px-3 py-1.5 rounded-lg border text-[11px] font-medium transition-colors duration-300 ${
                              isCardHovered
                                ? 'bg-white/10 border-white/15 text-zinc-200'
                                : 'bg-black/5 dark:bg-white/5 border-[#E5E3DC] dark:border-white/10 text-[#555459] dark:text-zinc-300'
                            }`}>
                              <span className="truncate">{svc.imageTag}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0 ml-1.5 animate-pulse" />
                            </div>
                          )}
                        </div>
                      )}

                      <h3 className={`font-lexend text-2xl font-normal leading-tight mb-2 min-h-[56px] sm:min-h-[60px] transition-colors duration-300 ${
                        isCardHovered ? 'text-white' : 'text-[#161519] dark:text-white'
                      }`}>
                        {svc.title}
                      </h3>

                      <p className={`text-xs font-semibold mb-3 min-h-[32px] transition-colors duration-300 ${
                        isCardHovered ? 'text-[#FE9E30]' : 'text-[#2563EB] dark:text-[#3B82F6]'
                      }`}>
                        {svc.subtitle}
                      </p>

                      <p className={`text-sm leading-relaxed mb-6 min-h-[72px] sm:min-h-[80px] transition-colors duration-300 ${
                        isCardHovered ? 'text-zinc-300' : 'text-[#555459] dark:text-zinc-300'
                      }`}>
                        {svc.description}
                      </p>

                      {/* Key Areas: Completely hidden/closed unless hovering this specific card */}
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isCardHovered
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="overflow-hidden min-h-0">
                          <div className={`pt-4 border-t transition-colors duration-300 mb-6 ${
                            isCardHovered ? 'border-white/15' : 'border-[#E5E3DC] dark:border-white/10'
                          }`}>
                            <span className={`text-xs uppercase font-bold tracking-wider block mb-2.5 transition-colors duration-300 ${
                              isCardHovered ? 'text-zinc-200' : 'text-zinc-400 dark:text-zinc-400'
                            }`}>
                              Key Areas:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {svc.keyAreas.map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 border border-white/15 text-white transition-colors duration-300"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`pt-4 flex items-center justify-between border-t transition-colors duration-300 mt-auto ${
                      isCardHovered ? 'border-white/15' : 'border-[#E5E3DC] dark:border-white/10'
                    }`}>
                      <button
                        type="button"
                        onClick={() => navigate(svc.path as any)}
                        className={`inline-flex items-center gap-1.5 text-sm font-bold hover:underline transition-colors duration-300 cursor-pointer ${
                          isCardHovered
                            ? 'text-[#FE9E30]'
                            : 'text-[#2563EB] dark:text-[#3B82F6] hover:text-[#FF6004]'
                        }`}
                      >
                        <span>Learn More &rarr;</span>
                      </button>

                      <button
                        type="button"
                        onClick={openCalendly}
                        className={`text-xs font-semibold transition-colors duration-300 cursor-pointer ${
                          isCardHovered
                            ? 'text-zinc-300 hover:text-white'
                            : 'text-[#555459] dark:text-zinc-400 hover:text-[#161519] dark:hover:text-white'
                        }`}
                      >
                        Discuss Priorities
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

          {/* Services Closing Line with Scroll Reveal */}
          <ScrollReveal delay={0.12} distance={16} className="mt-12 text-center p-6 rounded-[18px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10">
            <p className="font-lexend text-base sm:text-lg font-medium text-[#161519] dark:text-white">
              Strategy gives execution direction.{' '}
              <span className="text-[#FF6004] font-bold">Execution gives strategy evidence.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. WHY SALESNEGO */}
      <section
        id="why-salesnego-section"
        aria-label="Why SalesNego"
        className="w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Left Column: Visual Placement (Single-Handed Ownership Whiteboard) */}
            <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1">
              <ScrollReveal direction="right" distance={24} delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden border border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#1C1B20] shadow-md group">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                    <LazyImage
                      src="/how-we-are-different-ownership.jpg"
                      alt="Single-Handed Ownership and Founder-Led End-to-End Execution whiteboard strategy session"
                      referrerPolicy="no-referrer"
                      containerClassName="w-full h-full absolute inset-0"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Ambient Top Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/75 backdrop-blur-xs border border-white/15 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                      <span>Single-Handed Ownership</span>
                    </div>
                  </div>

                  {/* Content Box (Dedicated card below image - zero overlap on diagram) */}
                  <div className="p-3.5 sm:p-4 bg-white dark:bg-[#1C1B20] border-t border-[#E5E3DC] dark:border-white/10">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-bold text-[#FF6004] dark:text-[#FE9E30]">Founder-Led Commercial Architecture</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">Continuous Loop</span>
                    </div>
                    <p className="text-xs sm:text-[12.5px] text-[#555459] dark:text-zinc-300 leading-snug">
                      GTM Strategy &amp; Signals &rarr; RevOps &amp; Workflows &rarr; Discovery &amp; Dealcraft &rarr; Contract &amp; Closure.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Heading & Distinction Copy */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4 order-1 lg:order-2">
              <ScrollReveal direction="left" distance={20}>
                <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
                  How We Are Different
                </span>
                <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
                  We Do Not Stop at Leads or Meetings.
                </h2>
                <div className="mt-4 space-y-2 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
                  <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 space-y-2">
                    <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                      • Lead-generation providers book calls.
                    </p>
                    <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                      • Advisors offer frameworks.
                    </p>
                    <div className="pt-1 flex flex-nowrap items-center gap-2 min-w-0 max-w-full overflow-hidden h-[30px] min-h-[30px]">
                      <span className="text-xs sm:text-sm md:text-base font-bold text-[#161519] dark:text-white shrink-0 whitespace-nowrap">
                        • SalesNego provides:
                      </span>
                      <span className="inline-flex items-center rounded-[10px] bg-[#2563EB] px-2.5 sm:px-3.5 text-white font-medium text-[11px] sm:text-xs md:text-sm tracking-wide shadow-sm h-[26px] sm:h-[28px] overflow-hidden whitespace-nowrap min-w-0 max-w-full shrink">
                        <span className="truncate min-w-0">{diffDisplayedText || '\u00A0'}</span>
                        <span className="ml-1 inline-block w-[2px] h-[0.9em] bg-white align-middle animate-mf-caret shrink-0" />
                      </span>
                    </div>
                  </div>
                  <p className="pt-2 text-sm sm:text-base text-[#555459] dark:text-zinc-300">
                    We connect strategic thinking, operational discipline and senior commercial ownership across the entire revenue lifecycle—from GTM signals and RevOps workflows to discovery, dealcraft, and contract closure.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 4 Value Pillars: 2x2 grid on tablet portrait, 4 cols on tablet landscape & desktop */}
          <StaggerGroup staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {whySalesnegoPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.number} distance={20} className="h-full">
                  <div className="p-5 sm:p-6 rounded-[20px] bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-[#2563EB] dark:hover:border-[#3B82F6] transition-colors h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#3B82F6]">
                          Pillar {pillar.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 dark:bg-[#3B82F6]/20 flex items-center justify-center text-[#2563EB] dark:text-[#3B82F6]">
                          <Icon className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                        </div>
                      </div>
                      <h3 className="font-lexend text-xl font-normal text-[#161519] dark:text-white mb-2 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. HOW SALESNEGO WORKS (COMMERCIAL JOURNEY) */}
      <section
        id="journey-section"
        aria-label="One Connected Commercial Journey"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4">
              <ScrollReveal direction="up" distance={20}>
                <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
                  Commercial Journey
                </span>
                <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
                  One Connected Commercial Journey.
                </h2>
                <div className="mt-3 space-y-3 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
                  <p>
                    An integrated commercial architecture transforming early market signals into qualified enterprise opportunities, structured negotiations, and multi-year customer expansion.
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-[#2563EB] dark:text-[#3B82F6]">
                    Every stage feeds continuous intelligence backward and forward—helping reduce handoff loss and maintain commercial continuity across the sales cycle.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Visual Placement (Connected Commercial Journey Whiteboard Session) */}
            <div className="lg:col-span-6 xl:col-span-6">
              <ScrollReveal direction="left" distance={24} delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden border border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#1C1B20] shadow-md group">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                    <LazyImage
                      src="/connected-commercial-journey.jpg"
                      alt="Connected Commercial Journey whiteboard strategy workshop illustrating the pathway from First Market Signal to Multi-Year Customer Expansion"
                      referrerPolicy="no-referrer"
                      containerClassName="w-full h-full absolute inset-0"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Ambient Top Tag */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/75 backdrop-blur-xs border border-white/15 text-[11px] font-semibold text-white flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] animate-pulse" />
                      <span>End-to-End Commercial Flow</span>
                    </div>
                  </div>

                  {/* Content Box (Dedicated card below image - zero overlap on diagram) */}
                  <div className="p-3.5 sm:p-4 bg-white dark:bg-[#1C1B20] border-t border-[#E5E3DC] dark:border-white/10">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs sm:text-sm font-bold text-[#FF6004] dark:text-[#FE9E30]">First Market Signal &rarr; Expansion</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">8 Stages</span>
                    </div>
                    <p className="text-xs sm:text-[12.5px] text-[#555459] dark:text-zinc-300 leading-snug">
                      Understand &rarr; Position &rarr; Prioritise &rarr; Engage &rarr; Diagnose &rarr; Qualify &rarr; Convert &rarr; Expand.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 8 Stages Grid: 2 cols on tablet portrait (4 rows), 4 cols on tablet landscape (2 rows) */}
          <StaggerGroup
            staggerDelay={0.06}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          >
            {commercialJourneyStages.map((stage) => (
              <StaggerItem key={stage.step} distance={16} className="h-full">
                <div className="p-6 rounded-[18px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col justify-between hover:border-[#2563EB] dark:hover:border-[#3B82F6] transition-all h-full">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#3B82F6] block mb-2">
                      Stage {stage.step}
                    </span>
                    <h3 className="font-lexend text-lg font-normal text-[#161519] dark:text-white mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <ScrollReveal delay={0.15} distance={16} className="mt-12 text-center">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-[#FF6004] hover:bg-[#E05300] text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Discuss Your Growth Priorities</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* COMMERCIAL LEADERSHIP & FOUNDER SECTION */}
      <section
        id="about-section"
        aria-label="Founder & Commercial Leadership"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24}>
            <div className="p-6 sm:p-8 lg:p-12 rounded-[24px] bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
                {/* Founder Image */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start space-y-3 sm:space-y-4">
                  <div className="relative w-full max-w-[240px] sm:max-w-[280px] aspect-[3/4] rounded-[20px] overflow-hidden border border-[#E5E3DC] dark:border-white/10 shadow-md bg-gray-100 dark:bg-black/20">
                    <LazyImage
                      src="/raja-kumar.jpg"
                      fallbackSrc="https://www.image2url.com/r2/default/images/1785784733130-463697ea-d4b8-40a6-a8e3-46ef59c33d68.jpg"
                      alt="Raja Kumar — Founder & Principal Commercial Operator at SalesNego"
                      className="w-full h-full object-cover object-top"
                      containerClassName="w-full h-full"
                      aspectRatio="3/4"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="font-lexend text-xl sm:text-2xl font-bold text-[#161519] dark:text-white">
                      Raja Kumar
                    </h3>
                    <p className="text-sm font-bold text-[#FF6004] mt-0.5">
                      Founder &amp; Principal Commercial Operator
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#555459] dark:text-zinc-400 mt-1">
                      <GraduationCap className="w-4 h-4 text-[#FF6004]" />
                      <span>MBA — University of Chester, UK</span>
                    </div>
                  </div>
                </div>

                {/* Founder Narrative */}
                <div className="md:col-span-7 lg:col-span-8 space-y-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block">
                    Commercial Leadership
                  </span>
                  <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight">
                    &ldquo;We use AI to accelerate execution, but never replace senior commercial judgment.&rdquo;
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
                    <p>
                      With over 14 years of hands-on commercial ownership across Enterprise SaaS, Cloud &amp; IT Services, and Global B2B Business Development, Raja Kumar leads every core commercial engagement directly.
                    </p>
                    <p>
                      Rather than handing critical enterprise accounts to inexperienced junior reps or volume outreach bots, SalesNego brings executive judgment to ICP qualification, discovery, and enterprise contract negotiation.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => navigate('/case-studies')}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[#161519] dark:border-white bg-[#161519] hover:bg-white text-white hover:text-[#161519] dark:bg-white dark:hover:bg-[#161519] dark:text-[#161519] dark:hover:text-white font-bold text-xs transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md group"
                    >
                      <span>View Client Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>

                    <button
                      type="button"
                      onClick={openCalendly}
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[#E5E3DC] dark:border-white/20 text-[#161519] dark:text-white font-medium text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <span>Discuss Growth With Raja</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPERIENCE SECTION (Verticals: SaaS, AI, Life Sciences, IT Services) */}
      <section
        id="experience-section"
        aria-label="Selected Experience"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
              Experience
            </span>
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
              Experience Across SaaS, AI and Technology Sales.
            </h2>
            <p className="mt-3 text-base text-[#2563EB] dark:text-[#3B82F6] font-medium leading-relaxed">
              Commercial engagements across sectors, markets and deal stages.
            </p>
          </ScrollReveal>

          {/* Desktop Mode: Interactive Smooth Sliding & Draggable Experience Cards */}
          <div className="hidden md:block py-4">
            <ExperienceMarqueeSlider items={trackRecordDomains} />
          </div>

          {/* Mobile & Tablet Mode: Responsive Auto-Fit Grid */}
          <div className="block md:hidden">
            <StaggerGroup
              staggerDelay={0.08}
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
              className="grid gap-5 responsive-grid-autofit"
            >
              {trackRecordDomains.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={`mobile-exp-${item.domain}`}
                    distance={20}
                    className="h-full"
                  >
                    <div className="group p-6 rounded-[22px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 hover:bg-[#161519] dark:hover:bg-black hover:border-[#FF6004] transition-all duration-300 shadow-xs flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#FF6004] bg-[#FF6004]/10 group-hover:bg-[#FF6004] group-hover:text-white px-2 py-0.5 rounded-md transition-colors">
                              0{idx + 1}
                            </span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-white/15 text-zinc-600 dark:text-zinc-300 group-hover:text-white transition-colors">
                              {item.sector}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-[#FF6004]/10 text-[#FF6004] group-hover:bg-[#FF6004] group-hover:text-white flex items-center justify-center transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <h3 className="font-lexend text-lg font-normal text-[#161519] dark:text-white group-hover:text-white mb-2.5 leading-snug transition-colors duration-200">
                          {item.domain}
                        </h3>

                        {item.image && (
                          <div className="mb-3">
                            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-900 group/thumb">
                              <LazyImage
                                src={item.image}
                                alt={item.imageAlt || item.domain}
                                referrerPolicy="no-referrer"
                                containerClassName="w-full h-full absolute inset-0"
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            {item.imageTag && (
                              <div className="mt-2 flex items-center justify-between px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[10px] text-zinc-600 dark:text-zinc-300 font-medium">
                                <span className="truncate">{item.imageTag}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0 ml-1 animate-pulse" />
                              </div>
                            )}
                          </div>
                        )}

                        <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 group-hover:text-zinc-200 leading-relaxed mb-4 transition-colors duration-200">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E5E3DC]/80 dark:border-white/10 group-hover:border-white/15 flex flex-wrap gap-1.5 transition-colors">
                        {item.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/80 dark:bg-white/5 group-hover:bg-white/10 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-100 border border-zinc-200/60 dark:border-white/5 group-hover:border-white/15 transition-colors"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          <ScrollReveal delay={0.12} distance={16} className="mt-10 text-center">
            <button
              type="button"
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-[#161519] dark:border-white bg-[#161519] hover:bg-white text-white hover:text-[#161519] dark:bg-white dark:hover:bg-[#161519] dark:text-[#161519] dark:hover:text-white font-bold text-xs transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md group"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* PARTNERSHIP SECTION (Strategic Alliances & Ecosystem / Engagement Model) */}
      <section
        id="engagement-section"
        aria-label="Engagement Model"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24}>
            <div className="rounded-[24px] bg-[#161519] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6004]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                {/* Left: Commercial Alignment Text & Positioning */}
                <div className="lg:col-span-6 xl:col-span-7 space-y-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#FE9E30] block">
                    Partnership
                  </span>
                  <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-white">
                    Commercial Alignment Beyond Activity Metrics.
                  </h2>
                  <div className="space-y-3 text-base text-zinc-300 leading-relaxed pt-1">
                    <p>
                      SalesNego works with a selective number of B2B technology companies at any given time.
                    </p>
                    <p className="font-medium text-white">
                      We focus on commercial depth rather than high-volume, low-context lead generation.
                    </p>
                    <p className="text-sm text-zinc-400">
                      Every commercial engagement pairs dedicated senior operators directly with your leadership team, aligning pipeline velocity, deal qualification, and revenue closing with strategic business milestones.
                    </p>
                  </div>
                </div>

                {/* Right: Executive Commercial Alignment & Partnership Image */}
                <div className="lg:col-span-6 xl:col-span-5 w-full">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-900 group">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-zinc-900">
                      <LazyImage
                        src="/commercial-alignment-partner.jpg"
                        alt="Candid executive consultation and commercial partnership alignment session between a B2B tech founder and senior commercial partner reviewing revenue milestones"
                        referrerPolicy="no-referrer"
                        containerClassName="w-full h-full absolute inset-0"
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Status Content Box placed cleanly below image without overlapping */}
                    <div className="p-3.5 sm:p-4 bg-black/90 dark:bg-[#1C1B20] border-t border-white/10 text-white flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-2 h-2 rounded-full bg-[#FF6004] animate-pulse shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-white truncate">
                            Commercial Alignment &amp; Governance
                          </p>
                          <p className="text-[11px] sm:text-xs text-zinc-300 truncate">
                            Milestone-Driven · Senior Operators · Selective Client Capacity
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FF6004]/25 border border-[#FF6004]/40 text-[#FE9E30] shrink-0 hidden sm:inline-block">
                        Partnership
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Attributes (All 4 cards in 1 row in desktop view) */}
              <StaggerGroup
                staggerDelay={0.08}
                className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#2563EB] dark:text-[#3B82F6] font-bold block mb-1">Model</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">Monthly Retainer + Commercial Performance</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Aligned incentives focused on validated revenue.</p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#2563EB] dark:text-[#3B82F6] font-bold block mb-1">Scope</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">Strategy, RevOps, or Full-Cycle Commercial Execution</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Tailored to your commercial gaps.</p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#2563EB] dark:text-[#3B82F6] font-bold block mb-1">Markets</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">North America, UAE, Europe, India, Australia</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Cross-border market entry and expansion.</p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#2563EB]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#2563EB] dark:text-[#3B82F6] font-bold block mb-1">Focus</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">Sustainable pipeline, customer acquisition and account expansion.</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Durable commercial results.</p>
                  </div>
                </StaggerItem>
              </StaggerGroup>

              <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-zinc-400">Ready to structure your commercial engagement?</span>
                  <p className="text-sm font-bold text-white">Let's discuss where your commercial motion is getting stuck.</p>
                </div>

                <button
                  type="button"
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[#FF6004] hover:bg-[#E05300] text-white font-bold text-sm transition-all shadow-md shrink-0"
                >
                  <span>Discuss Your Growth Priorities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL (Social Proof & Verified Executive Recommendations - Before FAQ) */}
      <TestimonialCarousel />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* 11. READY TO DISCUSS YOUR PROJECT? (Metafic Pre-Footer Conversion Block) */}
      <section
        id="contact-section"
        aria-label="Ready To Discuss Your Project"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24}>
            <div className="rounded-[24px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Direct Action & Contacts */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
                      Get In Touch
                    </span>
                    <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#161519] dark:text-white">
                      Where Is Your Commercial Motion Getting Stuck?
                    </h2>
                    <p className="mt-4 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
                      Whether you need to define your market, fix pipeline leaks, build AI-accelerated commercial workflows or lead enterprise opportunities through to closure, let&apos;s discuss your commercial priorities.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-[16px] bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                      <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">Direct Commercial Inquiries</span>
                      <a
                        href="mailto:sales@salesnego.com"
                        className="text-base font-bold text-[#FF6004] hover:underline"
                      >
                        sales@salesnego.com
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] sm:text-xs">
                      <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                        <span className="font-bold text-[#161519] dark:text-white block">North America:</span>
                        <a href="tel:+14156886517" className="text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] whitespace-nowrap block mt-0.5">
                          +1 415 688 6517
                        </a>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                        <span className="font-bold text-[#161519] dark:text-white block">UAE:</span>
                        <a href="tel:+971528770047" className="text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] whitespace-nowrap block mt-0.5">
                          +971 52 877 0047
                        </a>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                        <span className="font-bold text-[#161519] dark:text-white block">India:</span>
                        <a href="tel:+919884450102" className="text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] whitespace-nowrap block mt-0.5">
                          +91 98844 50102
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={openCalendly}
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-[#FF6004] hover:bg-[#E05300] text-white font-bold text-sm shadow-md transition-all"
                    >
                      <span>Discuss Your Growth Priorities</span>
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Instant Project Inquiry Form */}
                <div
                  style={{ maxWidth: '100%', boxSizing: 'border-box' }}
                  className="lg:col-span-6 w-full max-w-full box-border overflow-hidden p-6 sm:p-8 rounded-[20px] bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/10 shadow-sm"
                >
                  <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block mb-1">
                    Express Inquiry
                  </span>
                  <h3 className="font-lexend text-xl font-bold text-[#161519] dark:text-white mb-4">
                    Request Commercial Proposal
                  </h3>

                  {inquiryStatus === 'success' ? (
                    <div className="py-8 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg text-[#161519] dark:text-white">Inquiry Received</h4>
                      <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 max-w-sm mx-auto">
                        Thank you, {inquiryName}. Raja Kumar and the commercial desk will review your scope and get back to you within 24 hours.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={handleResetInquiry}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-[#161519] dark:text-white text-xs font-semibold transition-colors"
                        >
                          Send another inquiry
                        </button>
                        <button
                          type="button"
                          onClick={openCalendly}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FF6004] hover:bg-[#E05300] text-white text-xs font-bold transition-colors shadow-sm"
                        >
                          <span>Or Book A Time Now</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      action="https://formspree.io/f/xqpkpera"
                      method="POST"
                      onSubmit={handleInquirySubmit}
                      style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
                      className="space-y-3.5 w-full max-w-full box-border"
                    >
                      {inquiryStatus === 'error' && (
                        <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-300">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{inquiryErrorMessage}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ width: '100%', boxSizing: 'border-box' }}>
                        <div style={{ width: '100%', boxSizing: 'border-box' }}>
                          <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#161519] dark:text-zinc-200 mb-1">
                            Your Full Name *
                          </label>
                          <input
                            id="inquiry-name"
                            name="name"
                            type="text"
                            required
                            disabled={inquiryStatus === 'submitting'}
                            value={inquiryName}
                            onChange={(e) => setInquiryName(e.target.value)}
                            placeholder="e.g. Alex Morgan"
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            className="w-full max-w-full box-border px-4 py-2.5 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-sm text-[#161519] dark:text-white focus:outline-none focus:border-[#FF6004] disabled:opacity-50"
                          />
                        </div>

                        <div style={{ width: '100%', boxSizing: 'border-box' }}>
                          <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#161519] dark:text-zinc-200 mb-1">
                            Corporate Email *
                          </label>
                          <input
                            id="inquiry-email"
                            name="email"
                            type="email"
                            required
                            disabled={inquiryStatus === 'submitting'}
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            placeholder="alex@company.com"
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            className="w-full max-w-full box-border px-4 py-2.5 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-sm text-[#161519] dark:text-white focus:outline-none focus:border-[#FF6004] disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ width: '100%', boxSizing: 'border-box' }}>
                        <div style={{ width: '100%', boxSizing: 'border-box' }}>
                          <label htmlFor="inquiry-company" className="block text-xs font-bold text-[#161519] dark:text-zinc-200 mb-1">
                            Company / Product Name *
                          </label>
                          <input
                            id="inquiry-company"
                            name="company"
                            type="text"
                            required
                            disabled={inquiryStatus === 'submitting'}
                            value={inquiryCompany}
                            onChange={(e) => setInquiryCompany(e.target.value)}
                            placeholder="e.g. Acme AI"
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            className="w-full max-w-full box-border px-4 py-2.5 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-sm text-[#161519] dark:text-white focus:outline-none focus:border-[#FF6004] disabled:opacity-50"
                          />
                        </div>

                        <div style={{ width: '100%', boxSizing: 'border-box' }}>
                          <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#161519] dark:text-zinc-200 mb-1">
                            Phone / WhatsApp <span className="text-zinc-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            id="inquiry-phone"
                            name="phone"
                            type="tel"
                            disabled={inquiryStatus === 'submitting'}
                            value={inquiryPhone}
                            onChange={(e) => setInquiryPhone(e.target.value)}
                            placeholder="+1 555 019 2831"
                            style={{ width: '100%', boxSizing: 'border-box' }}
                            className="w-full max-w-full box-border px-4 py-2.5 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-sm text-[#161519] dark:text-white focus:outline-none focus:border-[#FF6004] disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div style={{ width: '100%', boxSizing: 'border-box' }}>
                        <label htmlFor="inquiry-cat" className="block text-xs font-bold text-[#161519] dark:text-zinc-200 mb-1">
                          Industry / Category
                        </label>
                        <select
                          id="inquiry-cat"
                          name="category"
                          disabled={inquiryStatus === 'submitting'}
                          value={inquiryCategory}
                          onChange={(e) => setInquiryCategory(e.target.value)}
                          style={{ width: '100%', boxSizing: 'border-box' }}
                          className="w-full max-w-full box-border px-4 py-2.5 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-sm text-[#161519] dark:text-white focus:outline-none focus:border-[#FF6004] disabled:opacity-50"
                        >
                          <option value="B2B SaaS / Tech">B2B SaaS / Tech</option>
                          <option value="AI & Custom Software">AI &amp; Custom Software</option>
                          <option value="Life Sciences / HealthTech">Life Sciences / HealthTech</option>
                          <option value="Enterprise IT & Cloud">Enterprise IT &amp; Cloud</option>
                          <option value="Other High-Growth">Other High-Growth</option>
                        </select>
                      </div>

                      <div style={{ width: '100%', boxSizing: 'border-box' }}>
                        <label htmlFor="inquiry-msg" className="block text-xs font-bold text-[#161519] dark:text-zinc-200 mb-1">
                          Commercial Challenge / Growth Priority *
                        </label>
                        <textarea
                          id="inquiry-msg"
                          name="message"
                          rows={3}
                          required
                          disabled={inquiryStatus === 'submitting'}
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                          placeholder="Tell us what you sell and where deals are stalling..."
                          style={{ width: '100%', boxSizing: 'border-box' }}
                          className="w-full max-w-full box-border px-4 py-2.5 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-sm text-[#161519] dark:text-white focus:outline-none focus:border-[#FF6004] resize-none disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={inquiryStatus === 'submitting'}
                        style={{ width: '100%', boxSizing: 'border-box' }}
                        className="w-full max-w-full box-border py-3 rounded-full bg-[#FF6004] hover:bg-[#E05300] active:scale-98 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                      >
                        {inquiryStatus === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Request to Commercial Desk...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
