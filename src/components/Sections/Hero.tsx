"use client";

import { ArrowRight, Sparkles, MoveRight, Zap, PhoneCall, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FullNavbar from "../ui/navbar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NoiseBackground } from "../ui/noise-background";
import { FlipWords } from "../ui/flip-words";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function HeroSectionOne() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const words = ["Build", "Scale", "Launch", "Manage"];
    const brandColors = [
        "rgb(255, 100, 150)",
        "rgb(100, 150, 255)",
        "rgb(255, 200, 100)"
    ];

    const brandGradient = `linear-gradient(to right, ${brandColors.join(", ")})`;

    return (
        // Added overflow-x-clip to prevent horizontal scrollbars while the image bleeds out
        <div className="relative w-full flex flex-col items-center overflow-x-clip">
            <main className=" w-full py-6 mx-auto px-4 md:px-20 pt-20 md:pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT COLUMN: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start text-left space-y-8 z-20"
                    >
                        {/* 1. Minimalist Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md cursor-pointer hover:border-[#6496FF]/50 transition-colors"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-[#FF6496]" />
                            <span className="text-xs w-full font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                                New: AI Course Generation
                            </span>
                        </motion.div>

                        {/* 2. Main Heading */}
                        <div className="space-y-6 md:grid  hidden w-full">
                            <h1 className="text-5xl  sm:text-6xl  md:text-7xl font-bold tracking-tighter leading-[1.05] text-neutral-900 dark:text-white">
                                Everything You Need <br />    To  {" "}
                                <FlipWords words={words} className="px-0 ml-0" />
                                Your {" "}
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
                            <p className="text-lg w-2xl text-start md:text-xl text-neutral-500 dark:text-neutral-400  leading-relaxed">
                                A fully managed, white-label Learning Management System with custom domains, branding, and AI automation—built for modern synapses.
                            </p>
                        </div>
                          {/* 2. Main Heading */}
                        <div className="space-y-6  md:hidden flex-col w-full">
                          
                             <h1 className="text-5xl  text-center sm:text-6xl  md:text-7xl font-bold tracking-tighter leading-[1.05] text-neutral-900 dark:text-white">
                                Everything You Need     To  {" "}
                                <FlipWords words={words} className="text-[#6496FF] dark:text-[#6496FF] px-0 ml-0" />
                                Your {" "}
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

                            <p className="text-lg text-center md:text-xl text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
                                A fully managed, white-label Learning Management System with custom domains, branding, and AI automation—built for modern synapses.
                            </p>
                        </div>

                        {/* 3. CTA */}
                        <div className="flex flex-col w-full sm:flex-row items-center gap-6 pt-4">
                            <NoiseBackground
                                containerClassName="md:w-fit  p-[2px] w-full rounded-full shadow-[0_0_40px_-10px_rgba(100,150,255,0.3)]"
                                gradientColors={brandColors}
                            >
                                <button className="flex items-center w-full justify-center gap-2 h-14 px-10 cursor-pointer rounded-full bg-white dark:bg-black text-black dark:text-white font-bold transition-all active:scale-95">
                                    Book a Demo
                                    <MoveRight className="w-4 h-4" />
                                </button>
                            </NoiseBackground>

                            <button className="text-sm font-bold text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                View Pricing &rarr;
                            </button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className={cn(
                                "relative w-full max-w-xl mt-14 overflow-hidden rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl p-10 shadow-2xl",

                            )}
                        >
                            <div className="flex flex-col items-center gap-8 relative z-10">
                                {/* Header Section */}
                                <div className="flex w-full flex-col items-start gap-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16 border-2 border-white dark:border-neutral-800 shadow-xl">
                                            <AvatarImage src="https://res.cloudinary.com/dyktjldc4/image/upload/v1767024699/Screenshot_2025-12-26_at_16-50-17_1_Instagram_zgkzbt.png" alt="Yash Rajan" />
                                            <AvatarFallback>YS</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <h2 className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white">Yash Rajan Shukla</h2>
                                            <span className="text-xs font-bold text-neutral-900  dark:text-white uppercase tracking-widest">Founder</span>
                                        </div>
                                    </div>
                                </div>



                                {/* Title Section */}
                                <div className="w-full space-y-6 text-left">
                                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter text-neutral-900 dark:text-white">
                                        Book a 30-min <br />
                                        <span className="text-[#6496FF]">Discovery</span> Demo
                                    </h1>

                                    <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                                        Let's discuss how Synapses can white-label your knowledge and scale your ed-tech business globally.
                                    </p>

                                    <NoiseBackground
                                        containerClassName="w-full p-[2px] rounded-full shadow-[0_0_40px_-10px_rgba(100,150,255,0.3)]"
                                        gradientColors={brandColors}
                                    >
                                        <button className="flex items-center justify-center gap-2 w-full h-14 px-10 cursor-pointer rounded-full bg-white dark:bg-black text-black dark:text-white font-bold transition-all active:scale-95">
                                            Book a Demo
                                            <MoveRight className="w-4 h-4" />
                                        </button>
                                    </NoiseBackground>
                                </div>

                                {/* Footer Section */}
                                <div className="w-full pt-4 border-t border-black/5 dark:border-white/5 space-y-2 text-left">
                                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Direct Email</p>
                                    <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-neutral-900 dark:text-white group cursor-pointer">
                                        <Mail className="w-4 h-4 text-[#FF6496] group-hover:rotate-12 transition-transform" />
                                        <span>hello@synapses.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Background Decorative Glow */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#6496FF]/10 blur-[80px] rounded-full -z-10" />
                        </motion.div>
                    </motion.div>
                    {/* RIGHT COLUMN: Dashboard Bleed Effect - Position Lower */}
                    <div className="hidden md:relative w-full h-full min-h-[400px] lg:min-h-[600px] md:flex items-start pt-14"> {/* Changed to items-start and added pt-12 */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                            className="relative lg:absolute lg:left-0 w-full lg:w-[140%] xl:w-[160%] translate-y-20"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -inset-10 bg-gradient-to-r from-[#FF6496]/20 via-[#6496FF]/30 to-[#FFC864]/20 blur-[100px] opacity-60 -z-10" />

                            {/* The "Glass" Dashboard Frame */}
                            <div className="relative rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/5 dark:bg-neutral-900/50 p-2 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-800">
                                    <img
                                        src="https://res.cloudinary.com/dyktjldc4/image/upload/v1765972188/Dashboard_oaiabu.jpg"
                                        alt="Synapses Dashboard Preview"
                                        className={cn(
                                            "w-full h-auto transition-all duration-700 hover:scale-[1.02]",
                                             "opacity-100" 
                                        )}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}