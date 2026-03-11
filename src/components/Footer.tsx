"use client";

import React from "react";
import { MessageCircle, Mail, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full pt-24 pb-12 px-4 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
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

                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm">
                        © 2026 JaVia. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-400 hover:text-slate-600 text-sm transition-colors font-medium">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-slate-600 text-sm transition-colors font-medium">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
