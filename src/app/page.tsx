"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import DeviceMockup from "@/components/DeviceMockup";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type ActiveItem = {
  title: string;
  description: string;
  tags: string[];
};

export default function Home() {
  const jaypleRef = useRef<HTMLDivElement>(null);
  const genfessRef = useRef<HTMLDivElement>(null);
  const jayplePortfolioRef = useRef<HTMLDivElement>(null);
  const genfessPortfolioRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const fruithouseRef = useRef<HTMLDivElement>(null);
  const vksRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const [activeItem, setActiveItem] = React.useState<ActiveItem | null>(null);

  // Slow down the video for ambient cinematic feel
  const handleVideoReady = useCallback(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.4;
    }
  }, []);

  useEffect(() => {
    // Set playback rate once mounted
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.4;
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial hidden state
    const revealRefs = [
      jaypleRef.current,
      genfessRef.current,
      jayplePortfolioRef.current,
      genfessPortfolioRef.current,
      successRef.current,
      fruithouseRef.current,
      vksRef.current,
      servicesRef.current,
      testimonialsRef.current,
      blogRef.current,
      faqsRef.current
    ];

    gsap.set(revealRefs, { opacity: 0, y: 40 });

    // Helper function for reveal animations
    const createReveal = (ref: React.RefObject<HTMLDivElement | null>, triggerId?: string) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerId || ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    };

    createReveal(jaypleRef);
    createReveal(genfessRef);
    createReveal(jayplePortfolioRef, "#jayple-portfolio");
    createReveal(genfessPortfolioRef, "#genfess-portfolio");
    createReveal(successRef, "#success");
    createReveal(fruithouseRef, "#fruithouse");
    createReveal(vksRef, "#vks");
    createReveal(servicesRef, "#services");
    createReveal(testimonialsRef, "#testimonials");
    createReveal(blogRef, "#blog");
    createReveal(faqsRef, "#faqs");

  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <DeviceMockup activeItem={activeItem} />

      {/* SECTION 1 — HERO */}
      <section id="home" className="relative w-full min-h-screen flex items-center md:items-end px-6 md:px-12 lg:px-16 xl:px-24 pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-12 md:pb-16 lg:pb-20 xl:pb-24 overflow-hidden bg-black">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={handleVideoReady}
          onPlay={handleVideoReady}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0, transform: "scale(1.1)", filter: "blur(1px) brightness(0.4) saturate(0.8)" }}
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)" }} />

        <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-12" style={{ zIndex: 2 }}>
          <div className="space-y-8 max-w-2xl text-center md:text-left pb-8 md:pb-12 lg:pb-16">
            <h1
              className="font-normal uppercase tracking-tighter"
              style={{
                fontFamily: "var(--font-bebas)",
                color: "#9ca3af",
                fontSize: "clamp(2.5rem, calc(2rem + 8vw), 11rem)",
                lineHeight: "0.85",
                textWrap: "balance" as any
              }}
            >
              JaVia — Powering<br />
              <span style={{ color: "#ffffff" }}>Enterprise</span><br />
              Innovation
            </h1>
            <p className="text-base md:text-xl text-white/70 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              We build scalable digital products and enterprise-grade web platforms that drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 pt-4">
              <Link
                href="#products"
                className="btn-premium border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black w-full sm:w-auto"
              >
                View Projects
              </Link>
              <Link
                href="#services"
                className="btn-premium border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black w-full sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-4 text-right">
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase">
              Scroll Down
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FLAGSHIP PRODUCTS */}
      <section id="products" className="w-full py-10 md:py-48 px-4 bg-secondary-bg">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-[45vh]">
          {/* Jayple */}
          <div id="jayple" ref={jaypleRef} className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="space-y-8">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Flagship Product</span>
              <div className="block md:hidden w-full h-52 rounded-xl overflow-hidden bg-[#0f1f2e] p-4 mt-4">
                {/* Fake app header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-xs font-bold tracking-wide">
                    Jayple
                  </span>
                  <div className="w-6 h-6 rounded-full bg-orange-500" />
                </div>
                {/* Fake booking card */}
                <div className="bg-white/10 rounded-lg p-3 mb-2">
                  <div className="w-24 h-2 bg-white/40 rounded mb-2" />
                  <div className="w-16 h-2 bg-white/20 rounded" />
                </div>
                {/* Fake time slots */}
                <div className="flex gap-2 mb-3">
                  {["10:00", "11:30", "2:00", "4:30"].map(t => (
                    <div key={t} 
                         className="bg-orange-500/80 rounded-md px-2 py-1">
                      <span className="text-white text-[10px]">{t}</span>
                    </div>
                  ))}
                </div>
                {/* Fake CTA */}
                <div className="w-full bg-orange-500 rounded-lg py-2 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    Book Appointment
                  </span>
                </div>
              </div>
              <h2 className="text-slate-900 leading-tight">Jayple</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                A grooming appointment booking platform designed for salons, barbershops, and personal care professionals. Jayple helps grooming businesses manage appointments digitally, reduce walk-in confusion, and deliver a smooth booking experience.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Core Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Appointment Booking", "Time-Slot Management", "Business Profiles", "Scheduling Workflow"].map((f) => (
                      <span key={f} className="px-4 py-2 bg-white border border-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">{f}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Built For</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-semibold">Hair salons · Barbershops · Grooming service providers</p>
                </div>
                <p className="text-[10px] text-slate-400 italic">An independent product owned and developed under JaVia Studio.</p>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>

          {/* Genfess */}
          <div id="genfess" ref={genfessRef} className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-2 md:order-1 hidden md:block" />
            <div className="order-1 md:order-2 space-y-8">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Incubated Product</span>
              <div className="block md:hidden w-full h-52 rounded-xl overflow-hidden bg-[#1a1a2e] p-4 mt-4">
                {/* Fake app header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-xs font-bold tracking-wide">
                    Genfess
                  </span>
                  <div className="w-6 h-6 rounded-full bg-purple-500" />
                </div>
                {/* Fake anonymous post cards */}
                {[
                  { w: "w-32", text: "Anonymous confession #4821" },
                  { w: "w-24", text: "Campus poll · 142 votes" },
                ].map((item, i) => (
                  <div key={i} 
                       className="bg-white/10 rounded-lg p-3 mb-2 flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-400/50 flex-shrink-0" />
                    <div>
                      <div className={`${item.w} h-2 bg-white/40 rounded mb-1`} />
                      <span className="text-white/40 text-[10px]">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Fake input bar */}
                <div className="w-full bg-white/10 rounded-lg px-3 py-2 flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-white/20 rounded" />
                  <div className="w-5 h-5 rounded-full bg-purple-500" />
                </div>
              </div>
              <h2 className="text-slate-900 leading-tight">Genfess</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                A private, anonymous campus interaction platform built for college communities. Genfess allows students to express thoughts, confessions, and opinions anonymously within a controlled college environment.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Core Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Anonymous Posting", "Campus-Based Grouping", "Moderation System", "Secure Student Access"].map((f) => (
                      <span key={f} className="px-4 py-2 bg-white border border-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">{f}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Built For</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-semibold">College students · Campus communities · Student engagement initiatives</p>
                </div>
                <p className="text-[10px] text-slate-400 italic">An independent product incubated and managed by JaVia Studio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION — SERVICES */}
      <div ref={servicesRef}>
        <Services setActiveItem={setActiveItem} />
      </div>

      {/* NEW SECTION — TESTIMONIALS */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      {/* NEW SECTION — BLOG */}
      <div ref={blogRef}>
        <Blog />
      </div>

      {/* SECTION 3A — JAYPLE PORTFOLIO */}
      <section 
        id="jayple-portfolio" 
        className="w-full py-10 md:py-48 px-4 bg-white"
        onMouseEnter={() => setActiveItem({
          title: "Jayple Launcher",
          description: "Digital storefront for the grooming appointment platform.",
          tags: ["Booking System", "SaaS", "Responsive"]
        })}
        onMouseLeave={() => setActiveItem(null)}
      >
        <div ref={jayplePortfolioRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Product Portfolio</span>
              <div className="block md:hidden w-full h-52 rounded-xl overflow-hidden bg-[#0f1f2e] p-4 mt-4">
                {/* Fake app header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-xs font-bold tracking-wide">
                    Jayple
                  </span>
                  <div className="w-6 h-6 rounded-full bg-orange-500" />
                </div>
                {/* Fake booking card */}
                <div className="bg-white/10 rounded-lg p-3 mb-2">
                  <div className="w-24 h-2 bg-white/40 rounded mb-2" />
                  <div className="w-16 h-2 bg-white/20 rounded" />
                </div>
                {/* Fake time slots */}
                <div className="flex gap-2 mb-3">
                  {["10:00", "11:30", "2:00", "4:30"].map(t => (
                    <div key={t} 
                         className="bg-orange-500/80 rounded-md px-2 py-1">
                      <span className="text-white text-[10px]">{t}</span>
                    </div>
                  ))}
                </div>
                {/* Fake CTA */}
                <div className="w-full bg-orange-500 rounded-lg py-2 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    Book Appointment
                  </span>
                </div>
              </div>
              <h2 className="text-slate-900 leading-tight">Jayple Launcher</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The Jayple launcher website serves as the digital storefront for the grooming appointment platform — showcasing features, service highlights, and providing a seamless entry point for salon businesses and customers.
            </p>
            <div className="space-y-4">
              {[
                "Appointment booking showcase & feature overview",
                "Salon business onboarding & profile creation flow",
                "Mobile-first responsive design for customer access"
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={14} />
                  </div>
                  <span className="text-slate-600 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="btn-premium bg-slate-900 text-white hover:bg-black group shadow-2xl shadow-slate-900/20">
                Explore Jayple Launcher <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* SECTION 3B — GENFESS PORTFOLIO */}
      <section 
        id="genfess-portfolio" 
        className="w-full py-10 md:py-48 px-4 bg-secondary-bg"
        onMouseEnter={() => setActiveItem({
          title: "Genfess Platform",
          description: "Anonymous campus interaction platform for college communities.",
          tags: ["Anonymity", "Community", "Privacy"]
        })}
        onMouseLeave={() => setActiveItem(null)}
      >
        <div ref={genfessPortfolioRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="hidden md:block" />
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Product Portfolio</span>
              <div className="block md:hidden w-full overflow-hidden rounded-xl mt-4 mb-6">
                <img
                  src="/GenfessLancher.png"
                  alt="Genfess Platform mobile screenshot"
                  className="w-full h-48 sm:h-56 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h2 className="text-slate-900 leading-tight">Genfess Platform</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The Genfess launcher website introduces the anonymous campus platform to college communities — highlighting privacy features, community moderation, and secure student access to drive campus adoption.
            </p>
            <div className="space-y-4">
              {[
                "Anonymous expression & campus community showcase",
                "Privacy-first architecture & moderation overview",
                "College onboarding flow & student verification"
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={14} />
                  </div>
                  <span className="text-slate-600 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a href="https://t-jayaprakash.github.io/LastBench/" target="_blank" rel="noopener noreferrer" className="btn-premium bg-slate-900 text-white hover:bg-black group shadow-2xl shadow-slate-900/20">
                Discover Genfess Live <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CLIENT SUCCESS STORY (Racksmadurai) */}
      <section 
        id="success" 
        className="w-full py-10 md:py-48 px-4 bg-white border-y border-slate-100"
        onMouseEnter={() => setActiveItem({
          title: "Racksmadurai",
          description: "Retail infrastructure & complex inventory management.",
          tags: ["Retail", "Inventory", "Catalog"]
        })}
        onMouseLeave={() => setActiveItem(null)}
      >
        <div ref={successRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Case Study</span>
              <div className="block md:hidden w-full overflow-hidden rounded-xl mt-4 mb-6">
                <img
                  src="/racks.png"
                  alt="Racksmadurai mobile screenshot"
                  className="w-full h-48 sm:h-56 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h2 className="italic text-slate-900 leading-tight">Racksmadurai</h2>
            </div>

            <div className="space-y-8">
              {[
                { label: "Industry: Retail Infrastructure", desc: "Need for structured digital presence and product showcase to manage complex catalogs." },
                { label: "Solution", desc: "Custom website design and engineering to build their official digital presence." },
                { label: "Result", desc: "Improved brand visibility and structured online catalog for Racksmadurai." }
              ].map((item, id) => (
                <div key={id} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a href="https://www.racksmadurai.com/" target="_blank" rel="noopener noreferrer" className="btn-premium bg-slate-900 text-white hover:bg-black group shadow-2xl shadow-slate-900/20">
                Explore Now <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* SECTION 4B — FRUIT HOUSE CASE STUDY */}
      <section 
        id="fruithouse" 
        className="w-full py-10 md:py-48 px-4 bg-secondary-bg"
        onMouseEnter={() => setActiveItem({
          title: "Fruit House",
          description: "Fresh, healthy food with seamless WhatsApp ordering.",
          tags: ["F&B", "WhatsApp", "Mobile-First"]
        })}
        onMouseLeave={() => setActiveItem(null)}
      >
        <div ref={fruithouseRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="hidden md:block" />
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Case Study</span>
              <div className="block md:hidden w-full overflow-hidden rounded-xl mt-4 mb-6">
                <img
                  src="/fruithouse.png"
                  alt="Fruit House mobile screenshot"
                  className="w-full h-48 sm:h-56 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h2 className="italic text-slate-900 leading-tight">Fruit House</h2>
            </div>

            <div className="space-y-8">
              {[
                { label: "Industry: Food & Beverage", desc: "A popular, trendy spot specializing in fresh, healthy, and nutrient-rich food including fruit bowls, salads, and cold-pressed juices." },
                { label: "Solution", desc: "Custom mobile-first website with online menu showcase, order integration, and brand presence to drive foot traffic and online orders." },
                { label: "Result", desc: "Enhanced brand visibility, seamless menu browsing experience, and increased customer engagement through WhatsApp ordering integration." }
              ].map((item, id) => (
                <div key={id} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a href="https://jana1234567894.github.io/fruit_house/" target="_blank" rel="noopener noreferrer" className="btn-premium bg-slate-900 text-white hover:bg-black group shadow-2xl shadow-slate-900/20">
                Explore Now <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4C — VKS DECORATION CASE STUDY */}
      <section 
        id="vks" 
        className="w-full py-10 md:py-48 px-4 bg-white border-y border-slate-100"
        onMouseEnter={() => setActiveItem({
          title: "VKS Decoration",
          description: "Wedding & floral decor with local digital ordering.",
          tags: ["Events", "Floral", "Local"]
        })}
        onMouseLeave={() => setActiveItem(null)}
      >
        <div ref={vksRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">Case Study</span>
              <div className="block md:hidden w-full overflow-hidden rounded-xl mt-4 mb-6">
                <img
                  src="/vks.png"
                  alt="VKS Decoration mobile screenshot"
                  className="w-full h-48 sm:h-56 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h2 className="italic text-slate-900 leading-tight">VKS Decoration</h2>
            </div>

            <div className="space-y-8">
              {[
                { label: "Industry: Wedding & Floral Decor", desc: "VKS Flower Shop & Wedding Decor in Trichy specializes in traditional and contemporary wedding garlands, custom bouquets, and full event floral decoration services." },
                { label: "Solution", desc: "Custom website showcasing specialized garlands, weightless designs, engagement sets, and 24-hour delivery — enabling seamless digital ordering and brand discovery." },
                { label: "Result", desc: "Enhanced brand visibility across Trichy, streamlined customer ordering for weddings and events, and increased reach through their digital storefront." }
              ].map((item, id) => (
                <div key={id} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.label}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a href="https://www.vksweddingevents.in/" target="_blank" rel="noopener noreferrer" className="btn-premium bg-slate-900 text-white hover:bg-black group shadow-2xl shadow-slate-900/20">
                Explore Now <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* NEW SECTION — FAQs */}
      <div ref={faqsRef}>
        <FAQs />
      </div>

      {/* SECTION 5 — ABOUT + FINAL CTA */}
      <section id="about" className="w-full py-10 md:py-32 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium">
              Our Commitment
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Engineering Scalable Ecosystems</h2>
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4">
                <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Vision</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">To engineer scalable digital ecosystems for modern enterprises.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Mission</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">To combine product innovation with enterprise-grade engineering.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs">Commitment</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">Security, scalability, performance, and long-term partnerships.</p>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <a
              href="https://wa.me/919788995924?text=Hi%20JaVia!%20%F0%9F%9A%80%20I'm%20looking%20to%20build%20a%20high-performance%20digital%20product%20and%20would%20love%20to%20discuss%20how%20your%20engineering%20team%20can%20bring%20my%20vision%20to%20life.%20Let's%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-slate-900 text-white font-bold rounded-full text-lg hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group"
            >
              <MessageCircle className="text-green-400 group-hover:scale-110 transition-transform" size={24} />
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
