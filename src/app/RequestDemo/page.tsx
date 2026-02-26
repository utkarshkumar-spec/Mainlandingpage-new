"use client";

import Footer from "@/components/Footer";
import DemoHeader from "@/components/Sections/DemoHeader";
import DemoHero from "@/components/Sections/DemoHero";
import CustomerStory from "@/components/Sections/CustomerStory";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header: Ensures consistency across the site */}
      <DemoHeader />

      {/* 2. Hero Section */}
      <DemoHero />

      {/* 3. Wall of Love / Customer Story */}
      <CustomerStory />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}