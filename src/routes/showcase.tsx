import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import cctv from "@/assets/prod-cctv.jpg";
import cables from "@/assets/prod-cables.jpg";
import rack from "@/assets/prod-rack.jpg";
import scanner from "@/assets/prod-scanner.jpg";
import meters from "@/assets/prod-meters.jpg";
import access from "@/assets/prod-access.jpg";
import drone from "@/assets/prod-drone.jpg";

export const Route = createFileRoute("/showcase")({
  component: ShowcaseHero,
});

const SLIDES = [
  { src: cctv, name: "Video Surveillance", note: "IP dome & bullet cameras, VMS and analytics" },
  { src: cables, name: "Copper & Fibre", note: "Cat6 cabling, fibre trunks, RJ45 and LC connectors" },
  { src: rack, name: "Racks & Cabinets", note: "42U enclosures, patch panels, wire management" },
  { src: scanner, name: "Business Productivity", note: "Barcode scanners, mobile computers, RFID" },
  { src: meters, name: "Test & Measurement", note: "Thermal imagers, clamp meters, smart probes" },
  { src: access, name: "Access & Fire Safety", note: "Card readers, intrusion and fire detection" },
  { src: drone, name: "Drones & UAS", note: "Inspection and surveillance aerial platforms" },
];

function ShowcaseHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 2000);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[index]!;

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,color-mix(in_oklab,var(--brand-blue)_25%,transparent),transparent_60%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs tracking-[0.4em] text-primary">PRODUCT SHOWCASE</p>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl">
              The range,
              <br />
              <span className="text-gradient-brand">two seconds</span>
              <br />
              at a time.
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              Seven categories distributed nation-wide, from passive networking to aerial
              inspection — cycling automatically through the PV Lumens portfolio.
            </p>

            <div className="mt-8 min-h-20">
              <p key={current.name} className="animate-rise font-display text-2xl font-semibold">
                {current.name}
              </p>
              <p key={current.note} className="animate-rise mt-1 text-sm text-muted-foreground">
                {current.note}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${s.name}`}
                  className={
                    i === index
                      ? "h-1.5 w-12 rounded-full bg-primary transition-all"
                      : "h-1.5 w-6 rounded-full bg-border transition-all hover:bg-muted-foreground"
                  }
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-glow)]">
              {SLIDES.map((s, i) => (
                <img
                  key={s.name}
                  src={s.src}
                  alt={s.name}
                  width={1600}
                  height={1000}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
              <div className="absolute bottom-4 left-4 rounded-full bg-background/70 px-4 py-2 text-xs tracking-[0.2em] backdrop-blur">
                {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">Categories in rotation</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SLIDES.map((s, i) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setIndex(i)}
                className="group overflow-hidden rounded-2xl border border-border bg-background text-left transition-colors hover:border-primary/60"
              >
                <img
                  src={s.src}
                  alt={s.name}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <p className="font-display text-sm font-semibold">{s.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
