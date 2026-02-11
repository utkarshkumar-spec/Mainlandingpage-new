"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: "/step1.png",
        alt: "Step 1 preview",
        title: "Schedule a Demo",
        description:
            "Start by booking a personalized demo. We walk you through the platform, understand your business model, and discuss how you plan to deliver learning.",
    },
    {
        image: "/step2.png",
        alt: "Step 2 preview",
        title: "Get a Custom Plan",
        description:
            "Based on your requirements—courses, cohorts, monetization, branding, and scale—we design a custom plan tailored to your usage and growth.",
    },
    {
        image: "/step3.png",
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

    useEffect(() => {
        if (!containerRef.current || !slidesContainerRef.current || !triggerRef.current) return;

        // Get the horizontal container
        const slidesContainer = slidesContainerRef.current;
        const slidesArray = Array.from(slidesContainer.children) as HTMLElement[];
        
        // Calculate total width
        let totalWidth = 0;
        slidesArray.forEach(slide => {
            totalWidth += slide.offsetWidth;
        });

        // Get the container height
        const containerHeight = containerRef.current.offsetHeight;
        
        // Calculate when the scroll should start
        // We want it to start when the trigger element reaches the top of viewport
        // and end after scrolling through total width
        const startPosition = triggerRef.current.offsetTop;

        // Create the horizontal scroll animation
        gsap.to(slidesContainer, {
            x: -totalWidth + window.innerWidth,
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current, // Use a separate trigger element
                start: `top top`, // Start when trigger top hits viewport top
                end: () => `+=${totalWidth}`, // Scroll for total width distance
                scrub: true,
                pin: containerRef.current, // Pin the container
                pinSpacing: true,
                anticipatePin: 1,
                markers: false, // Set to true to see start/end positions
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="relative bg-white">
            {/* Header Section - This sits at normal scroll position */}
            <div className="w-full px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 mb-8">
                        <Image
                            src="/GettingStarted.svg"
                            alt="Getting Started"
                            width={18}
                            height={18}
                        />
                        Getting Started
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
                        From demo to launch in a few simple steps
                    </h2>

                    <p className="text-lg text-gray-600 mb-12">
                        We handle the setup, customization, and infrastructure—so you can
                        focus on delivering education under your own brand.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Schedule a Demo
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Get a Custom Plan
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
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
                <div className="sticky top-20 h-[calc(100vh-80px)] overflow-hidden"> {/* Adjust top value to position lower */}
                    <div 
                        ref={slidesContainerRef}
                        className="absolute top-0 left-0 h-full flex"
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-screen h-full shrink-0 flex items-center justify-center p-4 md:p-8"
                            >
                                <div className="w-full max-w-6xl mx-auto flex flex-col">
                                    <div className="relative w-full aspect-16/10 rounded-[2rem] overflow-hidden">
                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            fill
                                            className="object-contain"
                                            priority={index === 0}
                                            sizes="100vw"
                                        />
                                        {/* <h3 className="text-xl font-semibold text-neutral-900">
                                            {slide.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-neutral-600 max-w-md">
                                            {slide.description}
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-sm">Scroll to view steps</span>
            </div>
        </section>
    );
}
