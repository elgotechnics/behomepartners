import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = {
  features: NonNullable<ServiceConfig["features"]>;
};

export function ServiceFeatures({ features }: Props) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-[120px] -right-[120px] w-[480px] h-[480px] rounded-full border border-white/[0.06] pointer-events-none"
      />
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[720px] mb-12 lg:mb-14">
          {features.eyebrow ? (
            <SectionEyebrow tone="dark">{features.eyebrow}</SectionEyebrow>
          ) : null}
          <h2 className="mt-5 text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-balance">
            {features.title}
          </h2>
          {features.description ? (
            <p className="mt-5 text-base text-white/70 leading-relaxed">
              {features.description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {features.items.map((item) => (
            <div
              key={item.title}
              className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] rounded-[14px] p-7 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:ring-white/25"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-[12px] bg-accent text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </span>
              <h3 className="text-[17px] font-bold tracking-tight leading-[1.2] mb-2.5 text-white">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-white/70 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
