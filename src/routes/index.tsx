import { createFileRoute } from "@tanstack/react-router";

import kilauea from "~/assets/photos/kilauea.jpg";
import aboveClouds from "~/assets/photos/above-clouds.jpg";
import naPali from "~/assets/photos/na-pali.jpg";
import halfDome from "~/assets/photos/half-dome.jpg";
import sequoia from "~/assets/photos/sequoia.jpg";
import zabriskie from "~/assets/photos/zabriskie.jpg";
import delicateArch from "~/assets/photos/delicate-arch.jpg";
import grandPrismatic from "~/assets/photos/grand-prismatic.jpg";
import tetons from "~/assets/photos/tetons.jpg";
import eclipse from "~/assets/photos/eclipse.jpg";
import jellyfish from "~/assets/photos/jellyfish.jpg";
import milkyWay from "~/assets/photos/milky-way.jpg";
import gorge from "~/assets/photos/gorge.jpg";
import snowMountain from "~/assets/photos/snow-mountain.jpg";
import karst from "~/assets/photos/karst.jpg";
import osaka from "~/assets/photos/osaka.jpg";
import nara from "~/assets/photos/nara.jpg";
import adirondacks from "~/assets/photos/adirondacks.jpg";
import kyoto from "~/assets/photos/kyoto.jpg";
import aoraki from "~/assets/photos/aoraki.jpg";
import tasman from "~/assets/photos/tasman.jpg";
import dock from "~/assets/photos/dock.jpg";
import milford from "~/assets/photos/milford.jpg";
import sydney from "~/assets/photos/sydney.jpg";
import sinkhole from "~/assets/photos/sinkhole.jpg";
import fieldCamp from "~/assets/photos/field-camp.jpg";
import deadvlei from "~/assets/photos/deadvlei.jpg";
import dune from "~/assets/photos/dune.jpg";
import leopard from "~/assets/photos/leopard.jpg";
import skeletonCoast from "~/assets/photos/skeleton-coast.jpg";
import capePoint from "~/assets/photos/cape-point.jpg";
import chamonix from "~/assets/photos/chamonix.jpg";
import alps from "~/assets/photos/alps.jpg";
import calanque from "~/assets/photos/calanque.jpg";
import rome from "~/assets/photos/rome.jpg";
import crete from "~/assets/photos/crete.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ------------------------------------------------------------------ */
/* Data — places derived from EXIF timestamps matched against location   */
/* history; titles are editable prose.                                   */
/* ------------------------------------------------------------------ */

type Frame = {
  src: string;
  alt: string;
  title: string;
  place: string;
  span: string;
  aspect: string;
  offset?: string;
  fr?: string;
};

type Roll = {
  n: string;
  region: string;
  places: string;
  frames: Frame[];
};

const rolls: Roll[] = [
  {
    n: "01",
    region: "Pacific",
    places: "Hawaiʻi",
    frames: [
      {
        src: aboveClouds,
        alt: "Sunrise seen from above a sea of clouds",
        title: "Above the clouds",
        place: "Hawaiʻi Island",
        span: "sm:col-span-7",
        aspect: "aspect-[3/2]",
      },
      {
        src: naPali,
        alt: "Fluted green cliffs of the Nā Pali coast meeting the sea",
        title: "Nā Pali",
        place: "Nā Pali Coast, Kauaʻi",
        span: "sm:col-span-5",
        aspect: "aspect-[4/5]",
        offset: "sm:mt-24",
      },
    ],
  },
  {
    n: "02",
    region: "North America",
    places: "California · Utah · Wyoming · New York",
    frames: [
      {
        src: halfDome,
        alt: "Half Dome and the Yosemite high country in evening light",
        title: "Half Dome, evening",
        place: "Yosemite, California",
        span: "sm:col-span-12",
        aspect: "aspect-[21/9]",
      },
      {
        src: sequoia,
        alt: "Looking up the trunk of a giant sequoia into the sun",
        title: "Sequoia",
        place: "Sequoia National Park, California",
        span: "sm:col-span-4",
        aspect: "aspect-[3/4]",
      },
      {
        src: zabriskie,
        alt: "Golden badlands folding toward distant mountains",
        title: "Badlands",
        place: "Death Valley, California",
        span: "sm:col-span-8",
        aspect: "aspect-[3/2]",
        offset: "sm:mt-16",
      },
      {
        src: delicateArch,
        alt: "Delicate Arch standing over the slickrock bowl",
        title: "Delicate Arch",
        place: "Arches National Park, Utah",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
      },
      {
        src: grandPrismatic,
        alt: "Orange thermal terraces at the edge of Grand Prismatic Spring",
        title: "Grand Prismatic",
        place: "Yellowstone, Wyoming",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
        offset: "sm:mt-20",
      },
      {
        src: tetons,
        alt: "Indian paintbrush wildflowers below the Teton peaks",
        title: "Paintbrush",
        place: "Grand Teton, Wyoming",
        span: "sm:col-span-7",
        aspect: "aspect-[3/2]",
      },
      {
        src: adirondacks,
        alt: "A slow brown stream running through dense green forest",
        title: "Cold water",
        place: "Adirondacks, New York",
        span: "sm:col-span-5",
        aspect: "aspect-[4/5]",
        offset: "sm:mt-20",
      },
    ],
  },
  {
    n: "03",
    region: "Asia",
    places: "Yúnnán · Guǎngxī · Kansai",
    frames: [
      {
        src: gorge,
        alt: "A hiker on a stone ledge high above Tiger Leaping Gorge",
        title: "The gorge",
        place: "Tiger Leaping Gorge, Yúnnán",
        span: "sm:col-span-7",
        aspect: "aspect-[16/9]",
      },
      {
        src: snowMountain,
        alt: "Sunlit peaks rising behind a temple roof ridge",
        title: "Snow mountain",
        place: "Jade Dragon Snow Mountain, Yúnnán",
        span: "sm:col-span-5",
        aspect: "aspect-[4/5]",
        offset: "sm:mt-24",
      },
      {
        src: karst,
        alt: "Karst towers receding into haze above a river town",
        title: "Karst country",
        place: "Yangshuo, Guǎngxī",
        span: "sm:col-span-12",
        aspect: "aspect-[21/9]",
      },
      {
        src: osaka,
        alt: "Neon signs reflected in the Dōtonbori canal at dusk",
        title: "Neon river",
        place: "Dōtonbori, Ōsaka",
        span: "sm:col-span-6",
        aspect: "aspect-[16/9]",
      },
      {
        src: kyoto,
        alt: "A vermilion torii gate on a mossy stone path at Fushimi Inari",
        title: "Ten thousand gates",
        place: "Fushimi Inari, Kyōto",
        span: "sm:col-span-6",
        aspect: "aspect-[16/9]",
        offset: "sm:mt-20",
      },
      {
        src: nara,
        alt: "A sika deer standing on grass in front of a temple hall",
        title: "The deer",
        place: "Nara",
        span: "sm:col-span-8 sm:col-start-3",
        aspect: "aspect-[16/9]",
      },
    ],
  },
  {
    n: "04",
    region: "Oceania",
    places: "Aotearoa · New South Wales",
    frames: [
      {
        src: aoraki,
        alt: "Alpenglow on Aoraki / Mount Cook from an empty road at dawn",
        title: "Aoraki, first light",
        place: "Aoraki / Mount Cook, Aotearoa",
        span: "sm:col-span-8",
        aspect: "aspect-[3/2]",
      },
      {
        src: tasman,
        alt: "The crumbling blue terminus of the Tasman Glacier in its lake",
        title: "Terminal ice",
        place: "Tasman Glacier, Aotearoa",
        span: "sm:col-span-4",
        aspect: "aspect-square",
        offset: "sm:mt-28",
      },
      {
        src: dock,
        alt: "A figure sitting at the end of a dock under southern stars",
        title: "End of the dock",
        place: "Lake Rotoiti, Nelson Lakes",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
      },
      {
        src: milford,
        alt: "Mitre Peak dissolving into rain and mist over Milford Sound",
        title: "Piopiotahi",
        place: "Milford Sound, Aotearoa",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
        offset: "sm:mt-16",
      },
      {
        src: sydney,
        alt: "The Opera House and Sydney skyline glowing across the harbour",
        title: "Harbour lights",
        place: "Sydney, Australia",
        span: "sm:col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },
  {
    n: "05",
    region: "Africa & Arabia",
    places: "Oman · Kenya · Namibia · South Africa",
    frames: [
      {
        src: deadvlei,
        alt: "A dead camel thorn tree on the white clay pan of Deadvlei",
        title: "Deadvlei",
        place: "Namib Desert, Namibia",
        span: "sm:col-span-7",
        aspect: "aspect-[3/2]",
      },
      {
        src: dune,
        alt: "A red dune rising over the Sossusvlei pan",
        title: "The dune",
        place: "Sossusvlei, Namibia",
        span: "sm:col-span-5",
        aspect: "aspect-[4/5]",
        offset: "sm:mt-24",
      },
      {
        src: leopard,
        alt: "A leopard moving through tall green grass",
        title: "Spotted",
        place: "Kenya",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
      },
      {
        src: skeletonCoast,
        alt: "A rusting shipwreck in the surf of the Skeleton Coast",
        title: "End of the line",
        place: "Skeleton Coast, Namibia",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
        offset: "sm:mt-20",
      },
      {
        src: sinkhole,
        alt: "Swimmers in the turquoise water of the Bimmah sinkhole",
        title: "The sinkhole",
        place: "Bimmah, Oman",
        span: "sm:col-span-5",
        aspect: "aspect-[4/5]",
      },
      {
        src: fieldCamp,
        alt: "A field geology class at a whiteboard beneath folded rock strata",
        title: "Reading the folds",
        place: "field camp, Oman",
        span: "sm:col-span-7",
        aspect: "aspect-[3/2]",
        offset: "sm:mt-16",
      },
      {
        src: capePoint,
        alt: "The old lighthouse above cliffs and swell at Cape Point",
        title: "Two oceans",
        place: "Cape Point, South Africa",
        span: "sm:col-span-12",
        aspect: "aspect-[21/9]",
      },
    ],
  },
  {
    n: "06",
    region: "Europe",
    places: "Switzerland · France · Italy · Greece",
    frames: [
      {
        src: chamonix,
        alt: "A granite spire hung with snow above Chamonix",
        title: "Granite and ice",
        place: "Chamonix, France",
        span: "sm:col-span-5",
        aspect: "aspect-[4/5]",
      },
      {
        src: alps,
        alt: "Hikers descending a green alpine trail below snowy peaks",
        title: "The walk down",
        place: "Graubünden, Switzerland",
        span: "sm:col-span-7",
        aspect: "aspect-[3/2]",
        offset: "sm:mt-24",
      },
      {
        src: calanque,
        alt: "White limestone cliffs around a turquoise calanque",
        title: "Calanque",
        place: "Calanques, France",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
      },
      {
        src: rome,
        alt: "A wet Roman street reflecting cafe umbrellas after rain",
        title: "After the rain",
        place: "Rome, Italy",
        span: "sm:col-span-6",
        aspect: "aspect-[4/3]",
        offset: "sm:mt-16",
      },
      {
        src: crete,
        alt: "The old Venetian harbour of Chaniá in soft light",
        title: "Old harbour",
        place: "Chania, Crete",
        span: "sm:col-span-8 sm:col-start-3",
        aspect: "aspect-[3/2]",
      },
    ],
  },
];

const phenomena: Frame[] = [
  {
    src: eclipse,
    alt: "A crescent sun seen through the dark lens of a pair of eclipse glasses",
    title: "Through the glasses",
    place: "Burlington, Vermont",
    span: "sm:col-span-4",
    aspect: "aspect-[16/9]",
  },
  {
    src: jellyfish,
    alt: "Moon jellies drifting in deep blue water",
    title: "Moon jellies",
    place: "Monterey Bay, California",
    span: "sm:col-span-4",
    aspect: "aspect-[16/9]",
  },
  {
    src: milkyWay,
    alt: "The Milky Way over a dark ridgeline",
    title: "The southern sky",
    place: "Mackenzie Basin, Aotearoa",
    span: "sm:col-span-4",
    aspect: "aspect-[16/9]",
  },
];

/* Number every frame once, in display order: rolls 01-02, intermission,
   rolls 03-06. The hero is FR 00. */
[...rolls.slice(0, 2), { frames: phenomena }, ...rolls.slice(2)]
  .flatMap((r) => r.frames)
  .forEach((f, i) => {
    f.fr = String(i + 1).padStart(2, "0");
  });

/* ------------------------------------------------------------------ */
/* Components                                                          */
/* ------------------------------------------------------------------ */

function FrameFigure({ frame, dark = false }: { frame: Frame; dark?: boolean }) {
  return (
    <figure className={`reveal col-span-12 ${frame.span} ${frame.offset ?? ""}`}>
      <div
        className={`mb-2 flex items-baseline justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${dark ? "text-paper/60" : "text-muted"}`}
      >
        <span>
          <span className="text-amber">FR {frame.fr}</span>
          <span className="mx-2">—</span>
          {frame.title}
        </span>
        <span className="text-right font-normal normal-case tracking-normal italic">
          {frame.place}
        </span>
      </div>
      <div className={`overflow-hidden ${frame.aspect} ${dark ? "bg-white/5" : "bg-ink/5"}`}>
        <img
          src={frame.src}
          alt={frame.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </figure>
  );
}

function RollHeader({ roll }: { roll: Roll }) {
  return (
    <header className="mb-10 border-t-2 border-ink pt-4 sm:mb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h2 className="text-[13vw] leading-[0.9] font-black tracking-tight uppercase sm:text-[7vw]">
          <span className="text-amber">{roll.n}</span> {roll.region}
        </h2>
        <p className="text-sm text-muted sm:text-base">{roll.places}</p>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <div className="overflow-x-clip">
      {/* -------------------------------------------------- hero */}
      <section>
        <h1 className="pt-[1.5vw] text-center text-[15.3vw] leading-[0.95] font-black tracking-[-0.02em] uppercase whitespace-nowrap select-none">
          Josh Chang
        </h1>
        <div className="mt-2 mb-6 grid grid-cols-2 gap-y-4 px-4 text-sm leading-snug sm:grid-cols-4 sm:px-6">
          <p>
            Developer &amp;
            <br />
            earth scientist
          </p>
          <p className="text-muted">
            Yale University
            <br />
            New Haven, CT
          </p>
          <p className="text-muted">
            36 photographs
            <br />
            2022&ndash;2026
          </p>
          <p className="text-right sm:text-left">
            <a
              href="mailto:joshchang04@gmail.com"
              className="underline underline-offset-4 transition-colors hover:text-amber"
            >
              joshchang04@gmail.com
            </a>
          </p>
        </div>
      </section>

      <figure className="reveal relative">
        <img
          src={kilauea}
          alt="Lava fountaining from the Kīlauea caldera at night"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-[82svh] w-full object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-4 bg-gradient-to-t from-black/60 to-transparent px-4 pt-16 pb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:px-6">
          <span>
            <span className="text-amber">FR 00</span>
            <span className="mx-2">—</span>
            Kīlauea, erupting
          </span>
          <span className="font-normal normal-case tracking-normal italic">
            Kīlauea, Hawaiʻi
          </span>
        </figcaption>
      </figure>

      {/* -------------------------------------------------- rolls */}
      <main className="mx-auto max-w-[1600px] px-4 sm:px-6">
        {rolls.slice(0, 2).map((roll) => (
          <section key={roll.n} className="pt-20 sm:pt-28">
            <RollHeader roll={roll} />
            <div className="grid grid-cols-12 gap-x-4 gap-y-12 sm:gap-x-6 sm:gap-y-16">
              {roll.frames.map((f) => (
                <FrameFigure key={f.src} frame={f} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* -------------------------------------------------- intermission */}
      <section className="mt-20 bg-ink py-20 text-paper sm:mt-28 sm:py-28">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <header className="mb-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t-2 border-paper/30 pt-4 sm:mb-14">
            <h2 className="text-[13vw] leading-[0.9] font-black tracking-tight uppercase sm:text-[7vw]">
              <span className="text-amber">✦</span> Intermission
            </h2>
            <p className="text-sm text-paper/60 sm:text-base">
              phenomena, various magnitudes
            </p>
          </header>
          <div className="grid grid-cols-12 gap-x-4 gap-y-12 sm:gap-x-6">
            {phenomena.map((f) => (
              <FrameFigure key={f.src} frame={f} dark />
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1600px] px-4 sm:px-6">
        {rolls.slice(2).map((roll) => (
          <section key={roll.n} className="pt-20 sm:pt-28">
            <RollHeader roll={roll} />
            <div className="grid grid-cols-12 gap-x-4 gap-y-12 sm:gap-x-6 sm:gap-y-16">
              {roll.frames.map((f) => (
                <FrameFigure key={f.src} frame={f} />
              ))}
            </div>
          </section>
        ))}

        {/* -------------------------------------------------- statement */}
        <section className="mx-auto max-w-4xl py-28 text-center sm:py-40">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber">
            — end of roll —
          </p>
          <p className="mt-8 text-2xl leading-snug font-light text-balance sm:text-4xl">
            I&rsquo;m a developer, earth scientist, and adventurer. I code, hike,
            look at rocks, predict the weather, and keep a camera close.
          </p>
        </section>
      </main>

      {/* -------------------------------------------------- footer */}
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
            <a
              href="mailto:joshchang04@gmail.com"
              className="underline underline-offset-4 transition-colors hover:text-amber"
            >
              Email ↗
            </a>
          </div>
          <p className="text-muted">
            All frames mine · © {new Date().getFullYear()} Josh Chang
          </p>
        </div>
      </footer>
    </div>
  );
}
