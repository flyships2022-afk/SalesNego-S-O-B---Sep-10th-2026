import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Cell,
} from 'recharts';
import { TrendingUp, Activity, Filter, Info } from 'lucide-react';

interface SignalDataPoint {
  name: string;
  shortName: string;
  signalStrength: number;
  commercialImpact: number;
  sampleSize: number;
  category: string;
}

const categoryData: SignalDataPoint[] = [
  {
    name: 'Executive & C-Suite Shifts',
    shortName: 'Exec Shifts',
    signalStrength: 88,
    commercialImpact: 84,
    sampleSize: 142,
    category: 'Organizational',
  },
  {
    name: 'Tech Stack Migrations',
    shortName: 'Tech Migration',
    signalStrength: 76,
    commercialImpact: 71,
    sampleSize: 98,
    category: 'Infrastructure',
  },
  {
    name: 'Capex & Series Funding',
    shortName: 'Funding / Capex',
    signalStrength: 92,
    commercialImpact: 89,
    sampleSize: 115,
    category: 'Financial',
  },
  {
    name: 'Regulatory Mandates',
    shortName: 'Compliance',
    signalStrength: 85,
    commercialImpact: 91,
    sampleSize: 76,
    category: 'Macro',
  },
  {
    name: 'Active RFP / Vendor Evaluation',
    shortName: 'RFP Evaluation',
    signalStrength: 96,
    commercialImpact: 95,
    sampleSize: 84,
    category: 'Intent',
  },
  {
    name: 'Sales Capacity Expansion',
    shortName: 'Hiring Expansion',
    signalStrength: 70,
    commercialImpact: 65,
    sampleSize: 160,
    category: 'Growth',
  },
];

const quarterlyTrendData = [
  { period: 'Q1 2025', rawSignals: 58, signalStrength: 52, qualifiedImpact: 46 },
  { period: 'Q2 2025', rawSignals: 72, signalStrength: 66, qualifiedImpact: 61 },
  { period: 'Q3 2025', rawSignals: 84, signalStrength: 78, qualifiedImpact: 74 },
  { period: 'Q4 2025', rawSignals: 93, signalStrength: 86, qualifiedImpact: 82 },
  { period: 'Q1 2026', rawSignals: 98, signalStrength: 92, qualifiedImpact: 89 },
  { period: 'Q2 2026 (Est.)', rawSignals: 104, signalStrength: 95, qualifiedImpact: 93 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
    payload: Record<string, unknown>;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0A192F] border border-[#1E3A5F] rounded-xl p-3.5 shadow-xl text-white text-xs space-y-1.5 min-w-[200px] z-50">
        <p className="font-bold text-sm text-white border-b border-white/10 pb-1">{label}</p>
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ backgroundColor: item.color }}
              />
              {item.name}:
            </span>
            <span className="font-bold text-white">{item.value}/100</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const MarketSignalChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<'category' | 'quarterly'>('category');

  return (
    <div
      id="market-signal-trends-widget"
      className="w-full bg-[#0A192F] dark:bg-[#27272A] border border-[#1E3A5F] dark:border-zinc-700/60 rounded-2xl p-5 sm:p-8 shadow-md"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6004]/15 border border-[#FF6004]/30 text-[#FE9E30] text-xs font-semibold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Market Intelligence Analytics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Market Signal Strength Trends
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-300 max-w-2xl">
            Empirical index tracking upstream buying signals and commercial validation accuracy.
            Helps teams prioritize high-conversion accounts before outbound allocation.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1 shrink-0 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('category')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'category'
                ? 'bg-[#FF6004] text-white shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            By Signal Vector
          </button>
          <button
            type="button"
            onClick={() => setViewMode('quarterly')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'quarterly'
                ? 'bg-[#FF6004] text-white shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Quarterly Trend
          </button>
        </div>
      </div>

      {/* KPI Highlight Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-slate-400 block font-medium">Avg Signal Index</span>
          <span className="text-lg sm:text-xl font-extrabold text-white">84.5<span className="text-xs text-slate-400 font-normal"> / 100</span></span>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-slate-400 block font-medium">Highest Velocity</span>
          <span className="text-lg sm:text-xl font-extrabold text-[#FE9E30]">RFP / Intent</span>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-slate-400 block font-medium">Conversion Lift</span>
          <span className="text-lg sm:text-xl font-extrabold text-white">+3.4x</span>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-[11px] text-slate-400 block font-medium">Data Confidence</span>
          <span className="text-lg sm:text-xl font-extrabold text-[#FF6004]">94.2%</span>
        </div>
      </div>

      {/* Main Recharts Bar Chart */}
      <div className="w-full h-[320px] sm:h-[360px] relative">
        <ResponsiveContainer width="100%" height="100%">
          {viewMode === 'category' ? (
            <BarChart
              data={categoryData}
              margin={{ top: 20, right: 15, left: -15, bottom: 25 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis
                dataKey="shortName"
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
                dy={10}
              />
              <YAxis
                domain={[0, 100]}
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
                tickFormatter={(val) => `${val}`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
              <Legend
                wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
                formatter={(value) => <span className="text-slate-200 text-xs font-medium">{value}</span>}
              />
              <Bar
                dataKey="signalStrength"
                name="Signal Strength Index"
                fill="#FF6004"
                radius={[6, 6, 0, 0]}
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-sig-${index}`}
                    fill={entry.signalStrength >= 90 ? '#FF6004' : '#FE9E30'}
                  />
                ))}
              </Bar>
              <Bar
                dataKey="commercialImpact"
                name="Commercial Impact Score"
                fill="#38BDF8"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          ) : (
            <BarChart
              data={quarterlyTrendData}
              margin={{ top: 20, right: 15, left: -15, bottom: 20 }}
              barGap={6}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis
                dataKey="period"
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
                dy={8}
              />
              <YAxis
                domain={[0, 100]}
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
                tickFormatter={(val) => `${val}`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
              <Legend
                wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
                formatter={(value) => <span className="text-slate-200 text-xs font-medium">{value}</span>}
              />
              <Bar
                dataKey="signalStrength"
                name="Signal Strength Index"
                fill="#FF6004"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="qualifiedImpact"
                name="Validated Pipeline Impact"
                fill="#38BDF8"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Strategy Footnote */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#FE9E30] shrink-0" />
          <span>Calculated from multi-source ICP trigger scans, intent data, and conversion post-mortems.</span>
        </div>
        <span className="text-slate-300 font-mono text-[11px]">Updated Quarterly</span>
      </div>
    </div>
  );
};
