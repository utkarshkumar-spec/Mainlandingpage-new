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

          <span className="text-xl font-bold font-sans tracking-tighter text-[#111827]">Synapses</span>
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
      <MobileNav className="w-full">
        <MobileNavHeader>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-sans tracking-tighter text-[#111827]">Synapses</span>
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
