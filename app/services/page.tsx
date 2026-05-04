import Image from "next/image";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ServiceCategories } from "@/components/services/ServiceCategories";
import { ServiceIntroStats } from "@/components/services/ServiceIntroStats";

export const metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive care for every stage of life — all under one roof."
      />
      <section className="relative min-h-[420px] w-full overflow-hidden bg-navy">
        <Image
          src="https://wfpwa.com.au/wp-content/uploads/2022/10/vision-image.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
          <blockquote className="font-cormorant text-2xl italic leading-snug text-cream md:text-4xl">
            Quality healthcare starts with trusted relationships — and that is what
            we have been building in Woodlands for over 25 years.
          </blockquote>
          <div className="mx-auto my-10 h-px w-16 bg-terra" aria-hidden />
          <ServiceIntroStats />
        </div>
      </section>
      <ServiceCategories />
      <BookingCtaBanner />
      <Footer />
    </>
  );
}
