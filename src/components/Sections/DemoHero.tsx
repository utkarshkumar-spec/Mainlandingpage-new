"use client";

import React from "react";

export default function DemoHero() {
  const calUrl = "https://cal.com/newralfounder/schedule-synappses-lms-demo?embed=true";

  return (
    <section id="calendar-section" className="w-full flex justify-center bg-[#F3F7FF] px-4 py-10 md:py-20">
      {/* Main Container: 1355px width, 32px Radius (image_50565e) */}
      <div 
        className="flex flex-col md:flex-row bg-white overflow-hidden w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        style={{ 
          maxWidth: '1355px', 
          minHeight: '674px',
          borderRadius: '32px', 
        }}
      >
        {/* Left Column: Info Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-20">
          <div className="space-y-10">
            {/* Heading: Manrope, 36px, SemiBold, -4% Letter Spacing (image_5ee6b8) */}
            <h1 
              className="text-gray-900 leading-[1.1]"
              style={{ 
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(28px, 5vw, 36px)', 
                fontWeight: 600,
                letterSpacing: '-0.04em' 
              }}
            >
              Optimize your workforce <br className="hidden md:block" />
              <span className="text-[#0066FF]">with Synappses</span>
            </h1>

            {/* List Section: 18px (image_5ef144) */}
            <div className="max-w-[469px]">
              <p 
                className="font-semibold text-gray-900 mb-6"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '18px', letterSpacing: '-0.04em' }}
              >
                What to expect from a hands-on demo
              </p>
              <ul className="space-y-4">
                {[
                  "Lorum Ipsum dashboard experience",
                  "Guidance from a highly experienced workforce consultant",
                  "Consistent service levels exceeding 95% daily",
                  "Focused on the specific requirements of your organization",
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-gray-600"
                    style={{ 
                        fontFamily: 'Manrope, sans-serif', 
                        fontSize: '18px', 
                        fontWeight: 400,
                        letterSpacing: '-0.04em' 
                    }}
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[#0066FF] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Trusted Logos */}
          <div className="mt-12">
            <div className="mb-10">
              <p className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wider">Reach out to us</p>
              <p className="text-gray-500 text-lg font-medium">+91-700490223</p>
              <p className="text-gray-500 text-lg font-medium">info@synappses.in</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                Trusted by fast-growing companies around the world
              </p>
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="h-12 w-32 bg-gray-100 rounded-xl animate-pulse" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Blue iFrame Section */}
        <div 
          className="bg-[#0066FF] flex flex-col w-full md:w-[667px] p-6 md:p-10"
          style={{ minHeight: '674px' }} 
        >
          <div className="mb-6">
            <h3 className="text-white text-2xl md:text-3xl font-bold">Request a demo today</h3>
          </div>

          {/* Cal.com Container */}
          <div className="flex-1 w-full bg-white rounded-[24px] overflow-hidden shadow-2xl">
            <iframe
              src={calUrl}
              className="w-full h-full border-0"
              style={{ minHeight: '500px' }}
              title="Schedule a demo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}