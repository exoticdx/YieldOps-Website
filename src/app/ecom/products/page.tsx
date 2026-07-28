import EcomProductsClient from "./EcomProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Tools",
  description: "Download powerful desktop automation software for e-commerce sellers. Featuring the Meesho Shipping Reducer to optimize shipping tiers and lower costs.",
  keywords: ["Meesho shipping reducer", "auto listing tool", "e-commerce automation software", "shipping tier optimizer", "Meesho catalog tools"],
  alternates: {
    canonical: "https://yeildops.com/ecom/products",
  }
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <EcomProductsClient />
    </main>
  );
}
