"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

function ContactContent() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-rockuno-gradient">
      <Suspense fallback={
        <div className="min-h-screen bg-rockuno-gradient flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-rockuno-purple border-t-transparent"></div>
        </div>
      }>
        <ContactContent />
      </Suspense>
    </main>
  );
}
