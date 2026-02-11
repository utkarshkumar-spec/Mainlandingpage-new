"use client";

import { ArrowRight, Play, Plus, BookOpen, Settings, Sparkles, BarChart3, Users, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
    return (
        <>

            <section className=" ">
                <div className="flex flex-col items-center text-center pb-18.5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-blue-200 text-blue-600 text-sm font-light mb-4">
                        <Image src="/message_svg.svg" alt="Message" width={25} height={25} />
                        <span className="font-light text-md">Doubts?</span>
                    </div>
                    <h2 className="text-5xl font-medium leading-tight">All Your Questions, Answered.</h2>
                    <p className="text-xl text-gray-500 max-w-2xl">Don't take our word for it. Here is what the community has to say about our platform.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-30 max-w-6xl mx-auto items-start">
                    <div
                        className="w-full rounded-[32px] p-4 md:p-12 shadow-[0_30px_60px_rgba(15,23,42,0.08)]"
                        style={{
                            background:
                                "radial-gradient(120% 120% at 100% 0%, rgba(207,228,255,0.75) 0%, rgba(255,255,255,0) 55%), radial-gradient(120% 120% at 0% 100%, rgba(214,234,255,0.8) 0%, rgba(255,255,255,0) 55%), #F7FAFF",
                        }}
                    >
                        <div className="flex flex-col items-start gap-4">
                            <h3 className="text-2xl md:text-2xl font-medium text-neutral-900 leading-tight">
                                FAQs can only do so much.
                                <br />
                                For the rest, there’s us.
                            </h3>

                            <p className="text-sm md:text-lg text-neutral-500 leading-relaxed">
                                Designed for ed-tech businesses that need full branding control,
                                scalable infrastructure, and modern learning workflows.
                            </p>

                            <button className="mt-4 w-full rounded-full bg-[#0066FF] py-2 text-white text-sm font-medium inline-flex items-center justify-center gap-2">
                                Request Demo
                                <span className="text-xl">›</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 w-full max-w-4xl mx-auto">
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
                            {[
                                {
                                    value: "item-1",
                                    q: "Is this a fully white-label LMS?",
                                    a: "Yes. The entire platform runs under your brand. You can use your own domain, logo, color palette, and branded emails with no platform watermarks visible to learners.",
                                    color: "rgb(120, 100, 255)",
                                },
                                {
                                    value: "item-2",
                                    q: "How does onboarding and setup work?",
                                    a: "It starts with a demo. After understanding your requirements, we configure a custom setup and provide you access to a live admin panel and student LMS—fully branded and ready to use.",
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
                                    q: "How does pricing work?",
                                    a: "We don’t offer fixed pricing. After the demo, we create a custom plan based on your scale, features, and usage requirements.",
                                    color: "rgb(160, 120, 255)",
                                },
                                {
                                    value: "item-5",
                                    q: "Can we use our own domain and branding?",
                                    a: "Absolutely. You can connect a custom domain and fully control colors, logos, and email templates directly from the admin panel.",
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
    )
}
