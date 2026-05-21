"use client";

import Image from "next/image";
import {
  Bed,
  Building2,
  Home,
  LandPlot,
  Map as MapIcon,
  Ruler,
  Store,
  BriefcaseBusiness,
} from "lucide-react";
import type {
  Realisation,
  RealisationPropertyType,
} from "@/data/realisations";

const TYPE_ICONS: Record<
  RealisationPropertyType,
  React.ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  Maison: Home,
  Appartement: Building2,
  Terrain: MapIcon,
  Commerce: Store,
  Bureau: BriefcaseBusiness,
};

export function PropertyCardRealisation({ item }: { item: Realisation }) {
  const TypeIcon = TYPE_ICONS[item.propertyType];
  const statusLabel = item.status === "sold" ? "Vendu" : "Loué";

  return (
    <article
      className="group relative flex flex-col bg-white rounded-[16px] overflow-hidden ring-1 ring-inset ring-hairline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.25)] hover:ring-ink/15"
      data-realisation-id={item.id}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Ruban diagonal Vendu / Loué (style agence) */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[160px] h-[160px] overflow-hidden pointer-events-none"
        >
          <div className="absolute top-[34px] right-[-52px] rotate-45 w-[220px] py-2.5 text-center text-[14px] font-extrabold tracking-[.18em] uppercase text-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.45)] bg-accent">
            {statusLabel}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex-1 flex flex-col p-5 lg:p-6">
        {/* Type · Commune avec accent bordeaux */}
        <div className="flex items-center gap-2 text-[12px] tracking-[.14em] uppercase font-bold mb-3">
          <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/10 text-accent">
            <TypeIcon size={13} strokeWidth={2} />
          </span>
          <span className="text-ink/70">{item.propertyType}</span>
          <span aria-hidden className="text-ink/25">
            ·
          </span>
          <span className="text-accent">{item.city}</span>
        </div>

        {/* Titre */}
        <h3 className="text-[18px] lg:text-[19px] font-extrabold text-ink tracking-tight leading-[1.2] mb-2 text-balance">
          {item.title}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="text-[14px] text-ink/65 leading-relaxed line-clamp-2 mb-5">
            {item.description}
          </p>
        )}

        {/* Caractéristiques avec picto en bordeaux */}
        {(item.surface || item.bedrooms || item.landSurface) && (
          <div className="mt-auto pt-4 border-t border-hairline">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink/80">
              {item.surface ? (
                <li className="inline-flex items-center gap-1.5">
                  <Ruler
                    size={14}
                    strokeWidth={2}
                    className="text-accent"
                  />
                  <span className="font-semibold tabular-nums">
                    {item.surface} m²
                  </span>
                </li>
              ) : null}
              {item.bedrooms ? (
                <li className="inline-flex items-center gap-1.5">
                  <Bed
                    size={14}
                    strokeWidth={2}
                    className="text-accent"
                  />
                  <span className="font-semibold tabular-nums">
                    {item.bedrooms} ch.
                  </span>
                </li>
              ) : null}
              {item.landSurface ? (
                <li className="inline-flex items-center gap-1.5">
                  <LandPlot
                    size={14}
                    strokeWidth={2}
                    className="text-accent"
                  />
                  <span className="font-semibold tabular-nums">
                    {item.landSurface} m² terrain
                  </span>
                </li>
              ) : null}
            </ul>
          </div>
        )}

        {/* Année discrète */}
        <p className="mt-4 text-[11.5px] tracking-[.12em] uppercase text-ink/40 font-semibold">
          {item.status === "sold" ? "Vendu" : "Loué"} en {item.year}
        </p>
      </div>
    </article>
  );
}
