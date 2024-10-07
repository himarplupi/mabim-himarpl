import { cn } from "@/lib/utils";

interface BorderProps {
  className?: string;
  pathClassName?: string;
  topLeftClassName?: string;
  topRightClassName?: string;
  bottomLeftClassName?: string;
  bottomRightClassName?: string;
}

export function BorderCorner({
  pathClassName,
  topLeftClassName,
  topRightClassName,
  bottomLeftClassName,
  bottomRightClassName,
}: BorderProps) {
  return (
    <>
      <TopLeftCorner
        className={cn(`absolute left-2 top-2`, topLeftClassName)}
        pathClassName={pathClassName}
      />
      <TopRightCorner
        className={cn(`absolute right-2 top-2`, topRightClassName)}
        pathClassName={pathClassName}
      />
      <BottomLeftCorner
        className={cn(`absolute bottom-2 left-2`, bottomLeftClassName)}
        pathClassName={pathClassName}
      />
      <BottomRightCorner
        className={cn(`absolute bottom-2 right-2`, bottomRightClassName)}
        pathClassName={pathClassName}
      />
    </>
  );
}

export function TopLeftCorner({ className, pathClassName }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 35"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M2.0321 35H0.0283203V18.9875L19.0517 0H35.0945V2H20.0661L2.0321 20V35ZM14.7561 0L0.0283203 14.7V0H14.7561ZM6.42789 6.3875V0.875L0.904974 6.3875H6.42789Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}

export function TopRightCorner({ className, pathClassName }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 35"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M0.905519 2L0.905519 2.11397e-05L16.9483 2.19396e-05L35.9717 18.9875L35.9717 35L33.9679 35L33.9679 20L15.9339 2L0.905519 2ZM35.9717 14.7L21.2439 2.21538e-05L35.9717 2.28882e-05L35.9717 14.7ZM29.5721 6.38752L35.095 6.38752L29.5721 0.875022L29.5721 6.38752Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}

export function BottomLeftCorner({ className, pathClassName }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 35"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M35.0945 33L35.0945 35L19.0517 35L0.0283194 16.0125L0.0283186 0L2.0321 -7.66396e-08L2.0321 15L20.0661 33L35.0945 33ZM0.0283196 20.3L14.7561 35L0.0283203 35L0.0283196 20.3ZM6.42789 28.6125L0.904974 28.6125L6.42789 34.125L6.42789 28.6125Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}

export function BottomRightCorner({ className, pathClassName }: BorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 35"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M33.9674 -8.15393e-06L35.9712 -7.62939e-06L35.9712 16.0125L16.9478 35L0.905023 35L0.905024 33L15.9334 33L33.9674 15L33.9674 -8.15393e-06ZM21.2434 35L35.9712 20.3L35.9712 35L21.2434 35ZM29.5716 28.6125L29.5716 34.125L35.0945 28.6125L29.5716 28.6125Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}
