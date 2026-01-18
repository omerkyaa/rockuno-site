import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Rockuno — AI SaaS Engineering Studio | Germany/EU",
  description:
    "We build production-grade AI-powered SaaS systems. End-to-end architecture, automation, billing, and cloud infrastructure. EU-based engineering for serious founders.",
  keywords: [
    "AI SaaS development",
    "SaaS engineering",
    "AI automation",
    "SaaS architecture",
    "EU SaaS development",
    "Germany tech studio",
    "production AI systems",
    "SaaS infrastructure",
  ],
  authors: [{ name: "Rockuno" }],
  creator: "Rockuno",
  publisher: "Rockuno",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://rockuno.com",
    title: "Rockuno — AI SaaS Engineering Studio",
    description:
      "Production-grade AI-powered SaaS systems. Built for founders who need technical excellence.",
    siteName: "Rockuno",
    images: [
      {
        url: "/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Rockuno - AI SaaS Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rockuno — AI SaaS Engineering Studio",
    description:
      "Production-grade AI-powered SaaS systems. Built for founders who need technical excellence.",
    images: ["/logo-icon.png"],
  },
  metadataBase: new URL("https://rockuno.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rockuno",
              description:
                "AI SaaS Engineering Studio building production-grade systems for founders",
              url: "https://rockuno.com",
              logo: "https://rockuno.com/logo-icon.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
              },
              areaServed: ["EU", "DE", "Global"],
              serviceType: [
                "SaaS Development",
                "AI Integration",
                "Cloud Architecture",
                "Automation Systems",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased text-rockuno-ink`}>
        {children}
      </body>
    </html>
  );
}
