"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DeviceMockup() {
    const deviceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop } = context.conditions as any;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            // Selection helpers
            const states = {
                hero: ".hero-state",
                products: ".products-state",
                genfess: ".genfess-state",
                jayplePortfolio: ".jayple-portfolio-state",
                genfessPortfolio: ".genfess-portfolio-state",
                case: ".case-state",
                fruithouse: ".fruithouse-state",
                about: ".about-state"
            };

            const activateScreen = (activeKey: keyof typeof states) => {
                const tween = gsap.timeline();
                Object.keys(states).forEach((key) => {
                    const k = key as keyof typeof states;
                    if (k === activeKey) {
                        tween.to(states[k], { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0);
                    } else {
                        tween.to(states[k], { opacity: 0, y: 20, duration: 0.5, ease: "power2.in" }, 0);
                    }
                });
                return tween;
            };

            // Initial state: Fully hidden and scaled down
            tl.set(deviceRef.current, { scale: 0.5, opacity: 0, y: 150 });

            // 0% - 15%: Entrance (Delayed slightly to clear the hero text)
            tl.addLabel("hero", 0.5); // Start at 0.5 instead of 0
            tl.to(deviceRef.current, {
                duration: 2,
                scale: 1,
                opacity: 1,
                y: 0,
                ease: "back.out(1.2)"
            }, "hero");
            tl.add(activateScreen("hero"), "hero");

            // 15% - 35%: JAYPLE (Right Gutter)
            tl.addLabel("jayple", 3);
            tl.to(deviceRef.current, {
                duration: 3,
                x: isDesktop ? 450 : 120,
                y: -30,
                rotateY: -15,
                scale: 0.9,
                ease: "power2.inOut"
            }, "jayple");
            tl.add(activateScreen("products"), "jayple");

            // 35% - 50%: GENFESS (Left Gutter)
            tl.addLabel("genfess", 8); // Pushed later
            tl.to(deviceRef.current, {
                duration: 4,
                x: isDesktop ? -450 : -120,
                y: 30,
                rotateY: 15,
                ease: "power2.inOut"
            }, "genfess");
            tl.add(activateScreen("genfess"), "genfess");

            // 50% - 58%: JAYPLE PORTFOLIO (Right Gutter)
            tl.addLabel("jayplePortfolio", 14);
            tl.to(deviceRef.current, {
                duration: 4,
                x: isDesktop ? 480 : 130,
                y: -10,
                rotateY: -5,
                rotateX: 10,
                scale: 0.85,
                ease: "power2.inOut"
            }, "jayplePortfolio");
            tl.add(activateScreen("jayplePortfolio"), "jayplePortfolio");

            // 58% - 66%: GENFESS PORTFOLIO (Left Gutter)
            tl.addLabel("genfessPortfolio", 19);
            tl.to(deviceRef.current, {
                duration: 4,
                x: isDesktop ? -450 : -120,
                y: 30,
                rotateY: 15,
                scale: 0.85,
                ease: "power2.inOut"
            }, "genfessPortfolio");
            tl.add(activateScreen("genfessPortfolio"), "genfessPortfolio");

            // 66% - 74%: CASE STUDY — RACKSMADURAI (RIGHT)
            tl.addLabel("cases", 25);
            tl.to(deviceRef.current, {
                duration: 4,
                x: isDesktop ? 520 : 130,
                y: 20,
                rotateY: -18,
                scale: 1,
                ease: "none"
            }, "cases");
            tl.add(activateScreen("case"), "cases");

            // 74% - 82%: CASE STUDY — FRUIT HOUSE (LEFT)
            tl.addLabel("fruithouse", 30);
            tl.to(deviceRef.current, {
                duration: 4,
                x: isDesktop ? -450 : -120,
                y: 30,
                rotateY: 15,
                scale: 1,
                ease: "power2.inOut"
            }, "fruithouse");
            tl.add(activateScreen("fruithouse"), "fruithouse");

            // 82% - 90%: ABOUT (Return to Center)
            tl.addLabel("tagline", 36);
            tl.to(deviceRef.current, {
                duration: 2.5,
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                scale: 1,
                opacity: 1,
                ease: "power3.inOut"
            }, "tagline");
            tl.add(activateScreen("about"), "tagline+=1");

            // EXIT
            tl.addLabel("exit", 40);
            tl.to(deviceRef.current, {
                duration: 1.5,
                scale: 0,
                opacity: 0,
                y: 100,
                ease: "back.in(1.2)"
            }, "exit");
        });

        return () => mm.revert();
    }, []);

    return (
        <div className="device-wrapper fixed inset-y-0 left-0 right-0 flex items-center justify-center pointer-events-none z-[40] perspective-1200">
            <div
                ref={deviceRef}
                style={{ opacity: 0 }}
                className="device w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-white border-[12px] border-slate-900 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative transform-style-3d will-change-transform"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-2xl z-20" />
                <div className="device-screen absolute inset-0 bg-white rounded-[2.2rem] overflow-hidden">
                    {/* HERO STATE — Analytics Dashboard */}
                    <div className="screen-state hero-state absolute inset-0 p-6 flex flex-col gap-4 opacity-100">
                        <div className="flex justify-between items-center mb-2">
                            <div className="h-3 w-16 bg-slate-900/10 rounded" />
                            <div className="w-6 h-6 rounded-full bg-slate-100" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-20 bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-1.5 w-8 bg-slate-900/5 rounded" />
                                <div className="h-5 w-14 bg-slate-900/60 rounded" />
                                <div className="h-1 w-10 bg-slate-200 rounded" />
                            </div>
                            <div className="h-20 bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-1.5 w-8 bg-slate-900/5 rounded" />
                                <div className="h-5 w-14 bg-slate-900/60 rounded" />
                                <div className="h-1 w-10 bg-slate-200 rounded" />
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 overflow-hidden relative">
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-slate-100/50 clip-path-chart" />
                            <div className="w-full h-[2px] bg-slate-900/20 absolute bottom-1/2" />
                        </div>
                    </div>

                    {/* PRODUCTS STATE — Jayple */}
                    <div className="screen-state products-state absolute inset-0 p-6 flex flex-col gap-6 opacity-0 translate-y-5">
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
                    <div className="screen-state genfess-state absolute inset-0 opacity-0 translate-y-5">
                        <img
                            src="/genfess.png"
                            alt="Genfess Mockup"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>

                    {/* JAYPLE PORTFOLIO STATE — Salon Booking Launcher */}
                    <div className="screen-state jayple-portfolio-state absolute inset-0 p-0 flex flex-col opacity-0 translate-y-5">
                        <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-300" />
                            <div className="w-2 h-2 rounded-full bg-yellow-300" />
                            <div className="w-2 h-2 rounded-full bg-green-300" />
                            <div className="h-4 flex-1 bg-white border border-slate-200 rounded-md ml-2 flex items-center px-2">
                                <div className="h-1.5 w-16 bg-slate-200 rounded" />
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                            <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="h-2 w-12 bg-slate-900/30 rounded mx-auto mb-1.5" />
                                    <div className="h-1.5 w-20 bg-slate-900/10 rounded mx-auto" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="h-14 bg-slate-100 rounded-lg p-2 flex flex-col justify-between">
                                    <div className="w-4 h-4 rounded bg-slate-200" />
                                    <div className="h-1 w-8 bg-slate-200 rounded" />
                                </div>
                                <div className="h-14 bg-slate-100 rounded-lg p-2 flex flex-col justify-between">
                                    <div className="w-4 h-4 rounded bg-slate-200" />
                                    <div className="h-1 w-8 bg-slate-200 rounded" />
                                </div>
                                <div className="h-14 bg-slate-100 rounded-lg p-2 flex flex-col justify-between">
                                    <div className="w-4 h-4 rounded bg-slate-200" />
                                    <div className="h-1 w-8 bg-slate-200 rounded" />
                                </div>
                            </div>
                            <div className="h-16 bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="h-1.5 w-16 bg-slate-300 rounded mb-1" />
                                    <div className="h-1 w-24 bg-slate-200 rounded" />
                                </div>
                                <div className="h-6 w-14 bg-slate-900 rounded-md" />
                            </div>
                            <div className="h-16 bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="h-1.5 w-20 bg-slate-300 rounded mb-1" />
                                    <div className="h-1 w-16 bg-slate-200 rounded" />
                                </div>
                                <div className="h-6 w-14 bg-slate-200 rounded-md" />
                            </div>
                        </div>
                    </div>

                    {/* GENFESS PORTFOLIO STATE — Campus Social Launcher */}
                    <div className="screen-state genfess-portfolio-state absolute inset-0 opacity-0 translate-y-5">
                        <img
                            src="/GenfessLancher.png"
                            alt="Genfess Mockup"
                            className="w-full h-full object-cover scale-100"
                        />
                    </div>

                    {/* CASE STUDY STATE — Racks Madurai */}
                    <div className="screen-state case-state absolute inset-0 opacity-0 translate-y-5">
                        <img
                            src="/racks.png"
                            alt="Racks Madurai Mockup"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>

                    {/* CASE STUDY STATE — Fruit House */}
                    <div className="screen-state fruithouse-state absolute inset-0 opacity-0 translate-y-5">
                        <img
                            src="/fruithouse.png"
                            alt="Fruit House Mockup"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>

                    {/* ABOUT STATE — Branding */}
                    <div className="screen-state about-state absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-0 translate-y-5">
                        <div className="w-20 h-20 bg-slate-900 rounded-2xl transform rotate-45 flex items-center justify-center">
                            <div className="w-10 h-10 border-4 border-white transform -rotate-45" />
                        </div>
                        <div className="space-y-2 text-center">
                            <div className="text-2xl font-bold tracking-tighter">JaVia</div>
                            <div className="text-xs font-medium text-slate-500 tracking-widest uppercase">Scalable Ecosystems</div>
                        </div>
                    </div>
                </div>
                {/* Subtle Glow Pulse */}
                <div className="absolute inset-0 rounded-[3rem] shadow-[0_0_40px_rgba(0,0,0,0.05)] animate-pulse-subtle -z-10" />
            </div>
        </div>
    );
}
