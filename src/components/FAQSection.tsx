import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight: string;
}

const faqs: FAQItem[] = [
  {
    id: 'faq-services',
    question: 'What services does SalesNego provide?',
    answer:
      'We provide end-to-end B2B sales execution: Go-To-Market (GTM) Strategy, RevOps & AI-accelerated workflows, and hands-on commercial deal execution from discovery to contract closure.',
    highlight: 'Strategy, RevOps & Deal Execution in one unified loop',
  },
  {
    id: 'faq-pricing',
    question: 'How does your pricing model work?',
    answer:
      'We operate on a predictable monthly execution retainer combined with a performance fee tied directly to validated revenue and closed deals, ensuring fully aligned incentives.',
    highlight: 'Monthly retainer + performance tied to closed revenue',
  },
  {
    id: 'faq-execution-team',
    question: 'Who actually leads our sales calls and meetings?',
    answer:
      'Senior commercial operators with 14+ years of B2B enterprise technology sales experience lead your discovery, demos, and negotiations directly—never junior reps or offshore call centers.',
    highlight: 'Experienced B2B commercial operators, not junior call farms',
  },
  {
    id: 'faq-time-to-launch',
    question: 'How quickly can SalesNego launch our commercial motion?',
    answer:
      'Most engagements launch within 2 to 3 weeks, including market research, ICP definition, messaging positioning, and CRM setup, bypassing months of hiring delays.',
    highlight: 'Rapid 2–3 week onboarding and execution launch',
  },
  {
    id: 'faq-markets-geographies',
    question: 'Which markets and regions do you cover?',
    answer:
      'We lead cross-border commercial execution across North America (US & Canada), the UAE & Middle East, Europe (UK & EU), India, and Australia.',
    highlight: 'North America, UAE, Europe, India, and Australia',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openCalendly } = useNavigation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      aria-label="Frequently Asked Questions"
      className="w-full py-16 sm:py-24 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-[#FF6004] bg-[#FF6004]/10 border border-[#FF6004]/20">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-lexend text-3xl sm:text-4xl font-normal leading-tight text-[#161519] dark:text-white mb-3">
            Common Questions &amp; Direct Answers
          </h2>
          <p className="text-sm sm:text-base text-[#555459] dark:text-zinc-400 leading-relaxed">
            Simple, transparent answers about our commercial model, execution ownership, and cross-border capabilities.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                id={`faq-card-${index}`}
                className={`rounded-[18px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F6F5F2] dark:bg-[#1C1B20] border-[#FF6004]/50 shadow-xs'
                    : 'bg-white dark:bg-[#1A191E] border-[#E5E3DC] dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] rounded-[18px] cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#FF6004]/10 text-[#FF6004] shrink-0">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-[#161519] dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#FF6004] text-white rotate-180'
                        : 'bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#555459] dark:text-zinc-300 leading-relaxed border-t border-[#E5E3DC]/60 dark:border-white/10">
                        <p className="mb-3">{faq.answer}</p>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-xs font-semibold text-[#FF6004]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004]" />
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

        {/* Quick Consultation CTA */}
        <div className="mt-8 p-5 sm:p-6 rounded-[20px] bg-[#161519] dark:bg-[#1C1B20] text-white border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF6004]/20 flex items-center justify-center text-[#FF6004] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-white">
                Have a specific question about your sales motion?
              </p>
              <p className="text-xs text-zinc-400">
                Let&apos;s evaluate your ICP, deal stages, and execution gaps directly.
              </p>
            </div>
          </div>
          <button
            type="button"
            id="faq-cta-calendly"
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6004] hover:bg-[#e05403] text-white text-xs sm:text-sm font-bold transition-all shrink-0 shadow-sm cursor-pointer"
          >
            <span>Discuss With Raja</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
