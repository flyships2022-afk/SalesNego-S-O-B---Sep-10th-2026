import React from 'react';
import { SalesNegoLogo } from './SalesNegoLogo';
import { useNavigation } from '../context/NavigationContext';
import { Mail, ArrowUpRight, Globe } from 'lucide-react';
import { RoutePath } from '../types';

export const Footer: React.FC = () => {
  const { navigate, openCalendly, currentPath } = useNavigation();

  const navLinks: { label: string; path: RoutePath; sectionId?: string }[] = [
    { label: 'Home', path: '/', sectionId: 'hero-section' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Contact', path: '/', sectionId: 'contact-section' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const handleLinkClick = (item: { label: string; path: RoutePath; sectionId?: string }) => {
    if (item.label === 'Contact') {
      if (currentPath === '/') {
        const el = document.getElementById('contact-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      navigate('/', 'contact-section');
      return;
    }

    if (item.path === '/' && currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(item.path, item.sectionId);
  };

  const services = [
    { label: 'GTM Strategy & Market Intelligence', path: '/services/gtm-strategy-market-intelligence' as RoutePath },
    { label: 'RevOps & AI-Accelerated Sales', path: '/services/revops-ai-sales' as RoutePath },
    { label: 'End-to-End Commercial Execution', path: '/services/commercial-execution' as RoutePath },
  ];

  return (
    <footer
      id="site-footer"
      className="border-t border-[#E5E3DC] dark:border-white/10 bg-[#161519] text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <SalesNegoLogo showTagline={true} imgClassName="h-10 sm:h-12 w-auto" variant="white" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              From Market Signal to Closed Revenue.
            </h3>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#FE9E30]">
              B2B GTM | Revenue Operations | Commercial Execution
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
              SalesNego helps B2B SaaS, AI and technology companies turn market intelligence into qualified opportunities, customers and account growth.
            </p>

            <div className="pt-2 flex flex-col space-y-2.5 text-xs text-zinc-300">
              <a
                href="mailto:sales@salesnego.com"
                className="inline-flex items-center gap-2 hover:text-[#FF6004] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF6004]" />
                <span className="font-medium text-sm text-white">sales@salesnego.com</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/salesnego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold text-white"
                  title="SalesNego LinkedIn"
                >
                  <img
                    src="https://ik.imagekit.io/4rtwqlnkg/Linkedin%20logo.png?updatedAt=1788412751308"
                    alt="LinkedIn"
                    className="w-4 h-4 object-contain rounded-full"
                  />
                  <span>LinkedIn</span>
                </a>

                <button
                  type="button"
                  onClick={openCalendly}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6004] hover:bg-[#E05300] transition-colors text-xs font-semibold text-white shadow-xs"
                >
                  <span>Discuss Your Growth Priorities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#FE9E30] block mb-1">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(item)}
                    className="text-zinc-300 hover:text-white transition-colors text-left font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Capabilities Col */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-[#FE9E30] block mb-1">
              Connected Commercial System
            </span>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => navigate(item.path)}
                    className="text-zinc-300 hover:text-white transition-colors text-left font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-white/10">
              <span className="text-xs text-zinc-400 block mb-1">Coverage:</span>
              <p className="text-xs font-medium text-white flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#FF6004]" />
                <span>North America | UAE | Europe | India | Australia</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} SalesNego. All rights reserved. From Market Signal to Closed Revenue.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => navigate('/privacy')}
              className="hover:underline hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <a
              href="mailto:sales@salesnego.com"
              className="hover:underline hover:text-white transition-colors"
            >
              sales@salesnego.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
