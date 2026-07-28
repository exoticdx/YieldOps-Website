import EcomServicesClient from "./EcomServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listing Services",
  description: "Professional catalog management and listing services for e-commerce sellers. We optimize, structure, and upload your products to maximize marketplace visibility.",
  keywords: ["e-commerce listing services", "catalog management", "product optimization", "marketplace onboarding", "Meesho catalog uploads"],
  alternates: {
    canonical: "https://yeildops.com/ecom/services",
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <EcomServicesClient />
    </main>
  );
}
