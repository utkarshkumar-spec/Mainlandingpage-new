"use client";

import { motion } from "framer-motion";

// We create an array of placeholders and duplicate it to create a seamless infinite scrolling loop
const placeholders = [1, 2, 3, 4, 5, 6];
const duplicatedLogos = [...placeholders, ...placeholders];

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      {/* Updated max-width to exactly 1362px as per Figma */}
      <div className="mx-auto max-w-[1362px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h3 className="mb-10 text-center text-[15px] font-medium text-gray-500">
          Trusted by fast-growing companies around the world
        </h3>
        
        {/* Marquee Container */}
        <div className="relative flex items-center">
          
          {/* Left White Gradient Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-40" />
          
          {/* Right White Gradient Fade */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-40" />

          {/* Scrolling Track */}
          <motion.div
            // Updated gap to exactly 24px
            className="flex w-max gap-[24px]"
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
                // Updated height to 106px and calculated width (207px) to fit perfectly
                className="h-[106px] w-[207px] shrink-0 bg-gray-200/80"
              >
                {/* NOTE: When you have your actual logos, replace this div with:
                  <Image src={`/logos/logo-${item}.svg`} alt="Company Logo" width={207} height={106} className="object-contain" />
                */}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}