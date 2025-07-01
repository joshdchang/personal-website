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
            <p>Developer</p>
            <p>Earth Scientist</p>
            <p>Adventurer</p>
          </div>
          <div className="absolute bottom-[12cqw] left-[3cqw] flex flex-col items-center justify-center gap-[3cqw] bg-[var(--orange)] p-[2cqw] rounded-full">
            <a
              href="https://www.linkedin.com/in/joshua-chang-7b2854224/"
              target="_blank"
              className="flex items-center gap-[2cqw] hover:scale-110 transition-transform duration-300"
            >
              <svg
                height="6cqw"
                width="6cqw"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                    // fill="var(--teal)"
                  />
                  <path
                    d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                    fill="var(--cream)"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://github.com/joshdchang"
              target="_blank"
              className="flex items-center gap-[2cqw] relative bottom-[1cqw] hover:scale-110 transition-transform duration-300"
            >
              <svg
                width="5cqw"
                height="5cqw"
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="var(--cream)"
                />
              </svg>
            </a>
          </div>
          <a
            href="mailto:joshchang04@gmail.com"
            target="_blank"
            className="bg-[var(--black)] hover:bg-[var(--teal)] transition-colors duration-300 w-[39.6cqw] h-[6cqw] absolute bottom-[3cqw] left-[3cqw] flex items-center justify-center rounded-full"
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
