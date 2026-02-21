"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "item-1",
    q: "Do we maintain platform security standards on Synappses?",
    a: "We use secure infrastructure with encrypted connections, monitored access, and protected servers to keep student and institute data safe. Security and access control are built-in to protect content, accounts, and learning data at all times.",
  },
  {
    value: "item-2",
    q: "What does the AI Insights actually analyze?",
    a: "It tracks engagement, progress, completion, drop-offs, and revenue performance across courses and batches. Insights are designed for decision-making helping improve outcomes, retention, and course performance.",
  },
  {
    value: "item-3",
    q: "Do we get an admin panel to manage everything?",
    a: "Yes. You’ll manage courses, cohorts, users, branding, payments, announcements, and analytics from a single admin panel.",
  },
  {
    value: "item-4",
    q: "How do students receive updates?",
    a: "Notifications are delivered inside the platform and via email under your branding. Students automatically receive alerts for tests, updates, and important activities. All emails and notifications are sent using your identity.",
  },
  {
    value: "item-5",
    q: "Is Synappses fully white-label?",
    a: "Yes. The LMS edtech platform runs entirely under your brand with no visible SaaS watermark. You can connect your custom domain, logo, and colors across the entire edtech.",
  },
  {
    value: "item-6",
    q: "Is this suitable for scaling ed-tech businesses?",
    a: "Yes. The platform is built to support growing teams with multiple courses, cohorts, monetization models, and enterprise-grade access control.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center sm:mb-12 md:mb-16">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-blue-200 bg-[#F7FAFE] px-3 py-2 text-sm font-light text-blue-600">
            <Image src="/message_svg.svg" alt="Message" width={20} height={20} />
            <span className="text-sm font-light">Doubts?</span>
          </div>
          <h2 className="mb-4 text-3xl font-semibold leading-[1.12] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            All your Questions, Answered.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 md:text-xl">
            Don&apos;t take our word for it. Here is what the community has to say
            about our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div
            className="w-full rounded-[28px] p-5 sm:p-8 md:rounded-[32px] md:p-10"
            style={{
              background:
                "radial-gradient(120% 120% at 100% 0%, rgba(207,228,255,0.75) 0%, rgba(255,255,255,0) 55%), radial-gradient(120% 120% at 0% 100%, rgba(214,234,255,0.8) 0%, rgba(255,255,255,0) 55%), #F7FAFF",
            }}
          >
            <div className="flex max-w-xl flex-col items-start gap-4">
              <h3 className="text-xl font-medium leading-tight text-neutral-900 sm:text-2xl">
                FAQs can only do so much.
                <br />
                For the rest, there&apos;s us.
              </h3>

              <p className="text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7 md:text-lg">
                Designed for ed-tech businesses that need full branding control,
                scalable infrastructure, and modern learning workflows.
              </p>

              <a
                href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0057db] sm:w-auto"
              >
                Request Demo
                <span className="text-lg leading-none">›</span>
              </a>
            </div>
          </div>

          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full space-y-3 sm:space-y-4"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className="rounded-xl bg-white px-4 sm:px-5 !border-0"
                >
                  <AccordionTrigger className="py-4 text-left hover:no-underline sm:py-5">
                    <span className="text-base font-medium leading-6 tracking-tight text-neutral-900 sm:text-lg sm:leading-7">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-6 text-neutral-600 sm:pb-5 sm:text-base sm:leading-7">
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
