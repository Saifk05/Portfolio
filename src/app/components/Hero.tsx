// app/components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== "undefined" &&
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

  const LINKS = {
    resume: "/Saifali_Kalkeri_Resume.pdf",
    email: "mailto:kalkerisaif@gmail.com",
    github: "https://github.com/Saifk05",
    linkedin: "https://www.linkedin.com/in/Saif-Kalkeri/",

  };

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-label="Hero"
      className="
        relative isolate
        py-20 md:py-28
        scroll-mt-24
        bg-gradient-to-b from-black via-[#0a0a0a] to-black
        text-white
      "
    >
      {/* subtle grid that fades near edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-grid-fade"
      />

      {/* soft blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 -z-10 rounded-full bg-green-400 soft-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 -z-10 rounded-full bg-cyan-400 soft-blob"
      />

      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="io-fade badge" style={{ transitionDelay: "0ms" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            PRODUCT-FOCUSED ENGINEER
          </div>

          <h1
            className="
              io-fade mt-4
              bg-gradient-to-r from-cyan-300 via-white to-green-300
              bg-clip-text text-transparent
              font-bold leading-[1.05]
              text-[clamp(2rem,6vw,3.75rem)]
            "
            style={{ transitionDelay: "70ms" }}
          >
            Saifali Kalkeri
          </h1>

          <p
            className="io-fade mt-3 text-[clamp(1rem,2.5vw,1.25rem)] text-white/85"
            style={{ transitionDelay: "120ms" }}
          >
            Frontend • Full-Stack • Product Engineer
          </p>

          <p
            className="io-fade mt-6 max-w-xl leading-relaxed text-white/70"
            style={{ transitionDelay: "170ms" }}
          >
            I build dashboards, automation tools, and real-time tracking systems —
            React/Next.js, Leaflet + Firebase live location, and Google Apps Script integrations.
          </p>

          {/* CTAs */}
          <div
            className="io-fade mt-8 flex flex-wrap items-center gap-4"
            style={{ transitionDelay: "230ms" }}
          >
            <a href="#projects" className="btn btn-primary">
              Let’s get started
            </a>

            <a
              href={LINKS.resume}
              download
              className="btn btn-ghost"
              style={{ transitionDelay: "260ms" }}
            >
              Download Resume
            </a>
          </div>

          {/* socials */}
          <div
            className="io-fade mt-6 flex items-center gap-5 text-white/70"
            style={{ transitionDelay: "290ms" }}
          >
            <a href={LINKS.github} aria-label="GitHub" className="icon-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.26.8-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.25 1.84 1.25 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.34-5.46-5.95 0-1.31.47-2.39 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.24.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.56 3.3-1.24 3.3-1.24.66 1.7.24 2.96.12 3.27.77.85 1.24 1.93 1.24 3.24 0 4.62-2.8 5.65-5.47 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            <a href={LINKS.linkedin} aria-label="LinkedIn" className="icon-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5 2.49 2.49 0 0 1 4.98 3.5zM.5 8h4v15h-4zM8 8h3.8v2.05h.05C12.38 9.1 13.69 8.05 15.63 8.05 20.1 8.05 23 10.28 23 14.72V23h-4v-7.07c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.83-2.71 3.73V23H8z" />
              </svg>
            </a>

            <a href={LINKS.email} className="icon-link text-sm">Email</a>
          </div>
        </div>

        {/* RIGHT: circular portrait */}
        <div className="io-fade flex justify-center" style={{ transitionDelay: "220ms" }}>
          <div className="
              relative h-60 w-60 md:h-72 md:w-72
              overflow-hidden rounded-full
              ring-4 ring-green-500/30
              shadow-lg shadow-green-500/25
            ">
            <Image
              src="/profile.jpg"
              alt="Saif Ali Kalkeri portrait"
              fill
              className="object-cover will-change-transform"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
