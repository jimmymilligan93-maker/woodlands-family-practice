import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export function BookingCtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #FAF7F2 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-cormorant text-3xl font-light text-cream md:text-4xl">
          Book an appointment today
        </h2>
        <p className="mt-3 font-dm text-sm text-mist/70 md:text-base">
          Choose your preferred GP and a time that suits you through our secure
          online booking system.
        </p>
        <Link
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg bg-terra px-8 py-3.5 font-dm text-sm font-semibold text-cream"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
