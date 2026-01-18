"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-3">
          <h2 className="relative text-3xl font-semibold tracking-tight text-rockuno-ink dark:text-white md:text-4xl">
            <span className="relative z-10">{title}</span>
            <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full gradient-primary opacity-60"></span>
          </h2>
          {subtitle ? <p className="max-w-3xl text-rockuno-ink dark:text-white">{subtitle}</p> : null}
        </div>

        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
