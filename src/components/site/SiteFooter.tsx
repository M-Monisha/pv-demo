import { REGIONS } from "@/lib/pvl-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            PV Lumens India Private Limited
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Value-added distribution across Network Infrastructure, Safety &amp; Security,
            Business Productivity and Test &amp; Measurement. Estd. 2012.
          </p>
          <p className="mt-6 text-xs tracking-[0.25em] text-primary">
            20 BRANCHES · 300+ CITIES · SOUTH ASIA
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {REGIONS.map((r) => (
            <div key={r.region}>
              <p className="font-display text-sm font-semibold text-foreground">{r.region}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {r.cities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PV Lumens India Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
