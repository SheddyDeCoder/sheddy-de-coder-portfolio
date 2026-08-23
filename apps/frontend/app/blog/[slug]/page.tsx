import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/components/pages/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      <span className="font-body text-xs text-primary">{post.category}</span>
      <h1 className="mt-2 font-display text-3xl font-bold text-text-primary">
        {post.title}
      </h1>
      <p className="mt-4 font-body text-sm text-text-secondary">
        {post.readingTimeMinutes} min read · {post.author}
      </p>
      <div className="prose prose-invert mt-8 max-w-none font-body text-text-secondary">
        {post.content}
      </div>
    </article>
  );
}