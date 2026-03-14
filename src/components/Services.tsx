"use client";

import React from "react";
import {
    Globe,
    LayoutDashboard,
    Smartphone,
    Palette,
    Compass,
    MessageCircle
} from "lucide-react";
import { ActiveItem } from "@/app/page";

const services = [
    {
        title: "Website Design & Development",
        description: "Custom responsive websites — from 5-page business sites to full enterprise web platforms. Includes SEO, CMS integration, and WhatsApp ordering flows.",
        icon: <Globe className="w-[18px] h-[18px] text-slate-900" />,
        features: ["Responsive Design", "SEO Optimization", "CMS Integration", "WhatsApp Checkout"]
    },
    {
        title: "SaaS Product Development",
        description: "End-to-end SaaS platforms built for scale. Auth, dashboards, billing integration, APIs. From MVP to enterprise-grade multi-tenant systems.",
        icon: <LayoutDashboard className="w-[18px] h-[18px] text-slate-900" />,
        features: ["Multi-tenant Systems", "Auth & Dashboards", "Billing Integration", "Scalable APIs"]
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform iOS + Android apps built mobile-first. Custom UI, push notifications, payments, offline support.",
        icon: <Smartphone className="w-[18px] h-[18px] text-slate-900" />,
        features: ["iOS & Android", "Push Notifications", "Payment Gateway", "Offline Sync"]
    },
    {
        title: "UI/UX Design",
        description: "Interface design from wireframes to final Figma handoff. Includes design systems, prototypes, and usability testing for enterprise products.",
        icon: <Palette className="w-[18px] h-[18px] text-slate-900" />,
        features: ["Figma Prototyping", "Design Systems", "Usability Testing", "Wireframe to High-Fi"]
    },
    {
        title: "Digital Consulting",
        description: "Strategy before execution. Digital audits, tech stack reviews, competitor analysis.",
        icon: <Compass className="w-[18px] h-[18px] text-slate-900" />,
        features: ["Tech Stack Review", "Competitor Analysis", "Digital Roadmaps", "Strategic Audits"]
    }
];

interface ServicesProps {
    setActiveItem: (item: ActiveItem | null) => void;
}

export default function Services({ setActiveItem }: ServicesProps) {
    return (
        <section id="services" className="w-full py-10 md:py-32 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 md:mb-24 space-y-4 max-w-2xl text-center md:text-left">
                    <span className="text-slate-400 font-medium tracking-[0.2em] uppercase text-[10px]">What we do</span>
                    <h2 className="text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight">
                        Specialized engineering for <br />
                        <span className="text-slate-400 font-normal italic">high-performance</span> digital products
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                        Comprehensive design and strategy services to help modern enterprises navigate and lead in the digital era.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveItem({
                                title: service.title,
                                description: service.description,
                                tags: service.features.slice(0, 3)
                            })}
                            onMouseLeave={() => setActiveItem(null)}
                            className="p-5 border border-black/[0.08] bg-white rounded-2xl shadow-sm hover:shadow-md hover:border-black/[0.12] transition-all duration-300 flex flex-col items-start min-h-[320px]"
                        >
                            <div className="mb-4 p-2 bg-slate-50 rounded-lg shadow-sm border border-black/[0.03]">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <div className="mt-auto pt-6 w-full space-y-4">
                                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-gray-400 tracking-wide font-medium">
                                    {service.features.map((feature, idx) => (
                                        <React.Fragment key={idx}>
                                            <span>{feature}</span>
                                            {idx < service.features.length - 1 && <span className="text-gray-300">·</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <a
                                    href={`https://wa.me/919788995924?text=${encodeURIComponent(`Hi JaVia! I'm interested in an Enquiry for your ${service.title} services.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[11px] font-semibold text-slate-600 hover:bg-slate-900 hover:text-white transition-all group/btn"
                                >
                                    <MessageCircle size={12} className="text-slate-400 group-hover/btn:text-green-400 transition-colors" />
                                    Enquiry
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
