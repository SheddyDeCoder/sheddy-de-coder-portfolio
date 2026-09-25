import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { Providers } from "@/providers";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/seo/site-config";
import { PersonJsonLd, OrganizationJsonLd, WebSiteJsonLd } from "@/lib/seo/structured-data";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.legalName} — ${SITE_CONFIG.jobTitle}`,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.defaultDescription,
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.legalName} — ${SITE_CONFIG.jobTitle}`,
    description: SITE_CONFIG.defaultDescription,
    images: ["/og-image.png"], // still on the asset manifest as TODO
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.legalName} — ${SITE_CONFIG.jobTitle}`,
    description: SITE_CONFIG.defaultDescription,
  },
  alternates: { canonical: SITE_CONFIG.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      
     <body className="bg-background text-text-primary font-body antialiased">
      <PersonJsonLd />
    <OrganizationJsonLd />
    <WebSiteJsonLd />
     <Providers>
     <Navbar />
     {children}
     <Analytics />
     <GoogleAnalytics />
     <Footer />
    </Providers>
    </body>
    </html>
  );
}