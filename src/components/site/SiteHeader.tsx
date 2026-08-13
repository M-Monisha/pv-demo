import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Concept 01 · Film" },
  { to: "/showcase", label: "Concept 02 · Showcase" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="PV Lumens India logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground">
              PV LUMENS
            </span>
            <span className="text-[11px] tracking-[0.18em] text-muted-foreground">
              DISTRIBUTION REDEFINED
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-xl">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-[11px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
              activeProps={{
                className:
                  "rounded-full bg-primary px-3 py-2 text-[11px] font-medium tracking-wide text-primary-foreground sm:text-xs",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="sm:hidden">{item.label.split(" · ")[0]?.replace("Concept ", "")}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
