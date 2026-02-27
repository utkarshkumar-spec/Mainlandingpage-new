"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MessageCircleQuestion, Sparkles } from "lucide-react";

const faqs = [
  {
    value: "item-1",
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade anytime, and billing adjusts based on your active plan cycle.",
  },
  {
    value: "item-2",
    q: "Do annual plans include a discount?",
    a: "Yes. Annual billing includes a built-in discount compared to monthly pricing.",
  },
  {
    value: "item-3",
    q: "Do you support custom enterprise contracts?",
    a: "Yes. Enterprise plans can include custom SLAs, procurement terms, and security/legal reviews.",
  },
  {
    value: "item-4",
    q: "Can I migrate from another LMS?",
    a: "Yes. We can help migrate your course content, learners, and key data with minimal downtime.",
  },
  {
    value: "item-5",
    q: "Do you offer onboarding and support?",
    a: "Yes. All plans include onboarding guidance, and higher tiers include priority support.",
  },
  {
    value: "item-6",
    q: "Can I request a live product walkthrough?",
    a: "Yes. Book a demo and we will walk you through setup, branding, and growth workflows.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
          <MessageCircleQuestion className="h-4 w-4" />
          <span>Pricing FAQs</span>
        </div>
        <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
          Questions about plans, <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            billing, and support.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[#F7FAFF] p-8 shadow-xl shadow-blue-900/5 md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />

            <div className="relative z-10 flex flex-col items-start gap-6">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Sparkles className="h-7 w-7 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
                Need help choosing <br /> the right plan?
              </h3>

              <p className="text-base leading-relaxed text-slate-600">
                Talk to our team and get recommendations based on your learner volume,
                content strategy, and growth goals.
              </p>

              <a
                href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="group rounded-2xl border border-slate-200 bg-white px-5 transition-all duration-200 ease-in-out hover:border-blue-300 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 sm:px-6"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline sm:py-6">
                  <span className="text-base font-semibold leading-relaxed tracking-tight text-neutral-900 group-data-[state=open]:text-blue-700 sm:text-lg">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-slate-600 sm:text-[17px]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
