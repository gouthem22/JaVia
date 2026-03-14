"use client";

import React from "react";
import { Star, Quote, ExternalLink } from "lucide-react";

const featuredReviews = [
    {
        name: "RS Gouthem",
        role: "Software Developer",
        text: "I had a great experience with Javia Ventures. It’s a professional software development company with a positive and productive work environment. ",
        rating: 5,
        date: "Recently",
        images: ["/reviews/Gou/img1.png", "/reviews/Gou/img2.png"],
        platform: "Google"
    },
    {
        name: "John Adan J R",
        role: "Client",
        text: "Created a portfolio by Javia Ventures, Very good service. Best website development option in trichy",
        rating: 5,
        date: "Recently",
        images: ["/reviews/john/img.png"],
        platform: "Google"
    },
    {
        name: "Jayaprakash",
        role: "Client",
        text: "Very Good Service, Professional Team, On time Delivery, Really Satisfied 💯😁",
        rating: 5,
        date: "Recently",
        images: ["/reviews/jp/img.png"],
        platform: "Google"
    }
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=04b991333a83f57d&rlz=1C1GCEA_enIN1186IN1186&sxsrf=ANbL-n6c9kFyooSF2qx37fMHEKQuNwibZg:1773030697363&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa25eGEigaK_EX__-WqAnmOlngWb2iDxAdy692EUVAKjZhUYqX5l74L_zSIyxxGG39oyuM3lANRt8-8x6-AlzDyIdpyN&q=Javia+Ventures+Reviews&sa=X&ved=2ahUKEwj4lpGH_pGTAxV2TWcHHQyRAoYQ0bkNegQIMhAH&biw=1280&bih=551&dpr=1.5";

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-10 md:py-32 px-4 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto space-y-10 md:space-y-20">
                {/* Header Section */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Testimonials</span>
                    <h2 className="text-slate-900 leading-tight">
                        What Our <span className="italic">Clients Say</span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto">
                        Trusted by businesses for premium software development and
                        innovative solutions.
                    </p>

                    <div className="flex flex-col items-center gap-3 pt-6">
                        <div className="flex items-center gap-2">
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 md:h-5 opacity-80" />
                            <span className="text-slate-600 font-bold text-sm md:text-base tracking-widest uppercase">Verified Reviews</span>
                        </div>
                    </div>
                </div>

                {/* Featured Reviews Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredReviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
                        >
                            {/* Review Images */}
                            <div className={`grid ${review.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1 p-2`}>
                                {review.images.map((img, i) => (
                                    <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                                        <img
                                            src={img}
                                            alt={`Review by ${review.name}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 pt-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-base">{review.name}</h4>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                                            <span>{review.date}</span>
                                            {review.platform === "Google" && (
                                                <div className="flex items-center gap-1">
                                                    <span>•</span>
                                                    <span>Google</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-0.5 text-amber-400">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={12} fill="currentColor" stroke="none" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                                    {review.text}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-50">
                                    <a
                                        href={GOOGLE_REVIEWS_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        View on Google <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center pt-8">
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium bg-white border border-slate-200 shadow-sm hover:shadow-xl group"
                    >
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-3" />
                        <span className="font-bold text-slate-800 tracking-tight">View All Reviews on Google</span>
                        <ExternalLink size={18} className="ml-3 text-slate-400 group-hover:text-primary transition-colors" />
                    </a>
                </div>
            </div>
        </section>
    );
}
