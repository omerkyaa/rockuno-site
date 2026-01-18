"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { scrollY } = useScroll();

  // Scroll 0 → 80px aralığında navbar küçülsün ve blur artsın
  const y = useTransform(scrollY, [0, 120], [0, -2]);
  const scale = useTransform(scrollY, [0, 120], [1, 0.98]);
  const opacity = useTransform(scrollY, [0, 120], [0.78, 0.9]);

  return (
    <div className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          style={{ y, scale, opacity }}
          className="mt-4 flex items-center justify-between rounded-3xl glass px-4 py-3 shadow-sm rockuno-border"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Rockuno logo"
              width={36}
              height={36}
              priority
              className="rounded-xl"
            />
            <span className="text-sm font-semibold tracking-wide text-rockuno-ink dark:text-white">ROCKUNO</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-rockuno-ink dark:text-white md:flex">
            <Link href="/#services" className="transition hover:opacity-70">
              Services
            </Link>
            <Link href="/projects" className="transition hover:opacity-70">
              Projects
            </Link>
            <Link href="/#work" className="transition hover:opacity-70">
              How we work
            </Link>
            <Link href="/#pricing" className="transition hover:opacity-70">
              Pricing
            </Link>
            <Link href="/#faq" className="transition hover:opacity-70">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              href="/contact"
              className="hidden rounded-2xl px-4 py-2 text-sm font-semibold text-rockuno-ink transition hover:opacity-70 dark:text-white md:inline-flex"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] active:scale-[0.99]"
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
                Start a project
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
