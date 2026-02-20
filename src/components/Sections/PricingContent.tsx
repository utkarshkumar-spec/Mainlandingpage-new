"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$10",
    period: "/monthly",
    description: "Perfect for developers building web agents and data workflows.",
    buttonText: "Book plan",
    isPopular: false,
    features: [
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Up to 5 seats for Reducto Studio",
      "Up to 5 seats for Reducto Studio",
    ],
  },
  {
    name: "Beginner",
    price: "$50",
    period: "/monthly",
    description: "Perfect for developers building web agents and data workflows.",
    buttonText: "Book plan",
    isPopular: true,
    features: [
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Up to 5 seats for Reducto Studio",
      "Up to 5 seats for Reducto Studio",
    ],
  },
  {
    name: "Enterprise",
    price: "$90",
    period: "/monthly",
    description: "Perfect for developers building web agents and data workflows.",
    buttonText: "Book plan",
    isPopular: false,
    features: [
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Parse API",
      "Up to 5 seats for Reducto Studio",
      "Up to 5 seats for Reducto Studio",
      "Up to 5 seats for Reducto Studio",
    ],
  },
];

export default function PricingContent() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto w-full">
      {/* Outer wrapper to create the unified card look */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        
        {plans.map((plan, index) => {
          const isMiddle = index === 1;

          return (
            <div
              key={plan.name}
              className={`p-8 lg:p-10 flex flex-col ${
                isMiddle ? "bg-[#0055FF] text-white" : "bg-white text-gray-900"
              }`}
            >
              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-medium">{plan.name}</h3>
                {plan.isPopular && (
                  <span className="bg-white text-black text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                    Most popular
                  </span>
                )}
              </div>

              {/* Pricing */}
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-medium tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`ml-1 text-sm ${
                    isMiddle ? "text-blue-200" : "text-gray-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-[15px] leading-relaxed mb-8 min-h-[48px] ${
                  isMiddle ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-full text-[15px] font-medium transition-colors duration-200 mb-10 ${
                  isMiddle
                    ? "bg-white text-black hover:bg-gray-50"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="flex-1">
                <p
                  className={`text-sm font-medium mb-5 ${
                    isMiddle ? "text-white" : "text-gray-900"
                  }`}
                >
                  Features
                </p>
                <ul className="space-y-4 text-[14px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {isMiddle ? (
                        // White circle with blue check for the middle card
                        <div className="shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#0055FF]" strokeWidth={3} />
                        </div>
                      ) : (
                        // Simple green check for the outer cards
                        <Check className="shrink-0 w-5 h-5 text-[#34C759] mt-0.5" strokeWidth={2.5} />
                      )}
                      <span
                        className={isMiddle ? "text-blue-50" : "text-gray-600"}
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