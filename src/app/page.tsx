import { Header } from "@/components/ui/header-2";
import { HeroDarkVariantA } from "@/components/HeroDarkPreview";
import { Marquee } from "@/components/Marquee";
import { Listings } from "@/components/Listings";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { EstimationVariantABlue } from "@/components/EstimationPreview";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { CtaPrefooter } from "@/components/CtaPrefooter";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroDarkVariantA />
      <main className="flex-1">
        <Marquee />
        <Listings />
        <Services />
        <WhyChoose />
        <EstimationVariantABlue />
        <TestimonialsMarquee />
        <Faq
          description="Des réponses claires à toutes vos questions sur l'immobilier en Brabant wallon : frais, mandats, délais, secteur couvert."
          image={{
            src: "/assets/images/agence-bureaux.webp",
            alt: "Be Home Partners — Bureaux de l'agence",
          }}
          contactHint={{
            text: "Vous ne trouvez pas votre réponse ? N'hésitez pas à",
            linkText: "nous contacter",
            href: "#contact",
          }}
        />
        <CtaPrefooter />
      </main>
      <Footer />
    </>
  );
}
