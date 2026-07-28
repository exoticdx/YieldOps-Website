'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Settings, LayoutDashboard, Zap, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

const serviceTiers = [
  {
    name: 'YieldOps Studio',
    subtitle: 'Premium Delivery Infrastructure for Luxury Photographers.',
    icon: LayoutDashboard,
    description: 'AI Face-Recognition galleries, zero-markup Cloudflare storage, and commission-free e-commerce built on your custom domain.',
    features: [
      'AI Face-Recognition',
      'Zero-markup storage',
      'Custom domain e-commerce'
    ],
    priceLabel: 'Visit YieldOps Studio ↗',
    buttonLink: 'https://studio.yieldops.com',
    popular: false,
    from: { x: -50, y: 30 },
  },
  {
    name: 'YieldOps Local',
    subtitle: 'Omnichannel Dominance for Brick & Mortar.',
    icon: Zap,
    description: 'We engineer high-converting local ecosystems. Google Maps profile optimization, integrated websites, and unified social media routing.',
    features: [
      'Google Maps SEO',
      'Integrated websites',
      'Unified social routing'
    ],
    priceLabel: 'Explore Local Solutions ↗',
    buttonLink: 'https://local.yieldops.com',
    popular: true,
    from: { x: 0, y: 50 },
  },
  {
    name: 'YieldOps Automate',
    subtitle: 'Custom AI Workflows & Business Systems.',
    icon: Settings,
    description: 'Stop doing robotic work. We build custom CRM pipelines, AI chat agents, and automated data processing to scale your operations without increasing headcount.',
    features: [
      'Custom CRM pipelines',
      'AI chat agents',
      'Automated data processing'
    ],
    priceLabel: 'See Automation Services ↗',
    buttonLink: 'https://automate.yieldops.com',
    popular: false,
    from: { x: 50, y: 30 },
  }
];

function ServiceCard({ tier, index }: { tier: typeof serviceTiers[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const IconComponent = tier.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: tier.from.x, y: tier.from.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: tier.from.x, y: tier.from.y }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <TiltCard
        className={`p-8 rounded-3xl overflow-hidden h-full ${
          tier.popular 
            ? 'bg-[var(--card-bg)] backdrop-blur-xl border-2 border-[var(--primary-gold)] shadow-lg shadow-[var(--primary-gold)]/10' 
            : 'apple-card'
        }`}
        tiltIntensity={tier.popular ? 5 : 8}
        glowColor={tier.popular ? 'rgba(232, 200, 114, 0.2)' : 'rgba(232, 200, 114, 0.1)'}
      >
        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Popular badge row */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              tier.popular 
                ? 'bg-gradient-to-br from-[var(--primary-gold)] to-[var(--accent-coral)]' 
                : 'bg-[var(--primary-gold)]/10'
            }`}>
              <IconComponent className={`w-5 h-5 ${tier.popular ? 'text-[#1d1d1f]' : 'text-[var(--primary-gold)]'}`} />
            </div>
          </div>

          {/* Tier name */}
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
            {tier.name}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed font-medium">{tier.subtitle}</p>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{tier.description}</p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, featureIndex) => (
              <motion.li 
                key={featureIndex} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + featureIndex * 0.1 }}
              >
                <Check className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-[var(--primary-gold)]' : 'text-[var(--accent-coral)]'}`} />
                <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Link */}
          <a 
            href={tier.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all duration-300 ${
              tier.popular 
                ? 'bg-[var(--primary-gold)] text-[#1d1d1f] hover:bg-[var(--primary-gold-dim)]' 
                : 'bg-[var(--surface-light)] text-[var(--text-primary)] hover:bg-[var(--border)] border border-[var(--border)]'
            }`}
          >
            {tier.priceLabel}
          </a>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="py-24 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header — fades up with scale */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-widest mb-3">
            The Divisions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6">
            Choose Your Front
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            We don&apos;t just build software. We engineer systems that scale your operations without increasing your headcount.
          </p>
        </motion.div>

        {/* Service Cards — enter from different directions */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {serviceTiers.map((tier, index) => (
            <ServiceCard key={index} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
