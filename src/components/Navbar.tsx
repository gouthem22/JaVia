"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("home");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                // When the bottom of the hero section passes the top of the viewport + some offset
                setIsDark(heroBottom > 100);
            } else {
                // No hero section (blog pages, etc.) — use light navbar
                setIsDark(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn("fixed top-4 md:top-8 inset-x-0 w-[92%] md:w-fit mx-auto z-50 transition-all duration-500", className)}
        >
            {/* 🖥️ Desktop Menu */}
            <div className="hidden md:block">
                <Menu setActive={setActive} isDark={isDark}>
                    <MenuItem setActive={setActive} active={active} item="Home" href="#home" isDark={isDark} />
                    <MenuItem setActive={setActive} active={active} item="Products" isDark={isDark}>
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#jayple" isDark={isDark}>Jayple</HoveredLink>
                            <HoveredLink href="#genfess" isDark={isDark}>Genfess</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Portfolio" isDark={isDark}>
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#jayple-portfolio" isDark={isDark}>Jayple</HoveredLink>
                            <HoveredLink href="#genfess-portfolio" isDark={isDark}>Genfess</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Case Studies" isDark={isDark}>
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#success" isDark={isDark}>Racksmadurai</HoveredLink>
                            <HoveredLink href="#fruithouse" isDark={isDark}>Fruit House</HoveredLink>
                            <HoveredLink href="#vks" isDark={isDark}>VKS Decoration</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Services" href="#services" isDark={isDark} />
                    <MenuItem setActive={setActive} active={active} item="Insights" isDark={isDark}>
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="#testimonials" isDark={isDark}>Testimonials</HoveredLink>
                            <HoveredLink href="/blog" isDark={isDark}>Blog / Insights</HoveredLink>
                            <HoveredLink href="#faqs" isDark={isDark}>FAQs</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="About" href="#about" isDark={isDark} />
                </Menu>
            </div>

            {/* 📱 Mobile Toggle */}
            <div className="md:hidden flex justify-end px-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "p-3 rounded-full backdrop-blur-xl border transition-all duration-300",
                        isDark
                            ? "bg-white/5 border-white/10 text-white shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
                            : "bg-black/5 border-black/10 text-black shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                    )}
                >
                    {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* 📱 Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className={cn(
                            "absolute top-16 inset-x-4 p-6 rounded-3xl border backdrop-blur-2xl z-[60] flex flex-col gap-6",
                            isDark ? "bg-black/90 border-white/10" : "bg-white/90 border-slate-200"
                        )}
                    >
                        <div className="flex flex-col gap-4">
                            <MobileNavLink href="#home" onClick={() => setIsOpen(false)} isDark={isDark}>Home</MobileNavLink>
                            <MobileNavLink href="#services" onClick={() => setIsOpen(false)} isDark={isDark}>Services</MobileNavLink>
                            <MobileNavLink href="#about" onClick={() => setIsOpen(false)} isDark={isDark}>About</MobileNavLink>

                            <hr className={cn("border-t", isDark ? "border-white/10" : "border-slate-100")} />

                            <div className="space-y-2">
                                <p className={cn("text-[10px] uppercase tracking-widest font-bold", isDark ? "text-white/40" : "text-slate-400")}>Case Studies</p>
                                <div className="grid grid-cols-1 gap-2">
                                    <MobileNavLink href="#success" onClick={() => setIsOpen(false)} isDark={isDark} sub>Racksmadurai</MobileNavLink>
                                    <MobileNavLink href="#fruithouse" onClick={() => setIsOpen(false)} isDark={isDark} sub>Fruit House</MobileNavLink>
                                    <MobileNavLink href="#vks" onClick={() => setIsOpen(false)} isDark={isDark} sub>VKS Decoration</MobileNavLink>
                                </div>
                            </div>

                            <hr className={cn("border-t", isDark ? "border-white/10" : "border-slate-100")} />

                            <div className="space-y-2">
                                <p className={cn("text-[10px] uppercase tracking-widest font-bold", isDark ? "text-white/40" : "text-slate-400")}>Insights</p>
                                <div className="grid grid-cols-1 gap-2">
                                    <MobileNavLink href="/blog" onClick={() => setIsOpen(false)} isDark={isDark} sub>Blog</MobileNavLink>
                                    <MobileNavLink href="#testimonials" onClick={() => setIsOpen(false)} isDark={isDark} sub>Testimonials</MobileNavLink>
                                    <MobileNavLink href="#faqs" onClick={() => setIsOpen(false)} isDark={isDark} sub>FAQs</MobileNavLink>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MobileNavLink({ href, children, onClick, isDark, sub }: { href: string; children: React.ReactNode; onClick: () => void; isDark: boolean; sub?: boolean }) {
    return (
        <a
            href={href}
            onClick={(e) => {
                e.preventDefault();
                onClick();
                if (href.startsWith("/")) {
                    window.location.href = href;
                } else if (href.startsWith("#")) {
                    const el = document.querySelector(href);
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    } else {
                        window.location.href = "/" + href;
                    }
                }
            }}
            className={cn(
                "flex items-center justify-between group py-2",
                sub ? "text-sm" : "text-lg font-medium",
                isDark ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
        >
            {children}
            {!sub && <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
        </a>
    );
}
