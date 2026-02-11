"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: "/step3.png",
        alt: "Step 1 preview",
        title: "Schedule a Demo",
        description:
            "Start by booking a personalized demo. We walk you through the platform, understand your business model, and discuss how you plan to deliver learning.",
    },
    {
        image: "/step1.png",
        alt: "Step 2 preview",
        title: "Get a custom plan",
        description:
            "Based on your requirements—courses, cohorts, monetization, branding, and scale—we design a custom plan tailored to your usage and growth.",
    },
    {
        image: "/step2.png",
        alt: "Launch your branded LMS",
        title: "Launch your branded LMS",
        description:
            "Receive access to your live admin panel and student-facing LMS—fully white-labeled with your domain, branding, and configurations, ready to onboard learners.",
    },
];

export default function HowItWorksSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        const horizontal = horizontalRef.current;
        if (!section || !horizontal) return;

        const totalSlides = slides.length;

        let ctx = gsap.context(() => {
            gsap.to(horizontal, {
                x: () => -(horizontal.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + horizontal.scrollWidth,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        // Calculate index based on progress
                        const newIndex = Math.min(
                            Math.floor(progress * totalSlides),
                            totalSlides - 1
                        );
                        setActiveIndex(newIndex);

                        // Animate the progress bar scale
                        gsap.set(progressBarRef.current, { scaleX: progress });
                    },
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white overflow-hidden">
            <div className="flex flex-col  justify-between">

                {/* HEADER */}
                <div className="w-full px-6 pt-24 pb-4 z-10 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F4FF] text-gray-700 mb-6">
                            <Image src="/GettingStarted.svg" alt="icon" width={18} height={18} />
                            Getting Started
                        </div>

                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                            From demo to launch <br /> in a few simple steps
                        </h2>

                        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
                            Designed for ed-tech businesses that need full branding control,
                            scalable infrastructure, and modern learning workflows.
                        </p>

                        {/* NAV LINKS */}
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            {slides.map((slide, idx) => (
                                <React.Fragment key={idx}>
                                    <span className={`text-base font-medium transition-colors duration-300 ${
                                        activeIndex === idx ? "text-blue-600" : "text-gray-400"
                                    }`}>
                                        {slide.title}
                                    </span>
                                    {idx !== slides.length - 1 && (
                                        <ChevronRight className={`w-4 h-4 transition-colors duration-300 ${
                                            activeIndex > idx ? "text-blue-600" : "text-gray-300"
                                        }`} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CENTER: HORIZONTAL IMAGES */}
                <div className="flex-1 mt-24 relative flex items-center overflow-hidden">
                    <div ref={horizontalRef} className="flex h-full items-center">
                        {slides.map((slide, index) => (
                            <div key={index} className="w-screen flex-shrink-0 px-6 md:px-20">
                                <div className="max-w-4xl mx-auto">
                                    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#F8FAFC] border border-gray-100 shadow-sm">
                                        {/* Browser Dots */}
                                        <div className="flex gap-1.5 p-4">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                                        </div>
                                        <div className="relative w-full h-[calc(100%-40px)] px-4 pb-4">
                                            <Image
                                                src={slide.image}
                                                alt={slide.alt}
                                                fill
                                                className="object-contain"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER: Text + Progress Bar (Matches your screenshot) */}
                <div className="w-full px-6 pb-16 pt-8 bg-white z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10 min-h-[100px]">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-all duration-300">
                                {slides[activeIndex].title}
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl transition-all duration-300">
                                {slides[activeIndex].description}
                            </p>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-[3px] w-full bg-gray-50 rounded-full overflow-hidden">
                            <div
                                ref={progressBarRef}
                                className="h-full bg-blue-600 w-full origin-left scale-x-0 transition-transform duration-100 ease-out"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}