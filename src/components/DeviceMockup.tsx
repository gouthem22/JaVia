"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DeviceMockup() {
    const phoneRef = useRef<HTMLDivElement>(null);
    const laptopRef = useRef<HTMLDivElement>(null);

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
                const tween = gsap.timeline();
                Object.keys(phoneStates).forEach((key) => {
                    const k = key as keyof typeof phoneStates;
                    if (k === activeKey) {
                        tween.to(phoneStates[k], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0);
                    } else {
                        tween.to(phoneStates[k], { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" }, 0);
                    }
                });
                return tween;
            };

            const activateLaptopScreen = (activeKey: keyof typeof laptopStates) => {
                const tween = gsap.timeline();
                Object.keys(laptopStates).forEach((key) => {
                    const k = key as keyof typeof laptopStates;
                    if (k === activeKey) {
                        tween.to(laptopStates[k], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0);
                    } else {
                        tween.to(laptopStates[k], { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" }, 0);
                    }
                });
                return tween;
            };

            // ── Position values ──
            const phoneRight = 320;
            const phoneLeft = -320;
            const laptopRight = 350;
            const laptopLeft = -350;
            const laptopScale = 0.60;

            // ── Initial states ──
            gsap.set(phoneRef.current, {
                opacity: 0,
                x: 900,
                y: 0,
                scale: 0.85,
                rotateY: -15
            });

            gsap.set(laptopRef.current, {
                opacity: 0,
                scale: 0.5,
                x: 0,
                y: 0,
            });

            activatePhoneScreen("products");
            activateLaptopScreen("jayplePortfolio");

            // PHONE SECTIONS
            gsap.to(phoneRef.current, {
                x: phoneRight,
                rotateY: -4,
                rotateX: 1,
                scale: 0.9,
                opacity: 1,
                overwrite: "auto",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#jayple",
                    start: "top 40%",
                    end: "top 10%",
                    scrub: 1.0,
                    invalidateOnRefresh: true,
                }
            });

            gsap.fromTo(phoneRef.current, {
                x: phoneRight,
                rotateY: -4,
                rotateX: 1,
                scale: 0.9,
                opacity: 1,
            }, {
                x: phoneLeft,
                rotateY: 4,
                rotateX: 1,
                scale: 0.9,
                overwrite: "auto",
                immediateRender: false,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#genfess",
                    start: "top 90%",
                    end: "top 30%",
                    scrub: 1.0,
                    invalidateOnRefresh: true,
                }
            });

            ScrollTrigger.create({
                trigger: "#genfess",
                start: "top 50%",
                onEnter: () => activatePhoneScreen("genfess"),
                onLeaveBack: () => activatePhoneScreen("products"),
                invalidateOnRefresh: true,
            });

            gsap.fromTo(phoneRef.current, {
                opacity: 1,
                scale: 0.9,
                x: phoneLeft,
                rotateY: 4,
            }, {
                opacity: 0,
                scale: 0.6,
                x: -800,
                rotateY: 8,
                overwrite: "auto",
                immediateRender: false,
                ease: "power2.in",
                scrollTrigger: {
                    trigger: "#genfess",
                    start: "bottom 90%",
                    end: "bottom 50%",
                    scrub: 0.4,
                    invalidateOnRefresh: true,
                }
            });

            // LAPTOP SECTIONS
            gsap.to(laptopRef.current, {
                opacity: 1,
                scale: laptopScale,
                x: laptopRight,
                rotateY: -4,
                rotateX: 1,
                overwrite: "auto",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#jayple-portfolio",
                    start: "top 40%",
                    end: "top 10%",
                    scrub: 0.4,
                    invalidateOnRefresh: true,
                }
            });

            gsap.fromTo(laptopRef.current, {
                x: laptopRight,
                rotateY: -4,
                rotateX: 1,
                scale: laptopScale,
                opacity: 1,
            }, {
                x: laptopLeft,
                rotateY: 4,
                rotateX: 1,
                scale: laptopScale,
                overwrite: "auto",
                immediateRender: false,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#genfess-portfolio",
                    start: "top 80%",
                    end: "top 25%",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });

            ScrollTrigger.create({
                trigger: "#genfess-portfolio",
                start: "top 40%",
                onEnter: () => activateLaptopScreen("genfessPortfolio"),
                onLeaveBack: () => activateLaptopScreen("jayplePortfolio"),
                invalidateOnRefresh: true,
            });

            gsap.fromTo(laptopRef.current, {
                x: laptopLeft,
                rotateY: 4,
                rotateX: 1,
                scale: laptopScale,
                opacity: 1,
            }, {
                x: laptopRight,
                rotateY: -4,
                rotateX: 1,
                scale: laptopScale,
                overwrite: "auto",
                immediateRender: false,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#success",
                    start: "top 80%",
                    end: "top 25%",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });

            ScrollTrigger.create({
                trigger: "#success",
                start: "top 40%",
                onEnter: () => activateLaptopScreen("case"),
                onLeaveBack: () => activateLaptopScreen("genfessPortfolio"),
                invalidateOnRefresh: true,
            });

            gsap.fromTo(laptopRef.current, {
                x: laptopRight,
                rotateY: -4,
                rotateX: 1,
                scale: laptopScale,
                opacity: 1,
            }, {
                x: laptopLeft,
                rotateY: 4,
                rotateX: 1,
                scale: laptopScale,
                overwrite: "auto",
                immediateRender: false,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#fruithouse",
                    start: "top 80%",
                    end: "top 25%",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });

            ScrollTrigger.create({
                trigger: "#fruithouse",
                start: "top 40%",
                onEnter: () => activateLaptopScreen("fruithouse"),
                onLeaveBack: () => activateLaptopScreen("case"),
                invalidateOnRefresh: true,
            });

            gsap.fromTo(laptopRef.current, {
                x: laptopLeft,
                rotateY: 4,
                rotateX: 1,
                scale: laptopScale,
                opacity: 1,
            }, {
                x: laptopRight,
                rotateY: -4,
                rotateX: 1,
                scale: laptopScale,
                opacity: 1,
                immediateRender: false,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#vks",
                    start: "top 80%",
                    end: "top 25%",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });

            ScrollTrigger.create({
                trigger: "#vks",
                start: "top 40%",
                onEnter: () => activateLaptopScreen("vks"),
                onLeaveBack: () => activateLaptopScreen("fruithouse"),
                invalidateOnRefresh: true,
            });

            gsap.fromTo(laptopRef.current, {
                x: laptopRight,
                opacity: 1,
                rotateY: -4,
            }, {
                opacity: 0,
                scale: 0.55,
                x: 1000,
                rotateY: 0,
                immediateRender: false,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#vks",
                    start: "bottom 85%",
                    end: "bottom 10%",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="device-wrapper hidden md:flex fixed inset-y-0 left-0 right-0 items-center justify-center pointer-events-none z-[40] perspective-1200">
            {/* ═══ PHONE DEVICE ═══ */}
            <div
                ref={phoneRef}
                style={{ opacity: 0 }}
                className="device absolute w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-white border-[12px] border-slate-900 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] transform-style-3d will-change-transform"
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
                <div className="relative w-[520px] h-[340px] md:w-[640px] md:h-[400px] bg-white border-[8px] border-slate-900 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.12)] overflow-hidden">
                    {/* Camera dot */}
                    <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full z-20" />
                    {/* Screen content area */}
                    <div className="laptop-screen absolute inset-0 bg-white overflow-hidden">
                        {/* JAYPLE PORTFOLIO STATE */}
                        <div className="screen-state laptop-jayple-portfolio-state absolute inset-0 p-0 flex flex-col opacity-1">
                            <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                <div className="h-5 flex-1 bg-white border border-slate-200 rounded-lg ml-3 flex items-center px-3">
                                    <div className="h-2 w-24 bg-slate-200 rounded" />
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div className="h-28 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="h-3 w-16 bg-slate-900/30 rounded mx-auto mb-2" />
                                        <div className="h-2 w-28 bg-slate-900/10 rounded mx-auto" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    <div className="h-20 bg-slate-100 rounded-lg p-3 flex flex-col justify-between">
                                        <div className="w-6 h-6 rounded bg-slate-200" />
                                        <div className="h-1.5 w-12 bg-slate-200 rounded" />
                                    </div>
                                    <div className="h-20 bg-slate-100 rounded-lg p-3 flex flex-col justify-between">
                                        <div className="w-6 h-6 rounded bg-slate-200" />
                                        <div className="h-1.5 w-12 bg-slate-200 rounded" />
                                    </div>
                                    <div className="h-20 bg-slate-100 rounded-lg p-3 flex flex-col justify-between">
                                        <div className="w-6 h-6 rounded bg-slate-200" />
                                        <div className="h-1.5 w-12 bg-slate-200 rounded" />
                                    </div>
                                    <div className="h-20 bg-slate-100 rounded-lg p-3 flex flex-col justify-between">
                                        <div className="w-6 h-6 rounded bg-slate-200" />
                                        <div className="h-1.5 w-12 bg-slate-200 rounded" />
                                    </div>
                                </div>
                                <div className="flex gap-4 flex-1">
                                    <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0" />
                                        <div className="flex-1">
                                            <div className="h-2 w-20 bg-slate-300 rounded mb-2" />
                                            <div className="h-1.5 w-32 bg-slate-200 rounded" />
                                        </div>
                                        <div className="h-8 w-20 bg-slate-900 rounded-lg" />
                                    </div>
                                    <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0" />
                                        <div className="flex-1">
                                            <div className="h-2 w-24 bg-slate-300 rounded mb-2" />
                                            <div className="h-1.5 w-28 bg-slate-200 rounded" />
                                        </div>
                                        <div className="h-8 w-20 bg-slate-200 rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* GENFESS PORTFOLIO STATE */}
                        <div className="screen-state laptop-genfess-portfolio-state absolute inset-0 opacity-0 translate-y-5">
                            <img
                                src="/GenfessLancher.png"
                                alt="Genfess Launcher"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CASE STUDY — Racks Madurai */}
                        <div className="screen-state laptop-case-state absolute inset-0 opacity-0 translate-y-5">
                            <img
                                src="/racks.png"
                                alt="Racks Madurai"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CASE STUDY — Fruit House */}
                        <div className="screen-state laptop-fruithouse-state absolute inset-0 opacity-0 translate-y-5">
                            <img
                                src="/fruithouse.png"
                                alt="Fruit House"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CASE STUDY — VKS Decoration */}
                        <div className="screen-state laptop-vks-state absolute inset-0 opacity-0 translate-y-5">
                            <img
                                src="/vks.png"
                                alt="VKS Decoration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* Laptop Keyboard Base */}
                <div className="relative mx-auto" style={{ width: "110%", marginLeft: "-5%" }}>
                    <div className="h-3 bg-gradient-to-b from-slate-800 to-slate-700 rounded-t-sm" />
                    <div className="h-[14px] bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-xl flex items-center justify-center">
                        <div className="w-16 h-[4px] bg-slate-400/60 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
