"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Bell,
  Palette,
  Lock,
  CalendarDays,
  Check,
  MessageCircle,
  CreditCard,
  BarChart3,
  MousePointer2,
  GripVertical,
  Play,
  AlertCircle,
  FileVideo,
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
      {/* Custom Keyframes for Cool Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bar-grow-1 { 0%, 100% { height: 40%; } 50% { height: 80%; } }
        @keyframes bar-grow-2 { 0%, 100% { height: 60%; } 50% { height: 95%; } }
        @keyframes bar-grow-3 { 0%, 100% { height: 25%; } 50% { height: 35%; } } /* Struggling student bar */
        @keyframes bar-grow-4 { 0%, 100% { height: 80%; } 50% { height: 40%; } }
        @keyframes bar-grow-5 { 0%, 100% { height: 50%; } 50% { height: 100%; } }
        
        @keyframes theme-shift {
          0%, 100% { background-color: #3b82f6; } 
          33% { background-color: #8b5cf6; } 
          66% { background-color: #10b981; } 
        }
        @keyframes border-theme-shift {
          0%, 100% { border-color: #3b82f6; box-shadow: 0 0 20px rgba(59,130,246,0.2); }
          33% { border-color: #8b5cf6; box-shadow: 0 0 20px rgba(139,92,246,0.2); }
          66% { border-color: #10b981; box-shadow: 0 0 20px rgba(16,185,129,0.2); }
        }
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 100%; }
        }
        @keyframes scan-line {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes bell-ring {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(0deg); }
        }
        
        /* Drag and Drop Animations */
        @keyframes cursor-drag {
          0% { transform: translate(40px, 60px); opacity: 0; }
          10% { transform: translate(40px, 60px); opacity: 1; }
          25% { transform: translate(0px, 30px) scale(0.9); } /* Click */
          50% { transform: translate(0px, -30px) scale(0.9); } /* Drag up */
          65% { transform: translate(0px, -30px) scale(1); } /* Release */
          80% { transform: translate(40px, 60px); opacity: 1; }
          100% { transform: translate(40px, 60px); opacity: 0; }
        }
        @keyframes item-drag {
          0%, 25% { transform: translateY(0); box-shadow: none; z-index: 10; border-color: #e5e7eb; }
          30% { transform: translateY(0) scale(1.02); box-shadow: 0 10px 15px -3px rgba(59,130,246,0.2); border-color: #3b82f6; z-index: 50; }
          50%, 65% { transform: translateY(-60px) scale(1.02); box-shadow: 0 10px 15px -3px rgba(59,130,246,0.2); border-color: #3b82f6; z-index: 50; }
          70%, 100% { transform: translateY(-60px) scale(1); box-shadow: none; border-color: #e5e7eb; z-index: 10; }
        }
        @keyframes item-shift {
          0%, 35% { transform: translateY(0); }
          50%, 100% { transform: translateY(60px); }
        }

        /* Test Scheduling Click Animations */
        @keyframes cursor-click {
          0% { transform: translate(50px, 50px); opacity: 0; }
          20% { transform: translate(0px, 0px); opacity: 1; }
          30% { transform: translate(0px, 0px) scale(0.8); } /* Click down */
          40% { transform: translate(0px, 0px) scale(1); } /* Click up */
          60% { transform: translate(30px, 40px); opacity: 0; }
          100% { transform: translate(30px, 40px); opacity: 0; }
        }
        @keyframes task-approve {
          0%, 30% { background-color: #ffffff; border-color: #e5e7eb; }
          35%, 100% { background-color: #f0fdf4; border-color: #86efac; } /* Turns green */
        }
        @keyframes check-pop {
          0%, 30% { transform: scale(0); opacity: 0; }
          35% { transform: scale(1.2); opacity: 1; }
          40%, 100% { transform: scale(1); opacity: 1; }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out infinite; animation-delay: 1.5s; }
        .animate-theme-shift { animation: theme-shift 6s infinite; }
        .animate-border-theme-shift { animation: border-theme-shift 6s infinite; }
        .animate-bell { animation: bell-ring 2s ease-in-out infinite; transform-origin: top center; }
      `}} />

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
          
          {/* AI Insights - Animated Graph & Warning */}
          <FeatureCard className="md:col-span-4 bg-[#F5F9FF] after:bg-[radial-gradient(circle_at_80%_0%,rgba(210,232,255,0.95),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(228,240,255,0.9),transparent_55%)]">
            <div className="h-56 w-full p-6 flex items-end justify-between space-x-2 border-b border-blue-100/50 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between p-6 pb-0 pointer-events-none">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full border-t border-blue-200/40"></div>
                ))}
              </div>
              <div className="w-full relative z-10 flex items-end justify-between space-x-2 h-full pt-8">
                <div className="w-full bg-blue-100 rounded-t-md relative overflow-hidden" style={{ animation: 'bar-grow-1 4s ease-in-out infinite' }}>
                  <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-md h-full opacity-90"></div>
                </div>
                <div className="w-full bg-blue-100 rounded-t-md relative overflow-hidden" style={{ animation: 'bar-grow-2 4s ease-in-out infinite 0.5s' }}>
                  <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md h-full opacity-90"></div>
                </div>
                
                {/* Struggling Student Bar */}
                <div className="w-full bg-red-100 rounded-t-md relative shadow-[0_0_15px_rgba(239,68,68,0.3)] z-20 flex justify-center" style={{ animation: 'bar-grow-3 4s ease-in-out infinite 1s' }}>
                  <div className="absolute bottom-0 w-full bg-red-400 rounded-t-md h-full opacity-90"></div>
                  <div className="absolute -top-6 animate-pulse bg-white rounded-full p-0.5 shadow-sm border border-red-200">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </div>
                </div>

                <div className="w-full bg-blue-100 rounded-t-md relative overflow-hidden" style={{ animation: 'bar-grow-4 4s ease-in-out infinite 1.5s' }}>
                  <div className="absolute bottom-0 w-full bg-blue-600 rounded-t-md h-full opacity-90"></div>
                </div>
                <div className="w-full bg-blue-100 rounded-t-md relative overflow-hidden" style={{ animation: 'bar-grow-5 4s ease-in-out infinite 2s' }}>
                  <div className="absolute bottom-0 w-full bg-indigo-400 rounded-t-md h-full opacity-90"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-6 pt-0">
              <h3 className="text-2xl font-semibold text-neutral-900">
                AI-Assisted Insights
              </h3>
              <p className="mt-2 text-md font-regular leading-relaxed text-neutral-700">
                AI-powered analytics identify struggling students before they fall behind, 
                reduces teacher workload, and provides decision-ready analytics on progress.
              </p>
            </div>
          </FeatureCard>

          {/* Drag & Drop Course Builder */}
          <FeatureCard className="md:col-span-4 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_90%_0%,rgba(208,229,255,0.9),transparent_60%)]">
            <div className="h-56 w-full p-6 relative flex flex-col justify-center items-center overflow-hidden">
              <div className="w-full max-w-[240px] relative space-y-3">
                {/* Item 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 shadow-sm relative z-10">
                  <GripVertical className="w-4 h-4 text-gray-400" />
                  <div className="h-2 w-24 bg-gray-200 rounded"></div>
                </div>
                {/* Item 2 (Gets shifted down) */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 shadow-sm relative z-10 bg-gray-50/50" style={{ animation: 'item-shift 4s ease-in-out infinite' }}>
                  <GripVertical className="w-4 h-4 text-gray-400" />
                  <div className="h-2 w-16 bg-gray-200 rounded"></div>
                </div>
                {/* Item 3 (Being dragged up) */}
                <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-3 shadow-sm absolute bottom-0 left-0 w-full bg-blue-50/50" style={{ animation: 'item-drag 4s ease-in-out infinite' }}>
                  <GripVertical className="w-4 h-4 text-blue-400" />
                  <div className="h-2 w-20 bg-blue-300 rounded"></div>
                  
                  {/* Cursor */}
                  <div className="absolute right-4 top-4 z-50 text-neutral-800" style={{ animation: 'cursor-drag 4s ease-in-out infinite' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-black text-black">
                      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                      <path d="m13 13 6 6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6">
              <h3 className="text-[22px] font-bold text-[#111827]">
                Drag & Drop Builder
              </h3>
              <p className="mt-2 text-md font-regular leading-relaxed text-[#4B5563]">
                Manage your courses and lessons with a smooth, drag-and-drop interface. 
                Create courses, modules, sections, lessons or schedule classes seamlessly.
              </p>
            </div>
          </FeatureCard>

          {/* Test Scheduling - Interactive Click sequence */}
          <FeatureCard className="md:col-span-4 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_15%_95%,rgba(220,238,255,0.85),transparent_55%)]">
            <div className="h-56 w-full relative flex items-center justify-center overflow-hidden bg-grid-slate-100">
              <div className="relative w-64 bg-white border-2 border-gray-100 rounded-xl shadow-lg p-4" style={{ animation: 'task-approve 4s ease-in-out infinite' }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">Math Test 1</div>
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white z-20">
                    <Check className="w-3.5 h-3.5 text-green-500" style={{ animation: 'check-pop 4s ease-in-out infinite' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
                </div>
                
                {/* Animated Cursor clicking the card */}
                <div className="absolute right-2 -bottom-2 z-50 text-neutral-800" style={{ animation: 'cursor-click 4s ease-in-out infinite' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-black text-black">
                    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                    <path d="m13 13 6 6"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 mt-2">
              <h3 className="text-2xl font-semibold text-neutral-900">
                Test Scheduling
              </h3>
              <p className="mt-2 text-md font-regular leading-relaxed text-neutral-700">
                Organises learners into structured cohorts, automates assignments, 
                tests, and milestones to keep students progressing on schedule.
              </p>
            </div>
          </FeatureCard>

          {/* Brand Control - Dashboard Image Placeholder */}
          <FeatureCard className="md:col-span-8 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_85%_5%,rgba(206,228,255,0.9),transparent_60%),radial-gradient(circle_at_10%_85%,rgba(222,240,255,0.85),transparent_55%)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-center h-full">
              <div className="md:w-[45%] p-6">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  Complete Brand Control
                </h3>
                <p className="mt-2 text-md font-regular leading-relaxed text-neutral-700">
                  Use the platform completely as your own brand. Custom domains,
                  colours, logos, and messaging templates in the admin panel,
                  all while keeping the underlying SaaS technology hidden.
                </p>
              </div>
              <div className="h-64 md:h-80 md:w-[55%] relative p-6 flex items-center justify-center md:justify-end md:pr-10">
                {/* Dashboard Image Container with Animated Border */}
                <div className="w-full h-full max-w-lg relative rounded-xl p-1 animate-border-theme-shift bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-sm relative group flex items-center justify-center bg-slate-50 border border-slate-100">
                    
                    {/* Placeholder content - Users can replace the img tag below with their actual dashboard screenshot */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2 text-center">
                      <video src="https://res.cloudinary.com/dyktjldc4/video/upload/v1771940950/2026-02-24_19-04-50_online-video-cutter.com_tpr22t.mp4" autoPlay muted loop className="w-full h-full object-cover relative z-10"></video>
                    </div>

                    {/* Example Image Tag to replace: */}
                    {/* <img src="/your-dashboard.png" alt="Dashboard" className="w-full h-full object-cover relative z-10" /> */}
                    
                  </div>

                  {/* Floating Brand Color Dots */}
                  <div className="absolute left-4 top-8 flex justify-center items-center -translate-y-1/2  gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500  border-white shadow-md animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500  border-white shadow-md animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-4 h-4 rounded-full bg-emerald-500  border-white shadow-md animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Notifications */}
          <FeatureCard className="md:col-span-4 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_90%_0%,rgba(208,229,255,0.9),transparent_40%),radial-gradient(circle_at_15%_95%,rgba(220,238,255,0.85),transparent_55%)]">
            <div className="h-56 w-full relative flex items-center justify-center overflow-hidden">
              {/* Main Bell */}
              <div className="relative z-10 w-20 h-20 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center">
                <Bell className="w-10 h-10 text-blue-500 animate-bell" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              {/* Floating notifications */}
              <div className="absolute top-8 left-4 sm:left-8 bg-white/90 backdrop-blur p-2.5 rounded-xl shadow-md border border-blue-100 flex items-center space-x-3 animate-float">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-10 h-1.5 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="absolute bottom-8 right-4 sm:right-8 bg-white/90 backdrop-blur p-2.5 rounded-xl shadow-md border border-blue-100 flex items-center space-x-3 animate-float-delayed">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <div className="w-20 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 mt-2">
              <h3 className="text-2xl font-semibold text-neutral-900">
                Announcement &amp; Notifications
              </h3>
              <p className="mt-2 text-md font-regular leading-relaxed text-neutral-700">
                Broadcast announcements, course updates, and critical
                notifications across the entire platform instantly via in-app and emails.
              </p>
            </div>
          </FeatureCard>

          {/* DRM & Video Security */}
          <FeatureCard className="md:col-span-6 bg-[#F7FAFF] after:bg-[radial-gradient(circle_at_90%_10%,rgba(208,229,255,0.85),transparent_30%)]">
            <div className="flex flex-col gap-3 h-full">
              <div className="relative w-full h-64 pt-6 flex items-center justify-center overflow-hidden">
                {/* Video Player Mockup */}
                <div className="w-72 h-44 bg-slate-900 rounded-xl shadow-2xl relative overflow-hidden flex items-center justify-center border-4 border-slate-800 z-10">
                  <FileVideo className="w-12 h-12 text-slate-700 absolute top-4 left-4" />
                  <Play className="w-14 h-14 text-white/80 ml-2" />
                  
                  {/* DRM Scanning Overlay */}
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                  <div className="absolute left-0 w-full h-1 bg-blue-400 shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] z-20" style={{ animation: 'scan-line 3s linear infinite' }}></div>
                  
                  {/* Floating Lock Shield */}
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl animate-float border-4 border-[#F7FAFF]">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-auto px-6 pb-6">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  DRM &amp; Video Security
                </h3>
                <p className="mt-2 text-md font-regular leading-relaxed text-neutral-700">
                  Protect your videos with enterprise-grade DRM offering maximum security. 
                  Whitelabelled videos without any watermarks or branding, built for flexibility and scalability.
                </p>
              </div>
            </div>
          </FeatureCard>

          {/* Payments - Actual Gateways */}
          <FeatureCard className="md:col-span-6 bg-[#F7FAFF] p-6 after:bg-[radial-gradient(circle_at_80%_10%,rgba(208,229,255,0.9),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(224,240,255,0.85),transparent_55%)]">
            <div className="mx-auto w-full max-w-sm relative h-56 flex items-center justify-center">
              
              {/* Central Hub */}
              <div className="relative z-20 w-24 h-24 bg-white rounded-full shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center border-2 border-blue-50">
                <div className="absolute inset-0 bg-blue-50/50 rounded-full animate-[spin_4s_linear_infinite] border-t-2 border-blue-400"></div>
                <CreditCard className="w-8 h-8 text-blue-600 mb-1 z-10" />
                <span className="text-[9px] font-bold text-slate-700 z-10">PAYMENTS</span>
              </div>

              {/* Orbiting Payment Logos */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Orbit Path */}
                <div className="w-56 h-56 rounded-full border border-blue-100/60 absolute border-dashed animate-[spin_20s_linear_infinite]">
                  
                  {/* UPI Logo */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full shadow-md p-2 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Razorpay Logo */}
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-md p-2 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* BHIM Logo */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 scale-125 h-14 bg-white rounded-full shadow-md p-2 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                    <img src="https://www.bhimupi.org.in/images/bhim/logo.png" alt="BHIM" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Cashfree Logo */}
                  <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-md p-2 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                     <img src="https://res.cloudinary.com/dyktjldc4/image/upload/v1770815606/Cashfree_Payments_Logo_ar0bxf.jpg" alt="Cashfree" className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2">
              <h3 className="text-xl font-semibold text-neutral-900">
                Payments &amp; Monetization{" "}
              </h3>
              <p className="mt-2 text-md font-regular leading-relaxed text-neutral-700">
                Monetise everything from a unified catalogue, courses, and
                bundles. The payment infrastructure enables you to manage and
                scale payments seamlessly with support for UPI, Cards, and multiple gateways.
              </p>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}