'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PackageOpen, Zap, Download, X, ArrowRight, Clock, Users, ArrowDownToLine, Lock, PlayCircle } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Footer from '@/components/Footer';

export default function EcomProductsClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleDownloadClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      setError('Please enter a valid phone number (10+ digits).');
      return;
    }
    
    setError('');
    // Trigger download
    const link = document.createElement('a');
    link.href = '/installer/YieldOps-Setup.exe';
    link.download = 'YieldOps-Setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsModalOpen(false);
    setName('');
    setPhone('');
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
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
            <Zap className="w-4 h-4 text-[var(--primary-gold)]" />
            <span className="text-sm font-medium tracking-wider text-[var(--text-secondary)]">SELLER AUTOMATION</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
            Tools to <span className="gradient-text">Print Margin</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore our specialized suite of desktop automation software built to give e-commerce sellers an unfair advantage.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tool 1: Meesho Shipping Reducer */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
            className={expandedCard === 'meesho' ? 'md:col-span-2 lg:col-span-3' : ''}
          >
            <TiltCard tiltIntensity={expandedCard === 'meesho' ? 0 : 5} className="h-full">
              <div 
                onClick={() => setExpandedCard(expandedCard === 'meesho' ? null : 'meesho')}
                className="apple-card p-8 h-full flex flex-col items-start group relative overflow-hidden border border-[var(--border)] hover:border-[var(--primary-gold)]/50 transition-colors cursor-pointer"
              >
                <AnimatePresence>
                  {expandedCard === 'meesho' && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(null);
                      }}
                      className="absolute top-4 right-4 p-2 glass-badge z-20 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>

                <div className="relative z-10 w-full flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--surface-light)] to-[var(--background)] flex items-center justify-center shrink-0 border border-[var(--border)]">
                     <PackageOpen className="w-7 h-7 text-[var(--primary-gold)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                      YieldOps: Meesho Shipping Reducer
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4 text-sm">
                      API-based software that generates multiple visual variations of your original image and tests them to discover the absolute lowest shipping tier.
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-2">
                      <div className="flex items-center gap-2 text-[var(--text-primary)] text-sm font-medium">
                        <Users className="w-4 h-4 text-[var(--primary-gold)]" />
                        100+ Active Sellers
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-primary)] text-sm font-medium">
                        <ArrowDownToLine className="w-4 h-4 text-[var(--primary-gold)]" />
                        Avg Savings: ₹30-40 / order
                      </div>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence mode="wait">
                  {expandedCard === 'meesho' ? (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="w-full overflow-hidden relative z-10"
                    >
                      <div className="pt-6 border-t border-[var(--border)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          {/* Demo Video Placeholder */}
                          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-light)] aspect-video flex flex-col items-center justify-center p-6 text-center overflow-hidden relative group">
                            <PlayCircle className="w-12 h-12 text-[var(--primary-gold)] mb-3 opacity-80 group-hover:scale-110 transition-transform" />
                            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Watch Demo</h4>
                            <p className="text-sm text-[var(--text-muted)]">See how YieldOps reduces your shipping tier.</p>
                          </div>

                          {/* Installation Video Placeholder */}
                          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-light)] aspect-video flex flex-col items-center justify-center p-6 text-center overflow-hidden relative group">
                            <PlayCircle className="w-12 h-12 text-[var(--primary-gold)] mb-3 opacity-80 group-hover:scale-110 transition-transform" />
                            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Installation Guide</h4>
                            <p className="text-sm text-[var(--text-muted)]">Step-by-step setup instructions.</p>
                          </div>
                        </div>

                        <button 
                          onClick={handleDownloadClick}
                          className="apple-button w-full md:w-auto md:px-12 mx-auto py-4 text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary-gold)]/20"
                        >
                          <Download className="w-5 h-5" />
                          Download
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full mt-auto z-10 pt-6"
                    >
                      <div className="flex items-center justify-between text-[var(--primary-gold)] text-sm font-semibold">
                        <span>Click to view details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Tool 2: Auto Listing Tool */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, type: 'spring', bounce: 0.2 }}
          >
            <TiltCard tiltIntensity={0} className="h-full">
              <div className="apple-card p-8 h-full flex flex-col justify-between items-start relative overflow-hidden opacity-70">
                <div className="absolute top-4 right-4">
                  <div className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[var(--surface-light)] text-[var(--text-secondary)] rounded-full border border-[var(--border)]">COMING SOON</div>
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[var(--surface-light)] flex items-center justify-center mb-6 border border-[var(--border)]">
                     <Lock className="w-7 h-7 text-[var(--text-muted)]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                    Auto Listing Tool
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm">
                    Automate your cross-platform listing process. Upload once, and deploy seamlessly across multiple marketplace channels with AI-optimized categorization.
                  </p>
                </div>
                
                <button disabled className="w-full bg-[var(--surface-light)] text-[var(--text-muted)] border border-[var(--border)] py-3 rounded-full text-center font-semibold flex items-center justify-center gap-2 mt-auto cursor-not-allowed">
                  In Development
                </button>
              </div>
            </TiltCard>
          </motion.div>

          {/* Tool 3: Meesho Catalogue detail Extaention */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', bounce: 0.2 }}
          >
            <TiltCard tiltIntensity={0} className="h-full">
              <div className="apple-card p-8 h-full flex flex-col justify-between items-start relative overflow-hidden opacity-70">
                <div className="absolute top-4 right-4">
                  <div className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[var(--surface-light)] text-[var(--text-secondary)] rounded-full border border-[var(--border)]">COMING SOON</div>
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[var(--surface-light)] flex items-center justify-center mb-6 border border-[var(--border)]">
                     <Lock className="w-7 h-7 text-[var(--text-muted)]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                    Catalogue Detail Extension
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm">
                    A powerful Chrome extension that instantly extracts hidden competitor catalog details, supplier metrics, and pricing data directly from the marketplace front-end.
                  </p>
                </div>
                
                <button disabled className="w-full bg-[var(--surface-light)] text-[var(--text-muted)] border border-[var(--border)] py-3 rounded-full text-center font-semibold flex items-center justify-center gap-2 mt-auto cursor-not-allowed">
                  In Development
                </button>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
      <Footer />



      {/* Lead Capture Modal for Download */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md apple-card p-8 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 glass-badge text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-light)] flex items-center justify-center mx-auto mb-4 border border-[var(--border)]">
                  <Download className="w-6 h-6 text-[var(--primary-gold)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Get YieldOps Now</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Enter your details to download the setup immediately.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[var(--surface-light)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-gold)]/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[var(--surface-light)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-gold)]/50 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                {error && (
                  <p className="text-xs text-[var(--accent-coral)] font-medium">{error}</p>
                )}

                <button 
                  type="submit"
                  className="w-full apple-button py-4 mt-4 text-base font-semibold flex items-center justify-center gap-2"
                >
                  Download Setup
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-[var(--text-muted)] text-center mt-4">
                  By downloading, you agree to our terms. Software license can be purchased securely inside the app after installation.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
