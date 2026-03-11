import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — JaVia Ventures",
  description: "Insights on SaaS, enterprise web development, UI/UX design, mobile apps, and digital consulting from JaVia Ventures.",
};

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7] pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ═══ HEADER ═══ */}
        <div className="mb-20 space-y-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 text-[13px] font-semibold transition-colors"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <div className="space-y-5">
            <span className="text-amber-600/70 font-bold tracking-[0.2em] uppercase text-xs">Insights & Perspectives</span>
            <h1
              className="text-stone-900 leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 600 }}
            >
              Forward Thinking<br />
              <span className="italic text-amber-700/60">Digital Perspectives</span>
            </h1>
            <p className="text-stone-500 text-base md:text-lg font-normal max-w-xl leading-relaxed">
              Explore our latest thinking on SaaS strategy, enterprise engineering, product design, and the future of digital business in India.
            </p>
          </div>
        </div>

        {/* ═══ FEATURED POST ═══ */}
        <Link href={`/blog/${blogPosts[0].slug}`} className="group block mb-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-stone-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <img
                src={blogPosts[0].coverImage}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-stone-400 text-[11px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Clock size={13} /> {blogPosts[0].readTime}</span>
                <span>{blogPosts[0].date}</span>
              </div>
              <h2
                className="text-stone-900 group-hover:text-amber-700 transition-colors leading-snug"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600 }}
              >
                {blogPosts[0].title}
              </h2>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed font-normal">
                {blogPosts[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-amber-700 font-bold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
                Read Article <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </Link>

        {/* ═══ DIVIDER ═══ */}
        <div className="border-t border-stone-200 mb-16" />

        {/* ═══ ALL POSTS GRID ═══ */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-stone-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-stone-400 text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3
                    className="text-stone-900 group-hover:text-amber-700 transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.05rem, 1.2vw, 1.25rem)", fontWeight: 600 }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 font-normal">
                    {post.excerpt}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1 text-amber-700 font-bold text-[11px] uppercase tracking-widest group-hover:gap-2 transition-all">
                      Read Article <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
