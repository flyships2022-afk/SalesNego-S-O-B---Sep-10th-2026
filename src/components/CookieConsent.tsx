import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const COOKIE_CONSENT_KEY = 'salesnego_cookie_consent';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!savedConsent) {
        // Small delay for smooth, non-intrusive entrance after page load
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is disabled/restricted in iframe
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    } catch {}
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="region"
          aria-label="Cookie preferences"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 max-w-[calc(100vw-2rem)] sm:max-w-md p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-2xl shadow-black/10 backdrop-blur-md"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FF6004]/10 dark:bg-[#FF6004]/15 flex items-center justify-center text-[#FF6004] shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-sm font-bold text-[#161519] dark:text-white">
                  Cookie Preferences
                </h3>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 -mr-1 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close and decline cookies"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#555459] dark:text-zinc-300 leading-relaxed mb-3.5">
                We use cookies to improve your browsing experience, analyze site performance, and assist with commercial inquiries. Read our{' '}
                <button
                  type="button"
                  onClick={() => navigate('/privacy')}
                  className="text-[#FF6004] hover:underline font-semibold cursor-pointer"
                >
                  Privacy Policy
                </button>
                .
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#FF6004] hover:bg-[#E05300] active:scale-98 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-[#161519] dark:text-zinc-200 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 active:scale-98 rounded-xl transition-all cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
