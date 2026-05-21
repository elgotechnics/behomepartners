"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden font-bold tracking-[.15em] uppercase rounded-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent-deep",
        outline:
          "bg-transparent text-accent ring-2 ring-inset ring-accent hover:bg-accent hover:text-white",
        inverted: "bg-white text-accent hover:bg-white",
        ghost:
          "bg-white/10 text-white hover:bg-white hover:text-accent",
      },
      size: {
        sm: "text-[11px] h-11 px-5",
        default: "text-[13px] h-14 px-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const arrowVariants = cva(
  "absolute top-1 bottom-1 right-1 z-10 grid place-items-center rounded-[10px] transition-[width,background-color,color] duration-500 ease-out group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 w-10",
  {
    variants: {
      variant: {
        primary: "bg-white/15 text-white",
        outline:
          "bg-accent/10 text-accent group-hover:bg-white/15 group-hover:text-white",
        inverted: "bg-accent/10 text-accent",
        ghost:
          "bg-white/15 text-white group-hover:bg-accent/10 group-hover:text-accent",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type Variants = VariantProps<typeof ctaButtonVariants>;

type CommonProps = Variants & {
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type AsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href"> & {
    href: string;
  };

export type CTAButtonProps = AsButton | AsAnchor;

export const CTAButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CTAButtonProps
>(({ className, variant, size, children, ...props }, ref) => {
  const classes = cn(ctaButtonVariants({ variant, size, className }));
  const inner = (
    <>
      <span className="relative z-0 mr-9 transition-opacity duration-500 group-hover:opacity-0">
        {children}
      </span>
      <i className={cn(arrowVariants({ variant }))} aria-hidden>
        <ChevronRight size={16} strokeWidth={2.4} />
      </i>
    </>
  );

  if ("href" in props && typeof props.href === "string") {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
});
CTAButton.displayName = "CTAButton";
