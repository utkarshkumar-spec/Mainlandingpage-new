"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ChevronRight, MoveRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { NoiseBackground } from "../ui/noise-background";

export default function FullNavbar() {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "Features", link: "#features" },
    { name: "How it works", link: "#how-it-works" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody className="max-w-6xl">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 group">

          <span className="text-xl font-bold font-sans tracking-tighter text-[#111827]">synappses</span>
        </a>

        {/* Central Links */}
        <NavItems items={navItems} />

        {/* Right Side Actions */}
        <div className="flex z-50 items-center gap-3">

          <button onClick={()=> window.location.href="https://cal.com/newralfounder/schedule-synappses-lms-demo?overlayCalendar=true"} className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#1F6BFF] px-3 text-sm font-medium text-white  sm:w-auto">
           Request Demo
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </NavBody>

      {/* Mobile Experience */}
      <MobileNav className="w-full">
        <MobileNavHeader>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-sans tracking-tighter text-[#111827]">synappses</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          <div className="flex w-full flex-col gap-6 items-center py-8">
            {navItems.map((item, idx) => (
              <a key={idx} href={item.link} className="text-xl font-bold dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-800" />
            <button className="w-full py-4 text-center font-bold text-[#FF6496]">Login</button>
            <button className="w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold">
              Join Now
            </button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
