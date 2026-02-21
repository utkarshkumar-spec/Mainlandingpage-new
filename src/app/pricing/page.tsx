import Footer from "@/components/Footer";
import PricingHeader from "@/components/Sections/PricingHeader"; // Added the import for the Pricing Header
import PricingContent from "@/components/Sections/PricingContent";
import TrustedCompanies from "@/components/Sections/TrustedCompanies";
import BrandedAppCTA from "@/components/Sections/BrandedAppCTA";
import PricingFAQ from "@/components/Sections/PricingFAQ";

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAFAFA]">
      
      {/* Added the Pricing Header with the Monthly/Annual toggle */}
      <PricingHeader />
      
      <PricingContent />
      
      {/* <TrustedCompanies /> */}
      
      {/* Added the Branded App section */}
      <div className="mt-12">
        <BrandedAppCTA />
      </div>
      
      {/* Added the new Pricing FAQ section with a white background wrap to separate it */}
      <div className="mt-12 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <PricingFAQ />
      </div>
      
      <Footer />
    </main>
  );
}