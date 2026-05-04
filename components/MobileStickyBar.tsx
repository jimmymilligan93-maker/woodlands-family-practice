import { Phone } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL, PHONE_NUMBER, PHONE_URL } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-[52px] min-h-[44px] items-stretch border-t border-white/10 bg-navy md:hidden">
      <Link
        href={PHONE_URL}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-2 px-3 text-cream"
        aria-label={`Call ${PHONE_NUMBER}`}
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden />
        <span className="font-dm text-sm font-medium">{PHONE_NUMBER}</span>
      </Link>
      <Link
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[44px] min-w-[44px] items-center justify-center bg-terra px-5 font-dm text-sm font-medium text-cream"
      >
        Book Now
      </Link>
    </div>
  );
}
