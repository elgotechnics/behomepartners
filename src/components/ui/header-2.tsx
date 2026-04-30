"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const servicesSubLinks = [
  { label: "Vente", href: "/services/vente" },
  { label: "Location", href: "/services/location" },
  { label: "Estimation", href: "/services/estimation" },
  { label: "Gestion locative", href: "/services/gestion-locative" },
  { label: "Investir", href: "/services/investir" },
  { label: "Marketing immobilier", href: "/services/marketing-immobilier" },
];

const agencies = [
  {
    city: "Nivelles",
    address: "Avenue du Centenaire 53 bte 4 · 1400",
    phone: "+32 67 84 12 84",
    tel: "+3267841284",
  },
  {
    city: "Braine-l'Alleud",
    address: "Chaussée de Tubize 11 · 1420",
    phone: "+32 2 385 12 84",
    tel: "+3223851284",
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [phoneOpen, setPhoneOpen] = React.useState(false);
  const phoneRef = React.useRef<HTMLDivElement>(null);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (!phoneOpen) return;
    const handler = (e: MouseEvent) => {
      if (phoneRef.current && !phoneRef.current.contains(e.target as Node)) {
        setPhoneOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhoneOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
    };
  }, [phoneOpen]);

  const links: NavLink[] = [
    { label: "À vendre", href: "#listings" },
    { label: "À louer", href: "#listings" },
    { label: "Services", href: "#services", children: servicesSubLinks },
    { label: "À propos", href: "#about" },
    { label: "Jobs", href: "/jobs" },
    { label: "Contact", href: "#contact" },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out",
        scrolled || open ? "bg-white" : "bg-transparent",
        {
          "border-border md:top-4 md:max-w-5xl md:shadow":
            scrolled && !open,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-16 w-full items-center justify-between px-4 py-3 md:h-20 md:py-4 md:transition-all md:ease-out",
          {
            "md:px-2 md:h-16 md:py-2": scrolled,
          },
        )}
      >
        <a
          href="/"
          aria-label="Be Home Partners — accueil"
          className={cn(
            "flex items-center md:transition-all md:ease-out",
            scrolled || open ? "md:ml-0" : "md:-ml-8 lg:-ml-16",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              scrolled || open
                ? "/assets/logos/horizontal/BeHome_logo_horizontal.svg"
                : "/assets/logos/horizontal/BeHome_logo_horizontal_blanc.svg"
            }
            alt="Be Home Partners"
            className={cn(
              "h-9 w-auto md:transition-all md:ease-out",
              scrolled || open ? "md:h-10" : "md:h-12",
            )}
          />
        </a>
        <div className="hidden md:flex items-center gap-1 lg:gap-2 mx-auto">
          {links.map((link, i) =>
            link.children ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    !scrolled && !open && "text-white hover:bg-white/10 hover:text-white",
                  )}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {link.label}
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
                    className={cn(
                      "ml-1 transition-transform",
                      servicesOpen && "rotate-180",
                    )}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  role="menu"
                  className={cn(
                    "absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 pt-2",
                    servicesOpen ? "block" : "hidden",
                  )}
                >
                  <div className="rounded-md border border-border bg-white p-1 shadow-lg">
                    {link.children.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        role="menuitem"
                        className="block rounded-sm px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={i}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  !scrolled && !open && "text-white hover:bg-white/10 hover:text-white",
                )}
                href={link.href}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="relative" ref={phoneRef}>
            <Button
              size="icon"
              variant="outline"
              aria-haspopup="menu"
              aria-expanded={phoneOpen}
              aria-label="Nous appeler"
              onClick={() => setPhoneOpen((v) => !v)}
              className="hover:bg-ink hover:text-white hover:border-ink"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </Button>
            {phoneOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full z-50 mt-2 w-[280px] rounded-md border border-border bg-white p-2 shadow-lg"
              >
                <div className="px-2 py-1.5 text-[11px] tracking-[.2em] uppercase font-bold text-muted-foreground">
                  Appeler une agence
                </div>
                {agencies.map((a) => (
                  <a
                    key={a.tel}
                    href={`tel:${a.tel}`}
                    role="menuitem"
                    onClick={() => setPhoneOpen(false)}
                    className="flex flex-col gap-0.5 rounded-sm px-3 py-2.5 hover:bg-secondary"
                  >
                    <span className="text-sm font-bold text-foreground">
                      {a.city}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {a.address}
                    </span>
                    <span className="text-sm font-semibold text-accent mt-0.5">
                      {a.phone}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <Button asChild>
            <a href="#estimation">Estimer mon bien</a>
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          "bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
            "flex h-full w-full flex-col justify-between gap-y-2 p-4 overflow-y-auto",
          )}
        >
          <div className="grid gap-y-2">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className={buttonVariants({
                      variant: "ghost",
                      className: "justify-between",
                    })}
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className={cn(
                        "transition-transform",
                        mobileServicesOpen && "rotate-180",
                      )}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-border pl-3">
                      {link.children.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={buttonVariants({
                            variant: "ghost",
                            className: "justify-start",
                          })}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  className={buttonVariants({
                    variant: "ghost",
                    className: "justify-start",
                  })}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <a href="#estimation" onClick={() => setOpen(false)}>
                Estimer mon bien
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
