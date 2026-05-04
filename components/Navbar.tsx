"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BOOKING_URL, PHONE_NUMBER, PHONE_URL } from "@/lib/constants";

const practiceSub = [
  { href: "/our-practice", label: "About the Practice" },
  { href: "/team", label: "Our Team" },
];

const mobileNavTail = [
  { href: "/patient-info", label: "Patient Info" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const linkMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  const transparentNeedsCreamNav =
    !scrolled && pathname !== "/" && pathname !== null;

  const navTextClass = transparentNeedsCreamNav
    ? "text-cream"
    : scrolled
      ? "text-navy"
      : pathname === "/"
        ? "text-navy"
        : "text-cream";

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const headerBgClass = scrolled
    ? "bg-cream/95 shadow-sm backdrop-blur-md"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,box-shadow] duration-300 ease-out ${headerBgClass}`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex min-h-[44px] shrink-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="Woodlands Family Practice"
              width={44}
              height={44}
              className="rounded-full object-cover"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-cormorant text-xl font-normal transition-colors ${navTextClass}`}
              >
                Woodlands Family Practice
              </span>
              <span
                className={`font-dm text-xs tracking-widest transition-colors ${navTextClass}`}
              >
                WOODLANDS
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/services"
              className={`font-dm text-sm font-medium transition-colors hover:text-terra ${navTextClass}`}
            >
              Services
            </Link>
            <div className="group relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 font-dm text-sm font-medium transition-colors hover:text-terra ${navTextClass}`}
              >
                Our Practice
                <ChevronDown className="h-4 w-4" aria-hidden />
              </button>
              <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="min-w-48 rounded-xl border border-mist bg-cream py-2 shadow-lg">
                  {practiceSub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 font-dm text-sm text-navy hover:bg-mist hover:text-terra"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/patient-info"
              className={`font-dm text-sm font-medium transition-colors hover:text-terra ${navTextClass}`}
            >
              Patient Info
            </Link>
            <Link
              href="/news"
              className={`font-dm text-sm font-medium transition-colors hover:text-terra ${navTextClass}`}
            >
              News
            </Link>
            <Link
              href="/contact"
              className={`font-dm text-sm font-medium transition-colors hover:text-terra ${navTextClass}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-terra px-5 py-2.5 font-dm text-sm font-medium text-cream md:inline-flex"
            >
              Book Appointment
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg transition-colors hover:text-terra ${navTextClass}`}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-navy md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-16 shrink-0 items-center justify-between px-6">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-cream"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <motion.div
              className="flex flex-1 flex-col overflow-y-auto px-6 pb-8 pt-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
                hidden: {},
              }}
            >
              <motion.div variants={linkMotion}>
                <Link
                  href="/services"
                  className="block border-b border-white/10 py-3 font-cormorant text-5xl font-light text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  Services
                </Link>
              </motion.div>

              <motion.div variants={linkMotion}>
                <button
                  type="button"
                  className="flex w-full min-h-[44px] items-center justify-between border-b border-white/10 py-3 text-left font-cormorant text-5xl font-light text-cream"
                  onClick={() => setPracticeOpen((p) => !p)}
                  aria-expanded={practiceOpen}
                >
                  Our Practice
                  <ChevronDown
                    className={`h-6 w-6 shrink-0 transition-transform ${practiceOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {practiceOpen ? (
                  <div className="border-b border-white/10 pb-3 pl-6">
                    {practiceSub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block py-2 font-cormorant text-3xl font-light text-mist/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </motion.div>

              {mobileNavTail.map((l) => (
                <motion.div key={l.href} variants={linkMotion}>
                  <Link
                    href={l.href}
                    className="block border-b border-white/10 py-3 font-cormorant text-5xl font-light text-cream"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="shrink-0 space-y-4 px-6 pb-8 pt-2">
              <Link
                href={PHONE_URL}
                className="flex min-h-[44px] items-center justify-center gap-2 font-dm text-lg text-cream"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </Link>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-terra py-3 font-dm text-sm font-medium text-cream"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
