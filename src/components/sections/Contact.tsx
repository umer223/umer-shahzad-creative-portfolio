import { ChevronDown, Instagram, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  buildWhatsAppLink,
  contactSchema,
  projectTypes,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

const fieldClass =
  "w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    window.open(buildWhatsAppLink(parsed.data), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp", {
      description: "Your message is ready — just press send in WhatsApp.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="grid-lines absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div
        className="glow-orb absolute -bottom-40 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Let's work together
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-xl mt-5 text-[clamp(3rem,9vw,8.5rem)]">
            Have a Project <br className="hidden sm:block" />
            in Mind<span className="text-primary">?</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Let's create something meaningful together. Whether you need a powerful brand
                identity, engaging social media designs or a professional website, I'm ready to
                bring your ideas to life.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex items-center gap-5 rounded-3xl p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-glow"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-heading text-xl font-semibold">
                    {WHATSAPP_DISPLAY}
                  </span>
                </span>
                <span className="font-heading text-sm text-primary transition-transform duration-500 group-hover:translate-x-1">
                  Chat →
                </span>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex items-center gap-5 rounded-3xl p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-glow"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-background text-primary">
                  <Instagram className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Instagram
                  </span>
                  <span className="mt-1 block font-heading text-xl font-semibold">
                    {INSTAGRAM_HANDLE}
                  </span>
                </span>
                <span className="font-heading text-sm text-primary transition-transform duration-500 group-hover:translate-x-1">
                  Follow →
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              noValidate
              onSubmit={onSubmit}
              className="glass rounded-[2rem] p-6 shadow-soft md:p-10"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" error={errors.name} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Full name"
                    className={cn(fieldClass, errors.name && "border-destructive")}
                  />
                </Field>
                <Field label="Email" error={errors.email} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    placeholder="you@company.com"
                    className={cn(fieldClass, errors.email && "border-destructive")}
                  />
                </Field>
              </div>

              <Field
                label="Project type"
                error={errors.projectType}
                htmlFor="projectType"
                className="mt-5"
              >
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    className={cn(
                      fieldClass,
                      "appearance-none pr-10",
                      errors.projectType && "border-destructive",
                    )}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-surface">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden
                  />
                </div>
              </Field>

              <Field label="Message" error={errors.message} htmlFor="message" className="mt-5">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell me about your project, goals and timeline…"
                  className={cn(fieldClass, "resize-none", errors.message && "border-destructive")}
                />
              </Field>

              <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  Sends your enquiry straight to my WhatsApp.
                </p>
                <Button type="submit" variant="hero" size="pill" className="w-full sm:w-auto">
                  Send Message
                  <span className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary transition-transform duration-500 group-hover:translate-x-0.5">
                    <Send className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  htmlFor: string;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-heading text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
