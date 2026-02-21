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
      "relative overflow-hidden rounded-2xl border border-blue-100 bg-[#F5F9FF] after:absolute after:inset-0 after:pointer-events-none after:content-[''] after:z-0",
      className,
    )}
  >
    <div className="relative z-10">{children}</div>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden mb-16">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 w-full max-w-3xl text-center sm:mb-16 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-[#F7FAFE] px-4 py-2 text-sm font-light sm:px-5">
            <Image src="/sparkle.svg" alt="Message" width={20} height={20} />
            <span className="font-light text-sm">
              Core Platform Capabilities
            </span>
          </div>

          <h2 className="mb-4 text-center text-2xl font-semibold leading-[1.15] tracking-tight text-neutral-900 dark:text-white sm:text-3xl md:mb-6 md:text-5xl">
            A learning platform built <br className="hidden md:block" />
            to look like your own product
          </h2>

          <p className="mx-auto w-full max-w-2xl text-center text-base leading-7 text-neutral-500 dark:text-neutral-400 sm:text-lg md:text-xl md:leading-8">
            Designed for ed-tech businesses that need full branding control,
            scalable infrastructure, and modern learning workflows.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* AI Insights */}
          <FeatureCard className="md:col-span-4 md:row-span-2 bg-[#F5F9FF] after:bg-[radial-gradient(circle_at_80%_0%,rgba(210,232,255,0.95),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(228,240,255,0.9),transparent_55%)]">
            <div className="rounded-md bg-transparent">
              <Image
                src="/ai-graph.svg"
                alt="AI prediction chart"
                className="h-auto w-full"
                width={900}
                height={600}
              />
            </div>
            <div className="mt-8 p-6">
              <h3 className="text-2xl font-semibold text-neutral-900">
                AI-Assisted Insights
              </h3>
              <p className="mt-2 text-md font-redular leading-relaxed text-neutral-700">
                AI-assisted LMS reduces teacher workload, flags risks, and
                provides decision-ready analytics on progress, completion,
                drop-offs, and revenue for leaders.
              </p>
            </div>
          </FeatureCard>

          {/* Test Scheduling */}
          {/* Test Scheduling */}
          <FeatureCard className="md:col-span-4 bg-[#F7FAFF] py-3 px-6 after:bg-[radial-gradient(circle_at_90%_0%,rgba(208,229,255,0.9),transparent_60%),radial-gradient(circle_at_15%_95%,rgba(220,238,255,0.85),transparent_55%)]">
            <div className="relative">
              {/* Replaced the complex div with the SVG asset */}
              <Image
                src="/schedule.png"
                alt="Test scheduling interface"
                className="h-auto w-full"
                width={400}
                height={300}
              />
            </div>

            <div className="">
              <h3 className="text-[22px] font-bold text-[#111827]">
                Test Scheduling
              </h3>
              <p className="mt-2 text-md font-regular leading-relaxed text-[#4B5563]">
                Test Scheduling organises learners into structured cohorts,
                automates assignments, tests, and milestones, and keeps students
                accountable and progressing on schedule.
              </p>
            </div>
          </FeatureCard>

          {/* Notifications */}
          <FeatureCard className="md:col-span-4 bg-[#F7FAFF] p-6 after:bg-[radial-gradient(circle_at_90%_0%,rgba(208,229,255,0.9),transparent_40%),radial-gradient(circle_at_15%_95%,rgba(220,238,255,0.85),transparent_55%)]">
            <div className="relative">
              {/* Replaced the complex div with the SVG asset */}
              <Image
                src="/notification_grid.png"
                alt="Test scheduling interface"
                className="h-auto w-full"
                width={400}
                height={300}
              />
            </div>
            <div className="relative mt-6">
              {/* <div className="absolute left-6 top-6 right-6 h-16 rounded-md border border-blue-100 bg-white/60 shadow-sm" />
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
              </div> */}
            </div>
            <div className="mt-7">
              <h3 className="text-2xl font-semibold text-neutral-900">
                Announcement &amp; Notifications
              </h3>
              <p className="mt-2 text-md font-redular leading-relaxed text-neutral-700">
                Broadcast announcements, course updates, and critical
                notifications across the entire platform from within the admin
                panel. Messages are delivered in-app notifications and email
                instantly, all branded under your domain.
              </p>
            </div>
          </FeatureCard>

          {/* Brand Control */}
          <FeatureCard className="md:col-span-8 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_85%_5%,rgba(206,228,255,0.9),transparent_60%),radial-gradient(circle_at_10%_85%,rgba(222,240,255,0.85),transparent_55%)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Complete Brand Control
                </h3>
                <p className="mt-2 text-md font-redular leading-relaxed text-neutral-700">
                  Use the platform completely as your own brand. Custom domains,
                  colours, logos, and messaging templates in the admin panel,
                  all while keeping the underlying SaaS technology hidden from
                  the users.
                </p>
              </div>
              <div className="md:w-xs md:translate-x-30">
                <Image
                  src="/brandControl.png"
                  alt="Brand control preview"
                  width={550}
                  height={280}
                  className="w-full h-auto pb-6 pl-6"
                />
              </div>
            </div>
          </FeatureCard>

          {/* Security */}
          <FeatureCard className="md:col-span-6 bg-[#F7FAFF]  after:bg-[radial-gradient(circle_at_90%_10%,rgba(208,229,255,0.85),transparent_30%)]">
            <div className="flex flex-col gap-3">
              <div className="relative w-65 md:-translate-x-10 pt-6 pr-6">
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
                <h3 className="text-2xl font-semibold text-neutral-900 px-6">
                  Security &amp; Access Control
                </h3>
                <p className="mt-2 text-md font-redular leading-relaxed text-neutral-700 px-6 pb-6">
                  Protect your content with device restrictions, IP tracking,
                  access logs, and role-based permissions. Prevent account
                  sharing and protect platform integrity while ensuring access
                  to authorised users only.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* Payments */}
          <FeatureCard className="md:col-span-6 bg-[#F7FAFF] p-6 after:bg-[radial-gradient(circle_at_80%_10%,rgba(208,229,255,0.9),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(224,240,255,0.85),transparent_55%)]">
            <div className="mx-auto grid w-full max-w-88 grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center justify-items-center gap-1.5 py-4 sm:max-w-120 sm:gap-3 md:max-w-136 md:gap-4">
              {[
                "Coming soon",
                "Coming soon",
                "Cashfree Payments",
                "Coming soon",
                "Coming soon",
              ].map((label, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex h-9 w-9 shrink-0 aspect-square items-center justify-center rounded-full border border-[#CFE0FF] bg-white/80 px-1 text-center text-[7px] leading-tight text-[#2F6BFF] shadow-[0_6px_16px_rgba(31,107,255,0.12)] sm:h-16 sm:w-16 sm:text-[9px] md:h-20 md:w-20 md:text-[10px]",
                    label === "Cashfree Payments" &&
                      "h-24 w-24 bg-white text-xs font-semibold text-neutral-800 sm:h-28 sm:w-28 md:h-30 md:w-30",
                    idx === 3 && "text-[#88A6FF] opacity-60 bg-white/60",
                  )}
                >
                  {label !== "Cashfree Payments" ? (
                    label
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/dyktjldc4/image/upload/v1770815606/Cashfree_Payments_Logo_ar0bxf.jpg"
                      alt="Cashfree Payments"
                      width={100}
                      height={100}
                      className="h-[90%] w-[90%] object-contain sm:h-full sm:w-full md:h-full md:w-full"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Payments &amp; Monetization{" "}
              </h3>
              <p className="mt-2 text-md font-redular leading-relaxed text-neutral-700">
                Monetise everything from a unified catalogue, courses, and
                bundles. The payment infrastructure enables you to manage and
                scale payments seamlessly without needing any third-party tools.
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
