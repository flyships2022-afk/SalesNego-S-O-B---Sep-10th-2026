import React, { createContext, useContext, useEffect, useState } from 'react';
import { RoutePath } from '../types';
import { updateDocumentSEO, SEO_CONFIG } from '../utils/seo';

interface NavigationContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath, targetElementId?: string) => void;
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
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Centrally update title, meta description, OpenGraph, Twitter, canonical and structured schema
    updateDocumentSEO(currentPath);
  }, [currentPath]);

  const navigate = (path: RoutePath, targetElementId?: string) => {
    if (targetElementId && currentPath === path) {
      // Smoothly scroll to the target element on the current page
      try {
        const element = document.getElementById(targetElementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      } catch {
        // Fallback for environments where smooth scrolling options throw
      }
    }

    if (path !== currentPath) {
      if (typeof window !== 'undefined') {
        try {
          window.history.pushState({}, '', path);
        } catch {
          // Ignore history security restrictions in sandboxed iframes
        }
      }
      setCurrentPath(path);

      if (targetElementId) {
        // Wait for page to mount, then scroll to section smoothly
        setTimeout(() => {
          try {
            const element = document.getElementById(targetElementId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          } catch {
            if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
              window.scrollTo(0, 0);
            }
          }
        }, 120);
      } else if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch {
          window.scrollTo(0, 0);
        }
      }
    } else if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      // Same path without target id: scroll smoothly to top
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
