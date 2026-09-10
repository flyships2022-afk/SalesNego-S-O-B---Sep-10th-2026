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
import { ClientLogoCard } from '../components/ClientLogoCard';
import { LazyImage } from '../components/LazyImage';

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

  // Quick inquiry form state
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

  const clientLogos = [
    {
      name: 'TC+ LIMS',
      image: '/tclims-logo.png',
      fallbackUrl: '/tclims-logo.png',
      alt: 'TC+ LIMS Logo',
    },
    {
      name: 'KidOye',
      image: '/kidoye-logo.png',
      fallbackUrl: '/kidoye-logo.png',
      alt: 'KidOye Logo',
    },
    {
      name: 'Infocodec',
      image: '/infocodec-logo.png',
      fallbackUrl: '/infocodec-logo.png',
      alt: 'Infocodec Logo',
    },
    {
      name: 'Maple Tax',
      image: '/mapletax-logo.png',
      fallbackUrl: '/mapletax-logo.png',
      alt: 'Maple Tax Logo',
      sizeClass: 'max-h-12 max-w-[145px]',
    },
    {
      name: 'Metafic',
      image: '/metafic-logo-clean.png',
      fallbackUrl: '/metafic-logo-clean.png',
      alt: 'Metafic Logo',
    },
    {
      name: 'Leadnics',
      image: '/leadnics-logo.svg',
      fallbackUrl: '/leadnics-logo.svg',
      alt: 'Leadnics Logo',
    },
    {
      name: 'Aarav Nexus',
      image: '/aarav-nexus-logo.svg',
      fallbackUrl: '/aarav-nexus-logo.svg',
      alt: 'Aarav Nexus Logo',
    },
  ];

  const coreServices = [
    {
      id: 'gtm',
      title: 'GTM Strategy & Market Intelligence',
      subtitle: 'Know where to compete, who to target and why they should care.',
      badge: 'Strategy',
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
      description: 'Execution led by commercial professionals, not junior call farms.',
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
    },
    {
      domain: 'Enterprise Technology & IT Services Platform',
      sector: 'Enterprise Platforms & IT',
      desc: 'Enterprise technology and IT-services selling involving complex technical-commercial alignment, RFP qualification, statement-of-work scoping, proposal negotiation and regional expansion.',
      highlights: ['Complex RFP Alignment', 'SOW Scoping', 'Regional Expansion'],
      icon: Server,
    },
    {
      domain: 'AI Scoping & Custom Software Development',
      sector: 'Artificial Intelligence & Custom Dev',
      desc: 'International business development across artificial intelligence, enterprise SaaS, digital products and custom software, including technical scoping, proposals, negotiation and closure.',
      highlights: ['AI Scoping', 'Multi-Market Proposals', 'Deal Closure'],
      icon: Brain,
    },
    {
      domain: 'Strategic Commercial Advisory & Expansion',
      sector: 'Strategic Advisory & Scale',
      desc: 'Commercial development and advisory engagements focused on authoritative commercial execution, cross-border market entry and disciplined pipeline qualification.',
      highlights: ['Executive Advisory', 'Cross-Border Entry', 'Pipeline Rigor'],
      icon: Compass,
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
      {/* 1. METAFIC FRAMED HERO CANVAS */}
      <section
        id="hero-section"
        aria-label="Hero Introduction"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section relative w-full max-w-full bg-[#F6F5F2] dark:bg-[#0A0B0E] p-2.5 sm:p-3.5 lg:p-4"
      >
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white via-[#FAF9F5] to-[#F0EEE8] text-[#161519] dark:from-[#0F1117] dark:via-[#0A0B0E] dark:to-[#07080A] dark:text-white p-5 sm:p-7 lg:p-8 min-h-0 lg:min-h-[560px] flex flex-col justify-between border border-[#E5E3DC] dark:border-[#1E2230] shadow-xl transition-colors duration-200">
          {/* Subtle Ambient Background Mesh - Crisp Cool Obsidian with High Contrast Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6004]/10 dark:bg-[#FF6004]/14 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#103CE7]/10 dark:bg-[#103CE7]/12 rounded-full blur-[120px] pointer-events-none" />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px]" />

          {/* Top Eyebrow Bar */}
          <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap pb-2 sm:pb-3">
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
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center py-2 sm:py-3 my-auto">
            {/* Left Column: Headline, Focus Pill, Description, CTAs (lg:col-span-7) */}
            <div className="lg:col-span-7 xl:col-span-7 max-w-2xl">
              {/* 2. Main H1 Title with Fluid Clamp Typography */}
              <h1
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                className="font-lexend font-bold leading-tight mb-3 text-[#161519] dark:text-white fluid-hero-heading"
              >
                From Market Signal <br className="hidden sm:inline" /> to Closed Revenue.
              </h1>

              {/* 3. Commercial Focus Pill & Copy */}
              <div className="mb-4">
                <div className="flex items-center flex-wrap gap-2.5 mb-2.5">
                  <span className="text-xs uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                    Commercial Focus:
                  </span>
                  <span className="inline-flex items-center rounded-[10px] bg-[#103CE7] px-3.5 py-1 text-white font-medium text-xs sm:text-base tracking-wide shadow-sm min-h-[30px]">
                    <span>{displayedText}</span>
                    <span className="ml-1 inline-block w-[2px] h-[0.9em] bg-white align-middle animate-mf-caret" />
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
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-bold text-white bg-[#FF6004] hover:bg-[#E05300] active:scale-98 transition-all shadow-lg shadow-[#FF6004]/25 hover:shadow-[#FF6004]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] shrink-0"
                >
                  <span>Discuss Your Growth Priorities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else navigate('/services');
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium text-[#161519] dark:text-white bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/20 backdrop-blur-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] shrink-0"
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
              style={{ maxWidth: '100%', height: 'auto', overflowX: 'hidden' }}
              className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end w-full max-w-full overflow-x-hidden h-auto preview-card-wrapper"
            >
              <ProcessCircleMotion />
            </div>
          </div>

          {/* Bottom Hero Trust Metrics Bar with Staggered Scroll Entrance */}
          <StaggerGroup
            staggerDelay={0.08}
            className="relative z-10 pt-5 mt-5 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 items-start"
          >
            <StaggerItem distance={16}>
              <div>
                <span className="block font-lexend text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">14+</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Years B2B Commercial Leadership</span>
              </div>
            </StaggerItem>
            <StaggerItem distance={16}>
              <div className="text-left sm:text-center">
                <span className="block font-lexend text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">5</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Key Markets - North America, India, Europe, Australia</span>
              </div>
            </StaggerItem>
            <StaggerItem distance={16}>
              <div className="text-left sm:text-right">
                <span className="block font-lexend text-2xl sm:text-3xl font-bold text-[#FF6004]">100%</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Pipeline-to-Revenue Ownership</span>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* 2. PARTNERS, NOT JUST CLIENTS (Infinite Smooth Marquee with Scroll Reveal) */}
      <section
        id="partners-section"
        aria-label="Approved Client Logos"
        style={{ maxWidth: '100%', height: 'auto', overflowX: 'hidden', boxSizing: 'border-box' }}
        className="top-level-section logo-wall-wrapper client-logos-wrapper w-full max-w-full h-auto py-12 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10 overflow-x-hidden relative"
      >
        <ScrollReveal direction="up" distance={20} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="font-lexend text-xl sm:text-2xl lg:text-3xl font-normal leading-tight text-[#161519] dark:text-white">
            Trusted Across SaaS, Technology Products and Services
          </h2>
        </ScrollReveal>

        {/* Left and Right Fade Masks for Smooth Edge Transitions */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />

        {/* Sliding Track with Scroll Reveal Container */}
        <ScrollReveal delay={0.1} distance={16}>
          <div className="flex animate-marquee gap-6 md:gap-8 items-center py-2">
            {/* First Copy of Logos */}
            <div className="flex gap-6 md:gap-8 items-center shrink-0">
              {clientLogos.map((item, index) => (
                <ClientLogoCard
                  key={`logo-track-1-${index}`}
                  name={item.name}
                  image={item.image}
                  fallbackUrl={item.fallbackUrl}
                  alt={item.alt}
                  sizeClass={item.sizeClass}
                />
              ))}
            </div>

            {/* Duplicate Copy for Seamless Infinite Loop */}
            <div className="flex gap-6 md:gap-8 items-center shrink-0" aria-hidden="true">
              {clientLogos.map((item, index) => (
                <ClientLogoCard
                  key={`logo-track-dup-${index}`}
                  name={item.name}
                  image={item.image}
                  fallbackUrl={item.fallbackUrl}
                  alt={item.alt}
                  sizeClass={item.sizeClass}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. THE COMMERCIAL GAP */}
      <section
        id="commercial-gap-section"
        aria-label="The Commercial Gap"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal direction="up" distance={20}>
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-3">
              The Challenge
            </span>
            <h2 className="font-lexend text-[28px] sm:text-[36px] lg:text-[46px] font-normal leading-[1.15] text-[#161519] dark:text-white mb-6">
              More Sales Activity Does Not Automatically Create Revenue.
            </h2>

            <div className="max-w-3xl mx-auto space-y-3 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>
                Companies can invest in targeting, tools, automation and outbound activity while opportunities still fail to progress through the buying process.
              </p>
              <p className="font-medium text-[#161519] dark:text-white">
                SalesNego connects the commercial system from market understanding through customer acquisition and growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Simple Visual: Right Market → Right Accounts → Right Conversations → Qualified Opportunities → Closed Business */}
          {/* Responsive 5-Stage Commercial Progression with Scroll Reveal */}
          <ScrollReveal delay={0.12} distance={20}>
            <div className="mt-10 p-5 sm:p-7 rounded-[20px] bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
              {/* Desktop & Tablet Horizontal Sequence */}
              <div className="hidden md:flex items-center justify-between gap-2 text-xs lg:text-sm font-bold text-[#161519] dark:text-white">
                <span className="px-3.5 py-2 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-center whitespace-nowrap">
                  Right Market
                </span>
                <span className="text-[#FF6004] font-black text-base shrink-0">&rarr;</span>
                <span className="px-3.5 py-2 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-center whitespace-nowrap">
                  Right Accounts
                </span>
                <span className="text-[#FF6004] font-black text-base shrink-0">&rarr;</span>
                <span className="px-3.5 py-2 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-center whitespace-nowrap">
                  Right Conversations
                </span>
                <span className="text-[#FF6004] font-black text-base shrink-0">&rarr;</span>
                <span className="px-3.5 py-2 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-center whitespace-nowrap">
                  Qualified Opportunities
                </span>
                <span className="text-[#FF6004] font-black text-base shrink-0">&rarr;</span>
                <span className="px-3.5 py-2 rounded-xl bg-[#103CE7] text-white shadow-xs text-center whitespace-nowrap">
                  Closed Business
                </span>
              </div>

              {/* Mobile Vertical Stack */}
              <div className="flex md:hidden flex-col gap-2 text-xs font-bold text-[#161519] dark:text-white">
                {[
                  { title: 'Right Market', final: false },
                  { title: 'Right Accounts', final: false },
                  { title: 'Right Conversations', final: false },
                  { title: 'Qualified Opportunities', final: false },
                  { title: 'Closed Business', final: true },
                ].map((step, idx) => (
                  <div key={step.title} className="flex flex-col items-center w-full">
                    <div
                      className={`w-full py-2.5 px-4 rounded-xl text-center border transition-all ${
                        step.final
                          ? 'bg-[#103CE7] text-white border-[#103CE7] shadow-xs'
                          : 'bg-[#F6F5F2] dark:bg-white/5 border-[#E5E3DC] dark:border-white/10'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-[#FF6004] dark:text-[#FE9E30] block mb-0.5">
                        Stage 0{idx + 1}
                      </span>
                      <span className="text-sm font-bold">{step.title}</span>
                    </div>
                    {!step.final && (
                      <div className="py-1 text-[#FF6004] font-bold text-xs">&darr;</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section
        id="services-section"
        aria-label="Core Services"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
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
              <p className="font-medium text-[#161519] dark:text-zinc-200">
                We connect all three under one commercial partnership.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Services Grid with Responsive Auto-Fit Grid */}
          <StaggerGroup
            staggerDelay={0.1}
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            className="grid gap-6 lg:gap-8 responsive-grid-autofit py-2"
          >
            {coreServices.map((svc) => (
              <StaggerItem key={svc.id} distance={24} className="h-full">
                <div className="group relative p-8 rounded-[20px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 hover:border-[#FF6004] dark:hover:border-[#FF6004] transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 shadow-xs hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/60 hover:z-10 flex flex-col justify-between h-full will-change-transform">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF6004]/10 text-[#FF6004] dark:bg-white/10 dark:text-zinc-200">
                        {svc.badge}
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate(svc.path as any)}
                        className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-[#161519] dark:text-white group-hover:bg-[#103CE7] group-hover:text-white transition-all"
                        aria-label={`Learn more about ${svc.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="font-lexend text-2xl font-normal text-[#161519] dark:text-white group-hover:text-[#FF6004] dark:group-hover:text-[#FF6004] transition-colors leading-tight mb-2">
                      {svc.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#103CE7] dark:text-[#3B82F6] mb-3">
                      {svc.subtitle}
                    </p>

                    <p className="text-sm text-[#555459] dark:text-zinc-300 leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    <div className="space-y-2 mb-8 pt-4 border-t border-[#E5E3DC] dark:border-white/10">
                      <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block mb-2">
                        Key Areas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.keyAreas.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-[#161519] dark:text-zinc-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#E5E3DC] dark:border-white/10 mt-auto">
                    <button
                      type="button"
                      onClick={() => navigate(svc.path as any)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#103CE7] dark:text-[#3B82F6] hover:underline"
                    >
                      <span>Learn More &rarr;</span>
                    </button>

                    <button
                      type="button"
                      onClick={openCalendly}
                      className="text-xs font-semibold text-[#555459] dark:text-zinc-400 hover:text-[#103CE7] dark:hover:text-white"
                    >
                      Discuss Priorities
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

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
          <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
              How We Are Different
            </span>
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
              We Do Not Stop at Leads or Meetings.
            </h2>
            <div className="mt-4 space-y-1.5 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>Lead-generation providers book calls.</p>
              <p>Advisors offer frameworks.</p>
              <p className="font-bold text-[#161519] dark:text-white">
                SalesNego provides commercial execution.
              </p>
              <p className="pt-2">
                We connect strategic thinking, operational discipline and senior commercial ownership across the customer journey.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Value Pillars with Staggered Scroll Reveal */}
          <StaggerGroup staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySalesnegoPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.number} distance={20} className="h-full">
                  <div className="p-6 rounded-[20px] bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-[#FF6004] dark:hover:border-[#FF6004] transition-colors h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#FF6004]">
                          Pillar {pillar.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#FF6004]/10 dark:bg-white/5 flex items-center justify-center text-[#FF6004]">
                          <Icon className="w-4 h-4" />
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
          <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
              Commercial Journey
            </span>
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
              One Connected Commercial Journey.
            </h2>
            <p className="mt-3 text-base text-[#555459] dark:text-zinc-400 leading-relaxed">
              An integrated pathway from first market signal to multi-year customer expansion.
            </p>
          </ScrollReveal>

          {/* 8 Stages Grid with Responsive Auto-Fit Grid */}
          <StaggerGroup
            staggerDelay={0.06}
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            className="grid gap-4 sm:gap-6 responsive-grid-autofit"
          >
            {commercialJourneyStages.map((stage) => (
              <StaggerItem key={stage.step} distance={16} className="h-full">
                <div className="p-6 rounded-[18px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col justify-between hover:border-[#103CE7] transition-all h-full">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#103CE7] dark:text-[#3B82F6] block mb-2">
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
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24}>
            <div className="p-8 sm:p-12 rounded-[24px] bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Founder Image */}
                <div className="lg:col-span-4 flex flex-col items-start space-y-4">
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-[20px] overflow-hidden border border-[#E5E3DC] dark:border-white/10 shadow-md bg-gray-100 dark:bg-black/20">
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
                    <h3 className="font-lexend text-2xl font-bold text-[#161519] dark:text-white">
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
                <div className="lg:col-span-8 space-y-4">
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
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#161519] dark:bg-white text-white dark:text-[#161519] font-bold text-xs hover:bg-black transition-colors"
                    >
                      <span>View Client Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
              Experience
            </span>
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
              Experience Across SaaS, AI and Technology Sales.
            </h2>
            <p className="mt-3 text-base text-[#555459] dark:text-zinc-400 leading-relaxed">
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
                    <div className="p-6 rounded-[22px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#FF6004] bg-[#FF6004]/10 px-2 py-0.5 rounded-md">
                              0{idx + 1}
                            </span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">
                              {item.sector}
                            </span>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-[#FF6004]/10 text-[#FF6004] flex items-center justify-center">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <h3 className="font-lexend text-lg font-normal text-[#161519] dark:text-white mb-2.5 leading-snug">
                          {item.domain}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 leading-relaxed mb-4">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E5E3DC]/80 dark:border-white/10 flex flex-wrap gap-1.5">
                        {item.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/80 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
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
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#161519] dark:bg-white text-white dark:text-[#161519] font-bold text-xs hover:bg-black transition-colors"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
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

              <div className="relative z-10 max-w-3xl">
                <span className="text-xs uppercase font-bold tracking-wider text-[#FE9E30] block mb-3">
                  Partnership
                </span>
                <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-white">
                  Commercial Alignment Beyond Activity Metrics.
                </h2>
                <div className="mt-4 space-y-2 text-base text-zinc-300 leading-relaxed">
                  <p>
                    SalesNego works with a selective number of B2B technology companies at any given time.
                  </p>
                  <p className="font-medium text-white">
                    We focus on commercial depth rather than high-volume, low-context lead generation.
                  </p>
                </div>
              </div>

              {/* Engagement Attributes (All 4 cards in 1 row in desktop view) */}
              <StaggerGroup
                staggerDelay={0.08}
                className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#FF6004]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#FE9E30] font-bold block mb-1">Model</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">Monthly Retainer + Commercial Performance</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Aligned incentives focused on validated revenue.</p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#FF6004]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#FE9E30] font-bold block mb-1">Scope</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">Strategy, RevOps, Execution or Full Commercial Pod</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Tailored to your commercial gaps.</p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#FF6004]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#FE9E30] font-bold block mb-1">Markets</span>
                      <h4 className="font-bold text-sm text-white mb-2 leading-snug">North America, UAE, Europe, India, Australia</h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">Cross-border market entry and expansion.</p>
                  </div>
                </StaggerItem>

                <StaggerItem distance={20} className="h-full">
                  <div className="p-5 rounded-[18px] bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:border-[#FF6004]/40 hover:bg-white/[0.07] transition-all duration-200">
                    <div>
                      <span className="text-xs text-[#FE9E30] font-bold block mb-1">Focus</span>
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
        className="top-level-section w-full max-w-full py-16 sm:py-24 bg-white dark:bg-[#161519]"
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                        <span className="font-bold text-[#161519] dark:text-white block">North America:</span>
                        <a href="tel:+14156886517" className="text-[#555459] dark:text-zinc-400 hover:text-[#FF6004]">
                          +1 415 688 6517
                        </a>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                        <span className="font-bold text-[#161519] dark:text-white block">UAE:</span>
                        <a href="tel:+971528770047" className="text-[#555459] dark:text-zinc-400 hover:text-[#FF6004]">
                          +971 52 877 0047
                        </a>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10">
                        <span className="font-bold text-[#161519] dark:text-white block">India:</span>
                        <a href="tel:+919884450102" className="text-[#555459] dark:text-zinc-400 hover:text-[#FF6004]">
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
