"use client";

import { useRef } from "react";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
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
      <VelocityScroll
        text={Array.from({ length })
          .map((_, index) => letters[index % letters.length])
          .join("")}
      />
    </div>
  );
}
