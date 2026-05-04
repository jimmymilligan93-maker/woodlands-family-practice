import { ContactForm } from "@/components/contact/ContactForm";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  PHONE_NUMBER,
  PHONE_URL,
  PRACTICE_ADDRESS,
  PRACTICE_ADDRESS_URL,
  PRACTICE_EMAIL,
} from "@/lib/constants";
import { Clock, Mail, MapPin, Moon, Phone, Siren } from "lucide-react";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We are here to help. Reach out by phone, email or use the form below."
      />
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-dm text-sm font-semibold text-navy">Phone</h3>
                <a
                  href={PHONE_URL}
                  className="mt-1 inline-flex min-h-[44px] items-center font-dm text-sm text-terra hover:underline"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-dm text-sm font-semibold text-navy">Email</h3>
                <a
                  href={`mailto:${PRACTICE_EMAIL}`}
                  className="mt-1 inline-flex min-h-[44px] items-center break-all font-dm text-sm text-terra hover:underline"
                >
                  {PRACTICE_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-dm text-sm font-semibold text-navy">Address</h3>
                <a
                  href={PRACTICE_ADDRESS_URL}
                  className="mt-1 inline-flex min-h-[44px] items-center font-dm text-sm text-terra hover:underline"
                >
                  {PRACTICE_ADDRESS}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-dm text-sm font-semibold text-navy">Hours</h3>
                <p className="mt-1 font-dm text-sm text-slate">
                  Mon–Fri: 8:30am–5:30pm
                  <br />
                  Sat: 8:30am–11:30am
                  <br />
                  Sun: Closed
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-mist bg-mist/60 p-6">
              <h3 className="font-dm text-sm font-semibold text-navy">After hours</h3>
              <div className="mt-4 flex gap-3">
                <Moon className="mt-0.5 h-5 w-5 text-navy" aria-hidden />
                <div>
                  <p className="font-dm text-sm text-slate">Night Doctor</p>
                  <a href="tel:1300644483" className="font-dm text-sm text-terra hover:underline">
                    1300 644 483
                  </a>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Siren className="mt-0.5 h-5 w-5 text-navy" aria-hidden />
                <div>
                  <p className="font-dm text-sm text-slate">Emergency</p>
                  <a href="tel:000" className="font-dm text-sm text-terra hover:underline">
                    000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <iframe
            title="Woodlands Family Practice on Google Maps"
            src="https://maps.google.com/maps?q=82+Rosewood+Ave+Woodlands+WA+6018&output=embed"
            className="h-[400px] w-full rounded-xl border border-mist"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}
