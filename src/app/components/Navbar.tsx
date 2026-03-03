"use client";

import { useEffect, useMemo, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const sectionIds = useMemo(() => LINKS.map((l) => l.href.slice(1)), []);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section detection */
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

        if (visible?.target?.id) {
          setActive("#" + visible.target.id);
        }
      },
      { rootMargin: "0px 0px -40% 0px", threshold: 0.3 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [sectionIds]);

  /* Prevent background scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur bg-black/70 border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-6xl mx-auto flex h-16 items-center justify-between px-5 text-white">
        {/* Brand */}
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          Saif
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className={`relative transition ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-green-400 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-sm border border-white/20 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur border-t border-white/10 transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-6 text-white/80">
          {LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className={`block rounded-md px-3 py-2 transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}

          <a
            href="#contact"
            onClick={close}
            className="mt-4 block rounded-md border border-white/15 px-3 py-2 text-center hover:bg-white/10 transition"
          >
            Contact
          </a>
        </ul>
      </div>
    </header>
  );
}