import Image from "next/image";
import { Check } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { ServiceConfig } from "@/data/services";

type Props = {
  intro: ServiceConfig["intro"];
};

export function ServiceIntro({ intro }: Props) {
  const imagePosition = intro.imagePosition ?? "right";
  const paragraphs = intro.body;
  const bullets = intro.bullets ?? [];

  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div
            className={`flex flex-col justify-center ${
              imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {intro.eyebrow ? (
              <div>
                <SectionEyebrow tone="light">{intro.eyebrow}</SectionEyebrow>
              </div>
            ) : null}
            <h2 className="mt-5 text-3xl lg:text-[40px] font-extrabold text-ink tracking-tight leading-[1.08] text-balance">
              {intro.title}
            </h2>
            <div className="mt-6 space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15.5px] lg:text-base text-ink/75 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {bullets.length > 0 ? (
              <ul className="mt-8 space-y-3.5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet.text}
                    className="flex items-start gap-3.5"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 grid place-items-center w-8 h-8 rounded-[9px] bg-accent text-white shrink-0"
                    >
                      {bullet.icon ?? <Check size={15} strokeWidth={2.4} />}
                    </span>
                    <span className="text-[14.5px] text-ink/85 leading-relaxed pt-[5px]">
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div
            className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px] rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline shadow-[0_24px_60px_-30px_rgba(15,23,42,0.25)] ${
              imagePosition === "right" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
