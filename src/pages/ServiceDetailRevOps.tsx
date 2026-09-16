import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, ArrowRight, ArrowUpRight, Cpu, UserCheck, CheckCircle2 } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';
import { SEO } from '../components/SEO';

export const ServiceDetailRevOps: React.FC = () => {
  const { navigate, openCalendly } = useNavigation();

  const whatWeSupport = [
    'CRM & Pipeline Architecture',
    'Qualification Frameworks',
    'Account & Contact Data',
    'Account Scoring',
    'Research & Enrichment',
    'Trigger Monitoring',
    'AI-Assisted Preparation',
    'Workflow Automation',
    'CRM Capture',
    'Pipeline Reporting',
    'Win/Loss Learning',
  ];

  const aiRole = [
    'Research',
    'Enrichment',
    'Contact Discovery',
    'Trigger Monitoring',
    'Preparation',
    'Meeting Summaries',
    'CRM Capture',
    'Follow-Up Preparation',
    'Pattern Analysis',
  ];

  const humanRole = [
    'Prioritisation',
    'Discovery',
    'Qualification',
    'Solution Alignment',
    'Business Cases',
    'Negotiation',
    'Closing',
    'Account Relationships',
  ];

  const possibleOutputs = [
    'CRM & Pipeline Architecture',
    'Qualification Framework',
    'Workflow Design',
    'Automation Map',
    'Revenue Dashboard',
  ];

  return (
    <div className="w-full flex flex-col">
      <SEO path="/services/revops-ai-sales" />
      {/* Hero */}
      <section
        id="revops-hero"
        aria-label="Service 2 Hero"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-3">
                SERVICE 02 — REVOPS &amp; AI-ACCELERATED SALES
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#191919] dark:text-[#FFFFFF] mb-6 leading-tight">
                Build the Revenue Infrastructure Behind Better Commercial Execution.
              </h1>
              <div className="space-y-3 text-base sm:text-lg text-[#606060] dark:text-zinc-300 leading-relaxed">
                <p className="font-bold text-[#191919] dark:text-[#FFFFFF]">
                  Sales technology is valuable when it improves commercial execution rather than
                  creating more operational complexity.
                </p>
                <p>
                  SalesNego connects CRM, data, qualification, workflows, automation and AI-supported
                  intelligence around the buying process.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#E1E1E1] dark:border-white/10 shadow-2xl bg-zinc-900 group">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-zinc-900">
                  <LazyImage
                    src="/revops-ai-sales-dashboard.jpg"
                    alt="Modern high-tech B2B revenue operations dashboard showing pipeline visualization, CRM workflows, automated triggers, and AI qualification metrics"
                    referrerPolicy="no-referrer"
                    containerClassName="w-full h-full absolute inset-0"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3.5 sm:p-4 bg-black/90 dark:bg-[#1C1B20] border-t border-white/10 text-white flex items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-[#FF6004] animate-pulse shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-white truncate">
                        RevOps &amp; AI Intelligence
                      </p>
                      <p className="text-[11px] sm:text-xs text-zinc-300 truncate">
                        CRM Pipelines · Trigger Alerts · AI Workflows
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FF6004]/25 border border-[#FF6004]/40 text-[#FE9E30] shrink-0">
                    Automated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section
        id="revops-support"
        aria-label="What We Support"
        className="w-full py-16 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF] mb-2">
              What We Support
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400">
              Commercial operations architected for clean execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* AI's Role vs Human Role */}
      <section
        id="revops-roles"
        aria-label="AI and Human Roles"
        className="w-full py-16 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-2">
              DIVISION OF RESPONSIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF]">
              Accelerating Workflows While Preserving Human Commercial Judgment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI's Role */}
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#FF6004]/10 dark:bg-[#FF6004]/15 text-[#FF6004] dark:text-[#FE9E30]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#191919] dark:text-[#FFFFFF]">
                    AI's Role
                  </h3>
                  <p className="text-xs text-[#606060] dark:text-zinc-400">AI can accelerate:</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-[#606060] dark:text-zinc-300">
                {aiRole.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6004] dark:bg-[#FE9E30]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Human Role */}
            <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-[#27272A] border border-[#E1E1E1] dark:border-zinc-700/60 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#FF6004]/10 dark:bg-[#FF6004]/15 text-[#FF6004] dark:text-[#FE9E30]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#191919] dark:text-[#FFFFFF]">
                    Human Role
                  </h3>
                  <p className="text-xs text-[#606060] dark:text-zinc-400">
                    Commercial judgment remains human-led across:
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-[#606060] dark:text-zinc-300">
                {humanRole.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6004] dark:bg-[#FE9E30]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Possible Outputs */}
      <section
        id="revops-outputs"
        aria-label="Possible Outputs"
        className="w-full py-16 border-b border-[#E1E1E1] dark:border-zinc-700/60 bg-white dark:bg-[#18181B]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] dark:text-[#FFFFFF] mb-2">
              Possible Outputs
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400">
              Operating systems and frameworks configured for your team.
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

          {/* System Progression: Previous & Next Steps */}
          <div className="mt-12 pt-8 border-t border-[#E1E1E1] dark:border-zinc-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/services/gtm-strategy-market-intelligence')}
              className="group w-full sm:w-auto inline-flex items-center gap-3.5 px-5 py-3 rounded-xl border border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#27272A] hover:border-[#FF6004] dark:hover:border-[#FF6004] hover:bg-white dark:hover:bg-[#1E1E24] shadow-xs transition-all duration-200 cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 group-hover:bg-[#FF6004] flex items-center justify-center text-[#191919] dark:text-white group-hover:text-white transition-colors shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block group-hover:text-[#FF6004] transition-colors">
                  Previous Step in System
                </span>
                <p className="text-sm font-bold text-[#191919] dark:text-[#FFFFFF]">
                  GTM Strategy &amp; Intelligence
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate('/services/commercial-execution')}
              className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-end gap-3.5 px-5 py-3 rounded-xl border border-[#E1E1E1] dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#27272A] hover:border-[#FF6004] dark:hover:border-[#FF6004] hover:bg-white dark:hover:bg-[#1E1E24] shadow-xs transition-all duration-200 cursor-pointer text-left sm:text-right"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block group-hover:text-[#FF6004] transition-colors">
                  Next Step in System
                </span>
                <p className="text-sm font-bold text-[#191919] dark:text-[#FFFFFF]">
                  Commercial Execution
                </p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 group-hover:bg-[#FF6004] flex items-center justify-center text-[#191919] dark:text-white group-hover:text-white transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#F7F9FE] dark:bg-[#18181B] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <p className="text-base text-[#606060] dark:text-zinc-300">
            Explore how automated workflows, CRM discipline, and AI research accelerate your commercial engine.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#FF6004] hover:bg-[#e05403] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] cursor-pointer"
          >
            <span>Strengthen Your Revenue Operations</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
