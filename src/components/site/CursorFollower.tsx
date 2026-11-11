import { useEffect, useRef } from "react";

/** Soft ring that trails the pointer on desktop; grows over links and buttons. */
export function CursorFollower() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ring.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let scale = 1;
    let target = 1;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      const interactive = (e.target as HTMLElement | null)?.closest(
        "a, button, [role=button], input, select, textarea",
      );
      target = interactive ? 2.2 : 1;
    };
    const leave = () => (el.style.opacity = "0");
    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      scale += (target - scale) * 0.15;
      el.style.transform = `translate3d(${cx - 14}px, ${cy - 14}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 rounded-full border border-primary/70 bg-primary/5 opacity-0 mix-blend-screen transition-opacity duration-300 md:block"
    />
  );
}
