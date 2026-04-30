import Link from "next/link";

const navLinks = [
  { label: "À vendre", href: "#listings" },
  { label: "À louer", href: "#listings" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Blog", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 py-4 grid grid-cols-[160px_1fr_auto_auto] items-center gap-5">
        <Link href="/" aria-label="Be Home Partners — accueil">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logos/horizontal/BeHome_logo_horizontal.svg"
            alt="Be Home Partners"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink hover:text-accent transition-colors"
            >
              {link.label}
              {link.label === "Services" && " ▾"}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+3267841284"
          className="hidden md:inline-block text-sm font-bold tracking-wide text-ink border border-ink rounded-[14px] px-5 py-2.5 hover:bg-ink hover:text-white transition-colors"
        >
          +32 67 84 12 84
        </a>

        <Link
          href="#estimation"
          className="text-xs font-bold tracking-wider uppercase text-white bg-accent rounded-[14px] px-5 py-3 hover:opacity-90 transition-opacity"
        >
          Estimer mon bien
        </Link>
      </div>
    </header>
  );
}
