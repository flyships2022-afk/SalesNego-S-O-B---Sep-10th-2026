import React, { createContext, useContext, useEffect, useState } from 'react';
import { RoutePath } from '../types';
import { updateDocumentSEO, SEO_CONFIG } from '../utils/seo';
import { scrollToSection } from '../utils/scroll';

interface NavigationContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath | string, targetElementId?: string) => void;
  isCalendlyOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname as RoutePath;
      if (p in SEO_CONFIG) {
        return p;
      }
    }
    return '/';
  });

  const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname as RoutePath;
      if (p in SEO_CONFIG) {
        setCurrentPath(p);
      } else {
        setCurrentPath('/');
      }

      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash, { smooth: true });
        }, 50);
      } else if (window.location.pathname === '/') {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle direct hash URL on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Immediate frame without disorienting long animation on initial arrival
        requestAnimationFrame(() => {
          scrollToSection(hash, { smooth: false });
        });
        setTimeout(() => {
          scrollToSection(hash, { smooth: false });
        }, 150);
      }
    }
  }, []);

  useEffect(() => {
    // Centrally update title, meta description, OpenGraph, Twitter, canonical and structured schema
    updateDocumentSEO(currentPath);
  }, [currentPath]);

  const navigate = (path: RoutePath | string, targetElementId?: string) => {
    let effectivePath = path;
    let targetId = targetElementId;

    if (typeof path === 'string' && path.includes('#')) {
      const [base, h] = path.split('#');
      effectivePath = (base || '/') as RoutePath;
      if (!targetId) {
        targetId = h;
      }
    }

    const isTargetTop =
      !targetId ||
      targetId === 'hero-section' ||
      targetId === 'top' ||
      targetId === 'home';

    const targetUrl = isTargetTop
      ? (effectivePath as string)
      : `${effectivePath === '/' ? '' : effectivePath}/#${targetId}`;

    if (effectivePath === currentPath) {
      if (typeof window !== 'undefined') {
        try {
          window.history.pushState({}, '', targetUrl);
        } catch {}
      }

      if (targetId && !isTargetTop) {
        scrollToSection(targetId, { smooth: true });
      } else if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
          window.scrollTo(0, 0);
        }
      }
      return;
    }

    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', targetUrl);
      } catch {
        // Ignore history security restrictions in sandboxed iframes
      }
    }
    setCurrentPath(effectivePath as RoutePath);

    if (targetId && !isTargetTop) {
      // Wait for page to mount, then scroll to section smoothly with sticky header offset
      setTimeout(() => {
        const success = scrollToSection(targetId, { smooth: true });
        if (!success && typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);

      // Secondary stabilization pass once lazy images and fonts settle
      setTimeout(() => {
        scrollToSection(targetId, { smooth: true });
      }, 320);
    } else if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  };

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isCalendlyOpen,
        openCalendly,
        closeCalendly,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
