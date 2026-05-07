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
import { SITE_CANONICAL_BASE } from "@/lib/site";
import { SITE_HERO_VISION_REMOTE, siteHeroVisionBandUrl } from "@/lib/site-images";

const PATH = "/skin-check-woodlands-perth";
const PAGE_URL = `${SITE_CANONICAL_BASE}${PATH}`;
/** Band image tuned for mobile LCP (~488 CSS px wide); if WP ignores ?w=, use a local JPEG under public/images/ instead. */
const BAND_LCP_SRC = siteHeroVisionBandUrl(640);
const OG_BAND_IMAGE = siteHeroVisionBandUrl(1200, "85");

export const metadata: Metadata = {
  title: "Skin checks Woodlands Perth — GP skin checks near 6018",
  description:
    "GP-led skin checks at Woodlands Family Practice, 82 Rosewood Ave Woodlands WA 6018. Whole-body screening, lesion review, and referrals when needed. Book online or call (08) 9446 2010.",
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Skin checks Woodlands Perth — Woodlands Family Practice",
    description:
      "Doctor-led skin checks for Woodlands, Perth northern suburbs, and postcode 6018. RACGP accredited clinic with clear fees and online booking.",
    url: PATH,
    type: "website",
    images: [{ url: OG_BAND_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin checks Woodlands Perth",
    description:
      "GP skin checks at 82 Rosewood Ave, Woodlands WA 6018. Book online or phone (08) 9446 2010.",
    images: [OG_BAND_IMAGE],
  },
};

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "why-perth", label: "Why skin checks matter in Perth and WA" },
  { id: "what-we-do", label: "What we do in a skin check appointment" },
  { id: "prepare", label: "How to book and prepare" },
  { id: "fees", label: "Fees and Medicare" },
  { id: "who-not-for", label: "When we are not the right first stop" },
  { id: "faq", label: "FAQ" },
];

const faqItems = [
  {
    q: "Where can I get a skin check near Woodlands Perth?",
    a: `Woodlands Family Practice offers GP-led skin checks at ${PRACTICE_ADDRESS}. Book online or call ${PHONE_NUMBER} and ask for a dedicated skin check appointment.`,
  },
  {
    q: "How often should I have a skin check in WA?",
    a: "Many adults benefit from an annual review if they have sun damage risk factors or a history of skin cancer; others may suit a longer interval once baseline lesions are mapped. Your GP recommends timing based on your skin type, history, and examination findings.",
  },
  {
    q: "What happens during a GP skin check?",
    a: "You discuss concerns and history, then your doctor examines your skin systematically and notes lesions that need monitoring, photography, or biopsy. If something needs urgent specialist input, you leave with a clear plan.",
  },
  {
    q: "Does Medicare cover skin checks?",
    a: "Medicare covers part of a standard GP consultation fee when billing applies; it does not usually cover every mole-mapping service as a separate item in the way some private clinics advertise. Our reception team can explain likely costs before you attend.",
  },
  {
    q: "Can you remove a mole at Woodlands Family Practice?",
    a: "Some GPs perform minor procedures when clinically appropriate. Whether removal suits you depends on the lesion and the consultation. Ask when you book if you need both check and procedure discussed.",
  },
];

export default function SkinCheckWoodlandsPerthPage() {
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
        name: "Skin checks Woodlands Perth",
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
    name: "Skin checks Woodlands Perth",
    url: PAGE_URL,
    description:
      "GP-led skin checks at Woodlands Family Practice for Woodlands WA 6018 and Perth northern suburbs.",
    isPartOf: { "@type": "WebSite", url: SITE_CANONICAL_BASE, name: "Woodlands Family Practice" },
    about: {
      "@type": "MedicalProcedure",
      name: "Skin cancer screening",
    },
    reviewedBy: {
      "@type": "Organization",
      name: "Woodlands Family Practice",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SITE_HERO_VISION_REMOTE,
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
          title="Skin checks in Woodlands, Perth"
          subtitle="GP-led screening at 82 Rosewood Ave — serving Woodlands WA 6018 and Perth&apos;s northern suburbs."
        />

        <section className="relative min-h-[320px] w-full overflow-hidden bg-navy md:min-h-[380px]">
          <Image
            src={BAND_LCP_SRC}
            alt="Woodlands Family Practice clinic setting — skin check appointments available for Woodlands and Perth northern suburbs"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 560px"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative z-10 mx-auto flex min-h-[320px] max-w-4xl flex-col justify-center px-6 py-14 md:min-h-[380px]">
            <p className="font-dm text-xs uppercase tracking-widest text-mist/60">
              Skin check Woodlands Perth · Postcode 6018
            </p>
            <p className="mt-4 font-cormorant text-2xl italic leading-snug text-cream md:text-3xl">
              If you want a proper skin check without leaving the northern corridor, you can book a
              dedicated appointment with our doctors at Woodlands Family Practice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-terra px-7 py-3 font-dm text-sm font-semibold text-cream"
              >
                Book a skin check
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
                <li className="text-navy">Skin checks Woodlands Perth</li>
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
                A <strong className="font-medium text-navy">skin check Woodlands Perth</strong> patients
                typically mean booking a full-body skin examination with a GP who knows what to do when a
                lesion looks harmless, odd, or outright suspicious. At Woodlands Family Practice we run
                that appointment as its own consult so there is time to examine properly and explain what
                you should watch between visits.
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
                and mention <strong className="font-medium text-navy">skin check</strong> so reception books
                enough time.
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
                After long weekends I usually walk back into a pile of requests that all boil down to one
                worry: a spot someone has stared at in the mirror for weeks but kept forgetting to mention.
                I get it. Life is busy. Skin changes quietly.
              </p>
              <p>
                If you have been circling the idea of a skin check near{" "}
                <strong className="font-medium text-navy">Woodlands</strong>, Innaloo, Scarborough,
                Karrinyup, or anywhere along Perth&apos;s northern corridor, this page explains how we run the
                appointment at{" "}
                <strong className="font-medium text-navy">{PRACTICE_ADDRESS}</strong>.
              </p>
              <p>
                Over the years I have seen patients delay because they thought the lesion looked too small
                to bother anyone. One woman booked after noticing a flat pink patch that had grown slowly on
                her shin — nothing dramatic on TV, just quietly changing. She assumed she was overreacting.
                Having it photographed and monitored meant she stopped guessing every shower. If something
                similar has been sitting in the back of your mind, that alone is worth a calm consult.
              </p>

              <h2
                id="why-perth"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                Why skin checks matter in Perth and WA
              </h2>
              <p>
                WA carries some of the heaviest melanoma burden in the country, which makes routine checks
                sensible rather than dramatic (Australian Institute of Health and Welfare). Sun intensity here
                is not theoretical — it shows up on skin earlier than many people expect.
              </p>
              <p>
                Roughly two in three Australians will be diagnosed with skin cancer by age seventy (Cancer
                Council Australia). That figure is not here to frighten you — it explains why a regular
                screening rhythm belongs beside sunscreen, hats, and shade habits when you live this close to
                the coast. Practical prevention guidance sits with{" "}
                <a
                  href="https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety"
                  className="link-inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cancer Council Australia
                </a>
                .
              </p>

              <h2
                id="what-we-do"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                What we do in a skin check appointment
              </h2>
              <p>
                You describe spots that worry you and any family history of melanoma. I examine skin with
                adequate lighting, note lesion patterns, and explain whether we photograph, monitor, biopsy,
                or refer on urgency.
              </p>
              <p>
                Some of our doctors perform procedural dermatoscopy work within dedicated appointments — if
                you need a comprehensive mole-mapping-style review, tell reception when you book so we match
                you with the right clinician and slot length. Browse clinician interests on our{" "}
                <Link href="/team" className="link-inline">
                  team page
                </Link>
                .
              </p>
              <p>
                For trustworthy background reading on warning signs, see the{" "}
                <a
                  href="https://www.healthdirect.gov.au/skin-cancer"
                  className="link-inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthdirect guide to skin cancer symptoms and when to see a doctor
                </a>
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
                  Request a <strong className="font-medium text-navy">skin check appointment</strong> — not a
                  routine script-only slot — when you call or book online.
                </li>
                <li>Wear clothing you can adjust easily so we can examine trunk and limbs.</li>
                <li>
                  Skip nail polish if you want nails examined, and mention prior melanoma or transplant meds.
                </li>
                <li>
                  Bring a support person if you feel anxious. Rooms stay private and consultations stay frank.
                </li>
              </ul>
              <p className="mt-4">
                Want broader context on everything else we offer? Visit{" "}
                <Link href="/services" className="link-inline">
                  Our Services
                </Link>{" "}
                or learn how we work at{" "}
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
                Woodlands Family Practice is a private billing clinic. Reception can outline likely fees when
                you book so there are no surprises at the desk — see{" "}
                <Link href="/patient-info" className="link-inline">
                  Patient Info
                </Link>{" "}
                for billing context.
              </p>
              <p>
                Medicare may rebate part of the GP consultation; gap amounts depend on the appointment length
                and complexity. Ask reception if you need an estimate for both consultation and any planned
                procedure.
              </p>

              <h2
                id="who-not-for"
                className="scroll-mt-28 pt-4 font-cormorant text-2xl font-light text-navy md:text-3xl"
              >
                When we are not the right first stop
              </h2>
              <p>
                If a lesion is bleeding uncontrollably, spreading explosively, or comes with sudden neurological
                symptoms, ring triple zero or attend an emergency department. Routine GP screening waits until
                those emergencies settle.
              </p>
              <p>
                If you already see a dermatologist every three months for high-risk surveillance, continue
                that rhythm — we can still help with copies of reports or bridging appointments when travel or
                timing slips.
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
                Information here supports discussion with your GP and does not replace personalised medical
                advice.
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
