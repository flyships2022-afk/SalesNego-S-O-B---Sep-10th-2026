import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight, Cpu, UserCheck, CheckCircle2 } from 'lucide-react';

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
          <div className="max-w-3xl">
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

          {/* Next Step Progression */}
          <div className="mt-12 pt-8 border-t border-[#E1E1E1] dark:border-zinc-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block">
                Next Step in System
              </span>
              <p className="text-base font-bold text-[#191919] dark:text-[#FFFFFF]">
                End-to-End Commercial Execution
              </p>
            </div>
            <button
              onClick={() => navigate('/services/commercial-execution')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FF6004] bg-[#FF6004]/10 dark:bg-[#FF6004]/15 hover:bg-[#FF6004] hover:text-white rounded-lg transition-colors"
            >
              <span>See End-to-End Commercial Execution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#F7F9FE] dark:bg-[#18181B] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] dark:text-[#FFFFFF]">
            Strengthen Your Revenue Operations
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
