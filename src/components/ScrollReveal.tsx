import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // in seconds (e.g. 0.1)
  duration?: number; // in seconds (e.g. 0.7)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // in pixels (e.g. 24)
  threshold?: number;
  once?: boolean;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  style,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 24,
  threshold = 0.12,
  once = true,
  id,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Accessibility: Respect user's reduced-motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    // Fallback if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      {
        threshold: threshold || 0.12,
        rootMargin: '0px 0px -40px 0px', // Metafic-style natural entrance margin
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isRevealed) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        isRevealed ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        ...style,
        transform: getTransform(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------
   Stagger Context & Components
   Cascades reveals sequentially across grids, service cards, and lists
------------------------------------------------------------------------- */
interface StaggerContextValue {
  isGroupRevealed: boolean;
  staggerDelay: number;
}

const StaggerContext = createContext<StaggerContextValue>({
  isGroupRevealed: false,
  staggerDelay: 0.08,
});

export interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
  id?: string;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  style,
  staggerDelay = 0.08,
  threshold = 0.12,
  once = true,
  id,
}) => {
  const [isGroupRevealed, setIsGroupRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsGroupRevealed(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsGroupRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsGroupRevealed(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsGroupRevealed(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, once]);

  // Assign indexed stagger order to valid React element children
  let counter = 0;
  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childElement = child as React.ReactElement<{ index?: number; itemIndex?: number }>;
      const assignedIndex =
        childElement.props.index !== undefined ? childElement.props.index : counter++;
      return React.cloneElement(childElement, {
        itemIndex: assignedIndex,
      });
    }
    return child;
  });

  return (
    <StaggerContext.Provider value={{ isGroupRevealed, staggerDelay }}>
      <div ref={containerRef} id={id} className={className} style={style}>
        {items}
      </div>
    </StaggerContext.Provider>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  distance?: number;
  duration?: number;
  delay?: number;
  index?: number;
  itemIndex?: number;
  id?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  style,
  distance = 24,
  duration = 0.7,
  delay,
  index,
  itemIndex,
  id,
}) => {
  const context = useContext(StaggerContext);
  const [localRevealed, setLocalRevealed] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  // If used outside of StaggerGroup, fallback to individual observer
  useEffect(() => {
    if (context.isGroupRevealed) return; // parent handles it

    if (typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLocalRevealed(true);
      return;
    }
    if (!('IntersectionObserver' in window)) {
      setLocalRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setLocalRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = itemRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [context.isGroupRevealed]);

  const isRevealed = context.isGroupRevealed || localRevealed;
  const resolvedIndex = index !== undefined ? index : itemIndex !== undefined ? itemIndex : 0;
  const resolvedDelay = delay !== undefined ? delay : resolvedIndex * context.staggerDelay;

  return (
    <div
      ref={itemRef}
      id={id}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0'
      } ${className}`}
      style={{
        ...style,
        transform: isRevealed ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`,
        transitionDuration: `${duration}s`,
        transitionDelay: `${resolvedDelay}s`,
      }}
    >
      {children}
    </div>
  );
};
