import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { Providers } from "@/providers";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shedrack Nliam — Technology Founder & Product Builder",
    template: "%s | SHEDDY DE CODER",
  },
  description:
    "Technology Founder, Product Builder & Digital Strategist — helping brands, businesses, startups and churches grow through technology, media and digital strategy. Open to remote and international collaboration.",
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
     <Providers>
     <Navbar />
     {children}
     <Footer />
    </Providers>
    </body>
    </html>
  );
}