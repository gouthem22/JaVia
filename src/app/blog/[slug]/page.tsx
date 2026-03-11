import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar, ArrowUpRight, User } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — JaVia Ventures`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* ═══ HERO ═══ */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/50 to-[#0c0a09]/10" />

        <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12 pb-12 md:pb-20 pt-32 z-10">
          <div className="space-y-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-amber-500/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
              {post.category}
            </span>

            <h1
              className="text-white leading-[1.1] font-semibold"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {post.title}
            </h1>

            <p className="text-amber-100/70 text-base md:text-lg leading-relaxed font-normal max-w-2xl" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
              {post.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-amber-100/50 text-xs font-semibold uppercase tracking-widest pt-2">
              <span className="flex items-center gap-1.5"><User size={13} /> {post.author}</span>
              <span className="w-1 h-1 rounded-full bg-amber-200/30" />
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
              <span className="w-1 h-1 rounded-full bg-amber-200/30" />
              <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STICKY NAV ═══ */}
      <div className="sticky top-0 z-40 bg-[#faf9f7]/90 backdrop-blur-xl border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 text-[13px] font-semibold transition-colors"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link
            href="/blog"
            className="text-stone-400 hover:text-amber-700 text-[13px] font-semibold transition-colors"
          >
            All Articles →
          </Link>
        </div>
      </div>

      {/* ═══ ARTICLE BODY ═══ */}
      <article className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[680px] mx-auto">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-14 last:mb-0">
              {section.heading && (
                <h2
                  className="text-stone-900 mb-6 font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                >
                  {section.heading}
                </h2>
              )}

              {section.body.map((para, j) => (
                <p key={j} className="text-stone-600 leading-[1.85] font-normal mb-5 last:mb-0" style={{ fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)" }}>
                  {para}
                </p>
              ))}

              {section.blockquote && (
                <div className="blog-blockquote my-10">
                  <p>{section.blockquote}</p>
                </div>
              )}

              {section.image && (
                <figure className="my-10 -mx-4 md:-mx-12 lg:-mx-20">
                  <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {section.image.caption && (
                    <figcaption className="text-center text-stone-400 text-[13px] mt-4 font-medium px-4 md:px-12 lg:px-20 italic">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}
        </div>

        {/* ═══ END DIVIDER ═══ */}
        <div className="max-w-[680px] mx-auto mt-16 mb-16 flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-300" />
          <span className="w-2 h-2 rounded-full bg-amber-200" />
          <span className="w-2 h-2 rounded-full bg-amber-300" />
        </div>

        {/* ═══ CTA ═══ */}
        <div className="max-w-[680px] mx-auto">
          <div className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-center space-y-6">
            <h3
              className="text-amber-100 font-semibold"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
            >
              Have a project in mind?
            </h3>
            <p className="text-stone-300/70 text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed">
              At JaVia Ventures, we build scalable digital products and enterprise-grade web platforms. Let&apos;s discuss how we can help your business grow.
            </p>
            <a
              href={`https://wa.me/919788995924?text=${encodeURIComponent(`Hi JaVia! I just read "${post.title}" and would love to discuss my project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 text-stone-950 font-bold rounded-full hover:bg-amber-400 transition-all hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </article>

      {/* ═══ RELATED ARTICLES ═══ */}
      <section className="border-t border-stone-200/60 bg-stone-50/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
          <div className="flex items-center justify-between mb-12">
            <h3
              className="text-stone-900 font-semibold"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
            >
              Continue Reading
            </h3>
            <Link
              href="/blog"
              className="text-stone-400 hover:text-amber-700 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
            >
              All Articles <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {relatedPosts.map((rPost) => (
              <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-stone-100">
                  <img
                    src={rPost.coverImage}
                    alt={rPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {rPost.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-stone-400 text-[11px] font-bold uppercase tracking-widest">{rPost.readTime} · {rPost.date}</p>
                  <h4
                    className="text-stone-900 group-hover:text-amber-700 transition-colors leading-snug font-semibold"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
                  >
                    {rPost.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
