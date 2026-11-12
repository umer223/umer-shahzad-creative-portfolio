/** Where a clickable service / skill / highlight box takes the visitor. */
export type LinkTarget =
  | { slug: string; label: string }
  | { hash: "work" | "about" | "education" | "process" | "contact"; label: string };

export const toWork: LinkTarget = { hash: "work", label: "See my work" };
export const toContact = (label = "Let's talk"): LinkTarget => ({ hash: "contact", label });
export const toProject = (slug: string, name: string): LinkTarget => ({
  slug,
  label: `View ${name}`,
});
