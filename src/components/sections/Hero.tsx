import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { ArrowCircle } from "@/components/site/ArrowCircle";
import { ProfileFrame } from "@/components/site/ProfileFrame";

const marquee = [
  "Graphic Design",
  "Brand Identity",
  "Social Media Design",
  "Website Design",
  "Website Development",
  "Video Editing",
];

const d = (ms: number) => ({ "--intro-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 md:pt-40">
      {/* Background */}
      <div className="grid-lines absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div
        className="glow-orb absolute -left-40 top-10 -z-10 h-[38rem] w-[38rem] animate-float-slow"
        aria-hidden
      />
      <div
        className="glow-orb absolute -right-32 bottom-0 -z-10 h-[30rem] w-[30rem] animate-float-slow opacity-60 [animation-delay:-6s]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="intro-fade flex flex-wrap items-center gap-3" style={d(0)}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-heading text-xs text-foreground">
              <span
                className="relative h-2 w-2 rounded-full bg-success animate-pulse-dot"
                aria-hidden
              />
              Available for new projects
            </span>
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-muted-foreground">
              creative.by.umer06
            </span>
          </div>

          <h1 className="display-xl mt-8 text-[clamp(3.6rem,10.5vw,9.5rem)]">
            <span className="intro-line">
              <span style={d(120)}>Umer</span>
            </span>
            <span className="intro-line">
              <span style={d(240)}>
                Shahzad<span className="text-primary">.</span>
              </span>
            </span>
          </h1>

          <p
            className="intro-fade mt-6 font-heading text-sm uppercase tracking-[0.18em] text-primary md:text-base"
            style={d(450)}
          >
            Graphic Designer <span className="text-muted-foreground">|</span> Brand Identity
            Designer <span className="text-muted-foreground">|</span> Website Developer
          </p>

          <p
            className="intro-fade mt-8 max-w-2xl font-heading text-2xl font-medium leading-snug md:text-4xl"
            style={d(560)}
          >
            <span className="text-gradient">
              Turning Creative Ideas Into Powerful Digital Experiences.
            </span>
          </p>

          <p
            className="intro-fade mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={d(680)}
          >
            I'm Umer Shahzad, a creative professional passionate about graphic design, branding and
            digital experiences. I work with local and international clients to transform ideas into
            visually compelling brands and digital solutions.
          </p>

          <div className="intro-fade mt-10 flex flex-wrap gap-3" style={d(800)}>
            <Button asChild variant="hero" size="pill">
              <Link to="/" hash="work">
                Explore My Work
                <ArrowCircle />
              </Link>
            </Button>
            <Button asChild variant="glass" size="pillPlain">
              <Link to="/" hash="contact">
                Let's Collaborate
              </Link>
            </Button>
          </div>
        </div>

        <div className="intro-fade relative lg:col-span-5" style={d(400)}>
          <ProfileFrame className="aspect-[4/5] w-full max-w-md lg:ml-auto" priority />
          {/* Rotating badge */}
          <div
            className="absolute -left-4 top-10 hidden h-32 w-32 sm:block lg:-left-10"
            aria-hidden
          >
            <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <circle cx="60" cy="60" r="58" className="fill-primary" />
              <text className="fill-primary-foreground font-heading text-[10.5px] font-semibold uppercase tracking-[0.2em]">
                <textPath href="#badge-circle">creative.by.umer06 • design • build •</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 grid place-items-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-primary-foreground">
                <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Services marquee */}
      <div className="mt-20 border-y border-border bg-surface/60 py-5 md:mt-28">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-extrabold uppercase md:text-2xl"
              >
                {m}
                <span className="text-primary" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden>
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-extrabold uppercase md:text-2xl"
              >
                {m}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
