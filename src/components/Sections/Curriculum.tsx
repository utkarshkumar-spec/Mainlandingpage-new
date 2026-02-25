"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const modules = [
    {
      title: "Module 1: Foundations & Mindset",
      lessons: [
        { name: "Welcome to the Course", duration: "05:20" },
        { name: "Setting up your AI Environment", duration: "12:45" },
        { name: "The Future of Agentic Workflows", duration: "08:15" },
      ],
    },
    {
      title: "Module 2: Building your first Agent",
      lessons: [
        { name: "Understanding LLM Chains", duration: "15:00" },
        { name: "Prompt Engineering for Agents", duration: "22:10" },
      ],
    }
  ];

  return (
    <section className="w-full pb-20">
      <div className="max-w-[1132px] mx-auto px-4 md:px-0">
        <h2 
          className="text-gray-900 mb-8"
          style={{ 
            fontFamily: 'Manrope, sans-serif', 
            fontSize: '36px', 
            fontWeight: 600, 
            letterSpacing: '-0.04em' 
          }}
        >
          Course Curriculum
        </h2>

        <div className="space-y-4">
          {modules.map((module, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 overflow-hidden" 
              style={{ borderRadius: '24px' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-all"
              >
                <span 
                  className="font-bold text-gray-900 text-left" 
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '18px' }}
                >
                  {module.title}
                </span>
                {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
              </button>

              

              {openIndex === idx && (
                <div className="px-6 pb-6 bg-white space-y-2">
                  {module.lessons.map((lesson, lIdx) => (
                    <div key={lIdx} className="flex items-center justify-between py-4 border-t border-gray-50">
                      <div className="flex items-center gap-3 text-gray-600">
                        <PlayCircle size={18} className="text-[#0066FF]" />
                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
                          {lesson.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 font-medium">{lesson.duration}</span>
                    </div>
                  ))}
                </div>

                






              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}