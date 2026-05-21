"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  Bed,
  BriefcaseBusiness,
  Building,
  Building2,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Home,
  KeyRound,
  Tag,
  Mail,
  Map,
  MapPin,
  Paintbrush,
  Phone,
  Ruler,
  Sparkles,
  Store,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

type Intent = "vendre" | "louer";

type PropertyType =
  | "maison"
  | "appartement"
  | "terrain"
  | "commerce"
  | "bureau"
  | "immeuble"
  | "garage"
  | "autre";

type Bedrooms = "studio" | "1" | "2" | "3" | "4" | "5+";
type Condition = "neuf" | "bon" | "rafraichir" | "renover";
type Facades = "2" | "3" | "4";
type Buildable = "oui" | "non" | "inconnu";
type Timeline = "asap" | "1-3m" | "6m" | "info";

type FormState = {
  intent: Intent | null;
  propertyType: PropertyType | null;

  street: string;
  number: string;
  postalCode: string;
  city: string;

  surface: string;
  bedrooms: Bedrooms | null;
  condition: Condition | null;

  landSurface: string;
  garden: boolean | null;
  garage: boolean | null;
  facades: Facades | null;

  floor: string;
  elevator: boolean | null;
  terrace: boolean | null;

  buildable: Buildable | null;
  activity: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  timeline: Timeline | null;
  notes: string;
  consent: boolean;
};

const INITIAL: FormState = {
  intent: null,
  propertyType: null,
  street: "",
  number: "",
  postalCode: "",
  city: "",
  surface: "",
  bedrooms: null,
  condition: null,
  landSurface: "",
  garden: null,
  garage: null,
  facades: null,
  floor: "",
  elevator: null,
  terrace: null,
  buildable: null,
  activity: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  timeline: null,
  notes: "",
  consent: false,
};

const PROPERTY_TYPES: {
  value: PropertyType;
  label: string;
  icon: React.ReactNode;
}[] = [
  { value: "maison", label: "Maison", icon: <Home size={22} strokeWidth={1.7} /> },
  { value: "appartement", label: "Appartement", icon: <Building2 size={22} strokeWidth={1.7} /> },
  { value: "terrain", label: "Terrain", icon: <Map size={22} strokeWidth={1.7} /> },
  { value: "commerce", label: "Commerce", icon: <Store size={22} strokeWidth={1.7} /> },
  { value: "bureau", label: "Bureau", icon: <BriefcaseBusiness size={22} strokeWidth={1.7} /> },
  { value: "immeuble", label: "Immeuble de rapport", icon: <Building size={22} strokeWidth={1.7} /> },
  { value: "garage", label: "Garage / parking", icon: <Car size={22} strokeWidth={1.7} /> },
  { value: "autre", label: "Autre", icon: <HelpCircle size={22} strokeWidth={1.7} /> },
];

const BEDROOMS_OPTIONS: { value: Bedrooms; label: string }[] = [
  { value: "studio", label: "Studio" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" },
];

const CONDITION_OPTIONS: {
  value: Condition;
  label: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "neuf",
    label: "Neuf ou récent",
    desc: "Construction ou rénovation récente.",
    icon: <Sparkles size={20} strokeWidth={1.7} />,
  },
  {
    value: "bon",
    label: "Bon état",
    desc: "Habitable sans travaux nécessaires.",
    icon: <Check size={20} strokeWidth={2} />,
  },
  {
    value: "rafraichir",
    label: "À rafraîchir",
    desc: "Petits travaux à prévoir.",
    icon: <Paintbrush size={20} strokeWidth={1.7} />,
  },
  {
    value: "renover",
    label: "À rénover",
    desc: "Travaux importants à envisager.",
    icon: <Ruler size={20} strokeWidth={1.7} />,
  },
];

const TIMELINE_OPTIONS: { value: Timeline; label: string }[] = [
  { value: "asap", label: "Dès que possible" },
  { value: "1-3m", label: "Dans 1 à 3 mois" },
  { value: "6m", label: "Dans 6 mois" },
  { value: "info", label: "Simplement me renseigner" },
];

const TOTAL_STEPS = 4;

export function ExpertEstimationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const top =
        cardRef.current.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [step]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const canContinue = true;

  const goNext = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  };
  const goBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const submitDemand = () => {
    setSubmitted(true);
  };

  return (
    <section className="flex-1 flex flex-col">
      <div className="max-w-[1480px] mx-auto w-full px-6 lg:px-10 pt-28 lg:pt-32 pb-12 lg:pb-16 flex-1 flex flex-col">
        <header className="max-w-[680px] mx-auto text-center mb-8 lg:mb-10">
          <div className="flex justify-center">
            <SectionEyebrow tone="light">Estimation par un agent</SectionEyebrow>
          </div>
          <h1 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight leading-[1.05] text-ink text-balance">
            Estimation immobilière
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-[15px] lg:text-[17px] text-ink/65 leading-relaxed">
            Décrivez votre bien en quelques étapes et notre équipe vous
            recontacte pour affiner votre estimation.
          </p>
        </header>

        <div
          ref={cardRef}
          className="mx-auto w-full max-w-[860px] min-h-[560px] flex flex-col bg-white rounded-[20px] ring-1 ring-inset ring-hairline shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] overflow-hidden scroll-mt-24"
        >
          {submitted ? (
            <SuccessScreen onReset={() => { setData(INITIAL); setStep(1); setSubmitted(false); }} />
          ) : (
            <>
              <Stepper currentStep={step} onJump={(s) => setStep(s)} />

              <form
                onSubmit={handleSubmit}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    step < TOTAL_STEPS &&
                    (e.target as HTMLElement).tagName !== "TEXTAREA"
                  ) {
                    e.preventDefault();
                    goNext();
                  }
                }}
                className="flex-1 flex flex-col"
                noValidate
              >
                <div className="flex-1 px-6 py-8 lg:px-12 lg:py-10">
                  <div
                    key={step}
                    className="animate-[fade-in_300ms_ease-out]"
                  >
                    {step === 1 && (
                      <Step1 data={data} update={update} />
                    )}
                    {step === 2 && (
                      <Step2 data={data} update={update} />
                    )}
                    {step === 3 && (
                      <Step3 data={data} update={update} />
                    )}
                    {step === 4 && (
                      <Step4 data={data} update={update} />
                    )}
                  </div>
                </div>

                <div className="border-t border-hairline px-6 lg:px-12 py-5 flex items-center justify-between gap-3 bg-cream/40">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 1}
                    className={cn(
                      "inline-flex items-center gap-1.5 h-11 px-4 rounded-full text-[13px] font-bold tracking-[.12em] uppercase transition-colors",
                      step === 1
                        ? "text-ink/30 cursor-not-allowed"
                        : "text-ink hover:bg-black/[0.04]",
                    )}
                  >
                    <ChevronLeft size={16} strokeWidth={2.5} />
                    Précédent
                  </button>

                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canContinue}
                      className={cn(
                        "inline-flex items-center gap-1.5 h-12 px-6 rounded-full text-[13px] font-bold tracking-[.12em] uppercase transition-all",
                        canContinue
                          ? "bg-accent text-white hover:brightness-110 shadow-[0_8px_24px_-8px_rgba(159,30,67,0.5)]"
                          : "bg-ink/[0.08] text-ink/40 cursor-not-allowed",
                      )}
                    >
                      Suivant
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submitDemand}
                      disabled={!canContinue}
                      className={cn(
                        "inline-flex items-center gap-2 h-12 px-7 rounded-full text-[13px] font-bold tracking-[.12em] uppercase transition-all",
                        canContinue
                          ? "bg-accent text-white hover:brightness-110 shadow-[0_8px_24px_-8px_rgba(159,30,67,0.5)]"
                          : "bg-ink/[0.08] text-ink/40 cursor-not-allowed",
                      )}
                    >
                      Demander mon estimation
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-[12.5px] text-ink/55 max-w-[640px] mx-auto leading-relaxed">
          Estimation gratuite et sans engagement. Vos informations restent
          confidentielles.
        </p>
      </div>
    </section>
  );
}

/* ───────────── STEP 1 ───────────── */

function Step1({
  data,
  update,
}: {
  data: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  return (
    <div className="space-y-10">
      <div>
        <StepTitle>Quel est votre projet ?</StepTitle>
        <p className="mt-2 text-[14.5px] text-ink/60 leading-relaxed">
          Souhaitez-vous vendre ou louer votre bien ?
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <BigChoiceCard
            active={data.intent === "vendre"}
            onClick={() => update("intent", "vendre")}
            icon={<Tag size={22} strokeWidth={1.7} />}
            title="Vendre"
            desc="Mettre en vente votre bien."
          />
          <BigChoiceCard
            active={data.intent === "louer"}
            onClick={() => update("intent", "louer")}
            icon={<KeyRound size={22} strokeWidth={1.7} />}
            title="Louer"
            desc="Mettre en location votre bien."
          />
        </div>
      </div>

      <div>
        <SubTitle>Quel type de bien souhaitez-vous estimer ?</SubTitle>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {PROPERTY_TYPES.map((t) => (
            <ChoiceCard
              key={t.value}
              active={data.propertyType === t.value}
              onClick={() => update("propertyType", t.value)}
              icon={t.icon}
              title={t.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────── STEP 2 ───────────── */

function Step2({
  data,
  update,
}: {
  data: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  return (
    <div>
      <StepTitle>Où se situe le bien ?</StepTitle>
      <p className="mt-2 text-[14.5px] text-ink/60 leading-relaxed">
        Indiquez l&apos;adresse complète, elle reste confidentielle.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-3">
        <TextField
          label="Rue"
          icon={<MapPin size={17} strokeWidth={1.8} />}
          value={data.street}
          onChange={(v) => update("street", v)}
          placeholder="Chaussée de Bruxelles"
          autoComplete="address-line1"
          required
        />
        <TextField
          label="Numéro"
          value={data.number}
          onChange={(v) => update("number", v)}
          placeholder="12"
          autoComplete="address-line2"
          required
        />
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
        <TextField
          label="Code postal"
          value={data.postalCode}
          onChange={(v) => update("postalCode", v.replace(/[^0-9]/g, "").slice(0, 4))}
          placeholder="1400"
          inputMode="numeric"
          autoComplete="postal-code"
          required
        />
        <TextField
          label="Ville"
          value={data.city}
          onChange={(v) => update("city", v)}
          placeholder="Nivelles"
          autoComplete="address-level2"
          required
        />
      </div>
    </div>
  );
}

/* ───────────── STEP 3 ───────────── */

function Step3({
  data,
  update,
}: {
  data: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const type = data.propertyType;
  const showBedrooms = type !== "terrain" && type !== "garage";

  return (
    <div className="space-y-9">
      <div>
        <StepTitle>Parlez-nous du bien</StepTitle>
        <p className="mt-2 text-[14.5px] text-ink/60 leading-relaxed">
          Quelques caractéristiques pour mieux comprendre votre bien.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextField
          label="Surface habitable"
          icon={<Ruler size={17} strokeWidth={1.8} />}
          value={data.surface}
          onChange={(v) => update("surface", v.replace(/[^0-9]/g, "").slice(0, 5))}
          placeholder="120"
          suffix="m²"
          inputMode="numeric"
          required
        />
        {showBedrooms && (
          <div>
            <FieldLabel icon={<Bed size={17} strokeWidth={1.8} />}>
              Nombre de chambres
            </FieldLabel>
            <div className="grid grid-cols-6 gap-1.5">
              {BEDROOMS_OPTIONS.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => update("bedrooms", b.value)}
                  className={cn(
                    "h-11 rounded-[10px] text-[13px] font-bold tracking-tight transition-all",
                    data.bedrooms === b.value
                      ? "bg-ink text-white"
                      : "bg-bg text-ink ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.04]",
                  )}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <FieldLabel icon={<Sparkles size={17} strokeWidth={1.8} />}>
          État général
        </FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CONDITION_OPTIONS.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => update("condition", c.value)}
              className={cn(
                "group flex items-start gap-3 p-4 rounded-[12px] text-left transition-all",
                data.condition === c.value
                  ? "bg-accent text-white ring-1 ring-inset ring-accent shadow-[0_10px_24px_-12px_rgba(159,30,67,0.55)]"
                  : "bg-white ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.02] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-16px_rgba(159,30,67,0.25)]",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "shrink-0 grid place-items-center w-9 h-9 rounded-lg transition-colors",
                  data.condition === c.value
                    ? "bg-white/15 text-white"
                    : "bg-bg text-ink/65",
                )}
              >
                {c.icon}
              </span>
              <span className="min-w-0">
                <span
                  className={cn(
                    "block text-[14px] font-bold",
                    data.condition === c.value ? "text-white" : "text-ink",
                  )}
                >
                  {c.label}
                </span>
                <span
                  className={cn(
                    "block mt-0.5 text-[12.5px] leading-relaxed",
                    data.condition === c.value ? "text-white/80" : "text-ink/60",
                  )}
                >
                  {c.desc}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {type === "maison" && (
        <ConditionalSection title="Détails maison (facultatif)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TextField
              label="Surface terrain"
              value={data.landSurface}
              onChange={(v) =>
                update("landSurface", v.replace(/[^0-9]/g, "").slice(0, 6))
              }
              placeholder="500"
              suffix="m²"
              inputMode="numeric"
            />
            <div>
              <FieldLabel>Nombre de façades</FieldLabel>
              <div className="grid grid-cols-3 gap-1.5">
                {(["2", "3", "4"] as Facades[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => update("facades", f)}
                    className={cn(
                      "h-11 rounded-[10px] text-[13px] font-bold transition-all",
                      data.facades === f
                        ? "bg-ink text-white"
                        : "bg-bg text-ink ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.04]",
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <YesNoField
              label="Jardin"
              value={data.garden}
              onChange={(v) => update("garden", v)}
            />
            <YesNoField
              label="Garage"
              value={data.garage}
              onChange={(v) => update("garage", v)}
            />
          </div>
        </ConditionalSection>
      )}

      {type === "appartement" && (
        <ConditionalSection title="Détails appartement (facultatif)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <TextField
              label="Étage"
              value={data.floor}
              onChange={(v) =>
                update("floor", v.replace(/[^0-9]/g, "").slice(0, 3))
              }
              placeholder="3"
              inputMode="numeric"
            />
            <YesNoField
              label="Ascenseur"
              value={data.elevator}
              onChange={(v) => update("elevator", v)}
            />
          </div>
          <div className="mt-3">
            <YesNoField
              label="Terrasse ou balcon"
              value={data.terrace}
              onChange={(v) => update("terrace", v)}
            />
          </div>
        </ConditionalSection>
      )}

      {type === "terrain" && (
        <ConditionalSection title="Détails terrain (facultatif)">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-3">
            <TextField
              label="Surface terrain"
              value={data.landSurface}
              onChange={(v) =>
                update("landSurface", v.replace(/[^0-9]/g, "").slice(0, 6))
              }
              placeholder="700"
              suffix="m²"
              inputMode="numeric"
            />
            <div>
              <FieldLabel>Terrain à bâtir</FieldLabel>
              <div className="grid grid-cols-3 gap-1.5">
                {(
                  [
                    { v: "oui", l: "Oui" },
                    { v: "non", l: "Non" },
                    { v: "inconnu", l: "Je ne sais pas" },
                  ] as { v: Buildable; l: string }[]
                ).map((o) => (
                  <button
                    key={o.v}
                    type="button"
                    onClick={() => update("buildable", o.v)}
                    className={cn(
                      "h-11 rounded-[10px] text-[12.5px] font-bold transition-all px-2",
                      data.buildable === o.v
                        ? "bg-ink text-white"
                        : "bg-bg text-ink ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.04]",
                    )}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ConditionalSection>
      )}

      {(type === "commerce" || type === "bureau") && (
        <ConditionalSection title="Détails du local (facultatif)">
          <TextField
            label="Activité actuelle"
            value={data.activity}
            onChange={(v) => update("activity", v)}
            placeholder="Boutique, bureaux partagés, etc."
          />
        </ConditionalSection>
      )}
    </div>
  );
}

/* ───────────── STEP 4 ───────────── */

function Step4({
  data,
  update,
}: {
  data: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const consentId = useId();
  return (
    <div className="space-y-8">
      <div>
        <StepTitle>Comment pouvons-nous vous recontacter ?</StepTitle>
        <p className="mt-2 text-[14.5px] text-ink/60 leading-relaxed">
          Un agent revient vers vous rapidement avec une estimation affinée.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextField
          label="Prénom"
          icon={<User size={17} strokeWidth={1.8} />}
          value={data.firstName}
          onChange={(v) => update("firstName", v)}
          placeholder="Jean"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Nom"
          value={data.lastName}
          onChange={(v) => update("lastName", v)}
          placeholder="Dupont"
          autoComplete="family-name"
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TextField
          label="E-mail"
          icon={<Mail size={17} strokeWidth={1.8} />}
          value={data.email}
          onChange={(v) => update("email", v)}
          placeholder="jean@exemple.be"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Téléphone"
          icon={<Phone size={17} strokeWidth={1.8} />}
          value={data.phone}
          onChange={(v) => update("phone", v)}
          placeholder="+32 470 12 34 56"
          type="tel"
          autoComplete="tel"
          required
        />
      </div>

      <div>
        <FieldLabel>
          Quand souhaitez-vous {data.intent === "louer" ? "louer" : "vendre"} ?
        </FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {TIMELINE_OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => update("timeline", o.value)}
              className={cn(
                "flex items-center gap-2.5 h-12 px-4 rounded-[12px] text-[14px] font-semibold text-left transition-all",
                data.timeline === o.value
                  ? "bg-accent text-white ring-1 ring-inset ring-accent shadow-[0_10px_24px_-12px_rgba(159,30,67,0.55)]"
                  : "bg-white ring-1 ring-inset ring-hairline text-ink hover:ring-accent/50 hover:bg-accent/[0.02] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-16px_rgba(159,30,67,0.25)]",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0",
                  data.timeline === o.value
                    ? "bg-white text-accent"
                    : "bg-bg ring-1 ring-inset ring-hairline",
                )}
              >
                {data.timeline === o.value ? (
                  <Check size={12} strokeWidth={3} />
                ) : null}
              </span>
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Informations complémentaires (facultatif)</FieldLabel>
        <textarea
          value={data.notes}
          onChange={(e) => update("notes", e.target.value)}
          rows={3}
          placeholder="Rénovations récentes, situation particulière, disponibilité du bien…"
          className="w-full px-4 py-3 text-[14.5px] rounded-[12px] bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all resize-none"
        />
      </div>

      <label
        htmlFor={consentId}
        className="flex items-start gap-2.5 text-[12.5px] text-ink/65 leading-relaxed cursor-pointer select-none"
      >
        <input
          id={consentId}
          type="checkbox"
          checked={data.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-hairline ring-1 ring-inset ring-hairline accent-accent cursor-pointer"
        />
        <span>
          En cochant cette case et en soumettant ce formulaire, j&apos;accepte
          que mes données personnelles soient utilisées dans le cadre de ma
          demande et je confirme avoir pris connaissance de la{" "}
          <a
            href="/politique-de-confidentialite"
            className="font-semibold text-ink underline underline-offset-2 hover:text-accent"
          >
            Politique de Confidentialité
          </a>
          .
        </span>
      </label>
    </div>
  );
}

/* ───────────── SUCCESS ───────────── */

function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
      <span
        aria-hidden
        className="grid place-items-center w-16 h-16 rounded-full bg-accent text-white mb-6 shadow-[0_12px_30px_-12px_rgba(159,30,67,0.6)]"
      >
        <Check size={28} strokeWidth={2.4} />
      </span>
      <h2 className="text-[24px] lg:text-[28px] font-extrabold tracking-tight text-ink leading-tight max-w-[420px] text-balance">
        Votre demande a bien été envoyée
        <span className="text-accent">.</span>
      </h2>
      <p className="mt-3 text-[14.5px] text-ink/65 leading-relaxed max-w-[480px]">
        Un agent Be Home Partners revient vers vous prochainement pour discuter
        de votre projet et affiner l&apos;estimation.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex items-center h-11 px-6 rounded-full bg-ink text-white text-[13px] font-bold tracking-[.15em] uppercase hover:opacity-90 transition-opacity"
      >
        Nouvelle demande
      </button>
    </div>
  );
}

/* ───────────── PRIMITIVES ───────────── */

const STEP_LABELS = ["Projet", "Adresse", "Détails", "Contact"] as const;

function Stepper({
  currentStep,
  onJump,
}: {
  currentStep: number;
  onJump: (s: number) => void;
}) {
  return (
    <div className="px-6 lg:px-10 pt-6 lg:pt-7 pb-5 border-b border-hairline bg-cream/30">
      <ol className="flex items-center w-full">
        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1;
          const isActive = stepNum === currentStep;
          const isDone = stepNum < currentStep;
          const isLast = stepNum === STEP_LABELS.length;
          const clickable = isDone;
          return (
            <li
              key={label}
              className={cn(
                "flex items-center min-w-0",
                isLast ? "shrink-0" : "flex-1",
              )}
            >
              <button
                type="button"
                disabled={!clickable && !isActive}
                onClick={() => clickable && onJump(stepNum)}
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "group flex items-center gap-2.5 min-w-0 outline-none",
                  clickable && "cursor-pointer",
                  !clickable && !isActive && "cursor-default",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "relative shrink-0 grid place-items-center w-7 h-7 rounded-full text-[11.5px] font-extrabold transition-all duration-300 tabular-nums",
                    isActive &&
                      "bg-accent text-white shadow-[0_0_0_4px_rgba(184,31,58,0.12),0_4px_12px_-4px_rgba(184,31,58,0.45)]",
                    isDone &&
                      "bg-accent text-white group-hover:brightness-110",
                    !isActive && !isDone &&
                      "bg-white text-ink/40 ring-1 ring-inset ring-ink/15",
                  )}
                >
                  {isDone ? (
                    <Check size={13} strokeWidth={3} />
                  ) : (
                    stepNum
                  )}
                </span>
                <span
                  className={cn(
                    "hidden sm:block text-[12.5px] tracking-tight whitespace-nowrap transition-all duration-300",
                    isActive && "text-ink font-extrabold",
                    isDone && "text-ink/65 font-semibold group-hover:text-ink",
                    !isActive && !isDone && "text-ink/35 font-semibold",
                  )}
                >
                  {label}
                </span>
              </button>
              {!isLast ? (
                <span
                  aria-hidden
                  className="flex-1 mx-3 sm:mx-4 h-px relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-ink/10" />
                  <span
                    className={cn(
                      "absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out",
                      stepNum < currentStep ? "w-full" : "w-0",
                    )}
                  />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div className="sm:hidden mt-3 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-[.18em] uppercase text-accent">
          {STEP_LABELS[currentStep - 1]}
        </span>
        <span className="text-[11px] font-semibold tabular-nums text-ink/45">
          {currentStep}/{STEP_LABELS.length}
        </span>
      </div>
    </div>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight text-ink leading-[1.1] text-balance">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[16px] lg:text-[18px] font-extrabold tracking-tight text-ink leading-tight">
      {children}
    </h3>
  );
}

function FieldLabel({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-2">
      {icon ? <span aria-hidden className="text-ink/55">{icon}</span> : null}
      <span>{children}</span>
    </div>
  );
}


function TextField({
  label,
  value,
  onChange,
  placeholder,
  icon,
  suffix,
  type = "text",
  inputMode,
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  suffix?: string;
  type?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel icon={icon}>{label}</FieldLabel>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          inputMode={inputMode}
          autoComplete={autoComplete}
          className={cn(
            "w-full h-12 px-4 text-[14.5px] rounded-[12px] bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all",
            suffix && "pr-12",
          )}
        />
        {suffix ? (
          <span
            aria-hidden
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-ink/45"
          >
            {suffix}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function BigChoiceCard({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group relative flex items-center gap-4 p-5 lg:p-6 rounded-[16px] text-left transition-all",
        active
          ? "bg-accent text-white ring-1 ring-inset ring-accent shadow-[0_14px_32px_-16px_rgba(159,30,67,0.55)]"
          : "bg-white ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.02] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-16px_rgba(159,30,67,0.25)]",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "shrink-0 grid place-items-center w-12 h-12 rounded-[12px] transition-colors",
          active
            ? "bg-white/15 text-white"
            : "bg-bg text-ink/70",
        )}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block text-[16px] font-extrabold tracking-tight",
            active ? "text-white" : "text-ink",
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "block mt-1 text-[13px] leading-relaxed",
            active ? "text-white/85" : "text-ink/60",
          )}
        >
          {desc}
        </span>
      </span>
      {active ? (
        <span
          aria-hidden
          className="absolute top-3 right-3 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-accent"
        >
          <Check size={12} strokeWidth={3} />
        </span>
      ) : null}
    </button>
  );
}

function ChoiceCard({
  active,
  onClick,
  icon,
  title,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group relative flex flex-col items-start gap-3 p-4 rounded-[12px] text-left min-h-[110px] transition-all",
        active
          ? "bg-accent text-white ring-1 ring-inset ring-accent shadow-[0_10px_24px_-12px_rgba(159,30,67,0.55)]"
          : "bg-white ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.02] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-16px_rgba(159,30,67,0.25)]",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid place-items-center w-10 h-10 rounded-[10px] transition-colors",
          active
            ? "bg-white/15 text-white"
            : "bg-bg text-ink/65",
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "text-[13.5px] font-bold leading-tight",
          active ? "text-white" : "text-ink",
        )}
      >
        {title}
      </span>
      {active ? (
        <span
          aria-hidden
          className="absolute top-2.5 right-2.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-accent"
        >
          <Check size={12} strokeWidth={3} />
        </span>
      ) : null}
    </button>
  );
}

function YesNoField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { v: true, l: "Oui" },
          { v: false, l: "Non" },
        ].map((o) => (
          <button
            key={o.l}
            type="button"
            onClick={() => onChange(o.v)}
            className={cn(
              "h-11 rounded-[10px] text-[13px] font-bold transition-all",
              value === o.v
                ? "bg-ink text-white"
                : "bg-bg text-ink ring-1 ring-inset ring-hairline hover:ring-accent/50 hover:bg-accent/[0.04]",
            )}
          >
            {o.l}
          </button>
        ))}
      </div>
    </div>
  );
}

function ConditionalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[14px] bg-bg/60 ring-1 ring-inset ring-hairline p-5 lg:p-6">
      <div className="text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-4">
        {title}
      </div>
      {children}
    </div>
  );
}
