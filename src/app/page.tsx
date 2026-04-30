import { Header } from "@/components/ui/header-2";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Listings } from "@/components/Listings";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Estimation } from "@/components/Estimation";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { CtaPrefooter } from "@/components/CtaPrefooter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('/assets/images/hero-building.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Hero />
      </div>
      <main className="flex-1">
        <Marquee />
        <Listings />
        <Services />
        <WhyChoose />
        <Estimation />
        <TestimonialsMarquee />
        <CtaPrefooter />
      </main>
      <Footer />
    </>
  );
}
