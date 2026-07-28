import MeeshoProductClient from "./MeeshoProductClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YieldOps Meesho Shipping Reducer",
  description: "Stop losing margin to high shipping costs. Automate your cataloging today.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <MeeshoProductClient />
    </main>
  );
}
