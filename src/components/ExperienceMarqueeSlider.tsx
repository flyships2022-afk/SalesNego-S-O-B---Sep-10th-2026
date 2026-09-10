import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, MoveHorizontal } from 'lucide-react';
import { LazyImage } from './LazyImage';

export interface DomainItem {
  domain: string;
  sector: string;
  desc: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  imageAlt?: string;
  imageTag?: string;
}

interface ExperienceMarqueeSliderProps {
  items: DomainItem[];
}

export const ExperienceMarqueeSlider: React.FC<ExperienceMarqueeSliderProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const animFrameId = useRef<number | null>(null);

  // Smooth continuous auto-sliding loop
  const autoSlide = useCallback(() => {
    const container = scrollRef.current;
    if (container && !isPaused && !isHovered && !isDragging) {
      const halfWidth = container.scrollWidth / 2;
      container.scrollLeft += 0.75; // slow, smooth speed

      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      }
    }
    animFrameId.current = requestAnimationFrame(autoSlide);
  }, [isPaused, isHovered, isDragging]);

  useEffect(() => {
    animFrameId.current = requestAnimationFrame(autoSlide);
    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [autoSlide]);

  // Initial centering to allow scrolling both left and right seamlessly
  useEffect(() => {
    const container = scrollRef.current;
    if (container && container.scrollLeft === 0) {
      const initialOffset = container.scrollWidth / 4;
      container.scrollLeft = initialOffset;
    }
  }, []);

  // Move left or right via button click or arrow trigger
  const slideLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 400;
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    // Boundary check
    setTimeout(() => {
      if (container.scrollLeft <= 50) {
        const halfWidth = container.scrollWidth / 2;
        container.scrollLeft += halfWidth;
      }
    }, 400);
  };

  const slideRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 400;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Boundary check
    setTimeout(() => {
      const halfWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth * 1.5) {
        container.scrollLeft -= halfWidth;
      }
    }, 400);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const currentX = e.pageX - container.offsetLeft;
    const walk = (currentX - startX) * 1.5; // Drag speed multiplier
    container.scrollLeft = scrollStart - walk;

    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth * 1.6) {
      container.scrollLeft -= halfWidth;
      setScrollStart(container.scrollLeft + walk);
    } else if (container.scrollLeft <= 20) {
      container.scrollLeft += halfWidth;
      setScrollStart(container.scrollLeft + walk);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Wheel horizontal scroll support
  const handleWheel = (e: React.WheelEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      container.scrollLeft += delta;

      const halfWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth * 1.8) {
        container.scrollLeft -= halfWidth;
      } else if (container.scrollLeft <= 10) {
        container.scrollLeft += halfWidth;
      }
    }
  };

  return (
    <div
      className="relative group/slider select-none py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      {/* Left and Right Ambient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-r from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-l from-white dark:from-[#161519] to-transparent z-10 pointer-events-none" />

      {/* Floating Left Navigation Arrow Button */}
      <button
        type="button"
        onClick={slideLeft}
        aria-label="Slide cards left"
        className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 dark:bg-[#1C1B20]/90 text-[#161519] dark:text-white border border-[#E5E3DC] dark:border-white/15 shadow-lg backdrop-blur-md flex items-center justify-center hover:bg-[#FF6004] hover:text-white hover:border-[#FF6004] transition-all duration-200 cursor-pointer active:scale-95"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Floating Right Navigation Arrow Button */}
      <button
        type="button"
        onClick={slideRight}
        aria-label="Slide cards right"
        className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 dark:bg-[#1C1B20]/90 text-[#161519] dark:text-white border border-[#E5E3DC] dark:border-white/15 shadow-lg backdrop-blur-md flex items-center justify-center hover:bg-[#FF6004] hover:text-white hover:border-[#FF6004] transition-all duration-200 cursor-pointer active:scale-95"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scrollable / Draggable Track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onWheel={handleWheel}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className={`flex items-stretch overflow-x-auto overflow-y-hidden py-4 px-4 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* Track 1 */}
        <div className="flex gap-6 pr-6 items-stretch shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`exp-card-track1-${idx}`}
                className="w-[370px] lg:w-[420px] shrink-0 p-6 sm:p-7 rounded-[22px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs hover:border-[#FF6004]/50 hover:shadow-lg dark:hover:border-[#FF6004]/50 transition-all duration-300 flex flex-col justify-between group select-none pointer-events-auto"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#FF6004] bg-[#FF6004]/10 px-2.5 py-0.5 rounded-md">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">
                        {item.sector}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-[#FF6004] group-hover:bg-[#FF6004] group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-lexend text-lg lg:text-xl font-normal text-[#161519] dark:text-white mb-3 leading-snug group-hover:text-[#FF6004] transition-colors duration-200">
                    {item.domain}
                  </h3>

                  {item.image && (
                    <div className="relative w-full aspect-[16/9] mb-3.5 rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-900 group/thumb">
                      <LazyImage
                        src={item.image}
                        alt={item.imageAlt || item.domain}
                        referrerPolicy="no-referrer"
                        containerClassName="w-full h-full absolute inset-0"
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/thumb:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                      {item.imageTag && (
                        <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-white/15 text-[10px] text-zinc-200 font-medium flex items-center justify-between">
                          <span className="truncate">{item.imageTag}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0 ml-1 animate-pulse" />
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E3DC]/80 dark:border-white/10 flex flex-wrap gap-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-white/80 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicate for Seamless Infinite Loop in Both Directions) */}
        <div className="flex gap-6 pr-6 items-stretch shrink-0" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`exp-card-track2-${idx}`}
                className="w-[370px] lg:w-[420px] shrink-0 p-6 sm:p-7 rounded-[22px] bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs hover:border-[#FF6004]/50 hover:shadow-lg dark:hover:border-[#FF6004]/50 transition-all duration-300 flex flex-col justify-between group select-none pointer-events-auto"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#FF6004] bg-[#FF6004]/10 px-2.5 py-0.5 rounded-md">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300">
                        {item.sector}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-[#FF6004] group-hover:bg-[#FF6004] group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-lexend text-lg lg:text-xl font-normal text-[#161519] dark:text-white mb-3 leading-snug group-hover:text-[#FF6004] transition-colors duration-200">
                    {item.domain}
                  </h3>

                  {item.image && (
                    <div className="relative w-full aspect-[16/9] mb-3.5 rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-900 group/thumb">
                      <LazyImage
                        src={item.image}
                        alt={item.imageAlt || item.domain}
                        referrerPolicy="no-referrer"
                        containerClassName="w-full h-full absolute inset-0"
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/thumb:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                      {item.imageTag && (
                        <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-white/15 text-[10px] text-zinc-200 font-medium flex items-center justify-between">
                          <span className="truncate">{item.imageTag}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6004] shrink-0 ml-1 animate-pulse" />
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E3DC]/80 dark:border-white/10 flex flex-wrap gap-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center text-[10.5px] font-medium px-2 py-0.5 rounded-md bg-white/80 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
