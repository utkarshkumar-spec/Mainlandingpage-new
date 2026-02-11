"use client";

import { MoveRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NoiseBackground } from "../ui/noise-background";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";

export default function HeroSectionOne() {
    const words = ["build", "scale", "launch", "manage"];
    const brandColors = ["rgb(24, 99, 255)", "rgb(86, 149, 255)", "rgb(168, 206, 255)"];
    const shouldReduceMotion = useReducedMotion();

    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const imageScale = useTransform(scrollY, [0, 600], [1, 1.30]);
    const imageY = useTransform(scrollY, [0, 400], [16, -20]);

    return (
        <div className="relative w-full overflow-x-clip min-h-283.25">
            <div className="pointer-events-none absolute inset-0 -z-10 w-full h-342 bg-[url('/hero-grid.png')] bg-cover bg-top bg-no-repeat" />
            <div className="pointer-events-none absolute top-0 inset-x-0 h-[calc(100%+6rem)] -z-20 bg-[#F7FAFF]" />
            <div className="pointer-events-none absolute top-0 inset-x-0 h-[calc(100%+6rem)] -z-10 bg-[radial-gradient(850px_circle_at_70%_15%,rgba(190,218,255,0.75),transparent_60%)]" />
            <div className="pointer-events-none absolute top-0 inset-x-0 h-[calc(100%+6rem)] -z-10 bg-[radial-gradient(700px_circle_at_15%_20%,rgba(210,230,255,0.7),transparent_55%)]" />

            <main className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pt-24 md:pt-32 md:pb-36 min-h-283.25">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="group flex items-center gap-3 rounded-md border border-black/5 bg-white/80 px-2 py-1.5 text-xs font-semibold text-black"
                    >
                        <span className="rounded-sm bg-[#1863FF] px-2 py-1 text-[10px] font-bold text-white">
                            New
                        </span>
                        <span className="flex -tracking-[0.05em] items-center font-medium text-xs gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-[#1863FF]" />
                            AI Course Generation
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="mt-8 max-w-3xl text-balance text-sm font-medium leading-[1.05] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Everything you need to{" "}
                        <FlipWords words={words} className="px-0 text-[#1F6BFF]" />{" "}
                        your{" "}
                        <span className="text-[#1F6BFF]">ed-tech</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-5 max-w-2xl font-medium leading-relaxed text-[#6B7280] sm:text-lg"
                    >
                        A fully managed, white-label Learning Management System with custom domains,
                        branding, and AI automation—built for modern synapses.
                    </motion.p>

                    <div className="mt-6 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
                        
                            <button className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#1F6BFF] px-6 text-md font-medium text-white transition-all active:scale-95 sm:w-auto">
                                Book demo
                                <MoveRight className="h-4 w-4" />
                            </button>

                        <button className="text-xl font-medium text-[#515660] transition-colors hover:text-[#111827]">
                            View pricing
                        </button>
                    </div>
                </div>

                <div ref={imageRef} className="relative flex justify-center md:mt-20 md:h-[120vh]">
                    <motion.div
                        style={{
                            scale: shouldReduceMotion ? 1 : imageScale,
                            y: shouldReduceMotion ? 0 : imageY,
                        }}
                        className="origin-center will-change-transform transform-gpu md:sticky md:top-24"
                    >
                        <div className="mx-auto w-[88vw] max-w-275">
                            <div className="relative rounded-sm md:p-4">
                                <div className="overflow rounded-sm">
                                    <Image
                                        src="https://res.cloudinary.com/dyktjldc4/image/upload/v1765972188/Dashboard_oaiabu.jpg"
                                        alt="Synapses dashboard preview"
                                        width={1600}
                                        height={1000}
                                        priority
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
