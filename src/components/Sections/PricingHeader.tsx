"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingHeader() {
  // Defaulting to annual billing based on your design
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="pt-24 pb-12 px-4 flex flex-col items-center text-center">
      {/* Headings */}
      <h1 className="text-[64px] md:text-[64px] lg:text-[64px] font-semibold tracking-tighter text-gray-900 leading-16">
        Plans designed to match <br className="hidden md:block" />
        your <span className="text-[#1863FF]">learning goals.</span>
      </h1>

      <p className="mt-6 font-medium text-gray-800 max-w-2xl mx-auto text-[20px] leading-tight">
        Synappses grows with you. Choose the products your{" "}
        <br className="hidden sm:block" />
        organization needs today, with the flexibility to add on later.
      </p>

      {/* Billing Toggle Switch */}
      <div className="mt-10 inline-flex items-center p-1.5 bg-black rounded-full relative shadow-lg">
        {/* Monthly Button */}
        <button
          onClick={() => setIsAnnual(false)}
          className={`relative z-10 px-4 py-4 rounded-full text-[15px] font-medium transition-colors duration-300 ${
            !isAnnual ? "text-black" : "text-gray-300 hover:text-white"
          }`}
        >
          {/* Animated White Pill Background */}
          {!isAnnual && (
            <motion.div
              layoutId="billing-toggle"
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          Monthly Billing
        </button>

        {/* Annual Button */}
        <button
          onClick={() => setIsAnnual(true)}
          className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-300 ${
            isAnnual ? "text-black" : "text-gray-300 hover:text-white"
          }`}
        >
          {/* Animated White Pill Background */}
          {isAnnual && (
            <motion.div
              layoutId="billing-toggle"
              className="absolute inset-0 bg-white rounded-full -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          Annual Billing
          {/* Save 20% Badge */}
          <span
            className={`px-2 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-colors duration-300 ${
              isAnnual
                ? "bg-[#0d993032] text-[#0D992F] b-"
                : "bg-white/10 text-gray-300"
            }`}
          >
            Save 20%
          </span>
        </button>
      </div>
    </section>
  );
}