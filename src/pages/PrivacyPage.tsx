import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ShieldCheck, Mail } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section
        id="privacy-hero"
        aria-label="Privacy Policy Header"
        className="relative overflow-hidden w-full pt-12 pb-14 md:pt-16 md:pb-20 border-b border-[#E3E7EB] dark:border-zinc-700/60 bg-[#FAFBFC] dark:bg-[#18181B]"
      >
        {/* Dynamic Faded Grid Matrix Overlay - Enhanced Light Mode Visibility */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 dark:hidden bg-[linear-gradient(to_right,rgba(255,96,4,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,96,4,0.22)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        />

        {/* Light-colored Grid Matrix Overlay - Dark Mode Only */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-3">
              LEGAL &amp; COMPLIANCE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#242A31] dark:text-[#FFFFFF] mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-[#45515E] dark:text-zinc-300">
              Last updated: September 2026. SalesNego respects commercial confidentiality and data
              integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        id="privacy-content"
        aria-label="Privacy Policy Content"
        className="w-full py-16 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#45515E] dark:text-zinc-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-[#FAFBFC] dark:bg-[#27272A] border border-[#E3E7EB] dark:border-zinc-700/60 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#FF6004] dark:text-[#FE9E30] shrink-0" />
            <p className="text-xs font-semibold text-[#242A31] dark:text-[#FFFFFF]">
              SalesNego does not sell, rent, or trade your commercial inquiries or contact data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#242A31] dark:text-[#FFFFFF] mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our contact form or schedule a discussion via
              Calendly, we collect basic business contact details including your name, work email,
              company name, target market, product context, and any message content you provide.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#242A31] dark:text-[#FFFFFF] mb-2">
              2. How We Use Information
            </h2>
            <p>
              Information submitted is used solely to evaluate commercial fit, prepare for
              pre-engagement discovery conversations, and communicate directly regarding SalesNego
              commercial execution services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#242A31] dark:text-[#FFFFFF] mb-2">
              3. Commercial Confidentiality
            </h2>
            <p>
              We treat all commercial discussions, go-to-market hypotheses, and sales cycle
              information with strict commercial confidence. Information shared with SalesNego will
              not be disclosed to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#242A31] dark:text-[#FFFFFF] mb-2">
              4. Service Providers
            </h2>
            <p>
              We utilize trusted infrastructure providers to facilitate communication: Formspree
              for contact form transmission and Calendly for meeting scheduling. These services
              process data in accordance with their respective security and privacy standards.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#242A31] dark:text-[#FFFFFF] mb-2">
              5. Contact Regarding Privacy
            </h2>
            <p>
              If you have questions about our privacy practices or wish to request removal of your
              contact details, please contact us at:
            </p>
            <div className="pt-2">
              <a
                href="mailto:sales@salesnego.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6004] dark:text-[#FE9E30] hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>sales@salesnego.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
