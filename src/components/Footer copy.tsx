"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  pt-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- UPGRADED BLUE CTA BANNER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0066FF] p-10 lg:p-16 mb-20 shadow-[0_30px_60px_-15px_rgba(0,102,255,0.3)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Abstract Blurred Circle Decoration (The "Glow") */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
          
          <div className="relative z-10 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Start your teaching <br className="hidden md:block" /> journey today
            </h2>
            <p className="text-blue-50 text-base md:text-lg opacity-90 max-w-md">
              Launch your first course in under 5 minutes with our AI-powered LMS dashboard. Join 5,000+ creators.
            </p>
          </div>

          <a href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="relative z-10 bg-white text-[#0066FF] px-8 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-3 shadow-xl group active:scale-95">
            <span>Schedule Demo</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* --- FOOTER LINKS SECTION --- */}
        <div className="grid  grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Logo and Intro */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Synappses</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              Empowering the next generation of educators with AI-driven tools, seamless UX, and global scalability.
            </p>
            <div className="flex gap-5">
              <Twitter className="h-5 w-5 text-gray-800 hover:text-[#0066FF] cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-gray-800 hover:text-[#0066FF] cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-800 hover:text-[#0066FF] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Product</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-600">
                <li><Link href="#" className="hover:text-black">Platform Overview</Link></li>
                <li><Link href="#" className="hover:text-black">AI Course Builder</Link></li>
                <li className="flex items-center gap-2">
                  <Link href="#" className="hover:text-black">Integrations</Link>
                  <span className="bg-blue-100 text-[#0066FF] text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>
                </li>
                <li><Link href="#" className="hover:text-black">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Resources</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-600">
                <li><Link href="#" className="hover:text-black">Documentation</Link></li>
                <li><Link href="#" className="hover:text-black">Community Forum</Link></li>
                <li><Link href="#" className="hover:text-black">Help Center</Link></li>
                <li><Link href="#" className="hover:text-black">Developer API</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Company</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-600">
                <li><Link href="#" className="hover:text-black">About Us</Link></li>
                <li><Link href="#" className="hover:text-black">Careers</Link></li>
                <li><Link href="#" className="hover:text-black">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-gray-100 py-8">
          <p className="text-xs text-gray-400">
            © 2025 Synappses Built for the future of education.
          </p>
        </div>

      </div>
    </footer>
  );
}