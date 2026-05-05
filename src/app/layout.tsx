import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://behomepartners.netlify.app";
const SITE_NAME = "Be Home Partners";
const SITE_DESCRIPTION =
  "Vente, location, estimation et gestion locative en Brabant wallon. Discrétion, confiance et savoir-faire depuis plus de 15 ans.";
const OG_IMAGE = "/assets/images/hero-villa-pool.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Agence immobilière en Brabant wallon`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "agence immobilière",
    "Brabant wallon",
    "Nivelles",
    "Braine-l'Alleud",
    "vente immobilière",
    "location immobilière",
    "estimation immobilière",
    "gestion locative",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Agence immobilière en Brabant wallon`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – agence immobilière en Brabant wallon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Agence immobilière en Brabant wallon`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1530" },
  ],
};

const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}${OG_IMAGE}`,
  logo: `${SITE_URL}/assets/logos/horizontal/BeHome_logo_horizontal.svg`,
  foundingDate: "2010",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Brabant wallon" },
    { "@type": "Country", name: "Belgique" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Avenue du Centenaire 53 bte 4",
      postalCode: "1400",
      addressLocality: "Nivelles",
      addressCountry: "BE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Chaussée de Tubize 11",
      postalCode: "1420",
      addressLocality: "Braine-l'Alleud",
      addressCountry: "BE",
    },
  ],
  telephone: ["+32 67 84 12 84", "+32 2 385 12 84"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "579",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(realEstateAgentJsonLd),
          }}
        />
      </body>
    </html>
  );
}
