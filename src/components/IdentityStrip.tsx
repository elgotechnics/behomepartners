type Stat = {
  label: string;
  value: string;
  suffix?: string;
  caption: string;
};

const stats: Stat[] = [
  {
    label: "Expérience",
    value: "15",
    suffix: "+",
    caption: "Années d'expertise locale",
  },
  {
    label: "Satisfaction",
    value: "92%",
    caption: "De clients satisfaits",
  },
  {
    label: "Transactions",
    value: "1000",
    suffix: "+",
    caption: "Biens vendus, loués ou estimés",
  },
  {
    label: "Estimation",
    value: "48",
    suffix: "H",
    caption: "Pour recevoir votre estimation",
  },
];

export function IdentityStrip() {
  return (
    <section className="bg-accent text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[11px] font-bold tracking-[.15em] uppercase opacity-85 mb-4">
                {s.label}
              </div>
              <div className="text-5xl lg:text-[52px] font-light tracking-tight leading-none mb-3">
                {s.value}
                {s.suffix && (
                  <span className="text-[32px]">{s.suffix}</span>
                )}
              </div>
              <div className="text-sm opacity-85 leading-relaxed">
                {s.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
