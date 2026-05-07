import { Phone } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL, PHONE_NUMBER, PHONE_URL } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex min-h-[52px] items-stretch border-t border-white/10 bg-navy md:hidden">
      <Link
        href={PHONE_URL}
        className="flex min-h-[52px] min-w-0 flex-1 items-center justify-center gap-2 px-4 py-3 text-cream"
        aria-label={`Call ${PHONE_NUMBER}`}
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden />
        <span className="font-dm text-sm font-semibold">{PHONE_NUMBER}</span>
      </Link>
      <Link
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] min-w-[120px] shrink-0 items-center justify-center bg-terra px-6 py-3 font-dm text-sm font-semibold text-cream"
      >
        Book Now
      </Link>
    </div>
  );
}
