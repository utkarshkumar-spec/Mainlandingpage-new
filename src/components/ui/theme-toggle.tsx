"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const handleToggle = (e: React.MouseEvent) => {
    // 1. Capture click coordinates
    setTheme(isDark ? "light" : "dark");

  };

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleToggle}
        className="relative z-[100] h-10 w-10 flex items-center justify-center rounded-xl
        bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10
        transition-transform active:scale-90 overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Moon className="h-5 w-5 text-[#6496FF]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Sun className="h-5 w-5 text-[#FFC864]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}