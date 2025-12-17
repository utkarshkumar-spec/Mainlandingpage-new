"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  { quote: "The best LMS interface I've used in years. Simple and fast.", name: "Alex Rivera", handle: "@alexdesign" },
  { quote: "Our student engagement increased by 40% after switching.", name: "Sarah Chen", handle: "@sarah_edu" },
  { quote: "The AI course generator is like magic. Saved us weeks of work.", name: "James Wilson", handle: "@jwilson_dev" },
  { quote: "Minimalist design that doesn't get in the way of learning.", name: "Elena Gomez", handle: "@elena_g" },
  { quote: "Finally, a platform that understands what teachers actually need.", name: "Marcus Thorne", handle: "@m_thorne" },
  { quote: "The API integrations are seamless. Highly recommended for devs.", name: "Lisa Wang", handle: "@lisaw_tech" },
  { quote: "Beautiful analytics. I can finally see where my students struggle.", name: "David Beck", handle: "@david_b" },
  { quote: "Customer support is top-notch. They helped us migrate overnight.", name: "Sophie Moore", handle: "@sophie_m" },
  { quote: "Perfect for scaling our internal training. Worth every penny.", name: "Tom Harris", handle: "@tom_h" },
];

// Split testimonials into 3 columns
const column1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const column2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
const column3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

const ReviewCard = ({ quote, name, handle }: { quote: string; name: string; handle: string }) => (
  <div className="mb-6 p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-xl hover:border-purple-500/50 transition-colors group">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-purple-500 text-purple-500" />
      ))}
    </div>
    <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-4 leading-relaxed">
      "{quote}"
    </p>
    <div className="flex flex-col">
      <span className="font-bold text-sm text-neutral-900 dark:text-white uppercase tracking-tighter">
        {name}
      </span>
      <span className="text-xs text-neutral-500 dark:text-neutral-500">
        {handle}
      </span>
    </div>
  </div>
);

const ScrollingColumn = ({ items, duration, reverse = false }: { items: typeof testimonials, duration: number, reverse?: boolean }) => (
  <div className="relative h-[600px] overflow-hidden">
    <motion.div
      className="flex flex-col"
      initial={{ y: reverse ? "-50%" : "0" }}
      animate={{ y: reverse ? "0" : "-50%" }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {items.map((item, idx) => (
        <ReviewCard key={idx} {...item} />
      ))}
    </motion.div>
  </div>
);

export default function Reviews() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <MessageSquare className="w-3 h-3" />
            <span>Wall of Love</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-4">
            Loved by 5,000+ creators.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg">
            Don't take our word for it. Here is what the community has to say about our platform.
          </p>
        </div>

        {/* 3-Column Vertical Grid with Masking */}
        <div className="relative max-w-6xl mx-auto h-[600px] overflow-hidden 
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 - Slow */}
            <ScrollingColumn items={column1} duration={25} />
            
            {/* Column 2 - Faster & Reverse */}
            <div className="hidden md:block">
               <ScrollingColumn items={column2} duration={35} reverse={true} />
            </div>

            {/* Column 3 - Medium */}
            <div className="hidden md:block">
               <ScrollingColumn items={column3} duration={30} />
            </div>
          </div>
        </div>

        {/* Floating Call to Action */}
        <div className="mt-12 flex justify-center">
            <button className="px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform shadow-2xl">
                Join the Community
            </button>
        </div>
      </div>
    </section>
  );
}