import Link from "next/link";
import { ShoppingBag, Box, BarChart3, ArrowRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Hub",
  description: "Specialized tools and managed services for e-commerce store owners to maximize margins, automate cataloging, and save time on platforms like Meesho.",
  keywords: ["e-commerce automation", "Meesho seller tools", "catalog management", "margin optimization", "seller hub"],
  alternates: {
    canonical: "https://yeildops.com/ecom",
  }
};

export default function EcomHubPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-gold)]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-badge mb-8">
            <ShoppingBag className="w-4 h-4 text-[var(--primary-gold)]" />
            <span className="text-sm font-medium tracking-wider text-[var(--text-secondary)]">SELLER HUB</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-tight">
            Built for <span className="gradient-text">E-Commerce.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover our specialized suite of automation tools and managed listing services designed to give modern sellers an unfair advantage.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="pb-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Products Link */}
          <Link href="/ecom/products" className="block h-full group">
            <TiltCard tiltIntensity={10} className="h-full">
              <div className="apple-card p-10 h-full flex flex-col justify-between items-start relative overflow-hidden group-hover:border-[var(--primary-gold)]/50 transition-colors">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--surface-light)] border border-[var(--border)] flex items-center justify-center mb-8">
                    <Box className="w-8 h-8 text-[var(--primary-gold)]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Automation Tools</h2>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                    Download powerful desktop software to automate your cataloging, bypass algorithms, and optimize shipping tiers.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[var(--primary-gold)] font-medium text-lg mt-auto relative z-10">
                  View Tools
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </TiltCard>
          </Link>

          {/* Services Link */}
          <Link href="/ecom/services" className="block h-full group">
            <TiltCard tiltIntensity={10} className="h-full">
              <div className="apple-card p-10 h-full flex flex-col justify-between items-start relative overflow-hidden group-hover:border-[var(--primary-gold)]/50 transition-colors">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--surface-light)] border border-[var(--border)] flex items-center justify-center mb-8">
                    <BarChart3 className="w-8 h-8 text-[var(--primary-gold)]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Listing Services</h2>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                    Let our expert team handle the heavy lifting. We optimize and upload your catalogs to maximize visibility and sales.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[var(--primary-gold)] font-medium text-lg mt-auto relative z-10">
                  View Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </TiltCard>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
