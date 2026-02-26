"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FullNavbar() {
  const demoUrl = "/RequestDemo"; 
  
  // Updated navItems with the Courses tab
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/#features" },
    { name: "How it works", link: "/#how-it-works" },
    { name: "Courses", link: "/courses/ai-engineer-2026" }, // New link added here
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody className="max-w-6xl">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/synappses_logo.svg" 
            alt="synappses logo" 
            width={140} 
            height={40} 
            className="w-auto h-8 sm:h-10"
          />
        </Link>

        {/* This will automatically render the new 'Courses' item */}
        <NavItems items={navItems} />

        <div className="hidden md:flex items-center gap-3">
          <Link
            href={demoUrl}
            className="group flex h-10 items-center justify-center rounded-full bg-[#1F6BFF] px-5 text-[14px] font-bold text-white transition-all hover:bg-[#1855cc] active:scale-95"
          >
            Request Demo
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </NavBody>

      <MobileNav className="w-full">
        <MobileNavHeader>
          <div className="flex items-center px-3 py-2">
            <Link href="/">
              <Image src="/synappses_logo.svg" alt="synappses logo" width={110} height={30} priority />
            </Link>
          </div>
          <div className="flex items-center px-3 py-2 gap-4">
            <MobileNavToggle 
               isOpen={isMobileMenuOpen} 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          <div className="flex w-full flex-col gap-8 items-center py-12 px-6">
            {navItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link} 
                className="text-[18px] font-semibold text-[#111827]" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="w-full h-px bg-gray-100" />

            <div className="flex flex-col w-full gap-4">
              <Link 
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 text-center text-[16px] font-bold text-[#515660]"
              >
                Login
              </Link>
              
              <Link
                href={demoUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#1F6BFF] text-white text-[16px] font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform text-center"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}