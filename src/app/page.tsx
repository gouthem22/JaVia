"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import DeviceMockup from "@/components/DeviceMockup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const jaypleRef = useRef<HTMLDivElement>(null);
  const genfessRef = useRef<HTMLDivElement>(null);
  const jayplePortfolioRef = useRef<HTMLDivElement>(null);
  const genfessPortfolioRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const fruithouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial hidden state
    gsap.set([jaypleRef.current, genfessRef.current, jayplePortfolioRef.current, genfessPortfolioRef.current, successRef.current, fruithouseRef.current], { opacity: 0, y: 40 });

    // Jayple Reveal
    gsap.to(jaypleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: jaypleRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Genfess Reveal
    gsap.to(genfessRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: genfessRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Jayple Portfolio Reveal
    gsap.to(jayplePortfolioRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#jayple-portfolio",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Genfess Portfolio Reveal
    gsap.to(genfessPortfolioRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#genfess-portfolio",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Case Study Reveal
    gsap.to(successRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#success",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Fruit House Reveal
    gsap.to(fruithouseRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#fruithouse",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <DeviceMockup />
      {/* SECTION 1 — HERO */}
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-dot-black gradient-mask -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-slate-900">
            JaVia — Powering <span className="underline decoration-slate-300">Enterprise</span> Innovation
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We build scalable digital products and enterprise-grade web platforms that drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#products"
              className="px-8 py-4 bg-slate-900 hover:bg-black text-white font-semibold rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              Explore Our Products
            </Link>
            <Link
              href="#success"
              className="px-8 py-4 border border-slate-200 hover:border-slate-300 bg-white text-slate-900 font-semibold rounded-full transition-all duration-300 hover:bg-slate-50"
            >
              View Client Success
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FLAGSHIP PRODUCTS */}
      <section id="products" className="w-full py-24 md:py-32 px-4 bg-secondary-bg">
        <div className="max-w-6xl mx-auto space-y-[40vh]">
          {/* Jayple */}
          <div ref={jaypleRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Jayple</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                A grooming appointment booking platform designed for salons, barbershops, and personal care professionals. Jayple helps grooming businesses manage appointments digitally, reduce walk-in confusion, and deliver a smooth booking experience.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Core Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Appointment Booking", "Time-Slot Management", "Business Profiles", "Scheduling Workflow"].map((f) => (
                      <span key={f} className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Built For</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Hair salons · Barbershops · Grooming service providers</p>
                </div>
                <p className="text-xs text-slate-400 italic">An independent product owned and developed under JaVia Studio.</p>
              </div>
            </div>
            {/* Removed placeholder card */}
            <div className="hidden md:block" />
          </div>

          {/* Genfess */}
          <div id="genfess" ref={genfessRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 hidden md:block" />
            {/* Removed placeholder card */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Genfess</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                A private, anonymous campus interaction platform built for college communities. Genfess allows students to express thoughts, confessions, and opinions anonymously within a controlled college environment.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Core Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Anonymous Posting", "Campus-Based Grouping", "Moderation System", "Secure Student Access"].map((f) => (
                      <span key={f} className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Built For</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">College students · Campus communities · Student engagement initiatives</p>
                </div>
                <p className="text-xs text-slate-400 italic">An independent product incubated and managed by JaVia Studio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3A — JAYPLE PORTFOLIO */}
      <section id="jayple-portfolio" className="w-full py-24 md:py-32 px-4 bg-white">
        <div ref={jayplePortfolioRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Product Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Jayple</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The Jayple launcher website serves as the digital storefront for the grooming appointment platform — showcasing features, service highlights, and providing a seamless entry point for salon businesses and customers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-900 flex-shrink-0" size={18} />
                <span className="text-slate-600 text-sm">Appointment booking showcase & feature overview</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-900 flex-shrink-0" size={18} />
                <span className="text-slate-600 text-sm">Salon business onboarding & profile creation flow</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-900 flex-shrink-0" size={18} />
                <span className="text-slate-600 text-sm">Mobile-first responsive design for customer access</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">Grooming appointment booking platform — Developed by JaVia Studio</p>
            <div className="pt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-slate-900/20 group">
                Explore Jayple Launcher <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* SECTION 3B — GENFESS PORTFOLIO */}
      <section id="genfess-portfolio" className="w-full py-24 md:py-32 px-4 bg-secondary-bg">
        <div ref={genfessPortfolioRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block" />
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Product Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Genfess</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The Genfess launcher website introduces the anonymous campus platform to college communities — highlighting privacy features, community moderation, and secure student access to drive campus adoption.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-900 flex-shrink-0" size={18} />
                <span className="text-slate-600 text-sm">Anonymous expression & campus community showcase</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-900 flex-shrink-0" size={18} />
                <span className="text-slate-600 text-sm">Privacy-first architecture & moderation overview</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-slate-900 flex-shrink-0" size={18} />
                <span className="text-slate-600 text-sm">College onboarding flow & student verification</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">Anonymous campus interaction platform — Incubated by JaVia Studio</p>
            <div className="pt-4">
              <a href="https://t-jayaprakash.github.io/LastBench/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-slate-900/20 group">
                Discover Genfess Live <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CLIENT SUCCESS STORY */}
      <section id="success" className="w-full py-24 md:py-32 px-4 bg-secondary-bg border-y border-slate-100">
        <div ref={successRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Case Study</span>
              <h2 className="text-4xl md:text-5xl font-bold italic text-slate-900">Racksmadurai</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-slate-900" size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Industry: Retail Infrastructure</h4>
                  <p className="text-slate-600">Need for structured digital presence and product showcase to manage complex catalogs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-slate-900" size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Solution</h4>
                  <p className="text-slate-600">Custom website design and engineering to build their official digital presence.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-slate-900" size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Result</h4>
                  <p className="text-slate-600">Improved brand visibility and structured online catalog for Racksmadurai.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Removed Success Story placeholder */}
          <div className="hidden md:block" />
        </div>
      </section>

      {/* SECTION 4B — FRUIT HOUSE CASE STUDY */}
      <section id="fruithouse" className="w-full py-24 md:py-32 px-4 bg-white border-y border-slate-100">
        <div ref={fruithouseRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block" />
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">Case Study</span>
              <h2 className="text-4xl md:text-5xl font-bold italic text-slate-900">Fruit House</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-slate-900" size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Industry: Food & Beverage</h4>
                  <p className="text-slate-600">A popular, trendy spot specializing in fresh, healthy, and nutrient-rich food including fruit bowls, salads, and cold-pressed juices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-slate-900" size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Solution</h4>
                  <p className="text-slate-600">Custom mobile-first website with online menu showcase, order integration, and brand presence to drive foot traffic and online orders.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-slate-900" size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Result</h4>
                  <p className="text-slate-600">Enhanced brand visibility, seamless menu browsing experience, and increased customer engagement through WhatsApp ordering integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ABOUT + FINAL CTA */}
      <section id="about" className="w-full py-32 px-4 text-center bg-white">
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
            <button className="px-12 py-5 bg-slate-900 text-white font-bold rounded-full text-lg hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 px-4 border-t border-slate-100 text-center bg-white">
        <p className="text-slate-400 text-sm">© 2026 JaVia. All rights reserved. Enterprise-grade foundations.</p>
      </footer>
    </main>
  );
}
