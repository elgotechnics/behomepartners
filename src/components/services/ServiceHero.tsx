import { CTAButton } from "@/components/ui/cta-button";
import { ContactCTAButton } from "@/components/ContactCTAButton";
import { EstimationChoiceButton } from "@/components/EstimationChoiceButton";
import { CallPopover } from "@/components/services/CallPopover";
import type { ServiceConfig } from "@/data/services";

type Props = {
  hero: ServiceConfig["hero"];
};

function isContactCta(href: string): boolean {
  return href.startsWith("/contact?") || href === "/contact";
}

function isEstimationCta(href: string): boolean {
  return href === "/estimation";
}

export function ServiceHero({ hero }: Props) {
  const primaryIsContact = isContactCta(hero.primaryCta.href);
  const primaryIsEstimation = isEstimationCta(hero.primaryCta.href);
  return (
    <section className="relative bg-ink-deep overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink-deep to-ink-darker pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-20 text-center">
        <h1 className="mx-auto max-w-[920px] text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-tight leading-[1.04] text-white text-balance">
          {hero.h1}
          <span className="text-accent">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[16px] lg:text-[18px] text-white/70 leading-relaxed">
          {hero.description}
        </p>
        <div className="mt-9 flex justify-center">
          <div className="flex flex-col sm:flex-row gap-3">
            {primaryIsContact ? (
              <ContactCTAButton
                subject={hero.primaryCta.label}
                variant="primary"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                {hero.primaryCta.label}
              </ContactCTAButton>
            ) : primaryIsEstimation ? (
              <EstimationChoiceButton
                variant="primary"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                {hero.primaryCta.label}
              </EstimationChoiceButton>
            ) : (
              <CTAButton
                href={hero.primaryCta.href}
                variant="primary"
                className="w-full sm:w-auto whitespace-nowrap"
              >
                {hero.primaryCta.label}
              </CTAButton>
            )}
            {hero.secondaryCta ? (
              hero.secondaryCta.href.startsWith("tel:") ? (
                <CallPopover
                  variant="ghost"
                  className="w-full sm:w-auto md:hidden"
                  buttonClassName="w-full sm:w-auto whitespace-nowrap"
                />
              ) : (
                <CTAButton
                  href={hero.secondaryCta.href}
                  variant="ghost"
                  className="w-full sm:w-auto whitespace-nowrap"
                >
                  {hero.secondaryCta.label}
                </CTAButton>
              )
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pb-20 lg:pb-24">
        <div className="rounded-[20px] bg-white/[0.08] backdrop-blur-2xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {hero.points.map((point) => (
              <li
                key={point.title}
                className="group flex items-center gap-4 px-5 py-5 lg:px-6 lg:py-6 transition-colors hover:bg-white/[0.04]"
              >
                <span
                  aria-hidden
                  className="grid place-items-center w-11 h-11 rounded-[12px] bg-accent text-white shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_-12px_rgba(184,31,58,0.6)] transition-transform group-hover:-translate-y-0.5"
                >
                  {point.icon}
                </span>
                <span className="text-[14px] font-semibold text-white/95 leading-snug">
                  {point.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
