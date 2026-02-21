"use client";

import { ArrowRight, Play, Plus, BookOpen, Settings, Sparkles, BarChart3, Users, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
    return (
      <>
        <section className=" ">
          <div className="flex flex-col items-center text-center pb-20">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#F7FAFE] border border-blue-200 text-blue-600 text-sm font-light mb-4">
              <Image
                src="/message_svg.svg"
                alt="Message"
                width={25}
                height={25}
              />
              <span className="font-light text-md">Doubts?</span>
            </div>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight mb-4">
              All your Questions, Answered.
            </h2>
            <p className="text-xl text-gray-500 max-w-xl">
              Don't take our word for it. Here is what the community has to say
              about our platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-30 max-w-7xl mx-auto items-start">
            <div
              className="w-full rounded-[32px] p-4 md:p-12"
              style={{
                background:
                  "radial-gradient(120% 120% at 100% 0%, rgba(207,228,255,0.75) 0%, rgba(255,255,255,0) 55%), radial-gradient(120% 120% at 0% 100%, rgba(214,234,255,0.8) 0%, rgba(255,255,255,0) 55%), #F7FAFF",
              }}
            >
              <div className="flex flex-col max-w-109.25 items-start gap-4">
                <h3 className="text-2xl md:text-2xl font-medium text-neutral-900 leading-tight">
                  FAQs can only do so much.
                  <br />
                  For the rest, there’s us.
                </h3>

                <p className="text-sm md:text-lg text-neutral-500 leading-relaxed">
                  Designed for ed-tech businesses that need full branding
                  control, scalable infrastructure, and modern learning
                  workflows.
                </p>

                <button className="mt-4 w-full rounded-full bg-[#0066FF] py-2 text-white text-sm font-medium inline-flex items-center justify-center gap-2">
                  <a
                    href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Demo
                  </a>
                  <span className="text-xl">›</span>
                </button>
              </div>
            </div>

            <div className="space-y-6 w-full max-w-4xl mx-auto">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full space-y-4"
              >
                {[
                  {
                    value: "item-1",
                    q: "Do we maintain platform security standards on Synappses?",
                    a: "We use secure infrastructure with encrypted connections, monitored access, and protected servers to keep student and institute data safe. Security and access control are built-in to protect content, accounts, and learning data at all times.",
                    color: "rgb(120, 100, 255)",
                  },
                  {
                    value: "item-2",
                    q: "What does the AI Insights actually analyze ?",
                    a: "It tracks engagement, progress, completion, drop-offs, and revenue performance across courses and batches. Insights are designed for decision-making helping improve outcomes, retention, and course performance.",
                    color: "rgb(100, 180, 255)",
                  },
                  {
                    value: "item-3",
                    q: "Do we get an admin panel to manage everything?",
                    a: "Yes. You’ll manage courses, cohorts, users, branding, payments, announcements, and analytics from a single admin panel.",
                    color: "rgb(255, 180, 100)",
                  },
                  {
                    value: "item-4",
                    q: "How do students receive updates?",
                    a: "Notifications are delivered inside the platform and via email under your branding. Students automatically receive alerts for tests, updates, and important activities. All emails and notifications are sent using your identity.",
                    color: "rgb(160, 120, 255)",
                  },
                  {
                    value: "item-5",
                    q: "Is Synappses fully white-label?",
                    a: "Yes. The LMS edtech platform runs entirely under your brand with no visible SaaS watermark. You can connect your custom domain, logo, and colors across the entire edtech.",
                    color: "rgb(120, 220, 180)",
                  },
                  {
                    value: "item-6",
                    q: "Is this suitable for scaling ed-tech businesses?",
                    a: "Yes. The platform is built to support growing teams with multiple courses, cohorts, monetization models, and enterprise-grade access control.",
                    color: "rgb(255, 120, 150)",
                  },
                ].map((faq) => (
                  <AccordionItem
                    key={faq.value}
                    value={faq.value}
                    className="group dark:bg-neutral-900/50 backdrop-blur-sm transition-all"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        {/* Minimalist dot indicator using your brand colors */}
                        {/* <div
                                                className="h-1.5 w-1.5 rounded-full transition-all group-data-[state=open]:scale-[2] group-data-[state=open]:shadow-[0_0_10px_currentcolor]"
                                                style={{ color: faq.color, backgroundColor: 'currentColor' }}
                                            /> */}
                        <span className="text-xl font-normal text-neutral-900 dark:text-neutral-100 tracking-tight transition-colors group-data-[state=open]:text-black dark:group-data-[state=open]:text-white">
                          {faq.q}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </>
    );
}
