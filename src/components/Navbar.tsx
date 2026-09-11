import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight, ChevronDown, Sparkles, ArrowRight, ShieldCheck, PhoneCall, Mail } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { SalesNegoLogo } from './SalesNegoLogo';
import { RoutePath } from '../types';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openCalendly } = useNavigation();
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer, dropdown, and active tooltips
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setActiveTooltipId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle outside click for services dropdown
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // On homepage, detect active section for smooth scrolling indicator
      if (currentPath === '/') {
        const sections = [
          { id: 'contact-section', name: 'contact' },
          { id: 'about-section', name: 'about' },
          { id: 'experience-section', name: 'portfolio' },
          { id: 'services-section', name: 'services' },
          { id: 'hero-section', name: 'home' },
        ];

        const scrollPosition = window.scrollY + 180;
        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (el && scrollPosition >= el.offsetTop) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const navItems: { label: string; path: RoutePath; sectionId?: string; sectionKey: string; tooltip: string }[] = [
    {
      label: 'Home',
      path: '/',
      sectionId: 'hero-section',
      sectionKey: 'home',
      tooltip: 'Homepage & commercial overview',
    },
    {
      label: 'Services',
      path: '/services',
      sectionId: 'services-section',
      sectionKey: 'services',
      tooltip: 'GTM Strategy, RevOps & Execution',
    },
    {
      label: 'Portfolio',
      path: '/case-studies',
      sectionId: 'experience-section',
      sectionKey: 'portfolio',
      tooltip: 'Client portfolio & case studies',
    },
    {
      label: 'About Us',
      path: '/about',
      sectionId: 'about-section',
      sectionKey: 'about',
      tooltip: 'Founder leadership & mission',
    },
    {
      label: 'Contact',
      path: '/',
      sectionId: 'contact-section',
      sectionKey: 'contact',
      tooltip: 'Submit commercial proposal inquiry',
    },
  ];

  const servicesList = [
    {
      title: 'GTM Strategy & Market Intelligence',
      badge: 'Strategy',
      path: '/services/gtm-strategy-market-intelligence' as RoutePath,
      description: 'Define ICPs, buyer roles, category positioning, and high-priority accounts before executing outreach.',
    },
    {
      title: 'RevOps & AI-Accelerated Sales',
      badge: 'Infrastructure & AI',
      path: '/services/revops-ai-sales' as RoutePath,
      description: 'Connect CRM architecture, qualification matrices, and automated AI workflows to eliminate manual drag.',
    },
    {
      title: 'End-to-End Commercial Execution',
      badge: 'Execution',
      path: '/services/commercial-execution' as RoutePath,
      description: 'Move qualified opportunities through discovery, solution alignment, proposal, and contract negotiation to close.',
    },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    document.body.style.overflow = '';
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (item.sectionKey === 'contact') {
      if (currentPath === '/') {
        const element = document.getElementById('contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection('contact');
          return;
        }
      }
      navigate('/', 'contact-section');
      return;
    }

    if (currentPath === '/') {
      if (item.sectionId) {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(item.sectionKey);
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(item.path, item.sectionId);
    }
  };

  const isItemActive = (item: typeof navItems[0]) => {
    if (currentPath === '/') {
      return activeSection === item.sectionKey;
    }
    if (item.path === '/') return false;
    return currentPath.startsWith(item.path);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F5F2]/95 dark:bg-[#121214]/95 backdrop-blur-md border-b border-[#E5E3DC] dark:border-white/10 shadow-xs'
          : 'bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC]/60 dark:border-white/5'
      }`}
    >
      <div className="nav-header-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[4.5rem] sm:min-h-[4.75rem] md:min-h-[5rem] lg:min-h-[5.5rem] py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Official Brand Logo - Balanced across Desktop, Tablet & Mobile */}
        <div className="shrink-0 flex items-center">
          <SalesNegoLogo imgClassName="h-10 sm:h-11 md:h-12 lg:h-13 xl:h-16 w-auto max-w-[200px] sm:max-w-[230px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[340px]" />
        </div>

        {/* Desktop & Tablet Landscape Navigation Pill Bar (Metafic style: rounded-full pills) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 xl:p-1.5 rounded-full bg-white/80 dark:bg-[#1C1B20]/80 border border-[#E5E3DC] dark:border-white/10 backdrop-blur-md shadow-2xs"
        >
          {navItems.map((item) => {
            const active = isItemActive(item);
            const tooltipId = `tooltip-nav-${item.sectionKey}`;
            const isTooltipVisible = activeTooltipId === tooltipId && !servicesDropdownOpen;

            if (item.label === 'Services') {
              return (
                <div
                  key="services-dropdown-container"
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    setServicesDropdownOpen(true);
                    setActiveTooltipId(null);
                  }}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    id="nav-link-services"
                    type="button"
                    onClick={() => handleNavClick(item)}
                    onFocus={() => {
                      if (!servicesDropdownOpen) {
                        setActiveTooltipId(tooltipId);
                      }
                    }}
                    onBlur={() => setActiveTooltipId((prev) => (prev === tooltipId ? null : prev))}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    aria-describedby={isTooltipVisible ? tooltipId : undefined}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 xl:px-4 py-1.5 xl:py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] ${
                      active
                        ? 'bg-[#FF6004] text-white shadow-xs'
                        : 'text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* ARIA Tooltip for Keyboard & Focus Users */}
                  <AnimatePresence>
                    {isTooltipVisible && (
                      <motion.div
                        id={tooltipId}
                        role="tooltip"
                        initial={{ opacity: 0, y: 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.14, ease: 'easeOut' }}
                        className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 whitespace-nowrap"
                      >
                        <div className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-[#161519] dark:bg-[#252329] border border-white/15 dark:border-white/20 shadow-xl flex items-center gap-1.5">
                          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#161519] dark:bg-[#252329] border-t border-l border-white/15 dark:border-white/20" />
                          <span className="relative z-10">{item.tooltip}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mega-menu dropdown in Metafic style */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 w-[640px]"
                      >
                        <div className="rounded-[20px] bg-white dark:bg-[#1C1B20] p-6 text-[#161519] dark:text-white shadow-[0_20px_50px_rgba(15,15,20,0.14)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#E5E3DC] dark:border-white/10">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E3DC] dark:border-white/10">
                            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6004]">
                              Commercial Systems &amp; Capabilities
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                navigate('/services');
                              }}
                              className="text-xs font-semibold text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] dark:hover:text-white flex items-center gap-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {servicesList.map((svc) => (
                              <button
                                key={svc.path}
                                type="button"
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  navigate(svc.path);
                                }}
                                className="group text-left p-3.5 rounded-xl hover:bg-[#F6F5F2] dark:hover:bg-white/5 border border-transparent hover:border-[#E5E3DC] dark:hover:border-white/10 transition-all flex items-start gap-3.5"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#FF6004] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-[#161519] dark:text-white group-hover:text-[#FF6004] transition-colors">
                                      {svc.title}
                                    </span>
                                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FF6004]/10 text-[#FF6004] dark:bg-white/10 dark:text-zinc-200">
                                      {svc.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[#555459] dark:text-zinc-400 mt-1 leading-relaxed">
                                    {svc.description}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6004] transition-colors shrink-0 mt-1" />
                              </button>
                            ))}
                          </div>

                          {/* Featured Pod Notice */}
                          <div className="mt-4 p-3 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#FF6004]" />
                              <span className="text-xs font-semibold text-[#161519] dark:text-zinc-200">
                                Dedicated Commercial Pod &amp; Fractional CRO available on monthly retainer
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                openCalendly();
                              }}
                              className="text-xs font-bold text-[#2563EB] dark:text-[#3B82F6] hover:underline shrink-0"
                            >
                              Explore Pod
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div key={item.label} className="relative">
                <button
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  onFocus={() => setActiveTooltipId(tooltipId)}
                  onBlur={() => setActiveTooltipId((prev) => (prev === tooltipId ? null : prev))}
                  onMouseEnter={() => setActiveTooltipId(tooltipId)}
                  onMouseLeave={() => setActiveTooltipId((prev) => (prev === tooltipId ? null : prev))}
                  aria-describedby={isTooltipVisible ? tooltipId : undefined}
                  className={`inline-flex items-center gap-1 rounded-full px-3 xl:px-4 py-1.5 xl:py-2 text-[13px] xl:text-[14px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] ${
                    active
                      ? 'bg-[#FF6004] text-white shadow-xs'
                      : 'text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                </button>

                {/* ARIA Tooltip for Keyboard & Mouse Users */}
                <AnimatePresence>
                  {isTooltipVisible && (
                    <motion.div
                      id={tooltipId}
                      role="tooltip"
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.14, ease: 'easeOut' }}
                      className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 whitespace-nowrap"
                    >
                      <div className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-[#161519] dark:bg-[#252329] border border-white/15 dark:border-white/20 shadow-xl flex items-center gap-1.5">
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#161519] dark:bg-[#252329] border-t border-l border-white/15 dark:border-white/20" />
                        <span className="relative z-10">{item.tooltip}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Utilities: Theme Switcher & Metafic Pill CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Subtle Theme Mode Toggle Pill */}
          <div
            id="theme-switcher-toggle"
            className="flex items-center p-1 rounded-full bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-2xs"
            role="group"
            aria-label="Theme mode selection"
          >
            <div className="relative">
              <button
                type="button"
                id="theme-btn-light"
                onClick={() => setTheme('light')}
                onFocus={() => setActiveTooltipId('tooltip-theme-light')}
                onBlur={() => setActiveTooltipId((prev) => (prev === 'tooltip-theme-light' ? null : prev))}
                onMouseEnter={() => setActiveTooltipId('tooltip-theme-light')}
                onMouseLeave={() => setActiveTooltipId((prev) => (prev === 'tooltip-theme-light' ? null : prev))}
                aria-describedby={activeTooltipId === 'tooltip-theme-light' ? 'tooltip-theme-light' : undefined}
                className={`p-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] cursor-pointer ${
                  !isDark
                    ? 'bg-[#F6F5F2] text-amber-600 shadow-2xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Light mode"
                title="Light theme"
              >
                <Sun className={`w-3.5 h-3.5 ${!isDark ? 'animate-theme-blink' : ''}`} />
              </button>

              <AnimatePresence>
                {activeTooltipId === 'tooltip-theme-light' && (
                  <motion.div
                    id="tooltip-theme-light"
                    role="tooltip"
                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.14, ease: 'easeOut' }}
                    className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 whitespace-nowrap"
                  >
                    <div className="relative px-2.5 py-1 rounded-md text-[11px] font-medium text-white bg-[#161519] dark:bg-[#252329] border border-white/15 shadow-xl">
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-[#161519] dark:bg-[#252329] border-t border-l border-white/15" />
                      <span className="relative z-10">Switch to light mode</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                type="button"
                id="theme-btn-dark"
                onClick={() => setTheme('dark')}
                onFocus={() => setActiveTooltipId('tooltip-theme-dark')}
                onBlur={() => setActiveTooltipId((prev) => (prev === 'tooltip-theme-dark' ? null : prev))}
                onMouseEnter={() => setActiveTooltipId('tooltip-theme-dark')}
                onMouseLeave={() => setActiveTooltipId((prev) => (prev === 'tooltip-theme-dark' ? null : prev))}
                aria-describedby={activeTooltipId === 'tooltip-theme-dark' ? 'tooltip-theme-dark' : undefined}
                className={`p-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] cursor-pointer ${
                  isDark
                    ? 'bg-zinc-800 text-[#FE9E30] shadow-2xs'
                    : 'text-zinc-400 hover:text-black'
                }`}
                aria-label="Dark mode"
                title="Dark theme"
              >
                <Moon className={`w-3.5 h-3.5 ${isDark ? 'animate-theme-blink' : ''}`} />
              </button>

              <AnimatePresence>
                {activeTooltipId === 'tooltip-theme-dark' && (
                  <motion.div
                    id="tooltip-theme-dark"
                    role="tooltip"
                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.14, ease: 'easeOut' }}
                    className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 whitespace-nowrap"
                  >
                    <div className="relative px-2.5 py-1 rounded-md text-[11px] font-medium text-white bg-[#161519] dark:bg-[#252329] border border-white/15 shadow-xl">
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-[#161519] dark:bg-[#252329] border-t border-l border-white/15" />
                      <span className="relative z-10">Switch to dark mode</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Primary Metafic-style Pill Action */}
          <div className="relative">
            <button
              id="nav-primary-cta"
              type="button"
              onClick={openCalendly}
              onFocus={() => setActiveTooltipId('tooltip-nav-cta')}
              onBlur={() => setActiveTooltipId((prev) => (prev === 'tooltip-nav-cta' ? null : prev))}
              onMouseEnter={() => setActiveTooltipId('tooltip-nav-cta')}
              onMouseLeave={() => setActiveTooltipId((prev) => (prev === 'tooltip-nav-cta' ? null : prev))}
              aria-describedby={activeTooltipId === 'tooltip-nav-cta' ? 'tooltip-nav-cta' : undefined}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#FF6004] hover:bg-[#E05300] active:scale-98 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] shrink-0 whitespace-nowrap max-w-full"
            >
              <span className="hidden lg:inline">Discuss Your Growth Priorities</span>
              <span className="lg:hidden">Discuss Priorities</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </button>

            <AnimatePresence>
              {activeTooltipId === 'tooltip-nav-cta' && (
                <motion.div
                  id="tooltip-nav-cta"
                  role="tooltip"
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.14, ease: 'easeOut' }}
                  className="pointer-events-none absolute right-0 top-full mt-2 z-50 whitespace-nowrap"
                >
                  <div className="relative px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-[#161519] dark:bg-[#252329] border border-white/15 shadow-xl flex items-center gap-1.5">
                    <span className="absolute -top-1 right-6 w-2 h-2 rotate-45 bg-[#161519] dark:bg-[#252329] border-t border-l border-white/15" />
                    <span className="relative z-10">Book a 30-min commercial discovery session with Raja</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile & Tablet Portrait Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-full text-[#161519] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile & Tablet Navigation Drawer (Portaled to document.body to avoid header backdrop-blur containing block) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-[100] lg:hidden" id="mobile-drawer-root">
                <motion.div
                  key="mobile-drawer-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    document.body.style.overflow = '';
                    setMobileMenuOpen(false);
                  }}
                  className="fixed inset-0 bg-black/70 backdrop-blur-xs"
                  aria-hidden="true"
                />

                <motion.div
                  key="mobile-nav-panel"
                  id="mobile-nav-panel"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile Navigation"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                  className="fixed right-0 top-0 bottom-0 w-[85%] sm:w-[70%] md:w-[400px] max-w-md h-full h-[100dvh] bg-[#F6F5F2] dark:bg-[#161519] text-[#161519] dark:text-[#FFFFFF] border-l border-[#E5E3DC] dark:border-white/10 shadow-2xl overflow-y-auto overscroll-contain z-10 flex flex-col justify-between p-6"
                >
                  <div className="flex flex-col space-y-6">
                    {/* Header: Brand Logo, Theme Toggle & Close */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E3DC] dark:border-white/10">
                      <SalesNegoLogo imgClassName="h-11 sm:h-12 w-auto max-w-[220px]" />
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setTheme(isDark ? 'light' : 'dark')}
                          className="p-2 rounded-full text-[#161519] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                          title={isDark ? 'Light mode' : 'Dark mode'}
                        >
                          {isDark ? (
                            <Sun className="w-5 h-5 text-[#FE9E30] animate-theme-blink" />
                          ) : (
                            <Moon className="w-5 h-5 text-amber-600 animate-theme-blink" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            document.body.style.overflow = '';
                            setMobileMenuOpen(false);
                          }}
                          className="p-2 rounded-full text-[#161519] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004]"
                          aria-label="Close menu"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    {/* Navigation Items */}
                    <nav aria-label="Mobile Menu Links" className="flex flex-col space-y-2">
                      {navItems.map((item) => {
                        const active = isItemActive(item);
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => handleNavClick(item)}
                            className={`text-left px-4 py-3 rounded-full text-base font-semibold transition-all flex items-center justify-between ${
                              active
                                ? 'bg-[#FF6004] text-white shadow-xs'
                                : 'text-[#161519] dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                          >
                            <span>{item.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-70" />
                          </button>
                        );
                      })}
                    </nav>

                    {/* Sub-services links */}
                    <div className="pt-4 border-t border-[#E5E3DC] dark:border-white/10">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#FF6004] block mb-2 px-2">
                        Core Solutions
                      </span>
                      <div className="space-y-1">
                        {servicesList.map((svc) => (
                          <button
                            key={svc.path}
                            type="button"
                            onClick={() => {
                              document.body.style.overflow = '';
                              setMobileMenuOpen(false);
                              navigate(svc.path);
                            }}
                            className="w-full text-left px-3 py-2.5 text-xs font-medium text-[#555459] dark:text-zinc-300 hover:text-[#FF6004] dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between"
                          >
                            <span className="truncate">{svc.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-2 text-zinc-400" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Drawer Bottom CTAs */}
                  <div className="pt-6 mt-6 border-t border-[#E5E3DC] dark:border-white/10 space-y-3 shrink-0">
                    <button
                      id="mobile-drawer-cta-btn"
                      type="button"
                      onClick={() => {
                        document.body.style.overflow = '';
                        setMobileMenuOpen(false);
                        openCalendly();
                      }}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                      className="w-full py-3.5 px-4 rounded-full bg-[#FF6004] text-white text-center font-bold text-sm shadow-md hover:bg-[#E05300] active:scale-98 transition-all flex items-center justify-center gap-2 nav-mobile-cta-full"
                    >
                      <span>Discuss Your Growth Priorities</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </button>

                    <div className="text-center">
                      <a
                        href="mailto:sales@salesnego.com"
                        className="text-xs text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] dark:hover:text-white transition-colors"
                      >
                        sales@salesnego.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};
