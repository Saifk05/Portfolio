"use client";

import { useEffect, useRef } from "react";

export default function Experience() {
  const rootRef = useRef<HTMLElement | null>(null);

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
      id="experience"
      className="relative py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="io-fade text-3xl md:text-4xl font-bold text-white">
          Experience
        </h2>

        <ol className="mt-12 relative border-s border-white/10">

          {/* Aarambh.Tech */}
          <li className="io-fade ms-4 mb-12">
            <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-green-400" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  Full Stack Developer Intern — Aarambh.Tech
                </h3>
                <p className="text-xs text-white/60">
                  Bengaluru, India • Sept 2025 – Jan 2026
                </p>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm text-white/85 space-y-2">
                <li>
                  Architected a geo-based order allocation engine serving
                  <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
  50+ delivery agents
</span>,
                  automating dispatch within a 5km radius using FIFO prioritization.
                </li>
                <li>
                  Engineered real-time location tracking and OTP-based delivery verification,
                  reducing manual validation overhead by
                  <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
                    60%
                  </span>.
                </li>
                <li>
                  Built admin dashboards handling
                  <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
  200+ daily orders
</span>,
                  dynamic cost computation, vendor onboarding, and serviceable zone configuration.
                </li>
                <li>
                  Designed multi-role access control for a B2B order platform
                  supporting <span className="text-white font-medium">20+ stores</span>.
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Angular", "TypeScript", "Ionic", "Leaflet", "Nebular", "System Design"].map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>

          {/* Mixedwash */}
          <li className="io-fade ms-4 mb-12">
            <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-cyan-400" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  Founder’s Office Intern — Mixedwash
                </h3>
                <p className="text-xs text-white/60">
                  Bengaluru, India • May 2025 – Sept 2025
                </p>
              </div>

          <ul className="mt-4 list-disc pl-5 text-sm text-white/85 space-y-2">
  <li>
    Built a real-time task allocation dashboard serving{" "}
    <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
      25+ drivers
    </span>
    , reducing dispatch effort by{" "}
    <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
      40%
    </span>.
  </li>

  <li>
    Implemented time-slot filtering and admin visibility controls,
    improving ETA accuracy by{" "}
    <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
      30%
    </span>.
  </li>

  <li>
    Automated{" "}
    <span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
      80%
    </span>{" "}
    of customer onboarding and booking workflows via WhatsApp chatbot
    integrations.
  </li>

  <li>
    Integrated third-party APIs and streamlined backend workflows,
    improving system reliability and reducing processing latency.
  </li>
</ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["React", "Node.js", "APIs", "Routing", "Automation"].map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>

          {/* EmaxLabz */}
          <li className="io-fade ms-4">
            <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-purple-400" />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  Project Intern — EmaxLabz Solution
                </h3>
                <p className="text-xs text-white/60">
                  Bengaluru, India • Jan 2025 – May 2025
                </p>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm text-white/85 space-y-2">
                <li>
                  Built a Chrome Extension to extract and structure freight
                  load data from DAT in real time.
                </li>
                <li>
                  Implemented multi-user authentication and isolated sheet-level
                  access control.
                </li>
                <li>
                  Optimized backend API synchronization workflows,
                  reducing processing latency.
                </li>
                <li>
                  Eliminated<span className="px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 font-semibold">
  80%
</span>
                  manual workload, accelerating turnaround time.
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {["Chrome Extension", "Google Apps Script", "Sheets API", "Postman"].map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>

        </ol>
      </div>
    </section>
  );
}