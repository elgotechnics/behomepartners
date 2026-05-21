import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = {
  benefits: ServiceConfig["benefits"];
};

export function ServiceBenefits({ benefits }: Props) {
  return (
    <section className="bg-bg">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-14">
          {benefits.eyebrow ? (
            <div className="flex justify-center mb-4">
              <SectionEyebrow tone="light">{benefits.eyebrow}</SectionEyebrow>
            </div>
          ) : null}
          <h2 className="text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.08] text-ink text-balance">
            {benefits.title}
          </h2>
          {benefits.description ? (
            <p className="mt-5 text-base text-ink/70 leading-relaxed">
              {benefits.description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {benefits.items.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-[14px] p-7 lg:p-8 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/20 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]"
            >
              <span className="inline-flex items-center justify-center text-ink/55 mb-5 group-hover:text-accent transition-colors duration-300">
                {item.icon}
              </span>
              <h3 className="text-[17px] lg:text-[18px] font-bold text-ink tracking-tight leading-[1.2] mb-2.5">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-ink/60 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
