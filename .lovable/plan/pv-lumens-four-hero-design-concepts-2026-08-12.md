# PV Lumens — Four Hero Design Concepts

A four-page site where each page is a full landing page, but the focus is the hero section — four different hero treatments for PV Lumens India Pvt Ltd, all sharing one brand system taken from the logo.

## Brand system (from the logo + profile)

- Deep indigo core `#2B2A6B`, mid blue `#2B6CB8`, bright cyan-blue `#1FA2DE`, near-white `#F5F8FC`, dark ink for text.
- Dark-first pages with cyan accents, concentric-ring motif echoing the logo badge.
- Typography: one confident geometric sans for headings, neutral sans for body. No purple gradients, no generic template look.
- Shared slim header (logo, page switcher between the 4 concepts) and a compact footer with contact details from the profile.

## Page 1 — `/` Video hero

Full-bleed autoplaying, muted, looping product montage video behind the headline, with a dark gradient scrim for readability.

- Video: one ~8s 16:9 cinematic montage generated for PVL, cutting across 4–5 product categories: IP video-surveillance camera, structured copper/fibre cabling and patch panel, network rack in a data centre aisle, rugged barcode scanner / mobile computer, thermal imager / clamp meter. Studio-lit, blue-and-indigo lighting to match the palette, slow camera moves.
- Headline: "Distribution Redefined" with a supporting line on nation-wide distribution across networking, safety & security, productivity and test & measurement.
- Stat strip under the fold edge: 20+ branches, 120+ team, 2000+ partners, 25+ global brands.

## Page 2 — `/showcase` Image slideshow hero

Hero with a large image stage where each product image holds for exactly 2 seconds, then cross-fades to the next, looping. Progress dots plus a caption that changes with the image.

Product images to generate (clean, HD, studio, consistent lighting and background):

1. IP dome / bullet CCTV camera (video surveillance)
2. Copper Cat6 and fibre cable coils with RJ45 connectors
3. 42U network rack / cabinet with patch panels
4. Barcode scanner and rugged mobile computer
5. Thermal imager and clamp meter (test & measurement)
6. Access control reader and fire-alarm detector
7. Inspection drone / UAS

If any of these should be dropped or swapped, say so and I'll adjust the set.

## Page 3 — `/solutions` Split editorial hero

Asymmetric split hero: left column has an oversized headline with an animated word-cycling line ("Network Infra · Safety & Security · Business Productivity · Test & Measurement"); right column is a bento grid of the four portfolio pillars with icon tiles that lift on hover. Concentric-ring logo motif bleeding off the right edge. Below the hero: industry-focus strip (Data Centre, Enterprise, Retail, Manufacturing, Power, Transport, Defense, Public Infra).

## Page 4 — `/advantage` Immersive scroll hero

Dark hero with a layered depth effect: soft ring/grid backdrop drifting on scroll, a centred kinetic headline that reveals line by line, and animated counters for the key numbers. Below: "The PVL Advantage" cards (pan-India reach, value-added distribution, SAP HANA operations, partner ecosystem, brand partnerships, promoter experience) and an awards row (Zebra, Vertiv, Megger, BICSI, Honeywell, Axis).

## Technical notes

- Four TanStack routes: `index.tsx`, `showcase.tsx`, `solutions.tsx`, `advantage.tsx`, each with its own head() metadata.
- Palette added as semantic tokens in `src/styles.css` (oklch); no hardcoded colour utilities in components.
- Logo registered as a Lovable asset from the upload and used in the header.
- Video generated once and stored as a project asset; rendered with `autoPlay muted loop playsInline` and a poster frame for mobile.
- Slideshow is a small reusable component driven by a 2000ms interval with cross-fade; images imported as ES modules.
- Motion via CSS/Tailwind transitions and lightweight React state — no heavy animation dependencies.
