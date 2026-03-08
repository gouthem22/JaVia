import React from "react";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

const posts = [
    {
        title: "Scaling Enterprise Platforms: A Guide to Modern Architecture",
        excerpt: "Discover the architectural patterns that allow modern enterprises to scale their digital products to millions of users.",
        category: "Engineering",
        readTime: "8 min read",
        date: "March 5, 2026",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Future of AI in Digital Transformation",
        excerpt: "How artificial intelligence is reshaping the way businesses approach product development and customer experience.",
        category: "Innovation",
        readTime: "6 min read",
        date: "Feb 28, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "User-Centric Design for Complex SaaS ecosystems",
        excerpt: "Balancing power and simplicity in the design of enterprise software to improve productivity and adoption.",
        category: "Design",
        readTime: "5 min read",
        date: "Feb 15, 2026",
        image: "/blog3.png"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="w-full py-24 md:py-32 px-4 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Insights</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Forward Thinking <br />
                            <span className="italic">Digital Perspectives</span>
                        </h2>
                    </div>
                    <a
                        href={`https://wa.me/919788995924?text=${encodeURIComponent("Hi JaVia! I've been reading your blog and would love to see more of your insights or discuss some of the topics mentioned.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-black transition-all hover:-translate-y-1"
                    >
                        View All Articles
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer"
                        >
                            <a
                                href={`https://wa.me/919788995924?text=${encodeURIComponent(`Hi JaVia! I just read the preview of "${post.title}" and would like to discuss it further.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 bg-slate-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                    <span>{post.date}</span>
                                </div>
                                <a
                                    href={`https://wa.me/919788995924?text=${encodeURIComponent(`Hi JaVia! I'm interested in the topic: "${post.title}".`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                </a>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2">
                                    <a
                                        href={`https://wa.me/919788995924?text=${encodeURIComponent(`Hi JaVia! I'd like to read the full article: "${post.title}".`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-slate-900 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all"
                                    >
                                        Read Article <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
