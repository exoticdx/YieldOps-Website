'use client';

import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="YieldOps Logo" 
                width={36} 
                height={36} 
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-[var(--text-primary)]">
                Yield<span className="text-[var(--primary-gold)]">Ops</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              We don&apos;t just build software.
              <br />
              We delete your busy work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="https://cal.com/dax-yeildops/yield-diagnostic"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary-gold)] transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book the $99 Audit
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:hello@yieldops.com"
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary-gold)] transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Ready to start?</h4>
            <motion.a
              href="https://cal.com/dax-yeildops/yield-diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 apple-button px-5 py-2.5 text-sm font-medium cursor-pointer"
            >
              Get Your Efficiency Audit
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © 2024 YieldOps. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with precision. Delivered with speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
