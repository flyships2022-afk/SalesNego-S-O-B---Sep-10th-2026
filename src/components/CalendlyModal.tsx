import React, { useEffect, useRef, useState, useMemo } from 'react';
import { X, ExternalLink, ShieldCheck, Clock, Video, Sparkles, RefreshCw } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';

export const CalendlyModal: React.FC = () => {
  const { isCalendlyOpen, closeCalendly } = useNavigation();
  const { theme } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);

  const [isPreloaded, setIsPreloaded] = useState<boolean>(true);
  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);

  const isDark = theme === 'dark';
  const calendlyUrl = 'https://calendly.com/meeting-with-salesnego/30min';

  // Dynamic theme-matched Calendly embed URL with branded colors
  const calendlyEmbedUrl = useMemo(() => {
    const params = new URLSearchParams({
      hide_landing_page_details: '1',
      hide_gdpr_banner: '1',
      primary_color: 'ff6004',
      background_color: isDark ? '0a0e1a' : 'ffffff',
      text_color: isDark ? 'ffffff' : '0f172a',
    });
    return `${calendlyUrl}?${params.toString()}`;
  }, [calendlyUrl, isDark]);

  // Keyboard navigation & body scroll lock
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
      aria-hidden={!isCalendlyOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-250 ${
        isCalendlyOpen
          ? 'opacity-100 visible pointer-events-auto bg-black/80 backdrop-blur-md'
          : 'opacity-0 invisible pointer-events-none bg-transparent'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCalendly();
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-4xl h-[720px] max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform ${
          isDark
            ? 'bg-[#0A0E1A] text-white border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(255,96,4,0.08)]'
            : 'bg-white text-slate-900 border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.2)]'
        } ${
          isCalendlyOpen
            ? 'scale-100 translate-y-0 opacity-100'
            : 'scale-95 translate-y-3 opacity-0'
        }`}
      >
        {/* Ambient Top Glow in Dark Mode */}
        {isDark && (
          <div className="absolute top-0 right-1/4 w-96 h-32 bg-gradient-to-b from-[#FF6004]/10 to-transparent blur-3xl pointer-events-none" />
        )}

        {/* Modal Header Bar */}
        <div
          className={`flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 border-b shrink-0 z-10 ${
            isDark
              ? 'border-white/10 bg-[#0A0E1A]/95 backdrop-blur-md'
              : 'border-slate-200/80 bg-slate-50/90 backdrop-blur-md'
          }`}
        >
          {/* Title & Badge */}
          <div className="flex items-center gap-3">
            {/* Original SalesNego Circle Logo with crisp white background */}
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200/90 dark:border-white/15 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                <circle cx="256" cy="256" r="256" fill="#FFFFFF" />
                <g transform="translate(256, 256) scale(0.72) translate(-256, -256)">
                  <path
                    d="M 85 94 L 247 256 L 85 418"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="96"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 265 94 L 427 256 L 265 418"
                    fill="none"
                    stroke="#FF6004"
                    strokeWidth="96"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2
                  id="calendly-modal-title"
                  className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white"
                >
                  Discuss Your Priorities
                </h2>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Real-Time Availability
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-2 mt-0.5">
                <span>30-min Founder-Led Commercial Review</span>
                <span className="text-slate-300 dark:text-zinc-600">•</span>
                <span className="inline-flex items-center gap-1">
                  <Video className="w-3 h-3 text-[#FF6004]" /> Video Meeting
                </span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                  : 'text-slate-700 hover:text-[#FF6004] bg-white hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="hidden sm:inline">Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={closeCalendly}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10'
                  : 'text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
              }`}
              aria-label="Close scheduling window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content iframe wrapper */}
        <div
          className={`relative flex-1 w-full h-full min-h-[500px] overflow-hidden ${
            isDark ? 'bg-[#0A0E1A]' : 'bg-white'
          }`}
        >
          {/* Skeleton / Fast Loader State (visible while iframe is downloading or initialising) */}
          {!isIframeLoaded && (
            <div
              className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
                isDark ? 'bg-[#0A0E1A]' : 'bg-white'
              }`}
            >
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-white border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-md overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8">
                    <circle cx="256" cy="256" r="256" fill="#FFFFFF" />
                    <g transform="translate(256, 256) scale(0.72) translate(-256, -256)">
                      <path
                        d="M 85 94 L 247 256 L 85 418"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="96"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 265 94 L 427 256 L 265 418"
                        fill="none"
                        stroke="#FF6004"
                        strokeWidth="96"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="absolute -inset-1 rounded-full border-2 border-[#FF6004]/30 animate-ping pointer-events-none" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Connecting to Live Calendar
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs">
                Synchronizing available 30-minute founder-led consultation slots...
              </p>
              <div className="w-48 h-1.5 bg-slate-200 dark:bg-zinc-800 rounded-full mt-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#FF6004] to-[#FE9E30] animate-pulse rounded-full" />
              </div>
            </div>
          )}

          {/* Persistent Preloaded Calendly Iframe */}
          {isPreloaded && (
            <iframe
              src={calendlyEmbedUrl}
              onLoad={() => setIsIframeLoaded(true)}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a commercial meeting with SalesNego"
              className={`w-full h-full border-0 transition-opacity duration-300 ${
                isIframeLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              allow="camera; microphone; autoplay; fullscreen"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '520px',
                colorScheme: isDark ? 'dark' : 'light',
              }}
            />
          )}
        </div>

        {/* Reassurance Footer Bar */}
        <div
          className={`px-4 py-2.5 sm:px-6 sm:py-3 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs shrink-0 ${
            isDark
              ? 'border-white/10 bg-[#070B14] text-zinc-400'
              : 'border-slate-100 bg-slate-50 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Strict NDA Confidentiality</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6004]" />
              <span>Direct Commercial Leadership</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-zinc-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>No Prior Deck or Prep Needed</span>
            </span>
          </div>

          <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 dark:text-zinc-500">
            Auto-detects your local timezone
          </div>
        </div>
      </div>
    </div>
  );
};
