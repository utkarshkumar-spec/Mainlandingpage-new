"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { quote: "Beautiful analytics. I can finally see where my students struggle.", name: "Elena Gomez", role: "CEO, Loreum" },
  { quote: "The best LMS interface I've used in years. Simple and fast.", name: "Alex Rivera", role: "Product Designer" },
  { quote: "Our student engagement increased by 40% after switching.", name: "Sarah Chen", role: "Head of Education" },
  { quote: "The AI course generator is like magic. Saved us weeks of work.", name: "James Wilson", role: "CTO" },
  { quote: "Minimalist design that doesn't get in the way of learning.", name: "Marcus Thorne", role: "Learning Director" },
  { quote: "Customer support is top-notch. They helped us migrate overnight.", name: "Sophie Moore", role: "Operations Manager" },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const ReviewCard = ({ quote, name, role }: { quote: string; name: string; role: string; }) => (
  // Fixed width for mobile to avoid giant cards
  <div className="mx-2 w-[280px] shrink-0 sm:w-[450px] md:w-[500px]">
    <div className="flex h-[200px] flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:h-full sm:p-8">
      <div>
        <div className="mb-3 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5" />
          ))}
        </div>
        <p className="line-clamp-3 text-[14px] font-medium leading-relaxed text-gray-700 sm:text-lg">
          "{quote}"
        </p>
      </div>
      
      <div className="mt-4 border-t border-gray-50 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white sm:h-12 sm:w-12">
            <span className="text-xs font-bold sm:text-base">{name.charAt(0)}</span>
          </div>
          <div>
            <div className="text-[13px] font-bold text-gray-900 sm:text-base">{name}</div>
            <div className="text-[11px] text-gray-500 sm:text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Tight vertical padding for mobile */}
      <div className="py-6 sm:py-20">
        <div className="mx-auto w-full px-4 text-center">
          
          {/* Header Section */}
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-3 flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600">
              <Image src="/mdi_heart.svg" alt="Heart" width={12} height={12} />
              <span>Wall of Love</span>
            </div>
            
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              See what all the talk is about
            </h2>
            
            {/* Added Description Heading as requested */}
            <p className="mx-auto max-w-[300px] text-[13px] leading-relaxed text-gray-500 sm:max-w-2xl sm:text-lg">
              Don't take our word for it. Here is what the community has to say about our platform.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative mt-4 flex w-full overflow-hidden py-2">
            <motion.div 
              className="flex" 
              animate={{ x: "-50%" }} 
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {duplicatedTestimonials.map((item, idx) => (
                <ReviewCard key={idx} {...item} />
              ))}
            </motion.div>
            
            {/* Side Blurs */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}