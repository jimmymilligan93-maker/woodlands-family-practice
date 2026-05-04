"use client";

import { motion } from "framer-motion";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "25+", label: "Years" },
  { value: "11", label: "GPs" },
  { value: "4.8★", label: "Google" },
  { value: "1", label: "Pathology" },
];

const reviews = [
  {
    quote:
      "Warm, thorough and never rushed. Our whole family sees doctors here and we always feel heard.",
    name: "Google reviewer",
  },
  {
    quote:
      "Professional team from reception to nursing to the GPs. So glad to have this practice in Woodlands.",
    name: "Local family",
  },
  {
    quote:
      "Easy to book, lovely staff, and great communication about results and follow-up.",
    name: "Patient feedback",
  },
];

export function HomeStatsReviews() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={fadeUp}
          className="font-cormorant text-3xl font-light text-cream md:text-4xl"
        >
          Trusted by local families.
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="border-l-2 border-terra pl-4"
            >
              <p className="font-cormorant text-4xl text-cream md:text-5xl">
                {s.value}
              </p>
              <p className="mt-1 font-dm text-xs tracking-wide text-mist/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/6 p-5"
            >
              <p className="font-dm text-sm text-terra" aria-hidden>
                ★★★★★
              </p>
              <blockquote className="mt-3 font-dm text-sm italic leading-relaxed text-mist/70">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-dm text-xs text-mist/40">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
