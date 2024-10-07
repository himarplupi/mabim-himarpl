import { cn } from "@/lib/utils";

interface IndicatorProps {
  className?: string;
  pathClassName?: string;
}

export function AbilityIndicator({ className, pathClassName }: IndicatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M14.9996 8.24918L8.24874 15L14.9996 21.7508L21.7504 15L14.9996 8.24918Z"
        className={cn("fill-foreground", pathClassName)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15L15 0L30 15L15 30L0 15ZM5.35648 15L14.9996 5.35692L24.6426 15L14.9996 24.6431L5.35648 15Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}

export function RhombusIndicator({ className, pathClassName }: IndicatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 21"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M4.59788 0.923387C4.96043 0.165328 6.03959 0.165329 6.40214 0.923388L10.7937 10.1057C10.9241 10.3785 10.9241 10.6957 10.7937 10.9686L6.40213 20.1508C6.03958 20.9089 4.96042 20.9089 4.59787 20.1508L0.206343 10.9686C0.0758554 10.6957 0.0758556 10.3785 0.206344 10.1057L4.59788 0.923387Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}

export function MenuIndicator({ className, pathClassName }: IndicatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 13"
      className={cn("h-4 w-8 fill-none", className)}
    >
      <path
        d="M30.6076 7.13091L8.83423 12.9751C8.47033 13.0415 8.10643 12.9751 7.86383 12.7759L0.343237 7.0645C-0.0206624 6.79885 -0.0206624 6.26756 0.343237 6.00192L7.80318 0.224138C8.10643 0.0249042 8.47033 -0.041507 8.77358 0.0249042L12.3519 1.02107L4.95263 6.46679L7.56058 7.59579L15.7483 1.88442L30.6682 5.80268C31.2141 6.00192 31.2141 6.99808 30.6076 7.13091Z"
        className={cn("fill-foreground", pathClassName)}
      />
    </svg>
  );
}
