"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CTAButton } from "@/components/ui/cta-button";
import { AGENCES, type Agency } from "@/data/agences";

export function Agences({
  id = "agences",
  eyebrow = "Nos agences",
  title = "Deux bureaux pour mieux vous accompagner",
  description = "Présents à Nivelles et à Braine-l'Alleud, nous vous accueillons dans des bureaux modernes et facilement accessibles afin de vous conseiller dans les meilleures conditions.",
  background = "white",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: "white" | "cream" | "paper";
}) {
  const bgClass =
    background === "cream"
      ? "bg-cream"
      : background === "paper"
        ? "bg-paper"
        : "bg-white";

  return (
    <section id={id} className={`${bgClass} scroll-mt-24`}>
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[760px] mb-12 lg:mb-16">
          <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
          <h2 className="mt-5 text-3xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.05]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base text-ink/70 leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>

        <div className="space-y-12 lg:space-y-16">
          {AGENCES.map((agency, idx) => (
            <AgencyBlock
              key={agency.id}
              agency={agency}
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgencyBlock({ agency, reverse }: { agency: Agency; reverse: boolean }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <AgencyPhotoSlider photos={agency.photos} agencyId={agency.id} />
      </div>

      <div
        className={`lg:col-span-6 flex flex-col justify-center ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <div className="text-[11px] tracking-[.22em] uppercase font-bold text-accent mb-3">
          Be Home Partners
        </div>
        <h3 className="text-2xl lg:text-[32px] font-extrabold text-ink tracking-tight leading-[1.1]">
          Agence de {agency.city}
        </h3>
        <p className="mt-5 text-[15px] text-ink/70 leading-relaxed">
          {agency.description}
        </p>

        <dl className="mt-8 space-y-5">
          <InfoRow
            icon={<MapPin size={18} strokeWidth={1.8} />}
            label="Adresse"
            value={`${agency.address} · ${agency.postalCode}`}
          />
          <InfoRow
            icon={<Phone size={18} strokeWidth={1.8} />}
            label="Téléphone"
            value={
              <a
                href={agency.phoneHref}
                className="hover:text-accent transition-colors"
              >
                {agency.phone}
              </a>
            }
          />
          <InfoRow
            icon={<Mail size={18} strokeWidth={1.8} />}
            label="Email"
            value={
              <a
                href={agency.emailHref}
                className="hover:text-accent transition-colors break-all"
              >
                {agency.email}
              </a>
            }
          />
        </dl>

        <div className="mt-10">
          <CTAButton href={agency.pageHref} variant="outline">
            Découvrir l&apos;agence
          </CTAButton>
        </div>
      </div>
    </article>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid place-items-center w-10 h-10 rounded-full bg-accent/10 text-accent shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[10.5px] tracking-[.22em] uppercase font-bold text-ink/50">
          {label}
        </div>
        <div className="mt-1 text-base font-semibold text-ink leading-snug">
          {value}
        </div>
      </div>
    </div>
  );
}

function AgencyPhotoSlider({
  photos,
  agencyId,
}: {
  photos: { src: string; alt: string }[];
  agencyId: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const w = track.clientWidth;
      if (!w) return;
      setIndex(Math.round(track.scrollLeft / w));
    };
    track.addEventListener("scroll", update, { passive: true });
    return () => track.removeEventListener("scroll", update);
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  };

  const scroll = (dir: "left" | "right") => {
    const next = Math.max(
      0,
      Math.min(photos.length - 1, index + (dir === "left" ? -1 : 1)),
    );
    goTo(next);
  };

  return (
    <div className="relative rounded-[14px] overflow-hidden ring-1 ring-inset ring-hairline bg-bg">
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden aspect-[4/3] lg:aspect-[5/4]"
      >
        {photos.map((p, i) => (
          <div
            key={`${agencyId}-${i}`}
            className="snap-start flex-shrink-0 w-full h-full relative"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Photo précédente"
        disabled={index === 0}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm ring-1 ring-ink/10 grid place-items-center text-ink disabled:opacity-0 transition-opacity"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Photo suivante"
        disabled={index === photos.length - 1}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm ring-1 ring-ink/10 grid place-items-center text-ink disabled:opacity-0 transition-opacity"
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2.5 py-1.5 rounded-full bg-ink/45 backdrop-blur-sm">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Aller à la photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
