import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const items = [
  {
    tag: "Degree · Graduation 2026",
    title: "Bachelor of Science in Computer Science (BSCS)",
    lines: ["NFC Institute of Engineering & Technology", "Multan, Pakistan"],
  },
  {
    tag: "Professional Courses",
    title: "Professional Learning",
    lines: ["Web Development", "Graphic Design"],
  },
];

export function Education() {
  return (
    <section id="education" className="relative border-t border-border bg-surface/40 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Education"
            title="Learning & Growth"
            intro="A technical foundation in Computer Science, sharpened by focused courses in design and development."
          />
        </div>

        <ol className="relative lg:col-span-7">
          <span className="absolute bottom-2 left-[11px] top-2 w-px bg-border" aria-hidden />
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 120} className="relative pb-12 pl-12 last:pb-0">
              <span
                className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border border-primary bg-background"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
              </span>
              <span className="eyebrow">{item.tag}</span>
              <h3 className="mt-3 font-heading text-2xl font-semibold md:text-3xl">{item.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.lines.map((l) => (
                  <li
                    key={l}
                    className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
