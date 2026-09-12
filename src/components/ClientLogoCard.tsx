import React from 'react';
import { LazyImage } from './LazyImage';

interface ClientLogoCardProps {
  name: string;
  image: string;
  darkImage?: string;
  fallbackUrl: string;
  alt: string;
  sizeClass?: string;
  industryTag?: string;
  onClick?: () => void;
  isClickable?: boolean;
}

export const ClientLogoCard: React.FC<ClientLogoCardProps> = ({
  name,
  image,
  darkImage,
  fallbackUrl,
  alt,
  sizeClass,
  industryTag,
  onClick,
  isClickable = false,
}) => {
  const clickable = Boolean(onClick || isClickable);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? onClick : undefined}
      onKeyDown={handleKeyDown}
      className={`relative w-44 sm:w-52 h-18 sm:h-20 shrink-0 flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#F6F5F2]/90 dark:bg-[#1C1B20]/90 border border-[#E5E3DC] dark:border-white/[0.08] shadow-2xs dark:shadow-none hover:border-[#FF6004]/50 dark:hover:border-[#FF6004]/50 hover:shadow-md transition-all duration-300 group select-none ${
        clickable ? 'cursor-pointer active:scale-98' : ''
      }`}
      title={clickable ? `${name} - Click to view case study` : name}
    >
      {/* Optional Industry Tag on Card top-right */}
      {industryTag && (
        <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/15 text-[#FF6004] shadow-2xs opacity-0 group-hover:opacity-100 transition-opacity">
          {industryTag}
        </span>
      )}

      {/* Case study click hint on hover */}
      {clickable && (
        <span className="absolute -bottom-2 inset-x-0 mx-auto w-max px-2 py-0.5 rounded text-[9px] font-semibold bg-[#FF6004] text-white shadow-sm opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-1 pointer-events-none">
          Case Study ↗
        </span>
      )}

      {darkImage ? (
        <>
          {/* Light Mode Logo */}
          <LazyImage
            src={image}
            fallbackSrc={fallbackUrl}
            alt={alt}
            loading="lazy"
            decoding="async"
            showShimmer={false}
            containerClassName="flex items-center justify-center max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px] dark:hidden"
            className={`client-logo-vector max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px] object-contain transition-all duration-300 group-hover:scale-105 ${
              sizeClass || ''
            }`}
          />
          {/* Dark Mode Logo */}
          <LazyImage
            src={darkImage}
            fallbackSrc={darkImage}
            alt={alt}
            loading="lazy"
            decoding="async"
            showShimmer={false}
            containerClassName="hidden dark:flex items-center justify-center max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px]"
            className={`client-logo-vector max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px] object-contain transition-all duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${
              sizeClass || ''
            }`}
          />
        </>
      ) : (
        <LazyImage
          src={image}
          fallbackSrc={fallbackUrl}
          alt={alt}
          loading="lazy"
          decoding="async"
          showShimmer={false}
          containerClassName="flex items-center justify-center max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px]"
          className={`client-logo-vector max-h-10 sm:max-h-12 w-auto max-w-[135px] sm:max-w-[155px] object-contain transition-all duration-300 group-hover:scale-105 dark:[filter:brightness(0)_invert(1)] dark:opacity-85 group-hover:dark:opacity-100 ${
            sizeClass || ''
          }`}
        />
      )}
    </div>
  );
};

