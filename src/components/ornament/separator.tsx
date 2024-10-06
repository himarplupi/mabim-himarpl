import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  pathClassName?: string;
}

export function Separator({ className, pathClassName }: SeparatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-full fill-none", className)}
    >
      <path
        d="M198.681 7.96385C197.703 7.69334 197.703 6.30676 198.681 6.03625L220.234 0.0738554C220.408 0.0255882 220.593 0.0255883 220.767 0.0738555L242.32 6.03626C243.298 6.30677 243.298 7.69335 242.32 7.96386L220.767 13.9263C220.593 13.9745 220.408 13.9745 220.234 13.9263L198.681 7.96385Z"
        className={cn("fill-foreground", pathClassName)}
      />
      <path
        d="M2.80916 7.59832C0.139143 7.5415 0.139129 6.45868 2.80914 6.40186L169.936 3.30692C177.713 3.14143 184.353 4.84244 184.353 7.00012C184.353 9.1578 177.713 10.8588 169.936 10.6933L2.80916 7.59832Z"
        className={cn("fill-foreground", pathClassName)}
      />
      <path
        d="M438.192 7.59829C440.862 7.54148 440.862 6.45865 438.192 6.40183L271.064 3.30685C263.288 3.14136 256.648 4.84236 256.648 7.00004C256.648 9.15772 263.288 10.8587 271.064 10.6932L438.192 7.59829Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}
