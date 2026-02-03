'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Map, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'The Diagnostic',
    price: '$99',
    description: 'We observe your team to identify waste. No guesswork—just data.',
    duration: '2-3 hours'
  },
  {
    number: '02',
    icon: Map,
    title: 'The Roadmap',
    price: 'Included',
    description: 'We deliver a detailed action plan. You own it, even if you don\'t proceed.',
    duration: '48 hours'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'The Build',
    price: 'Custom',
    description: 'We deploy the automation. Tested, documented, and ready to go.',
    duration: '7-14 days'
  }
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative apple-card p-8 text-center overflow-hidden group"
    >
      {/* Glow overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(232, 200, 114, 0.15) 0%, rgba(240, 145, 141, 0.08) 40%, transparent 70%)',
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: 'inset 0 0 30px rgba(232, 200, 114, 0.1), 0 0 40px rgba(232, 200, 114, 0.15)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Step number */}
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-gold)] to-[var(--accent-coral)] flex items-center justify-center mx-auto mb-5"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm font-semibold text-[#1d1d1f]">{step.number}</span>
        </motion.div>

        {/* Icon */}
        <motion.div 
          className="w-12 h-12 rounded-2xl bg-[var(--primary-gold)]/10 flex items-center justify-center mx-auto mb-4"
          animate={{ 
            backgroundColor: isHovered ? 'rgba(232, 200, 114, 0.2)' : 'rgba(232, 200, 114, 0.1)',
          }}
          transition={{ duration: 0.2 }}
        >
          <IconComponent className="w-5 h-5 text-[var(--primary-gold)]" />
        </motion.div>

        {/* Title & Price */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{step.title}</h3>
        <p className="text-sm font-medium text-[var(--primary-gold)] mb-3">{step.price}</p>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{step.description}</p>

        {/* Duration badge */}
        <span className="inline-block text-xs font-medium text-[var(--text-muted)] px-3 py-1 rounded-full bg-[var(--surface-light)]">
          {step.duration}
        </span>
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-24 px-6 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-wide mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            How we deliver results
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            A proven framework to eliminate waste and maximize profit.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
