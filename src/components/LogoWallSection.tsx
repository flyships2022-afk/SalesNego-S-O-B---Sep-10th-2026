import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Sparkles, Filter, LayoutGrid, Repeat, ChevronRight } from 'lucide-react';
import { ClientLogoCard } from './ClientLogoCard';
import { CaseStudyModal } from './CaseStudyModal';
import { ScrollReveal } from './ScrollReveal';
import { LazyImage } from './LazyImage';
import { useNavigation } from '../context/NavigationContext';
import {
  CLIENT_LOGOS_DATA,
  INDUSTRY_CATEGORIES,
  IndustryCategory,
  ClientLogoItem,
} from '../data/clientLogosData';

export const LogoWallSection: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<IndustryCategory>('All');
  const [selectedClientForModal, setSelectedClientForModal] = useState<ClientLogoItem | null>(null);
  const [allViewMode, setAllViewMode] = useState<'marquee' | 'grid'>('marquee');

  // Filter client logos based on selected industry category
  const filteredLogos = useMemo(() => {
    if (selectedCategory === 'All') {
      return CLIENT_LOGOS_DATA;
    }
    return CLIENT_LOGOS_DATA.filter((item) => item.industries.includes(selectedCategory));
  }, [selectedCategory]);

  const handleCardClick = (client: ClientLogoItem) => {
    setSelectedClientForModal(client);
  };

  const getCategoryDescription = (category: IndustryCategory) => {
    switch (category) {
      case 'SaaS':
        return 'Displaying verified enterprise & vertical SaaS engagements. Click any logo to inspect diagnostic workflows, pricing structures, and ACV growth.';
      case 'FinTech':
        return 'Displaying verified commercial engagements in tax compliance & digital banking infrastructure. Click any logo to view procurement qualification and risk alignment.';
      case 'AI':
        return 'Displaying verified commercial engagements in enterprise AI scoping, adaptive learning & revenue intelligence. Click any logo to inspect model packaging and sales cycles.';
      case 'Tech Services':
        return 'Displaying verified engagements in custom software architecture, cloud platforms & high-ticket IT services scoping.';
      case 'All':
      default:
        return 'Commercial engagements across enterprise software, artificial intelligence, and financial technology. Click any client to reveal its verified commercial case study.';
    }
  };

  return (
    <section
      id="partners-section"
      aria-label="Approved Client Logos & Case Studies"
      style={{ maxWidth: '100%', height: 'auto', overflowX: 'hidden', boxSizing: 'border-box' }}
      className="top-level-section logo-wall-wrapper client-logos-wrapper w-full max-w-full h-auto py-12 sm:py-16 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10 overflow-x-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6004]/10 text-[#FF6004] border border-[#FF6004]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Client Ecosystem</span>
          </div>

          <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#161519] dark:text-white mb-3">
            Trusted Across SaaS, FinTech, AI &amp; Technology Services
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {getCategoryDescription(selectedCategory)}
          </p>
        </ScrollReveal>

        {/* Industry Filter Controls & View Switcher */}
        <ScrollReveal direction="up" distance={16} delay={0.05} className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
            {/* Filter Pills */}
            <div
              role="tablist"
              aria-label="Filter client logos by industry"
              className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start"
            >
              <div className="hidden lg:flex items-center gap-1.5 mr-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <Filter className="w-3.5 h-3.5 text-[#FF6004]" />
                <span>Industry:</span>
              </div>

              {INDUSTRY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (cat.id !== 'All') {
                        setAllViewMode('grid');
                      }
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FF6004] to-[#FE9E30] text-white shadow-md shadow-[#FF6004]/25 border border-transparent'
                        : 'bg-[#F6F5F2] dark:bg-[#1C1B20] text-zinc-700 dark:text-zinc-300 border border-[#E5E3DC] dark:border-white/10 hover:border-[#FF6004]/40 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                        isActive
                          ? 'bg-white/25 text-white'
                          : 'bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Toggle View Mode when "All" is active, or Case Studies Page Link */}
            <div className="flex items-center gap-2 shrink-0">
              {selectedCategory === 'All' ? (
                <div className="inline-flex items-center p-1 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setAllViewMode('marquee')}
                    aria-label="Marquee carousel view"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      allViewMode === 'marquee'
                        ? 'bg-white dark:bg-[#100F12] text-[#FF6004] shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <Repeat className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Marquee</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAllViewMode('grid')}
                    aria-label="Grid showcase view"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      allViewMode === 'grid'
                        ? 'bg-white dark:bg-[#100F12] text-[#FF6004] shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cards</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="text-xs font-semibold text-[#FF6004] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Show All Work</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => navigate('/case-studies')}
                className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-[#FF6004] dark:hover:text-[#FF6004] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 hover:border-[#FF6004]/30 transition-colors cursor-pointer"
              >
                <span>Full Case Studies</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mode A: Infinite Sliding Marquee (When "All" is selected and marquee mode is active) */}
      {selectedCategory === 'All' && allViewMode === 'marquee' ? (
        <div className="relative w-full overflow-x-hidden">
          {/* Left and Right Fade Masks for Smooth Edge Transitions */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />

          {/* Sliding Track */}
          <ScrollReveal delay={0.1} distance={16}>
            <div className="flex animate-marquee gap-6 md:gap-8 items-center py-2">
              {/* First Copy of Logos */}
              <div className="flex gap-6 md:gap-8 items-center shrink-0">
                {CLIENT_LOGOS_DATA.map((item, index) => (
                  <ClientLogoCard
                    key={`logo-track-1-${item.id}-${index}`}
                    name={item.name}
                    image={item.image}
                    darkImage={item.darkImage}
                    fallbackUrl={item.fallbackUrl}
                    alt={item.alt}
                    sizeClass={item.sizeClass}
                    industryTag={item.primaryIndustry}
                    isClickable
                    onClick={() => handleCardClick(item)}
                  />
                ))}
              </div>

              {/* Duplicate Copy for Seamless Infinite Loop */}
              <div className="flex gap-6 md:gap-8 items-center shrink-0" aria-hidden="true">
                {CLIENT_LOGOS_DATA.map((item, index) => (
                  <ClientLogoCard
                    key={`logo-track-dup-${item.id}-${index}`}
                    name={item.name}
                    image={item.image}
                    darkImage={item.darkImage}
                    fallbackUrl={item.fallbackUrl}
                    alt={item.alt}
                    sizeClass={item.sizeClass}
                    industryTag={item.primaryIndustry}
                    isClickable
                    onClick={() => handleCardClick(item)}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Subtle Marquee Instruction Hint */}
          <div className="text-center mt-3">
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              💡 Click any client logo to view verified commercial outcomes &amp; case study metrics
            </span>
          </div>
        </div>
      ) : (
        /* Mode B: Filtered Grid View with Case Study Previews */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredLogos.map((item) => (
              <div
                key={`filtered-card-${item.id}`}
                onClick={() => handleCardClick(item)}
                className="group p-5 sm:p-6 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 hover:bg-white dark:hover:bg-[#121115] hover:border-[#FF6004]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer select-none"
              >
                <div>
                  {/* Card Top: Logo & Industry Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-32 h-14 shrink-0 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-[#100F12] border border-[#E5E3DC] dark:border-white/10 shadow-2xs group-hover:border-[#FF6004]/30 transition-colors">
                      {item.darkImage ? (
                        <>
                          <LazyImage
                            src={item.image}
                            fallbackSrc={item.fallbackUrl}
                            alt={item.alt}
                            containerClassName="flex items-center justify-center max-h-8 max-w-[100px] dark:hidden"
                            className="max-h-8 max-w-[100px] object-contain"
                          />
                          <LazyImage
                            src={item.darkImage}
                            fallbackSrc={item.darkImage}
                            alt={item.alt}
                            containerClassName="hidden dark:flex items-center justify-center max-h-8 max-w-[100px]"
                            className="max-h-8 max-w-[100px] object-contain opacity-90 group-hover:opacity-100"
                          />
                        </>
                      ) : (
                        <LazyImage
                          src={item.image}
                          fallbackSrc={item.fallbackUrl}
                          alt={item.alt}
                          containerClassName="flex items-center justify-center max-h-8 max-w-[100px]"
                          className="max-h-8 max-w-[100px] object-contain dark:[filter:brightness(0)_invert(1)] dark:opacity-85 group-hover:dark:opacity-100"
                        />
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FF6004]/10 text-[#FF6004] border border-[#FF6004]/20 group-hover:bg-[#FF6004] group-hover:text-white transition-colors">
                        {item.caseStudy.badge}
                      </span>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        {item.caseStudy.domain}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-lexend text-base sm:text-lg font-bold text-[#161519] dark:text-white mb-2 group-hover:text-[#FF6004] dark:group-hover:text-[#FE9E30] transition-colors leading-snug">
                    {item.caseStudy.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                    {item.caseStudy.summary}
                  </p>
                </div>

                {/* Key Metrics & Action */}
                <div className="pt-3 border-t border-[#E5E3DC]/80 dark:border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {item.caseStudy.metrics.slice(0, 2).map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10.5px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-200"
                      >
                        <span className="text-[#FF6004] font-bold">{m.value}</span> {m.label}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-[#FF6004] group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout banner */}
          <div className="mt-8 p-4 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="font-lexend text-sm font-semibold text-[#161519] dark:text-white block">
                Looking for verified metrics specific to your stage and deal size?
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Explore our full archive of commercial engagements and cross-border tech sales case studies.
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF6004] hover:bg-[#e05403] shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={Boolean(selectedClientForModal)}
        client={selectedClientForModal}
        onClose={() => setSelectedClientForModal(null)}
      />
    </section>
  );
};
