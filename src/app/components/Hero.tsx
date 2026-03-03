// app/components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

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
    resume: "/Saifali_Kalkeri_Outside.pdf",
    email: "mailto:kalkerisaif@gmail.com",
    github: "https://github.com/Saifk05",
    linkedin: "https://www.linkedin.com/in/Saif-Kalkeri/",
  };

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-label="Hero"
      className="relative isolate py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white"
    >
      {/* Background Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-grid-fade"
      />

      {/* Soft Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 -z-10 rounded-full bg-green-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 -z-10 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        {/* LEFT */}
        <div className="order-2 md:order-1 max-w-2xl text-center md:text-left">
        {/* <div className="max-w-2xl"> */}
          {/* Badge */}
          <div className="io-fade badge" style={{ transitionDelay: "0ms" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            SYSTEMS & REAL-TIME ENGINEER
          </div>

          {/* Name */}
          <h1
            className="io-fade mt-4 text-white font-bold leading-[1.05] text-[clamp(2rem,6vw,3.75rem)]"
            style={{ transitionDelay: "70ms" }}
          >
            Saifali Kalkeri
          </h1>

          {/* Role */}
          <p
            className="io-fade mt-3 text-[clamp(1rem,2.5vw,1.25rem)] text-white/85"
            style={{ transitionDelay: "120ms" }}
          >
            Full-Stack Engineer building scalable, geo-aware & real-time platforms
          </p>

          {/* Description */}
          <p
            className="io-fade mt-6 max-w-xl leading-relaxed text-white/70"
            style={{ transitionDelay: "170ms" }}
          >
            I architect and ship production-grade systems — real-time order
            allocation engines, geo-based commerce platforms, and automation
            tools used by thousands of users. Focused on system design,
            performance, and operational efficiency.
          </p>

          {/* Impact Metrics */}
          <div
            className="io-fade mt-6 flex flex-wrap gap-6 text-sm text-white/60"
            style={{ transitionDelay: "200ms" }}
          >
            <span>8000+ Users Served</span>
            <span>50+ Real-Time Delivery Agents Managed</span>
            <span>60% Operational Efficiency Improvement</span>
          </div>

          {/* CTAs */}
          <div
            className="io-fade mt-8 flex flex-wrap items-center gap-4"
            style={{ transitionDelay: "230ms" }}
          >
            <a href="#projects" className="btn btn-primary">
              View Case Studies
            </a>

            <a
              href={LINKS.resume}
              download
              className="btn btn-ghost"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="io-fade mt-6 flex items-center gap-6 text-white/70"
            style={{ transitionDelay: "260ms" }}
          >
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href={LINKS.email}
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
<div
  className="order-1 md:order-2 io-fade flex justify-center mb-10 md:mb-0"
          style={{ transitionDelay: "220ms" }}
        >
          <div className="relative h-60 w-60 md:h-72 md:w-72 overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <Image
              src="/profile.jpg"
              alt="Saifali Kalkeri portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}