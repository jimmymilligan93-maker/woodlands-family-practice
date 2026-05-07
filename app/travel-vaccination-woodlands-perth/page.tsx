import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  BOOKING_URL,
  PHONE_NUMBER,
  PHONE_URL,
  PRACTICE_ADDRESS,
  PRACTICE_ADDRESS_URL,
} from "@/lib/constants";
import { pexelsSizedUrl } from "@/lib/pexels";
import { getTravelVaccinationBandImage } from "@/lib/services/travel-vaccination-band-image";
import { SITE_CANONICAL_BASE } from "@/lib/site";

const PATH = "/travel-vaccination-woodlands-perth";
const PAGE_URL = `${SITE_CANONICAL_BASE}${PATH}`;

const META_DESCRIPTION =
  "Travel vaccines at Woodlands Family Practice, 82 Rosewood Ave Woodlands WA 6018. Travel-health consults - plan trips early. Book online or call (08) 9446 2010.";

export async function generateMetadata(): Promise<Metadata> {
  const band = await getTravelVaccinationBandImage();
  const ogImageSrc =
    band.src.includes("images.pexels.com") ? pexelsSizedUrl(band.src, 1080) : band.src;

  return {
    title: "Travel vaccination Woodlands Perth — GP travel vaccines",
    description: META_DESCRIPTION,
    alternates: { canonical: PATH },
    robots: { index: true, follow: true },
    openGraph: {
      title: "Travel vaccination Woodlands Perth — Woodlands Family Practice",
      description:
        "Doctor-led travel vaccination planning for Woodlands, Perth northern suburbs, and postcode 6018. RACGP accredited clinic with clear fees and online booking.",
      url: PATH,
      type: "website",
      images: [{ url: ogImageSrc, width: 1200, height: 630, alt: band.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Travel vaccination Woodlands Perth",
      description:
        "GP travel vaccines at 82 Rosewood Ave, Woodlands WA 6018. Book online or phone (08) 9446 2010.",
      images: [ogImageSrc],
    },
  };
}

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "why-plan-ahead", label: "Why planning ahead matters" },
  { id: "what-we-do", label: "What we cover in a travel consult" },
  { id: "prepare", label: "How to book and prepare" },
  { id: "fees", label: "Fees and Medicare" },
  { id: "who-not-for", label: "When we are not the right first stop" },
  { id: "faq", label: "FAQ" },
];

const faqItems = [
  {
    q: "Where can I get travel vaccination near Woodlands Perth?",
    a: `Woodlands Family Practice offers GP-led travel health consults and travel-related vaccinations at ${PRACTICE_ADDRESS} when clinically appropriate. Book online or call ${PHONE_NUMBER} and say you need a travel vaccine appointment so reception allows enough time.`,
  },
  {
    q: "How far ahead should I book travel vaccination?",
    a: "Ideally weeks before you fly—not the day before baggage check. Some vaccines use multi-dose schedules or need time to build protection. Last-minute trips still deserve a consult; we simply work with the timeline you have.",
  },
  {
    q: "Do you provide yellow fever vaccination?",
    a: "Yellow fever vaccination is only given where you meet clinical criteria and stock plus credentialing allow. Tell reception your destination and departure date when you book so we confirm whether we can provide it on site or need to direct you elsewhere.",
  },
  {
    q: "Does Medicare cover travel vaccines?",
    a: "Medicare usually covers part of the GP consultation fee; many travel vaccines are paid separately as vaccines or pharmacy items depending on how they are supplied. Our reception team can outline likely costs before you attend.",
  },
  {
    q: "What should I bring to a travel vaccine appointment?",
    a: "Bring your itinerary, past vaccine records, current medicines and allergies, and pregnancy status if relevant. A written list beats trying to remember airport codes while the doctor waits politely.",
  },
];

export default async function TravelVaccinationWoodlandsPerthPage() {
  const bandImage = await getTravelVaccinationBandImage();
  const primaryImageSchemaUrl =
    bandImage.src.includes("images.pexels.com") ? pexelsSizedUrl(bandImage.src, 1080) : bandImage.src;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_CANONICAL_BASE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_CANONICAL_BASE}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Travel vaccination Woodlands Perth",
        item: PAGE_URL,
      },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Woodlands Family Practice",
    url: SITE_CANONICAL_BASE,
    telephone: "+61894462010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82 Rosewood Ave",
      addressLocality: "Woodlands",
      addressRegion: "WA",
      postalCode: "6018",
      addressCountry: "AU",
    },
    medicalSpecialty: ["PrimaryCare"],
  };

  const authorPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Woodlands Family Practice clinical team",
    jobTitle: "General practitioners",
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Woodlands Family Practice",
      url: SITE_CANONICAL_BASE,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Travel vaccination Woodlands Perth",
    url: PAGE_URL,
    description:
      "GP-led travel vaccination planning at Woodlands Family Practice for Woodlands WA 6018 and Perth northern suburbs.",
    isPartOf: { "@type": "WebSite", url: SITE_CANONICAL_BASE, name: "Woodlands Family Practice" },
    about: {
      "@type": "MedicalProcedure",
      name: "Travel vaccination consultation",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Woodlands Family Practice",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: primaryImageSchemaUrl,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <article>
        <PageHero
          title="Travel vaccination in Woodlands, Perth"
          subtitle="GP travel-health consults at 82 Rosewood Ave — serving Woodlands WA 6018 and Perth&apos;s northern suburbs."
        />

        <section className="relative min-h-[320px] w-full overflow-hidden bg-navy md:min-h-[380px]">
          <Image
            src={bandImage.src}
            alt={`Travel vaccination and travel-health consults — ${bandImage.alt}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 560px"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-4xl flex-col justify-center px-6 py-14 md:min-h-[380px]">
            <p className="font-dm text-xs uppercase tracking-widest text-mist/60">
              Travel vaccination Woodlands Perth · Postcode 6018
            </p>
            <p className="mt-4 font-cormorant text-2xl italic leading-snug text-cream md:text-3xl">
              Look—if you are flying soon, sort vaccines before the suitcase lands on the bed. We run proper-length GP consults
              so your itinerary actually matches what you need.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-terra px-7 py-3 font-dm text-sm font-semibold text-cream"
              >
                Book travel consult
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-cream/40 px-7 py-3 font-dm text-sm font-medium text-cream hover:bg-cream/10"
              >
                Call {PHONE_NUMBER}
              </a>
              <a
                href={PRACTICE_ADDRESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-cream/40 px-7 py-3 font-dm text-sm font-medium text-cream hover:bg-cream/10"
              >
                Open map · {PRACTICE_ADDRESS}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <nav aria-label="Breadcrumb" className="font-dm text-xs text-slate">
              <ol className="flex flex-wrap gap-1">
                <li>
                  <Link href="/" className="link-inline">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/services" className="link-inline">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-navy">Travel vaccination Woodlands Perth</li>
              </ol>
            </nav>

            <p className="mt-8 font-dm text-xs uppercase tracking-widest text-slate">
              Woodlands Family Practice · Clinical team
            </p>

            <div id="quick-answer" className="scroll-mt-28 mt-6 rounded-xl border border-mist bg-white p-6 md:p-8">
              <h2 className="font-cormorant text-2xl font-light text-navy md:text-3xl">
                Quick answer
              </h2>
              <p className="mt-4 font-dm text-base leading-relaxed text-slate">
                A <strong className="font-medium text-navy">travel vaccination Woodlands Perth</strong> search usually means you
                want a GP who will read your itinerary, check what protection you already have, recommend what you still need, and
                administer vaccines in clinic when appropriate. That is what we offer at Woodlands Family Practice—as a booked
                consultation with time to think, not a rushed hallway chat.
              </p>
              <p className="mt-4 font-dm text-base leading-relaxed text-slate">
                Phone{" "}
                <a href={PHONE_URL} className="link-inline">
                  {PHONE_NUMBER}
                </a>
                , or use{" "}
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="link-inline">
                  online booking
                </a>{" "}
                and mention <strong className="font-medium text-navy">travel vaccines</strong> so reception blocks adequate minutes.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-mist bg-white p-5 md:p-6">
              <p className="font-dm text-sm font-medium text-navy">On this page</p>
              <ul className="mt-3 space-y-2 font-dm text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="toc-link">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 space-y-6 font-dm text-[15px] leading-relaxed text-slate md:text-base">
              <p>
                January desks at our clinic fill with people holding tickets they bought on Boxing Day. I get the excitement. I
                also see the quiet stress when someone realises certain vaccines need more than one visit.
              </p>
              <p>
                If you live near <strong className="font-medium text-navy">Woodlands</strong>, Innaloo, Scarborough, Karrinyup, or
                anywhere along Perth&apos;s northern corridor, you can plan travel vaccines at{" "}
                <strong className="font-medium text-navy">{PRACTICE_ADDRESS}</strong> without trekking across town twice unless you
                truly need to.
              </p>
              <p>
                Over the years I have watched travellers assume the airport pharmacy sorts everything on departure week. One patient
                flew out believing that until their itinerary included rural regions where timing actually mattered. We mapped what
                she already had, booked what was missing, and she walked out knowing what still needed pharmacy pickup. If you have
                been quietly dreading the vaccine conversation, bring your dates—we translate them into a calm checklist.
              </p>

              <h2
                id="why-plan-ahead"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                Why planning ahead matters
              </h2>
              <p>
                Some vaccines need spacing between doses. Some destinations pair poorly with pregnancy or certain medications. None
                of that shows up in a headline deal from an airline.
              </p>
              <p>
                National guidance reminds travellers to seek professional advice before they go—see{" "}
                <a
                  href="https://www.healthdirect.gov.au/travel-vaccinations"
                  className="link-inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthdirect&apos;s travel vaccinations overview
                </a>{" "}
                and{" "}
                <a
                  href="https://www.smartraveller.gov.au/before-you-go/health"
                  className="link-inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Smartraveller health advice before you travel
                </a>
                . Those sites frame the big picture; your GP applies it to you personally.
              </p>
              <p>
                In my experience, travellers who book early are the easiest to help properly. Last-minute rush rarely suits complex
                itineraries—and that is not me being fussy. It is biology plus airline schedules.
              </p>

              <h2
                id="what-we-do"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                What we cover in a travel consult
              </h2>
              <p>
                You bring itinerary, medical history, and questions. I review immunisation records where available, discuss risks
                tied to your destinations, recommend vaccines when evidence supports them, and document what you received.
              </p>
              <p>
                Yellow fever and other regulated vaccines only happen when criteria, stock, and credentialling align—tell reception
                your country list when you book so we set expectations honestly up front.
              </p>
              <p>
                Not sure which doctor focuses on travel medicine? Browse interests on our{" "}
                <Link href="/team" className="link-inline">
                  team page
                </Link>
                .
              </p>

              <h2
                id="prepare"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                How to book and prepare
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Book a <strong className="font-medium text-navy">travel vaccination appointment</strong>, not a squeezed script
                  slot.
                </li>
                <li>Bring airline dates, accommodation style (resort vs trekking), and prior vaccine cards if you have them.</li>
                <li>List allergies, immune conditions, pregnancy, or chemotherapy—those change recommendations fast.</li>
                <li>Wear sleeves that roll easily; some vaccines land in the upper arm.</li>
              </ul>
              <p className="mt-4">
                Want the wider clinic picture first? Visit{" "}
                <Link href="/services" className="link-inline">
                  Our Services
                </Link>{" "}
                or read how we operate at{" "}
                <Link href="/our-practice" className="link-inline">
                  Our Practice
                </Link>
                .
              </p>

              <h2
                id="fees"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                Fees and Medicare
              </h2>
              <p>
                Woodlands Family Practice privately bills GP consultations. Reception can outline likely fees before you arrive—see{" "}
                <Link href="/patient-info" className="link-inline">
                  Patient Info
                </Link>{" "}
                for billing context.
              </p>
              <p>
                Medicare may rebate part of the consult; vaccine costs often sit separately depending on supply and funding rules.
                Ask when you book if you want a rough total before you commit.
              </p>

              <h2
                id="who-not-for"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                When we are not the right first stop
              </h2>
              <p>
                High fever, chest pain, severe allergic reaction, or anything that feels like an emergency belongs with triple zero
                or an emergency department—not a travel consult diary slot.
              </p>
              <p>
                If you already have a dedicated travel clinic managing exotic itineraries every quarter, stay with them unless you
                simply need bridging paperwork—we honour continuity when it already works.
              </p>

              <p className="rounded-xl border border-mist bg-mist/40 p-5 font-dm text-sm text-slate">
                Ready to book?{" "}
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="link-inline">
                  Book online
                </a>{" "}
                or phone{" "}
                <a href={PHONE_URL} className="link-inline">
                  {PHONE_NUMBER}
                </a>
                . Prefer email first?{" "}
                <Link href="/contact" className="link-inline">
                  Contact us via our clinic contact form
                </Link>
                .
              </p>

              <h2 id="faq" className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl">
                Frequently asked questions
              </h2>
              <dl className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.q} className="border-b border-mist pb-6">
                    <dt className="font-medium text-navy">{item.q}</dt>
                    <dd className="mt-2">{item.a}</dd>
                  </div>
                ))}
              </dl>

              <p className="border-t border-mist pt-8 font-dm text-xs text-slate">
                Information here supports discussion with your GP and does not replace personalised medical advice.
              </p>
            </div>
          </div>
        </section>
      </article>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}
