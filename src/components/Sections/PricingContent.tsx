"use client";

import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 10,
    buttonText: "Start with Starter",
    description: "Perfect for developers building web agents and data workflows.",
    features: [
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Custom workflows",
      "Email support",
    ],
  },
  {
    name: "Beginner",
    monthlyPrice: 50,
    buttonText: "Get Started with Beginner",
    isPopular: true,
    description: "Perfect for developers building web agents and data workflows.",
    features: [
      "Everything in Starter",
      "Up to 50 seats for Reducto Studio",
      "Priority processing",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 90,
    buttonText: "Contact Sales",
    description: "Perfect for developers building web agents and data workflows.",
    features: [
      "Everything in Beginner",
      "Unlimited seats",
      "Dedicated account manager",
      "Custom SLAs and security reviews",
    ],
  },
];

export default function PricingContent() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative mx-auto -mt-28 w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 font-manrope">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const isMiddle = index === 1;
          const displayPrice = isAnnual
            ? Math.round(plan.monthlyPrice * 0.8)
            : plan.monthlyPrice;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 lg:p-10 ${isMiddle
                ? "bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.5)] border-0 scale-100 md:scale-105 z-10"
                : "border border-slate-200 bg-white text-neutral-900 shadow-lg shadow-slate-200/40"
                }`}
            >
              {/* Plan Header */}
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className={`text-xl font-bold ${isMiddle ? "text-white" : "text-neutral-900"}`}>
                  {plan.name}
                </h3>
                {plan.isPopular && (
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase border border-white/20">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mb-4 flex items-baseline">
                <span className="text-5xl font-medium tracking-tight">
                  ${displayPrice}
                </span>
                <span
                  className={`ml-1 text-sm ${isMiddle ? "text-blue-200" : "text-gray-400"}`}
                >
                  /mo
                </span>
              </div>
              <p
                className={`mb-2 text-sm ${isMiddle ? "text-blue-200" : "text-slate-500"}`}
              >
                {isAnnual ? "Billed annually" : "Billed monthly"}
              </p>

              <p
                className={`my-6 min-h-[48px] text-[15px] leading-relaxed ${isMiddle ? "text-blue-100" : "text-slate-600"}`}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-full text-[15px] font-bold transition-all duration-200 mb-8 ${isMiddle
                  ? "bg-white text-blue-700 hover:bg-slate-50 hover:shadow-lg active:scale-95"
                  : "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-lg active:scale-95"
                  }`}
              >
                {plan.buttonText}
              </button>

              {/* Divider */}
              <div className={`w-full h-px mb-8 ${isMiddle ? "bg-white/15" : "bg-slate-100"}`}></div>

              {/* Features List */}
              <div className="flex-1">
                <p
                  className={`text-sm font-bold tracking-wide uppercase mb-6 ${isMiddle ? "text-white" : "text-neutral-900"
                    }`}
                >
                  What&apos;s included
                </p>
                <ul className="space-y-4 text-[15px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {isMiddle ? (
                        <div className="shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                        </div>
                      )}
                      <span
                        className={`font-medium leading-snug ${isMiddle ? "text-blue-50" : "text-slate-600"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
