"use client";

import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("#skills .io-fade");
    if (!els.length) return;

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

  const groups = [
    {
      title: "Programming Languages",
      items: ["C++", "Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Angular",
        "React Native",
        "Ionic",
        "Nebular",
      ],
    },
    {
      title: "Databases",
      items: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Firebase Realtime DB",
        "Google Sheets API",
      ],
    },
    {
      title: "Cloud & Deployment",
      items: ["AWS", "Firebase", "Vercel", "Render", "Netlify"],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Postman",
        "Jira",
        "Google Apps Script",
      ],
    },
    {
      title: "Core Concepts",
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "REST API Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 md:py-28 scroll-mt-24 bg-black overflow-hidden"
    >
      <div className="w-full px-5 sm:px-6 md:px-8 lg:max-w-6xl lg:mx-auto">
        <h2 className="io-fade text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Skills
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {groups.map((group, i) => (
            <div
              key={group.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="io-fade rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-green-400/30 transition"
            >
              <h3 className="text-white font-semibold text-lg">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}