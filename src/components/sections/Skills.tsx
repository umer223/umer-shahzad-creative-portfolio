import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TargetLink } from "@/components/site/TargetLink";
import { toContact, toProject, toWork, type LinkTarget } from "@/data/targets";

const skills: { name: string; note: string; target: LinkTarget }[] = [
  { name: "Graphic Design", note: "Visual communication", target: toWork },
  {
    name: "Brand Identity Design",
    note: "Logos & identity systems",
    target: toProject("gelani-mart", "Gelani Mart"),
  },
  {
    name: "Social Media Design",
    note: "Posts & campaigns",
    target: toProject("rms-beauty-cream", "RMS Beauty"),
  },
  { name: "Video Editing", note: "Promo & social video", target: toContact("Discuss a video") },
  {
    name: "Website Design",
    note: "Layouts & interfaces",
    target: toProject("crazy-bite", "Crazy Bite"),
  },
  {
    name: "Web Development",
    note: "Responsive builds",
    target: toProject("rehman-hotel", "Rehman Hotel"),
  },
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
              <TargetLink
                target={s.target}
                ariaLabel={`${s.name} — ${s.target.label}`}
                className="group relative flex items-center gap-4 overflow-hidden border-b border-border py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:gap-10 md:py-9"
              >
                <span
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="w-8 shrink-0 font-heading text-sm text-primary">0{i + 1}</span>
                <span className="display-xl flex-1 text-[clamp(1.15rem,4vw,3.25rem)] transition-transform duration-500 group-hover:translate-x-3">
                  {s.name}
                </span>
                <span className="hidden font-heading text-sm text-muted-foreground md:block">
                  {s.note}
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </TargetLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
