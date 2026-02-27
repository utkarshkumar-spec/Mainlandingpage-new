"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BrandedAppCTA() {
  const features = [
    "Custom branding and design",
    "Analytics integration",
    "Offline content access",
  ];

  return (
    /* FIXED: Reduced pb-16 to pb-8 to tighten the gap with FAQ */
    <section className="mx-auto w-full max-w-340 px-4 pb-8 sm:px-6 lg:px-8">
      
      <div 
        className="relative w-full overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 40%, #E6EFFF 100%)",
        }}
      >
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          
          <div className="relative z-10 flex flex-col items-start gap-5 p-8 sm:p-10 md:p-12 lg:p-16">
            <h2 
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.2] tracking-tight text-gray-900" 
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Branded App <br className="hidden sm:block" /> For LMS
            </h2>
            
            <p className="max-w-md text-base md:text-lg font-medium text-gray-700 leading-relaxed">
              If you're using Fermion LMS, you can extend your reach with custom-branded mobile applications for both Android and iOS platforms.
            </p>
            
            <ul className="mt-2 flex w-full flex-col gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm md:text-[16px] font-semibold text-gray-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0 fill-[#0066FF] text-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0066FF] px-8 py-4 text-[16px] font-bold text-white shadow-lg transition-all hover:bg-blue-700 active:scale-95 md:w-fit">
              Get started
              <span className="text-xl transition-transform group-hover:translate-x-1">›</span>
            </button>
          </div>

          <div className="relative flex w-full justify-center md:justify-end self-end px-4 md:px-0">
            <div className="relative h-[300px] w-full max-w-[320px] sm:h-[400px] sm:max-w-[400px] md:h-[500px] md:max-w-none lg:h-[580px] lg:w-[120%] lg:-mr-20">
               <Image 
                 src="/Demo.png" 
                 alt="Mobile App Mockup" 
                 fill 
                 quality={100}
                 className="object-contain object-bottom md:object-right-bottom" 
                 priority
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}