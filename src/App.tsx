import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CalendlyModal } from './components/CalendlyModal';
import { WhatsAppChatWidget } from './components/WhatsAppChatWidget';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailGTM } from './pages/ServiceDetailGTM';
import { ServiceDetailRevOps } from './pages/ServiceDetailRevOps';
import { ServiceDetailExecution } from './pages/ServiceDetailExecution';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesIndexPage />;
      case '/services/gtm-strategy-market-intelligence':
        return <ServiceDetailGTM />;
      case '/services/revops-ai-sales':
        return <ServiceDetailRevOps />;
      case '/services/commercial-execution':
        return <ServiceDetailExecution />;
      case '/case-studies':
        return <CaseStudiesPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-[#F6F5F2] transition-colors duration-200 selection:bg-[#FF6004] selection:text-white">
      {/* Accessible skip link for keyboard users (WCAG AA requirement) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 px-4 py-2 bg-[#FF6004] text-white rounded-full font-semibold text-sm shadow-md"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 w-full flex flex-col pt-18 sm:pt-22 md:pt-24" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full flex-1 flex flex-col"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <CalendlyModal />
      <WhatsAppChatWidget />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}
