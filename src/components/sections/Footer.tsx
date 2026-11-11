import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { navItems } from "@/components/site/SiteHeader";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-heading text-sm text-primary">creative.by.umer06</p>
            <p className="mt-4 font-heading text-2xl font-medium md:text-3xl">
              Designing Ideas. Building Experiences.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <ul className="grid grid-cols-2 gap-3 font-heading text-sm text-muted-foreground">
              {navItems.map((n) => (
                <li key={n.id}>
                  <Link to="/" hash={n.id} className="transition-colors hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-3 md:col-span-2 md:justify-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-12 w-12 place-items-center rounded-full border border-border transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full border border-border transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p
          className="display-xl mt-16 select-none whitespace-nowrap text-[clamp(3rem,13.5vw,12.5rem)] leading-none text-foreground/95"
          aria-hidden
        >
          Umer Shahzad<span className="text-primary">.</span>
        </p>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {year} Umer Shahzad. All rights reserved.</span>
          <span>creative.by.umer06</span>
        </div>
      </div>
    </footer>
  );
}
