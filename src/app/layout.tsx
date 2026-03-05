import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.bio,
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
    url: "https://vincentyoumssi.com",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-2xl px-6 font-sans antialiased`}
      >
        <Nav />
        <main className="min-h-[calc(100vh-12rem)] py-8">{children}</main>
        <Footer />
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
              url: "https://vincentyoumssi.com",
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
