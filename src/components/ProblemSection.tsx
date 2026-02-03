'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { DollarSign, Hourglass, Layers } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    title: 'Redundant Labor',
    description: "Your payroll is your biggest expense. If 20% of your team's week is spent on repetitive administrative tasks, you are effectively burning 20% of your payroll budget.",
  },
  {
    icon: Hourglass,
    title: 'Opportunity Cost',
    description: 'Speed is a feature. Every hour a lead sits in an inbox without a response, the chance of closing that deal drops by 50%. Slow workflows lose customers.',
  },
  {
    icon: Layers,
    title: 'Fragile Processes',
    description: "What happens if your office manager quits tomorrow? If your 'process' lives in someone's head instead of code, your business is one resignation away from chaos.",
  }
];

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);
  
  const IconComponent = problem.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative apple-card p-8 overflow-hidden"
    >
      {/* Glow overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(240, 145, 141, 0.12) 0%, rgba(232, 200, 114, 0.06) 40%, transparent 70%)',
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: 'inset 0 0 30px rgba(240, 145, 141, 0.08), 0 0 40px rgba(240, 145, 141, 0.12)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-[var(--accent-coral)]/10"
          animate={{ 
            backgroundColor: isHovered ? 'rgba(240, 145, 141, 0.2)' : 'rgba(240, 145, 141, 0.1)',
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <IconComponent className="w-6 h-6 text-[var(--accent-coral)]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{problem.title}</h3>

        {/* Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{problem.description}</p>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="py-24 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent-coral)] uppercase tracking-wide mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
            Invisible enemies are costing you
          </h2>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
