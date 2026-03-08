"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("home");
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                // When the bottom of the hero section passes the top of the viewport + some offset
                setIsDark(heroBottom > 100);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4 transition-all duration-500", className)}
        >
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
                        <HoveredLink href="#blog" isDark={isDark}>Blog / Insights</HoveredLink>
                        <HoveredLink href="#faqs" isDark={isDark}>FAQs</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About" href="#about" isDark={isDark} />
            </Menu>
        </div>
    );
}
