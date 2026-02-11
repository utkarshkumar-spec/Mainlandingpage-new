"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  Bell,
  GraduationCap,
  ChevronRight,
  Globe,
  PencilLine,
  Palette,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-2xl border border-blue-100 bg-[#F5F9FF] p-6 shadow-[0_10px_30px_rgba(59,130,246,0.08)] after:absolute after:inset-0 after:pointer-events-none after:content-[''] after:z-0",
      className,
    )}
  >
    <div className="relative z-10">{children}</div>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-black/5 bg-[#F7FAFE] dark:border-black/5 dark:bg-[#F7FAFE] dark:text-purple-400 text-lg font-thin mb-6">
            <Sparkles className="w-3 h-3" />
            Core Platform Capabilities
          </div>

          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 text-center">
            A learning platform built <br className="hidden md:block" />
            to look like your own product
          </h2>

          <p className="text-xl w-150 text-neutral-500 dark:text-neutral-400 text-center mx-auto">
            Designed for ed-tech businesses that need full branding control,
            scalable infrastructure, and modern learning workflows.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* AI Insights */}
          <FeatureCard className="md:col-span-4 md:row-span-2 p-8 bg-[#F5F9FF] after:bg-[radial-gradient(circle_at_80%_0%,rgba(210,232,255,0.95),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(228,240,255,0.9),transparent_55%)]">
            <div className="flex items-center gap-3 text-[15px] pt-14 pl-14 font-medium text-[#2F6BFF]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(47,107,255,0.15)]">
                <Sparkles className="h-4 w-4 text-[#2F6BFF]" />
              </span>
              AI is predicting a drop of 10% next week
            </div>
            <div className="mt-6 rounded-md bg-transparent pl-6 pt-12">
              <Image
                src="/ai-graph.png"
                alt="AI prediction chart"
                className="h-auto w-full"
                width={900}
                height={600}
              />
            </div>
            <div className="mt-8 px-8 pt-8">
              <h3 className="text-2xl font-semibold text-neutral-900">AI-Assisted Insights</h3>
              <p className="mt-2 text-md font-light leading-relaxed text-neutral-700">
                Understand how learners engage with your content. Track progress, completion,
                drop-offs, and revenue with analytics designed for decision-makers.
              </p>
            </div>
          </FeatureCard>

          {/* Test Scheduling */}
          <FeatureCard className="md:col-span-4 bg-[#F6FAFF] pt-3 after:bg-[radial-gradient(circle_at_85%_10%,rgba(206,228,255,0.9),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(218,236,255,0.85),transparent_55%)] overflow-hidden">
            <div className="relative rounded-md border border-blue-100 bg-white/85 p-6 shadow-[0_12px_30px_rgba(59,130,246,0.08)] backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent via-white/60 to-white/95" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center rounded-sm gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#18CCFC] flex items-center justify-center text-white ]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-neutral-500">Test Title</p>
                    <p className="text-sm font-medium text-neutral-900">Chemistry organic test</p>
                  </div>
                </div>
                <div className="h-9 w-9 rounded-full border border-blue-200 flex items-center justify-center text-[#1F6BFF] bg-white shadow-[0_6px_16px_rgba(59,130,246,0.12)]">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2 text-[10px] text-neutral-500 pl-13">Time &amp; Date</div>
              <div className="text-base font-semibold text-neutral-900 pl-13">11:00pm 26/03/2026</div>
              <button className="mt-5 mx-auto flex items-center justify-center rounded-full bg-[#1F6BFF] px-7 py-2.5 text-xs font-semibold text-white">
                Schedule
              </button>
            </div>
            <div className="mt-7">
              <h3 className="text-2xl font-semibold text-neutral-900">Test Scheduling</h3>
              <p className="mt-2 text-md font-light leading-relaxed text-neutral-700">
                Group learners into cohorts with defined timelines, assignments, and milestones.
                Ideal for bootcamps, live programs, and structured learning paths.
              </p>
            </div>
          </FeatureCard>

          {/* Notifications */}
          <FeatureCard className="md:col-span-4 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_90%_0%,rgba(208,229,255,0.9),transparent_60%),radial-gradient(circle_at_15%_95%,rgba(220,238,255,0.85),transparent_55%)]">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1F6BFF] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_20px_rgba(31,107,255,0.25)]">
                <Bell className="h-3.5 w-3.5" />
                5 new notifications
              </span>
            </div>
            <div className="relative mt-6">
              <div className="absolute left-6 top-6 right-6 h-16 rounded-md border border-blue-100 bg-white/60 shadow-sm" />
              <div className="relative rounded-md border border-blue-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md flex items-center justify-center">
                    <Image
                      src="/flowbite_bell-solid.svg"
                      alt="Notification bell"
                      width={30}
                      height={30}
                    />
                    </div>
                  <p className="text-sm text-neutral-700">
                    New Test assigned in Trigonometry. Give test now.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <h3 className="text-2xl font-semibold text-neutral-900">Announcement &amp; Notifications</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                Send platform-wide announcements, course updates, and important alerts directly from
                the admin panel. Notifications are delivered in-app and via email—fully branded under
                your domain.
              </p>
            </div>
          </FeatureCard>

          {/* Brand Control */}
          <FeatureCard className="md:col-span-8 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_85%_5%,rgba(206,228,255,0.9),transparent_60%),radial-gradient(circle_at_10%_85%,rgba(222,240,255,0.85),transparent_55%)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-neutral-900">Complete Brand Control</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  Run the platform entirely under your own identity. Manage custom domains, brand
                  colors, logos, and communication templates directly from the admin panel—without
                  exposing the underlying SaaS.
                </p>
              </div>
              <div className="md:w-xs md:translate-x-30">
                <Image
                  src="/brandControl.png"
                  alt="Brand control preview"
                  width={550}
                  height={280}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </FeatureCard>

          {/* Security */}
          <FeatureCard className="md:col-span-6 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_90%_10%,rgba(208,229,255,0.85),transparent_30%)]">
            <div className="flex flex-col gap-3">
              <div className="relative w-65 md:-translate-x-10">
                <Image
                  src="/DeviceMacbook.png"
                  alt="Security laptop"
                  width={520}
                  height={360}
                  className="w-full h-auto"
                />
                <div className="absolute left-[40%] top-[45%] -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-md flex items-center justify-center">
                  <Image
                    src="/Vector.png"
                    alt="Lock icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900">Security &amp; Access Control</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Protect content using device limits, IP monitoring, access logs, and role-based
                  permissions. Prevent account sharing and maintain platform integrity.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* Payments */}
          <FeatureCard className="md:col-span-6 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_80%_10%,rgba(208,229,255,0.9),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(224,240,255,0.85),transparent_55%)]">
            <div className="flex items-center justify-center gap-6 py-4">
              {["Coming soon", "Coming soon", "Cashfree Payments", "Coming soon", "Coming soon"].map(
                (label, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "h-20 w-20 flex items-center justify-center text-center rounded-full border border-[#CFE0FF] bg-white/80 text-[10px] text-[#2F6BFF] shadow-[0_6px_16px_rgba(31,107,255,0.12)]",
                      label === "Cashfree Payments" &&
                        "h-30 w-30 text-xs font-semibold text-neutral-800 bg-white",
                      idx === 3 && "text-[#88A6FF] opacity-60 bg-white/60",
                    )}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-neutral-900">Payments &amp; Monetization</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Sell courses, bundles, live programs, community access, and mentorship from a single
                catalog. Built-in payments allow you to scale revenue without external tools.
              </p>
            </div>
          </FeatureCard>
        </div>
      </div>

      {/* Background glow */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-175 h-175 rounded-full bg-purple-500/10 blur-3xl" />
      </div> */}
    </section>
  );
}
