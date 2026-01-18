"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Section from "./Section";
import { Smartphone, Globe, Zap, Cloud, Users, CheckCircle2 } from "lucide-react";

export type ContactCategory = 
  | "app" 
  | "web" 
  | "ai-agent" 
  | "cloud" 
  | "waitlist" 
  | "general";

interface CategoryOption {
  id: ContactCategory;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const categories: CategoryOption[] = [
  {
    id: "app",
    label: "Mobile App Development",
    icon: <Smartphone className="h-5 w-5" />,
    description: "Native Android (Kotlin) or iOS (Swift/SwiftUI) development"
  },
  {
    id: "web",
    label: "Web & Landing Pages",
    icon: <Globe className="h-5 w-5" />,
    description: "Next.js, React, responsive design, and SEO optimization"
  },
  {
    id: "ai-agent",
    label: "AI Agent & Automation",
    icon: <Zap className="h-5 w-5" />,
    description: "AI-powered workflows, intelligent assistants, content generation"
  },
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    icon: <Cloud className="h-5 w-5" />,
    description: "Backend systems, Firebase, cloud functions, APIs"
  },
  {
    id: "waitlist",
    label: "Join Product Waitlist",
    icon: <Users className="h-5 w-5" />,
    description: "Get early access to our products (SperrmüllFinder, Quinvan, etc.)"
  },
  {
    id: "general",
    label: "General Inquiry",
    icon: <CheckCircle2 className="h-5 w-5" />,
    description: "Questions, partnerships, or other inquiries"
  }
];

export default function Contact() {
  const searchParams = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState<ContactCategory>("general");
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    project: "",
    category: "general" as ContactCategory
  });
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Auto-select category from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category") as ContactCategory;
    const projectParam = searchParams.get("project");
    
    if (categoryParam && categories.find(c => c.id === categoryParam)) {
      setSelectedCategory(categoryParam);
      setFormData(prev => ({ ...prev, category: categoryParam }));
    }
    
    if (projectParam) {
      setFormData(prev => ({ 
        ...prev, 
        project: prev.project || `I'm interested in ${projectParam}` 
      }));
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryId: ContactCategory) => {
    setSelectedCategory(categoryId);
    setFormData(prev => ({ ...prev, category: categoryId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      // Store submitted email before reset
      setSubmittedEmail(formData.email);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", project: "", category: "general" });
      
      // Keep success message visible longer
      setTimeout(() => {
        setSubmitSuccess(false);
        setSelectedCategory("general");
      }, 8000);
    } catch (error) {
      console.error(error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <Section
      id="contact"
      title="Let's work together"
      subtitle="Choose your interest below and tell us about your project. We'll respond with a clear scope and timeline."
    >
      <div className="mx-auto max-w-4xl">
        {/* Category Selection */}
        <div className="mb-10">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-rockuno-ink dark:text-white">
            What are you interested in?
          </h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`group relative rounded-2xl p-4 text-left transition ${
                  selectedCategory === category.id
                    ? "gradient-primary shadow-lg"
                    : "rockuno-border bg-white/70 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 ${
                      selectedCategory === category.id
                        ? "text-white drop-shadow-md"
                        : "text-rockuno-blue dark:text-rockuno-purple"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold ${
                        selectedCategory === category.id
                          ? "text-white drop-shadow-md"
                          : "text-rockuno-ink dark:text-white"
                      }`}
                    >
                      {category.label}
                    </div>
                    <div
                      className={`mt-1 text-xs leading-relaxed ${
                        selectedCategory === category.id
                          ? "text-white/95 drop-shadow-sm"
                          : "text-black/60 dark:text-white/60"
                      }`}
                    >
                      {category.description}
                    </div>
                  </div>
                  {selectedCategory === category.id && (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white drop-shadow-md" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Info */}
        {selectedCategoryData && (
          <div className="mb-8 rounded-2xl rockuno-border bg-rockuno-blue/10 p-4 dark:bg-rockuno-blue/20">
            <div className="flex items-center gap-2 text-sm font-semibold text-rockuno-blue dark:text-rockuno-purple">
              {selectedCategoryData.icon}
              <span>Selected: {selectedCategoryData.label}</span>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
              className="rounded-2xl rockuno-border bg-white/70 px-5 py-4 text-sm text-rockuno-ink outline-none ring-rockuno-purple transition focus:ring-1 dark:bg-white/5 dark:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
              className="rounded-2xl rockuno-border bg-white/70 px-5 py-4 text-sm text-rockuno-ink outline-none ring-rockuno-purple transition focus:ring-1 dark:bg-white/5 dark:text-white"
            />
          </div>
          
          <textarea
            placeholder={
              selectedCategory === "waitlist" 
                ? "Which product are you interested in? Any specific features you're looking for?"
                : "Tell us about your project, timeline, and what you're looking to build..."
            }
            rows={6}
            required
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
            disabled={isSubmitting}
            className="w-full rounded-2xl rockuno-border bg-white/70 px-5 py-4 text-sm text-rockuno-ink outline-none ring-rockuno-purple transition focus:ring-1 dark:bg-white/5 dark:text-white"
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="gradient-primary w-full rounded-2xl px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl disabled:opacity-50"
          >
            <span className="drop-shadow-md">
              {isSubmitting ? "Sending..." : "Send request"}
            </span>
          </button>

          {submitSuccess && (
            <div className="rounded-3xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-green-700 dark:text-green-300">
                    Thank you for reaching out. Your message has been received successfully. 
                    Our team will review your request and get back to you within 24 hours.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-400">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    We&apos;ll respond to: {submittedEmail}
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitError && (
            <div className="rounded-3xl bg-gradient-to-r from-red-50 to-rose-50 p-8 dark:from-red-900/20 dark:to-rose-900/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-red-800 dark:text-red-200">
                    Something Went Wrong
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-red-700 dark:text-red-300">
                    {submitError}
                  </p>
                  <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                    You can also reach us directly at: <a href="mailto:info@rockuno.com" className="font-semibold underline">info@rockuno.com</a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
