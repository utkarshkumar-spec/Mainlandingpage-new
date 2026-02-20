import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function BrandedAppCTA() {
  const features = [
    "Custom branding and design",
    "Analytics integration",
    "Offline content access",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative flex flex-col items-center overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#E6EFFF] to-[#73A8FF] px-8 pt-12 md:flex-row md:px-16 md:pt-16 md:pb-0 pb-12 shadow-sm">
        
        {/* Left Content */}
        <div className="relative z-10 w-full max-w-xl md:w-1/2 md:pb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Branded App For LMS
          </h2>
          <p className="mt-4 text-gray-800 leading-relaxed max-w-sm">
            If you're using Fermion LMS, you can extend your reach with custom-branded mobile applications for both Android and iOS platforms.
          </p>
          
          <ul className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                <CheckCircle2 className="h-5 w-5 text-[#1863FF] fill-white" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="mt-8 group flex items-center gap-2 rounded-full bg-[#1863FF] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md active:scale-95">
            Get started
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative mt-12 w-full flex justify-center md:absolute md:-bottom-24 md:right-0 md:mt-0 md:w-1/2">
          {/* Sizing wrapper for the image */}
          <div className="relative w-[300px] h-[450px] md:w-[350px] md:h-[550px] lg:w-[400px] lg:h-[600px]">
             <Image 
               src="/Demo.png" 
               alt="Synappses Mobile App Mockup" 
               fill 
               quality={100}
               className="object-contain object-top drop-shadow-2xl" 
               priority
             />
          </div>
        </div>

      </div>
    </section>
  );
}