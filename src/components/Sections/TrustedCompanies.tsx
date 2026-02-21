"use client";

import { motion } from "framer-motion";

// We create an array of placeholders and duplicate it to create a seamless infinite scrolling loop
const placeholders = [1, 2, 3, 4, 5, 6];
const duplicatedLogos = [...placeholders, ...placeholders];

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-12">
      {/* Updated max-width to exactly 1362px as per Figma */}
      <div className="mx-auto max-w-[1362px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h3 className="mb-10 text-center text-[15px] font-medium text-gray-500">
          Trusted by fast-growing companies around the world
        </h3>
        
        {/* Marquee Container with CSS Mask for perfect transparent fading edges */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          {/* Scrolling Track */}
          <motion.div
            // Updated gap to exactly 24px
            className="flex w-max gap-[24px] pr-[24px]"
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