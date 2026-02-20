"use client";

import { motion } from "framer-motion";

// We create an array of placeholders and duplicate it to create a seamless infinite scrolling loop
const placeholders = [1, 2, 3, 4, 5, 6];
const duplicatedLogos = [...placeholders, ...placeholders];

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h3 className="text-center text-[15px] font-medium text-gray-500 mb-10">
          Trusted by fast-growing companies around the world
        </h3>
        
        {/* Marquee Container */}
        <div className="relative flex items-center">
          
          {/* Left White Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right White Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <motion.div
            className="flex gap-6 md:gap-10 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Change this to make it scroll faster or slower
            }}
          >
            {duplicatedLogos.map((item, index) => (
              <div
                key={index}
                // These classes match your gray placeholder boxes perfectly
                className="h-14 w-36 md:h-16 md:w-48 bg-gray-200/80 shrink-0"
              >
                {/* NOTE: When you have your actual logos, replace this div with:
                  <Image src={`/logos/logo-${item}.svg`} alt="Company Logo" width={150} height={50} className="object-contain" />
                */}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}