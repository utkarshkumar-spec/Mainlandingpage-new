"use client";

import React from "react";
import { ArrowRight, Github, Twitter, Linkedin, Zap } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import { cn } from "@/lib/utils";
import { NoiseBackground } from "./ui/noise-background";

export default function Footer() {
  return (
    <div className="w-full">
      {/* --- CALL TO ACTION SECTION --- */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-slate-50 dark:bg-neutral-900/50 px-6 py-20">
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Minimal Badge */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400">
              <Zap className="h-4 w-4 fill-current" />
              <span>Ready to scale?</span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tighter text-black dark:text-white md:text-6xl">
              Start your teaching <br /> journey today
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-neutral-600 dark:text-neutral-400 md:text-lg">
              Launch your first course in under 5 minutes with our AI-powered LMS dashboard. Join 5,000+ creators.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex justify-center">
                <NoiseBackground
                  containerClassName="w-fit p-2 rounded-full mx-auto"
                  gradientColors={[
                    "rgb(255, 100, 150)",
                    "rgb(100, 150, 255)",
                    "rgb(255, 200, 100)",
                  ]}
                >
                  <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                  Schedule a Demo  &rarr;
                  </button>
                </NoiseBackground>
              </div>
            </div>
          </div>

          {/* Aceternity Background Beams */}
          <BackgroundBeams className="opacity-40 dark:opacity-100" />
        </div>
      </section>

      {/* --- MAIN FOOTER SECTION --- */}
      <footer className="relative border-t border-black/5 dark:border-white/5 bg-transparent transition-colors">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">

            {/* Logo and About */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white dark:bg-black animate-pulse" />
                </div>
                <span className="text-xl font-bold tracking-tighter dark:text-white uppercase">synappses</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                Empowering the next generation of educators with AI-driven tools, seamless UX, and global scalability.
              </p>
              <div className="mt-6 flex gap-4">
                <Twitter className="h-5 w-5 text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                <Github className="h-5 w-5 text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-black dark:text-white">Product</h3>
              <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Platform Overview</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">AI Course Builder</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
                  <span>Integrations</span>
                  <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-600">NEW</span>
                </li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-black dark:text-white">Resources</h3>
              <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Documentation</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Community Forum</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Help Center</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Developer API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-black dark:text-white">Company</h3>
              <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">About Us</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Careers</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Privacy Policy</a></li>
                <li className="hover:text-black dark:hover:text-white transition-colors"><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between border-t border-black/5 dark:border-white/5 pt-8 md:flex-row">
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              © 2025 synappses Built for the future of education.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500 md:mt-0">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}