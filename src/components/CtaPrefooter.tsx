export function CtaPrefooter() {
  return (
    <section id="contact" className="bg-bg">
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 lg:pt-6 pb-4">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Left: photo (format natif 4:5) */}
          <div className="lg:col-span-4 relative rounded-[14px] overflow-hidden aspect-[954/1194]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/guillaume-portrait.png"
              alt="Guillaume — Be Home Partners"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: bordeaux CTA card (plus large) */}
          <div className="lg:col-span-8 bg-accent text-white rounded-[14px] px-8 py-16 lg:px-16 lg:py-20 relative overflow-hidden flex flex-col justify-center">
            <div
              aria-hidden
              className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full border border-white/15 pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -top-[80px] -right-[80px] w-[300px] h-[300px] rounded-full border border-white/10 pointer-events-none"
            />

            {/* Photo bien immobilier en surimpression */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/listing-maison-1.jpg"
              alt=""
              aria-hidden
              className="hidden lg:block absolute z-10 right-[5%] top-1/2 -translate-y-1/2 w-[260px] h-[300px] object-cover rounded-[14px] shadow-2xl rotate-[6deg] pointer-events-none ring-1 ring-white/15"
            />

            <div className="relative lg:max-w-[60%]">
              <div className="text-[11px] tracking-[.2em] uppercase font-bold opacity-85 mb-4">
                Contactez-nous
              </div>
              <h2 className="text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.05] mb-5">
                Confiez-nous votre projet.
              </h2>
              <p className="text-base leading-relaxed opacity-85 mb-8 max-w-[520px]">
                Vendre, acheter, louer ou simplement vous renseigner — on est à
                un appel ou un message. La première conversation est toujours
                la plus utile.
              </p>

              <div className="flex mb-10">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 bg-white text-accent rounded-[14px] px-8 py-4 text-[13px] font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
                >
                  Prendre rendez-vous
                  <svg
                    width="14"
                    height="14"
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
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                <ContactColumn
                  agency="Nivelles"
                  phone="+32 67 84 12 84"
                  href="tel:+3267841284"
                />
                <ContactColumn
                  agency="Braine-l'Alleud"
                  phone="+32 2 385 12 84"
                  href="tel:+3223851284"
                />
              </div>

              <div className="mt-7 pt-6 border-t border-white/15">
                <div className="flex items-center gap-2 text-[11px] tracking-[.15em] uppercase font-bold opacity-70 mb-3">
                  <ClockIcon />
                  Heures d&apos;ouverture
                </div>
                <dl className="grid sm:grid-cols-[1.6fr_1fr_1fr] gap-x-8 gap-y-2 text-sm">
                  <HoursRow
                    label="Lun – Ven"
                    value="9h30 – 13h · 14h – 18h"
                  />
                  <HoursRow label="Samedi" value="9h30 – 13h" />
                  <HoursRow label="Dimanche" value="Sur rendez-vous" />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
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
  );
}

function ContactColumn({
  agency,
  phone,
  href,
}: {
  agency: string;
  phone: string;
  href: string;
}) {
  return (
    <div>
      <div className="text-[11px] tracking-[.15em] uppercase font-bold opacity-70 mb-2">
        {agency}
      </div>
      <a
        href={href}
        className="inline-flex items-center gap-2.5 text-white font-bold text-[17px] hover:opacity-90"
      >
        <PhoneIcon />
        {phone}
      </a>
    </div>
  );
}

function HoursRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[12px] uppercase tracking-[.15em] opacity-70 font-semibold">
        {label}
      </dt>
      <dd className="font-bold whitespace-nowrap">{value}</dd>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
