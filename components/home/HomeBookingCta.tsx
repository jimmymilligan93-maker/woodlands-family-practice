import Link from "next/link";
import { BOOKING_URL, PHONE_NUMBER } from "@/lib/constants";

export function HomeBookingCta() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-cormorant text-4xl font-light text-navy md:text-5xl">
          Ready to see us?
        </h2>
        <p className="mt-4 font-dm text-sm leading-relaxed text-slate md:text-base">
          Book online in a few clicks, or call our friendly reception team if you
          would prefer to speak with someone directly.
        </p>
        <Link
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-terra px-10 py-3 font-dm text-sm font-medium text-cream md:text-base"
        >
          Book Appointment
        </Link>
        <p className="mt-4 font-dm text-sm text-silver">
          Prefer to call? {PHONE_NUMBER}
        </p>
      </div>
    </section>
  );
}
