import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { ArrowUpRight, CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getStatusBadgeColor, getStatusLabel, projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Rockuno",
    };
  }

  return {
    title: `${project.name} - ${project.tagline} | Rockuno`,
    description: project.description,
    openGraph: {
      title: `${project.name} - ${project.tagline}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-rockuno-gradient">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-rockuno-ink transition hover:opacity-70 dark:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <div className="mb-4">
              <span className={`inline-block rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusBadgeColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
            </div>

            <h1 className="text-4xl font-semibold text-rockuno-ink md:text-5xl dark:text-white">
              {project.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-rockuno-blue dark:text-rockuno-purple">
              {project.tagline}
            </p>
            <p className="mt-6 text-base leading-relaxed text-black/65 dark:text-white/70">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full rockuno-border bg-white px-4 py-2 text-sm text-black/70 dark:bg-white/10 dark:text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={project.cta.secondaryLink || "/#contact"}
                className="gradient-primary group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
              >
                Join waitlist
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href={`/contact?category=general&project=${project.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl rockuno-border bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Discuss a similar project
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] overflow-hidden rounded-3xl rockuno-border lg:h-[500px]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section
        id="features"
        title="Key Features"
        subtitle="What makes this product unique"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl rockuno-border bg-white/70 p-6 dark:bg-white/5"
            >
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-rockuno-blue dark:text-rockuno-purple" />
              <div className="text-sm leading-relaxed text-rockuno-ink dark:text-white">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl rockuno-border bg-white/60 p-12 text-center dark:bg-white/5">
          <h2 className="text-2xl font-semibold text-rockuno-ink dark:text-white">
            Interested in {project.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/65 dark:text-white/70">
            Want to learn more, join the waitlist, or discuss a similar project? 
            Get in touch and we&apos;ll respond with details.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/contact?category=waitlist&project=${project.slug}`}
              className="gradient-primary group inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl rockuno-border bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
