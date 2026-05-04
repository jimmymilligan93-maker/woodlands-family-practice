import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { PatientAccordion } from "@/components/patient/PatientAccordion";
import { PHONE_NUMBER, PHONE_URL, PRACTICE_ADDRESS } from "@/lib/constants";

export const metadata = {
  title: "Patient Information",
};

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        title="Patient Information"
        subtitle="Everything you need to know before, during and after your visit."
      />
      <section className="bg-cream py-16 md:py-24">
        <PatientAccordion />
      </section>

      <section className="bg-mist py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-3">
          <div>
            <h3 className="font-cormorant text-xl text-navy">Hours</h3>
            <p className="mt-2 font-dm text-sm text-slate">
              Mon–Fri: 8:30am–5:30pm
              <br />
              Sat: 8:30am–11:30am
              <br />
              Sun: Closed
            </p>
          </div>
          <div>
            <h3 className="font-cormorant text-xl text-navy">Address</h3>
            <p className="mt-2 font-dm text-sm text-slate">{PRACTICE_ADDRESS}</p>
          </div>
          <div>
            <h3 className="font-cormorant text-xl text-navy">Phone</h3>
            <a
              href={PHONE_URL}
              className="mt-2 inline-block font-dm text-sm text-terra hover:underline"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}
