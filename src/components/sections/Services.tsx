import { Link } from "@tanstack/react-router";
import {
  CalendarRange,
  Code2,
  Clapperboard,
  LayoutTemplate,
  Megaphone,
  PenTool,
  Shapes,
  type LucideIcon,
} from "lucide-react";
import { ArrowCircle } from "@/components/site/ArrowCircle";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const services: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Graphic Design", text: "Creative and professional visual communication for businesses.", icon: PenTool },
  { title: "Logo & Brand Identity", text: "Unique visual identities that create memorable brand experiences.", icon: Shapes },
  { title: "Social Media Post Design", text: "Engaging, consistent and premium social media creatives.", icon: Megaphone },
  { title: "Social Media Management", text: "Content planning, creative management and social media presence.", icon: CalendarRange },
  { title: "Website Design", text: "Modern, responsive and visually appealing website experiences.", icon: LayoutTemplate },
  { title: "Website Development", text: "Functional, responsive and professional website development.", icon: Code2 },
  { title: "Video Editing", text: "Creative video editing for promotional, social media and marketing content.", icon: Clapperboard },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border bg-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Services" title="What I Can Do For Your Brand" />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <article className="card-surface group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
                <div
                  className="glow-orb absolute -right-16 -top-16 h-48 w-48 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background text-primary transition-colors duration-500 group-hover:border-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="display-xl text-outline text-5xl">0{i + 1}</span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <Link
              to="/"
              hash="contact"
              className="group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em]">
                Start a project
              </span>
              <div>
                <p className="display-xl text-4xl">Let's talk about your idea</p>
                <span className="mt-6 inline-flex items-center font-heading text-sm font-semibold">
                  Get in touch
                  <ArrowCircle />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
