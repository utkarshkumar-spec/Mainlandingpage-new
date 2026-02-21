"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy content matching your Figma design
const pricingFaqs = [
  {
    question: "Why would i use this?",
    answer: "Synappses provides a streamlined, all-in-one platform for managing courses, tracking progress, and engaging with your audience effectively.",
  },
  {
    question: "How is it different from other AI design generation tools?",
    answer: "Unlike other tools, we focus specifically on LMS integrations, ensuring that all generated content is perfectly formatted for educational platforms.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer: "We offer unmatched customization, a seamless branded mobile app experience, and intuitive analytics that actually help you grow.",
  },
  {
    question: "Why would i use this?",
    answer: "It saves time, reduces administrative overhead, and provides a much better learning experience for your students.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer: "Our platform is built from the ground up for modern creators, combining community features with robust course delivery.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer: "We pride ourselves on our 24/7 dedicated support team and our constant rollout of community-requested features.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer: "Because it simply works. No complicated setups, no hidden fees, just everything you need to succeed.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer: "Join thousands of other successful creators who have already made the switch and scaled their businesses.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col lg:flex-row lg:gap-24 gap-12">
        
        {/* Left Column: Title & Support Link */}
        <div className="lg:w-1/3 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <div className="mt-8 md:mt-12">
            <p className="text-sm font-semibold text-gray-900">
              Can't find the answer here?
            </p>
            <a 
              href="#contact" 
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-4 mt-1 inline-block"
            >
              Contact support
            </a>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:w-2/3 flex flex-col">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-200 last:border-none"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                >
                  {/* UPDATED: Applied Figma typography settings here */}
                  <span className="text-[20px] leading-none tracking-[-0.04em] font-medium text-black pr-8">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-gray-400 group-hover:text-gray-600 shrink-0"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                {/* Animated Dropdown Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray-500 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}