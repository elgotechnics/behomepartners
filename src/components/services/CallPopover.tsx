"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

const AGENCIES = [
  {
    id: "nivelles",
    name: "Nivelles",
    address: "Avenue du Centenaire 53 bte 4 · 1400",
    phone: "+32 67 84 12 84",
    href: "tel:+3267841284",
  },
  {
    id: "braine",
    name: "Braine-l'Alleud",
    address: "Chaussée de Tubize 11 · 1420",
    phone: "+32 2 385 12 84",
    href: "tel:+3223851284",
  },
] as const;

type Variant = "primary" | "outline" | "inverted" | "ghost";
type Align = "left" | "right";

type Props = {
  label?: string;
  variant?: Variant;
  align?: Align;
  className?: string;
  buttonClassName?: string;
};

export function CallPopover({
  label = "Nous appeler",
  variant = "ghost",
  align = "left",
  className,
  buttonClassName,
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      <CTAButton
        ref={buttonRef as never}
        variant={variant}
        className={buttonClassName}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={popoverId}
      >
        {label}
      </CTAButton>

      {open ? (
        <div
          id={popoverId}
          role="menu"
          className={cn(
            "absolute z-50 top-[calc(100%+10px)] w-[300px] rounded-2xl border border-black/[0.06] bg-white p-2 shadow-xl text-ink text-left",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          <div className="px-2 py-1.5 text-[10px] tracking-[.2em] uppercase font-bold text-ink/55">
            Appeler une agence
          </div>
          {AGENCIES.map((a) => (
            <a
              key={a.id}
              href={a.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-black/[0.04] transition-colors"
            >
              <span className="text-sm font-bold text-ink">{a.name}</span>
              <span className="text-xs text-ink/60">{a.address}</span>
              <span className="text-sm font-semibold text-accent mt-0.5 tabular-nums">
                {a.phone}
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
