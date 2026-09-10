import React, { useState, useEffect, useRef } from 'react';

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  placeholderSrc?: string;
  containerClassName?: string;
  imgClassName?: string;
  aspectRatio?: string;
  showShimmer?: boolean;
}

/**
 * LazyImage component with native browser lazy loading, async decoding,
 * and a smooth blur-up placeholder transition to maximize LCP and prevent layout shifts.
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  placeholderSrc,
  containerClassName = '',
  imgClassName = '',
  className = '',
  aspectRatio,
  showShimmer = true,
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  style,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync if src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // Handle cached image already loaded in memory before hydration/mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsLoaded(false);
    } else {
      setHasError(true);
      setIsLoaded(true); // Stop blur shimmer so broken placeholder or alt text isn't obscured
      if (onError) {
        onError(e);
      }
    }
  };

  const combinedImgClasses = [
    'transition-all duration-500 ease-out will-change-transform',
    isLoaded ? 'opacity-100 filter blur-0 scale-100' : 'opacity-0 filter blur-md scale-[1.03]',
    imgClassName,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style,
      }}
    >
      {/* Blur-up Placeholder / Skeleton Layer */}
      {(!isLoaded || !hasError) && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out z-0 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          } ${
            showShimmer
              ? 'bg-gradient-to-tr from-[#EBE9E2] via-[#F4F3EE] to-[#EBE9E2] dark:from-[#18191E] dark:via-[#22242B] dark:to-[#18191E] animate-pulse'
              : 'bg-black/5 dark:bg-white/5'
          }`}
        >
          {placeholderSrc && (
            <img
              src={placeholderSrc}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover filter blur-xl scale-110 opacity-70"
            />
          )}
        </div>
      )}

      {/* Main Image with Native Lazy Loading & Async Decoding */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        className={combinedImgClasses}
        {...props}
      />
    </div>
  );
};
