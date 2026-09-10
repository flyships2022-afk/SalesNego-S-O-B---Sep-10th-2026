import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Mail, Phone, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { openCalendly } = useNavigation();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    selling: '',
    targetMarket: '',
    objective: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xqpkpera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          selling: formData.selling,
          targetMarket: formData.targetMarket,
          objective: formData.objective,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          selling: '',
          targetMarket: '',
          objective: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || 'Unable to submit the form. Please try again.');
        setStatus('error');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please email us directly at sales@salesnego.com.');
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Unified Hero & Contact Section */}
      <section
        id="contact-hero-section"
        aria-label="Contact SalesNego"
        style={{ maxWidth: '100%', boxSizing: 'border-box' }}
        className="top-level-section relative overflow-hidden w-full max-w-full pt-10 pb-16 md:pt-14 md:pb-24 border-b border-gray-200 dark:border-zinc-700/60 bg-[#F7F9FE] dark:bg-[#18181B] text-[#191919] dark:text-white"
      >
        {/* Dynamic Faded Grid Matrix Overlay - Enhanced Light Mode Visibility */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 dark:hidden bg-[linear-gradient(to_right,rgba(255,96,4,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,96,4,0.18)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)'
          }}
        />

        {/* Light-colored Grid Matrix Overlay - Dark Mode Only */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading + Calendly + Contact Details */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block mb-2.5">
                  CONTACT SALESNEGO
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#191919] dark:text-[#FFFFFF] mb-3 leading-tight">
                  Let's Discuss Your Commercial Priorities.
                </h1>
                <p className="text-base sm:text-lg text-[#606060] dark:text-zinc-300 leading-relaxed">
                  Tell us what you are selling, where you want to grow and where the commercial motion
                  is getting stuck.
                </p>
              </div>

              {/* Calendly Booking Card */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#27272A] border border-gray-200 dark:border-zinc-700/60 space-y-3 shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6004] dark:text-[#FE9E30] block">
                  FASTEST ROUTE
                </span>
                <h2 className="text-lg font-bold text-[#191919] dark:text-[#FFFFFF]">
                  Schedule Directly via Calendly
                </h2>
                <p className="text-xs sm:text-sm text-[#606060] dark:text-zinc-300 leading-relaxed">
                  Book a direct 30-minute commercial review to discuss your current GTM or sales
                  bottlenecks.
                </p>
                <button
                  id="contact-calendly-button"
                  onClick={openCalendly}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#103CE7] hover:bg-[#0D32C2] dark:bg-[#FF6004] dark:hover:bg-[#E05300] rounded-lg transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#103CE7] dark:focus-visible:ring-[#FF6004] cursor-pointer"
                >
                  <span>Discuss Your Growth Priorities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Contact Details */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#27272A] border border-gray-200 dark:border-zinc-700/60 shadow-md space-y-5">
                {/* Direct Email with Black Mail Icon */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-2">
                    Direct Email
                  </span>
                  <a
                    href="mailto:sales@salesnego.com"
                    className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#191919] dark:text-[#FFFFFF] hover:text-[#FF6004] dark:hover:text-[#FE9E30] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-black dark:text-white" />
                    <span>sales@salesnego.com</span>
                  </a>
                </div>

                {/* LinkedIn: Official LinkedIn logo clickable, no company url text */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-2">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/company/salesnego/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    title="Follow SalesNego on LinkedIn"
                    aria-label="SalesNego LinkedIn profile"
                  >
                    <img
                      src="https://ik.imagekit.io/4rtwqlnkg/Linkedin%20logo.png?updatedAt=1788412751308"
                      alt="SalesNego LinkedIn"
                      className="w-8 h-8 object-contain rounded-full"
                    />
                  </a>
                </div>

                {/* Mobile (Changed from WhatsApp Direct Lines) */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#606060] dark:text-zinc-400 block mb-2.5">
                    Mobile
                  </span>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-[#191919] dark:text-[#FFFFFF]">
                      <Phone className="w-4 h-4 text-black dark:text-white" />
                      <span className="font-bold text-xs text-[#606060] dark:text-zinc-400 w-12">
                        USA:
                      </span>
                      <a
                        href="tel:+14156886517"
                        className="hover:underline font-medium hover:text-[#FF6004] dark:hover:text-[#FE9E30]"
                      >
                        +1 415 688 6517
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#191919] dark:text-[#FFFFFF]">
                      <Phone className="w-4 h-4 text-black dark:text-white" />
                      <span className="font-bold text-xs text-[#606060] dark:text-zinc-400 w-12">
                        UAE:
                      </span>
                      <a
                        href="tel:+971528770047"
                        className="hover:underline font-medium hover:text-[#FF6004] dark:hover:text-[#FE9E30]"
                      >
                        +971 52 877 0047
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#191919] dark:text-[#FFFFFF]">
                      <Phone className="w-4 h-4 text-black dark:text-white" />
                      <span className="font-bold text-xs text-[#606060] dark:text-zinc-400 w-12">
                        India:
                      </span>
                      <a
                        href="tel:+919884450102"
                        className="hover:underline font-medium hover:text-[#FF6004] dark:hover:text-[#FE9E30]"
                      >
                        +91 98844 50102
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Start the Conversation Box - Adjusted to top right adjacent to the heading */}
            <div className="lg:col-span-7">
              <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#27272A] border border-gray-200 dark:border-zinc-700/60 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-[#191919] dark:text-[#FFFFFF] mb-1.5">
                  Start the Conversation
                </h2>
                <p className="text-sm text-[#606060] dark:text-zinc-300 mb-6">
                  Provide brief context on your product and sales cycle.
                </p>

                {status === 'success' ? (
                  <div className="p-6 rounded-xl bg-[#FF6004]/10 dark:bg-[#FF6004]/15 border border-[#FF6004]/30 dark:border-[#FF6004]/40 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#FF6004] mx-auto" />
                    <h3 className="text-lg font-bold text-[#191919] dark:text-[#FFFFFF]">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#606060] dark:text-zinc-300">
                      Thank you. We will review your context and respond promptly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 inline-flex text-xs font-bold text-[#FF6004] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    action="https://formspree.io/f/xqpkpera"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {status === 'error' && (
                      <div className="p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-300">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                        >
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                      >
                        Company *
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                      />
                    </div>

                    {/* What are you selling? */}
                    <div>
                      <label
                        htmlFor="contact-selling"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                      >
                        What are you selling? *
                      </label>
                      <input
                        type="text"
                        id="contact-selling"
                        name="selling"
                        required
                        value={formData.selling}
                        onChange={handleChange}
                        placeholder="e.g. B2B SaaS, AI workflow software, enterprise service"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                      />
                    </div>

                    {/* Target Market */}
                    <div>
                      <label
                        htmlFor="contact-target-market"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                      >
                        Target Market *
                      </label>
                      <input
                        type="text"
                        id="contact-target-market"
                        name="targetMarket"
                        required
                        value={formData.targetMarket}
                        onChange={handleChange}
                        placeholder="e.g. North America Enterprise, European Mid-Market"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                      />
                    </div>

                    {/* What are you trying to achieve? */}
                    <div>
                      <label
                        htmlFor="contact-objective"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                      >
                        What are you trying to achieve? *
                      </label>
                      <input
                        type="text"
                        id="contact-objective"
                        name="objective"
                        required
                        value={formData.objective}
                        onChange={handleChange}
                        placeholder="e.g. GTM positioning, build RevOps pipe, end-to-end deal execution"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#606060] dark:text-zinc-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Additional details on where the commercial motion is getting stuck..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white dark:bg-[#18181B] border border-gray-200 dark:border-zinc-700/60 text-[#191919] dark:text-[#FFFFFF] placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF6004]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#FF6004] hover:bg-[#E05300] active:scale-98 rounded-lg shadow-sm transition-all disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6004] cursor-pointer"
                      >
                        <span>
                          {status === 'submitting'
                            ? 'Sending...'
                            : 'Start the Conversation'}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
