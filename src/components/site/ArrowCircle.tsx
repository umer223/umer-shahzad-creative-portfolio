import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Circular arrow badge used inside pill buttons. */
export function ArrowCircle({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "ml-2 grid h-9 w-9 place-items-center overflow-hidden rounded-full transition-transform duration-500 group-hover:rotate-45",
        inverted ? "bg-primary text-primary-foreground" : "bg-primary-foreground text-primary",
      )}
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}
