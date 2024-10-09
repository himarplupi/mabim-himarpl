"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const audio = new Audio("/assets/sound-bg-1.mp3"); // Initialize audio

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlaySound = () => {
    audio.loop = true;
    audio.volume = 0.75;
    audio.play().catch((error) => console.error("Error playing sound:", error));
    setIsSoundPlaying(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!isSoundPlaying || isLoading ? (
        <motion.div
          key="loader"
          className="fixed left-0 right-0 top-0 z-[9999] flex h-screen flex-col items-center justify-center gap-y-4 bg-primary-500"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handlePlaySound}
        >
          <motion.div
            className="h-32 w-32 rounded-full border-4 border-neutral-300"
            // style={{
            //   borderTopColor: isLoading
            //     ? "rgb(10 10 10 / var(--tw-border-opacity))"
            //     : "rgb(212 212 212 / var(--tw-border-opacity)",
            // }}
            animate={{
              rotate: 360,
              borderTopColor: isLoading
                ? "rgb(10 10 10 / var(--tw-border-opacity))"
                : "rgb(212 212 212 / var(--tw-border-opacity)",
            }}
            transition={
              isLoading
                ? { duration: 1, repeat: Infinity, ease: "linear" }
                : undefined
            }
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-bonobo text-lg text-neutral-200"
          >
            Tekan dimana saja untuk memulai
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
