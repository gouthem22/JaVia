"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    href?: string;
}) => {
    const handleClick = () => {
        if (href) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div onMouseEnter={() => children ? setActive(item) : null} className="relative ">
            <motion.p
                onClick={handleClick}
                transition={{ duration: 0.3 }}
                className={cn(
                    "cursor-pointer transition-colors font-medium",
                    active === item ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-900"
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
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
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
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-input flex justify-center space-x-4 px-8 py-6 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
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
                <h4 className="text-xl font-bold mb-1 text-slate-900">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </a>
    );
};

import { cn } from "@/lib/utils";

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <a
            {...rest}
            className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
            {children}
        </a>
    );
};
