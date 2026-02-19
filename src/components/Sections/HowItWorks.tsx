"use client";

import React, { useEffect, useRef, useState } from "react";
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
        <section className="relative bg-white font-manrope mb-30">
            {/* Header Section - This sits at normal scroll position */}
            <div className="w-full px-6 py-14">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-md font-medium mb-8"
                        style={{ backgroundColor: "#F7FAFE" }}>
                    <Image
                        src="/GettingStarted.svg"
                        alt="Getting Started"
                        width={25}
                        height={25}
                    />
                    <span className="font-light text-md">Getting Started</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight ext-center mb-6">
                        From demo to launch <br/>
                        in a few simple steps
                    </h2>

                    <p className="text-xl text-gray-500 font-medium mb-12">
                        We handle the setup, customization, and infrastructure 
                        <br/> so you can
                        focus on delivering education under your own brand.
                    </p>

                    <div className="flex flex-wrap text-xl justify-center gap-6 items-center">
                        <a href="step1" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Schedule a Demo
                        </a>
                        <ChevronRight className="w-4 h-4 " />
                        <a href="step2" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Get a Custom Plan
                        </a>
                        <ChevronRight className="w-4 h-4 " />
                        <a href="step3" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Launch Your LMS
                        </a>
                    </div>
                </div>
            </div>

            {/* This is where horizontal scroll STARTS */}
            {/* We'll place this lower from the top */}
            <div 
                ref={triggerRef}
                className="relative"
                style={{ height: '150px' }} // This creates space before horizontal scroll starts
            >
                {/* You can add any content here that shows before horizontal scroll */}
                {/* Or leave it empty for spacing */}
            </div>

            {/* Horizontal Scroll Container - Positioned lower */}
            <div 
                ref={containerRef}
                className="relative w-full h-screen"
                style={{ marginTop: '-150px' }} // Pulls it up to overlap with trigger
            >
                {/* Sticky container that holds the slides */}
                <div className="sticky top-10 h-[calc(100vh-80px)] overflow-hidden"> {/* Adjust top value to position lower */}
                    <div 
                        ref={slidesContainerRef}
                        className="absolute top-0 left-0 h-full flex md:px-[10vw]"
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-screen md:w-[80vw] h-full shrink-0 flex text-start items-center justify-center"
                            >
                                <div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-center">
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#F7FAFE] border border-gray-100">
                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            fill
                                            className="object-contain"
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, 80vw"
                                        />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 mt-4 text-start">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg font-light text-neutral-600 max-w-2xl text-start leading-relaxed">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 md:w-96 h-1.5 bg-gray-100 rounded-full overflow-hidden z-10">
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