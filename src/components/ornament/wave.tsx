import { cn } from "@/lib/utils";

interface WaveProps {
  className?: string;
  pathClassName?: string;
}

export function Wave({ className, pathClassName }: WaveProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 655 831"
      className={cn("h-[831px] w-[655px] fill-none", className)}
    >
      <path
        d="M-17.8038 568.872C-230.637 612.883 -954.948 209.187 -1290 96.9181V1086H1951V12.0121C1951 -20.3849 1536.44 -6.99607 1336.91 307.804C1220.54 491.393 965.348 462.512 672.803 532.196C380.258 601.88 248.237 513.858 -17.8038 568.872Z"
        className={cn("fill-primary-800", pathClassName)}
      />
    </svg>
  );
}
