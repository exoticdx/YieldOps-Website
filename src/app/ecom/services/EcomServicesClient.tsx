'use client';

import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, IndianRupee } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Footer from '@/components/Footer';

export default function EcomServicesClient() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-badge mb-6"
          >
            <BarChart3 className="w-4 h-4 text-[var(--primary-gold)]" />
            <span className="text-sm font-medium tracking-wider text-[var(--text-secondary)]">LISTING SERVICES</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
            Professional <span className="gradient-text">Catalog Management</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Stop wasting hours manually listing products. Let our expert team optimize, structure, and upload your catalogs to maximize visibility and drive sales on multiple marketplaces.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TiltCard tiltIntensity={5} className="h-full">
              <div className="apple-card p-8 border border-[var(--border)] hover:border-[var(--primary-gold)]/30 transition-colors h-full flex flex-col relative overflow-hidden">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Starter</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">Perfect for new sellers</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <IndianRupee className="w-5 h-5 text-[var(--text-primary)]" />
                  <span className="text-4xl font-bold text-[var(--text-primary)]">499</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-[var(--text-primary)] font-semibold text-base mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-gold)] shrink-0" />
                    50 Listings
                  </li>
                  {[
                    'Basic Image Optimization',
                    'Title & Tag Generation',
                    'Standard Support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)]/50 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className="w-full glass-button py-3 text-center font-semibold mt-auto block"
                >
                  Get Started
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Plan 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TiltCard tiltIntensity={5} className="h-full">
              <div className="apple-card p-8 border border-[var(--border)] hover:border-[var(--primary-gold)]/30 transition-colors h-full flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(232,200,114,0.05)]">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[var(--surface-light)] text-[var(--text-secondary)] rounded-full border border-[var(--border)]">POPULAR</div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Growth</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">For expanding catalogs</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <IndianRupee className="w-5 h-5 text-[var(--text-primary)]" />
                  <span className="text-4xl font-bold text-[var(--text-primary)]">899</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-[var(--text-primary)] font-semibold text-base mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-gold)] shrink-0" />
                    100 Listings
                  </li>
                  {[
                    'Advanced Image Optimization',
                    'SEO-Optimized Titles',
                    'Priority Support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)]/50 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className="w-full glass-button py-3 text-center font-semibold mt-auto block"
                >
                  Get Started
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Plan 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TiltCard tiltIntensity={5} className="h-full">
              <div className="apple-card p-8 border-2 border-[var(--primary-gold)]/30 h-full flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(232,200,114,0.1)]">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[var(--primary-gold)] text-[var(--background)] rounded-full">BEST VALUE</div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Scale</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">For high-volume sellers</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <IndianRupee className="w-5 h-5 text-[var(--text-primary)]" />
                  <span className="text-4xl font-bold text-[var(--text-primary)]">1,499</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-[var(--text-primary)] font-semibold text-base mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--primary-gold)] shrink-0" />
                    200 Listings
                  </li>
                  {[
                    'Full Catalog Management',
                    'Competitor Keyword Analysis',
                    'Direct Dedicated Support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)]/50 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className="w-full apple-button py-3 text-center font-semibold mt-auto block"
                >
                  Get Started
                </a>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
