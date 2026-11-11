import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowCircle } from "@/components/site/ArrowCircle";
import { Reveal } from "@/components/site/Reveal";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const project = loaderData ? getProject(loaderData.slug) : undefined;
    if (!project) {
      return {
        meta: [
          { title: "Project not found — Umer Shahzad" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${project.name} — ${project.category} Case Study | Umer Shahzad`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="display-xl text-5xl">
        Project not found<span className="text-primary">.</span>
      </h1>
      <Button asChild variant="hero" size="pill" className="mt-8">
        <Link to="/" hash="work">
          Back to work
          <ArrowCircle />
        </Link>
      </Button>
    </div>
  ),
});

function CaseStudy() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug)!;
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length]!;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const current = lightbox === null ? undefined : project.gallery[lightbox];

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % project.gallery.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + project.gallery.length) % project.gallery.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, project.gallery.length]);

  return (
    <article className="relative">
      <div className="grid-lines absolute inset-x-0 top-0 -z-10 h-[90vh] opacity-50" aria-hidden />
      <div className="glow-orb absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem]" aria-hidden />

      <header className="mx-auto max-w-7xl px-5 pt-32 md:px-8 md:pt-40">
        <Link
          to="/"
          hash="work"
          className="intro-fade inline-flex items-center gap-2 font-heading text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="eyebrow">Project {project.index}</span>
          <span className="rounded-full glass px-3 py-1 font-heading text-xs">
            {project.category}
          </span>
          {project.clientType && (
            <span className="rounded-full border border-primary/50 px-3 py-1 font-heading text-xs text-primary">
              {project.clientType}
            </span>
          )}
        </div>

        <h1 className="display-xl mt-6 text-[clamp(2.6rem,9vw,8rem)]">
          <span className="intro-line">
            <span>
              {project.name}
              <span className="text-primary">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-12">
          <p className="font-heading text-xl leading-snug md:col-span-7 md:text-2xl">
            {project.summary}
          </p>
          <dl className="grid grid-cols-2 gap-6 md:col-span-5">
            <div>
              <dt className="eyebrow">Services</dt>
              <dd className="mt-3 space-y-1 text-sm text-muted-foreground">
                {project.services.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Industry</dt>
              <dd className="mt-3 text-sm text-muted-foreground">{project.category}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
        <button
          type="button"
          onClick={() => setLightbox(0)}
          className="group block w-full overflow-hidden rounded-[2rem] border border-border"
          aria-label={`Open ${project.gallery[0]?.caption ?? project.name}`}
        >
          <img
            src={project.cover}
            alt={`${project.name} presentation mockup`}
            width={1536}
            height={960}
            className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
          />
        </button>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="display-xl text-[clamp(1.75rem,2.4vw,2.1rem)]">
                Showcase<span className="text-primary">.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="mt-8 space-y-3">
                {project.showcase.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-center gap-4 border-b border-border pb-3 font-heading text-sm"
                  >
                    <span className="text-primary">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {project.gallery.slice(1).map((g, i) => (
              <Reveal
                key={g.caption}
                delay={i * 120}
                className={i === 0 ? "sm:col-span-2" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i + 1)}
                  className="group relative block w-full overflow-hidden rounded-3xl border border-border text-left"
                  aria-label={`Open ${g.caption}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={1536}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full glass px-3 py-1.5 font-heading text-xs">
                    {g.caption}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Images on this page are presentation mockups for illustration, not final client
          deliverables.
        </p>
      </section>

      <section className="border-t border-border">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-7xl flex-col gap-4 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8"
        >
          <div>
            <span className="eyebrow">Next project</span>
            <p className="display-xl mt-4 text-[clamp(2.5rem,8vw,7rem)] transition-colors duration-500 group-hover:text-primary">
              {next.name}
            </p>
          </div>
          <span className="grid h-16 w-16 place-items-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-6 w-6" />
          </span>
        </Link>
      </section>

      {lightbox !== null && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl animate-in fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full glass"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain animate-in zoom-in-95"
            />
            <figcaption className="mt-4 flex items-center justify-between font-heading text-sm text-muted-foreground">
              <span>{current.caption}</span>
              <span>
                {lightbox + 1} / {project.gallery.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </article>
  );
}
