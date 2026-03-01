"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" href="#home" />
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Jayple"
                            href="#products"
                            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=140&h=70&auto=format&fit=crop"
                            description="A hair salon booking application that simplifies appointment scheduling."
                        />
                        <ProductItem
                            title="Genfess"
                            href="#genfess"
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=140&h=70&auto=format&fit=crop"
                            description="A private social media platform for college students."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Portfolio">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#jayple-portfolio">Jayple</HoveredLink>
                        <HoveredLink href="#genfess-portfolio">Genfess</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Case Studies">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#success">Racksmadurai</HoveredLink>
                        <HoveredLink href="#fruithouse">Fruit House</HoveredLink>

                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About" href="#about" />
            </Menu>
        </div>
    );
}
