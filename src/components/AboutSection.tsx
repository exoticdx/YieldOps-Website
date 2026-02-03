'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, MessageSquare, Sparkles } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Outcomes over Hours',
    description: "We don't bill for time; we bill for the result.",
  },
  {
    icon: MessageSquare,
    title: 'Radical Truth',
    description: 'If a process is broken, we will tell you—even if it hurts.',
  },
  {
    icon: Sparkles,
    title: 'Simplicity First',
    description: 'We never build a complex tool when a simple one will do.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6">
            We are the <span className="gradient-text">Anti-Agency.</span>
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
            Most IT agencies profit from complexity. The longer a project takes, the more they bill you. 
            <span className="text-[var(--primary-gold)] font-medium"> YieldOps was built on the opposite principle: 
            Efficiency is the only metric that matters.</span>
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            We don&apos;t just &ldquo;build software.&rdquo; We act as clinical operators who dissect your business processes, 
            identify the &ldquo;waste&rdquo;—the manual data entry, the lost emails, the blind reporting—and surgically 
            remove it using automation. We don&apos;t sell hours; we sell the time we give back to your team.
          </p>
        </motion.div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="apple-card p-8 mb-16 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Founder Photo */}
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[var(--primary-gold)]/30">
              <Image
                src="/dax.jpg"
                alt="Dax - Founder & Lead Architect"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-[var(--text-secondary)] italic mb-4 leading-relaxed">
                &ldquo;I started YieldOps because I was tired of watching brilliant business owners get bogged down 
                by administrative busywork. My job isn&apos;t to add more software to your life; it&apos;s to delete 
                the work you hate doing.&rdquo;
              </p>
              <p className="text-[var(--text-primary)] font-medium">Dax</p>
              <p className="text-[var(--text-muted)] text-sm">Founder & Lead Architect</p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center text-sm font-medium text-[var(--text-muted)] uppercase tracking-widest mb-8">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[var(--primary-gold)]/10">
                    <IconComponent className="w-6 h-6 text-[var(--primary-gold)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{value.title}</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
