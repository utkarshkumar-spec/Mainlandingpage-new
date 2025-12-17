"use client";

import { ArrowRight, Play, Plus, BookOpen, Settings, Sparkles, BarChart3, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
    return (
        <>

            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
                    <div>
                        <div className="flex w-max items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium">FAQ</span>
                        </div>
                        <h2 className="text-6xl font-bold leading-tight">
                            Questions
                            <br />
                            And Answers
                        </h2>
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
                                    className="group px-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm transition-all data-[state=open]:border-black/10 dark:data-[state=open]:border-white/20 shadow-sm"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6">
                                        <div className="flex items-center gap-4 text-left">
                                            {/* Minimalist dot indicator using your brand colors */}
                                            <div
                                                className="h-1.5 w-1.5 rounded-full transition-all group-data-[state=open]:scale-[2] group-data-[state=open]:shadow-[0_0_10px_currentcolor]"
                                                style={{ color: faq.color, backgroundColor: 'currentColor' }}
                                            />
                                            <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight transition-colors group-data-[state=open]:text-black dark:group-data-[state=open]:text-white">
                                                {faq.q}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-600 dark:text-neutral-400 pb-6 text-base leading-relaxed pl-5">
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
