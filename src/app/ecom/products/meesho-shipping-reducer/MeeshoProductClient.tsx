'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Box, Zap, ShieldCheck, PackageOpen, Cloud, CheckCircle2, PlayCircle, X, ArrowRight, IndianRupee } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import Footer from '@/components/Footer';

export default function MeeshoProductClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleDownloadClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simple phone validation (basic length check for Indian numbers or similar)
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
    // Reset form
    setName('');
    setPhone('');
  };

  return (
    <div className="relative">


      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-gold)]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-badge mb-8"
          >
            <Zap className="w-4 h-4 text-[var(--primary-gold)]" />
            <span className="text-sm font-medium tracking-wider text-[var(--text-secondary)]">MEESHO SHIPPING REDUCER</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-tight"
          >
            Stop losing margin to <br className="hidden md:block" />
            <span className="gradient-text">high shipping costs.</span>
          </motion.h1>
          

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <MagneticButton 
              as="button"
              onClick={handleDownloadClick}
              className="apple-button px-10 py-5 text-lg font-semibold flex items-center gap-3 w-full sm:w-auto justify-center"
              intensity={0.2}
            >
              <Download className="w-5 h-5" />
              Download YieldOps
            </MagneticButton>
            
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--background)] bg-[var(--surface-light)] flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              Trusted by 10,000+ Meesho Sellers saving on shipping everyday.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-[var(--background-secondary)] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Unfair Advantages</h2>
            <p className="text-[var(--text-secondary)]">Everything you need to dominate the catalog.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Advanced Image Mutation Engine',
                desc: 'Bypasses duplicate checks by slightly modifying pixels, metadata, and visual signatures. Upload the same product multiple times without getting flagged.',
                icon: <Box className="w-6 h-6 text-[var(--primary-gold)]" />
              },
              {
                title: 'Smart Shipping Optimization',
                desc: 'Test different weight and category tiers to discover the absolute lowest shipping charges, drastically increasing your profit margins per order.',
                icon: <Zap className="w-6 h-6 text-[var(--primary-gold)]" />
              },
              {
                title: 'Auto-Login & Bot Bypass',
                desc: 'Seamless Chrome DevTools integration automatically manages session cookies and bypasses strict bot-security checkpoints.',
                icon: <ShieldCheck className="w-6 h-6 text-[var(--primary-gold)]" />
              },
              {
                title: 'Beautiful, Modern Interface',
                desc: 'Built with an ultra-premium dark mode UI. Incredibly intuitive design ensures even non-technical sellers master it in minutes.',
                icon: <PackageOpen className="w-6 h-6 text-[var(--primary-gold)]" />
              },
              {
                title: 'Cloud-Synced Licensing',
                desc: 'Fully integrated with Supabase and Razorpay for secure, instant license verification the moment you purchase.',
                icon: <Cloud className="w-6 h-6 text-[var(--primary-gold)]" />
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={idx === 4 ? "lg:col-span-2" : ""}
              >
                <TiltCard tiltIntensity={10} className="h-full">
                  <div className="apple-card p-8 h-full flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-[var(--surface-light)] flex items-center justify-center mb-6 border border-[var(--border)]">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{feature.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Foolproof Setup Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Foolproof Setup Guide</h2>
            <p className="text-[var(--text-secondary)]">Ready in 5 simple steps. No technical skills required.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary-gold)]/50 before:to-transparent">
            {[
              {
                step: 1,
                title: 'Download & Open',
                desc: 'Download the YieldOps setup file and launch it. (Note: Razorpay payment is handled securely inside the app upon first launch).',
              },
              {
                step: 2,
                title: 'Enter Credentials',
                desc: 'Enter your Meesho Supplier Email & Password in the YieldOps settings panel.',
              },
              {
                step: 3,
                title: 'Enter Supplier ID',
                desc: 'Find your Supplier ID from the Return Tracking Excel sheet.',
                media: 'How to find Supplier ID in Return Tracking Excel sheet'
              },
              {
                step: 4,
                title: 'Enter 5-Character Identifier',
                desc: 'Find your 5 random characters located just before "/home" in the Meesho Panel URL.',
                media: 'How to find your 5 random characters before /home in the Meesho Panel URL'
              },
              {
                step: 5,
                title: 'Save & Automate',
                desc: 'Click Save, restart the tool, and you are ready to automate your uploads!',
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--background)] bg-[var(--primary-gold)] text-[var(--background)] font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {step.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] apple-card p-6">
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{step.title}</h4>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{step.desc}</p>
                  
                  {step.media && (
                    <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface-light)] aspect-video flex flex-col items-center justify-center p-4 text-center group-hover:border-[var(--primary-gold)]/50 transition-colors overflow-hidden relative">
                      <PlayCircle className="w-12 h-12 text-[var(--text-muted)] mb-3 opacity-50" />
                      <p className="text-xs text-[var(--text-muted)] font-medium max-w-[80%]">{step.media}</p>
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent pointer-events-none" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-[var(--text-muted)] px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--surface-light)] inline-block">
              Stuck? Open the software to find our direct support number.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-[var(--background-secondary)] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-[var(--text-secondary)]">Pay once, automate forever. (Purchase securely inside the app).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly Plan */}
            <TiltCard tiltIntensity={5}>
              <div className="apple-card p-8 border border-[var(--border)] hover:border-[var(--primary-gold)]/30 transition-colors h-full flex flex-col relative overflow-hidden">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Monthly</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">Perfect for testing</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <IndianRupee className="w-5 h-5 text-[var(--text-primary)]" />
                  <span className="text-4xl font-bold text-[var(--text-primary)]">99</span>
                  <span className="text-[var(--text-muted)] text-sm">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Unlimited Image Mutations',
                    'Smart Shipping Optimizer',
                    'Auto Bot-Bypass Engine'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleDownloadClick}
                  className="w-full glass-button py-3 text-center font-semibold flex items-center justify-center gap-2 mt-auto"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </TiltCard>

            {/* Yearly Plan */}
            <TiltCard tiltIntensity={5}>
              <div className="apple-card p-8 border border-[var(--border)] hover:border-[var(--primary-gold)]/30 transition-colors h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[var(--surface-light)] text-[var(--text-secondary)] rounded-full border border-[var(--border)]">POPULAR</div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Yearly</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">For growing sellers</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <IndianRupee className="w-5 h-5 text-[var(--text-primary)]" />
                  <span className="text-4xl font-bold text-[var(--text-primary)]">999</span>
                  <span className="text-[var(--text-muted)] text-sm">/yr</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Unlimited Image Mutations',
                    'Smart Shipping Optimizer',
                    'Auto Bot-Bypass Engine',
                    'Priority Support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleDownloadClick}
                  className="w-full glass-button py-3 text-center font-semibold flex items-center justify-center gap-2 mt-auto"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </TiltCard>

            {/* Lifetime Plan */}
            <TiltCard tiltIntensity={5}>
              <div className="apple-card p-8 border-2 border-[var(--primary-gold)]/30 h-full flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(232,200,114,0.1)]">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-[10px] font-bold tracking-wider px-2 py-1 bg-[var(--primary-gold)] text-[var(--background)] rounded-full">BEST VALUE</div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Lifetime</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6">Pay once, automate forever</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <IndianRupee className="w-5 h-5 text-[var(--text-primary)]" />
                  <span className="text-4xl font-bold text-[var(--text-primary)]">2,999</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    'Unlimited Image Mutations',
                    'Smart Shipping Optimizer',
                    'Auto Bot-Bypass Engine',
                    'Instant Cloud License',
                    'Direct Premium Support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-gold)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleDownloadClick}
                  className="w-full apple-button py-3 text-center font-semibold flex items-center justify-center gap-2 mt-auto"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
    </div>
  );
}
