import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.longTagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.longTagline,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.longTagline,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jet.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Inline theme bootstrap to avoid flash of incorrect theme.
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var sys = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var dark = saved ? saved === 'dark' : sys;
                  if (dark) document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: site.role,
              email: site.email,
              url: site.url,
              address: { "@type": "PostalAddress", addressLocality: site.location },
              sameAs: [site.links.github, site.links.linkedin, site.links.medium],
              alumniOf: [
                "Indian Institute of Technology Madras",
                "University of Birmingham",
                "Shri Mata Vaishno Devi University",
              ],
              knowsAbout: [
                "Generative AI",
                "Retrieval-Augmented Generation",
                "Vision-Language Models",
                "MLOps",
                "AWS",
                "Quantum Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
