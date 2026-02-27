"use client";

import Footer from "@/components/Footer";
import DemoHeader from "@/components/Sections/DemoHeader";
import DemoHero from "@/components/Sections/DemoHero";
import CustomerStory from "@/components/Sections/CustomerStory";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative">
        {/* 1. Header: Ensures consistency across the site */}
        <DemoHeader />

        {/* 2. Hero Section: intentionally overlaps header */}
        <div className="-mt-28 md:-mt-50">
          <DemoHero />
        </div>
      </section>

      {/* 3. Wall of Love / Customer Story */}
      <CustomerStory />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
