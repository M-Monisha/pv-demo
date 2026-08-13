import { createFileRoute, Link } from "@tanstack/react-router";
import poster from "@/assets/prod-rack.jpg";
import { STATS, PILLARS, COMPANY } from "@/lib/pvl-content";

const VIDEO_SRC = "/pvl-products.mp4";

export const Route = createFileRoute("/")({
  component: FilmHero,
});

function FilmHero() {
  return (
    <div>
      <section className="relative isolate flex min-h-screen items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--brand-cyan)_18%,transparent),transparent_55%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40">
          <p className="animate-rise text-xs tracking-[0.4em] text-primary">
            {COMPANY.established.toUpperCase()}
          </p>
          <h1 className="animate-rise mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Distribution
            <br />
            <span className="text-gradient-brand">Redefined</span>
          </h1>
          <p className="animate-rise mt-7 max-w-xl text-base text-muted-foreground sm:text-lg">
            {COMPANY.intro}
          </p>

          <div className="animate-rise mt-10 flex flex-wrap gap-3">
            <Link
              to="/showcase"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              See the product range
            </Link>
            <a
              href="#portfolio"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Solutions portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-10 sm:px-6">
              <p className="font-display text-4xl font-bold text-gradient-brand sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Four portfolios. One distribution partner.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/60"
            >
              <span className="font-display text-xs tracking-[0.3em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
