'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const philosophyPoints = [
  {
    title: 'Zero-Markup Ethics',
    text: 'If a server costs us ₹10, it costs you ₹10. We refuse to inflate raw infrastructure costs just to boost our margins.'
  },
  {
    title: '100% White-Labeled',
    text: 'Your brand is the hero. We build the engine in the background, but your clients only ever see your logo and your colors.'
  },
  {
    title: 'AI at the Core',
    text: 'Every product we launch is designed to eliminate human friction using the latest in machine learning and scalable architecture.'
  }
];

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });
  
  const tableScale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);
  const tableOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="philosophy" ref={sectionRef} className="py-24 px-6 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent-coral)] uppercase tracking-widest mb-3">
            Our Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6">
            We don&apos;t sell software subscriptions. <br /> We build tech partnerships.
          </h2>
        </motion.div>

        {/* Philosophy Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-xl hover:border-[var(--primary-gold)]/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--primary-gold)] mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-medium text-[var(--text-primary)]">
            &ldquo;Efficiency isn&apos;t about working <span className="text-[var(--primary-gold)]">harder</span>. 
            <br className="hidden sm:block" />
            It&apos;s about eliminating the work that <span className="text-[var(--primary-gold)]">shouldn&apos;t exist</span>.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
