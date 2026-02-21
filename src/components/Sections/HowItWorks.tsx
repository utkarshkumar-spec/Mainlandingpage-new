"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: "/step1.jpg",
        ref: "step1",
        alt: "Step 1 preview",
        title: "Schedule a Demo",
        description:
            "Start by booking a personalized demo. We walk you through the platform, understand your business model, and discuss how you plan to deliver learning.",
    },
    {
        image: "/step2.jpg",
        ref: "step2",
        alt: "Step 2 preview",
        title: "Get a custom plan",
        description:
            "Based on your requirements—courses, cohorts, monetization, branding, and scale—we design a custom plan tailored to your usage and growth.",
    },
    {
        image: "/step3.svg",
        ref: "step3",
        alt: "Step 3 preview",
        title: "Launch Your LMS",
        description:
            "Receive access to your live admin panel and student-facing LMS—fully white-labeled with your domain, branding, and configurations, ready to onboard learners.",
    },
];

export default function HowItWorksSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const slidesContainerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current || !slidesContainerRef.current || !triggerRef.current) return;

            const slidesContainer = slidesContainerRef.current;

            gsap.to(slidesContainer, {
                x: () => -(slidesContainer.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => "+=" + slidesContainer.scrollWidth,
                    scrub: 1,
                    pin: containerRef.current,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (progressBarRef.current) {
                            progressBarRef.current.style.width = `${self.progress * 100}%`;
                        }
                    },
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative mb-30 bg-white font-manrope">
            {/* Header Section - This sits at normal scroll position */}
            <div className="w-full px-4 py-8 sm:px-6 sm:py-14 md:py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-medium sm:mb-8"
                        style={{ backgroundColor: "#F7FAFE" }}>
                    <Image
                        src="/GettingStarted.svg"
                        alt="Getting Started"
                        width={25}
                        height={25}
                    />
                    <span className="text-sm font-light">Getting Started</span>
                    </div>
                    
                    <h2 className="mb-4 text-center text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:mb-6 md:text-5xl">
                        From demo to launch <br/>
                        in a few simple steps
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-base font-medium leading-7 text-gray-500 sm:mb-12 sm:text-lg sm:leading-8 md:text-xl">
                        We handle the setup, customization, and infrastructure 
                        <br className="hidden sm:block" /> so you can
                        focus on delivering education under your own brand.
                    </p>

                    <ol className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
                        <li className="flex items-center gap-2 rounded-full border border-blue-200 bg-[#F7FAFE] px-3 py-1.5 text-xs text-gray-700 sm:px-4 sm:py-2 sm:text-sm">
                            <span className="font-semibold text-blue-700">Step 1</span>
                            <span>Schedule a Demo</span>
                        </li>
                        <li className="text-blue-500" aria-hidden="true">
                            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </li>
                        <li className="flex items-center gap-2 rounded-full border border-blue-200 bg-[#F7FAFE] px-3 py-1.5 text-xs text-gray-700 sm:px-4 sm:py-2 sm:text-sm">
                            <span className="font-semibold text-blue-700">Step 2</span>
                            <span>Get a Custom Plan</span>
                        </li>
                        <li className="text-blue-500" aria-hidden="true">
                            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </li>
                        <li className="flex items-center gap-2 rounded-full border border-blue-200 bg-[#F7FAFE] px-3 py-1.5 text-xs text-gray-700 sm:px-4 sm:py-2 sm:text-sm">
                            <span className="font-semibold text-blue-700">Step 3</span>
                            <span>Launch Your LMS</span>
                        </li>
                    </ol>
                </div>
            </div>

            {/* This is where horizontal scroll STARTS */}
            {/* We'll place this lower from the top */}
            <div 
                ref={triggerRef}
                className="relative h-32 sm:h-40"
            >
                {/* You can add any content here that shows before horizontal scroll */}
                {/* Or leave it empty for spacing */}
            </div>

            {/* Horizontal Scroll Container - Positioned lower */}
            <div 
                ref={containerRef}
                className="relative -mt-32 h-screen w-full sm:-mt-40"
            >
                {/* Sticky container that holds the slides */}
                <div className="sticky top-6 h-[calc(100vh-56px)] overflow-hidden sm:top-8 sm:h-[calc(100vh-64px)] md:top-10 md:h-[calc(100vh-80px)]">
                    <div 
                        ref={slidesContainerRef}
                        className="absolute left-0 top-0 flex h-full px-4 sm:px-6 md:px-[10vw]"
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex h-full w-screen shrink-0 items-center justify-center px-2 text-start sm:px-0 md:w-[80vw]"
                            >
                                <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
                                    <div className="relative w-full aspect-video overflow-hidden bg-[#F7FAFE]">
                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            fill
                                            className="object-contain"
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, 80vw"
                                        />
                                    </div>
                                    <h2 className="mt-4 mb-3 flex items-center gap-2 text-start text-2xl font-semibold text-neutral-900 sm:mb-4 sm:text-3xl md:text-4xl">
                                        <span className="text-blue-700">{String(index + 1).padStart(2, "0")}.</span>
                                        <span>{slide.title}</span>
                                    </h2>
                                    <p className="max-w-2xl text-start text-sm font-light leading-6 text-neutral-600 sm:text-base sm:leading-7 md:text-lg md:leading-relaxed">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-3 left-1/2 z-10 h-1.5 w-48 -translate-x-1/2 overflow-hidden rounded-full bg-gray-100 sm:bottom-4 sm:w-64 md:w-96">
                        <div
                            ref={progressBarRef}
                            className="h-full bg-blue-600 rounded-full transition-all duration-75 ease-out"
                            style={{ width: "0%" }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
