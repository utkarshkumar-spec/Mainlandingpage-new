"use client";
import React, { useRef, useState } from "react";
import { Pause, Play, ShoppingCart, Users } from "lucide-react";

export default function CourseHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className="relative flex w-full flex-col items-start justify-between gap-8 bg-[linear-gradient(to_bottom_right,_#0066FF,_#ABCDFF)] px-4 pt-14 sm:px-6 sm:pt-20 md:flex-row md:items-end md:gap-10 md:px-10 md:pt-32 lg:px-12 lg:pt-40">
      <div className="w-full max-w-2xl space-y-6 pb-8 text-white sm:pb-12 md:pb-24">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-xl text-xs font-bold tracking-widest">
          Professional
        </div>
        <h1 className="font-manrope text-[clamp(30px,8vw,56px)] leading-[1.1] font-semibold tracking-normal">
          The AI Engineer Course 2026: <br />
          Complete AI Engineer Bootcamp
        </h1>
        <p className="max-w-lg text-base text-white/80 sm:text-lg">
          Designed for ed-tech businesses that need full branding control,
          scalable infrastructure, and modern learning workflows.
        </p>
        <div className="flex w-full flex-col items-start gap-4 pt-4 text-white sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <button className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0066FF] shadow-sm sm:px-8 sm:py-4 sm:text-lg">
            <ShoppingCart className="h-6 w-6" strokeWidth={2.2} />
            <span className="font-medium text-sm">Purchase Course</span>
          </button>
          <div className="inline-flex items-center gap-3 text-base font-medium sm:text-lg">
            <Users className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={2.2} />
            <span className="font-medium">1,240 Students Enrolled</span>
          </div>
        </div>
      </div>

      {/* Course video */}
      <div className="relative aspect-video w-full max-w-3xl self-center overflow-hidden rounded-[20px] translate-y-6 shadow-sm sm:translate-y-10 sm:rounded-[24px] md:w-[56%] md:max-w-none md:self-end md:translate-y-16 lg:w-[640px]">
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute inset-0 z-10 flex items-center justify-center"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#0066FF] shadow-xl transition-transform hover:scale-105 sm:h-[72px] sm:w-[72px]">
            {isPlaying ? (
              <Pause className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={2.4} />
            ) : (
              <Play className="ml-0.5 h-6 w-6 sm:ml-1 sm:h-8 sm:w-8" strokeWidth={2.4} />
            )}
          </span>
        </button>

        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/courses.mp4"
          preload="metadata"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
