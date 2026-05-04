"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  HeartPulse,
  Home,
  Plane,
  Scan,
  Shield,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";

const services = [
  {
    name: "Family Medicine",
    description: "Continuity of care for every age, from babies to grandparents.",
    icon: Stethoscope,
  },
  {
    name: "Women's Health",
    description: "Cervical screening, contraception, pregnancy shared care & more.",
    icon: HeartPulse,
  },
  {
    name: "Skin Checks",
    description: "Dedicated skin surveillance and lesion management with our GPs.",
    icon: Scan,
  },
  {
    name: "Chronic Disease",
    description: "Care plans and reviews for diabetes, asthma, heart disease & COPD.",
    icon: Activity,
  },
  {
    name: "Home Visits",
    description: "Supporting patients at home when attendance is not possible.",
    icon: Home,
  },
  {
    name: "Travel Medicine",
    description: "Vaccinations, advice, and yellow fever where clinically appropriate.",
    icon: Plane,
  },
  {
    name: "Preventive Health",
    description: "Immunisations, health assessments, and screening tailored to you.",
    icon: Shield,
  },
  {
    name: "Mental Health",
    description: "Mental health care plans, reviews, and compassionate follow-up.",
    icon: Brain,
  },
];

export function HomeServicesSection() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="font-dm text-xs uppercase tracking-widest text-cream/50"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-cormorant text-3xl font-light text-cream md:text-4xl"
          >
            Comprehensive care for every stage of life
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-2xl font-dm text-sm text-mist/60 md:text-base"
          >
            From babies and busy parents to older adults, we combine modern general
            practice with the continuity only a long-established clinic can offer.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          {services.map((s) => (
            <motion.article
              key={s.name}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/6 p-5"
            >
              <div className="mb-4 inline-flex rounded-lg bg-mist/20 p-2 text-mist/80">
                <s.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-cormorant text-lg text-cream">{s.name}</h3>
              <p className="mt-2 font-dm text-xs leading-relaxed text-mist/60">
                {s.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex min-h-[44px] items-center font-dm text-sm font-medium text-terra hover:underline"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
