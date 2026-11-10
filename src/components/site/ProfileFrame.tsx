import { cn } from "@/lib/utils";

type Props = {
  /** Pass a real portrait here once available; until then an elegant placeholder is shown. */
  src?: string;
  className?: string;
  priority?: boolean;
};

export function ProfileFrame({ src, className, priority }: Props) {
  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden rounded-[2rem] border border-border bg-surface p-2 shadow-soft",
        className,
      )}
    >
      <div className="absolute -inset-px -z-10 rounded-[2rem] bg-[conic-gradient(from_180deg,transparent_0deg,var(--primary)_60deg,transparent_140deg)] opacity-40 transition-opacity duration-700 group-hover:opacity-80" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-background">
        {src ? (
          <img
            src={src}
            alt="Portrait of Umer Shahzad"
            className="h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <div className="noise relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
            <div className="glow-orb absolute left-1/2 top-1/3 h-2/3 w-2/3 -translate-x-1/2 animate-float-slow" />
            <div className="grid-lines absolute inset-0 opacity-50" />
            <span className="font-display-xl text-outline relative text-[clamp(6rem,14vw,11rem)] leading-none">
              US
            </span>
            <span className="relative mt-4 font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Portrait coming soon
            </span>
          </div>
        )}
      </div>
      <figcaption className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-full glass px-4 py-2 font-heading text-xs text-foreground">
        <span>Umer Shahzad</span>
        <span className="text-primary">creative.by.umer06</span>
      </figcaption>
    </figure>
  );
}
