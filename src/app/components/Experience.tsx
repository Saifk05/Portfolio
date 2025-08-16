// app/components/Experience.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Experience() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Respect reduced motion
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

  return (
    <section
      ref={rootRef}
      id="experience"
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
          Experience
        </h2>

        {/* Timeline */}
        <ol className="mt-10 relative border-s border-white/10">
          {/* Mixedwash */}
          <li className="io-fade ms-4 mb-10">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,197,94,0.6)]" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  Founder’s Office Intern — Mixedwash
                </h3>
                <p className="text-xs text-white/60">
                  Bengaluru, India • May 2025 – Present
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-white/85 space-y-1.5">
                <li>Assigned and monitored pickup/drop routes for multiple service agents, ensuring on-time deliveries.</li>
                <li>Coordinated with clients via WhatsApp for confirmations, updates, scheduling, and solving their queries.</li>
                <li>Managed daily order data and dashboards; streamlined day-to-day ops with the team.</li>
                <li>Collaborated with engineers to improve real-time tracking, ETA planning, and route optimization.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">Ops</span>
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">Routing</span>
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">ETA</span>
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">TypeScript</span>
              </div>
            </div>
          </li>

          {/* EmaxLabz */}
          <li className="io-fade ms-4 mb-2">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,197,94,0.6)]" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  Project Intern — EmaxLabz Solution
                </h3>
                <p className="text-xs text-white/60">
                  Bengaluru, India • Jan 2025 – May 2025
                </p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-white/85 space-y-1.5">
                <li>Built a Chrome extension to automate freight load extraction from DAT and sync to Google Sheets in real time.</li>
                <li>Implemented multi-user login, sheet isolation, and background syncing (Chrome Storage + Apps Script).</li>
                <li>Validated API flows with Postman for reliable backend sync and faster parsing.</li>
                <li>Reduced manual workload by ~80%, improving operational speed and sales response time.</li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">Chrome Ext</span>
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">Apps Script</span>
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">Sheets API</span>
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1">Postman</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
