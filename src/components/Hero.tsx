'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

// Companies with logos
const companies = [
  { name: 'Rc Imitation', logo: '/logos/rc-imitation.png' },
  { name: 'Makerman Jeans', logo: '/logos/makerman-jeans.png' },
  { name: 'Mevish Ceramic', logo: '/logos/mevish-ceramic.png' },
  { name: 'Orgets', logo: '/logos/orgets.png' },
  { name: 'Maitri Fabrics', logo: '/logos/maitri-fabrics.png' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[var(--background)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-gold)]/5 via-transparent to-[var(--accent-coral)]/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-gold)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-coral)]/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-badge mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary-gold)]" />
              <span className="text-sm text-[var(--text-secondary)]">The Anti-Agency</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]">
              Manual work is a tax
              <br />
              <span className="gradient-text">on your revenue.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              We don&apos;t just build software; we <span className="text-[var(--primary-gold)] font-medium">surgically remove the bottlenecks</span> that slow your growth.
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://cal.com/dax-yeildops/yield-diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 apple-button px-8 py-4 text-base font-medium cursor-pointer"
            >
              Start the Diagnostic ($99)
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Money-back guarantee */}
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              100% Money-back guarantee if we don&apos;t find the waste.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[var(--text-muted)]"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
      {/* Trusted By Section - Bottom of Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 pb-12"
      >
        <p className="text-center text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-6">
          Trusted By
        </p>

        {/* Scrolling logos - full width on mobile, 60% on desktop */}
        <div className="w-full md:max-w-[60%] mx-auto relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <div
              className="flex gap-8 items-center animate-scroll"
              style={{
                animationDuration: '25s',
              }}
            >
              {/* Double logos for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-2 glass-badge min-w-[180px]"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                  <span className="text-[var(--text-muted)] font-medium text-sm whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
