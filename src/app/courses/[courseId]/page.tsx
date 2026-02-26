"use client";

import FullNavbar from "@/components/ui/navbar";
import CourseHero from "@/components/Sections/CourseHero";
import MasteryGrid from "@/components/Sections/MasteryGrid";
import Curriculum from "@/components/Sections/Curriculum";
import InstructorSection from "@/components/Sections/InstructorSection"; // New
import ReviewsSection from "@/components/Sections/ReviewsSection";
import Footer from "@/components/Footer";

export default function CourseDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <FullNavbar />
      <CourseHero />

      <div className="max-w-[1355px] mx-auto px-4 md:px-8 space-y-24 py-12">
        <MasteryGrid />
        <Curriculum />
        
        {/* Instructor & Certificate Section */}
        <InstructorSection />
        
        <ReviewsSection />
      </div>

      <Footer />
    </main>
  );
}