"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Agences } from "@/components/Agences";
import { AGENCES } from "@/data/agences";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CTAButton } from "@/components/ui/cta-button";

const FAQS = [
  {
    q: "L’estimation de mon bien est-elle gratuite ?",
    a: "Oui. Nous réalisons une estimation professionnelle de votre bien, sans frais et sans engagement. Vous obtenez ainsi une évaluation réaliste basée sur les caractéristiques du bien et les conditions actuelles du marché.",
  },
  {
    q: "Suis-je engagé en remplissant ce formulaire ?",
    a: "Non. Ce premier contact vous permet simplement de nous présenter votre situation et d’obtenir des conseils personnalisés, en toute liberté.",
  },
  {
    q: "Que se passe-t-il après l’envoi du formulaire ?",
    a: "Nous analysons votre demande et vous contactons afin de répondre à vos questions et de définir la meilleure approche pour votre projet immobilier.",
  },
  {
    q: "Dans quelles régions intervenez-vous ?",
    a: "Nous accompagnons les propriétaires dans tout le Brabant wallon, notamment à Waterloo, Braine-l’Alleud, Nivelles, Genappe, Ittre, Seneffe et dans les communes voisines.",
  },
  {
    q: "Quand serai-je recontacté ?",
    a: "Nous vous recontacterons sans délai afin de convenir, si vous le souhaitez, d’un rendez-vous avec l’un de nos conseillers.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
        <Agences
          id="bureaux"
          background="cream"
          title="Retrouvez-nous dans nos agences."
          description=""
        />
        <Faq
          items={FAQS}
          eyebrowIndex="03"
          title="Vos questions, nos réponses."
          description="Quelques réponses utiles avant de nous contacter."
          image={{
            src: "/assets/images/faq-contact-interior.webp",
            alt: "Intérieur d'un bien immobilier",
          }}
          imagePosition="right"
          contactHint={{
            text: "Vous ne trouvez pas votre réponse ? Posez-la dans le",
            linkText: "formulaire",
            href: "#formulaire",
          }}
        />
      </main>
      <Footer />
    </>
  );
}


/* ───── FORMULAIRE ───── */
const SUBJECT_MAP: Record<string, string> = {
  vente: "vendre",
  vendre: "vendre",
  estimation: "estimer",
  estimer: "estimer",
  achat: "acheter",
  acheter: "acheter",
  location: "louer",
  louer: "louer",
  gestion: "gestion-locative",
  "gestion-locative": "gestion-locative",
  investissement: "investir",
  investir: "investir",
  promotion: "promotion",
  "promotion-immobiliere": "promotion",
  autre: "autre",
};

function ContactForm() {
  const inputClass =
    "w-full px-4 py-3.5 bg-white ring-1 ring-inset ring-hairline rounded-[12px] text-ink placeholder:text-ink/55 focus:outline-none focus:ring-accent/40 transition";

  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject")?.toLowerCase() ?? "";
  const [subject, setSubject] = useState<string>(
    SUBJECT_MAP[subjectParam] ?? "",
  );

  return (
    <section
      id="formulaire"
      className="bg-ink text-white relative overflow-hidden pt-40 lg:pt-52 pb-16 lg:pb-24 scroll-mt-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/80 to-ink"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#070d22] via-transparent to-[#070d22]/40"
      />
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionEyebrow tone="dark">Contact</SectionEyebrow>
            <h1 className="mt-6 text-[44px] sm:text-[56px] lg:text-[68px] xl:text-[76px] font-extrabold tracking-tight leading-[0.98]">
              Parlez-nous de
              <br />
              votre projet<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-[560px]">
              Décrivez-nous votre projet immobilier et nous vous recontacterons
              rapidement avec un accompagnement adapté à votre situation.
            </p>


            <ul className="mt-10 space-y-3">
              {[
                "Réponse sans délai",
                "Sans engagement",
                "En toute confidentialité",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/85"
                >
                  <span
                    aria-hidden
                    className="grid place-items-center w-5 h-5 rounded-full bg-accent text-white shrink-0"
                  >
                    <CheckIcon />
                  </span>
                  <span className="text-base font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/75 text-sm mb-5 max-w-[520px] leading-relaxed">
                Par téléphone, par email ou via le formulaire, nous sommes à votre écoute.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.35fr] gap-3">
                {AGENCES.map((a) => (
                  <a
                    key={a.phoneHref}
                    href={a.phoneHref}
                    className="group flex items-center gap-3 rounded-[14px] bg-white/[0.06] hover:bg-white/[0.10] px-4 py-3.5 transition-colors"
                  >
                    <span
                      aria-hidden
                      className="grid place-items-center w-9 h-9 rounded-[10px] bg-accent text-white shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_-12px_rgba(184,31,58,0.6)]"
                    >
                      <PhoneIcon />
                    </span>
                    <span className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[10px] tracking-[.18em] uppercase font-bold text-white/55 whitespace-nowrap">
                        {a.city}
                      </span>
                      <span className="text-[14px] font-bold text-white tabular-nums leading-tight whitespace-nowrap">
                        {a.phone}
                      </span>
                    </span>
                  </a>
                ))}
                <a
                  href="mailto:info@behomepartners.be"
                  className="group flex items-center gap-3 rounded-[14px] bg-white/[0.06] hover:bg-white/[0.10] px-4 py-3.5 transition-colors"
                >
                  <span
                    aria-hidden
                    className="grid place-items-center w-9 h-9 rounded-[10px] bg-accent text-white shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_-12px_rgba(184,31,58,0.6)]"
                  >
                    <MailIcon />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] tracking-[.18em] uppercase font-bold text-white/55">
                      Email
                    </span>
                    <span className="text-[13px] font-bold text-white leading-tight whitespace-nowrap">
                      info@behomepartners.be
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="bg-cream rounded-[18px] p-6 lg:p-8 space-y-5 ring-1 ring-inset ring-hairline shadow-[0_24px_50px_-20px_rgba(15,23,42,0.25)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[0.8fr_1.4fr_1.4fr] gap-5">
                <Field label="Titre">
                  <select
                    name="titre"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Mme / M.
                    </option>
                    <option value="madame">Madame</option>
                    <option value="monsieur">Monsieur</option>
                    <option value="autre">Autre</option>
                  </select>
                </Field>
                <Field label="Prénom">
                  <input
                    type="text"
                    name="prenom"
                    required
                    autoComplete="given-name"
                    placeholder="Camille"
                    className={inputClass}
                  />
                </Field>
                <Field label="Nom">
                  <input
                    type="text"
                    name="nom"
                    required
                    autoComplete="family-name"
                    placeholder="Lemaire"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Adresse email">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="camille@exemple.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Téléphone">
                  <div className="w-full bg-white ring-1 ring-inset ring-hairline rounded-[12px] flex items-stretch focus-within:ring-accent/40 transition">
                    <span
                      aria-hidden
                      className="px-4 py-3.5 text-ink/70 font-semibold select-none border-r border-hairline flex items-center"
                    >
                      +32
                    </span>
                    <input
                      type="tel"
                      name="telephone"
                      required
                      autoComplete="tel-national"
                      inputMode="tel"
                      placeholder="470 12 34 56"
                      className="flex-1 min-w-0 bg-transparent px-4 py-3.5 text-ink placeholder:text-ink/55 focus:outline-none"
                    />
                  </div>
                </Field>
              </div>

              <Field label="Sujet">
                <select
                  name="sujet"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    Sélectionnez un sujet
                  </option>
                  <option value="vendre">Vendre mon bien</option>
                  <option value="estimer">Estimer mon bien</option>
                  <option value="acheter">Acheter un bien</option>
                  <option value="louer">Louer un bien</option>
                  <option value="gestion-locative">Gestion locative</option>
                  <option value="investir">Investir dans l&apos;immobilier</option>
                  <option value="promotion">Promotion immobilière</option>
                  <option value="autre">Autre demande</option>
                </select>
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Quelques mots sur votre projet, votre bien ou votre recherche..."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <label className="flex items-start gap-3 text-xs text-ink/70 leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-accent w-4 h-4 rounded-sm shrink-0"
                />
                <span>
                  En cochant cette case et en soumettant ce formulaire,
                  j&apos;accepte que mes données personnelles soient utilisées
                  dans le cadre de ma demande et je confirme avoir pris
                  connaissance de la{" "}
                  <a
                    href="/confidentialite"
                    className="text-accent hover:text-accent-deep transition-colors underline underline-offset-2"
                  >
                    Politique de Confidentialité
                  </a>
                  .
                </span>
              </label>

              <div className="flex justify-start pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-deep text-white px-8 py-4 rounded-[14px] text-[13px] font-bold tracking-[.15em] uppercase transition-colors"
                >
                  Envoyer ma demande
                  <ArrowRightSmall />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── HELPERS ───── */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[10.5px] tracking-[.22em] uppercase font-semibold text-ink/80 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}


/* ───── ICONS ───── */
function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ArrowRightSmall() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

