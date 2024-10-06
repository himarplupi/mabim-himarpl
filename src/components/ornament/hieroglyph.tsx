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
  return (
    <div
      className={cn(
        "font-sheikahComplete text-lg tracking-tight text-foreground",
        className,
      )}
      aria-label="Hieroglyph"
      role="img"
    >
      {Array.from({ length }).map((_, index) => (
        <span key={index}>{letters[index % letters.length]}</span>
      ))}
    </div>
  );
}
