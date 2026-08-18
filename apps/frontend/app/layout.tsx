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
    "I help founders, businesses, brands, and startups establish a strong online presence, build meaningful digital products, and scale through technology, design, and digital innovation.",
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
      
     <body className="bg-background text-text-primaryDark font-body antialiased">
     <Providers>
     <Navbar />
     {children}
     <Footer />
    </Providers>
    </body>
    </html>
  );
}