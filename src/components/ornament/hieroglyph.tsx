"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface HieroglyphProps {
  className?: string;
  length?: number;
}

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function Hieroglyph({ className, length = 16 }: HieroglyphProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <div
      ref={ref}
      className={cn(
        "font-sheikah-complete text-lg tracking-tight text-foreground",
        className,
      )}
      aria-label="Hieroglyph"
      role="img"
    >
      {Array.from({ length }).map((_, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0 }}
          animate={isInView ? { y: -10, opacity: 1 } : { y: 0, opacity: 0 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 1,
            delay: index * 0.1, // Stagger the animation
          }}
        >
          {letters[index % letters.length]}
        </motion.span>
      ))}
    </div>
  );
}
