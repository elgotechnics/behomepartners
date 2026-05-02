import {
  HeaderVariantA,
  HeaderVariantB,
  HeaderVariantC,
} from "@/components/HeaderPreview";
import type { ReactNode } from "react";

function HeroFiller({ tone = "dark" }: { tone?: "dark" | "light" }) {
  if (tone === "light") {
    return (
      <div className="bg-[#F7F4EE] py-20 lg:py-32 px-6 lg:px-12 xl:px-20 2xl:px-32">
        <div className="max-w-[1720px] mx-auto">
          <div className="text-[10px] tracking-[.25em] uppercase text-accent font-bold mb-3">Hero · démo</div>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-ink max-w-[900px]">
            Bien plus qu'une agence, un partenaire.
          </h2>
          <p className="text-base text-ink/65 max-w-[560px] mt-5">
            Contenu de placeholder pour évaluer le header au-dessus d'une section claire.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative bg-ink-darker text-white py-20 lg:py-32 px-6 lg:px-12 xl:px-20 2xl:px-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(159,30,67,0.25)_0%,transparent_50%)] pointer-events-none" />
      <div className="relative max-w-[1720px] mx-auto">
        <div className="text-[10px] tracking-[.25em] uppercase text-accent font-bold mb-3">Hero · démo</div>
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight max-w-[900px]">
          Bien plus qu'une agence, un partenaire.
        </h2>
        <p className="text-base text-white/65 max-w-[560px] mt-5">
          Contenu de placeholder pour évaluer le header au-dessus d'une section sombre.
        </p>
      </div>
    </div>
  );
}

function Block({
  children,
  tag,
  title,
  desc,
}: {
  children: ReactNode;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="border-t border-hairline">
      <div className="max-w-[1720px] mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 pt-12 pb-6">
        <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-2">{tag}</div>
        <h2 className="text-2xl lg:text-[32px] font-extrabold tracking-tight mb-2">{title}</h2>
        <p className="text-sm text-muted max-w-[820px]">{desc}</p>
      </div>
      <div className="border-t border-hairline">{children}</div>
    </section>
  );
}

export default function HeaderPreviewPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 pt-10 pb-2">
        <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-2">
          Preview · Headers 2026
        </div>
        <h1 className="text-3xl lg:text-[38px] font-extrabold tracking-tight mb-3">
          Trois directions ultra-modernes
        </h1>
        <p className="text-sm text-muted max-w-[820px] mb-12">
          Logo couleur conservé, fond clair, FR uniquement. Scrollez pour voir
          les états sticky / scroll, et survolez « Services » pour voir les
          mega-menus.
        </p>
      </div>

      <Block
        tag="Variante A"
        title="Glass Editorial"
        desc="Bg blanc translucide + backdrop-blur. Mini-search inline (⌘K), mega-menu illustré 3 colonnes, CTA split-button avec dropdown d'options. Le hero sombre transparait à travers — effet premium, raffiné."
      >
        <HeaderVariantA />
        <HeroFiller tone="dark" />
        <div className="bg-white py-16 px-6 lg:px-12 xl:px-20 2xl:px-32">
          <div className="max-w-[1720px] mx-auto text-sm text-ink/55">
            ↑ Scrollez pour observer la transition de blur (header s'opacifie sur scroll).
          </div>
        </div>
      </Block>

      <Block
        tag="Variante B"
        title="Floating Capsule"
        desc="Header flottant en pill rounded-full sur fond crème (#F7F4EE). Command palette ⌘K (cliquer sur Rechercher), CTA noir avec shimmer au hover, séparateurs élégants. Plus tech / signature digitale."
      >
        <HeaderVariantB />
        <HeroFiller tone="light" />
      </Block>

      <Block
        tag="Variante C"
        title="Bandeau Institutionnel"
        desc="Top-strip bordeaux avec contact agences + horaires d'ouverture en live. Nav blanche large (h=96px), nav links uppercase tracking, mega-menu plein largeur avec promo 'Service signature' à droite. Plus établi, premium classique."
      >
        <HeaderVariantC />
        <HeroFiller tone="dark" />
      </Block>
    </main>
  );
}
