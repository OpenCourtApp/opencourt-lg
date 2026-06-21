"use client";

import { useEffect, useState } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { OpenCourtWordmark } from "@/components/oc-logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Perguntas", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the hero: fully transparent (the photo runs up behind it).
  // Once scrolled (or the mobile menu is open): a light frosted glass — no hard
  // border, low opacity + blur — so it blends with the page instead of reading
  // as a detached white bar.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        solid ? "bg-background/70 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#topo"
          aria-label="OpenCourt — início"
          className={cn(
            "shrink-0 transition-colors",
            solid ? "text-foreground" : "text-white",
          )}
        >
          <OpenCourtWordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            href="https://opencourtapp.vercel.app/login"
            variant="ghost"
            size="sm"
            className={cn(!solid && "text-white hover:bg-white/10")}
          >
            Entrar
          </Button>
          <Button href="https://opencourtapp.vercel.app/register" size="sm">
            Começar grátis
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-md border transition-colors",
              solid
                ? "border-border text-foreground"
                : "border-white/30 text-white",
            )}
          >
            {open ? (
              <RiCloseLine className="size-5" />
            ) : (
              <RiMenuLine className="size-5" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href="https://opencourtapp.vercel.app/login" variant="secondary" size="sm">
                Entrar
              </Button>
              <Button href="https://opencourtapp.vercel.app/register" size="sm">
                Começar grátis
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
