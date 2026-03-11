"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919788995924?text=Hi%20JaVia!%20%F0%9F%9A%80%20I'm%20interested%20in%20discussing%20a%20new%20project.%20Could%20we%20connect?"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 md:bottom-12 md:right-12 group flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} fill="currentColor" strokeWidth={0} />
            <span className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us
            </span>
        </a>
    );
}
