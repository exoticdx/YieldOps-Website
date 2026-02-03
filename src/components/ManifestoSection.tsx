'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    typical: 'Hourly billing that incentivizes slow work',
    yieldops: 'Flat pricing so we move fast'
  },
  {
    typical: 'Months to build, years to maintain',
    yieldops: 'Days to build, automated to maintain'
  },
  {
    typical: 'Yes-men who agree with everything',
    yieldops: 'We tell you the hard truth'
  },
  {
    typical: 'Generic solutions for every client',
    yieldops: 'Custom systems for your workflow'
  },
  {
    typical: 'Disappear after handoff',
    yieldops: 'Support until you\'re confident'
  }
];

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent-coral)] uppercase tracking-wide mb-3">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            We&apos;re not like other agencies
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            We built YieldOps because we were tired of the agency status quo.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-xl">
          {/* Header */}
          <div className="grid grid-cols-2">
            <div className="p-5 border-r border-[var(--border)]">
              <span className="text-sm font-medium text-[var(--text-muted)]">Typical Agencies</span>
            </div>
            <div className="p-5">
              <span className="text-sm font-medium text-[var(--primary-gold)]">YieldOps</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="grid grid-cols-2 border-t border-[var(--border)]"
            >
              <div className="p-5 border-r border-[var(--border)] flex items-start gap-3">
                <X className="w-4 h-4 text-[var(--accent-coral)] shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--text-muted)]">{item.typical}</span>
              </div>
              <div className="p-5 flex items-start gap-3 bg-[var(--primary-gold)]/5">
                <Check className="w-4 h-4 text-[var(--primary-gold)] shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--text-primary)]">{item.yieldops}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-medium text-[var(--text-primary)]">
            &ldquo;Efficiency isn&apos;t about working <span className="text-[var(--primary-gold)]">harder</span>. 
            <br className="hidden sm:block" />
            It&apos;s about eliminating the work that <span className="text-[var(--primary-gold)]">shouldn&apos;t exist</span>.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-[var(--text-muted)]">— The YieldOps Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}
