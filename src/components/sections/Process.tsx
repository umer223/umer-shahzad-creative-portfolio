import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const steps = [
  { title: "Discover", text: "Understand the client's business, goals and requirements." },
  { title: "Plan", text: "Develop a clear creative direction." },
  { title: "Design", text: "Create compelling visuals and brand experiences." },
  { title: "Develop", text: "Transform approved concepts into functional digital solutions." },
  { title: "Deliver", text: "Present polished final work ready for real-world use." },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-t border-border bg-surface/40 py-28 md:py-36">
      <div className="glow-orb absolute left-1/2 top-1/2 -z-0 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Creative process" title="From Idea to Impact" align="center" />

        <Reveal className="relative mt-20">
          {/* Connecting line (desktop: horizontal, mobile: vertical) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" aria-hidden>
            <div className="h-full origin-left bg-gradient-to-r from-primary via-primary-glow to-primary/0 transition-transform duration-[2s] ease-out [[data-visible=false]_&]:scale-x-0" />
          </div>
          <div className="absolute bottom-0 left-7 top-0 w-px bg-border lg:hidden" aria-hidden />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={200 + i * 140} className="group relative pl-20 lg:pl-0">
                <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full border border-border bg-background font-heading text-sm font-semibold text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow lg:relative">
                  0{i + 1}
                </span>
                <h3 className="display-xl mt-0 text-2xl lg:mt-8 lg:text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
