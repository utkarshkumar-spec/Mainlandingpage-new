import Footer from "@/components/Footer";
import FAQSection from "@/components/Sections/FAQ";
import FeaturesSection from "@/components/Sections/FeatureHighlight";
import HeroSectionOne from "@/components/Sections/Hero";
import HowItWorksSection from "@/components/Sections/HowItWorks";
import Reviews from "@/components/Sections/review";
 // Added import

export default function Home() {
  return (
    <>
      <div className="relative mx-auto w-full flex flex-col ">

        <HeroSectionOne />
        <section id="features" className="">
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

        {/* Added the Branded App CTA right above the FAQ */}
       

        <section id="faq" className="scroll-mt-20">
          <FAQSection />
        </section>

      </div>
      <div className=" ">
        <Footer />
      </div>

    </>
  );
}