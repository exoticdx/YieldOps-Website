'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6">
            Ready to upgrade your infrastructure
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Tell us about your vision and let&apos;s build the future of your brand together.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 sm:p-12"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Your Agency"
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">Monthly Revenue/Scale</label>
                <select 
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected>Select range</option>
                  <option value="0-10k">₹0 - ₹10k</option>
                  <option value="10k-50k">₹10k - ₹50k</option>
                  <option value="50k-200k">₹50k - ₹200k</option>
                  <option value="200k+">₹200k+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)] ml-1">What are you looking to build</label>
                <select 
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-gold)] transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected>Select a division</option>
                  <option value="studio">YieldOps Studio (Photography Infra)</option>
                  <option value="local">YieldOps Local (B&M Dominance)</option>
                  <option value="automate">YieldOps Automate (AI Workflows)</option>
                  <option value="custom">Custom Partnership</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <MagneticButton
                as="button"
                type="submit"
                className="w-full apple-button py-4 text-base font-semibold"
                intensity={0.2}
              >
                Request a Strategy Call
              </MagneticButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
