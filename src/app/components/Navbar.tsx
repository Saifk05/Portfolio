"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const sectionIds = useMemo(() => LINKS.map((l) => l.href.slice(1)), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive("#" + visible.target.id);
      },
      { rootMargin: "0px 0px -40% 0px", threshold: [0.2, 0.4, 0.6, 0.8, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [sectionIds]);

  const close = () => setOpen(false);

  // Hard refresh when brand is clicked
  const handleBrandClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    // Go to root and force a full reload (not just client-side nav)
    window.location.href = "/";
  };

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-black focus:text-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header
        className={[
          "sticky top-0 z-50 w-full transition-all duration-200",
          scrolled
            ? "backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/10 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav className="container mx-auto h-16 px-4 flex items-center justify-between text-white">
          {/* Brand (logo + name). Full reload on click */}
          <Link
            href="/"
            onClick={handleBrandClick}
            className="group flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Saif — go to home"
          >
            {/* Replace /logo.svg with your file. PNG works too. */}
            <span className="relative inline-flex">
              <Image
                src="/logo.png"
                alt=""
                width={22}
                height={22}
                className="h-[18px] w-[18px]"
                priority
              />
              {/* soft green glow behind the logo */}
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-green-400/70 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            </span>
            <span>Saif</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {LINKS.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative mx-2 inline-flex items-center rounded-full px-3 py-1.5 text-neutral-200/90 transition",
                      "hover:text-white",
                    ].join(" ")}
                  >
                    {l.label}
                    <span
                      className={[
                        "absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-white/70 transition-opacity",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex relative items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black"
          >
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-80 blur-md" />
            <span className="relative rounded-full bg-gradient-to-b from-green-400 to-green-600 px-4 py-2 shadow-lg shadow-green-500/40">
              Contact
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/90 text-white backdrop-blur">
            <ul className="container mx-auto grid gap-1 px-4 py-3">
              {LINKS.map((l) => {
                const isActive = active === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={close}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "block rounded-lg px-3 py-2 text-sm",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-neutral-200 hover:bg-white/5",
                      ].join(" ")}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-1">
                <a
                  href="#contact"
                  onClick={close}
                  className="relative block rounded-lg px-3 py-2 text-center text-sm font-medium text-black"
                >
                  <span className="absolute inset-0 rounded-lg bg-green-500 opacity-80 blur-md" />
                  <span className="relative rounded-lg bg-gradient-to-b from-green-400 to-green-600 px-3 py-2 shadow-lg shadow-green-500/40">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
