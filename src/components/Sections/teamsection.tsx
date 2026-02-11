"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";
const teamMembers = [
    {
        name: "Yash Rajan Shukla",
        role: "Founder",
        image: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1766233130/Screenshot_2025-12-20_at_17-47-00_4_Instagram_pwa6u5.png", // Replace with real images
        x: "https://x.com",
        linkedin: "https://linkedin.com",
        accent: "#FF6496", // Pink
    },
    {
        name: "Bharat Goel",
        role: "Product Manager",
        image: "https://res.cloudinary.com/dyktjldc4/image/upload/v1767024115/IMG-20251226-WA0001_lnkyuy.jpg",
        x: "https://x.com",
        linkedin: "https://linkedin.com",
        accent: "#6496FF", // Blue
    },
    {
        name: "Ram Bhardwajj",
        role: "Founding Engineer",
        image: "https://res.cloudinary.com/dyktjldc4/image/upload/v1767024112/IMG_5558_vc14rp.jpg",
        x: "https://x.com",
        linkedin: "https://linkedin.com",
        accent: "#6496FF", // Blue
    },
    {
        name: "Bhanu Pratap Singh",
        role: "Founding Engineer",
        image: "https://res.cloudinary.com/dhvkjanwa/image/upload/v1766233109/Photoroom-20250104_220607_oavlp8.png",
        x: "https://x.com",
        linkedin: "https://linkedin.com",
        accent: "#FFC864", // Gold
    },
];
export default function TeamSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-6"
                    >
                        <Users2 className="w-3 h-3" />
                        <span>Our Team</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-4">
                        Meet the minds behind {" "}
                        <span className="text-xl font-bold tracking-tighter dark:text-white uppercase"></span>
                        <span className="bg-clip-text font-bold tracking-tighter dark:text-white text-neutral-900 ">
                            synappses
                        </span>
                    </h2>
                    <p className="max-w-xl text-neutral-500 dark:text-neutral-400">
                        A small team of engineers and creators building the next generation of digital education.
                    </p>
                </div>

                {/* Dynamic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* The Card */}
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-md p-6 transition-all group-hover:border-opacity-50"
                                style={{
                                    // subtle glow on hover matching member's accent
                                    boxShadow: `0 20px 40px -20px ${member.accent}33`
                                }}>

                                {/* Image Container */}
                                <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                                    <div
                                        className="absolute inset-0 rounded-full opacity-20 blur-2xl transition-transform group-hover:scale-125"
                                        style={{ backgroundColor: member.accent }}
                                    />
                                    <div className="relative rounded-full border-2 border-white dark:border-neutral-800 overflow-hidden w-full h-full bg-neutral-100 dark:bg-neutral-800">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500 mb-6">
                                        {member.role}
                                    </p>

                                    {/* Social Icons - Animated Reveal */}
                                    <div className="flex justify-center gap-4">
                                        <a
                                            href={member.x}
                                            target="_blank"
                                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all"
                                            style={{ border: `1px solid transparent` }}
                                            onMouseOver={(e) => e.currentTarget.style.borderColor = member.accent}
                                            onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all"
                                            style={{ border: `1px solid transparent` }}
                                            onMouseOver={(e) => e.currentTarget.style.borderColor = member.accent}
                                            onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Background Accent Blur (behind the card) */}
                            <div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
                                style={{ backgroundColor: member.accent }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}