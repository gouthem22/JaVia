"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

const displayedPosts = blogPosts.slice(0, 3);

export default function Blog() {
    return (
        <section id="blog" className="w-full bg-white border-t border-gray-100 py-20 md:py-28 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:mb-24 space-y-4 max-w-2xl text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <span className="text-gray-400 font-medium tracking-[0.2em] uppercase text-[10px]">Insights</span>
                        <h2 className="text-4xl font-bold text-[#0f1f2e] tracking-tight">
                            Forward Thinking <br />
                            <span className="text-gray-400 font-normal italic">Digital Perspectives</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="px-4 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-full hover:border-orange-400 hover:text-orange-500 transition-all mb-2"
                    >
                        View All Articles
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {displayedPosts.map((post) => (
                        <div
                            key={post.slug}
                            className="border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-44 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="bg-gray-50 rounded-lg p-2 w-fit">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                        {post.category}
                                    </span>
                                </div>

                                <p className="text-[11px] text-gray-400 mt-4 flex items-center gap-1.5 font-medium uppercase tracking-wider">
                                    <Clock size={12} className="stroke-[1.5px]" /> {post.readTime} · {post.date}
                                </p>

                                <h3 className="text-lg font-bold text-[#0f1f2e] mt-2 leading-snug group-hover:text-orange-500 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed mt-2 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="mt-8 border border-gray-200 rounded-full px-3 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-orange-500 hover:border-orange-300 w-fit flex items-center gap-1.5 transition-all"
                                >
                                    Read Article <ArrowUpRight size={12} strokeWidth={2.5} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
