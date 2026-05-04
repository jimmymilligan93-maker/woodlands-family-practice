import Link from "next/link";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Heart, Home, Shield, Star } from "lucide-react";

export const metadata = {
  title: "Our Practice",
};

const values = [
  {
    title: "Excellence",
    icon: Star,
    body: "We hold ourselves to high clinical and service standards, regularly reviewing how we work so patients receive up-to-date, evidence-based care.",
  },
  {
    title: "Compassion",
    icon: Heart,
    body: "We listen first—because understanding your concerns, values, and circumstances is essential to good general practice.",
  },
  {
    title: "Respect",
    icon: Shield,
    body: "Every patient is treated with dignity. We honour your time, privacy, and autonomy in decisions about your health.",
  },
  {
    title: "Community",
    icon: Home,
    body: "Woodlands is home for many of us too. Supporting local families, schools, and organisations is part of who we are.",
  },
];

export default function OurPracticePage() {
  return (
    <>
      <PageHero
        title="Our Practice"
        subtitle="Built on trust, driven by values, committed to this community since 1998."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-cormorant text-3xl font-light text-navy md:text-4xl">
            A practice built by doctors, for patients.
          </h2>
          <p className="mt-6 font-dm text-sm leading-relaxed text-slate md:text-base">
            Woodlands Family Practice traces its roots to 1998, when two neighbouring
            clinics merged to better serve the growing Woodlands community. Founding
            doctors including Dr Mary McNulty and Dr Nigel Jones helped shape a culture
            where continuity, kindness, and clinical rigour could coexist.
          </p>
          <p className="mt-4 font-dm text-sm leading-relaxed text-slate md:text-base">
            Dr Hayden Elderfield later joined the partnership, strengthening the
            practice&apos;s commitment to training and comprehensive family medicine.
            Today the practice is led by Dr Elizabeth Elderfield and Dr David Jameson,
            supported by a team of 11 GPs who share a simple goal: to look after
            Woodlands families as we would our own.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v) => (
              <article
                key={v.title}
                className="group rounded-2xl border border-mist border-l-4 border-l-terra/40 bg-white p-8 transition-colors hover:border-l-terra"
              >
                <div className="mb-4 inline-flex rounded-full bg-mist p-3 text-terra">
                  <v.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-cormorant text-2xl text-navy">{v.title}</h3>
                <p className="mt-3 font-dm text-sm leading-relaxed text-slate">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-cormorant text-2xl text-navy md:text-3xl">
              QPA Accreditation
            </h2>
            <p className="mt-4 font-dm text-sm leading-relaxed text-slate">
              Our practice participates in regular accreditation against the Royal
              Australian College of General Practitioners standards. This independent
              review helps us strengthen systems for safety, infection control, privacy,
              and continuous quality improvement.
            </p>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl text-navy md:text-3xl">
              Training Practice
            </h2>
            <p className="mt-4 font-dm text-sm leading-relaxed text-slate">
              We are proud to train the next generation of GPs and medical students.
              Having registrars and students on site keeps our whole team learning—and
              patients are always asked for consent before a learner joins a
              consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-cormorant text-2xl font-light text-cream md:text-3xl">
            Your privacy matters
          </h2>
          <p className="mt-4 font-dm text-sm leading-relaxed text-mist/80">
            We collect and handle personal information strictly for the purpose of
            providing high-quality healthcare, in line with Australian privacy law. For
            full details on how we store, use, and share information, please read our
            comprehensive privacy policy.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 font-dm text-sm md:flex-row md:gap-6">
            <Link href="/privacy-policy" className="text-terra hover:underline">
              View privacy policy
            </Link>
            <a
              href="mailto:feedback@wfpwa.com.au"
              className="text-terra hover:underline"
            >
              Email feedback@wfpwa.com.au
            </a>
          </div>
        </div>
      </section>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}
