"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function GlowOrb({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      aria-hidden="true"
    />
  );
}

function ContactWithSuspense() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-rockuno-purple border-t-transparent"></div>
        </div>
      </div>
    }>
      <Contact />
    </Suspense>
  );
}

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-rockuno-gradient">
      {/* Decorative Orbs */}
      <GlowOrb className="left-[-120px] top-[-120px] h-[420px] w-[420px] bg-rockuno-blue/30" />
      <GlowOrb className="right-[-140px] top-[60px] h-[460px] w-[460px] bg-rockuno-purple/25" />
      <GlowOrb className="left-[30%] bottom-[-180px] h-[560px] w-[560px] bg-rockuno-orange/20" />

      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactWithSuspense />
      <Footer />
    </main>
  );
}
