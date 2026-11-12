import { ArrowUpRight, GraduationCap, Globe2, Handshake, Sparkles } from "lucide-react";
import { ProfileFrame } from "@/components/site/ProfileFrame";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TargetLink } from "@/components/site/TargetLink";
import type { LinkTarget } from "@/data/targets";

const highlights: {
  icon: typeof GraduationCap;
  title: string;
  text: string;
  target: LinkTarget;
}[] = [
  {
    icon: GraduationCap,
    title: "Computer Science background",
    text: "BSCS at NFC Institute of Engineering & Technology, Multan — graduating 2026.",
    target: { hash: "education", label: "Education" },
  },
  {
    icon: Handshake,
    title: "Client-focused approach",
    text: "Every project starts with understanding your business, goals and audience.",
    target: { hash: "process", label: "My process" },
  },
  {
    icon: Sparkles,
    title: "Creative passion",
    text: "Design and development are where I bring ideas to life — with care for every detail.",
    target: { hash: "work", label: "See my work" },
  },
  {
    icon: Globe2,
    title: "Different industries",
    text: "Restaurants, retail, hospitality and beauty — for local and international clients.",
    target: { hash: "work", label: "See projects" },
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="About me" title="A Little About Me" />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ProfileFrame className="aspect-[4/5] w-full" />
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <p className="font-heading text-2xl font-medium leading-snug md:text-3xl">
                I'm a passionate creative professional with a background in{" "}
                <span className="text-primary">Computer Science</span> and practical experience
                working on projects for local and international clients.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                My focus is on creating meaningful visual identities, engaging social media content
                and professional digital experiences that help businesses stand out. I combine
                graphic design, branding, social media and web development — so your brand looks
                and works consistently everywhere.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={150 + i * 80}>
                  <TargetLink
                    target={h.target}
                    ariaLabel={`${h.title} — ${h.target.label}`}
                    className="card-surface group flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex items-center justify-between">
                      <h.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-primary" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-semibold">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </TargetLink>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
