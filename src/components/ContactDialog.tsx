"use client";

import { useEffect, useState, useId } from "react";
import { createPortal } from "react-dom";

export type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  subject: string;
};

export function ContactDialog({ open, onClose, subject }: ContactDialogProps) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setSubmitted(false), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open || !mounted) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-[fade-in_180ms_ease-out]"
      />
      <div className="relative w-full max-w-[480px] max-h-[92vh] bg-white rounded-[20px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] flex flex-col animate-[slide-up_220ms_cubic-bezier(0.16,1,0.3,1)]">
        <header className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-hairline">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-md bg-accent/10 ring-1 ring-inset ring-accent/15 px-2.5 py-1 mb-2.5">
              <span className="text-[10px] tracking-[.22em] uppercase font-semibold leading-none text-accent">
                {subject}
              </span>
            </div>
            <h2
              id={`${formId}-title`}
              className="text-[20px] font-extrabold tracking-tight leading-tight text-ink"
            >
              Parlons de votre projet
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-1.5 text-[13px] text-ink/60 leading-relaxed">
              Laissez-nous vos coordonnées, un conseiller revient vers vous
              rapidement.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="grid place-items-center w-9 h-9 rounded-full bg-bg hover:bg-ink/[0.07] transition-colors text-ink shrink-0"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        {submitted ? (
          <div className="overflow-y-auto px-6 py-10 text-center">
            <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-accent/10 text-accent mb-5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-[17px] font-extrabold text-ink tracking-tight mb-2">
              Demande envoyée
            </h3>
            <p className="text-[13.5px] text-ink/65 leading-relaxed max-w-[320px] mx-auto">
              Merci, nous vous recontactons sous peu pour discuter de votre
              projet.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex items-center h-11 px-6 rounded-full bg-ink text-white text-[13px] font-bold tracking-[.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="overflow-y-auto px-6 py-5 space-y-4"
          >
            <input type="hidden" name="subject" value={subject} />
            <div className="grid grid-cols-2 gap-3">
              <Field
                id={`${formId}-firstname`}
                label="Prénom"
                name="firstname"
                type="text"
                autoComplete="given-name"
                required
                placeholder="Jean"
              />
              <Field
                id={`${formId}-lastname`}
                label="Nom"
                name="lastname"
                type="text"
                autoComplete="family-name"
                required
                placeholder="Dupont"
              />
            </div>
            <Field
              id={`${formId}-email`}
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jean@exemple.be"
            />
            <div>
              <label
                htmlFor={`${formId}-phone`}
                className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-1.5"
              >
                Téléphone<span className="text-accent ml-1">*</span>
              </label>
              <div className="w-full bg-bg ring-1 ring-inset ring-hairline rounded-md flex items-stretch focus-within:ring-ink/40 focus-within:bg-white transition-all">
                <span
                  aria-hidden
                  className="px-3 text-[14px] text-ink/70 font-semibold select-none border-r border-hairline flex items-center"
                >
                  +32
                </span>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel-national"
                  inputMode="tel"
                  placeholder="470 12 34 56"
                  className="flex-1 min-w-0 h-11 px-3 text-[14px] bg-transparent text-ink placeholder:text-ink/45 focus:outline-none"
                />
              </div>
            </div>
            <Field
              id={`${formId}-city`}
              label="Ville du bien"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Nivelles, Waterloo, …"
            />
            <div>
              <label
                htmlFor={`${formId}-msg`}
                className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-1.5"
              >
                Message (optionnel)
              </label>
              <textarea
                id={`${formId}-msg`}
                name="message"
                rows={3}
                placeholder="Parlez-nous brièvement de votre bien…"
                className="w-full px-3 py-2.5 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all resize-none"
              />
            </div>
            <label
              htmlFor={`${formId}-consent`}
              className="flex items-start gap-2.5 text-[12px] text-ink/65 leading-relaxed cursor-pointer select-none"
            >
              <input
                id={`${formId}-consent`}
                name="consent"
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-hairline ring-1 ring-inset ring-hairline accent-accent cursor-pointer"
              />
              <span>
                En cochant cette case et en soumettant ce formulaire,
                j&apos;accepte que mes données personnelles soient utilisées
                dans le cadre de ma demande et je confirme avoir pris
                connaissance de la{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="font-semibold text-ink underline underline-offset-2 hover:text-accent"
                >
                  Politique de Confidentialité
                </a>
                .
              </span>
            </label>
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-[12.5px] font-bold tracking-[.18em] uppercase text-ink/55 hover:text-ink transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="inline-flex items-center h-11 px-6 rounded-full bg-accent text-white text-[13px] font-bold tracking-[.15em] uppercase hover:opacity-90 transition-opacity"
              >
                Envoyer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}

function Field({
  id,
  label,
  name,
  type,
  autoComplete,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10.5px] font-bold tracking-[.18em] uppercase text-ink/55 mb-1.5"
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="w-full h-11 px-3 text-[14px] rounded-md bg-bg ring-1 ring-inset ring-hairline focus:ring-ink/40 focus:bg-white outline-none transition-all"
      />
    </div>
  );
}
