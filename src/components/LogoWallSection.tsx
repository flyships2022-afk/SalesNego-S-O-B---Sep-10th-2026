import React from 'react';
import { Sparkles } from 'lucide-react';
import { ClientLogoCard } from './ClientLogoCard';
import { ScrollReveal } from './ScrollReveal';
import { CLIENT_LOGOS_DATA } from '../data/clientLogosData';

export const LogoWallSection: React.FC = () => {
  return (
    <section
      id="partners-section"
      aria-label="Client Ecosystem"
      style={{ maxWidth: '100%', height: 'auto', overflowX: 'hidden', boxSizing: 'border-box' }}
      className="top-level-section logo-wall-wrapper client-logos-wrapper w-full max-w-full h-auto py-12 sm:py-16 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10 overflow-x-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6004]/10 text-[#FF6004] border border-[#FF6004]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Client Ecosystem</span>
          </div>

          <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#161519] dark:text-white mb-3">
            Trusted Across SaaS, FinTech, AI &amp; Technology Services
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Commercial engagements across enterprise software, artificial intelligence, and financial technology.
          </p>
        </ScrollReveal>
      </div>

      {/* Normal Logo Slider Marquee */}
      <div className="relative w-full overflow-x-hidden">
        {/* Left and Right Fade Masks for Smooth Edge Transitions */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />

        {/* Sliding Track */}
        <ScrollReveal delay={0.05} distance={12}>
          <div className="flex animate-marquee gap-6 md:gap-8 items-center py-2">
            {/* First Set of Logos */}
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
                />
              ))}
            </div>

            {/* Duplicate Set for Seamless Infinite Loop */}
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
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
