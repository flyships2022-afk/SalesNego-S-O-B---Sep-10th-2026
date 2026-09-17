import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Mail,
  Compass,
  Layers,
  Briefcase,
  Users,
  Calendar,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { SalesNegoLogo } from './SalesNegoLogo';
import { RoutePath } from '../types';
import { scrollToSection } from '../utils/scroll';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openCalendly } = useNavigation();
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const h = window.location.hash.replace('#', '');
      if (h === 'services' || h === 'about' || h === 'case-studies' || h === 'contact') {
        return h;
      }
    }
    return 'home';
  });
  const activeSectionRef = useRef<string>(activeSection);
  activeSectionRef.current = activeSection;
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isManualScrollingRef = useRef<boolean>(false);
  const targetSectionRef = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen for physical user scroll input (mouse wheel, touch gesture) to disengage programmatic scroll lock
  useEffect(() => {
    const handleUserManualScroll = () => {
      if (isManualScrollingRef.current) {
        isManualScrollingRef.current = false;
        targetSectionRef.current = null;
        if (scrollTimeoutRef.current) {
          window.clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
      }
    };

    window.addEventListener('wheel', handleUserManualScroll, { passive: true });
    window.addEventListener('touchmove', handleUserManualScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleUserManualScroll);
      window.removeEventListener('touchmove', handleUserManualScroll);
    };
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

      // Do not allow scroll listener to override active button during programmatic smooth scrolling
      if (isManualScrollingRef.current) return;

      // On homepage, detect active section for smooth scrolling indicator & URL hash
      if (currentPath === '/') {
        // 1. If user is at top of the page, activate home and clear hash
        if (window.scrollY < 80) {
          if (activeSectionRef.current !== 'home') {
            setActiveSection('home');
            activeSectionRef.current = 'home';
          }
          if (window.location.hash) {
            try {
              window.history.replaceState(null, '', window.location.pathname);
            } catch {}
          }
          return;
        }

        // 2. If near bottom of document or contact section is prominently in view, activate contact
        const scrollBottom = window.innerHeight + window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const contactEl = document.getElementById('contact') || document.getElementById('contact-section');
        if (contactEl) {
          const contactRect = contactEl.getBoundingClientRect();
          if (
            scrollBottom >= docHeight - 80 ||
            (contactRect.top <= window.innerHeight * 0.45 && contactRect.bottom > 100)
          ) {
            if (activeSectionRef.current !== 'contact') {
              setActiveSection('contact');
              activeSectionRef.current = 'contact';
            }
            if (window.location.hash !== '#contact') {
              try {
                window.history.replaceState(null, '', `${window.location.pathname}#contact`);
              } catch {}
            }
            return;
          }
        }

        // 3. Sections mapped to nav keys
        const sections = [
          { id: 'hero-section', key: 'home' },
          { id: 'commercial-gap-section', key: 'home' },
          { id: 'services', key: 'services' },
          { id: 'services-section', key: 'services' },
          { id: 'why-salesnego-section', key: 'services' },
          { id: 'journey-section', key: 'services' },
          { id: 'about', key: 'about' },
          { id: 'about-section', key: 'about' },
          { id: 'case-studies', key: 'case-studies' },
          { id: 'experience-section', key: 'case-studies' },
          { id: 'engagement-section', key: 'case-studies' },
          { id: 'contact', key: 'contact' },
          { id: 'contact-section', key: 'contact' },
        ];

        const navThreshold = 140; // 140px from top of viewport (just below sticky header)
        let matched: string | null = null;

        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= navThreshold && rect.bottom > navThreshold) {
              matched = sec.key;
              break;
            }
          }
        }

        if (!matched) {
          // Fallback: choose section whose top is closest above or at threshold
          let closestKey = 'home';
          let minDistance = Infinity;
          for (const sec of sections) {
            const el = document.getElementById(sec.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= navThreshold) {
                const dist = navThreshold - rect.top;
                if (dist < minDistance) {
                  minDistance = dist;
                  closestKey = sec.key;
                }
              }
            }
          }
          matched = closestKey;
        }

        const newKey = matched || 'home';
        if (activeSectionRef.current !== newKey) {
          setActiveSection(newKey);
          activeSectionRef.current = newKey;
        }

        const targetUrl =
          newKey === 'home'
            ? window.location.pathname
            : `${window.location.pathname}#${newKey}`;
        const currentFullUrl = window.location.pathname + window.location.hash;
        if (targetUrl !== currentFullUrl) {
          try {
            window.history.replaceState(null, '', targetUrl);
          } catch {}
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Only execute initial scroll calculation if not locked in a programmatic navigation
    if (!isManualScrollingRef.current) {
      handleScroll();
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentPath]);

  const navItems: {
    label: string;
    path: string;
    sectionId: string;
    sectionKey: string;
    tooltip: string;
    icon: React.ComponentType<{ className?: string }>;
    subtitle: string;
  }[] = [
    {
      label: 'Home',
      path: '/',
      sectionId: 'hero-section',
      sectionKey: 'home',
      tooltip: 'Homepage & commercial overview',
      icon: Compass,
      subtitle: 'Overview & Commercial System',
    },
    {
      label: 'Services',
      path: '/#services',
      sectionId: 'services',
      sectionKey: 'services',
      tooltip: 'GTM Strategy, RevOps & Execution',
      icon: Layers,
      subtitle: 'Strategy, RevOps & Execution',
    },
    {
      label: 'About Us',
      path: '/#about',
      sectionId: 'about',
      sectionKey: 'about',
      tooltip: 'Founder leadership & mission',
      icon: Users,
      subtitle: 'Founder Leadership & Track Record',
    },
    {
      label: 'Case Studies',
      path: '/#case-studies',
      sectionId: 'case-studies',
      sectionKey: 'case-studies',
      tooltip: 'Selected client case studies & commercial experience',
      icon: Briefcase,
      subtitle: 'Selected Case Studies & Experience',
    },
    {
      label: 'Contact',
      path: '/#contact',
      sectionId: 'contact',
      sectionKey: 'contact',
      tooltip: 'Submit commercial proposal inquiry',
      icon: PhoneCall,
      subtitle: 'Inquire & Commercial Proposals',
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

    // Immediately update active section so the orange indicator moves without delay
    setActiveSection(item.sectionKey);
    activeSectionRef.current = item.sectionKey;
    targetSectionRef.current = item.sectionKey;

    // Lock scroll spy during smooth scroll transition so it doesn't fight the user's click
    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isManualScrollingRef.current = false;
      targetSectionRef.current = null;
    }, 1800);

    if (currentPath === '/') {
      const targetUrl = item.sectionKey === 'home' ? '/' : `/#${item.sectionId}`;
      try {
        window.history.pushState(null, '', targetUrl);
      } catch {}

      if (item.sectionKey === 'home' || item.sectionId === 'hero-section') {
        scrollToSection('hero-section', { smooth: true });
        return;
      }
      if (item.sectionId) {
        scrollToSection(item.sectionId, { smooth: true });
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (item.sectionKey === 'home') {
        navigate('/', 'hero-section');
      } else {
        navigate('/', item.sectionId);
      }
    }
  };

  const isItemActive = (item: typeof navItems[0]) => {
    if (currentPath === '/') {
      return activeSection === item.sectionKey;
    }
    if (item.sectionKey === 'contact' && currentPath === '/contact') {
      return true;
    }
    if (item.sectionKey === 'about' && currentPath === '/about') {
      return true;
    }
    if (item.sectionKey === 'case-studies' && currentPath === '/case-studies') {
      return true;
    }
    if (
      item.sectionKey === 'services' &&
      (currentPath === '/services' || currentPath.startsWith('/services/'))
    ) {
      return true;
    }
    return false;
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
          <LayoutGroup id="desktop-navbar-nav">
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
                  <a
                    href="/#services"
                    id="nav-link-services"
                    onClick={(e) => {
                      if (
                        !e.defaultPrevented &&
                        e.button === 0 &&
                        !e.metaKey &&
                        !e.altKey &&
                        !e.ctrlKey &&
                        !e.shiftKey
                      ) {
                        e.preventDefault();
                        handleNavClick(item);
                      }
                    }}
                    onFocus={() => {
                      if (!servicesDropdownOpen) {
                        setActiveTooltipId(tooltipId);
                      }
                    }}
                    onBlur={() => setActiveTooltipId((prev) => (prev === tooltipId ? null : prev))}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    aria-describedby={isTooltipVisible ? tooltipId : undefined}
                    className={`relative inline-flex items-center gap-1.5 rounded-full px-3 xl:px-4 py-1.5 xl:py-2 text-[13px] xl:text-[14px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] cursor-pointer ${
                      !active ? 'hover:bg-black/5 dark:hover:bg-white/5' : ''
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-[#FF6004] shadow-xs pointer-events-none"
                        transition={{
                          type: 'spring',
                          stiffness: 450,
                          damping: 34,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200 ${
                        active
                          ? 'text-white font-semibold'
                          : 'text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </a>

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
                            <a
                              href="/services"
                              onClick={(e) => {
                                if (
                                  !e.defaultPrevented &&
                                  e.button === 0 &&
                                  !e.metaKey &&
                                  !e.altKey &&
                                  !e.ctrlKey &&
                                  !e.shiftKey
                                ) {
                                  e.preventDefault();
                                  setServicesDropdownOpen(false);
                                  navigate('/services');
                                }
                              }}
                              className="text-xs font-semibold text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] dark:hover:text-white flex items-center gap-1 cursor-pointer"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {servicesList.map((svc) => (
                              <a
                                key={svc.path}
                                href={svc.path}
                                onClick={(e) => {
                                  if (
                                    !e.defaultPrevented &&
                                    e.button === 0 &&
                                    !e.metaKey &&
                                    !e.altKey &&
                                    !e.ctrlKey &&
                                    !e.shiftKey
                                  ) {
                                    e.preventDefault();
                                    setServicesDropdownOpen(false);
                                    navigate(svc.path);
                                  }
                                }}
                                className="group text-left p-3.5 rounded-xl hover:bg-[#F6F5F2] dark:hover:bg-white/5 border border-transparent hover:border-[#E5E3DC] dark:hover:border-white/10 transition-all flex items-start gap-3.5 cursor-pointer"
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
                              </a>
                            ))}
                          </div>

                          {/* Featured Advisory Notice */}
                          <div className="mt-4 p-3 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#FF6004]" />
                              <span className="text-xs font-semibold text-[#161519] dark:text-zinc-200">
                                Founder-Led Commercial Advisory &amp; Fractional CRO available on monthly retainer
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
                              Discuss Partnership
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
                <a
                  href={item.path}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    if (
                      !e.defaultPrevented &&
                      e.button === 0 &&
                      !e.metaKey &&
                      !e.altKey &&
                      !e.ctrlKey &&
                      !e.shiftKey
                    ) {
                      e.preventDefault();
                      handleNavClick(item);
                    }
                  }}
                  onFocus={() => setActiveTooltipId(tooltipId)}
                  onBlur={() => setActiveTooltipId((prev) => (prev === tooltipId ? null : prev))}
                  onMouseEnter={() => setActiveTooltipId(tooltipId)}
                  onMouseLeave={() => setActiveTooltipId((prev) => (prev === tooltipId ? null : prev))}
                  aria-describedby={isTooltipVisible ? tooltipId : undefined}
                  className={`relative inline-flex items-center gap-1 rounded-full px-3.5 xl:px-4 py-1.5 xl:py-2 text-[13px] xl:text-[14px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] cursor-pointer ${
                    !active ? 'hover:bg-black/5 dark:hover:bg-white/5' : ''
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#FF6004] shadow-xs pointer-events-none"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 34,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      active
                        ? 'text-white font-semibold'
                        : 'text-[#161519] dark:text-zinc-200 hover:text-[#FF6004] dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>

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
          </LayoutGroup>
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
              <span>Schedule a Call</span>
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
                {/* Modern Backdrop Blur Overlay */}
                <motion.div
                  key="mobile-drawer-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  onClick={() => {
                    document.body.style.overflow = '';
                    setMobileMenuOpen(false);
                  }}
                  className="fixed inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-md"
                  aria-hidden="true"
                />

                {/* Slide-in Navigation Panel */}
                <motion.div
                  key="mobile-nav-panel"
                  id="mobile-nav-panel"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile Navigation"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.85 }}
                  className="fixed right-0 top-0 bottom-0 w-[88%] sm:w-[75%] md:w-[420px] max-w-md h-full h-[100dvh] bg-[#F6F5F2] dark:bg-[#121215] text-[#161519] dark:text-white border-l border-[#E5E3DC] dark:border-white/10 shadow-[-16px_0_50px_rgba(0,0,0,0.35)] dark:shadow-[-20px_0_60px_rgba(0,0,0,0.8)] overflow-y-auto overscroll-contain z-10 flex flex-col justify-between p-5 sm:p-6"
                >
                  {/* Decorative Brand Gradient Accent Line & Glow */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF6004] via-[#FE9E30]/70 to-transparent pointer-events-none" />
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF6004]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col space-y-5">
                    {/* Header: Brand Logo, Theme Toggle & Tactile Close */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E3DC] dark:border-white/10">
                      <SalesNegoLogo imgClassName="h-10 sm:h-11 w-auto max-w-[210px]" />
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
                          className="p-2 rounded-full text-[#161519] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:text-[#FF6004] dark:hover:text-[#FF6004] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] active:scale-90"
                          aria-label="Close menu"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    {/* Staggered Navigation Items List */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.08,
                          },
                        },
                      }}
                      className="flex flex-col space-y-1.5"
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF6004] px-2 mb-1">
                        Navigation
                      </span>

                      {navItems.map((item) => {
                        const active = isItemActive(item);
                        const Icon = item.icon;
                        const isServices = item.label === 'Services';

                        return (
                          <motion.div
                            key={item.label}
                            variants={{
                              hidden: { opacity: 0, x: 20 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  type: 'spring',
                                  damping: 24,
                                  stiffness: 300,
                                },
                              },
                            }}
                            className="flex flex-col"
                          >
                            <div
                              className={`group relative rounded-xl transition-all flex items-center justify-between p-1.5 overflow-hidden border ${
                                active
                                  ? 'bg-[#FF6004]/10 dark:bg-[#FF6004]/15 border-[#FF6004]/40 shadow-xs'
                                  : 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border-transparent hover:border-[#E5E3DC] dark:hover:border-white/10'
                              }`}
                            >
                              <a
                                href={item.path}
                                onClick={(e) => {
                                  if (
                                    !e.defaultPrevented &&
                                    e.button === 0 &&
                                    !e.metaKey &&
                                    !e.altKey &&
                                    !e.ctrlKey &&
                                    !e.shiftKey
                                  ) {
                                    e.preventDefault();
                                    handleNavClick(item);
                                  }
                                }}
                                className="flex-1 text-left px-2 py-1.5 flex items-center gap-3 cursor-pointer"
                              >
                                <div
                                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                    active
                                      ? 'bg-[#FF6004] text-white shadow-xs'
                                      : 'bg-black/5 dark:bg-white/5 text-[#555459] dark:text-zinc-300 group-hover:bg-[#FF6004]/10 group-hover:text-[#FF6004]'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span
                                    className={`text-sm font-bold transition-colors ${
                                      active
                                        ? 'text-[#FF6004] dark:text-[#FE9E30]'
                                        : 'text-[#161519] dark:text-white group-hover:text-[#FF6004] dark:group-hover:text-white'
                                    }`}
                                  >
                                    {item.label}
                                  </span>
                                  <span className="text-[11px] text-[#71717A] dark:text-zinc-400 font-normal truncate max-w-[200px]">
                                    {item.subtitle}
                                  </span>
                                </div>
                              </a>

                              {isServices ? (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileServicesExpanded((prev) => !prev);
                                  }}
                                  className={`p-2 rounded-lg transition-colors cursor-pointer ${
                                    mobileServicesExpanded
                                      ? 'text-[#FF6004] bg-[#FF6004]/10'
                                      : 'text-zinc-400 hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                                  }`}
                                  aria-label={
                                    mobileServicesExpanded
                                      ? 'Collapse Commercial Capabilities'
                                      : 'Expand Commercial Capabilities'
                                  }
                                >
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-250 ${
                                      mobileServicesExpanded ? 'rotate-180 text-[#FF6004]' : ''
                                    }`}
                                  />
                                </button>
                              ) : (
                                <a
                                  href={item.path}
                                  onClick={(e) => {
                                    if (
                                      !e.defaultPrevented &&
                                      e.button === 0 &&
                                      !e.metaKey &&
                                      !e.altKey &&
                                      !e.ctrlKey &&
                                      !e.shiftKey
                                    ) {
                                      e.preventDefault();
                                      handleNavClick(item);
                                    }
                                  }}
                                  className="p-2 text-zinc-400 group-hover:text-[#FF6004] transition-colors cursor-pointer"
                                  aria-label={`Go to ${item.label}`}
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </a>
                              )}
                            </div>

                            {/* Nested Commercial Solutions Accordion for Services */}
                            {isServices && (
                              <AnimatePresence>
                                {mobileServicesExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden pl-4 pr-1 pt-2 space-y-1.5"
                                  >
                                    <div className="border-l-2 border-[#FF6004]/30 pl-3 py-1 space-y-1.5">
                                      {servicesList.map((svc) => (
                                        <a
                                          key={svc.path}
                                          href={svc.path}
                                          onClick={(e) => {
                                            if (
                                              !e.defaultPrevented &&
                                              e.button === 0 &&
                                              !e.metaKey &&
                                              !e.altKey &&
                                              !e.ctrlKey &&
                                              !e.shiftKey
                                            ) {
                                              e.preventDefault();
                                              document.body.style.overflow = '';
                                              setMobileMenuOpen(false);
                                              navigate(svc.path);
                                            }
                                          }}
                                          className="w-full text-left p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-[#FF6004]/10 dark:hover:bg-white/10 border border-transparent hover:border-[#FF6004]/30 transition-all flex items-start justify-between gap-2 group/sub cursor-pointer"
                                        >
                                          <div>
                                            <div className="flex items-center gap-1.5 mb-0.5">
                                              <span className="text-xs font-semibold text-[#161519] dark:text-zinc-200 group-hover/sub:text-[#FF6004] transition-colors">
                                                {svc.title}
                                              </span>
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6004]">
                                              {svc.badge}
                                            </span>
                                          </div>
                                          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/sub:text-[#FF6004] transition-colors shrink-0 mt-0.5" />
                                        </a>
                                      ))}

                                      <a
                                        href="/services"
                                        onClick={(e) => {
                                          if (
                                            !e.defaultPrevented &&
                                            e.button === 0 &&
                                            !e.metaKey &&
                                            !e.altKey &&
                                            !e.ctrlKey &&
                                            !e.shiftKey
                                          ) {
                                            e.preventDefault();
                                            document.body.style.overflow = '';
                                            setMobileMenuOpen(false);
                                            navigate('/services');
                                          }
                                        }}
                                        className="w-full text-left pt-1.5 px-2 text-[11px] font-bold text-[#FF6004] hover:underline flex items-center gap-1 cursor-pointer"
                                      >
                                        <span>View Complete Services Overview</span>
                                        <ArrowRight className="w-3 h-3" />
                                      </a>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Mobile Drawer Bottom CTAs & Commercial Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22, duration: 0.25 }}
                    className="relative z-10 pt-4 mt-4 border-t border-[#E5E3DC] dark:border-white/10 space-y-3 shrink-0"
                  >
                    {/* Live Availability Badge */}
                    <div className="flex items-center justify-center gap-2 py-1 px-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 text-[11px] font-medium text-[#555459] dark:text-zinc-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Commercial Advisory &amp; Client Capacity Open</span>
                    </div>

                    {/* Primary Metafic-style Gradient Button */}
                    <button
                      id="mobile-drawer-cta-btn"
                      type="button"
                      onClick={() => {
                        document.body.style.overflow = '';
                        setMobileMenuOpen(false);
                        openCalendly();
                      }}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                      className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#FF6004] to-[#FE9E30] text-white text-center font-bold text-sm shadow-md hover:shadow-lg hover:shadow-[#FF6004]/30 active:scale-98 transition-all flex items-center justify-center gap-2 nav-mobile-cta-full cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>Schedule a Call</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </button>

                    {/* Direct Contact Links */}
                    <div className="flex items-center justify-center gap-4 pt-1">
                      <a
                        href="mailto:sales@salesnego.com"
                        className="inline-flex items-center gap-1.5 text-xs text-[#555459] dark:text-zinc-400 hover:text-[#FF6004] dark:hover:text-white transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#FF6004]" />
                        <span>sales@salesnego.com</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};
