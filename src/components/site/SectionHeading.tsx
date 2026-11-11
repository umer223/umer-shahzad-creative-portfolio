import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  size?: "lg" | "sm";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  size = "lg",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <span className="eyebrow inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "display-xl max-w-4xl",
            size === "lg" ? "text-[clamp(2rem,5vw,4.25rem)]" : "text-[clamp(2rem,3.6vw,3.25rem)]",
          )}
        >
          {title}
          <span className="text-primary">.</span>
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
