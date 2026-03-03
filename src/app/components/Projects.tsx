"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  short: string;
  stack: string;
  image: string;
  details: string[];
  impact: string[];
};

const projects: Project[] = [
  {
    title: "Task & Expense Management System",
    short:
      "Scalable full-stack system supporting 8000+ users for task scheduling and expense tracking.",
    stack: "React Native • Node.js • Prisma • PostgreSQL",
    image: "/task.jpg",
    details: [
      "Designed a modular monolithic backend with RESTful APIs and an optimized relational schema (10+ models).",
      "Implemented JWT authentication with refresh token rotation and secure user-level isolation.",
      "Built hierarchical task categorization, budget tracking, and notification pipelines.",
      "Optimized query performance and indexing for high concurrency usage.",
    ],
    impact: [
      "8000+ active users supported",
      "Secure multi-tenant architecture",
      "Optimized DB schema (10+ relational models)",
    ],
  },
  {
    title: "Geo-Aware E-Commerce Platform",
    short:
      "Zone-based scalable e-commerce platform supporting 5000+ users with dynamic stock validation.",
    stack: "Angular • Ionic • Node.js • MongoDB",
    image: "/geo.jpg",
    details: [
      "Architected zone-level serviceability logic with real-time product validation.",
      "Implemented inventory orchestration workflows across multiple serviceable regions.",
      "Designed cart-level validation and recommendation engine.",
      "Built scalable backend APIs for high availability.",
    ],
    impact: [
      "5000+ users supported",
      "Real-time stock validation engine",
      "Zone-based inventory orchestration",
    ],
  },
  {
    title: "DDoS Detection & Mitigation Dashboard",
    short:
      "ML-powered dashboard for real-time DDoS detection with mitigation workflow.",
    stack: "Python • ML • React • Node.js",
    image: "/ddos.jpg",
    details: [
      "Trained ML model on network flow datasets for traffic classification.",
      "Integrated real-time inference pipeline to detect Normal vs DDoS traffic.",
      "Built mitigation dashboard with blocklist and blackhole routing actions.",
      "Visualized traffic insights with dynamic charts and monitoring panels.",
    ],
    impact: [
      "Real-time anomaly detection",
      "Actionable mitigation workflows",
      "Improved network visibility",
    ],
  },
];

export default function Projects() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>(".io-fade"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
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
      className="py-20 md:py-28 bg-black scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Projects
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="text-left rounded-xl border border-white/10 bg-white/5 p-5 hover:border-green-400/40 transition"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-black/30">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {p.short}
              </p>
              <p className="mt-2 text-xs text-green-400">{p.stack}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="max-w-3xl w-full mx-4 bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold text-white">
              {active.title}
            </h3>
            <p className="mt-2 text-sm text-green-400">{active.stack}</p>

            <ul className="mt-6 space-y-3 text-white/80 text-sm list-disc pl-5">
              {active.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {active.impact.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-green-500/15 text-green-400"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}