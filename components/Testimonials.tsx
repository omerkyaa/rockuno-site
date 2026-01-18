"use client";

import Section from "./Section";
import { Star } from "lucide-react";
import Image from "next/image";

const clients = [
  "FinanceFlow GmbH",
  "HealthTech Innovations",
  "LogisticsPro AG",
  "DataSync Systems",
  "CloudOps Eu",
  "TechVision ",
  "InnovateLabs AG",
  "SmartSolutions GmbH",
  "FutureStack Systems",
  "DigitalCore Europe",
];

const testimonials = [
  {
    name: "Michael Weber",
    role: "Founder & CEO",
    company: "FinanceFlow GmbH",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    text: "Rockuno delivered a complex fintech platform with multi-currency support and GDPR compliance in 10 weeks. Technical depth we couldn't find elsewhere.",
    rating: 5,
    highlight: false,
  },
  {
    name: "Sarah Mueller",
    role: "CTO",
    company: "HealthTech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "They built our AI diagnostic system from architecture to production. Clean code, proper testing, and real engineering discipline.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Thomas Schneider",
    role: "Product Lead",
    company: "LogisticsPro AG",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Fast execution without cutting corners. Their SaaS infrastructure scaled from 100 to 50K users with zero rewrites.",
    rating: 5,
    highlight: false,
  },
];

export default function Testimonials() {
  // Six times the array for ultra-smooth infinite scroll
  const allClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <>
      {/* SVG Gradient Definition for Stars */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#2D4BFF', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#7B2FFF', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#C026D3', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#FF7A1A', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFB000', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <Section
        id="testimonials"
        title="Trusted by founders building serious products"
        subtitle="Technical partnerships with companies who value depth and delivery."
      >
      {/* Client Logos - Animated Slider */}
      <div className="relative mb-16 overflow-hidden rounded-3xl p-[2px]">
        <div className="absolute inset-0 gradient-primary opacity-60" />
        <div className="relative rounded-3xl bg-white p-8 dark:bg-rockuno-ink">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider gradient-primary-text">
            Worked with
          </p>
          {/* Infinite Scroll Container - Ultra Smooth */}
          <div className="relative overflow-hidden mask-gradient">
            <div className="inline-flex animate-scroll-smooth gap-12">
              {allClients.map((client, idx) => (
                <div
                  key={`${client}-${idx}`}
                  className={`flex-shrink-0 whitespace-nowrap text-base font-semibold ${
                    idx % 2 === 0 
                      ? "gradient-primary-text" 
                      : "text-rockuno-ink dark:text-white"
                  }`}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className={`group relative rounded-3xl p-8 transition hover:-translate-y-1 ${
              testimonial.highlight
                ? "gradient-primary shadow-lg hover:shadow-xl"
                : "bg-white/70 rockuno-border shadow-sm hover:shadow-soft dark:bg-white/5"
            }`}
          >
            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {[...Array(testimonial.rating)].map((_, starIdx) => (
                <Star
                  key={starIdx}
                  className={`h-4 w-4 ${
                    testimonial.highlight
                      ? "fill-white text-white drop-shadow-md"
                      : "star-gradient"
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className={`text-sm leading-relaxed ${
              testimonial.highlight
                ? "text-white/95 drop-shadow-sm"
                : "text-rockuno-ink dark:text-white"
            }`}>
              &quot;{testimonial.text}&quot;
            </p>

            {/* Author */}
            <div className={`mt-6 flex items-center gap-3 border-t pt-6 ${
              testimonial.highlight
                ? "border-white/20"
                : "border-black/5 dark:border-white/10"
            }`}>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full ring-2 ring-white/20"
              />
              <div>
                <div className={`text-sm font-semibold ${
                  testimonial.highlight
                    ? "text-white drop-shadow-md"
                    : "text-rockuno-ink dark:text-white"
                }`}>
                  {testimonial.name}
                </div>
                <div className={`text-xs ${
                  testimonial.highlight
                    ? "text-white/90 drop-shadow-sm"
                    : "text-rockuno-ink dark:text-white"
                }`}>
                  {testimonial.role}
                </div>
                <div className={`text-xs ${
                  testimonial.highlight
                    ? "text-white/90 drop-shadow-sm"
                    : "text-rockuno-ink dark:text-white"
                }`}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
    </>
  );
}
