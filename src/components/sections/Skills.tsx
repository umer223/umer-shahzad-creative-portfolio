import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const skills = [
  { name: "Graphic Design", note: "Visual communication" },
  { name: "Brand Identity Design", note: "Logos & identity systems" },
  { name: "Social Media Design", note: "Posts & campaigns" },
  { name: "Video Editing", note: "Promo & social video" },
  { name: "Website Design", note: "Layouts & interfaces" },
  { name: "Website Development", note: "Responsive builds" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Skills & expertise"
          title="What I Bring"
          intro="A blend of design craft and technical knowledge — from the first sketch to a working website."
        />

        <ul className="mt-16 border-t border-border">
          {skills.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 60}>
              <div className="group relative flex items-center gap-6 overflow-hidden border-b border-border py-7 md:gap-10 md:py-9">
                <span
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="w-10 font-heading text-sm text-primary">0{i + 1}</span>
                <span className="display-xl flex-1 text-[clamp(1.6rem,4.5vw,3.75rem)] transition-transform duration-500 group-hover:translate-x-3">
                  {s.name}
                </span>
                <span className="hidden font-heading text-sm text-muted-foreground md:block">
                  {s.note}
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
