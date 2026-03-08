import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What industries does JaVia Ventures specialize in?",
        answer: "We specialize in Retail Infrastructure, Food & Beverage, Wedding & Event services, and broad Enterprise Solutions. Our approach is industry-agnostic, focusing on the core engineering and digital needs of any modern business."
    },
    {
        question: "How long does a typical project take to complete?",
        answer: "Project timelines vary based on complexity. A dedicated launcher website can take 2-4 weeks, while a full enterprise platform or SaaS MVP typically ranges from 2-4 months. We follow agile methodologies to deliver value incrementally."
    },
    {
        question: "Do you provide long-term maintenance and support?",
        answer: "Yes, we believe in long-term partnerships. We offer ongoing maintenance, security updates, and performance optimization packages to ensure your digital products continue to scale with your business."
    },
    {
        question: "Can JaVia help with digital strategy and branding?",
        answer: "Absolutely. Beyond engineering, we provide digital strategy, UX/UI design, and performance branding to ensure your product not only works perfectly but also resonates with your target audience."
    },
    {
        question: "How does JaVia ensure the security of enterprise products?",
        answer: "Security is integrated into our engineering lifecycle. We follow industry best practices, conduct regular security audits, and use robust, encrypted architectures for all enterprise-grade solutions."
    }
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="w-full py-24 md:py-32 px-4 bg-secondary-bg">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-sm">FAQs</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Common <span className="italic">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 bg-white rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-900">
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
