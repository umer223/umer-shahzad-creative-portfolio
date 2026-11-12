import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { LinkTarget } from "@/data/targets";

type Props = { target: LinkTarget; className?: string; ariaLabel?: string; children: ReactNode };

/** Renders a box as a link to either a project page or a home-page section. */
export function TargetLink({ target, className, ariaLabel, children }: Props) {
  if ("slug" in target) {
    return (
      <Link
        to="/work/$slug"
        params={{ slug: target.slug }}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link to="/" hash={target.hash} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
