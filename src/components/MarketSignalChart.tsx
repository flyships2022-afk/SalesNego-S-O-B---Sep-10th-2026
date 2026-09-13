import React, { useState } from 'react';
import { Search, Lightbulb, HelpCircle, CheckCircle2, ArrowRight, ShieldCheck, Compass, Target } from 'lucide-react';

interface StageDetail {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  inputs: string[];
  output: string;
  disciplineRule: string;
}

const INTELLIGENCE_STAGES: StageDetail[] = [
  {
    id: 'evidence',
    stageNumber: '01',
    title: 'Market Evidence',
    subtitle: 'Observable Commercial Signals',
    icon: Search,
    description:
      'Identify observable corporate actions such as leadership transitions, tech migrations, funding rounds, and regulatory shifts across target accounts.',
    inputs: [
      'C-Suite & Executive Appointments',
      'Technology Stack Shifts',
      'Regulatory & Compliance Deadlines',
      'Public Procurement & RFP Notices',
    ],
    output: 'Structured Account Signal Dossier',
    disciplineRule: 'Signals indicate where to look—not that buying intent already exists.',
  },
  {
    id: 'hypothesis',
    stageNumber: '02',
    title: 'Commercial Hypothesis',
    subtitle: 'Account-Specific Problem Thesis',
    icon: Lightbulb,
    description:
      'Translate raw account signals into a clear commercial thesis regarding operational friction, technical debt, or strategic growth objectives.',
    inputs: [
      'Specific Workflow Bottlenecks',
      'Cost or Risk Implications',
      'Strategic Priority Alignment',
      'Stakeholder Impact Hypotheses',
    ],
    output: 'Executive Problem Thesis',
    disciplineRule: 'A hypothesis is an assumption to test, not a pitch to force.',
  },
  {
    id: 'discovery',
    stageNumber: '03',
    title: 'Discovery Question',
    subtitle: 'Calibrated Diagnostic Inquiry',
    icon: HelpCircle,
    description:
      'Frame consultative, executive-level questions designed to uncover whether the hypothesized challenge matches the prospect’s current internal agenda.',
    inputs: [
      'Problem-Validation Inquiries',
      'Priority Calibration Questions',
      'Current State vs Desired State',
      'Decision Authority & Timing',
    ],
    output: 'Structured Diagnostic Framework',
    disciplineRule: 'Senior discovery creates clarity for the buyer, not high-pressure pitching.',
  },
  {
    id: 'validation',
    stageNumber: '04',
    title: 'Customer Validation',
    subtitle: 'Confirmed Commercial Direction',
    icon: CheckCircle2,
    description:
      'Confirm genuine buyer intent, timing, stakeholders, and evaluation criteria before advancing pipeline opportunities into commercial negotiation.',
    inputs: [
      'Validated Pain & Business Case',
      'Identified Economic Buyer',
      'Agreed Evaluation Criteria',
      'Mutual Action Plan Scope',
    ],
    output: 'Qualified Commercial Engagement',
    disciplineRule: 'True validation protects time and pipeline integrity for both sides.',
  },
];

export const MarketSignalChart: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('evidence');

  const activeStage = INTELLIGENCE_STAGES.find((s) => s.id === activeStageId) || INTELLIGENCE_STAGES[0];

  return (
    <div className="w-full bg-[#0A192F] dark:bg-[#1E1E24] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#1E3A5F] dark:border-white/10 text-white shadow-xl transition-all">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6004]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#FE9E30]">
              Commercial Intelligence Architecture
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Market Evidence to Validated Opportunity
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-300 mt-1 max-w-2xl">
            A disciplined, non-speculative workflow translating external signals into verified executive conversations.
          </p>
        </div>

        {/* Philosophy Badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#FF6004] shrink-0" />
          <span className="font-semibold text-white">Signals Remain Signals · Validation Comes From Discovery</span>
        </div>
      </div>

      {/* 4-Step Progression Pipeline Visual */}
      <div className="mt-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {INTELLIGENCE_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative ${
                  isActive
                    ? 'bg-white/10 border-[#FF6004] shadow-[0_0_20px_rgba(255,96,4,0.15)] ring-1 ring-[#FF6004]'
                    : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#FF6004] px-2 py-0.5 rounded bg-[#FF6004]/10 border border-[#FF6004]/20">
                      STEP {stage.stageNumber}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF6004]' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-300 dark:text-zinc-400 line-clamp-2">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Subtext indicator */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className={isActive ? 'text-[#FE9E30] font-semibold' : 'text-slate-400'}>
                    {isActive ? 'Active View' : 'Inspect Step'}
                  </span>
                  {idx < INTELLIGENCE_STAGES.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Card for Active Stage */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#FF6004]">
              <Compass className="w-4 h-4" />
              <span>Step {activeStage.stageNumber} Deep-Dive: {activeStage.title}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {activeStage.description}
            </p>

            {/* Core Discipline Rule */}
            <div className="p-3.5 rounded-lg bg-black/30 border border-[#FF6004]/30 flex items-start gap-2.5">
              <Target className="w-4 h-4 text-[#FF6004] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#FE9E30] block">
                  Core Discipline
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  {activeStage.disciplineRule}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 bg-black/20 p-4 sm:p-5 rounded-xl border border-white/10">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                Key Analytical Inputs
              </span>
              <ul className="space-y-2">
                {activeStage.inputs.map((input, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0" />
                    <span>{input}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10">
              <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Delivered Output
              </span>
              <span className="text-xs sm:text-sm font-bold text-white text-[#FE9E30]">
                {activeStage.output}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Concrete Translation Example Row */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">Execution Chain:</span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">Fact</span>
          <span className="text-slate-400">&rarr;</span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">Hypothesis</span>
          <span className="text-slate-400">&rarr;</span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">Discovery Question</span>
          <span className="text-slate-400">&rarr;</span>
          <span className="px-2 py-0.5 rounded bg-[#FF6004]/20 border border-[#FF6004]/40 text-[#FE9E30] font-bold">
            Customer Validation
          </span>
        </div>
        <span className="text-[11px] text-slate-400">Evidence-led commercial qualification</span>
      </div>
    </div>
  );
};
