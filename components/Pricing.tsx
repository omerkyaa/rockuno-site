"use client";

import Section from "./Section";
import Link from "next/link";

const engagements = [
  { 
    name: "Discovery", 
    scope: "Technical audit, architecture planning, and roadmap", 
    highlight: false 
  },
  { 
    name: "Development", 
    scope: "Full SaaS build: MVP to production deployment", 
    highlight: true 
  },
  { 
    name: "Partnership", 
    scope: "Ongoing engineering, AI integration, and scale optimization", 
    highlight: false 
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      title="Engagement models"
      subtitle="We work with founders building serious products. Pricing is tailored to scope and timeline."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {engagements.map((eng) => (
          <div
            key={eng.name}
            className={`group relative rounded-3xl p-8 transition hover:-translate-y-1 ${
              eng.highlight 
                ? "gradient-primary shadow-lg hover:shadow-xl" 
                : "bg-white/70 rockuno-border shadow-sm hover:shadow-soft dark:bg-white/5"
            }`}
          >
            <div className="relative">
              <div className={`text-lg font-semibold ${
                eng.highlight 
                  ? "text-white drop-shadow-md" 
                  : "text-rockuno-ink dark:text-white"
              }`}>
                {eng.name}
              </div>
              <div className={`mt-6 text-sm leading-relaxed ${
                eng.highlight 
                  ? "text-white/95 drop-shadow-sm" 
                  : "text-rockuno-ink dark:text-white"
              }`}>
                {eng.scope}
              </div>

              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition ${
                  eng.highlight
                    ? "bg-white text-rockuno-ink shadow-md hover:shadow-lg hover:bg-white/95"
                    : "gradient-primary text-white shadow-md hover:opacity-90 hover:shadow-lg"
                }`}
              >
                <span className={eng.highlight ? "" : "drop-shadow-md"}>
                  Discuss scope
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
