"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  PlayCircle,
  CreditCard,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Mini visual blocks to simulate product context */
const MiniNotifications = () => (
  <div className="space-y-3">
    {[1,].map((i) => (
      <div
        key={i}
        className="flex items-center gap-3 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-neutral-800/60"
      >
        <div className="h-8 w-8 rounded-lg bg-purple-600/10 flex items-center justify-center">
          <Bell className="h-4 w-4 text-purple-600" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="h-2 w-2/3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <div className="h-2 w-1/3 rounded-full bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </div>
    ))}
  </div>
);

const MiniBrandPanel = () => (
  <div className="space-y-3">
    <div className="h-3 w-1/2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
    <div className="flex gap-2">
      {["bg-purple-500", "bg-emerald-500", "bg-orange-500"].map((c, i) => (
        <div key={i} className={cn("h-8 w-8 rounded-full", c)} />
      ))}
    </div>
    <div className="h-10 rounded-xl border border-black/5 dark:border-white/10 bg-neutral-100 dark:bg-neutral-800" />
  </div>
);

const MiniAnalytics = () => (
  <div className="flex items-end gap-1 h-24">
    {[35, 60, 45, 80, 55, 70].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        className="flex-1 rounded-t-md bg-gradient-to-t from-purple-600 to-purple-400"
      />
    ))}
  </div>
);

const FeatureSection = ({
  title,
  description,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  description: string;
  icon: any;
  children?: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn(
      "relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/60 p-8",
      className
    )}
  >
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
        <Icon className="h-5 w-5 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
        {title}
      </h3>
    </div>

    <p className="max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mb-8">
      {description}
    </p>

    {children}
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            Core Platform Capabilities
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            A learning platform built <br className="hidden md:block" />
            to look like your own product
          </h2>

          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            Designed for ed-tech businesses that need full branding control,
            scalable infrastructure, and modern learning workflows.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* White Labeling */}
          <FeatureSection
            icon={LayoutDashboard}
            title="Complete Brand Control"
            description="Run the platform entirely under your own identity. Manage custom domains, brand colors, logos, and communication templates directly from the admin panel—without exposing the underlying SaaS."
            className="md:col-span-2"
          >
            <MiniBrandPanel />
          </FeatureSection>

          {/* Analytics */}
          <FeatureSection
            icon={BarChart3}
            title="AI-Assisted Insights"
            description="Understand how learners engage with your content. Track progress, completion, drop-offs, and revenue with analytics designed for decision-makers."
          >
            <MiniAnalytics />
          </FeatureSection>

          {/* Courses & Lessons */}
          <FeatureSection
            icon={PlayCircle}
            title="Courses & Lesson Management"
            description="Create structured courses with videos, documents, quizzes, and live sessions. Organize modules visually and manage content updates without disrupting learners."
          />

          {/* Cohorts */}
          <FeatureSection
            icon={Users}
            title="Cohorts & Batch Scheduling"
            description="Group learners into cohorts with defined timelines, assignments, and milestones. Ideal for bootcamps, live programs, and structured learning paths."
          />

          {/* Payments */}
          <FeatureSection
            icon={CreditCard}
            title="Payments & Monetization"
            description="Sell courses, bundles, live programs, community access, and mentorship from a single catalog. Built-in payments allow you to scale revenue without external tools."
          />

          {/* Security */}
          <FeatureSection
            icon={ShieldCheck}
            title="Security & Access Control"
            description="Protect content using device limits, IP monitoring, access logs, and role-based permissions. Prevent account sharing and maintain platform integrity."
            className="md:col-span-2"
          />
          <FeatureSection
            icon={Bell}
            title="Announcements & Notifications"
            description="Send platform-wide announcements, course updates, and important alerts directly from the admin panel. Notifications are delivered in-app and via email—fully branded under your domain."
          >
            <MiniNotifications />
          </FeatureSection>

        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </section>
  );
}
