import React, { useEffect } from 'react';
import { RoutePath, RouteSEOConfig } from '../types';
import { updateDocumentSEO } from '../utils/seo';

interface SEOProps {
  path: RoutePath;
  overrides?: Partial<RouteSEOConfig>;
}

/**
 * Reusable SEO component for declarative route-level SEO management
 */
export const SEO: React.FC<SEOProps> = ({ path, overrides }) => {
  useEffect(() => {
    updateDocumentSEO(path, overrides);
  }, [path, overrides]);

  return null;
};
