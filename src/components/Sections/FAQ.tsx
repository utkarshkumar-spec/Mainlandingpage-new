"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, ArrowRight, Sparkles } from "lucide-react";

// Upgraded, high-quality FAQs focusing on enterprise features, security, and scaling.
const faqs = [
  {
    value: "item-1",
    q: "Can I completely white-label the platform under my own brand?",
    a: "Absolutely. Synappses runs entirely under your brand with zero SaaS watermarks. You can connect your own custom domain, use your logos, brand colors, and all automated emails/notifications are sent using your sender identity.",
  },
  {
    value: "item-2",
    q: "How do you protect my video content from piracy and illegal downloads?",
    a: "We use enterprise-grade DRM (Digital Rights Management) encryption. This prevents illegal downloading, blocks screen-recording plugins, and features dynamic user-ID watermarking to ensure your premium content remains strictly within your platform.",
  },
  {
    value: "item-3",
    q: "Does the platform support Indian payment gateways like UPI?",
    a: "Yes! We integrate seamlessly with major gateways like Razorpay, Cashfree, and Stripe. This enables your students to pay via UPI, Credit/Debit cards, Net Banking, and EMI directly on your domain without any third-party redirects.",
  },
  {
    value: "item-4",
    q: "I have an existing LMS. Can you help migrate my courses and students?",
    a: "Yes, we offer seamless white-glove migration. Our team will assist in migrating your existing user databases, course structures, video assets, and student progress data securely with zero downtime for your active learners.",
  },
  {
    value: "item-5",
    q: "Do you provide custom-branded mobile apps for Android and iOS?",
    a: "Yes. Alongside the web platform, we can deploy native Android and iOS applications directly to your Google Play and Apple App Store accounts, giving your students a premium, on-the-go learning experience.",
  },
  {
    value: "item-6",
    q: "How does the AI analytics actually help my ed-tech business?",
    a: "Our AI engine tracks deep engagement metrics. It automatically flags 'at-risk' students who are dropping off, evaluates test performance patterns, and gives you revenue/completion forecasts. This allows you to intervene early and improve course completion rates.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 md:py-32">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl opacity-40">
        <div className="absolute top-0 h-[400px] w-full rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16 md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
            <MessageCircleQuestion className="h-4 w-4" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[56px]">
            All your questions, <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              answered clearly.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-500 sm:text-lg md:text-xl">
            Everything you need to know about launching, securing, and scaling
            your educational platform with Synappses.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column - CTA Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[#F7FAFF] p-8 shadow-xl shadow-blue-900/5 md:p-10">
              
              {/* Decorative background gradients */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <Sparkles className="h-7 w-7 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl">
                  FAQs can only do <br /> so much.
                </h3>

                <p className="text-base leading-relaxed text-slate-600">
                  For the rest, there is our team. Schedule a personalized walkthrough 
                  and let us show you exactly how Synappses fits your specific ed-tech model.
                </p>

                <a
                  href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-700  active:scale-95 sm:w-auto"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full space-y-4"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 transition-all duration-200 ease-in-out hover:border-blue-300  data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 sm:px-6"
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
      </div>
    </section>
  );
}