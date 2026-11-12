import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { hasRealWork, projects, type Project } from "@/data/projects";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group relative block overflow-hidden rounded-3xl border border-border bg-surface"
        aria-label={`View case study: ${project.name}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/11]">
          <img
            src={project.cover}
            alt={
              hasRealWork(project)
                ? `${project.name} — ${project.category} brand identity`
                : `${project.name} — ${project.category} presentation mockup`
            }
            width={1536}
            height={960}
            loading="lazy"
            decoding="async"
            className={`h-full w-full scale-[1.02] object-cover transition-transform ${project.coverPortrait ? "object-top" : ""} duration-[1.4s] ease-out group-hover:scale-110`}
          />
          <div className="bg-fade-b absolute inset-0" aria-hidden />
          {project.coverPortrait && (
            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10"
              aria-hidden
            />
          )}
          <div
            className="absolute inset-0 bg-background/0 transition-colors duration-700 group-hover:bg-background/30"
            aria-hidden
          />

          <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3 md:inset-x-7 md:top-7">
            <span className="flex flex-wrap gap-2">
              <span className="rounded-full glass px-3 py-1.5 font-heading text-xs uppercase tracking-[0.15em]">
                {project.category}
              </span>
              {hasRealWork(project) && (
                <span className="rounded-full bg-primary px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                  Real work
                </span>
              )}
            </span>
            <span className="font-heading text-sm text-foreground/80">{project.index}</span>
          </div>

          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span key={s} className="font-heading text-xs text-primary">
                    {s}
                  </span>
                ))}
              </div>
              <h3 className="display-xl text-[clamp(2rem,4vw,3.25rem)]">{project.name}</h3>
            </div>
            <span className="flex shrink-0 translate-y-2 items-center gap-2 rounded-full bg-primary py-1.5 pl-4 pr-1.5 font-heading text-xs font-semibold text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
              <span className="hidden sm:inline">View Case Study</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground text-primary transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured work" title="Selected Projects" />
          <Reveal>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Branding, social media and websites for businesses across food, retail, hospitality
              and beauty. Open a project to see the full case study.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-16" : undefined}>
              <ProjectCard project={p} delay={(i % 2) * 120} />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Projects tagged “Real work” show actual client designs; other visuals are presentation
          mockups for illustration.
        </p>
      </div>
    </section>
  );
}
