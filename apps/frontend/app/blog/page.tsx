import type { Metadata } from "next";
import { BlogListing } from "@/components/pages/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, founder insights, technology explanations, and build-in-public updates from Shedrack Nliam (Sheddy De Coder).",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogListing />;
}