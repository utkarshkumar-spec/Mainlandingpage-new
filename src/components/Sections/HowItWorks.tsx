"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CalendarCheck,
    SlidersHorizontal,
    LayoutDashboard,
    Settings,
    ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Schedule a Demo",
        description:
            "Start by booking a personalized demo. We walk you through the platform, understand your business model, and discuss how you plan to deliver learning.",
        icon: CalendarCheck,
        color: "bg-purple-600",
        image: "https://res.cloudinary.com/dyktjldc4/image/upload/v1766002523/Screenshot_2025-12-18_at_01-43-16_My_Company_xzmhy3.png",
    },
    {
        title: "Get a Custom Plan",
        description:
            "Based on your requirements—courses, cohorts, monetization, branding, and scale—we design a custom plan tailored to your usage and growth.",
        icon: SlidersHorizontal,
        color: "bg-emerald-600",
        image: "https://res.cloudinary.com/dyktjldc4/image/upload/v1766002523/Screenshot_2025-12-18_at_01-43-49_My_Company_o66fzv.png",
    },
    {
        title: "Launch Your Branded LMS",
        description:
            "Receive access to your live admin panel and student-facing LMS—fully white-labeled with your domain, branding, and configurations, ready to onboard learners.",
        icon: LayoutDashboard,
        color: "bg-indigo-600",
        image: "https://res.cloudinary.com/dyktjldc4/image/upload/v1766002637/Screenshot_2025-12-18_at_01-45-50_My_Company_hwn8ub.png",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="relative py-28 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-6"
                    >
                        <Settings className="w-3 h-3" />
                        <span>Getting Started</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                        From demo to launch <br className="hidden md:block" />
                        in a few simple steps
                    </h2>

                    <p className="max-w-2xl text-neutral-500 dark:text-neutral-400 text-lg">
                        We handle the setup, customization, and infrastructure—so you can
                        focus on delivering education under your own brand.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-6xl md:px-0 px-6 mx-auto md:grid md:grid-cols-3 md:gap-16 space-y-20 md:space-y-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Large step number */}
                            <span className="absolute -top-24 -left-12 text-[10rem] font-black text-neutral-100 dark:text-neutral-800/50 select-none">
                                {index + 1}
                            </span>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Visual */}
                                <div className="mb-8 overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900 aspect-video p-4">
                                    <div className="w-full h-full rounded-xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) =>
                                            (e.currentTarget.src =
                                                "https://via.placeholder.com/600x340?text=Platform+Preview")
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div
                                        className={cn(
                                            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg",
                                            step.color
                                        )}
                                    >
                                        <step.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-10 -translate-y-1/2">
                                        <ArrowRight className="w-6 h-6 text-neutral-300 dark:text-neutral-700" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full bg-purple-500/10 blur-3xl" />
            </div>
        </section>
    );
}
