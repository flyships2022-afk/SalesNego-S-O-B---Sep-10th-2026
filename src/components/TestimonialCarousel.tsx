import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { LazyImage } from './LazyImage';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  TrendingUp,
  Building2,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  domain: string;
  market: string;
  rating: number;
  highlightMetric: string;
  highlightLabel: string;
  verifiedEngagement: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'He has been instrumental in driving the growth of TC+ LIMS and our other SaaS solutions. His deep understanding of laboratory workflows, strong consultative approach, and ability to translate customer needs into successful implementations have consistently delivered excellent results.',
    author: 'Gagan Josan',
    role: 'CEO',
    company: 'TC+ LIMS & SaaS Solutions',
    domain: 'Life Sciences & Laboratory SaaS',
    market: 'North America & Global',
    rating: 5,
    highlightMetric: 'SaaS Growth',
    highlightLabel: 'LIMS & Enterprise Implementations',
    verifiedEngagement: 'Executive Recommendation',
  },
  {
    id: 'test-3',
    quote:
      'I highly recommend Raj for his exceptional performance. He excelled in acquiring new business for IT services and infrastructure products.',
    author: 'Stanley Charles',
    role: 'Director',
    company: 'IT Services & Infrastructure',
    domain: 'IT Services & Infrastructure Products',
    market: 'Enterprise IT Markets',
    rating: 5,
    highlightMetric: 'New Business',
    highlightLabel: 'Infrastructure & Tech Acquisition',
    verifiedEngagement: 'Director Recommendation',
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Autoplay loop with smooth 6-second timer
  useEffect(() => {
    if (!isPlaying || prefersReduced) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, prefersReduced, nextSlide]);

  // Keyboard navigation when carousel is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="testimonials-section"
      aria-roledescription="carousel"
      aria-label="Client Testimonials and Executive Endorsements"
      className="relative w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10 overflow-hidden"
    >
      {/* Soft cool-blue radial gradient that makes orange CTAs pop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-100/40 via-slate-50/50 to-transparent dark:hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" distance={20} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004] block mb-2">
              Client Testimonials &amp; Endorsements
            </span>
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-[#161519] dark:text-white">
              Trusted by B2B Founders &amp; Commercial Leaders.
            </h2>
            <p className="mt-3 text-base text-[#555459] dark:text-zinc-400 leading-relaxed">
              Direct executive feedback on pipeline velocity, ICP qualification, enterprise deal negotiation, and cross-border expansion.
            </p>
          </div>

          {/* Carousel Interactive Controls (Play/Pause + Prev/Next + Progress) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Live Slide Counter */}
            <div
              className="text-xs font-mono font-bold text-[#161519] dark:text-zinc-300 px-3 py-1.5 rounded-full bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-2xs"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-[#FF6004]">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-zinc-400 dark:text-zinc-600 mx-1">/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            {/* Play/Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="p-2.5 rounded-full bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white hover:border-[#FF6004] transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
              aria-label={isPlaying ? 'Pause testimonial auto-slide' : 'Start testimonial auto-slide'}
              title={isPlaying ? 'Pause slide rotation' : 'Resume slide rotation'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Previous Slide Button */}
            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white hover:border-[#FF6004] transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Slide Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white hover:border-[#FF6004] transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* Sliding Main Stage Container with Scroll Reveal */}
        <ScrollReveal delay={0.1} distance={24}>
          <div
            ref={carouselRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onFocus={() => setIsPlaying(false)}
            onBlur={() => setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] rounded-2xl"
            aria-live={isPlaying ? 'off' : 'polite'}
          >
          <div className="relative grid grid-cols-1 grid-rows-1 rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[300px] md:min-h-[280px]">
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <motion.div
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${idx + 1} of ${total}: from ${item.author}, ${item.role} at ${item.company}`}
                  aria-hidden={!isActive}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.99,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{
                    duration: prefersReduced ? 0.01 : 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`col-start-1 row-start-1 w-full h-full p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#1f1d24] shadow-sm relative overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? 'z-10 pointer-events-auto'
                      : 'z-0 pointer-events-none select-none'
                  }`}
                >
                  {/* Decorative Subtle Gradient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6004]/5 dark:bg-[#FF6004]/10 rounded-full blur-[80px] pointer-events-none" />

                  {/* Top Badge Strip: Rating + Verified Tag + Domain + Key Metric */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-black/5 dark:border-white/10 shrink-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1 text-[#FE9E30]" aria-label="5 out of 5 stars">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <span className="hidden sm:inline-block text-zinc-300 dark:text-zinc-700">|</span>

                      {/* Verified Partnership Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{item.verifiedEngagement}</span>
                      </div>

                      {/* Domain Category */}
                      <span className="text-xs font-semibold text-[#555459] dark:text-zinc-400 px-2.5 py-1 rounded-full bg-[#F6F5F2] dark:bg-white/5 border border-black/5 dark:border-white/10">
                        {item.domain}
                      </span>
                    </div>

                    {/* Highlight Metric Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#2563EB] border border-[#2563EB] text-white shadow-xs">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">{item.highlightMetric}</span>
                      <span className="text-xs font-semibold text-[#FE9E30]">
                        {item.highlightLabel}
                      </span>
                    </div>
                  </div>

                  {/* Quote with optional photo placement */}
                  <div className="relative z-10 my-4 flex-1 flex flex-col justify-center min-h-[120px] sm:min-h-[100px] md:min-h-[90px]">
                    {item.image ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                        <div className="lg:col-span-7 xl:col-span-8">
                          <blockquote className="text-base sm:text-lg md:text-xl font-medium leading-relaxed font-lexend text-[#161519] dark:text-white">
                            &ldquo;{item.quote}&rdquo;
                          </blockquote>
                        </div>

                        <div className="lg:col-span-5 xl:col-span-4 w-full">
                          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-zinc-900 shadow-xs group/img">
                            <LazyImage
                              src={item.image}
                              alt={item.imageAlt || item.company}
                              referrerPolicy="no-referrer"
                              containerClassName="w-full h-full absolute inset-0"
                              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                            <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-xs border border-white/15 text-[11px] text-zinc-200 font-medium flex items-center justify-between shadow-xs">
                              <span className="truncate">{item.imageCaption || item.company}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0 ml-1.5 animate-pulse" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <blockquote className="text-lg md:text-xl font-medium leading-relaxed font-lexend text-[#161519] dark:text-white">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>

                  {/* Bottom: Author Footer & Market Context */}
                  <div className="relative z-10 pt-4 sm:pt-5 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      {/* Monogram Avatar */}
                      <div className="w-11 h-11 rounded-full bg-[#161519] dark:bg-white text-white dark:text-[#161519] font-lexend font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                        {item.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>

                      <div>
                        <h4 className="font-lexend font-bold text-base text-[#161519] dark:text-white leading-tight">
                          {item.author}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#FF6004] font-medium mt-0.5">
                          {item.role}
                        </p>
                        <p className="text-xs text-[#555459] dark:text-zinc-400 mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Market & Geography Indicator */}
                    <div className="flex items-center gap-1.5 text-xs text-[#555459] dark:text-zinc-400 sm:self-center">
                      <Globe2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                      <span>Markets: <strong>{item.market}</strong></span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Sliding Navigation Indicator Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] ${
                  isActive
                    ? 'w-8 h-2.5 bg-[#FF6004]'
                    : 'w-2.5 h-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${item.author} at ${item.company}`}
                aria-current={isActive ? 'true' : 'false'}
              />
            );
          })}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
