"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type Option = {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
};

const ONLINE_ICON = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M8 21h8M12 18v3" />
  </svg>
);

const AGENT_ICON = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

const OPTIONS: Option[] = [
  {
    title: "Estimation en ligne",
    desc: "Réponse rapide, sans rendez-vous.",
    href: "/estimation/en-ligne",
    icon: ONLINE_ICON,
  },
  {
    title: "Estimation par un agent",
    desc: "Un expert se déplace chez vous.",
    href: "/estimation/expert",
    icon: AGENT_ICON,
    badge: "Recommandé",
  },
];

export function EstimationChoiceDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

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

  if (!open || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-[fade-in_180ms_ease-out]"
      />
      <div className="relative w-full max-w-[520px] bg-white rounded-[20px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] animate-[slide-up_220ms_cubic-bezier(0.16,1,0.3,1)]">
        <header className="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-md bg-accent/10 ring-1 ring-inset ring-accent/15 px-2.5 py-1 mb-2.5">
              <span className="text-[10px] tracking-[.22em] uppercase font-semibold leading-none text-accent">
                Estimation gratuite
              </span>
            </div>
            <h2
              id={titleId}
              className="text-[20px] lg:text-[22px] font-extrabold tracking-tight leading-tight text-ink text-balance"
            >
              Comment souhaitez-vous estimer votre bien
              <span className="text-accent">?</span>
            </h2>
            <p className="mt-2 text-[13px] text-ink/60 leading-relaxed">
              Choisissez la méthode qui vous convient le mieux.
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

        <div className="px-6 pb-6 grid gap-3">
          {OPTIONS.map((o) => (
            <a
              key={o.href}
              href={o.href}
              onClick={onClose}
              className="group relative flex items-start gap-4 p-4 lg:p-5 rounded-[14px] ring-1 ring-inset ring-hairline bg-white hover:ring-accent/40 hover:bg-accent/[0.02] transition-all"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-[12px] bg-accent/10 text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                {o.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[15px] lg:text-[16px] font-extrabold text-ink tracking-tight">
                    {o.title}
                  </span>
                  {o.badge ? (
                    <span className="inline-flex items-center text-[10px] font-bold tracking-[.18em] uppercase text-accent bg-accent/10 ring-1 ring-inset ring-accent/15 rounded-md px-2 py-0.5">
                      {o.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[13px] text-ink/65 leading-relaxed">
                  {o.desc}
                </p>
              </div>
              <span
                aria-hidden
                className="self-center text-ink/30 group-hover:text-accent group-hover:translate-x-1 transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
