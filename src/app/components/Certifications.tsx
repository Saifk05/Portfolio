// app/components/Certifications.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Certifications() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  const certs = [
    "AWS Cloud Technical Essentials — Coursera",
    "Fortinet Certified Fundamentals in Cybersecurity — Fortinet",
    "Networking Basics — Fortinet",
    "Software Engineer Intern — HackerRank",
    "Tata – Data Visualisation: Empowering Business with Effective Insights — Forage",
  ];

  return (
    <section
      ref={rootRef}
      id="certifications"
      className="relative isolate py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      {/* subtle grid */}
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
          Certifications
        </h2>

        <ul className="mt-8 list-disc pl-6 text-foreground">
          {certs.map((c, i) => (
            <li
              key={c}
              className="io-fade mb-2"
              style={{ transitionDelay: `${i * 90}ms` }} // stagger
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
