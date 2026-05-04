import Image from "next/image";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { doctors } from "@/lib/doctors";
import { widerTeamImages } from "@/lib/teamWide";

export const metadata = {
  title: "Meet the Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet the Team"
        subtitle="Our doctors bring decades of combined experience and a genuine commitment to your long-term health."
      />
      <section className="relative h-52 w-full overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <p className="max-w-3xl font-cormorant text-2xl italic text-cream/90 md:text-3xl">
            Caring for every member of your family, at every stage of life.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-dm text-xs uppercase tracking-widest text-slate">
            OUR DOCTORS
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <article
                key={d.name}
                className="group relative overflow-hidden rounded-2xl border border-mist bg-mist/60 p-6"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-terra transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="relative mx-auto h-[100px] w-[100px] overflow-hidden rounded-full">
                  <Image
                    src={d.imageUrl}
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <h2 className="mt-4 text-center font-cormorant text-xl text-navy">
                  {d.name}
                </h2>
                <p className="mt-1 text-center font-dm text-xs text-slate">
                  {d.qualifications}
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {d.interests.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/80 px-2 py-1 font-dm text-xs text-navy"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-dm text-sm leading-relaxed text-slate">
                  {d.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-center font-dm text-[10px] uppercase tracking-[0.22em] text-slate/70 md:mb-3">
            Nurses · Practice management · Reception
          </p>

          {/* Tight collage: identical 4:3 tiles; object-cover fills each frame (crop tuned to keep faces). */}
          <div className="grid grid-cols-1 gap-1.5 overflow-hidden rounded-2xl border border-mist/90 bg-navy/[0.03] p-1.5 shadow-sm ring-1 ring-navy/5 md:grid-cols-2 md:gap-1.5 md:p-2">
            <figure className="group flex flex-col overflow-hidden rounded-xl bg-mist">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={widerTeamImages.nurses}
                  alt="Nursing team at Woodlands Family Practice"
                  fill
                  className="object-cover object-[50%_45%]"
                  sizes="(min-width: 768px) 35vw, 100vw"
                />
              </div>
              <figcaption className="border-t border-navy/5 bg-cream/90 px-2 py-2 text-center md:px-3 md:py-2">
                <span className="block font-dm text-[9px] uppercase tracking-widest text-slate/55">
                  Nursing
                </span>
                <span className="mt-0.5 block font-dm text-[11px] leading-snug text-slate md:text-xs">
                  Ann, Kaylene, Ruth &amp; Claire
                </span>
              </figcaption>
            </figure>

            <figure className="flex flex-col overflow-hidden rounded-xl bg-mist">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={widerTeamImages.practiceManagement}
                  alt="Practice management team"
                  fill
                  className="object-cover object-[50%_18%]"
                  sizes="(min-width: 768px) 35vw, 100vw"
                />
              </div>
              <figcaption className="border-t border-navy/5 bg-cream/90 px-2 py-2 text-center md:px-3 md:py-2">
                <span className="block font-dm text-[9px] uppercase tracking-widest text-slate/55">
                  Practice management
                </span>
                <span className="mt-0.5 block font-dm text-[11px] leading-snug text-slate md:text-xs">
                  Clarissa &amp; Linda
                </span>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-xl bg-mist md:col-span-2">
              <div className="relative w-full bg-mist" style={{ aspectRatio: "1536/346" }}>
                <Image
                  src={widerTeamImages.reception}
                  alt="Reception team at Woodlands Family Practice"
                  fill
                  className="object-contain object-bottom"
                  sizes="(min-width: 768px) 72rem, 100vw"
                />
              </div>
              <figcaption className="flex flex-col items-center gap-0.5 border-t border-navy/5 bg-cream/90 px-2 py-2 text-center md:flex-row md:justify-center md:gap-2 md:py-1.5">
                <span className="font-dm text-[9px] uppercase tracking-widest text-slate/55">
                  Reception
                </span>
                <span className="hidden text-slate/30 md:inline" aria-hidden>
                  ·
                </span>
                <span className="font-dm text-[11px] leading-snug text-slate md:text-xs">
                  Ruth, Georgina, Carolynda, Norreen, Karen, Jenn, Leanne, Shelby
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}
