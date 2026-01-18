"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PenTool, Blocks, Rocket } from "lucide-react";
import Section from "./Section";

const steps = [
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Scope & Strategy",
    desc: "We define your MVP, user flows, pricing model, and roadmap. Clear outputs, no fluff.",
  },
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Design & Build",
    desc: "Premium UI + clean architecture. Next.js, Firebase, automation, and AI where it matters.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "QA & Hardening",
    desc: "Performance, edge cases, analytics, SEO, and EU-ready basics (privacy, consent, etc.).",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Launch & Iterate",
    desc: "Ship fast, measure, improve. Growth loops, onboarding, retention, and conversion tuning.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="work"
      title="How we work"
      subtitle="Engineering process designed for speed and quality. EU-based, founder-led, technically focused."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-3xl rockuno-border bg-white/70 p-8 shadow-sm dark:bg-white/5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary">
              <div className="[&>svg]:stroke-white [&>svg]:drop-shadow-md">
                {step.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-rockuno-ink dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-rockuno-ink dark:text-white">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
