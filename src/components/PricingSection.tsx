'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Star, Settings, LayoutDashboard, Zap, ArrowRight } from 'lucide-react';

const serviceTiers = [
  {
    name: 'Targeted Automation',
    subtitle: 'The Quick Win',
    icon: Settings,
    description: 'Best for fixing a single, painful bottleneck in your workflow.',
    features: [
      'Backend automation',
      'Error reduction',
      'Standard delivery'
    ],
    priceLabel: 'Entry Level',
    popular: false
  },
  {
    name: 'Workflow Ecosystem',
    subtitle: 'The Standard',
    icon: LayoutDashboard,
    description: 'A complete overhaul of a business process to maximize yield.',
    features: [
      'Full process automation',
      'Custom dashboard',
      'Staff training & handover'
    ],
    priceLabel: 'Custom Quoted',
    popular: true
  },
  {
    name: 'Priority Transformation',
    subtitle: 'The White Glove',
    icon: Zap,
    description: 'For businesses that need the problem solved yesterday.',
    features: [
      'Everything in Standard',
      'Expedited 5-day delivery',
      '90 days priority support'
    ],
    priceLabel: 'Custom Quoted',
    popular: false
  }
];

function ServiceCard({ tier, index }: { tier: typeof serviceTiers[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = tier.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 rounded-3xl overflow-hidden transition-all duration-300 ${
        tier.popular 
          ? 'bg-[var(--card-bg)] backdrop-blur-xl border-2 border-[var(--primary-gold)] shadow-lg' 
          : 'apple-card'
      }`}
    >
      {/* Glow overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: tier.popular
            ? 'radial-gradient(ellipse at 50% 50%, rgba(232, 200, 114, 0.2) 0%, rgba(240, 145, 141, 0.1) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at 50% 50%, rgba(232, 200, 114, 0.12) 0%, rgba(240, 145, 141, 0.06) 40%, transparent 70%)',
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: tier.popular
            ? 'inset 0 0 40px rgba(232, 200, 114, 0.15), 0 0 50px rgba(232, 200, 114, 0.2)'
            : 'inset 0 0 30px rgba(232, 200, 114, 0.08), 0 0 40px rgba(232, 200, 114, 0.12)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Popular badge row */}
        <div className="flex items-center gap-3 mb-5">
          <motion.div 
            className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              tier.popular 
                ? 'bg-gradient-to-br from-[var(--primary-gold)] to-[var(--accent-coral)]' 
                : 'bg-[var(--primary-gold)]/10'
            }`}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <IconComponent className={`w-5 h-5 ${tier.popular ? 'text-[#1d1d1f]' : 'text-[var(--primary-gold)]'}`} />
          </motion.div>
          
          {tier.popular && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--primary-gold)] text-sm font-medium text-[#1d1d1f] whitespace-nowrap">
              <Star className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" />
              Most Common
            </div>
          )}
        </div>

        {/* Tier name */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
          {tier.name}
        </h3>
        <p className="text-sm text-[var(--text-muted)] mb-4">{tier.subtitle}</p>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{tier.description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <Check className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-[var(--primary-gold)]' : 'text-[var(--accent-coral)]'}`} />
              <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price Label */}
        <div className={`py-2.5 px-4 rounded-xl text-center text-sm font-medium ${
          tier.popular 
            ? 'bg-[var(--primary-gold)]/10 text-[var(--primary-gold)]' 
            : 'bg-[var(--surface-light)] text-[var(--text-secondary)]'
        }`}>
          {tier.priceLabel}
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-24 px-6 bg-[var(--background-secondary)]">
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
            Service Menu
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            Invest in outcomes, not hours
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            We build custom solutions tailored to your specific bottlenecks. 
            You receive a fixed-price quote after your Efficiency Audit.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {serviceTiers.map((tier, index) => (
            <ServiceCard key={index} tier={tier} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--text-muted)] text-sm mb-6">
            Your exact price depends on the complexity of the problem we find.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 apple-button px-8 py-4 text-base font-medium cursor-pointer"
          >
            Book Diagnostic ($99) to Get Your Quote
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
