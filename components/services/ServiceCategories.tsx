"use client";

import { motion } from "framer-motion";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";
import { serviceCategories } from "@/lib/servicesData";

export function ServiceCategories() {
  return (
    <div>
      {serviceCategories.map((cat, index) => {
        const bg = index % 2 === 0 ? "bg-cream" : "bg-mist";
        return (
          <section key={cat.id} className={`${bg} py-16 md:py-24`}>
            <div className="mx-auto max-w-6xl px-6">
              <motion.div
                className="rounded-xl bg-navy px-6 py-8 md:px-10 md:py-10"
                initial="hidden"
                whileInView="visible"
                viewport={inViewOpts}
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center rounded-full bg-terra/20 px-3 py-1 font-dm text-xs font-semibold text-terra"
                >
                  {cat.number}
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="mt-4 font-cormorant text-3xl font-light text-cream md:text-4xl"
                >
                  {cat.title}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-3 max-w-3xl font-dm text-sm text-mist/70 md:text-base"
                >
                  {cat.description}
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={inViewOpts}
                variants={staggerContainer}
              >
                {cat.services.map((s) => (
                  <motion.article
                    key={s.name}
                    variants={fadeUp}
                    className="group rounded-xl border border-mist border-l-4 border-l-terra/30 bg-white p-5 transition-shadow hover:border-l-terra hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex rounded-lg bg-navy/5 p-2 text-navy/80">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-dm text-base font-medium text-navy">{s.name}</h3>
                    <p className="mt-2 font-dm text-sm leading-relaxed text-slate">
                      {s.description}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
