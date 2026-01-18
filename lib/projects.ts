// Project data for Rockuno's product portfolio

export type ProjectStatus = "coming-soon" | "beta" | "in-development" | "private-beta";

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tags: string[];
  status: ProjectStatus;
  image: string;
  imageAlt: string;
  cta: {
    primary: string;
    primaryLink: string;
    secondary?: string;
    secondaryLink?: string;
  };
}

export const projects: Project[] = [
  {
    id: "sperrmuellfinder",
    slug: "sperrmuellfinder",
    name: "SperrmüllFinder",
    tagline: "Discover free items in your neighborhood",
    description: "A mobile app for discovering bulky waste items left on the street via interactive map and community feed. Find, share, and reuse nearby items while connecting with your local community.",
    features: [
      "Location-based feed and interactive map view",
      "Photo sharing with automatic 72-hour expiration",
      "Community features: likes, comments, and follows",
      "Premium filters, extended reach, and notifications",
      "AI-powered moderation and visual processing"
    ],
    tags: ["Android", "Kotlin", "Firebase", "Maps", "AI"],
    status: "in-development",
    image: "/projects/sperrmuellfinder.png",
    imageAlt: "SperrmüllFinder app interface showing map view with nearby items",
    cta: {
      primary: "Project details",
      primaryLink: "/projects/sperrmuellfinder",
      secondary: "Join waitlist",
      secondaryLink: "/contact?category=waitlist&project=sperrmuellfinder"
    }
  },
  {
    id: "quinvan-bff",
    slug: "quinvan-bff",
    name: "Quinvan Bff",
    tagline: "Meaningful connections, simplified",
    description: "A social and friendship-focused mobile app designed for authentic interactions. Features a streamlined matching flow and intuitive communication tools to help people build genuine connections.",
    features: [
      "Clean onboarding and user profiles",
      "Basic and Premium subscription tiers",
      "Smart matching algorithm",
      "Analytics dashboard and insights",
      "Push notifications and real-time updates"
    ],
    tags: ["iOS", "SwiftUI", "Firebase", "Cloud Functions"],
    status: "in-development",
    image: "/projects/quinvan-bff.png",
    imageAlt: "Quinvan Bff iOS app showing user profile and matching interface",
    cta: {
      primary: "Project details",
      primaryLink: "/projects/quinvan-bff",
      secondary: "Join waitlist",
      secondaryLink: "/contact?category=waitlist&project=quinvan-bff"
    }
  },
  {
    id: "rockuno-cloud",
    slug: "rockuno-cloud",
    name: "Rockuno Cloud",
    tagline: "AI-powered tools for modern businesses",
    description: "An AI-powered SaaS platform offering content generation, automation workflows, and intelligent business tools. Designed for small businesses and creators who need powerful AI without complexity.",
    features: [
      "AI content generation: text, descriptions, summaries",
      "Visual workflow automation builder (n8n-style)",
      "B2B dashboard with project-based usage",
      "API integrations and webhooks",
      "Usage analytics and cost tracking"
    ],
    tags: ["Web", "Next.js", "AI", "Firebase", "Automation"],
    status: "in-development",
    image: "/projects/rockuno-cloud.png",
    imageAlt: "Rockuno Cloud dashboard showing AI workflow automation interface",
    cta: {
      primary: "Project details",
      primaryLink: "/projects/rockuno-cloud",
      secondary: "Join waitlist",
      secondaryLink: "/contact?category=waitlist&project=rockuno-cloud"
    }
  },
  {
    id: "saferunvpn",
    slug: "saferunvpn",
    name: "SafeRunVPN",
    tagline: "Simple networking tools for privacy-conscious users",
    description: "A lightweight HTTPS proxy solution for Android that provides basic networking tools. Features IP verification, connection status monitoring, and educational resources for understanding online privacy.",
    features: [
      "HTTPS proxy connection management",
      "IP address verification and country lookup",
      "Connection status monitoring",
      "Simple, educational UX",
      "No-logs policy and transparent operation"
    ],
    tags: ["Android", "Kotlin", "Networking", "Privacy"],
    status: "in-development",
    image: "/projects/saferunvpn.png",
    imageAlt: "SafeRunVPN Android app showing connection status and IP information",
    cta: {
      primary: "Project details",
      primaryLink: "/projects/saferunvpn",
      secondary: "Join waitlist",
      secondaryLink: "/contact?category=waitlist&project=saferunvpn"
    }
  },
  {
    id: "mystern",
    slug: "mystern",
    name: "Mystern",
    tagline: "Your personal AI astrology assistant",
    description: "A multilingual AI-powered astrology app offering personalized daily readings and insights. Available in German, English, and Turkish with intelligent Q&A and customized reports.",
    features: [
      "Personalized onboarding and birth chart setup",
      "Daily AI-powered readings and insights",
      "Interactive Q&A with AI astrologer (Premium)",
      "Monthly reports and PDF exports",
      "Multi-language support (DE / EN / TR)"
    ],
    tags: ["Flutter", "AI", "Multilingual", "Firebase"],
    status: "in-development",
    image: "/projects/mystern.png",
    imageAlt: "Mystern app showing daily astrology reading interface",
    cta: {
      primary: "Project details",
      primaryLink: "/projects/mystern",
      secondary: "Join waitlist",
      secondaryLink: "/contact?category=waitlist&project=mystern"
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getStatusBadgeColor(status: ProjectStatus): string {
  switch (status) {
    case "coming-soon":
      return "bg-rockuno-purple/10 text-rockuno-purple dark:bg-rockuno-purple/20";
    case "beta":
      return "bg-rockuno-blue/10 text-rockuno-blue dark:bg-rockuno-blue/20";
    case "in-development":
      return "bg-white/90 text-rockuno-ink backdrop-blur-sm dark:bg-white/90 dark:text-rockuno-ink";
    case "private-beta":
      return "bg-rockuno-yellow/10 text-rockuno-yellow dark:bg-rockuno-yellow/20";
    default:
      return "bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/70";
  }
}

export function getStatusLabel(status: ProjectStatus): string {
  switch (status) {
    case "coming-soon":
      return "Coming soon";
    case "beta":
      return "Beta";
    case "in-development":
      return "In development";
    case "private-beta":
      return "Private beta";
    default:
      return status;
  }
}
