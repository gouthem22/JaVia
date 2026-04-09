"use client";

import React from "react";
import { MessageCircle, Mail, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-slate-100">
            {/* 1. Main Footer Section */}
            <div className="max-w-6xl mx-auto pt-24 pb-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">JaVia</h2>
                        <p className="text-slate-500 text-lg font-medium max-w-sm leading-relaxed">
                            Engineering enterprise-grade foundations for modern digital ecosystems.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://wa.me/919788995924" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                                <MessageCircle size={18} />
                            </a>
                            <a href="mailto:jayaprakash.5388@gmail.com" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                                <Mail size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Solutions</h4>
                        <ul className="space-y-4">
                            <li><a href="#products" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">Flagship Products</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">Our Services</a></li>
                            <li><a href="#success" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">Case Studies</a></li>
                            <li><a href="#blog" className="text-slate-500 hover:text-slate-900 transition-colors font-medium">Insights</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Connect</h4>
                        <div className="space-y-4">
                            <p className="text-slate-500 font-medium">
                                Trichy, Tamil Nadu<br />
                                India
                            </p>
                            <a href="tel:+919788995924" className="block text-slate-900 font-bold hover:underline">+91 97889 95924</a>
                            <a href="mailto:jayaprakash.5388@gmail.com" className="block text-slate-500 font-medium hover:text-slate-900 transition-colors">jayaprakash.5388@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. SEO Tag Clouds Section */}
            <div className="w-full border-t border-b border-gray-100 py-10 px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Column 1 */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                            Our Services
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Website Design & Development",
                                "SaaS Product Development", 
                                "Mobile App Development",
                                "UI/UX Design",
                                "Digital Consulting",
                                "WhatsApp Ordering System",
                                "CMS Integration",
                                "Enterprise Web Platforms",
                                "SEO Optimization",
                                "Figma to Development"
                            ].map(tag => (
                                <span 
                                    key={tag}
                                    className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1 cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                            Trending Topics
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "SaaS Development India",
                                "Enterprise Web Design",
                                "React Next.js Agency",
                                "Startup MVP Development",
                                "Indian SaaS Ecosystem",
                                "Mobile App India",
                                "WhatsApp Business Integration",
                                "Digital Products Tamil Nadu",
                                "B2B Web Platforms",
                                "Grooming App Development",
                                "College Community Platform",
                                "Retail Web Solutions"
                            ].map(tag => (
                                <span 
                                    key={tag}
                                    className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1 cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Bar & SEO Tagline */}
            <div className="max-w-6xl mx-auto py-12 px-4">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
                        <p className="text-slate-400 text-sm">
                            © 2026 JaVia. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm transition-colors font-medium">Privacy Policy</a>
                            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm transition-colors font-medium">Terms of Service</a>
                        </div>
                    </div>
                    
                    {/* SEO Tagline */}
                    <p className="text-xs text-gray-400 text-center mt-2">
                        © 2026 JaVia Ventures · 
                        <a href="https://javia.studio" className="hover:text-slate-900 transition-colors mx-1">
                            javia.studio
                        </a> 
                        · Enterprise Web & SaaS Development, India
                    </p>
                </div>
            </div>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "JaVia Ventures",
                    "url": "https://javia.studio",
                    "logo": "https://javia.studio/logo.png",
                    "sameAs": [
                        "https://www.linkedin.com/company/javia-ventures",
                        "https://instagram.com/javia.studio"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Tamil"]
                    },
                    "areaServed": "IN",
                    "description": "JaVia Ventures builds scalable digital products and enterprise-grade web platforms for Indian businesses."
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "JaVia Ventures",
                    "url": "https://javia.studio",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://javia.studio/?s={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    }
                    })
                }}
            />
        </footer>
    );
}
