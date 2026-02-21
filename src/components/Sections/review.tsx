"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { 
    quote: "Beautiful analytics. I can finally see where my students struggle.", 
    name: "Elena Gomez", 
    role: "CEO, Loreum",
    company: "Loreum Inc."
  },
  { 
    quote: "The best LMS interface I've used in years. Simple and fast.", 
    name: "Alex Rivera", 
    role: "Product Designer",
    company: "Design Studio"
  },
  { 
    quote: "Our student engagement increased by 40% after switching.", 
    name: "Sarah Chen", 
    role: "Head of Education",
    company: "Tech Academy"
  },
  { 
    quote: "The AI course generator is like magic. Saved us weeks of work.", 
    name: "James Wilson", 
    role: "CTO",
    company: "EdTech Solutions"
  },
  { 
    quote: "Minimalist design that doesn't get in the way of learning.", 
    name: "Marcus Thorne", 
    role: "Learning Director",
    company: "SkillBridge"
  },
  { 
    quote: "Customer support is top-notch. They helped us migrate overnight.", 
    name: "Sophie Moore", 
    role: "Operations Manager",
    company: "Global Learning"
  },
];

// Create duplicated array for seamless scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials];

const ReviewCard = ({ quote, name, role, company }: { 
  quote: string; 
  name: string; 
  role: string;
  company: string;
}) => (
  <div className="mx-2 w-[84vw] max-w-[22rem] shrink-0 sm:mx-3 sm:w-[72vw] sm:max-w-[28rem] md:mx-6 md:w-[34rem] md:max-w-none">
    <div className="h-full min-h-[18rem] rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 sm:min-h-[22rem] sm:p-8 md:min-h-[25.75rem] md:p-12">
      {/* Stars */}
      <div className="mb-5 flex gap-1.5 sm:mb-7 sm:gap-2 md:mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5 md:h-7 md:w-7" />
        ))}
      </div>
      
      {/* Quote Text */}
      <p className="mb-6 text-base font-medium italic leading-7 text-gray-800 sm:mb-8 sm:text-xl sm:leading-8 md:mb-10 md:text-2xl md:leading-relaxed">
        "{quote}"
      </p>
      
      {/* Author Info */}
      <div className="border-t border-gray-100 pt-5 sm:pt-6 md:pt-8">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Avatar Placeholder */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 sm:h-12 sm:w-12 md:h-16 md:w-16">
            <span className="text-base font-bold text-white sm:text-xl md:text-2xl">
              {name.charAt(0)}
            </span>
          </div>
          
          <div>
            <div className="text-base font-bold text-gray-900 sm:text-lg md:text-xl">
              {name}
            </div>
            <div className="text-sm text-gray-600 sm:text-base md:text-lg">
              {role}
            </div>
            <div className="text-xs text-gray-500 sm:text-sm md:text-base">
              {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F7FAFE 0%, #FFFFFF 100%)"
      }}
    >
      <div className="w-full py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 flex w-full flex-col items-center text-center sm:mb-12 md:mb-14">
            <div className="mb-4 flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-light text-blue-600 sm:py-3">
              <Image
                src="/mdi_heart.svg"
                alt="Heart"
                width={20}
                height={20}
              />
              <span>Wall of Love</span>
            </div>
            
            <h2 className="mb-4 text-3xl font-semibold leading-[1.12] tracking-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              See what all the talk is about
            </h2>
            
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 md:text-xl">
              Don't take our word for it. Here is what the community has to say about our platform.
            </p>
          </div>

          {/* Single Row Horizontal Marquee */}
          <div className="relative w-full overflow-hidden py-6 sm:py-8 md:py-10">
            {/* Gradient Overlays */}
            <div 
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 sm:w-20 md:w-48"
              style={{
                background: "linear-gradient(90deg, #F7FAFE 0%, transparent 100%)"
              }}
            />
            <div 
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 sm:w-20 md:w-48"
              style={{
                background: "linear-gradient(270deg, #F7FAFE 0%, transparent 100%)"
              }}
            />
            
            {/* Marquee Track */}
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedTestimonials.map((item, idx) => (
                <ReviewCard key={idx} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
