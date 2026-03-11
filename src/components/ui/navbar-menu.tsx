"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition: any = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    href,
    isDark = true,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    href?: string;
    isDark?: boolean;
}) => {
    const handleClick = () => {
        if (href) {
            if (href.startsWith("/")) {
                // Full path like /blog — navigate directly
                window.location.href = href;
            } else if (href.startsWith("#")) {
                // Hash link — check if we're on the homepage
                const el = document.querySelector(href);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                } else {
                    // Not on homepage, navigate to homepage + hash
                    window.location.href = "/" + href;
                }
            }
        }
    };
    return (
        <div onMouseEnter={() => children ? setActive(item) : null} className="relative ">
            <motion.p
                onClick={handleClick}
                transition={{ duration: 0.3 }}
                className={cn(
                    "cursor-pointer transition-colors duration-500 font-medium text-[10px] sm:text-xs md:text-sm whitespace-nowrap",
                    isDark
                        ? (active === item ? "text-white font-bold" : "text-white/70 hover:text-white")
                        : (active === item ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-900")
                )}
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className={cn(
                                    "rounded-2xl overflow-hidden border backdrop-blur-xl",
                                    isDark
                                        ? "bg-black/60 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                                        : "bg-white/80 border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                                )}
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
    isDark = true,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
    isDark?: boolean;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className={cn(
                "relative rounded-full border backdrop-blur-xl flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-6 px-4 py-3 md:px-10 md:py-4 transition-all duration-500",
                isDark
                    ? "border-white/15 bg-white/5 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.15),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.15),inset_0_0_6px_6px_rgba(255,255,255,0.04),0_0_12px_rgba(255,255,255,0.06)]"
                    : "border-slate-200/60 bg-white/60 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.06),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.5),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.5),inset_0_0_6px_6px_rgba(255,255,255,0.1)]"
            )}
        >
            {/* Liquid glass SVG filter */}
            <svg className="hidden">
                <defs>
                    <filter
                        id="nav-glass"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        colorInterpolationFilters="sRGB"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.05 0.05"
                            numOctaves="1"
                            seed="1"
                            result="turbulence"
                        />
                        <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="blurredNoise"
                            scale="70"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="displaced"
                        />
                        <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
                        <feComposite in="finalBlur" in2="finalBlur" operator="over" />
                    </filter>
                </defs>
            </svg>
            {/* Glass distortion layer */}
            <div
                className="absolute inset-0 rounded-full overflow-hidden -z-10"
                style={{ backdropFilter: 'url("#nav-glass") blur(16px)' }}
            />
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
    isDark = true,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
    isDark?: boolean;
}) => {
    return (
        <a href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl grayscale hover:grayscale-0 transition-all duration-300"
            />
            <div>
                <h4 className={cn(
                    "text-xl font-bold mb-1 transition-colors duration-500",
                    isDark ? "text-white" : "text-slate-900"
                )}>
                    {title}
                </h4>
                <p className={cn(
                    "text-sm max-w-[10rem] transition-colors duration-500",
                    isDark ? "text-white/60" : "text-slate-600"
                )}>
                    {description}
                </p>
            </div>
        </a>
    );
};

export const HoveredLink = ({ children, isDark = true, href, ...rest }: any) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (href) {
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
        }
    };
    return (
        <a
            {...rest}
            href={href}
            onClick={handleClick}
            className={cn(
                "transition-colors duration-500 cursor-pointer",
                isDark
                    ? "text-white/60 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
            )}
        >
            {children}
        </a>
    );
};
