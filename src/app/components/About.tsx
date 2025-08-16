// components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          className="mt-10 grid gap-10 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              I’m <span className="font-semibold text-white">Saif Ali Kalkeri</span>, 
              a final-year Computer Science student at{" "}
              <span className="font-semibold text-white">KLE Technological University</span>, 
              passionate about building scalable web applications, real-time tracking dashboards, 
              and automation tools that simplify operations and improve efficiency.
            </p>
            <p>
              With hands-on experience in{" "}
              <span className="font-semibold text-white">
                React.js, Leaflet.js, Firebase, Google Apps Script
              </span>{" "}
              and various API integrations, I’ve delivered solutions that cut manual work 
              by over <span className="text-green-400 font-semibold">80%</span> 
              and improved operational clarity by{" "}
              <span className="text-blue-400 font-semibold">30%</span>.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              I thrive at the intersection of{" "}
              <span className="font-semibold text-white">product engineering   </span> 
              and <span className="font-semibold text-white">problem-solving</span>, 
              turning complex workflows into intuitive, user-friendly tools.
            </p>
            <p>
              Whether it’s route optimization, data visualization, or chatbot automation, 
              I focus on building systems that save time, scale effortlessly, and deliver 
              measurable impact.
            </p>
          </div>
        </motion.div>

        {/* Skills List */}
        <motion.ul
          className="mt-10 grid sm:grid-cols-2 gap-y-3 text-gray-400 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <li>• React.js / Next.js, TypeScript, Tailwind CSS</li>
          <li>• Leaflet.js, Firebase Realtime DB, OwnTracks</li>
          <li>• Google Apps Script (Sheets / Drive / Chat / Webhooks)</li>
          <li>• Node.js, Express, MySQL, MongoDB</li>
        </motion.ul>
      </div>
    </section>
  );
}
