import Link from "next/link";
import type { HomeService } from "@/data/services-home";

type Props = {
  service: HomeService;
  carousel?: boolean;
  tone?: "dark" | "light";
};

const toneClasses = {
  dark: {
    card: "bg-gradient-to-b from-white/[0.09] to-white/[0.02] border border-white/20 ring-1 ring-inset ring-white/10 hover:border-white/40 hover:ring-white/20 hover:from-white/[0.14] hover:to-white/[0.05]",
    title: "text-white",
    body: "text-white/65",
    cta: "text-white/90 group-hover:text-white",
  },
  light: {
    card: "bg-white ring-1 ring-inset ring-hairline hover:ring-ink/20 hover:shadow-[0_24px_50px_-22px_rgba(15,23,42,0.22)]",
    title: "text-ink",
    body: "text-ink/65",
    cta: "text-ink/80 group-hover:text-accent",
  },
} as const;

export function ServiceCard({ service, carousel = false, tone = "dark" }: Props) {
  const carouselSizing =
    "snap-start flex-shrink-0 w-[calc(100vw-3rem)] sm:w-[44vw] lg:w-[340px] xl:w-[368px] min-w-[280px]";
  const gridSizing = "w-full h-full";
  const t = toneClasses[tone];

  return (
    <Link
      href={service.href}
      data-card
      className={`group relative ${carousel ? carouselSizing : gridSizing} flex flex-col p-6 sm:p-8 rounded-[14px] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer ${t.card}`}
    >
      <div className="flex flex-col flex-1">
        <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mb-6 rounded-[12px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {service.icon}
        </div>
        <h3 className={`font-bold text-xl mb-3 ${t.title}`}>{service.title}</h3>
        <p className={`text-sm leading-relaxed flex-1 ${t.body}`}>
          {service.description}
        </p>
        <div
          className={`flex items-center gap-2 mt-6 text-[12px] font-bold tracking-[.15em] uppercase transition-colors duration-500 ${t.cta}`}
        >
          {service.cta}
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
