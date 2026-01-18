"use client";

import { Layers, Zap, Shield, Smartphone } from "lucide-react";
import Section from "./Section";
import Link from "next/link";

const services = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Native Mobile Apps",
    desc: "Android (Kotlin/Java) and iOS (Swift/SwiftUI) development. We build native apps with clean architecture, proper state management, and production-ready infrastructure.",
    link: "/contact?category=app"
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Web & Landing Pages",
    desc: "Next.js, React, and modern web development. From landing pages to complex SaaS dashboards, we deliver responsive, SEO-optimized, and performant web applications.",
    link: "/contact?category=web"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "AI Agent Automation",
    desc: "B2B2C workflow automation, intelligent assistants, and AI content generation. We integrate OpenAI, custom models, and build automation systems that reduce operational overhead.",
    link: "/contact?category=ai-agent"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Backend & Infrastructure",
    desc: "Firebase, cloud functions, authentication, notifications, analytics, and database design. We build scalable backend systems with proper security and monitoring.",
    link: "/contact?category=cloud"
  },
];

function Card({ icon, title, desc, link }: { icon: React.ReactNode; title: string; desc: string; link: string }) {
  return (
    <Link
      href={link}
      className="group rounded-3xl rockuno-border bg-white/70 p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:bg-white/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary">
        <div className="[&>svg]:stroke-white [&>svg]:drop-shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-rockuno-ink dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-rockuno-ink dark:text-white">{desc}</p>
      <div className="mt-4 text-xs font-semibold text-rockuno-blue transition group-hover:text-rockuno-purple dark:text-rockuno-purple dark:group-hover:text-rockuno-blue">
        Contact us →
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <Section
      id="services"
      title="What we build"
      subtitle="We develop our own SaaS products and partner with companies and individuals who need custom development. From concept to production deployment."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Card key={i} icon={service.icon} title={service.title} desc={service.desc} link={service.link} />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 rounded-3xl rockuno-border bg-white/60 p-8 text-center dark:bg-white/5">
        <h3 className="text-xl font-semibold text-rockuno-ink dark:text-white">
          SaaS Studio + Development Partner
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/65 dark:text-white/70">
          We&apos;re not just an agency. Rockuno builds its own products (SperrmüllFinder, Quinvan Bff, Rockuno Cloud, 
          SafeRunVPN, Mystern) and works with clients on custom projects. We understand product development 
          from the inside because we ship our own.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl rockuno-border bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            View our products
          </Link>
          <Link
            href="/contact"
            className="gradient-primary inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Discuss your project
          </Link>
        </div>
      </div>
    </Section>
  );
}
