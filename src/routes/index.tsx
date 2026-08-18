import { createFileRoute } from "@tanstack/react-router";

import { hero, photos, type Photo } from "~/photos.gen";

export const Route = createFileRoute("/")({
  component: Home,
});

const urls = import.meta.glob("../assets/photos/*.{jpg,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/* AVIF at a few widths for anything modern, with a small JPEG underneath so
   the page still resolves without it. */
const fallback = (file: string) => urls[`../assets/photos/${file}.jpg`];
const avifSet = (p: Photo) =>
  p.widths.map((w) => `${urls[`../assets/photos/${p.file}-${w}.avif`]} ${w}w`).join(", ");

const COL = (span: number) =>
  `(min-width: 1648px) ${Math.round((span / 12) * 1600)}px, (min-width: 640px) ${Math.round((span / 12) * 100)}vw, 100vw`;

const fmt = (iso: string) => iso.replaceAll("-", ".");

/* The page is one chronological run of frames, packed into 12-column rows
   that change shape as you scroll. Every so often a wide frame breaks out
   and goes edge to edge — that is the only structure there is. */
const ROWS = [
  [7, 5],
  [4, 4, 4],
  [5, 7],
  [6, 6],
  [8, 4],
  [4, 4, 4],
  [4, 8],
  [6, 6],
];
const DRIFT = ["", "sm:mt-16", "sm:mt-8", "", "sm:mt-20", "", "sm:mt-12", ""];
const BREAK_EVERY = 12;

type Cell = { p: Photo; span: number; drift: string };
type Block = { kind: "rows"; rows: Cell[][] } | { kind: "bleed"; item: Photo };

function layout(all: Photo[]): Block[] {
  const blocks: Block[] = [];
  let rows: Cell[][] = [];
  let i = 0;
  let r = 0;
  let since = 0;

  while (i < all.length) {
    const p = all[i];
    if (since >= BREAK_EVERY && p.w / p.h > 1.7) {
      if (rows.length) blocks.push({ kind: "rows", rows });
      blocks.push({ kind: "bleed", item: p });
      rows = [];
      since = 0;
      i += 1;
      continue;
    }
    const template = ROWS[r % ROWS.length];
    const row: Cell[] = [];
    for (let c = 0; c < template.length && i < all.length; c += 1, i += 1) {
      row.push({ p: all[i], span: template[c], drift: c === 0 ? "" : DRIFT[(r + c) % DRIFT.length] });
    }
    rows.push(row);
    since += row.length;
    r += 1;
  }
  if (rows.length) blocks.push({ kind: "rows", rows });
  return blocks;
}

const blocks = layout(photos);
const SPAN: Record<number, string> = {
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
};
function Caption({ p }: { p: Photo }) {
  return (
    <figcaption className="mt-2 flex items-baseline justify-between gap-4 text-[11px] tracking-[0.14em] tabular-nums text-muted">
      <span className="text-amber">{fmt(p.date)}</span>
      <span className="text-right tracking-normal italic">{p.place}</span>
    </figcaption>
  );
}

function Frame({ cell }: { cell: Cell }) {
  const { p } = cell;
  return (
    <figure className={`reveal col-span-12 ${SPAN[cell.span]} ${cell.drift}`}>
      <picture>
        <source type="image/avif" srcSet={avifSet(p)} sizes={COL(cell.span)} />
        <img
          src={fallback(p.file)}
          alt={p.place}
          width={p.w}
          height={p.h}
          loading="lazy"
          decoding="async"
          className="w-full bg-ink/5"
        />
      </picture>
      <Caption p={p} />
    </figure>
  );
}

function Bleed({ p }: { p: Photo }) {
  return (
    <figure className="reveal my-12 sm:my-20">
      <picture>
        <source type="image/avif" srcSet={avifSet(p)} sizes="100vw" />
        <img
          src={fallback(p.file)}
          alt={p.place}
          width={p.w}
          height={p.h}
          loading="lazy"
          decoding="async"
          className="max-h-[88svh] w-full bg-ink/5 object-cover"
        />
      </picture>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <Caption p={p} />
      </div>
    </figure>
  );
}

function Home() {
  return (
    <div className="overflow-x-clip">
      <header>
        <h1 className="pt-[1.5vw] text-center text-[15.3vw] leading-[0.95] font-black tracking-[-0.02em] uppercase whitespace-nowrap select-none">
          Josh Chang
        </h1>
        <div className="mt-2 mb-6 grid grid-cols-2 gap-y-2 px-4 text-sm sm:grid-cols-4 sm:px-6">
          <p>Developer</p>
          <p>Amateur geologist</p>
          <p>Tourist</p>
          <a
            href="mailto:joshchang04@gmail.com"
            className="justify-self-end underline underline-offset-4 transition-colors hover:text-amber sm:justify-self-end"
          >
            joshchang04@gmail.com
          </a>
        </div>
      </header>

      <figure className="relative">
        <picture>
          <source type="image/avif" srcSet={avifSet(hero)} sizes="100vw" />
          <img
            src={fallback(hero.file)}
            alt={hero.place}
            width={hero.w}
            height={hero.h}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-[84svh] w-full object-cover"
          />
        </picture>
        <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-4 bg-gradient-to-t from-black/60 to-transparent px-4 pt-16 pb-4 text-[11px] tracking-[0.14em] tabular-nums text-white/85 sm:px-6">
          <span className="text-amber">{fmt(hero.date)}</span>
          <span className="text-right tracking-normal italic">{hero.place}</span>
        </figcaption>
      </figure>

      <main>
        {blocks.map((b, i) =>
          b.kind === "bleed" ? (
            <Bleed key={`b${i}`} p={b.item} />
          ) : (
            <div
              key={`g${i}`}
              className="mx-auto max-w-[1600px] px-4 pt-10 sm:px-6 sm:pt-14"
            >
              {b.rows.map((row, ri) => (
                <div
                  key={ri}
                  className="grid grid-cols-12 items-start gap-x-4 gap-y-10 pb-10 sm:gap-x-6 sm:gap-y-14 sm:pb-14"
                >
                  {row.map((cell) => (
                    <Frame key={cell.p.file} cell={cell} />
                  ))}
                </div>
              ))}
            </div>
          ),
        )}

        <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 sm:py-40">
          <p className="text-2xl leading-snug font-light text-balance sm:text-3xl">
            I&rsquo;m a developer, amateur geologist, and tourist. I code,
            hike, climb, look at rocks, and predict the weather.
          </p>
        </section>
      </main>

      <footer className="border-t-2 border-ink px-4 pt-10 pb-6 sm:px-6">
        <a
          href="mailto:joshchang04@gmail.com"
          className="block text-[8.5vw] leading-none font-black tracking-tight uppercase whitespace-nowrap transition-colors duration-300 hover:text-amber"
        >
          Get in touch
        </a>
        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 text-sm">
          <div className="flex gap-6">
            <a
              href="https://github.com/joshdchang"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-amber"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-chang-7b2854224/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-amber"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="text-muted">© {new Date().getFullYear()} Josh Chang</p>
        </div>
      </footer>
    </div>
  );
}
