import React from 'react';
import { LazyImage } from './LazyImage';

interface ClientLogoCardProps {
  name: string;
  image: string;
  darkImage?: string;
  fallbackUrl: string;
  alt: string;
  sizeClass?: string;
}

export const ClientLogoCard: React.FC<ClientLogoCardProps> = ({
  name,
  image,
  darkImage,
  fallbackUrl,
  alt,
  sizeClass,
}) => {
  return (
    <div
      className="w-44 sm:w-52 h-18 sm:h-20 shrink-0 flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#F6F5F2]/90 dark:bg-[#1C1B20]/90 border border-[#E5E3DC] dark:border-white/[0.08] shadow-2xs dark:shadow-none hover:border-[#FF6004]/40 dark:hover:border-[#FF6004]/40 transition-all duration-300 group select-none"
      title={name}
    >
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

