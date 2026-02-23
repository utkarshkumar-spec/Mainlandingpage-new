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
    <section className="mx-auto w-full max-w-[1362px] px-4 pb-24 sm:px-6 -mt-80 lg:px-8">
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3">
        {plans.map((plan, index) => {
          const isMiddle = index === 1;

          return (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[2rem] p-8 transition-transform duration-300 hover:-translate-y-1 lg:p-10 ${
                isMiddle
                  ? "bg-[#0055FF] text-white shadow-xl"
                  : "border border-gray-100 bg-white text-gray-900 shadow-sm"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-medium">{plan.name}</h3>
                {plan.isPopular && (
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-black">
                    Most popular
                  </span>
                )}
              </div>

              {/* Pricing */}
              <div className="mb-4 flex items-baseline">
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
                className={`mb-8 min-h-[48px] text-[15px] leading-relaxed ${isMiddle ? "text-blue-100" : "text-gray-500"}`}
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
                    // Gap fixed exactly to 10px as per Figma
                    <li key={i} className="flex items-start gap-[10px]">
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