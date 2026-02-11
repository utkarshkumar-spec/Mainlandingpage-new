"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
  <div 
    className="flex-shrink-0 mx-6"
    style={{ width: "873px", height: "513px" }}
  >
    <div className="w-full h-full p-12 rounded-xl border border-gray-200 bg-white transition-all duration-300 group">
      {/* Stars */}
      <div className="flex gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Large Quote Mark */}
      <div className="text-7xl text-blue-100 mb-8">"</div>
      
      {/* Quote Text */}
      <p className="text-2xl text-gray-800 font-medium mb-10 leading-relaxed italic">
        "{quote}"
      </p>
      
      {/* Author Info */}
      <div className="border-t border-gray-100 pt-8">
        <div className="flex items-center gap-6">
          {/* Avatar Placeholder */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {name.charAt(0)}
            </span>
          </div>
          
          <div>
            <div className="font-bold text-xl text-gray-900">
              {name}
            </div>
            <div className="text-lg text-gray-600">
              {role}
            </div>
            <div className="text-gray-500">
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
      className="relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(180deg, #F7FAFE 0%, #FFFFFF 100%)"
      }}
    >
      <div className="py-32 w-full">
        <div className="px-4 w-full">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14 w-full">
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white border border-blue-200 text-blue-600 text-sm font-light mb-4">
              <Image
                src="/mdi_heart.svg"
                alt="Heart"
                width={20}
                height={20}
              />
              <span>Wall of Love</span>
            </div>
            
            <h2 className="text-5xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
              See what all the talk is about
            </h2>
            
            <p className="text-xl text-gray-500 max-w-100">
              Don't take our word for it. Here is what the community has to say about our platform.
            </p>
          </div>

          {/* Single Row Horizontal Marquee */}
          <div className="relative overflow-hidden py-10 w-full">
            {/* Gradient Overlays */}
            <div 
              className="absolute left-0 top-0 w-48 h-full z-10 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #F7FAFE 0%, transparent 100%)"
              }}
            />
            <div 
              className="absolute right-0 top-0 w-48 h-full z-10 pointer-events-none"
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


          {/* Arrows */}
          <div className="mt-16 flex justify-center items-center gap-6">
            <button
              className="w-16 h-16 rounded-full bg-blue-50/70 text-gray-700 flex items-center justify-center hover:bg-blue-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="w-16 h-16 rounded-full bg-blue-50/70 text-gray-700 flex items-center justify-center hover:bg-blue-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Call to Action - NO SHADOW */}
          {/* <div className="mt-20 text-center">
            <button className="px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold hover:scale-105 transition-transform">
              Join 5,000+ Happy Creators
            </button>
            
            <p className="mt-8 text-gray-500 text-lg">
              Average rating: 4.9/5 from 1,200+ reviews
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
