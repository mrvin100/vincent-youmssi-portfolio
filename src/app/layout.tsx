import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  keywords: [
    "Vincent Youmssi",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Yaoundé",
    "Cameroon",
    "Frontend Developer",
    "Full-Stack Developer",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
    url: "https://vincent-youmssi-portfolio.vercel.app",
    siteName: personal.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personal.name,
              jobTitle: personal.title,
              description: personal.bio,
              url: "https://vincent-youmssi-portfolio.vercel.app",
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
            }),
          }}
        />
      </body>
    </html>
  );
}
