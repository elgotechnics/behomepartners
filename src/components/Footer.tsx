const navLinks = [
  "À vendre",
  "À louer",
  "Estimer mon bien",
  "Nos agences",
  "Références",
  "Blog",
  "Nous rejoindre",
];

const serviceLinks = [
  "Vente",
  "Location",
  "Estimation",
  "Gestion locative",
  "Investir",
  "Marketing immobilier",
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

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="max-w-[1480px] xl:max-w-[1680px] 2xl:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <div className="bg-ink text-white rounded-[14px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 px-8 lg:px-14 pt-14 pb-10 items-end border-b border-white/10">
            <div>
              <div className="text-[11px] tracking-[.2em] uppercase font-bold opacity-70 mb-4">
                Depuis 2010
              </div>
              <h2 className="text-4xl lg:text-[48px] font-extrabold tracking-tight leading-none">
                L&apos;immobilier qui
                <br />
                vous ressemble<span className="text-accent">.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3.5 items-start">
              <p className="text-[13px] opacity-70 leading-relaxed max-w-[460px]">
                Recevez en avant-première nos nouvelles annonces, off-market et
                tendances du Brabant wallon.
              </p>
              <form className="relative flex w-full max-w-[460px] rounded-[12px] overflow-hidden bg-white shadow-sm">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="votre@email.com"
                  className="relative flex-1 px-4 py-3.5 bg-transparent text-[13px] text-ink placeholder:text-ink/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="relative px-5 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.15em] uppercase hover:opacity-90 transition-opacity"
                >
                  S&apos;inscrire<span aria-hidden className="hidden sm:inline"> →</span>
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_2.4fr] gap-10 lg:gap-16 px-8 pt-8 pb-4 lg:px-14 lg:pt-14 lg:pb-3">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logos/horizontal/BeHome_logo_horizontal_blanc.svg"
                alt="Be Home Partners"
                className="h-16 w-auto mb-5"
              />
              <p className="text-[13px] opacity-70 leading-relaxed mb-5 max-w-[340px]">
                Votre partenaire immobilier depuis plus de 15 ans. Spécialistes
                de la vente et la location résidentielle dans le Brabant wallon.
              </p>

              <a
                href="mailto:info@behomepartners.be"
                className="inline-flex items-center gap-2.5 text-white text-[13px] font-semibold mb-6 hover:opacity-90"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white flex-shrink-0"
                  aria-hidden
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                info@behomepartners.be
              </a>

              <div className="flex gap-2.5 mb-6">
                {[FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-white/50 transition-colors text-white"
                    aria-label="Réseau social"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

            </div>

            <FooterColumn title="Naviguer" links={navLinks} />
            <FooterColumn title="Services" links={serviceLinks} />

            <div>
              <div className="text-[11px] tracking-[.2em] uppercase font-bold opacity-70 mb-5">
                Nos agences
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {agencies.map((a) => (
                  <div
                    key={a.city}
                    className="border border-white/10 rounded-md p-5"
                  >
                    <div className="text-sm font-bold tracking-tight mb-1.5">
                      {a.city}
                    </div>
                    <div className="text-xs opacity-65 leading-relaxed mb-2.5">
                      {a.address}
                    </div>
                    <a
                      href={`tel:${a.tel}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:opacity-80"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {a.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-8 lg:px-14 py-6 border-t border-white/10 text-[11px] leading-relaxed text-white/55 text-center">
            Agent immobilier intermédiaire en Belgique agréé IPI sous le numéro
            503.617. N° entreprise : BE 0830.645.048.
            <br />
            Instance de contrôle : IPI/BIV, rue du Luxembourg 16B, 1000
            Bruxelles. Soumis au code déontologique de l&apos;IPI :{" "}
            <a
              href="https://www.ipi.be"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              www.ipi.be
            </a>
            .
          </div>

          <div className="px-8 lg:px-14 py-5 bg-black/25 flex flex-wrap justify-between items-center gap-4 text-xs">
            <div className="opacity-55">
              © 2026 Be Home Partners. Tous droits réservés.
            </div>
            <div className="flex gap-6 opacity-70 flex-wrap">
              {[
                "Mentions légales",
                "Politique de confidentialité",
                "Cookies",
                "Barème d'honoraires",
                "Plan du site",
              ].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-white hover:opacity-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[.2em] uppercase font-bold opacity-70 mb-5">
        {title}
      </div>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.8 8.43-4.93 8.43-9.94" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13.67.65 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4m6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 2.06-2.06 2.06 2.06 0 0 1-2.06 2.06m1.78 13.02H3.56V9h3.56zM22.22 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54A1.75 1.75 0 0 0 1.77 24h20.45A1.76 1.76 0 0 0 24 22.27V1.73A1.76 1.76 0 0 0 22.22 0" />
    </svg>
  );
}
