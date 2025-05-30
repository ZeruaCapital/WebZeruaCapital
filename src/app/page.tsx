"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AvoidableRisks from "@/components/AvoidableRisks";
import ExclusiveAdvantages from "@/components/ExclusiveAdvantages";
import InternationalPresence from "@/components/InternationalPresence";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Cargando...
          </div>
        }
      >
        <Hero />
        <AvoidableRisks />
        <ExclusiveAdvantages />
        <InternationalPresence />
      </Suspense>
      <Footer />
    </main>
  );
}
