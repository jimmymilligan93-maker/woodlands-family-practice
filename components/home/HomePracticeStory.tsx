"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";

const blobRadius = "45% 55% 48% 52% / 52% 45% 55% 48%";

export function HomePracticeStory() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[5fr_7fr]">
        <motion.div
          className="relative hidden min-h-[380px] md:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOpts}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 overflow-hidden shadow-lg"
            style={{ borderRadius: blobRadius }}
          >
            <Image
              src="https://wfpwa.com.au/wp-content/uploads/2022/10/vision-image.jpg"
              alt="Clinic interior"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 35vw, 100vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="font-dm text-xs uppercase tracking-widest text-slate"
          >
            ABOUT THE PRACTICE
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-cormorant text-3xl font-light text-navy md:text-4xl"
          >
            A practice built on trust, not transactions.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 font-dm text-sm leading-relaxed text-slate md:text-base"
          >
            Woodlands Family Practice has grown alongside the families we serve.
            Our doctors live locally, consult with time and empathy, and take
            pride in knowing your story—not just your chart number.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 font-dm text-sm leading-relaxed text-slate md:text-base"
          >
            With on-site pathology, registrar training, and a long-serving
            nursing and reception team, we aim to make high-quality general
            practice feel calm, familiar, and close to home.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["RACGP Accredited", "Doctor-Owned", "On-site Pathology"].map((b) => (
              <span
                key={b}
                className="rounded-full bg-white/70 px-3 py-1 font-dm text-xs text-navy"
              >
                {b}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <Link
              href="/our-practice"
              className="inline-flex min-h-[44px] items-center font-dm text-sm font-medium text-terra hover:underline"
            >
              Learn about our practice →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
