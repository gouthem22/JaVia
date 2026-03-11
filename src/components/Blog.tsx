"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

const displayedPosts = blogPosts.slice(0, 3);

export default function Blog() {
    return (
        <section id="blog" className="w-full py-24 md:py-32 px-4 bg-[#faf9f7] border-b border-stone-200/60">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-amber-600/70 font-bold tracking-widest uppercase text-sm">Insights</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                            Forward Thinking <br />
                            <span className="italic">Digital Perspectives</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all hover:-translate-y-1"
                    >
                        View All Articles
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayedPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="group cursor-pointer"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 bg-stone-100">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-stone-400 text-xs font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                    <span>{post.date}</span>
                                </div>
                                <Link href={`/blog/${post.slug}`}>
                                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-amber-700 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all"
                                    >
                                        Read Article <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
