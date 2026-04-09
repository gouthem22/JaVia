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
    <main className="min-h-screen bg-[#f4f6f8] pt-28 pb-24 px-6 md:px-12">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&display=swap');
      `}} />
      <div className="max-w-6xl mx-auto">
        {/* ═══ HEADER ═══ */}
        <div className="mb-16 space-y-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0f1f2e] text-[11px] font-semibold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="space-y-4">
            <span className="text-gray-400 font-semibold tracking-widest text-xs uppercase">Insights &amp; Perspectives</span>
            <h1 className="leading-none tracking-tight">
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f1f2e] block"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Forward Thinking
              </span>
              <span 
                className="text-4xl md:text-5xl lg:text-6xl text-gray-400 font-medium italic block"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Digital Perspectives
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 font-normal max-w-md leading-relaxed">
              Explore our latest thinking on SaaS strategy, enterprise engineering, product design, and the future of digital business in India.
            </p>
          </div>
        </div>

        {/* ═══ FEATURED POST ═══ */}
        <Link href={`/blog/${blogPosts[0].slug}`} className="group block mb-16">
          <div className="grid md:grid-cols-[4fr_6fr] items-stretch bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img
                src={blogPosts[0].coverImage}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f1f2e]">
                  Featured
                </span>
                <span className="text-xs text-gray-400 font-medium">
                   {blogPosts[0].readTime} · {blogPosts[0].date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#0f1f2e] group-hover:text-gray-600 transition-colors leading-snug">
                {blogPosts[0].title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-normal line-clamp-3">
                {blogPosts[0].excerpt}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-gray-500 group-hover:text-[#0f1f2e] font-semibold text-xs uppercase tracking-widest transition-all">
                  Read Article <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* ═══ ALL POSTS GRID ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
              <article className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
                <div className="relative h-44 overflow-hidden border-b border-gray-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {post.category}
                  </span>
                  <p className="text-xs text-gray-400 font-medium">
                    {post.readTime} · {post.date}
                  </p>
                  <h3 className="text-base font-bold text-[#0f1f2e] group-hover:text-gray-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-normal">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-gray-400 group-hover:text-[#0f1f2e] font-semibold text-xs uppercase tracking-wide transition-all">
                      Read Article <ArrowUpRight size={14} />
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
