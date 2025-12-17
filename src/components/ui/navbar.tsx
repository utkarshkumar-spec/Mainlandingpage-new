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
import { MoveRight } from "lucide-react";
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
          <div className="h-8 w-8 rounded-lg bg-[#6496FF] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
             <span className="text-white font-black text-xs">N</span>
          </div>
          <span className="text-lg font-bold tracking-tighter text-black dark:text-white">NEURAL.IN</span>
        </a>

        {/* Central Links */}
        <NavItems items={navItems} />

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <NoiseBackground
            containerClassName="hidden md:block p-[1.5px] rounded-full"
            gradientColors={["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"]}
          >
            <button className="h-10 px-6 rounded-full bg-white dark:bg-black text-black dark:text-white text-xs font-bold transition-all active:scale-95">
              Request Demo
            </button>
          </NoiseBackground>
        </div>
      </NavBody>

      {/* Mobile Experience */}
      <MobileNav>
        <MobileNavHeader>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#6496FF] flex items-center justify-center">
               <span className="text-white font-black text-[10px]">N</span>
            </div>
            <span className="font-bold text-black dark:text-white">NEURAL.IN</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          <div className="flex flex-col gap-6 items-center py-8">
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