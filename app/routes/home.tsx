import type { Route } from "./+types/home";
import mountain from "~/assets/mountain.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Josh D. Chang" },
    {
      name: "description",
      content:
        "I'm a developer, earth scientist, and adventurer. Originally from Irvington, New York, I'm now a senior at Yale. I love to code, hike, bike, look at rocks, predict the weather, take photos, and travel. ",
    },
  ];
}

import { allPosts } from "content-collections";

export default function Home() {
  return (
    <div className="grid h-full grid-rows-[1fr_1fr_min(75vw,100%)_1fr_1fr] lg:grid-rows-1 lg:grid-cols-[1fr_1fr_min(1100px,calc(100vw-200px))_1fr_1fr]">
      <div className="h-full bg-[var(--black)]" />
      <div className="h-full bg-[var(--teal)]" />
      <div className="h-full bg-[var(--cream)]">
        <main className="max-w-[1170px] relative @container h-full mx-auto bg-[var(--cream)]">
          <img
            src={mountain}
            alt="Josh Chang"
            className="object-cover absolute top-[3cqw] right-[3cqw] w-[54.39cqw] h-[min(40cqw,50cqh)]"
          />
          <div className="flex flex-col gap-[2cqw] absolute top-[2cqw] left-[3cqw]">
            <h1 className="font-black uppercase flex flex-col">
              <span className="text-[13.91cqw] leading-[12cqw] text-[var(--black)]">
                Josh <span className="text-[var(--cream)] ml-[9cqw]">D.</span>
              </span>
              <span className="text-[13.91cqw] leading-[12cqw] text-[var(--orange)] pl-[8.2cqw]">
                Cha<span className="text-[var(--black)]">ng</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-end justify-between gap-[2cqw] text-[var(--black)] font-light text-[min(5cqw,10cqh)] leading-[min(5cqw,10cqh)] absolute right-[3cqw] left-[3cqw] bottom-[3cqw] uppercase">
            <a
              href="/developer"
              className="hover:text-[var(--teal)] transition-colors"
            >
              Developer
            </a>
            <a
              href="/adventurer"
              className="hover:text-[var(--teal)] transition-colors"
            >
              Adventurer
            </a>
            <a
              href="/earth-scientist"
              className="hover:text-[var(--teal)] transition-colors"
            >
              Earth Scientist
            </a>
          </div>
          <a
            href="mailto:joshchang04@gmail.com"
            className="bg-[var(--black)] hover:bg-[var(--orange)] transition-colors duration-300 w-[30cqw] h-[6cqw] absolute bottom-[3cqw] left-[3cqw] flex items-center justify-center rounded-full"
          >
            <span className="text-[4cqw] leading-[4cqw] text-[var(--cream)] whitespace-nowrap uppercase font-black">
              Contact
            </span>
          </a>
        </main>
      </div>
      <div className="h-full bg-[var(--orange)]" />
      <div className="h-full bg-[var(--black)]" />
    </div>
  );
}
