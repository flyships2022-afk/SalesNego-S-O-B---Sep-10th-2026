import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const { openCalendly } = useNavigation();

  // Anonymized Track Record by Sector/Domain - client company names removed per explicit user requirement
  const founderTrackRecord = [
    {
      domain: 'Laboratory Digitisation & Life Sciences SaaS',
      category: 'SaaS / Life Sciences',
      description:
        'SaaS and laboratory digitisation experience spanning discovery, workflow mapping, solution positioning, implementation coordination, user adoption and multi-year account growth.',
    },
    {
      domain: 'Enterprise Technology & IT Services Platform',
      category: 'Enterprise Technology & Services',
      description:
        'Enterprise technology and IT-services selling involving complex technical-commercial alignment, RFP qualification, statement-of-work scoping, proposal negotiation and regional expansion.',
    },
    {
      domain: 'AI Scoping & Custom Software Development',
      category: 'AI & Custom Software',
      description:
        'International business development across artificial intelligence, enterprise SaaS, digital products and custom software, including technical scoping, proposals, negotiation and closure.',
    },
    {
      domain: 'Strategic Commercial Advisory & Expansion',
      category: 'Enterprise Advisory',
      description:
        'Commercial development and advisory engagements focused on authoritative commercial execution, cross-border market entry and disciplined pipeline qualification.',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section
        id="case-studies-hero"
        aria-label="Case Studies Hero"
        className="relative overflow-hidden w-full pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#18181B]"
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
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-3">
              COMMERCIAL EXPERIENCE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#191919] dark:text-[#FFFFFF] mb-6 leading-tight">
              Selected Commercial &amp; Technology Experience.
            </h1>
            <p className="text-base sm:text-lg text-[#606060] dark:text-zinc-300 leading-relaxed">
              SalesNego combines founder commercial track record with deep cross-border experience across SaaS, AI,
              enterprise technology and technical services.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Commercial Track Record (Anonymized: Client Names Removed) */}
      <section
        id="founder-track-record"
        aria-label="Founder Commercial Track Record"
        className="w-full py-16 md:py-20 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-2">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
              Founder Commercial Track Record
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400 mt-1">
              Verified commercial engagements across key technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founderTrackRecord.map((item) => (
              <div
                key={item.domain}
                className="p-6 sm:p-7 rounded-xl bg-[#F7F9FE] dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 hover:border-[#FF6004]/50 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-[#191919] dark:text-[#FFFFFF]">
                      {item.domain}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FF6004]/10 dark:bg-[#FF6004]/15 text-[#FF6004] dark:text-[#FE9E30] shrink-0 self-start sm:self-auto">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-[#606060] dark:text-zinc-300 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-white dark:bg-[#18181B] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
            Discuss Your Commercial Priorities
          </h2>
          <p className="text-base text-[#606060] dark:text-zinc-300">
            Schedule a founder-led conversation to review relevance to your target market and sales cycle.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#FF6004] hover:bg-[#e05403] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
          >
            <span>Discuss Growth Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
