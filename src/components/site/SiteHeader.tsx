import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowCircle } from "./ArrowCircle";

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== "/") {
      setActive("work");
      return;
    }
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((s): s is HTMLElement => !!s);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2 pl-5 transition-all duration-500",
          scrolled || open ? "glass shadow-soft" : "border border-transparent",
        )}
      >
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Umer Shahzad — home">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight">
            Umer<span className="text-primary">.</span>
          </span>
          <span className="hidden font-heading text-xs text-muted-foreground transition-colors group-hover:text-primary xl:inline">
            creative.by.umer06
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to="/"
                hash={item.id}
                className={cn(
                  "relative rounded-full px-3 py-2 font-heading text-sm transition-colors lg:px-4",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === item.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-secondary" aria-hidden />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="pill" className="hidden lg:inline-flex">
            <Link to="/" hash="contact">
              Let's Collaborate
              <ArrowCircle />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-4 top-24 rounded-3xl glass p-6 shadow-soft transition-all duration-500 md:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <ul className="flex flex-col">
          {navItems.map((item, i) => (
            <li key={item.id} className="border-b border-border last:border-0">
              <Link
                to="/"
                hash={item.id}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-2xl font-extrabold uppercase"
              >
                {item.label}
                <span className="font-heading text-xs text-primary">0{i + 1}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" size="pill" className="mt-6 w-full justify-between">
          <Link to="/" hash="contact" onClick={() => setOpen(false)}>
            Let's Collaborate
            <ArrowCircle />
          </Link>
        </Button>
      </div>
    </header>
  );
}
