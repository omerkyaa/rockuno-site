"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "./Section";

const faqs = [
  {
    q: "What types of projects does Rockuno take on?",
    a: "We focus on SaaS products that need custom architecture, AI integration, or EU compliance. Typically pre-seed to Series A startups who need technical depth, not generic templates.",
  },
  {
    q: "How does AI integration work in practice?",
    a: "We build production AI systems: automated workflows, intelligent routing, data processing, and agent systems. Everything is tested, monitored, and optimized for real-world use.",
  },
  {
    q: "What does EU readiness mean?",
    a: "GDPR-compliant architecture, EU hosting options, data residency controls, cookie consent, privacy policies, and deletion workflows. We deliver the technical foundation you need.",
  },
  {
    q: "How long does a typical build take?",
    a: "MVP builds: 8-12 weeks. Full product launches: 12-16 weeks. We work in sprint cycles with weekly demos so you see progress continuously.",
  },
  {
    q: "What is your vetting process?",
    a: "We work with serious founders. If you need custom SaaS architecture, have a clear problem, and want technical depth over shortcuts, let&apos;s talk.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" title="FAQ" subtitle="Direct answers to common questions about how we work.">
      <div className="mx-auto max-w-2xl">{faqs.map((faq, i) => (
        <div
          key={i}
          className={`mb-3 overflow-hidden rounded-3xl transition hover:-translate-y-0.5 ${
            open === i
              ? "gradient-primary shadow-lg hover:shadow-xl"
              : "rockuno-border bg-white/70 shadow-sm hover:shadow-soft dark:bg-white/5"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className={`text-sm font-semibold ${
              open === i
                ? "text-white drop-shadow-md"
                : "text-rockuno-ink dark:text-white"
            }`}>
              {faq.q}
            </span>
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 transition ${
                open === i
                  ? "text-white drop-shadow-md"
                  : "text-rockuno-ink dark:text-white"
              } ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i ? (
            <div className="border-t border-white/20 px-6 py-5 text-sm leading-relaxed text-white/95 drop-shadow-sm">
              {faq.a}
            </div>
          ) : null}
        </div>
      ))}</div>
    </Section>
  );
}
