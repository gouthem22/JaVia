import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Racksmadurai",
        role: "Retail Infrastructure",
        text: "JaVia transformed our digital presence. Their engineering team delivered a platform that perfectly showcases our complex inventory. Highly recommended for enterprise-grade solutions.",
        rating: 5,
        date: "2 months ago"
    },
    {
        name: "Fruit House",
        role: "F&B Business Owner",
        text: "The mobile-first approach JaVia took for our menu ordering system has significantly increased our online engagement. The integration with WhatsApp is seamless.",
        rating: 5,
        date: "1 month ago"
    },
    {
        name: "VKS Decoration",
        role: "Event Services",
        text: "Efficient, professional, and creative. Our new website has helped us reach a much wider audience in Trichy. The 24-hour delivery showcase is a hit.",
        rating: 5,
        date: "3 weeks ago"
    },
    {
        name: "Enterprise Client",
        role: "Tech Lead",
        text: "JaVia's commitment to performance and security is evident in every module they build. They are our go-to partner for scalable ecosystems.",
        rating: 5,
        date: "4 months ago"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-24 md:py-32 px-4 bg-secondary-bg">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Trusted by Forward-Thinking <span className="italic">Businesses</span>
                    </h2>
                    <div className="flex items-center justify-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" />
                        ))}
                        <span className="ml-2 text-slate-900 font-bold">4.9/5 on Google Reviews</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                        >
                            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" />

                            <div className="flex items-center gap-1 text-amber-400 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold border border-slate-200">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 leading-none mb-1">{review.name}</h4>
                                        <span className="text-xs text-slate-500 uppercase tracking-widest">{review.role}</span>
                                    </div>
                                </div>
                                <span className="text-xs text-slate-400">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
