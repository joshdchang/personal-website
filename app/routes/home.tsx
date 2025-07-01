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

import { Link } from "react-router";

export default function Home() {
  return (
    <div className="grid h-full grid-rows-[1fr_1fr_min(75vw,100%)_1fr_1fr] lg:grid-rows-1 lg:grid-cols-[1fr_3cqw_min(1100px,calc(100vw-12cqw))_3cqw_1fr]">
      <div className="h-full" />
      <div className="h-full bg-[var(--orange)] lg:bg-[var(--teal)]" />
      <div className="h-full bg-[var(--cream)] grid grid-rows-[2.4cqw_1fr_2.4cqw] @container">
        <div className="h-full bg-[var(--orange)] w-[57.4cqw] justify-self-end" />
        <main className="max-w-[1170px] relative @container h-full">
          <img
            src={mountain}
            alt="Josh Chang"
            className="object-cover absolute top-[3cqw] right-[3cqw] w-[54.39cqw] h-[min(40cqw,50cqh)]"
          />
          <div className="flex flex-col gap-[2cqw] absolute top-[2cqw] left-[3cqw]">
            <h1 className="font-black uppercase flex flex-col">
              <span className="text-[13.91cqw] leading-[12cqw]">
                <span className="text-[var(--teal)]">Josh</span>{" "}
                <span className="text-[var(--cream)] ml-[9cqw]">
                  D
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="bg-[var(--cream)] hover:bg-[var(--orange)] transition-all duration-300 cursor-pointer inline-flex h-[2.8cqw] w-[2.8cqw] relative right-[0.1cqw] top-[0.2cqw] items-center justify-center rounded-full"
                  ></a>
                </span>
              </span>
              <span className="text-[13.91cqw] leading-[12cqw] text-[var(--orange)] pl-[8.2cqw]">
                Cha<span className="text-[var(--black)]">ng</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-end justify-between gap-[2cqw] text-[var(--black)] font-light text-[min(5cqw,10cqh)] leading-[min(5cqw,10cqh)] absolute right-[3cqw] left-[3cqw] bottom-[3cqw] uppercase">
            <Link
              to="/about"
              viewTransition
              className="hover:text-[var(--teal)] transition-all hover:scale-105 hover:-translate-x-2.5 duration-300"
            >
              About
            </Link>
            <Link
              to="/photos"
              viewTransition
              className="hover:text-[var(--teal)] transition-all hover:scale-105 hover:-translate-x-2.5 duration-300"
            >
              Photos
            </Link>
            <Link
              to="/thoughts"
              viewTransition
              className="hover:text-[var(--teal)] transition-all hover:scale-105 hover:-translate-x-2.5 duration-300"
            >
              Thoughts
            </Link>
          </div>
          <a
            href="mailto:joshchang04@gmail.com"
            className="bg-[var(--black)] hover:bg-[var(--orange)] transition-colors duration-300 w-[39.6cqw] h-[6cqw] absolute bottom-[3cqw] left-[3cqw] flex items-center justify-center"
          >
            <span className="text-[4cqw] leading-[4cqw] text-[var(--cream)] whitespace-nowrap uppercase font-black">
              Contact
            </span>
          </a>
        </main>
        <div className="h-full bg-[var(--teal)] w-[42.6cqw] justify-self-start" />
      </div>
      <div className="h-full bg-[var(--teal)] lg:bg-[var(--orange)]" />
      <div className="h-full" />
    </div>
  );
}
