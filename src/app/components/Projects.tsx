// app/components/Projects.tsx
"use client";

import { useEffect, useRef } from "react";

type Card = { title: string; desc: string; href: string };

const projects: Card[] = [
  {
    title: "Live Ops Dashboard",
    desc: "React + Leaflet map with driver tracking, task assignment, and ETA routing.",
    href: "https://your-demo-or-github-link",
  },
  {
    title: "WhatsApp Chatbot (WATI + GAS)",
    desc: "Phone verification, order flows, and Sheet-backed CRM with templated replies.",
    href: "https://your-demo-or-github-link",
  },
  {
    title: "Chrome Extension – Load Automations",
    desc: "Scrapes & syncs load details to Sheets with admin panel and multi-user support.",
    href: "https://your-demo-or-github-link",
  },
];

export default function Projects() {
  const rootRef = useRef<HTMLElement | null>(null);

  // same fade-in behavior as Contact.tsx
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(root.querySelectorAll<HTMLElement>(".io-fade"));
    if (!els.length) return;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="projects"
      className="relative isolate py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="io-fade text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-white to-green-300 bg-clip-text text-transparent">
          Projects
        </h2>
        <p
          className="io-fade mt-3 text-sm text-white/70"
          style={{ transitionDelay: "80ms" }}
        >
          A selection of recent work — blending code, design, and operations.
        </p>

        <div
          className="io-fade mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          style={{ transitionDelay: "140ms" }}
        >
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="io-fade group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                         ring-1 ring-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]
                         p-6 transition-transform hover:-translate-y-1 hover:shadow-lg hover:border-cyan-400"
              style={{ transitionDelay: `${220 + i * 90}ms` }} // stagger cards
            >
              <div className="aspect-video rounded-lg bg-black/20 mb-4 grid place-items-center text-white/40 group-hover:bg-black/10 transition-colors">
                <span className="text-xs">Project screenshot</span>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
