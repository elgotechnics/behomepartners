import type { ReactNode } from "react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";

import {
  generateServiceSchema,
  serializeJsonLd,
} from "@/lib/service-schema";

function flattenNode(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenNode).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return flattenNode(props?.children);
  }
  return "";
}

import { ServiceHero } from "./ServiceHero";
import { ServiceIntro } from "./ServiceIntro";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceCTA } from "./ServiceCTA";
import type { ServiceConfig } from "@/data/services";

type Props = {
  service: ServiceConfig;
};

export function ServicePage({ service }: Props) {
  const showFaq = !!service.faq && service.faq.items.length > 0;
  const jsonLd = generateServiceSchema({
    slug: service.slug,
    metaTitle: service.metaTitle,
    metaDescription: service.metaDescription,
    serviceName: service.serviceName,
    serviceType: service.serviceType,
    faq: service.faq?.items.map((item) => ({
      q: item.q,
      a: flattenNode(item.a),
    })),
    includeFaq: showFaq,
  });

  return (
    <>
      <Header />
      <main className="flex-1">
        <ServiceHero hero={service.hero} />
        <ServiceIntro intro={service.intro} />
        <ServiceBenefits benefits={service.benefits} />
        {service.features ? <ServiceFeatures features={service.features} /> : null}
        <ServiceProcess process={service.process} />
        <TestimonialsMarquee />
        {showFaq && service.faq ? (
          <Faq
            items={service.faq.items}
            eyebrow={service.faq.eyebrow ?? "Questions fréquentes"}
            title={service.faq.title ?? "Vos questions, nos réponses."}
            description={service.faq.description}
            image={
              service.faq.image ?? {
                src: "/assets/images/faq-contact-interior.webp",
                alt: "Intérieur d'un bien immobilier",
              }
            }
            imagePosition={service.faq.imagePosition ?? "right"}
            contactHint={{
              text: "Vous ne trouvez pas votre réponse ? N'hésitez pas à",
              linkText: "nous contacter",
              href: "/contact",
            }}
          />
        ) : null}
        <ServiceCTA cta={service.cta} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
    </>
  );
}

