"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

/* ------------------ Animated Stat Card ------------------ */

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Intl.NumberFormat().format(Math.floor(latest))
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm hover:border-green-400/40 transition"
    >
      <div className="text-2xl sm:text-3xl font-semibold text-green-400">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>

      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

/* ------------------ About Section ------------------ */

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-28 bg-black scroll-mt-20 overflow-hidden"
    >
      <div className="w-full px-5 sm:px-6 md:px-8 lg:max-w-6xl lg:mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        {/* Layout */}
        <div className="mt-10 md:mt-12 grid gap-12 md:gap-16 md:grid-cols-2 items-start md:items-center">
          
          {/* LEFT — Text */}
          <motion.div
            className="space-y-6 md:space-y-8 text-white/75 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I build{" "}
              <span className="text-white font-medium">
                production-grade systems
              </span>{" "}
              that power real-world operations — from real-time order
              allocation engines to geo-aware commerce platforms and
              automation pipelines.
            </p>

            <p>
              I’ve architected systems serving{" "}
              <span className="text-white font-medium">
                thousands of users
              </span>
              , designed multi-role B2B platforms, and built admin dashboards
              handling hundreds of daily transactions.
            </p>

            <p>
              My focus lies in{" "}
              <span className="text-white font-medium">
                system design, database architecture, and scalability
              </span>
              . From designing relational schemas with 10+ models to
              implementing secure JWT authentication with refresh token
              rotation, I build systems that are reliable, performant,
              and operationally efficient.
            </p>

            <p>
              I’m particularly interested in backend-heavy product
              engineering — building platforms where real-time data and
              measurable business impact truly matter.
            </p>
          </motion.div>

          {/* RIGHT — Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <StatCard
              value={8000}
              suffix="+"
              label="Users Supported"
            />

            <StatCard
              value={50}
              suffix="+"
              label="Delivery Agents Managed"
            />

            <StatCard
              value={80}
              suffix="%"
              label="Workflow Automation"
            />

            <StatCard
              value={60}
              suffix="%"
              label="Manual Overhead Reduced"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}