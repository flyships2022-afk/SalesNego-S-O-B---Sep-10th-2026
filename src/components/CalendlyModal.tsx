import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Calendar } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const CalendlyModal: React.FC = () => {
  const { isCalendlyOpen, closeCalendly } = useNavigation();
  const modalRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = 'https://calendly.com/meeting-with-salesnego/30min';
  const calendlyEmbedUrl = `${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCalendlyOpen) {
        closeCalendly();
      }
    };

    if (isCalendlyOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCalendlyOpen, closeCalendly]);

  if (!isCalendlyOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCalendly();
      }}
    >
      <div
        ref={modalRef}
        style={{ maxWidth: '100%', overflowX: 'hidden' }}
        className="relative w-full max-w-3xl bg-white dark:bg-[#27272A] rounded-xl border border-gray-200 dark:border-zinc-700/60 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 border-b border-gray-200 dark:border-zinc-700/60 bg-gray-50 dark:bg-[#18181B]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF6004]/10 dark:bg-[#FF6004]/15 flex items-center justify-center text-[#FF6004] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 id="calendly-modal-title" className="text-sm sm:text-base font-bold text-[#191919] dark:text-[#FFFFFF]">
                Discuss Your Growth Priorities
              </h2>
              <p className="text-xs text-[#606060] dark:text-zinc-400">
                Schedule a 30-minute founder-led commercial conversation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#FF6004] hover:bg-[#FF6004]/10 rounded-md transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={closeCalendly}
              className="p-1.5 text-[#606060] hover:text-[#191919] dark:text-zinc-400 dark:hover:text-white rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content iframe wrapper */}
        <div
          className="iframe-wrapper w-full max-w-full relative bg-white dark:bg-[#27272A] h-[580px] max-h-[75vh] overflow-x-hidden overflow-y-auto"
          style={{ maxWidth: '100%', height: 'auto', minHeight: '480px', maxHeight: '75vh', overflowX: 'hidden' }}
        >
          <iframe
            src={calendlyEmbedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with SalesNego"
            className="w-full max-w-full h-full min-h-[480px] border-0"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};
