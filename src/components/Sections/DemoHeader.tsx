"use client";

import { motion } from "framer-motion";

export default function DemoHeader() {
  return (
    <section className="relative w-full min-h-200 pt-32 pb-10 px-4 flex flex-col items-center text-center bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F7FF_100%)]">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-md border border-black/5 bg-white px-2 py-1.5 text-xs font-semibold shadow-sm"
        >
          <span className="rounded-sm bg-[#1863FF] px-2 py-1 text-[10px] text-white">Contact</span>
          <span className="text-gray-600">Book Demo</span>
        </motion.div>
      </div>
      
      <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tighter text-gray-900">
        Request a Demo
      </h1>

      <p className="mt-6 text-gray-500 max-w-2xl text-lg md:text-xl">
        Synappses grows with you. Choose the products your organization needs today.
      </p>
    </section>
  );
}