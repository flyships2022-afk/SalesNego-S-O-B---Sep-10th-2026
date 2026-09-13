import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Building2, Layers, Calendar } from 'lucide-react';
import { ClientLogoItem } from '../data/clientLogosData';
import { LazyImage } from './LazyImage';
import { useNavigation } from '../context/NavigationContext';

interface CaseStudyModalProps {
  client: ClientLogoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ client, isOpen, onClose }) => {
  const { openCalendly, navigate } = useNavigation();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !client) return null;

  const { caseStudy } = client;

  const handleDiscuss = () => {
    onClose();
    openCalendly();
  };

  const handleNavigateCaseStudies = () => {
    onClose();
    navigate('/case-studies');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/10 shadow-2xl transition-all duration-300 text-[#161519] dark:text-white my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Subtle Brand Accent Gradient Bar at top */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6004] via-[#FE9E30] to-[#103CE7] shrink-0" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E5E3DC] dark:border-white/10 shrink-0 bg-[#F6F5F2]/50 dark:bg-[#1C1B20]/50 backdrop-blur-xs">
          <div className="flex items-center gap-4">
            {/* Client Logo Card */}
            <div className="w-28 sm:w-32 h-14 shrink-0 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#100F12] border border-[#E5E3DC] dark:border-white/10 shadow-2xs">
              {client.darkImage ? (
                <>
                  <LazyImage
                    src={client.image}
                    fallbackSrc={client.fallbackUrl}
                    alt={client.alt}
                    containerClassName="flex items-center justify-center max-h-8 max-w-[100px] dark:hidden"
                    className="max-h-8 max-w-[100px] object-contain"
                  />
                  <LazyImage
                    src={client.darkImage}
                    fallbackSrc={client.darkImage}
                    alt={client.alt}
                    containerClassName="hidden dark:flex items-center justify-center max-h-8 max-w-[100px]"
                    className="max-h-8 max-w-[100px] object-contain opacity-95"
                  />
                </>
              ) : (
                <LazyImage
                  src={client.image}
                  fallbackSrc={client.fallbackUrl}
                  alt={client.alt}
                  containerClassName="flex items-center justify-center max-h-8 max-w-[100px]"
                  className="max-h-8 max-w-[100px] object-contain dark:[filter:brightness(0)_invert(1)] dark:opacity-90"
                />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6004]">
                  Case Study Spotlight
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#103CE7]/10 text-[#103CE7] dark:text-[#6083FF] border border-[#103CE7]/20">
                  {caseStudy.badge}
                </span>
              </div>
              <h2 id="case-study-modal-title" className="font-lexend text-xl sm:text-2xl font-bold leading-tight">
                {client.name}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Headline & Summary */}
          <div>
            <h3 className="font-lexend text-lg sm:text-xl font-semibold leading-snug text-[#161519] dark:text-white mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#FF6004]" />
                  <span>{metric.label}</span>
                </div>
                <span className="font-lexend text-xl sm:text-2xl font-bold text-[#FF6004] dark:text-[#FE9E30]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Industry Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Industries:
            </span>
            {client.industries.map((ind) => (
              <span
                key={ind}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200"
              >
                {ind}
              </span>
            ))}
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200">
              {caseStudy.domain}
            </span>
          </div>

          {/* The Commercial Challenge */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
              The Commercial Challenge
            </h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
              {caseStudy.challenge}
            </p>
          </div>

          {/* SalesNego Commercial Intervention */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#FF6004]">
              SalesNego Commercial Intervention
            </h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed p-3.5 rounded-xl bg-[#FF6004]/5 border border-[#FF6004]/20">
              {caseStudy.intervention}
            </p>
          </div>

          {/* Key Commercial Outcomes */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
              Selected Commercial Outcomes
            </h4>
            <div className="space-y-2">
              {caseStudy.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-6 border-t border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2]/50 dark:bg-[#1C1B20]/50 shrink-0">
          <button
            type="button"
            onClick={handleNavigateCaseStudies}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-[#FF6004] transition-all cursor-pointer"
          >
            <span>Explore All Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleDiscuss}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF6004] to-[#FE9E30] hover:opacity-95 shadow-md shadow-[#FF6004]/20 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Discuss Similar Priorities</span>
          </button>
        </div>
      </div>
    </div>
  );
};
