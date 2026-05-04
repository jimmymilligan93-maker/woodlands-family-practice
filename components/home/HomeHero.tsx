"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";

const blobRadius = "40% 60% 55% 45% / 45% 38% 62% 55%";

export function HomeHero() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[7fr_5fr]">
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
            WOODLANDS, WA 6018 · EST. 1999
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-cormorant text-4xl font-light leading-tight text-navy md:text-6xl lg:text-7xl"
          >
            Your family&apos;s health, in{" "}
            <span className="font-cormorant italic text-terra">trusted</span> hands.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md font-dm text-base leading-relaxed text-slate"
          >
            We are a doctor-owned, RACGP accredited practice providing personal,
            comprehensive care for Woodlands and surrounding communities for
            over 25 years.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-terra px-6 py-3 text-center font-dm text-sm font-medium text-cream"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border-2 border-navy px-6 py-3 text-center font-dm text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-dm text-xs text-silver"
          >
            ★★★★★ 4.8 on Google · RACGP Accredited · Doctor-owned · On-site
            Pathology
          </motion.p>
        </motion.div>

        <motion.div
          className="relative hidden min-h-[420px] md:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOpts}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 overflow-hidden bg-gradient-to-br from-navy to-slate shadow-xl"
            style={{ borderRadius: blobRadius }}
          >
            <Image
              src="https://wfpwa.com.au/wp-content/uploads/2022/10/vision-image.jpg"
              alt="Woodlands Family Practice"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
