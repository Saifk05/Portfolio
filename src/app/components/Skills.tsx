"use client";

import { useEffect } from "react";

export default function Skills() {
  // Attach IntersectionObserver once on mount
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("#skills .io-fade");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("show");
            io.unobserve(e.target); // trigger once
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const groups: { title: string; items: string[] }[] = [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { title: "Maps & Realtime", items: ["Leaflet.js", "Firebase Realtime DB", "OwnTracks"] },
    { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Webhooks"] },
    { title: "Databases", items: ["MySQL", "MongoDB", "Firestore / Sheets API"] },
    { title: "Automation & Tools", items: ["Google Apps Script", "Git/GitHub", "Postman", "Vercel"] },
  ];

  return (
    <section
      id="skills"
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
          Skills
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.title}
              // fade-up + stagger via inline delay
              style={{ transitionDelay: `${i * 90}ms` }}
              className="io-fade group rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <span className="text-xs text-white/60">{g.items.length} items</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {g.items.map((item, j) => (
                  <span
                    key={item}
                    style={{ transitionDelay: `${i * 90 + j * 25}ms` }}
                    className="io-fade rounded-full border border-white/15 bg-black/30 px-3 py-1 text-sm text-white/90 transition group-hover:border-white/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="io-fade mt-8 text-sm text-white/60">
          Also comfortable with: JWT auth, SSR/ISR, file uploads, rate limiting, basic CI/CD.
        </p>
      </div>
    </section>
  );
}
