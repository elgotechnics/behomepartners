import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import {
  HeroDarkVariantA,
  HeroDarkVariantE,
  HeroDarkVariantF,
} from "@/components/HeroDarkPreview";
import type { ReactNode } from "react";

function PreviewSection({
  tag,
  title,
  subtitle,
  children,
}: {
  tag: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-hairline">
      <div className="max-w-[1480px] mx-auto px-3 sm:px-4 pt-12 pb-6">
        <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-2">
          {tag}
        </div>
        <h2 className="text-2xl lg:text-[32px] font-extrabold tracking-tight mb-2">
          {title}
        </h2>
        <p className="text-sm text-muted max-w-[820px] mb-6">{subtitle}</p>
      </div>
      <div className="border-t border-hairline">{children}</div>
    </section>
  );
}

export default function HeroDarkPreview() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-[1480px] mx-auto px-3 sm:px-4 pt-10 pb-2">
          <div className="text-[11px] tracking-[.2em] uppercase text-accent font-bold mb-2">
            Preview hero · Dark mode
          </div>
          <h1 className="text-3xl lg:text-[38px] font-extrabold tracking-tight mb-3">
            Directions sombres pour la hero
          </h1>
          <p className="text-sm text-muted max-w-[820px] mb-12">
            Traitements sombres avec un bien immobilier en arrière-plan.
            Chaque variante propose une lecture différente de la hauteur,
            du rythme et de la place donnée à l&apos;image.
          </p>
        </div>

        <PreviewSection
          tag="Variante 1 · Cinematic Vignette"
          title="Image full-bleed, dégradé profond, stats en pied de copie"
          subtitle="Image immersive avec un dégradé latéral fort qui isole la copie sur la gauche. Stats agence (15 ans · 2000+ biens · 579 avis) intégrées comme socle. Barre de recherche claire, en chevauchement vers le bas, pour casser la masse sombre."
        >
          <HeroDarkVariantA />
        </PreviewSection>

        <PreviewSection
          tag="Variante 2 · Bento Showcase · Premium éditorial"
          title="Mosaïque de biens en vitrine + typographie éditoriale (sans + serif italique) + glass search"
          subtitle="Inspirée des sites premium (Compass, Sotheby's, Side, Engel & Völkers). Côté gauche : signal live '12 nouveaux biens cette semaine', titre mixte 'L'art de bien habiter.' (extrabold + serif italique), search glass-morphism compact, badge presse. Côté droit : bento grid de 3 biens (1 grande + 2 petites) avec ribbon 'À la une' bordeaux, badge 'Nouveau', prix et localisation par carte. Carte stat flottante (+12% prix moyen Bruxelles 2026) et indicateur de pagination 01/04. Marque verticale 'Be Home Partners · Est. 2010' à gauche."
        >
          <HeroDarkVariantE />
        </PreviewSection>

        <PreviewSection
          tag="Variante 3 · Immersive centré · voile bleu"
          title="Villa full-bleed avec voile bleu profond, contenu centré, search en pied de hero"
          subtitle="Image villa contemporaine + piscine recouverte d'un voile sombre bleu (#0a1530/75) et d'un dégradé vertical. Toute la composition est centrée : badge avis, titre XL, sous-titre, puis toggle Acheter/Louer + barre de recherche glass-morphism (Commune · Type · Chambres · Budget) ancrée au pied du hero."
        >
          <HeroDarkVariantF />
        </PreviewSection>

        <div className="h-32" />
      </main>
      <Footer />
    </>
  );
}
