import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { personal } from "@/data/personal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vincent-youmssi-portfolio.vercel.app"),
  applicationName: personal.name,
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  keywords: [
    "Vincent Youmssi",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Spring Boot",
    "Java",
    "Identity Provider",
    "OAuth2",
    "OpenID Connect",
    "JWT",
    "DevOps",
    "Docker",
    "PostgreSQL",
    "Redis",
    "AWS AI",
    "Agentic AI",
    "RTGS",
    "Core Banking",
    "Middleware",
    "Yaoundé",
    "Cameroon",
    "Conakry",
    "Guinea",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  publisher: personal.name,
  icons: {
    icon: "/stickers_your_code.ico",
    shortcut: "/stickers_your_code.ico",
    apple: "/stickers_your_code.webp",
  },
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
    url: "https://vincent-youmssi-portfolio.vercel.app",
    siteName: personal.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/stickers_your_code.webp",
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
    images: ["/stickers_your_code.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vincent-youmssi-portfolio.vercel.app",
  },
  verification: {
    google: "LBZPSvVcWOuzadl2yzjdnfKY0u7GlVgML03aCZfwL24",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-2xl px-6 font-sans antialiased`}
      >
        <ThemeProvider>
          <Nav />
          <main className="min-h-[calc(100vh-12rem)] py-8">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: personal.name,
                jobTitle: personal.title,
                description: personal.bio,
                url: "https://vincent-youmssi-portfolio.vercel.app",
                image: "https://vincent-youmssi-portfolio.vercel.app/stickers_your_code.webp",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Yaoundé",
                  addressCountry: "CM",
                },
                sameAs: [
                  `https://github.com/${personal.social.github}`,
                  `https://linkedin.com/in/${personal.social.linkedin}`,
                  `https://youtube.com/${personal.social.youtube}`,
                ],
                knowsAbout: [
                  "Next.js", "React", "TypeScript", "TailwindCSS",
                  "Spring Boot", "Java", "PostgreSQL", "Redis", "Docker",
                  "OAuth2", "OpenID Connect", "JWT", "Identity Provider",
                  "DevOps", "CI/CD", "AWS", "AI & ML", "REST APIs",
                  "Middleware Architecture", "Core Banking Systems", "RTGS",
                ],
                worksFor: [
                  { "@type": "Organization", name: "Afriland First Bank" },
                  { "@type": "Organization", name: "48Org" },
                ],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Software Engineer",
                  skills: "Next.js, Spring Boot, OAuth2, DevOps, Core Banking",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: personal.name,
                url: "https://vincent-youmssi-portfolio.vercel.app",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://vincent-youmssi-portfolio.vercel.app/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                name: "Main Navigation",
                hasPart: [
                  { "@type": "SiteNavigationElement", name: "About", url: "https://vincent-youmssi-portfolio.vercel.app/about" },
                  { "@type": "SiteNavigationElement", name: "Experience", url: "https://vincent-youmssi-portfolio.vercel.app/experience" },
                  { "@type": "SiteNavigationElement", name: "Projects", url: "https://vincent-youmssi-portfolio.vercel.app/projects" },
                  { "@type": "SiteNavigationElement", name: "Education", url: "https://vincent-youmssi-portfolio.vercel.app/education" },
                  { "@type": "SiteNavigationElement", name: "Certifications", url: "https://vincent-youmssi-portfolio.vercel.app/certifications" },
                  { "@type": "SiteNavigationElement", name: "Contact", url: "https://vincent-youmssi-portfolio.vercel.app/contact" },
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
