"use client";

import {
    Globe,
    LayoutDashboard,
    Smartphone,
    Palette,
    Compass,
    ChevronRight,
    MessageCircle,
    ArrowLeft,
    ArrowRight
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

const services: Service[] = [
    {
        title: "Website Design & Development",
        description: "Custom responsive websites — from 5-page business sites to full enterprise web platforms. Includes SEO, CMS integration, and WhatsApp ordering flows.",
        icon: <Globe className="w-8 h-8 text-slate-900" />,
        features: ["Responsive Design", "SEO Optimization", "CMS Integration", "WhatsApp Checkout"]
    },
    {
        title: "SaaS Product Development",
        description: "End-to-end SaaS platforms built for scale. Auth, dashboards, billing integration, APIs. From MVP to enterprise-grade multi-tenant systems.",
        icon: <LayoutDashboard className="w-8 h-8 text-slate-900" />,
        features: ["Multi-tenant Systems", "Auth & Dashboards", "Billing Integration", "Scalable APIs"]
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform iOS + Android apps built mobile-first. Custom UI, push notifications, payments, offline support.",
        icon: <Smartphone className="w-8 h-8 text-slate-900" />,
        features: ["iOS & Android", "Push Notifications", "Payment Gateway", "Offline Sync"]
    },
    {
        title: "UI/UX Design",
        description: "Interface design from wireframes to final Figma handoff. Includes design systems, prototypes, and usability testing for enterprise products.",
        icon: <Palette className="w-8 h-8 text-slate-900" />,
        features: ["Figma Prototyping", "Design Systems", "Usability Testing", "Wireframe to High-Fi"]
    },
    {
        title: "Digital Consulting",
        description: "Strategy before execution. Digital audits, tech stack reviews, competitor analysis, and full digital roadmaps for Indian SMBs and enterprises.",
        icon: <Compass className="w-8 h-8 text-slate-900" />,
        features: ["Tech Stack Review", "Competitor Analysis", "Digital Roadmaps", "Strategic Audits"]
    }
];

export default function Services() {
    return (
        <section id="services" className="w-full py-24 md:py-32 px-4 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4 max-w-3xl">
                        <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Services</span>
                        <h2 className="text-slate-900 leading-tight">
                            Specialized in <br />
                            <span className="italic">High-Performance</span> Solutions
                        </h2>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl">
                            We provide comprehensive engineering and strategic services to help businesses navigate and lead in the digital era.
                        </p>
                    </div>
                    
                    <div className="flex gap-4 pb-2">
                        <button className="services-prev p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="services-next p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors disabled:opacity-50">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto overflow-hidden relative">
                    <style>{`
                        .services-swiper .swiper-wrapper {
                            transition-timing-function: linear !important;
                        }
                        .swiper-slide {
                            height: auto !important;
                            display: flex !important;
                        }
                        .swiper-pagination-bullet {
                            background: #e2e8f0;
                            opacity: 1;
                        }
                        .swiper-pagination-bullet-active {
                            background: #0f172a;
                        }
                    `}</style>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={8000} // Slower, smoother flow
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false
                        }}
                        navigation={{
                            prevEl: ".services-prev",
                            nextEl: ".services-next",
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1280: {
                                slidesPerView: 3,
                            }
                        }}
                        className="services-swiper pb-16"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <div className="p-8 border border-slate-100 bg-secondary-bg rounded-3xl hover:border-slate-300 transition-all duration-300 group flex flex-col w-full h-full">
                                    <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:shadow-md transition-shadow">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-4 !text-lg">{service.title}</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed !text-sm">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                                                <ChevronRight size={14} className="text-slate-300" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={`https://wa.me/919788995924?text=${encodeURIComponent(`Hi JaVia! I'm interested in an Enquiry for your ${service.title} services. Could you provide more details?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-900 font-bold text-sm uppercase tracking-widest flex items-center gap-2 group/btn w-fit pt-6 border-t border-slate-100 group-hover:text-green-600 transition-colors"
                                    >
                                        <MessageCircle size={18} className="text-slate-400 group-hover/btn:text-green-500 transition-colors" />
                                        Enquiry
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
