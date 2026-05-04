"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { doctors } from "@/lib/doctors";
import { fadeUp, inViewOpts } from "@/lib/motion";

const CARD_W = 220;
const GAP = 16;

export function HomeTeamCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * (CARD_W + GAP),
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOpts}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="font-dm text-xs uppercase tracking-widest text-slate"
            >
              OUR DOCTORS
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-cormorant text-3xl text-navy md:text-4xl"
            >
              Your doctors
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-2 max-w-xl font-dm text-sm text-slate"
            >
              Experienced GPs who know Woodlands—and who choose to work here because
              of the relationships they build every day.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} className="flex gap-2">
            <button
              type="button"
              aria-label="Previous doctors"
              className="inline-flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-mist bg-cream text-navy md:h-10 md:w-10"
              onClick={() => scrollByCards(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next doctors"
              className="inline-flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-mist bg-cream text-navy md:h-10 md:w-10"
              onClick={() => scrollByCards(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOpts}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            ref={scrollerRef}
            className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {doctors.map((d) => (
              <article
                key={d.name}
                className="group relative w-[220px] flex-shrink-0 overflow-hidden rounded-2xl bg-mist p-5"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-terra transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="relative mx-auto h-[88px] w-[88px] overflow-hidden rounded-full">
                  <Image
                    src={d.imageUrl}
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>
                <h3 className="mt-4 text-center font-cormorant text-lg text-navy">
                  {d.name}
                </h3>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {d.interests.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/70 px-2 py-1 font-dm text-xs text-navy"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/team"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border-2 border-navy px-6 py-3 font-dm text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Meet the full team
          </Link>
        </div>
      </div>
    </section>
  );
}
