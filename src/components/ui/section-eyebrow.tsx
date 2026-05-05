import { cn } from "@/lib/utils";

type Tone = "light" | "dark" | "onAccent";

interface SectionEyebrowProps {
  index?: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

const toneClasses: Record<
  Tone,
  { container: string; dot: string; label: string }
> = {
  light: {
    container: "bg-ink/[0.04] ring-1 ring-inset ring-ink/10",
    dot: "bg-accent",
    label: "text-ink/85",
  },
  dark: {
    container: "bg-white/[0.06] ring-1 ring-inset ring-white/15",
    dot: "bg-accent",
    label: "text-white/90",
  },
  onAccent: {
    container: "bg-white/15 ring-1 ring-inset ring-white/25",
    dot: "bg-white",
    label: "text-white",
  },
};

export function SectionEyebrow({
  children,
  tone = "light",
  className,
}: SectionEyebrowProps) {
  const t = toneClasses[tone];
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md px-3 py-1.5",
        t.container,
        className,
      )}
    >
      <span className={cn("block w-2.5 h-2.5 rounded-[3px]", t.dot)} aria-hidden />
      <span
        className={cn(
          "text-[10.5px] tracking-[.22em] uppercase font-semibold leading-none",
          t.label,
        )}
      >
        {children}
      </span>
    </div>
  );
}
