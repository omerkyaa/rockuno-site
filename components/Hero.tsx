"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, Rocket } from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.6, ease: "easeOut" },
  }),
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full rockuno-border bg-white/70 px-4 py-2 text-sm text-rockuno-ink shadow-sm dark:bg-white/10 dark:text-white">
      {children}
    </span>
  );
}

function GradientRing() {
  return (
    <div className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[360px] md:w-[360px]">
      {/* Rotating gradient ring */}
      <div
        className="absolute inset-0 rounded-full opacity-80"
        style={{
          background:
            "conic-gradient(from 180deg, #2D4BFF, #7B2FFF, #C026D3, #FF7A1A, #FFB000, #2D4BFF)",
        }}
      />
      <div className="absolute inset-[18px] rounded-full bg-white dark:bg-rockuno-ink" />
      
      {/* Center content with stats */}
      <div className="relative z-10 text-center">
        <div className="mb-2 text-4xl font-bold text-rockuno-ink dark:text-white md:text-5xl">
          98%
        </div>
        <div className="text-sm font-semibold text-rockuno-ink dark:text-white">
          Client Satisfaction
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-rockuno-ink dark:text-white">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-rockuno-blue" />
            <span>Trusted Partner</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-rockuno-purple" />
            <span>Production Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] active:scale-[0.99]"
      style={{
        background:
          "linear-gradient(90deg, #2D4BFF 0%, #7B2FFF 35%, #FF7A1A 70%, #FFB000 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      <span
        className="absolute -inset-1 rounded-2xl opacity-0 blur-lg transition group-hover:opacity-40"
        style={{
          background:
            "linear-gradient(90deg, rgba(45,75,255,0.5), rgba(123,47,255,0.45), rgba(255,122,26,0.45), rgba(255,176,0,0.45))",
        }}
      />
      <span className="relative animate-shimmer [background-size:200%_200%]">
        {children}
      </span>
      <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-2xl rockuno-border bg-white/70 px-6 py-4 text-sm font-semibold text-rockuno-ink shadow-sm transition hover:bg-white"
    >
      {children}
    </a>
  );
}

export default function Hero() {
  // Mouse-based parallax values - reduced intensity for subtlety
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 100, damping: 20 });
  const sy = useSpring(my, { stiffness: 100, damping: 20 });

  // Subtle transforms for professional feel
  const glowMoveX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const glowMoveY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  const cardTiltX = useTransform(sy, [-0.5, 0.5], [2, -2]);
  const cardTiltY = useTransform(sx, [-0.5, 0.5], [-2, 2]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
      <div
        className="grid items-center gap-14 md:grid-cols-2"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          mx.set(px);
          my.set(py);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <Pill>
              <Sparkles className="h-4 w-4 text-rockuno-purple" />
              AI SaaS Development • Germany/EU
            </Pill>
          </motion.div>

          <motion.h1
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl dark:text-white"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
          >
            We build{" "}
            <span className="gradient-primary-text">
              AI-powered SaaS systems
            </span>{" "}
            that scale in production.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-rockuno-ink dark:text-white"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
          >
            End-to-end SaaS architecture: authentication, billing, automation, 
            analytics, and cloud infrastructure. Built for founders who need 
            technical excellence, not templates.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
          >
            <PrimaryButton href="#contact">Get started</PrimaryButton>
            <SecondaryButton href="#services">See what we build</SecondaryButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
          style={{ perspective: 900 }}
        >
          {/* Glow (safe) */}
          <motion.div
            className="absolute -inset-10 rounded-[48px] blur-2xl"
            style={{
              x: glowMoveX,
              y: glowMoveY,
              background:
                "radial-gradient(520px 360px at 45% 35%, rgba(45,75,255,0.22), transparent 60%)," +
                "radial-gradient(520px 360px at 70% 25%, rgba(123,47,255,0.18), transparent 60%)," +
                "radial-gradient(520px 380px at 55% 80%, rgba(255,122,26,0.14), transparent 60%)",
            }}
          />

          {/* Card with subtle tilt */}
          <motion.div
            className="relative rounded-[48px] rockuno-border bg-white/70 p-10 shadow-soft dark:bg-white/5"
            style={{
              rotateX: cardTiltX,
              rotateY: cardTiltY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex items-center justify-between">
              <Image
                src="/logo-wordmark.png"
                alt="Rockuno"
                width={180}
                height={48}
                className="h-auto w-auto"
                priority
              />
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-rockuno-ink dark:bg-white/10 dark:text-white">
                Production Ready
              </span>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <GradientRing />
            </div>

            <div className="mt-8 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 rockuno-border dark:bg-white/10">
                <Zap className="h-5 w-5 text-rockuno-blue" />
                <div className="flex-1">
                  <div className="text-xs font-semibold text-rockuno-ink dark:text-white">AI Automation</div>
                  <div className="text-xs text-rockuno-ink dark:text-white">40% ops cost reduction</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 rockuno-border dark:bg-white/10">
                <Shield className="h-5 w-5 text-rockuno-purple" />
                <div className="flex-1">
                  <div className="text-xs font-semibold text-rockuno-ink dark:text-white">EU Compliance</div>
                  <div className="text-xs text-rockuno-ink dark:text-white">GDPR-ready architecture</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 rockuno-border dark:bg-white/10">
                <Rocket className="h-5 w-5 text-rockuno-orange" />
                <div className="flex-1">
                  <div className="text-xs font-semibold text-rockuno-ink dark:text-white">Fast Deployment</div>
                  <div className="text-xs text-rockuno-ink dark:text-white">4-6 weeks to production</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
