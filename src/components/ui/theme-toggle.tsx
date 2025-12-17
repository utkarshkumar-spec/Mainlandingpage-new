"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-9 flex items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 transition-all hover:bg-black/10 dark:hover:bg-white/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-4 w-4 text-[#6496FF]" /> {/* Your Blue */}
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-4 w-4 text-[#FFC864]" /> {/* Your Gold */}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}