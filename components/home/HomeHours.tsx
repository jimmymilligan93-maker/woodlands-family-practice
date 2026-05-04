"use client";

import { motion } from "framer-motion";
import { Moon, Phone, Siren } from "lucide-react";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";

const rows = [
  { day: "Monday – Friday", hours: "8:30am – 5:30pm" },
  { day: "Saturday", hours: "8:30am – 11:30am" },
  { day: "Sunday", hours: "Closed" },
];

export function HomeHours() {
  return (
    <section className="bg-mist py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeUp}
            className="font-cormorant text-2xl text-navy md:text-3xl"
          >
            Opening Hours
          </motion.h3>
          <motion.table variants={fadeUp} className="mt-6 w-full font-dm text-sm text-slate">
            <tbody>
              {rows.map((r) => (
                <tr key={r.day} className="border-b border-navy/10">
                  <td className="py-3 pr-4 font-medium text-navy">{r.day}</td>
                  <td className="py-3 text-right">{r.hours}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeUp}
            className="font-cormorant text-2xl text-navy md:text-3xl"
          >
            After Hours Care
          </motion.h3>
          <motion.div variants={fadeUp} className="mt-6 space-y-4 font-dm text-sm text-slate">
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                <Moon className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-navy">Night Doctor</p>
                <a href="tel:1300644483" className="text-terra hover:underline">
                  1300 644 483
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                <Siren className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-navy">Emergency</p>
                <a href="tel:000" className="text-terra hover:underline">
                  000
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-navy">Practice phone</p>
                <p>For non-urgent queries during business hours.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
