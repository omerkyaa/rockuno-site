"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, getStatusBadgeColor, getStatusLabel } from "@/lib/projects";

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group rounded-3xl rockuno-border bg-white/70 shadow-sm transition hover:shadow-soft dark:bg-white/5"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusBadgeColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-rockuno-ink dark:text-white">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-rockuno-blue dark:text-rockuno-purple">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/70">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full rockuno-border bg-white px-3 py-1 text-xs text-black/70 dark:bg-white/10 dark:text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-6 dark:border-white/10">
          <div className="flex items-center gap-2 text-sm font-semibold text-rockuno-blue transition group-hover:text-rockuno-purple dark:text-rockuno-purple dark:group-hover:text-rockuno-blue">
            {project.cta.primary}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-rockuno-gradient">
      <Navbar />

      <Section
        id="projects"
        title="Our Products"
        subtitle="We build our own SaaS products and develop custom solutions for clients. From native mobile apps to AI-powered web platforms."
      >
        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20 rounded-3xl rockuno-border bg-white/60 p-8 md:p-12 dark:bg-white/5">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-rockuno-ink dark:text-white">
              SaaS Studio + Development Partner
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/65 dark:text-white/70">
              Rockuno builds its own products and partners with companies and individuals 
              who need custom development. We deliver production-ready solutions, not prototypes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 rockuno-border dark:bg-white/10">
              <div className="text-sm font-semibold text-rockuno-ink dark:text-white">
                Native Mobile Apps
              </div>
              <div className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/70">
                Android (Kotlin/Java) and iOS (Swift/SwiftUI) development
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 rockuno-border dark:bg-white/10">
              <div className="text-sm font-semibold text-rockuno-ink dark:text-white">
                Web & Landing Pages
              </div>
              <div className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/70">
                Next.js, React, responsive design, and SEO optimization
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 rockuno-border dark:bg-white/10">
              <div className="text-sm font-semibold text-rockuno-ink dark:text-white">
                AI Agent Automation
              </div>
              <div className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/70">
                B2B2C workflows, intelligent assistants, and content generation
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 rockuno-border dark:bg-white/10">
              <div className="text-sm font-semibold text-rockuno-ink dark:text-white">
                Backend & Infrastructure
              </div>
              <div className="mt-2 text-xs leading-relaxed text-black/65 dark:text-white/70">
                Firebase, notifications, analytics, and cloud deployment
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-black/60 dark:text-white/60">
            Building something? Let's discuss scope, timeline, and delivery.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="gradient-primary group inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/#services"
              className="group inline-flex items-center gap-2 rounded-2xl rockuno-border bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              View services
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
