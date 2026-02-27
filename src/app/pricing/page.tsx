"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/Sections/PricingHeader";
import BrandedAppCTA from "@/components/Sections/BrandedAppCTA";
import PricingFAQ from "@/components/Sections/PricingFAQ";

export default function PricingPage() {
  // 1. Lift state here so both Header and Content use the same toggle value
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="flex flex-col  min-h-screen bg-[#FAFAFA] font-sans antialiased">
      
      {/* 2. Pass state and setter to Header */}
      <PricingHeader isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      
      <div className="mt-12">
        <BrandedAppCTA />
      </div>
      
      <div className="mt-12 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <PricingFAQ />
      </div>
      
      <Footer />
    </main>
  );
}