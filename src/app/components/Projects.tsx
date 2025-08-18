// app/components/Projects.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Card = { title: string; desc: string; href: string; img?: string; alt?: string };

const projects: Card[] = [
  {
    title: "Role-Based Ops Dashboard (Live Tracking & ETA)",
    desc:
      "Multi-role dashboard with Firebase Auth/Firestore, live agent GPS (5–10s), OpenRouteService routing/ETAs, time-slot filters, and color-coded markers (~30% efficiency lift).",
    href: "https://team-tasks-seven.vercel.app/",
    img: "/ops.jpg", // put ops.jpg in /public
    alt: "Ops dashboard with live driver map and ETAs",
  },
  {
    title: "DDoS Mitigation Dashboard",
    desc:
      "Trained an ML model on network-flow data and run real-time inference to classify Normal vs DDoS. Dashboard displays outputs (pie/bar/line) and includes an actionable mitigation table (blackhole/blocklist).",
    href: "https://ml-web-frontend.vercel.app/",
    img: "/ddos.jpg", // put ddos.jpg in /public
    alt: "DDoS dashboard showing charts and mitigation table",
  },
  {
    title: "Laundry Analytics Dashboard (Live)",
    desc:
      "KPI dashboard for orders, revenue, gross profit, AOV; day/week/month/year rollups, date-range filters, service-level analytics, and monthly new vs repeat classification.",
    href: "https://laundry-dashboard-rose.vercel.app/",
    img: "/laundry.jpg", // put laundry.jpg in /public
    alt: "Laundry analytics charts and KPIs",
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
              aria-label={`${p.title} — open project`}
              className="io-fade group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                         ring-1 ring-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]
                         p-6 transition-transform hover:-translate-y-1 hover:shadow-lg hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              style={{ transitionDelay: `${220 + i * 90}ms` }} // stagger cards
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-black/20">
                {p.img ? (
                  <>
                    <Image
                      src={p.img}
                      alt={p.alt ?? p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i === 0}
                    />
                    {/* subtle gradient for text legibility if you add labels later */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="grid h-full w-full place-items-center text-white/40">
                    <span className="text-xs">Project screenshot</span>
                  </div>
                )}
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
