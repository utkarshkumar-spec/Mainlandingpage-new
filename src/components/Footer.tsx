"use client";
import React from "react";
import { Github, X, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-34">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- BLUE CTA BANNER --- */}
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-r from-[#0066FF] to-[#99C2FF] p-8 md:p-16 -mb-30">
          {/* Abstract Watermark Pattern */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full object-right"
            >
              <path
                fill="white"
                d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.6,85.5,-0.9C83.9,13.8,77.3,27.5,68.2,39.1C59,50.7,47.3,60.1,34.2,66.9C21,73.7,6.4,77.9,-8.6,76.4C-23.6,74.9,-38.9,67.7,-51.7,57.1C-64.4,46.5,-74.6,32.6,-78.9,17.2C-83.3,1.9,-81.8,-14.9,-75.4,-29.7C-69,-44.4,-57.8,-57.1,-44.4,-64.3C-31,-71.5,-15.5,-73.2,0.9,-74.8C17.3,-76.4,31.3,-83.6,44.7,-76.4Z"
                transform="translate(140 60) scale(1.5)"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Start your teaching <br className="hidden md:block" /> journey
                today
              </h2>
              <p className="text-blue-50 text-base md:text-lg opacity-90 max-w-md">
                Launch your first course in under 5 minutes with our AI-powered
                LMS dashboard. Join 5,000+ creators.
              </p>
            </div>

            <a
              href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-xl font-semibold text-base hover:scale-105 transition-transform active:scale-95"
            >
              Schedule Demo
            </a>
          </div>
        </div>

      </div>

      {/* --- FOOTER LINKS SECTION --- */}
      <div className="w-full bg-[#EDF4FF] min-h-131 pt-40">
        <div className="max-w-7xl mx-auto px-6 pt-16 h-full flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
            {/* Logo and Intro */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/synappses_logo.svg"
                  alt="synappses logo"
                  width={140}
                  height={140}
                />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                Empowering the next generation of educators with AI-driven
                tools, seamless UX, and global scalability.
              </p>
              <div className="flex gap-5">
                {/* X.com Link */}
                <a
                  href="https://x.com/Synappses_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on X"
                >
                  <XIcon className="h-5 w-5 text-gray-800 hover:text-[#0066FF] transition-colors" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/company/synappses-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-800 hover:text-[#0066FF] transition-colors" />
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/synappses.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-800 hover:text-[#E4405F] transition-colors" />
                </a>

                {/* Github Link (Optional - keeping it from your previous code) */}
                {/* <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-gray-800 hover:text-[#0066FF] transition-colors" />
              </a> */}
              </div>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Product
                </h3>
                <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-black">
                      Platform Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      AI Course Builder
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link href="#" className="hover:text-black">
                      Integrations
                    </Link>
                    <span className="bg-blue-100 text-[#0066FF] text-[10px] px-2 py-0.5 rounded-full font-bold">
                      NEW
                    </span>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-black">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Resources
                </h3>
                <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-black">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      Community Forum
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      Developer API
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                  Company
                </h3>
                <ul className="space-y-4 text-sm font-medium text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-black">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-black">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="mt-auto border-t border-[#d6e3f5] py-8">
            <p className="text-xs text-gray-400">
              © 2026 Synappses Built for the future of education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
