"use client";
import React from "react";

export default function CourseHero() {
  return (
    <section className="w-full bg-[#0066FF] pt-12 pb-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-2xl text-white space-y-6">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-md text-xs font-bold uppercase tracking-widest">
          Professional
        </div>
        <h1 
          className="leading-[110%]"
          style={{ 
            fontFamily: 'Manrope, sans-serif', 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            fontWeight: 600, 
            letterSpacing: '-0.04em' 
          }}
        >
          The AI Engineer Course 2026: <br />
          Complete AI Engineer Bootcamp
        </h1>
        <p className="text-white/80 text-lg max-w-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Designed for ed-tech businesses that need full branding control, scalable infrastructure, and modern learning workflows.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-white text-[#0066FF] px-6 py-3 rounded-full font-bold flex items-center gap-2">
            <span>🛒</span> Purchase Course
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span>👥</span> 1,240 Students Enrolled
          </div>
        </div>
      </div>

      {/* Video Placeholder */}
      <div 
        className="w-full md:w-[500px] aspect-video bg-gray-200 relative overflow-hidden"
        style={{ borderRadius: '24px' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-xl">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#0066FF] border-b-[10px] border-b-transparent"></div>
            </div>
        </div>
      </div>
    </section>
  );
}