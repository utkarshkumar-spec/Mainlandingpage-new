import Footer from "@/components/Footer";
import FAQSection from "@/components/Sections/FAQ";
import FeaturesSection from "@/components/Sections/FeatureHighlight";
import HeroSectionOne from "@/components/Sections/Hero";
import HowItWorksSection from "@/components/Sections/HowItWorks";
import Reviews from "@/components/Sections/review";
import { Spotlight } from "@/components/ui/spotlight"; // Aceternity UI
import { BackgroundBeams } from "@/components/ui/background-beams"; // Aceternity UI
import FullNavbar from "@/components/ui/navbar";
import TeamSection from "@/components/Sections/teamsection";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 
        1. GLOBAL BACKGROUND 
        - Dark mode: Deep black with white grid
        - Light mode: Pure white with black grid
      */}
      {/* <div className="fixed inset-0 h-full w-full 
        bg-white bg-grid-black/[0.02] 
        dark:bg-black dark:bg-grid-white/[0.03] 
        -z-10"
      />


      <div className="fixed inset-0 pointer-events-none 
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] 
        dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] 
        -z-10"
      /> */}

      {/* 3. HERO SECTION with Spotlight */}
      <section className="relative">

        {/* The Spotlight component adds a premium glow that moves with the theme */}
        <Spotlight
          className="md:left-60 md:-top-20 fill-slate-900/10 dark:fill-white/10"
        />
        <HeroSectionOne />
      </section>

      {/* 4. MAIN CONTENT WRAPPER */}
      <div className="relative mx-auto w-full px-6 flex flex-col gap-24 md:gap-20 pb-20">

        <section id="features" className="scroll-mt-20">
          {/* Feature highlights should feel like they are floating on the grid */}
          <FeaturesSection />
        </section>

        <section id="how-it-works" className="scroll-mt-20">
          <HowItWorksSection />
        </section>
        {/* <section id="TeamSection" className="scroll-mt-20">
          <TeamSection />
        </section> */}
        <section id="reviews" className="scroll-mt-20 w-full">
          <Reviews />
        </section>

        <section id="faq" className="scroll-mt-20">
          <FAQSection />
        </section>


      </div>
      <div className="relative mx-auto max-w-7xl">
        <Footer />
      </div>

    </div>
  );
}
