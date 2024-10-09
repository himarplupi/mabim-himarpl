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

export function SwordIndicator({ className, pathClassName }: IndicatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 36"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M30.5603 12.2558L17.0036 24.9521L14.3333 22.261L20.872 15.6714L21.3513 14.2224L19.9135 14.7054L13.3747 21.295L10.7045 18.604L23.3027 4.9417L30.8 4.7002L30.5603 12.2558ZM17.2774 27.3671L8.10265 18.1209C7.62337 17.6379 6.87022 17.6379 6.39094 18.1209L5.70626 18.811C5.22698 19.294 5.22698 20.053 5.70626 20.536L8.95851 23.8136L4.61076 28.1951C4.06301 28.7471 4.06301 29.6787 4.61076 30.2307L5.26121 30.8862C5.80896 31.4382 6.73328 31.4382 7.28103 30.8862L11.5945 26.5391L14.8468 29.8167C15.3261 30.2997 16.0792 30.2997 16.5585 29.8167L17.2432 29.1267C17.7567 28.6091 17.7567 27.8501 17.2774 27.3671Z"
        className={cn("fill-neutral-50", pathClassName)}
      />
    </svg>
  );
}

export function DoubleSwordIndicator({
  className,
  pathClassName,
}: IndicatorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      className={cn("h-8 w-8 fill-none", className)}
    >
      <path
        d="M2.80005 3.35986L3.0292 9.40844L14.4297 19.5811L16.664 17.4366L11.1642 12.1578L10.7632 11.0031L11.9663 11.388L17.466 16.6667L19.7003 14.5222L9.15913 3.52482L2.80005 3.35986ZM3.20107 22.1654L6.81028 18.7013L4.06041 16.0619C3.65938 15.677 3.65938 15.0721 4.06041 14.6872L4.6333 14.1373C5.03432 13.7524 5.6645 13.7524 6.06552 14.1373L13.7995 21.5606C13.9141 21.6706 13.9714 21.6706 13.9714 21.6706C13.9714 21.6706 14.086 21.6706 14.2006 21.5606L21.9346 14.1373C22.3356 13.7524 22.9658 13.7524 23.3668 14.1373L23.9397 14.6872C24.3407 15.0721 24.3407 15.677 23.9397 16.0619L21.1898 18.7013L24.799 22.1654C25.2573 22.6053 25.2573 23.3752 24.799 23.8151L24.2834 24.3099C23.8251 24.7498 23.0231 24.7498 22.5648 24.3099L18.9556 20.8458L16.2057 23.4851C15.1745 24.4749 12.7683 24.4749 11.7371 23.4851L8.98726 20.8458L5.37805 24.3099C4.91974 24.7498 4.1177 24.7498 3.65938 24.3099L3.14378 23.8151C2.68547 23.3202 2.68547 22.6053 3.20107 22.1654ZM15.1745 7.31893L20.8461 13.0926L24.9709 9.40844L25.2001 3.35986L18.8983 3.57981L15.1745 7.31893Z"
        className={cn("fill-neutral-50", pathClassName)}
      />
    </svg>
  );
}
