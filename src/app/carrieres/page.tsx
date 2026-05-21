"use client";

import Image from "next/image";
import { useState } from "react";
import {
  UserCheck,
  BriefcaseBusiness,
  Check,
  Upload,
  ArrowRight,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CTAButton } from "@/components/ui/cta-button";

/* ─────────────── DATA ─────────────── */

type Opportunity = {
  id: string;
  title: string;
  contractType: string;
  location: string;
  summary: string;
  href: string;
  icon: React.ReactNode;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    id: "agent-ipi",
    title: "Agent immobilier agréé IPI",
    contractType: "Indépendant",
    location: "Nivelles / Braine-l'Alleud",
    summary:
      "Vous accompagnez propriétaires, acquéreurs et investisseurs dans la vente, l'achat et la location de biens résidentiels.",
    href: "/carrieres/agent-immobilier-ipi",
    icon: <Briefcase size={18} strokeWidth={1.8} />,
  },
  {
    id: "stagiaire-ifapme",
    title: "Stagiaire agent immobilier IFAPME/EFP",
    contractType: "Stage",
    location: "Brabant wallon",
    summary:
      "Vous participez aux visites, estimations, suivis clients et actions commerciales au sein d'une équipe expérimentée.",
    href: "/carrieres/stagiaire-ifapme-efp",
    icon: <GraduationCap size={18} strokeWidth={1.8} />,
  },
  {
    id: "office-manager",
    title: "Office Manager immobilier",
    contractType: "Temps plein",
    location: "Nivelles",
    summary:
      "Vous assurez l'accueil des clients, le suivi administratif et la coordination des dossiers immobiliers.",
    href: "/carrieres/office-manager",
    icon: <BriefcaseBusiness size={18} strokeWidth={1.8} />,
  },
];

const PROFILE_ITEMS = [
  "Sens du contact et fibre commerciale affirmée.",
  "Rigueur, autonomie et esprit d'initiative.",
  "Présentation soignée et posture professionnelle.",
  "Permis B et véhicule personnel indispensables.",
  "Une première expérience dans l'immobilier est un atout.",
];

const ENGAGEMENT_ITEMS = [
  "Une marque reconnue dans le Brabant wallon depuis plus de 10 ans.",
  "Un environnement structuré, en pleine évolution.",
  "Un accompagnement personnalisé et des formations continues.",
  "Un support administratif, informatique et marketing complet.",
  "Une rémunération attractive et évolutive.",
];

/* ─────────────── PAGE ─────────────── */

export default function CarrieresPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Opportunites />
        <ProfilEngagements />
        <Candidature />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────── HERO (DARK) ─────────────── */

function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/agence-bureaux.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/85 to-ink-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d22] via-transparent to-[#070d22]/40" />
      </div>

      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-[760px]">
          <SectionEyebrow tone="dark">Carrières</SectionEyebrow>
          <h1 className="mt-6 text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-tight leading-[1.02] text-balance">
            Rejoignez Be Home Partners
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-white/80 leading-relaxed max-w-[640px]">
            Donnez une nouvelle dimension à votre parcours en intégrant une
            agence qui redéfinit l&apos;excellence immobilière dans le Brabant
            wallon.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Développement professionnel",
              "Support administratif et marketing",
              "Rémunération attractive",
            ].map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2.5 text-white/85"
              >
                <span
                  aria-hidden
                  className="grid place-items-center w-5 h-5 rounded-full bg-accent text-white shrink-0"
                >
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton href="#opportunites" variant="primary">
              Découvrir nos opportunités
            </CTAButton>
            <CTAButton href="#candidature" variant="ghost">
              Candidature spontanée
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── OPPORTUNITÉS (CREAM) ─────────────── */

function Opportunites() {
  return (
    <section id="opportunites" className="bg-cream scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[760px] mb-12 lg:mb-14">
          <SectionEyebrow tone="light">Nos opportunités</SectionEyebrow>
          <h2 className="mt-5 text-2xl lg:text-[34px] font-extrabold text-ink tracking-tight leading-[1.1]">
            Postes ouverts au sein de notre équipe
          </h2>
          <p className="mt-5 text-[15.5px] text-ink/70 leading-relaxed">
            Découvrez les opportunités actuellement disponibles pour rejoindre
            notre équipe.
          </p>
        </div>

        <ul className="space-y-3 lg:space-y-4">
          {OPPORTUNITIES.map((o) => (
            <li key={o.id}>
              <a
                href={o.href}
                className="group flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 bg-white rounded-[14px] p-6 lg:p-7 ring-1 ring-inset ring-hairline transition-all duration-300 hover:ring-ink/20 hover:shadow-[0_18px_50px_-22px_rgba(26,40,69,0.18)]"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-accent/10 text-accent ring-1 ring-inset ring-accent/15 shrink-0">
                  {o.icon}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-[19px] lg:text-[20px] font-bold text-ink tracking-tight leading-[1.2] group-hover:text-accent transition-colors">
                      {o.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-ink/65 font-semibold mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin
                        size={13}
                        strokeWidth={1.9}
                        className="text-accent"
                      />
                      {o.location}
                    </span>
                    <span className="text-ink/30">·</span>
                    <span>{o.contractType}</span>
                  </div>
                  <p className="text-[14px] text-ink/65 leading-relaxed max-w-[680px]">
                    {o.summary}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-[12px] tracking-[.18em] uppercase font-bold text-accent whitespace-nowrap lg:self-center shrink-0">
                  Voir le poste
                  <ArrowRight
                    size={14}
                    strokeWidth={2.2}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────── PROFIL + ENGAGEMENTS (WHITE) ─────────────── */

function ProfilEngagements() {
  return (
    <section className="bg-white">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Profil — bordeaux card */}
          <div className="bg-accent text-white rounded-[16px] p-7 lg:p-10 flex flex-col">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-white/15 text-white ring-1 ring-inset ring-white/20 mb-6">
              <UserCheck size={22} strokeWidth={1.6} />
            </span>
            <div className="text-[11px] tracking-[.22em] uppercase font-bold text-white/80 mb-3">
              Votre profil
            </div>
            <h3 className="text-[22px] lg:text-[26px] font-extrabold tracking-tight leading-[1.15]">
              Le profil que nous recherchons
            </h3>
            <ul className="mt-7 space-y-4">
              {PROFILE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px]"
                >
                  <span
                    aria-hidden
                    className="grid place-items-center w-5 h-5 rounded-full bg-white text-accent shrink-0 mt-0.5"
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagements — dark ink card */}
          <div className="relative bg-ink text-white rounded-[16px] p-7 lg:p-10 overflow-hidden flex flex-col">
            <div
              aria-hidden
              className="absolute -top-[80px] -right-[80px] w-[320px] h-[320px] rounded-full border border-white/10 pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -top-[40px] -right-[40px] w-[220px] h-[220px] rounded-full border border-white/[0.06] pointer-events-none"
            />

            <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-white/10 text-white ring-1 ring-inset ring-white/15 mb-6">
              <BriefcaseBusiness size={22} strokeWidth={1.6} />
            </span>
            <div className="relative text-[11px] tracking-[.22em] uppercase font-bold text-white/70 mb-3">
              Nos engagements
            </div>
            <h3 className="relative text-[22px] lg:text-[26px] font-extrabold tracking-tight leading-[1.15]">
              Ce que nous offrons
            </h3>
            <ul className="relative mt-7 space-y-4">
              {ENGAGEMENT_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px]"
                >
                  <span
                    aria-hidden
                    className="grid place-items-center w-5 h-5 rounded-full bg-accent text-white shrink-0 mt-0.5"
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-white/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CANDIDATURE (WHITE) ─────────────── */

function Candidature() {
  return (
    <section id="candidature" className="bg-white scroll-mt-24">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionEyebrow tone="light">Candidature spontanée</SectionEyebrow>
            <h2 className="mt-5 text-2xl lg:text-[34px] font-extrabold text-ink tracking-tight leading-[1.1]">
              Envoyez-nous votre candidature
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-5 text-[15.5px] text-ink/70 leading-relaxed max-w-[460px]">
              Vous souhaitez rejoindre notre équipe ? Transmettez-nous votre CV
              et votre lettre de motivation via le formulaire ci-dessous. Nous
              étudierons votre candidature avec attention et en toute
              confidentialité.
            </p>

            <ul className="mt-8 space-y-3 max-w-[460px]">
              {[
                "Agents immobiliers agréés IPI",
                "Stagiaires IFAPME/EFP",
                "Candidature traitée en toute confidentialité",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-ink/85"
                >
                  <span
                    aria-hidden
                    className="grid place-items-center w-5 h-5 rounded-full bg-accent text-white shrink-0"
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <CandidatureForm />
        </div>
      </div>
    </section>
  );
}

function CandidatureForm() {
  const [cvName, setCvName] = useState<string>("");
  const [lettreName, setLettreName] = useState<string>("");

  const inputClass =
    "w-full bg-white text-ink placeholder:text-ink/55 ring-1 ring-inset ring-hairline rounded-[12px] px-4 py-3.5 text-[15px] focus:outline-none focus:ring-accent/40 transition";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-[#ececee] rounded-[18px] p-6 lg:p-8 space-y-5 ring-1 ring-inset ring-black/[0.06] shadow-[0_24px_50px_-20px_rgba(15,23,42,0.18)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      <Field label="Message">
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Parlez-nous de votre parcours et de ce qui vous motive à rejoindre Be Home Partners..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FileField
          label="CV"
          name="cv"
          required
          fileName={cvName}
          onChange={(name) => setCvName(name)}
        />
        <FileField
          label="Lettre de motivation"
          name="lettre"
          fileName={lettreName}
          onChange={(name) => setLettreName(name)}
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/70 leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          required
          className="mt-1 accent-accent w-4 h-4 rounded-sm shrink-0"
        />
        <span>
          En cochant cette case et en soumettant ce formulaire,
          j&apos;accepte que mes données personnelles soient utilisées dans le
          cadre de ma candidature et je confirme avoir pris connaissance de la{" "}
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
          Envoyer ma candidature
          <ArrowRight size={16} strokeWidth={2.4} />
        </button>
      </div>
    </form>
  );
}

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

function FileField({
  label,
  name,
  required,
  fileName,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  fileName: string;
  onChange: (name: string) => void;
}) {
  return (
    <div>
      <label className="block text-[10.5px] tracking-[.22em] uppercase font-semibold text-ink/80 mb-2">
        {label}
        {required ? <span className="text-accent ml-1">*</span> : null}
      </label>
      <label className="group flex items-center gap-3 cursor-pointer bg-white ring-1 ring-inset ring-hairline rounded-[12px] px-4 py-3.5 hover:ring-accent/40 transition">
        <span className="grid place-items-center w-8 h-8 rounded-[10px] bg-accent/10 text-accent shrink-0">
          <Upload size={15} strokeWidth={1.9} />
        </span>
        <span className="flex-1 min-w-0 text-[14px] text-ink/75 truncate">
          {fileName || "Choisir un fichier (PDF, DOCX)"}
        </span>
        <input
          type="file"
          name={name}
          required={required}
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(e) => {
            const f = e.target.files?.[0];
            onChange(f ? f.name : "");
          }}
        />
      </label>
    </div>
  );
}
