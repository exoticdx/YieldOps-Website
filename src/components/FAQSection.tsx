'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What exactly happens during the $99 Diagnostic?',
    answer: 'We spend 45–60 minutes deep-diving into your current workflow. Whether it\'s via Zoom screen-share or an on-site visit, we watch how your team actually works. We look for "friction points"—repetitive tasks, copy-pasting, and manual errors. Within 24 hours, you receive a "Roadmap Report" detailing exactly where you are losing money and how we can fix it.',
  },
  {
    question: "What if you don't find any problems to fix?",
    answer: 'Then the audit is free. If we cannot identify at least 3 bottlenecks that are costing you time or money, we will refund your $99 immediately. We only want to work with businesses where we can make a massive impact.',
  },
  {
    question: 'If I hire you to build the solution, what happens to my $99?',
    answer: 'It comes right back to you. We credit 100% of the $99 Diagnostic fee towards your final project invoice. This makes the audit effectively free for serious clients who proceed with a build.',
  },
  {
    question: 'Do I own the software you build, or is it a subscription?',
    answer: 'You own it 100%. Unlike SaaS products that charge you forever, we build the automation on your own accounts (e.g., your Make.com or Airtable account). Once we hand over the keys, it is your asset. We do offer optional maintenance plans for peace of mind, but they are not required.',
  },
  {
    question: 'How long does it take to build a solution?',
    answer: 'We move fast. Because we utilize high-leverage tools like Make.com, Python, and OpenAI, our typical turnaround time is 7 to 14 days. We work in sprints to get you a working solution while other agencies are still writing proposals.',
  },
  {
    question: 'Is my business data safe?',
    answer: 'Absolutely. We build utilizing enterprise-grade platforms (Google Cloud, AWS, Airtable) that have industry-standard security. We never store your customer data on our own servers; we simply build the pipes that move it securely between your existing tools.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]; 
  index: number; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-[var(--border)]"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[var(--text-primary)] font-medium pr-4 group-hover:text-[var(--primary-gold)] transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--text-secondary)] leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-24 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
