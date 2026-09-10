import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, HelpCircle, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';
import { LazyImage } from './LazyImage';

export interface FAQItem {
  id: string;
  category: 'All' | 'Model' | 'Pricing' | 'Execution' | 'Coverage';
  question: string;
  answer: string;
  highlight: string;
}

const faqs: FAQItem[] = [
  {
    id: 'faq-differentiation',
    category: 'Model',
    question: 'How does SalesNego differ from outsourced SDR agencies or lead-gen shops?',
    answer:
      'Traditional lead-gen agencies focus strictly on vanity appointment volume—booking cold meetings and walking away. SalesNego takes complete commercial ownership from market intelligence and ICP mapping through discovery calls, technical qualification, proposal architecture, contract negotiations, and deal closure.',
    highlight: 'Full-cycle deal execution from discovery to closed revenue, not cold handoffs',
  },
  {
    id: 'faq-operator-experience',
    category: 'Execution',
    question: 'Who actually leads our customer discovery, demos, and sales calls?',
    answer:
      'Senior commercial operators with 14+ years of cross-border B2B enterprise technology sales experience personally lead every client meeting, demo, and commercial negotiation. We never delegate client representation to junior reps, call centers, or inexperienced script-readers.',
    highlight: '14+ years B2B enterprise commercial leadership on every call',
  },
  {
    id: 'faq-pricing-model',
    category: 'Pricing',
    question: 'How does your compensation structure and performance alignment work?',
    answer:
      'We align our commercial incentives directly with your business growth. Engagements operate on a transparent monthly execution retainer paired with a performance fee tied to validated milestone delivery and closed contract revenue.',
    highlight: 'Predictable monthly retainer + success fees tied to closed revenue',
  },
  {
    id: 'faq-speed-to-launch',
    category: 'Execution',
    question: 'How quickly can SalesNego onboard and launch our commercial motion?',
    answer:
      'Typical engagements launch within 2 to 3 weeks. During this rapid onboarding phase, we diagnose positioning, calibrate your CRM and RevOps pipeline, configure AI intelligence scrapers, and initiate verified executive outreach without recruiting delays.',
    highlight: 'Live commercial execution active in 2 to 3 weeks',
  },
  {
    id: 'faq-global-regions',
    category: 'Coverage',
    question: 'Which geographic regions, jurisdictions, and time zones do you cover?',
    answer:
      'Our team actively conducts commercial operations across North America (US & Canada), the UAE & Middle East (GCC), the UK & Europe, India, and Australia, providing seamless regional alignment, local business-hour coverage, and cross-border contracting support.',
    highlight: 'North America, UAE & Middle East, UK/Europe, India, and Australia',
  },
  {
    id: 'faq-ai-and-human-judgment',
    category: 'Model',
    question: 'How do you balance AI automation with human commercial judgment in enterprise sales?',
    answer:
      'AI is deployed where speed and scale matter most: background account research, trigger tracking, tech-stack enrichment, and CRM hygiene. High-stakes commercial judgment—discovery questioning, enterprise objection handling, stakeholder consensus, and final contract negotiation—remains 100% human-led.',
    highlight: 'AI-accelerated velocity paired with authoritative human commercial judgment',
  },
];

const categories = ['All', 'Model', 'Pricing', 'Execution', 'Coverage'] as const;

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const { openCalendly } = useNavigation();

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section
      id="faq-section"
      aria-label="Frequently Asked Questions"
      style={{ maxWidth: '100%', boxSizing: 'border-box' }}
      className="top-level-section w-full max-w-full py-12 sm:py-16 lg:py-20 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Single Eyebrow Badge, Clean H2, and Focused Subhead */}
        <ScrollReveal direction="up" distance={16} className="mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-[#FF6004] bg-[#FF6004]/10 border border-[#FF6004]/20">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#161519] dark:text-white mb-2">
            Answers to Common Questions
          </h2>
          <p className="text-sm sm:text-base text-[#555459] dark:text-zinc-400 leading-relaxed max-w-2xl">
            Clear, transparent answers about our commercial model, execution ownership, and cross-border capabilities.
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive Layout: Left Image Card + Right FAQ Questions Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Left Column: Optimized Commercial Discussion Image Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] xl:h-[500px] rounded-2xl overflow-hidden border border-[#E5E3DC] dark:border-white/10 shadow-sm bg-zinc-100 dark:bg-[#1C1B20] group">
              <LazyImage
                src="/faq-commercial-team.jpg"
                alt="SalesNego commercial team discussing enterprise pipeline growth, qualified leads, and revenue impact in an executive meeting"
                referrerPolicy="no-referrer"
                containerClassName="w-full h-full absolute inset-0"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient Vignette for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Bottom Card Over Image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-black/65 dark:bg-[#0E1015]/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-[#FF6004] animate-pulse shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">
                      Commercial Strategy &amp; Pipeline Review
                    </p>
                    <p className="text-[11px] text-zinc-300 truncate">
                      Senior commercial operators leading discovery &amp; negotiations
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FF6004]/25 border border-[#FF6004]/40 text-white shrink-0 hidden sm:inline-block">
                  Live Alignment
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Category Filters & Hover-Activated Accordion Questions */}
          <div className="lg:col-span-7 w-full flex flex-col justify-start">
            {/* Space-Efficient Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-4 pb-2 border-b border-[#E5E3DC]/60 dark:border-white/5">
              <span className="text-xs font-bold text-[#555459] dark:text-zinc-400 mr-1 hidden sm:inline-flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#FF6004]" />
                <span>Filter:</span>
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  id={`faq-filter-${category.toLowerCase()}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenId(null);
                  }}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-150 cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#FF6004] text-white shadow-xs'
                      : 'bg-black/5 dark:bg-white/5 text-[#555459] dark:text-zinc-300 hover:bg-black/10 dark:hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Compact Accordion Question Cards List */}
            <div className="space-y-2.5">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    id={`faq-card-${faq.id}`}
                    onMouseEnter={() => setOpenId(faq.id)}
                    onMouseLeave={() => setOpenId(null)}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-[#F6F5F2] dark:bg-[#1C1B20] border-[#FF6004]/50 shadow-xs'
                        : 'bg-white dark:bg-[#1A191E] border-[#E5E3DC] dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      id={`faq-btn-${faq.id}`}
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full text-left px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] rounded-2xl cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0" />
                        <span className="text-sm sm:text-base font-semibold text-[#161519] dark:text-white leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#555459] dark:text-zinc-400">
                          {faq.category}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                            isOpen
                              ? 'bg-[#FF6004] text-white rotate-180'
                              : 'bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400'
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-3.5 pt-1 text-xs sm:text-sm text-[#555459] dark:text-zinc-300 leading-relaxed border-t border-[#E5E3DC]/60 dark:border-white/10">
                            <p className="mb-2.5">{faq.answer}</p>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-xs font-semibold text-[#FF6004]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0" />
                              <span>{faq.highlight}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Low-Profile Inline Consultation Prompt */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FF6004]/15 flex items-center justify-center text-[#FF6004] shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#161519] dark:text-white">
                Have a specific question about your commercial motion?
              </p>
              <p className="text-[11px] sm:text-xs text-[#555459] dark:text-zinc-400">
                Let&apos;s evaluate your ICP, pipeline bottlenecks, and market hypotheses directly.
              </p>
            </div>
          </div>
          <button
            type="button"
            id="faq-cta-calendly"
            onClick={openCalendly}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF6004] hover:bg-[#E05300] active:scale-98 text-white text-xs font-bold transition-all shrink-0 shadow-xs cursor-pointer"
          >
            <span>Discuss With Raja</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
