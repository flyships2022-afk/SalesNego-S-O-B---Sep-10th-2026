import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MarketSignalChart } from '../components/MarketSignalChart';

export const ServiceDetailGTM: React.FC = () => {
  const { navigate, openCalendly } = useNavigation();

  const whatWeSupport = [
    'Market and Segment Analysis',
    'ICP Definition',
    'Buyer Committee Mapping',
    'Competitive Intelligence',
    'Positioning and Messaging',
    'Buying-Trigger Research',
    'Account Prioritisation',
    'Market-Entry Planning',
  ];

  const possibleOutputs = [
    'Market Entry Brief',
    'ICP & Buyer Map',
    'Messaging Architecture',
    'Account Priority Model',
    'GTM Execution Playbook',
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section
        id="gtm-hero"
        aria-label="Service 1 Hero"
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
              SERVICE 01 — GTM STRATEGY &amp; MARKET INTELLIGENCE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#191919] dark:text-[#FFFFFF] mb-6 leading-tight">
              Know Where to Compete, Who to Target and Why They Should Care.
            </h1>
            <div className="space-y-3 text-base sm:text-lg text-[#606060] dark:text-zinc-300 leading-relaxed">
              <p className="font-bold text-[#191919] dark:text-[#FFFFFF]">
                Strong execution begins with clear commercial direction.
              </p>
              <p>
                SalesNego helps translate market evidence into ICP decisions, buyer understanding,
                positioning, account priorities and execution hypotheses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section
        id="gtm-support"
        aria-label="What We Support"
        className="w-full py-16 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF] mb-2">
              What We Support
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400">
              Comprehensive upstream clarity before outbound activity starts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {whatWeSupport.map((item) => (
              <div
                key={item}
                className="p-4 rounded-xl bg-[#F7F9FE] dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 flex items-start gap-3 shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#FF6004] dark:bg-[#FE9E30] mt-1.5 shrink-0" />
                <span className="text-sm font-bold text-[#191919] dark:text-[#FFFFFF]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Approach */}
      <section
        id="gtm-approach"
        aria-label="Commercial Approach"
        className="w-full py-16 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block">
              COMMERCIAL APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
              Signals Remain Signals. Validation Comes From Discovery.
            </h2>
            <div className="space-y-3 text-base text-[#606060] dark:text-zinc-300 leading-relaxed">
              <p>Research is used to determine where commercial attention deserves to be applied.</p>
              <p className="font-bold text-[#191919] dark:text-[#FFFFFF]">
                A signal alone is not treated as buying intent.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 mt-6 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-1">
                Our Discipline
              </span>
              <p className="text-base font-extrabold text-[#FF6004] dark:text-[#FE9E30]">
                FACT → HYPOTHESIS → DISCOVERY QUESTION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Signal Strength Trends Visualization */}
      <section
        id="gtm-signal-trends"
        aria-label="Market Signal Strength Trends"
        className="w-full py-14 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketSignalChart />
        </div>
      </section>

      {/* Possible Outputs */}
      <section
        id="gtm-outputs"
        aria-label="Possible Outputs"
        className="w-full py-16 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF] mb-2">
              Possible Outputs
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400">
              Tangible assets delivered through commercial strategy engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {possibleOutputs.map((output) => (
              <div
                key={output}
                className="p-5 rounded-xl bg-[#F7F9FE] dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 flex items-center gap-3 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FF6004] dark:text-[#FE9E30] shrink-0" />
                <span className="text-sm font-bold text-[#191919] dark:text-[#FFFFFF]">
                  {output}
                </span>
              </div>
            ))}
          </div>

          {/* Next Step Progression */}
          <div className="mt-12 pt-8 border-t border-[#E1E1E1] dark:border-zinc-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block">
                Next Step in System
              </span>
              <p className="text-base font-bold text-[#191919] dark:text-[#FFFFFF]">
                RevOps &amp; AI-Accelerated Sales
              </p>
            </div>
            <button
              onClick={() => navigate('/services/revops-ai-sales')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FF6004] bg-[#FF6004]/10 dark:bg-[#FF6004]/15 hover:bg-[#FF6004] hover:text-white rounded-lg transition-colors"
            >
              <span>See RevOps &amp; AI-Accelerated Sales</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#F7F9FE] dark:bg-[#18181B] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] dark:text-[#FFFFFF]">
            Discuss Your Market Strategy
          </h2>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#FF6004] hover:bg-[#e05403] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
          >
            <span>Discuss Your Growth Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
