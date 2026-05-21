import Image from "next/image";
import { CTAButton } from "@/components/ui/cta-button";
import { CallPopover } from "@/components/services/CallPopover";
import type { ServiceConfig } from "@/data/services";

type Props = {
  cta: ServiceConfig["cta"];
  background?: "bg" | "white" | "cream";
};

const BG_CLASS: Record<NonNullable<Props["background"]>, string> = {
  bg: "bg-bg",
  white: "bg-white",
  cream: "bg-cream",
};

const DEFAULT_IMAGE = {
  src: "/assets/images/guillaume-portrait.png",
  alt: "Be Home Partners",
};

const FLOATING_IMAGE = "/assets/images/listing-maison-1.jpg";

const AGENCIES = [
  {
    name: "Nivelles",
    phone: "+32 67 84 12 84",
    href: "tel:+3267841284",
  },
  {
    name: "Braine-l'Alleud",
    phone: "+32 2 385 12 84",
    href: "tel:+3223851284",
  },
] as const;

export function ServiceCTA({ cta, background = "bg" }: Props) {
  const image = cta.image ?? DEFAULT_IMAGE;
  const hasSecondary = !!cta.secondary;

  return (
    <section className={BG_CLASS[background]}>
      <div className="max-w-[1480px] xl:max-w-[1680px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 pb-4">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          <div className="lg:col-span-4 relative rounded-[14px] overflow-hidden aspect-[954/1194]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-8 relative bg-accent text-white rounded-[14px] px-8 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
            <div
              aria-hidden
              className="absolute inset-0 overflow-hidden rounded-[14px] pointer-events-none"
            >
              <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full border border-white/15" />
              <div className="absolute -top-[80px] -right-[80px] w-[300px] h-[300px] rounded-full border border-white/10" />
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FLOATING_IMAGE}
              alt=""
              aria-hidden
              className="hidden lg:block absolute z-10 right-[5%] top-1/2 -translate-y-1/2 w-[240px] xl:w-[260px] h-[280px] xl:h-[300px] object-cover rounded-[14px] shadow-2xl rotate-[6deg] pointer-events-none ring-1 ring-white/15"
            />

            <div className="relative lg:max-w-[60%]">
              {cta.eyebrow ? (
                <div className="inline-flex items-center gap-2.5 rounded-md bg-white/15 ring-1 ring-inset ring-white/25 px-3 py-1.5 mb-5">
                  <span
                    aria-hidden
                    className="block w-2.5 h-2.5 rounded-[3px] bg-white"
                  />
                  <span className="text-[10.5px] tracking-[.22em] uppercase font-semibold leading-none text-white">
                    {cta.eyebrow}
                  </span>
                </div>
              ) : null}

              <h2 className="text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.05] mb-5 text-balance">
                {cta.title}
              </h2>
              <p className="text-base leading-relaxed opacity-85 mb-8 max-w-[520px]">
                {cta.body}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <CTAButton href={cta.primary.href} variant="inverted">
                  {cta.primary.label}
                </CTAButton>
                {hasSecondary && cta.secondary ? (
                  cta.secondary.href.startsWith("tel:") ? (
                    <CallPopover
                      label={cta.secondary.label}
                      variant="ghost"
                    />
                  ) : (
                    <CTAButton href={cta.secondary.href} variant="ghost">
                      {cta.secondary.label}
                    </CTAButton>
                  )
                ) : null}
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                {AGENCIES.map((a) => (
                  <ContactColumn key={a.name} {...a} />
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-white/15">
                <div className="flex items-center gap-2 text-[11px] tracking-[.15em] uppercase font-bold opacity-70 mb-3">
                  <ClockIcon />
                  Heures d&apos;ouverture
                </div>
                <dl className="grid sm:grid-cols-[1.6fr_1fr_1fr] gap-x-8 gap-y-2 text-sm">
                  <HoursRow label="Lun – Ven" value="9h30 – 13h · 14h – 18h" />
                  <HoursRow label="Samedi" value="9h30 – 13h" />
                  <HoursRow label="Dimanche" value="Sur rendez-vous" />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactColumn({
  name,
  phone,
  href,
}: {
  name: string;
  phone: string;
  href: string;
}) {
  return (
    <div>
      <div className="text-[11px] tracking-[.15em] uppercase font-bold opacity-70 mb-2">
        {name}
      </div>
      <a
        href={href}
        className="inline-flex items-center gap-2.5 text-white font-bold text-[17px] hover:opacity-90"
      >
        <PhoneIcon />
        {phone}
      </a>
    </div>
  );
}

function HoursRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[12px] uppercase tracking-[.15em] opacity-70 font-semibold">
        {label}
      </dt>
      <dd className="font-bold whitespace-nowrap">{value}</dd>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
