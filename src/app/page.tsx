import { Header } from "@/components/ui/header-2";
import { HeroSlider } from "@/components/HeroSlider";
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
      <HeroSlider />
      <main className="flex-1">
        <Marquee />
        <Listings />
        <Services />
        <WhyChoose />
        <EstimationVariantABlue />
        <TestimonialsMarquee />
        <Faq />
        <CtaPrefooter />
      </main>
      <Footer />
    </>
  );
}
