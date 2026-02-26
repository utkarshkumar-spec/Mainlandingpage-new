"use client";

import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: { monthly: "$49", annual: "$39" },
    period: "/mo",
    description: "For individuals and small teams just getting started.",
    buttonText: "Start with Basic",
    isPopular: false,
    features: [
      "Up to 500 active learners",
      "Basic drag & drop course builder",
      "Standard payment gateways (Stripe/Razorpay)",
      "Standard email support",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Pro",
    price: { monthly: "$149", annual: "$119" },
    period: "/mo",
    description: "For rapidly growing teams with advanced needs.",
    buttonText: "Get Started with Pro",
    isPopular: true,
    features: [
      "Up to 5,000 active learners",
      "Custom domain & full white-labeling",
      "Enterprise DRM video protection",
      "AI-powered insights & risk flagging",
      "Advanced test scheduling cohorts",
      "Priority 24/7 chat & email support",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    period: "",
    description: "For large-scale usage or custom requirements.",
    buttonText: "Contact Sales",
    isPopular: false,
    features: [
      "Unlimited active learners",
      "Custom native mobile apps (iOS & Android)",
      "Dedicated account manager",
      "White-glove data migration",
      "Custom API integrations",
      "99.9% SLA uptime guarantee",
    ],
  },
];

export default function PricingContent() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 font-manrope">
      {/* Radial Gradient Background */}

      {/* Header Section */}
      <div className="pt-62 pb-16 px-4 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span>Flexible Pricing</span>
        </div>
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
        Own your learning platform <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          At a price that makes sense.
          </span>
        </h1>

        <p className="mt-6 font-medium text-slate-500 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
          Simple, transparent pricing designed for ed-tech. Whether you&apos;re launching 
          your first cohort or scaling to thousands of learners, find the perfect plan to power your growth.
        </p>

        {/* Billing Toggle Switch */}
        <div className="mt-10 inline-flex items-center p-1.5 bg-neutral-900 rounded-full relative shadow-xl">
          {/* Monthly Button */}
          <button
            onClick={() => setIsAnnual(false)}
            className={`relative z-10 px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${!isAnnual ? "text-neutral-900" : "text-neutral-400 hover:text-white"
              }`}
          >
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
            className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${isAnnual ? "text-neutral-900" : "text-neutral-400 hover:text-white"
              }`}
          >
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
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 ${isAnnual
                ? "bg-green-100 text-green-700"
                : "bg-neutral-800 text-neutral-300"
                }`}
            >
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const isMiddle = index === 1;
          const displayPrice = isAnnual ? `$${parseInt(plan.price.replace('$', '')) * 0.8}` : plan.price;

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

              {/* Pricing */}
              <div className="mb-2 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">
                  {isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                {plan.period && (
                  <span
                    className={`ml-1 text-base font-medium ${isMiddle ? "text-blue-200" : "text-slate-500"
                      }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Billed annually text */}
              <div className={`h-5 text-sm font-medium ${isMiddle ? "text-blue-200" : "text-slate-400"}`}>
                {isAnnual && plan.price.annual !== "Custom" ? "Billed annually" : ""}
              </div>

              {/* Description */}
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