'use client';

import { motion } from 'framer-motion';

// Placeholder company names - replace with actual logos later
const companies = [
  'Acme Corp',
  'TechFlow',
  'DataSync',
  'CloudBase',
  'InnovateLab',
  'ScaleUp',
  'GrowthIO',
  'AutoMate',
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <p className="text-center text-sm font-medium text-[var(--text-muted)] uppercase tracking-wide mb-10">
          Trusted By
        </p>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          {/* Scrolling container */}
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 glass-badge"
              >
                <span className="text-[var(--text-secondary)] font-medium text-sm whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
