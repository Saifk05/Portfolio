// app/components/Contact.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | "success" | "error">(null);
  const [msg, setMsg] = useState("");
  const rootRef = useRef<HTMLElement | null>(null);

  // fade-in animation
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".io-fade"));
    if (!els.length) return;
    if (prefersReduced) { els.forEach(el => el.classList.add("show")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const ACCESS_KEY =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ec251b4a-68ae-4793-ad22-4ae09b262032";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); setOk(null); setMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Portfolio Contact: New message");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setOk("success"); setMsg("Message sent! I’ll get back to you ASAP."); form.reset(); }
      else { setOk("error"); setMsg(json.message || "Something went wrong. Please try again."); }
    } catch {
      setOk("error"); setMsg("Network error. Please try again.");
    } finally { setLoading(false); }
  };

  const outerCard =
    "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm " +
    "ring-1 ring-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]";

  return (
    <section
      ref={rootRef}
      id="contact"
      className="relative isolate py-20 md:py-28 scroll-mt-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      {/* background grid */}
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
          Get in Touch
        </h2>
        <p className="io-fade mt-3 text-sm text-white/70" style={{ transitionDelay: "80ms" }}>
          Send a note and it’ll land in my inbox. I usually reply within a day.
        </p>

        {/* card layout */}
        <div className={`io-fade mt-8 ${outerCard} p-6 md:p-8`} style={{ transitionDelay: "140ms" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: image */}
            <div className="rounded-xl bg-black/10 p-4 flex items-center justify-center">
              <div className="relative w-full h-72 sm:h-80 md:h-[420px]">
                <Image
                  src="/contact-image.png"
                  alt="Say hello"
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
            </div>

            {/* Right: visible form fields */}
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm text-white/70">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm text-white/70">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block mb-1 text-sm text-white/70">Description</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me a bit about what you need…"
                  className="min-h-[160px] w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {ok === "success" && <p className="text-sm text-green-400">{msg}</p>}
              {ok === "error" && <p className="text-sm text-red-400">{msg}</p>}

              {/* Upgraded Send button */}
            <button
            type="submit"
            disabled={loading}
            className="relative flex items-center justify-center rounded-full px-5 py-2 text-base font-medium
                        bg-gradient-to-r from-cyan-400 via-green-300 to-blue-400 text-black
                        shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40
                        hover:scale-105 transition-all duration-200
                        ring-1 ring-white/20 hover:ring-white/30
                        disabled:opacity-60 disabled:scale-100"
            >
            {loading ? "Sending…" : "Send Message"}
            </button>


              <p className="text-xs text-white/50">
                By sending, you agree to be contacted at the email you provide.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
