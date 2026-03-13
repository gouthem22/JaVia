"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ActiveItem } from "@/app/page";

const defaultItems: ActiveItem[] = [
    { 
        title: "Enterprise Web", 
        description: "Scalable foundations built for modern digital ecosystems.", 
        tags: ["React", "Next.js", "Enterprise"] 
    },
    { 
        title: "Mobile First", 
        description: "Native-feel experiences across iOS and Android.", 
        tags: ["React Native", "UI/UX", "Mobile"] 
    },
    { 
        title: "Product Strategy", 
        description: "Data-driven roadmaps to navigate the digital era.", 
        tags: ["Consulting", "MVP", "Strategy"] 
    },
];

interface DeviceMockupProps {
    activeItem: ActiveItem | null;
}

export default function DeviceMockup({ activeItem }: DeviceMockupProps) {
    const phoneRef = useRef<HTMLDivElement>(null);
    const laptopRef = useRef<HTMLDivElement>(null);
    const [cycleIndex, setCycleIndex] = useState(0);

    // Auto-cycle logic for mobile and default state
    useEffect(() => {
        if (!activeItem) {
            const interval = setInterval(() => {
                setCycleIndex((prev) => (prev + 1) % defaultItems.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [activeItem]);

    const displayItem = activeItem || defaultItems[cycleIndex];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // ── Screen activation helpers ──
            const phoneStates = {
                products: ".phone-products-state",
                genfess: ".phone-genfess-state",
            };

            const laptopStates = {
                jayplePortfolio: ".laptop-jayple-portfolio-state",
                genfessPortfolio: ".laptop-genfess-portfolio-state",
                case: ".laptop-case-state",
                fruithouse: ".laptop-fruithouse-state",
                vks: ".laptop-vks-state",
            };

            const activatePhoneScreen = (activeKey: keyof typeof phoneStates) => {
                Object.keys(phoneStates).forEach((key) => {
                    const k = key as keyof typeof phoneStates;
                    gsap.to(phoneStates[k], {
                        opacity: k === activeKey ? 1 : 0,
                        y: k === activeKey ? 0 : 20,
                        duration: 0.3,
                        overwrite: "auto",
                        ease: k === activeKey ? "power2.out" : "power2.in"
                    });
                });
            };

            const activateLaptopScreen = (activeKey: keyof typeof laptopStates) => {
                // If we have an activeItem (hover), we don't switch these states visually
                // as the dynamic screen will overlay them.
                Object.keys(laptopStates).forEach((key) => {
                    const k = key as keyof typeof laptopStates;
                    gsap.to(laptopStates[k], {
                        opacity: k === activeKey ? 1 : 0,
                        y: k === activeKey ? 0 : 20,
                        duration: 0.3,
                        overwrite: "auto",
                        ease: k === activeKey ? "power2.out" : "power2.in"
                    });
                });
            };

            // ── Position values (Responsive) ──
            const getPhoneOffset = () => Math.min(window.innerWidth * 0.28, 450);
            const getLaptopOffset = () => Math.min(window.innerWidth * 0.3, 500);
            const laptopScale = 0.65;

            // ── Master Phone Timeline ──
            const phoneTL = gsap.timeline({
                scrollTrigger: {
                    trigger: "#jayple",
                    start: "top bottom", 
                    endTrigger: "#genfess",
                    end: "bottom 50%",
                    scrub: 0.5,
                    toggleActions: "play none none reverse",
                }
            });

            phoneTL
                // Entry from Home/Hero
                .set(phoneRef.current, { opacity: 0, x: "80vw", scale: 0.8, rotateY: -15 })
                .to(phoneRef.current, {
                    opacity: 1, 
                    x: () => getPhoneOffset(), 
                    scale: 0.9, 
                    rotateY: -4, 
                    rotateX: 1,
                    ease: "power2.out",
                    duration: 1
                })
                // Switch to Genfess
                .to(phoneRef.current, {
                    x: () => -getPhoneOffset(), 
                    rotateY: 4, 
                    scale: 0.9,
                    ease: "power2.inOut",
                    duration: 2 
                }, "+=1")
                // Exit
                .to(phoneRef.current, {
                    opacity: 0, scale: 0.6, x: "-80vw", rotateY: 8,
                    ease: "power2.in",
                    duration: 1
                }, "+=1");

            // Individual Triggers for Screen Swapping
            ScrollTrigger.create({
                trigger: "#jayple",
                start: "top 50%",
                onEnter: () => activatePhoneScreen("products"),
                onLeaveBack: () => activatePhoneScreen("products"),
            });

            ScrollTrigger.create({
                trigger: "#genfess",
                start: "top 50%",
                onEnter: () => activatePhoneScreen("genfess"),
                onLeaveBack: () => activatePhoneScreen("products"),
            });

            // ── Master Laptop Timeline ──
            const laptopTL = gsap.timeline({
                scrollTrigger: {
                    trigger: "#jayple-portfolio",
                    start: "top 50%",
                    endTrigger: "#vks",
                    end: "bottom 20%",
                    scrub: 0.5,
                    toggleActions: "play none none reverse",
                }
            });

            laptopTL
                // Entry
                .set(laptopRef.current, { opacity: 0, scale: 0.5, x: "50vw" })
                .to(laptopRef.current, {
                    opacity: 1, 
                    scale: laptopScale, 
                    x: () => getLaptopOffset(), 
                    rotateY: -4, 
                    rotateX: 1,
                    ease: "power2.out",
                    duration: 1
                })
                // Move to Genfess Portfolio
                .to(laptopRef.current, {
                    x: () => -getLaptopOffset(), 
                    rotateY: 4,
                    ease: "power2.inOut",
                    duration: 1.5
                }, "+=1")
                // Move back to Right for Success
                .to(laptopRef.current, {
                    x: () => getLaptopOffset(), 
                    rotateY: -4,
                    ease: "power2.inOut",
                    duration: 1.5
                }, "+=1")
                // Move back to Left for Fruithouse
                .to(laptopRef.current, {
                    x: () => -getLaptopOffset(), 
                    rotateY: 4,
                    ease: "power2.inOut",
                    duration: 1.5
                }, "+=1")
                // Move back to Right for VKS
                .to(laptopRef.current, {
                    x: () => getLaptopOffset(), 
                    rotateY: -4,
                    ease: "power2.inOut",
                    duration: 1.5
                }, "+=1")
                // Exit
                .to(laptopRef.current, {
                    opacity: 0, scale: 0.55, x: "80vw", rotateY: 0,
                    ease: "power2.inOut",
                    duration: 1
                }, "+=1");

            // Screen Activation Triggers (Lap)
            ScrollTrigger.create({
                trigger: "#jayple-portfolio",
                start: "top 50%",
                onEnter: () => activateLaptopScreen("jayplePortfolio"),
                onLeaveBack: () => activateLaptopScreen("jayplePortfolio"),
            });
            ScrollTrigger.create({
                trigger: "#genfess-portfolio",
                start: "top 50%",
                onEnter: () => activateLaptopScreen("genfessPortfolio"),
                onLeaveBack: () => activateLaptopScreen("jayplePortfolio"),
            });
            ScrollTrigger.create({
                trigger: "#success",
                start: "top 50%",
                onEnter: () => activateLaptopScreen("case"),
                onLeaveBack: () => activateLaptopScreen("genfessPortfolio"),
            });
            ScrollTrigger.create({
                trigger: "#fruithouse",
                start: "top 50%",
                onEnter: () => activateLaptopScreen("fruithouse"),
                onLeaveBack: () => activateLaptopScreen("case"),
            });
            ScrollTrigger.create({
                trigger: "#vks",
                start: "top 50%",
                onEnter: () => activateLaptopScreen("vks"),
                onLeaveBack: () => activateLaptopScreen("fruithouse"),
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="device-wrapper fixed inset-0 flex items-center justify-center pointer-events-none z-[40] perspective-2000 transition-transform duration-700"
             style={{ scale: "clamp(0.4, 65vw / 1200, 1)" }}>
            
            {/* ═══ PHONE DEVICE (Desktop Only) ═══ */}
            <div
                ref={phoneRef}
                style={{ opacity: 0 }}
                className="device hidden md:block absolute w-[320px] h-[660px] bg-white border-[12px] border-slate-900 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] transform-style-3d will-change-transform"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-2xl z-20" />
                <div className="device-screen absolute inset-0 bg-white rounded-[2.2rem] overflow-hidden">
                    {/* PRODUCTS STATE — Jayple */}
                    <div className="screen-state phone-products-state absolute inset-0 p-6 flex flex-col gap-6 opacity-1">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-white rounded-sm" />
                            </div>
                            <div className="h-4 w-20 bg-slate-900/10 rounded-full" />
                        </div>
                        <div className="flex gap-4 h-full">
                            <div className="w-12 bg-slate-50 border border-slate-100 rounded-xl flex flex-col gap-3 p-2">
                                <div className="w-8 h-8 rounded-lg bg-slate-200" />
                                <div className="w-8 h-8 rounded-lg bg-slate-100" />
                                <div className="w-8 h-8 rounded-lg bg-slate-100" />
                            </div>
                            <div className="flex-1 flex flex-col gap-4">
                                <div className="h-32 bg-slate-50 border border-slate-100 rounded-2xl" />
                                <div className="h-20 bg-slate-50 border border-slate-200 rounded-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* GENFESS STATE — Exact Image */}
                    <div className="screen-state phone-genfess-state absolute inset-0 opacity-0 translate-y-5">
                        <img
                            src="/genfess.png"
                            alt="Genfess Mockup"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 rounded-[3rem] shadow-[0_0_40px_rgba(0,0,0,0.05)] animate-pulse-subtle -z-10" />
            </div>

            {/* ═══ LAPTOP DEVICE ═══ */}
            <div
                ref={laptopRef}
                style={{ opacity: 0 }}
                className="device absolute transform-style-3d will-change-transform"
            >
                {/* Laptop Lid / Screen */}
                <div className="relative w-[340px] h-[220px] sm:w-[520px] sm:h-[340px] md:w-[640px] md:h-[400px] bg-white border-[6px] md:border-[8px] border-slate-900 rounded-xl md:rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.12)] overflow-hidden">
                    {/* Camera dot */}
                    <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-400 rounded-full z-20" />
                    
                    {/* Screen content area */}
                    <div className="laptop-screen absolute inset-0 bg-white overflow-hidden">
                        {/* Static/Scroll-based states (Fallback) */}
                        <div className="absolute inset-0 z-0">
                            <div className="screen-state laptop-jayple-portfolio-state absolute inset-0 opacity-1 bg-slate-50 flex items-center justify-center p-8">
                                <div className="text-center space-y-4">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full mx-auto" />
                                    <div className="h-4 w-32 bg-slate-200 rounded mx-auto" />
                                </div>
                            </div>
                            <div className="screen-state laptop-genfess-portfolio-state absolute inset-0 opacity-0 bg-slate-100">
                                <img src="/GenfessLancher.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="screen-state laptop-case-state absolute inset-0 opacity-0">
                                <img src="/racks.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="screen-state laptop-fruithouse-state absolute inset-0 opacity-0">
                                <img src="/fruithouse.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="screen-state laptop-vks-state absolute inset-0 opacity-0">
                                <img src="/vks.png" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* DYNAMIC OVERLAY (Interactive/Auto-cycle) */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={displayItem?.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 bg-white z-10"
                            >
                                {displayItem && (
                                    <img
                                        src={
                                            displayItem.title === "Racksmadurai" ? "/racks.png" :
                                            displayItem.title === "VKS Decoration" ? "/vks.png" :
                                            displayItem.title === "Fruit House" ? "/fruithouse.png" :
                                            displayItem.title === "Genfess Platform" ? "/GenfessLancher.png" :
                                            displayItem.title === "Jayple Launcher" ? "/GenfessLancher.png" :
                                            "/racks.png" // Fallback
                                        }
                                        alt={`${displayItem.title} screenshot`}
                                        className="w-full h-full object-cover object-top"
                                        loading="lazy"
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Laptop Keyboard Base */}
                <div className="relative mx-auto" style={{ width: "110%", marginLeft: "-5%" }}>
                    <div className="h-2 md:h-3 bg-gradient-to-b from-slate-800 to-slate-700 rounded-t-sm" />
                    <div className="h-[10px] md:h-[14px] bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-xl flex items-center justify-center">
                        <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-slate-400/60 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

