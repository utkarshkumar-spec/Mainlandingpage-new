import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BrandedAppCTA() {
  const features = [
    "Custom branding and design",
    "Analytics integration",
    "Offline content access",
  ];

  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Main Gradient Container - Covers BOTH Text and Image */}
      <div 
        className="relative w-full overflow-hidden rounded-[32px]  shadow-sm"
        style={{
          background: "linear-gradient(135deg, #Ffffff 0%, #F5F8FF 20%, #0066FF 100%)",
        }}
      >
        
        {/* Grid Layout inside the Gradient Container */}
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          
          {/* Left Column: Text Content */}
          <div className="relative z-10 flex flex-col items-start gap-6 p-8 md:p-12 lg:p-16 lg:pr-8">
            <h2 
              className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-[48px] lg:leading-[100%] lg:tracking-[-0.04em]" 
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Branded App For LMS
            </h2>
            
            <p 
              className="text-base font-medium text-gray-800 lg:text-[20px] lg:leading-[100%] lg:tracking-[-0.04em]" 
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              If you're using Fermion LMS, you can extend your reach with custom-branded mobile applications for both Android and iOS platforms
            </p>
            
            <ul className="mt-2 flex w-full flex-col gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-[16px] font-medium text-gray-800">
                  <CheckCircle2 className="h-[20px] w-[20px] shrink-0 fill-[#0066FF] text-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 text-[16px] font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-95 md:w-fit">
              Get started
              <span className="text-xl transition-transform group-hover:translate-x-1">›</span>
            </button>
          </div>

          {/* Right Column: Image Area */}
          {/* Min-height ensures the container is tall enough for the image to show properly inside the grid */}
          <div className="relative flex w-full justify-center self-end pt-8 md:pt-12 lg:pt-0">
            <div className="relative h-[350px] w-[280px] sm:h-[450px] sm:w-[350px] md:h-[500px] md:w-[400px] lg:h-[605px] lg:w-[806px]">
               <Image 
                 src="/Demo.png" 
                 alt="Mobile App Mockup" 
                 fill 
                 quality={100}
                 // 'object-bottom' ensures the app mockup stays attached to the bottom edge of the container
                 // 'lg:object-right-bottom' aligns it nicely on large screens
                 className="object-contain object-bottom lg:object-right-bottom" 
                 priority
               />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}