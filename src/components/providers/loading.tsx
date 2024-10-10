"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [soundBg1, setSoundBg1] = useState<HTMLAudioElement | null>(null);
  const [soundBg2, setSoundBg2] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (soundBg1 && soundBg2) {
      const playSequence = () => {
        soundBg1.volume = 0.75;
        void soundBg1.play();

        soundBg1.onended = () => {
          soundBg2.volume = 0.75;
          void soundBg2.play();

          soundBg2.onended = playSequence;
        };
      };

      playSequence();
      setIsSoundPlaying(true);
    }
  }, [soundBg1, soundBg2]);

  const handlePlaySound = () => {
    const audio = new Audio("/assets/sound-bg-1.mp3");
    const audio2 = new Audio("/assets/sound-bg-2.m4a");

    setSoundBg1(audio);
    setSoundBg2(audio2);
  };

  return (
    <>
      {children}
      <AnimatePresence mode="wait">
        {(!isSoundPlaying || isLoading) && (
          <motion.div
            key="loader"
            className="fixed left-0 right-0 top-0 z-[9999] flex h-screen flex-col items-center justify-center gap-y-4 bg-primary-500"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handlePlaySound}
          >
            <motion.div
              className="h-32 w-32 rounded-full border-4 border-neutral-300"
              animate={{
                rotate: 360,
                borderTopColor: isLoading ? "#525252" : "#d4d4d4",
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
        )}
      </AnimatePresence>
    </>
  );
}
