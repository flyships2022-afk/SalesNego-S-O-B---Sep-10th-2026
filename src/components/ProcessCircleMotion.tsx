import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Search,
  Target,
  Layers,
  BarChart3,
  TrendingUp,
  RotateCw,
  Sparkles,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export interface ProcessStage {
  id: string;
  stepNumber: string;
  name: string;
  shortName: string;
  badge: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  color: string;
  lightGlow: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'understand',
    stepNumber: '01',
    name: 'Understand',
    shortName: 'Understand',
    badge: '01 · Market Intelligence',
    subtitle: 'Category & Environment',
    description: 'Understand the market, category, and commercial environment.',
    metric: 'Market',
    metricLabel: 'Intelligence',
    color: '#FF6004',
    lightGlow: 'rgba(255, 96, 4, 0.25)',
    icon: Search,
  },
  {
    id: 'build',
    stepNumber: '02',
    name: 'Build',
    shortName: 'Build',
    badge: '02 · RevOps System',
    subtitle: 'Infrastructure & Workflows',
    description: 'Build the commercial infrastructure required for disciplined execution.',
    metric: 'RevOps',
    metricLabel: 'AI Workflows',
    color: '#FE9E30',
    lightGlow: 'rgba(254, 158, 48, 0.25)',
    icon: Target,
  },
  {
    id: 'execute',
    stepNumber: '03',
    name: 'Execute',
    shortName: 'Execute',
    badge: '03 · Discovery & Alignment',
    subtitle: 'Account Engagement',
    description: 'Engage relevant accounts and diagnose customer problems with informed commercial context.',
    metric: 'Direct',
    metricLabel: 'Execution',
    color: '#103CE7',
    lightGlow: 'rgba(16, 60, 231, 0.25)',
    icon: Layers,
  },
  {
    id: 'close',
    stepNumber: '04',
    name: 'Close',
    shortName: 'Close',
    badge: '04 · Commercial Closure',
    subtitle: 'Proposal & Negotiation',
    description: 'Align solution, business case, proposal, and negotiation toward closure.',
    metric: 'Revenue',
    metricLabel: 'Closed Contract',
    color: '#FF6004',
    lightGlow: 'rgba(255, 96, 4, 0.25)',
    icon: BarChart3,
  },
  {
    id: 'grow',
    stepNumber: '05',
    name: 'Grow',
    shortName: 'Grow',
    badge: '05 · Account Expansion',
    subtitle: 'Adoption & Retention',
    description: 'Support adoption and pursue validated adjacent customer needs.',
    metric: 'Growth',
    metricLabel: 'Account Expansion',
    color: '#10B981',
    lightGlow: 'rgba(16, 185, 129, 0.25)',
    icon: TrendingUp,
  },
];

export const ProcessCircleMotion: React.FC = () => {
  const { openCalendly } = useNavigation();
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through the 5 stages every 3.6 seconds
  useEffect(() => {
    if (!isAutoPlaying || isHovered || shouldReduceMotion) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROCESS_STAGES.length);
    }, 3600);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, shouldReduceMotion]);

  const activeStage = PROCESS_STAGES[activeIndex];
  const ActiveIcon = activeStage.icon;

  // 5 nodes positioned at equal angles: -90°, -18°, 54°, 126°, 198°
  // Center is (210, 210), Radius = 145
  const centerCoord = 210;
  const orbitRadius = 145;

  const getNodeCoords = (index: number) => {
    const angleInDegrees = -90 + index * (360 / PROCESS_STAGES.length);
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    const x = centerCoord + orbitRadius * Math.cos(angleInRadians);
    const y = centerCoord + orbitRadius * Math.sin(angleInRadians);
    return { x, y, angleInDegrees };
  };

  // Angle for the active node to align the active gradient beam
  const activeAngle = -90 + activeIndex * (360 / PROCESS_STAGES.length);

  return (
    <div
      id="process-circle-motion-block"
      style={{ maxWidth: '100%', height: 'auto', overflowX: 'hidden' }}
      className="interactive-preview-card preview-card-wrapper relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[460px] xl:max-w-[500px] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="SalesNego End-to-End Commercial Process Cycle"
    >
      {/* Outer ambient glow matched to active stage color */}
      <div
        className="absolute inset-0 rounded-full blur-[70px] opacity-25 dark:opacity-20 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeStage.color}, transparent 65%)`,
        }}
      />

      {/* Top Tag: Connected Commercial Journey with Anchor Cord */}
      <div className="absolute top-1 left-2 sm:left-4 z-20">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/95 dark:bg-[#1C1B20]/95 text-[#161519] dark:text-zinc-200 border border-zinc-200/90 dark:border-white/15 shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6004] animate-pulse shrink-0" />
          <span>Connected Commercial Journey</span>
          <Sparkles className="w-3 h-3 text-[#FF6004] shrink-0" />
        </motion.div>
      </div>

      {/* Main Circular Visual Canvas Container */}
      <div className="relative aspect-square w-full p-2 sm:p-3 pt-6 sm:pt-6 pb-0 sm:pb-0 flex items-center justify-center">
        {/* SVG Orbital Track & Animated Commercial Journey Cord */}
        <svg
          viewBox="0 0 420 420"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {/* Linear gradient along active connection: Orange primary -> secondary -> Blue */}
            <linearGradient id="orbitGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6004" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FE9E30" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#103CE7" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="activeCordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={activeStage.color} stopOpacity="1" />
              <stop offset="100%" stopColor="#FF6004" stopOpacity="0.8" />
            </linearGradient>

            {/* Radial glow for center */}
            <radialGradient id="hubCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={activeStage.color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={activeStage.color} stopOpacity="0" />
            </radialGradient>

            <filter id="cordGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Cord from Top Satellite Badge to Stage 01 Node */}
          <path
            d="M 85 24 C 85 46, 175 48, 204 62"
            fill="none"
            stroke="#FF6004"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.65"
          />
          <circle cx="85" cy="24" r="2.5" fill="#FF6004" />
          <circle cx="204" cy="62" r="2.5" fill="#FF6004" />

          {/* Outer Faint Guide Ring with Decorative Dash */}
          <circle
            cx="210"
            cy="210"
            r="185"
            fill="none"
            className="stroke-zinc-200 dark:stroke-white/5"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Connected Commercial Journey Base Backbone Cord (Continuous thick tube) */}
          <circle
            cx="210"
            cy="210"
            r={orbitRadius}
            fill="none"
            className="stroke-zinc-200/90 dark:stroke-white/10"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Segmented Connected Cord Paths linking 01 -> 02 -> 03 -> 04 -> 05 -> 01 */}
          {PROCESS_STAGES.map((_, idx) => {
            const nextIdx = (idx + 1) % PROCESS_STAGES.length;
            const start = getNodeCoords(idx);
            const end = getNodeCoords(nextIdx);
            const isCurrentSegment = idx === activeIndex;

            // Arc path between the two adjacent nodes
            const arcPath = `M ${start.x} ${start.y} A ${orbitRadius} ${orbitRadius} 0 0 1 ${end.x} ${end.y}`;

            return (
              <g key={`journey-segment-${idx}`}>
                {/* Active Glowing Flow Cord */}
                {isCurrentSegment && (
                  <path
                    d={arcPath}
                    fill="none"
                    stroke={activeStage.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="url(#cordGlowFilter)"
                    className="transition-all duration-500"
                  />
                )}

                {/* Subtle directional pulse dashes on all segments */}
                <path
                  d={arcPath}
                  fill="none"
                  stroke={isCurrentSegment ? '#FFFFFF' : activeStage.color}
                  strokeWidth={isCurrentSegment ? '2.5' : '1.5'}
                  strokeDasharray={isCurrentSegment ? '8 12' : '4 14'}
                  strokeLinecap="round"
                  opacity={isCurrentSegment ? 0.9 : 0.4}
                  className="transition-all duration-500"
                />
              </g>
            );
          })}

          {/* Center ambient glow circle */}
          <circle cx="210" cy="210" r="105" fill="url(#hubCenterGlow)" />

          {/* Smooth Traveling Flow Energy on the Orbital Cord */}
          {!shouldReduceMotion && (
            <g
              style={{
                transformOrigin: '210px 210px',
                animation: 'spin 18s linear infinite',
              }}
            >
              <circle
                cx="210"
                cy="210"
                r={orbitRadius}
                fill="none"
                stroke="url(#orbitGlowGrad)"
                strokeWidth="2.5"
                strokeDasharray="40 140"
                strokeLinecap="round"
                opacity="0.85"
              />
              <circle
                cx="210"
                cy="210"
                r={orbitRadius}
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="20 200"
                strokeLinecap="round"
                opacity="0.75"
              />
            </g>
          )}

          {/* Dynamic Laser Connection Cord from Center Hub to Active Node */}
          {(() => {
            const coords = getNodeCoords(activeIndex);
            return (
              <g>
                <line
                  x1="210"
                  y1="210"
                  x2={coords.x}
                  y2={coords.y}
                  stroke={activeStage.color}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                  className="transition-all duration-500"
                />
                <circle
                  cx={(210 + coords.x) / 2}
                  cy={(210 + coords.y) / 2}
                  r="2.5"
                  fill={activeStage.color}
                  className="animate-ping"
                />
              </g>
            );
          })()}

          {/* Cardinal Coordinate Tick Marks */}
          {[0, 90, 180, 270].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const r1 = 180;
            const r2 = 190;
            return (
              <line
                key={`tick-${deg}`}
                x1={210 + r1 * Math.cos(rad)}
                y1={210 + r1 * Math.sin(rad)}
                x2={210 + r2 * Math.cos(rad)}
                y2={210 + r2 * Math.sin(rad)}
                className="stroke-zinc-300 dark:stroke-white/20"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        {/* 5 Orbiting Interactive Stage Nodes */}
        {PROCESS_STAGES.map((stage, idx) => {
          const { x, y } = getNodeCoords(idx);
          const isActive = idx === activeIndex;
          const NodeIcon = stage.icon;

          // Convert viewBox coordinate (0-420) to percentage for responsive positioning
          const leftPct = (x / 420) * 100;
          const topPct = (y / 420) * 100;

          return (
            <div
              key={stage.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
            >
              {/* Outer Pulse Wave for Active Node */}
              {isActive && !shouldReduceMotion && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ backgroundColor: stage.color }}
                />
              )}

              {/* Node Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                aria-label={`Select stage ${stage.stepNumber}: ${stage.name}`}
                className={`group relative flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6004] ${
                  isActive
                    ? 'w-12 h-12 sm:w-14 sm:h-14 shadow-lg scale-105'
                    : 'w-9 h-9 sm:w-10 sm:h-10 hover:scale-110 hover:shadow-md'
                } ${
                  isActive
                    ? 'text-white'
                    : 'bg-white/90 dark:bg-[#1C1B20]/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/15'
                }`}
                style={{
                  backgroundColor: isActive ? stage.color : undefined,
                  boxShadow: isActive ? `0 6px 20px -2px ${stage.color}80` : undefined,
                }}
              >
                {/* Node Icon */}
                <NodeIcon
                  className={`transition-transform duration-200 ${
                    isActive
                      ? 'w-5 h-5 sm:w-6 sm:h-6 scale-110'
                      : 'w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'
                  }`}
                />

                {/* Step badge on top of node */}
                <span
                  className={`absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full text-[9px] font-bold px-1.5 py-0.2 shadow-xs transition-colors ${
                    isActive
                      ? 'bg-white text-zinc-900 dark:bg-[#121214] dark:text-white border border-black/10 dark:border-white/20'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10'
                  }`}
                >
                  {stage.stepNumber}
                </span>
              </button>

              {/* Node Tooltip Label Pill (Shows permanently for active, on hover for others) */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 pointer-events-none transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                }`}
              >
                <div
                  className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-tight shadow-sm backdrop-blur-md ${
                    isActive
                      ? 'bg-white/95 dark:bg-[#161519]/95 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/15'
                      : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10'
                  }`}
                >
                  {stage.shortName}
                </div>
              </div>
            </div>
          );
        })}

        {/* Central Core Display Hub */}
        <div className="relative z-15 w-[168px] h-[168px] sm:w-[196px] sm:h-[196px] rounded-full p-3 flex flex-col items-center justify-center text-center bg-white/95 dark:bg-[#141318]/95 border border-zinc-200/90 dark:border-white/15 shadow-2xl backdrop-blur-xl transition-all duration-300">
          {/* Inner ambient ring */}
          <div
            className="absolute inset-1 rounded-full pointer-events-none transition-opacity duration-500 opacity-20 dark:opacity-25"
            style={{
              border: `1.5px solid ${activeStage.color}`,
              boxShadow: `inset 0 0 16px ${activeStage.color}40`,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, scale: 0.92, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -6 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full flex flex-col items-center justify-center text-center px-1"
            >
              {/* Phase Eyebrow with Beacon */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-200 border border-zinc-200/60 dark:border-white/10 mb-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: activeStage.color }}
                />
                <span className="truncate">{activeStage.badge}</span>
              </div>

              {/* Stage Title */}
              <h4 className="font-lexend text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-tight">
                {activeStage.name}
              </h4>

              {/* Metric Callout Pill */}
              <div
                className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white shadow-xs"
                style={{ backgroundColor: activeStage.color }}
              >
                <span>{activeStage.metric}</span>
                <span className="font-normal opacity-90 text-[9px] sm:text-[10px]">
                  {activeStage.metricLabel}
                </span>
              </div>

              {/* Micro Subtitle */}
              <p className="mt-1 text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 max-w-[150px]">
                {activeStage.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Stepper Dots & Play/Pause Interactive Bar */}
          <div className="mt-2 flex items-center justify-center gap-1.5 z-20">
            {PROCESS_STAGES.map((s, i) => (
              <button
                key={`dot-${s.id}`}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Jump to stage ${s.stepNumber}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-4 h-1.5 bg-[#FF6004]'
                    : 'w-1.5 h-1.5 bg-zinc-300 dark:bg-white/20 hover:bg-zinc-400 dark:hover:bg-white/40'
                }`}
              />
            ))}

            {/* Toggle auto-play button */}
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? 'Pause automatic process cycle' : 'Play automatic process cycle'}
              title={isAutoPlaying ? 'Pause cycle' : 'Resume cycle'}
              className="ml-1 p-0.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-white transition-colors focus:outline-none"
            >
              {isAutoPlaying ? (
                <Pause className="w-2.5 h-2.5" />
              ) : (
                <Play className="w-2.5 h-2.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Detail Narrative Bar under the circle */}
      <div className="-mt-3 sm:-mt-5 w-full px-2">
        <div className="p-3 rounded-[16px] bg-white/80 dark:bg-[#161519]/80 border border-zinc-200/80 dark:border-white/10 backdrop-blur-md flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0 w-full">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-xs"
              style={{ backgroundColor: activeStage.color }}
            >
              {activeStage.stepNumber}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                  {activeStage.name}
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                  — {activeStage.subtitle}
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300 line-clamp-1 leading-snug">
                {activeStage.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
