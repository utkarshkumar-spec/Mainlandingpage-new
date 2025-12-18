"use client";

import { ArrowRight, Sparkles, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import FullNavbar from "../ui/navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NoiseBackground } from "../ui/noise-background";
import { FlipWords } from "../ui/flip-words";

export default function HeroSectionOne() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const words = ["build", "scale", "launch", "manage"];
    const brandColors = [
        "rgb(255, 100, 150)",
        "rgb(100, 150, 255)",
        "rgb(255, 200, 100)"
    ];

    // Your specific Brand Colors
    const brandGradient = `linear-gradient(to right, ${brandColors.join(", ")})`;

    return (
        <div className="relative w-full flex flex-col items-center">
            <main className="container mx-auto px-4 pt-16 md:pt-32 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10"
                >
                    {/* 1. Minimalist Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md cursor-pointer hover:border-[#6496FF]/50 transition-colors"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#FF6496]" />
                        <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                            New: AI Course Generation
                        </span>
                        <div className="h-4 w-[1px] bg-neutral-300 dark:bg-neutral-700 mx-1" />
                        <span className="text-xs font-medium flex items-center gap-1 text-neutral-900 dark:text-white">
                            Try it now <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </motion.div>

                    {/* 2. Main Heading */}
                    <div className="space-y-6">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-neutral-900 dark:text-white">
                            Everything you need to  <br /> <FlipWords words={words} />your <span></span>
                            <motion.span
                                style={{
                                    backgroundImage: brandGradient,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundSize: "200% auto"
                                }}
                                animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                Ed-Tech
                            </motion.span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            A fully managed, white-label Learning Management System with custom domains, branding, and no watermarks—built for modern ed-tech businesses.
                        </p>
                    </div>

                    {/* 3. CTA with your NoiseBackground */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <NoiseBackground
                            containerClassName="w-fit p-[2px] rounded-full mx-auto"
                            gradientColors={[
                                "rgb(255, 100, 150)",
                                "rgb(100, 150, 255)",
                                "rgb(255, 200, 100)",
                            ]}
                        >
                            <button className="flex items-center gap-2 h-12 px-8 cursor-pointer rounded-full bg-white dark:bg-black text-black dark:text-white font-bold transition-all active:scale-95 shadow-xl">
                                Book a Demo &rarr;
                            </button>
                        </NoiseBackground>


                    </div>
                </motion.div>

                {/* 4. Visual Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 relative mx-auto max-w-6xl px-4"
                >
                    {/* Subtle Glow behind the image matching your colors */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6496]/20 via-[#6496FF]/20 to-[#FFC864]/20 blur-3xl opacity-50 -z-10" />

                    <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-2 backdrop-blur-sm shadow-2xl">
                        <div className="overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-800">

                            <img
                                src="https://res.cloudinary.com/dyktjldc4/image/upload/v1765972188/Dashboard_oaiabu.jpg"
                                alt="LMS Dashboard Preview"
                                className={cn(
                                    "w-full h-auto transition-all duration-700 hover:scale-[1.01]",
                                )}
                            />
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}