import Image from "next/image";
import Link from "next/link";
import {
  BOOKING_URL,
  PHONE_NUMBER,
  PHONE_URL,
  PRACTICE_ADDRESS,
  PRACTICE_ADDRESS_URL,
  PRACTICE_EMAIL,
} from "@/lib/constants";

const colClass = "mb-1.5 block font-dm text-sm text-mist/80 hover:text-cream";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-6 pb-5 pt-10">
        <div className="mb-10 flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src="/logo.png"
            alt="Woodlands Family Practice"
            width={48}
            height={48}
            className="mb-4 rounded-full object-cover"
          />
          <p className="font-cormorant text-2xl text-cream">
            Woodlands Family Practice
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-dm text-xs uppercase tracking-widest text-mist/75">
              Navigate
            </h3>
            <Link href="/" className={colClass}>
              Home
            </Link>
            <Link href="/services" className={colClass}>
              Services
            </Link>
            <Link href="/our-practice" className={colClass}>
              Our Practice
            </Link>
            <Link href="/team" className={colClass}>
              Our Team
            </Link>
            <Link href="/patient-info" className={colClass}>
              Patient Info
            </Link>
            <Link href="/blog" className={colClass}>
              Blog
            </Link>
            <Link href="/contact" className={colClass}>
              Contact
            </Link>
          </div>
          <div>
            <h3 className="mb-3 font-dm text-xs uppercase tracking-widest text-mist/75">
              Services
            </h3>
            <Link href="/services" className={colClass}>
              Family Medicine
            </Link>
            <Link href="/services" className={colClass}>
              Women&apos;s Health
            </Link>
            <Link href="/services" className={colClass}>
              Skin Checks
            </Link>
            <Link href="/services" className={colClass}>
              Travel Medicine
            </Link>
            <Link href="/services" className={colClass}>
              Preventive Health
            </Link>
          </div>
          <div>
            <h3 className="mb-3 font-dm text-xs uppercase tracking-widest text-mist/75">
              Practice
            </h3>
            <Link href="/our-practice" className={colClass}>
              About Us
            </Link>
            <Link href={BOOKING_URL} className={colClass} target="_blank" rel="noopener noreferrer">
              Book Online
            </Link>
            <Link href="/privacy-policy" className={colClass}>
              Privacy Policy
            </Link>
          </div>
          <div>
            <h3 className="mb-3 font-dm text-xs uppercase tracking-widest text-mist/75">
              Contact
            </h3>
            <a href={PHONE_URL} className={colClass}>
              {PHONE_NUMBER}
            </a>
            <a href={`mailto:${PRACTICE_EMAIL}`} className={colClass}>
              {PRACTICE_EMAIL}
            </a>
            <a href={PRACTICE_ADDRESS_URL} className={colClass}>
              {PRACTICE_ADDRESS}
            </a>
            <p className="mb-1.5 font-dm text-sm text-mist/80">
              After hours:{" "}
              <a href="tel:1300644483" className="hover:text-cream">
                1300 644 483
              </a>
            </p>
            <p className="font-dm text-sm text-mist/80">
              Emergency:{" "}
              <a href="tel:000" className="hover:text-cream">
                000
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-3 font-dm text-xs text-mist/70 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Woodlands Family Practice. All rights reserved.
          </span>
          <span>Site by Milligan Web Design</span>
        </div>
      </div>
    </footer>
  );
}
