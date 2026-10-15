import type { Metadata } from "next";
import { BlogListing } from "@/components/pages/blog";


export const metadata: Metadata = {
  title: "Blog & Insights",

  description:
    "Explore technology insights, digital strategy, SEO, entrepreneurship, practical solutions, and founder experiences from Shedrack Nliam (Sheddy De Coder).",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Blog & Insights | Sheddy De Coder",
    description:
      "Ideas and insights on technology, digital growth, entrepreneurship, and building meaningful solutions.",
    url: "/blog",
    type: "website",
  },
};


export default function BlogPage() {
  return <BlogListing />;
}