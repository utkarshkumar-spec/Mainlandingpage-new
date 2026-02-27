"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock3,
  PlayCircle,
} from "lucide-react";

type Lesson = {
  name: string;
  duration: string;
};

type Module = {
  moduleLabel: string;
  title: string;
  lessonCount: number;
  duration: string;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    moduleLabel: "Module 1",
    title: "Foundations & Mindset",
    lessonCount: 4,
    duration: "1h 20m",
    lessons: [
      { name: "Welcome to the Course", duration: "08:10" },
      { name: "How AI Engineers Think", duration: "18:40" },
      { name: "Core Tools Setup", duration: "21:12" },
      { name: "Mindset for Building Fast", duration: "31:58" },
    ],
  },
  {
    moduleLabel: "Module 2",
    title: "Building Your First Agent",
    lessonCount: 6,
    duration: "1h 05m",
    lessons: [
      { name: "Agent Basics", duration: "11:32" },
      { name: "Prompt Patterns", duration: "12:20" },
      { name: "Simple Memory Layer", duration: "08:18" },
      { name: "Tool Calling Intro", duration: "10:11" },
      { name: "Error Handling", duration: "09:15" },
      { name: "Mini Project", duration: "13:24" },
    ],
  },
  {
    moduleLabel: "Module 3",
    title: "Data, Retrieval & Context",
    lessonCount: 6,
    duration: "56m",
    lessons: [
      { name: "Embeddings in Practice", duration: "08:22" },
      { name: "Chunking Strategies", duration: "09:15" },
      { name: "Vector Search Setup", duration: "10:41" },
      { name: "Context Windows", duration: "07:54" },
      { name: "Grounding Outputs", duration: "09:06" },
      { name: "RAG Workflow Demo", duration: "11:02" },
    ],
  },
  {
    moduleLabel: "Module 4",
    title: "Automation Workflows",
    lessonCount: 7,
    duration: "1h 03m",
    lessons: [
      { name: "Event Triggers", duration: "10:02" },
      { name: "Scheduling Tasks", duration: "08:40" },
      { name: "Webhook Integration", duration: "09:28" },
      { name: "State Management", duration: "11:10" },
      { name: "Monitoring and Logs", duration: "08:54" },
      { name: "Retries and Guardrails", duration: "07:16" },
      { name: "Automation Case Study", duration: "08:30" },
    ],
  },
  {
    moduleLabel: "Module 5",
    title: "Deploy, Scale & Production",
    lessonCount: 5,
    duration: "1h 08m",
    lessons: [
      { name: "Production Architecture", duration: "12:30" },
      { name: "Security Basics", duration: "10:40" },
      { name: "Cost Optimization", duration: "11:20" },
      { name: "Observability Stack", duration: "13:15" },
      { name: "Final Launch Checklist", duration: "20:15" },
    ],
  },
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_#FFFFFF_0%,_#F4F5F8_65%,_#ECEEF2_100%)] px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-manrope text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Curriculum
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-[20px]">
            Designed for ed-tech businesses that need full branding control,
            scalable infrastructure, and modern learning workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-neutral-600 sm:mt-10 sm:gap-x-8">
            <div className="inline-flex items-center gap-2 text-[20px] sm:text-[40px]">
              <BookOpen className="h-6 w-6 text-[#0066FF] sm:h-7 sm:w-7" />
              <span>5 Module</span>
            </div>
            <span className="hidden text-[#8FB8FF] sm:inline">•</span>
            <div className="inline-flex items-center gap-2 text-[20px] sm:text-[40px]">
              <PlayCircle className="h-6 w-6 text-[#0066FF] sm:h-7 sm:w-7" />
              <span>28 Lesson</span>
            </div>
            <span className="hidden text-[#8FB8FF] sm:inline">•</span>
            <div className="inline-flex items-center gap-2 text-[20px] sm:text-[40px]">
              <Clock3 className="h-6 w-6 text-[#0066FF] sm:h-7 sm:w-7" />
              <span>5hr 32min</span>
            </div>
          </div>
        </header>

        <div className="mt-12 space-y-6 sm:mt-14">
          {modules.map((module, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={module.moduleLabel}
                className="overflow-hidden rounded-[22px] border border-neutral-200 bg-[#F6F6F6] sm:rounded-[32px]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-5 text-left sm:px-8 sm:py-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold uppercase tracking-[0.06em] text-neutral-500">
                        {module.moduleLabel}
                      </p>
                      <h3 className="mt-2 font-manrope text-[36px] font-semibold leading-tight tracking-tight text-neutral-900 sm:text-[52px]">
                        {module.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-lg font-medium text-neutral-800 sm:gap-6">
                      <span>{module.lessonCount} Lessons</span>
                      <span className="text-[#0066FF]">•</span>
                      <span>{module.duration}</span>
                      {isOpen ? (
                        <ChevronUp className="h-7 w-7 text-[#0066FF]" />
                      ) : (
                        <ChevronDown className="h-7 w-7 text-[#0066FF]" />
                      )}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-neutral-200 bg-white px-5 py-4 sm:px-8 sm:py-6">
                    <ul className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson.name}
                          className="flex items-center justify-between rounded-xl border border-neutral-100 px-4 py-3"
                        >
                          <div className="flex items-center gap-3 text-neutral-700">
                            <PlayCircle className="h-5 w-5 text-[#0066FF]" />
                            <span className="text-base">{lesson.name}</span>
                          </div>
                          <span className="text-sm font-medium text-neutral-500">
                            {lesson.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
