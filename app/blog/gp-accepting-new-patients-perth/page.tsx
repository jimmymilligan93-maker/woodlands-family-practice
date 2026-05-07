import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { getGpAcceptingNewPatientsPerthImages } from "@/lib/blog/gp-accepting-new-patients-perth-images";
import {
  BOOKING_URL,
  PHONE_NUMBER,
  PHONE_URL,
  PRACTICE_ADDRESS,
} from "@/lib/constants";
import { pexelsSizedUrl } from "@/lib/pexels";
import { SITE_CANONICAL_BASE } from "@/lib/site";

const PAGE_PATH = "/blog/gp-accepting-new-patients-perth";
const PAGE_URL = `${SITE_CANONICAL_BASE}${PAGE_PATH}`;
const DATE_PUBLISHED = "2026-05-07";
const DATE_PUBLISHED_ISO = "2026-05-07T09:00:00+08:00";
const DATE_MODIFIED = "2026-05-07";
const DATE_MODIFIED_ISO = "2026-05-07T16:00:00+08:00";
/** Keeps full title tag inside ~50–60 characters including the site suffix from the root layout. */
const META_TITLE = "GP accepting new patients Perth";
const META_DESCRIPTION =
  "Finding a Perth GP accepting new patients: Healthdirect search, reception questions, Medicare prep & Woodlands booking online or by phone. Call (08) 9446 2010.";
const OG_DESCRIPTION =
  "Finding an ongoing GP in Perth when lists close quickly: trusted directories, scripts for reception, Medicare paperwork, first appointment lengths, and honest limits.";
const TWITTER_DESCRIPTION =
  "Find a Perth GP taking new patients: search tools, what to ask clinics, Medicare basics, first visits & booking at Woodlands Family Practice.";

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "why-search-feels-chaos", label: "Why the search feels chaotic" },
  { id: "official-tools", label: "Official tools worth bookmarking" },
  { id: "lists-language", label: "Closed lists and accepting patients" },
  { id: "reception-script", label: "A reception script that saves hours" },
  { id: "medicare-records", label: "Medicare, enrolment, and records" },
  { id: "first-booking", label: "How I recommend booking your first visit" },
  { id: "wrong-door", label: "When a routine clinic appointment is the wrong door" },
  {
    id: "continuity-next",
    label: "Continuity once urgent questions are answered",
  },
  { id: "faq", label: "FAQ" },
];

const faqItems = [
  {
    question: "How do I find a GP accepting new patients in Perth?",
    answer:
      "Use Healthdirect’s Australian health services search. Pick general practice, enter your suburb or postcode, and shortlist a few clinics. Then ring reception and ask straight up whether any doctor at that clinic is taking new patients for ongoing care. Facebook threads go stale fast—the answer that matters is the one you get from the clinic.",
  },
  {
    question: "What is the fastest way to check if a Perth clinic is taking new patients?",
    answer:
      "Pick up the phone. Mid-morning on a weekday is usually kinder than first thing Monday. Say where you live, say you have Medicare (or what cover you have), and ask if any GP is enrolling new patients right now. Email often waits.",
  },
  {
    question: "Do I need a Medicare card to enrol with a new GP?",
    answer:
      "Most people link routine GP visits to Medicare, so bring your Medicare card if you have one—digital is fine if it reads clearly. Bring photo ID too. If your situation is unusual (visitor visa, overseas student), tell reception when you book so they can guide you.",
  },
  {
    question: "How long should I book for a first appointment at a new clinic?",
    answer:
      "Book longer than a quick \"script-only\" slot if you are new to the clinic. Paperwork takes time. So does catching up on preventive checks if you have been without a regular GP for a while.",
  },
  {
    question: "What should I bring to my first GP appointment?",
    answer:
      "Bring a list of your medicines (including vitamins and over-the-counter tablets), any allergies, vaccine records if you have them, and letters from specialists if you are coming from interstate. Old pathology results help too.",
  },
  {
    question: "Can I see a GP in Perth if I am visiting from interstate?",
    answer:
      "Yes—often you can be seen for a one-off problem while you are here. If you are moving permanently, you will still want a regular GP once you land long-term. Bring enough medication for your stay where possible.",
  },
  {
    question: "What if every Perth clinic I call says lists are closed?",
    answer:
      "Expand your search to neighbouring suburbs. Lists open and close as doctors arrive, leave, or come back from leave. Try again every couple of weeks. Being polite on the phone matters—receptionists remember.",
  },
  {
    question: "Is bulk billing the same as accepting new patients?",
    answer:
      "No. Bulk billing is about how the bill is paid and what gap you pay on the day. \"Taking new patients\" is simply whether the clinic has room on a doctor’s list. A clinic can bulk bill and still be full—or privately bill and still say yes.",
  },
];

function MidPostImage({
  src,
  alt,
  photographer,
  photographerUrl,
}: {
  src: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}) {
  const isPexels = photographerUrl.includes("pexels.com");
  return (
    <figure className="mt-10 overflow-hidden rounded-2xl border border-mist bg-mist/25">
      <Image
        src={src}
        alt={alt}
        width={680}
        height={383}
        className="h-auto w-full object-cover"
        sizes="(min-width: 768px) 680px, 100vw"
        loading="lazy"
      />
      <figcaption className="border-t border-mist bg-white px-4 py-2 font-dm text-xs text-slate">
        Photo by{" "}
        <a
          href={photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-inline"
        >
          {photographer || "Contributor"}
        </a>
        {isPexels ? " on Pexels" : " on Unsplash"}
      </figcaption>
    </figure>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const images = await getGpAcceptingNewPatientsPerthImages();
  const hero = images[0];
  const ogImageSrc =
    hero?.src && hero.src.includes("images.pexels.com")
      ? pexelsSizedUrl(hero.src, 1080)
      : hero?.src;

  return {
    title: META_TITLE,
    description: META_DESCRIPTION,
    alternates: {
      canonical: PAGE_PATH,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "How do I find a GP accepting new patients in Perth? | Woodlands Family Practice",
      description: OG_DESCRIPTION,
      type: "article",
      url: PAGE_URL,
      publishedTime: DATE_PUBLISHED_ISO,
      modifiedTime: DATE_MODIFIED_ISO,
      ...(ogImageSrc
        ? {
            images: [
              {
                url: ogImageSrc,
                width: 1200,
                height: 630,
                alt: hero?.alt ?? "",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: "How do I find a GP accepting new patients in Perth?",
      description: TWITTER_DESCRIPTION,
      ...(ogImageSrc ? { images: [ogImageSrc] } : {}),
    },
  };
}

export default async function GpAcceptingNewPatientsPerthPage() {
  const images = await getGpAcceptingNewPatientsPerthImages();
  const heroImage = images[0];
  const midImage = images[1] ?? images[0];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_CANONICAL_BASE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CANONICAL_BASE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Finding a GP in Perth",
        item: PAGE_URL,
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Woodlands Family Practice clinical team",
    jobTitle: "General practitioners",
    url: `${SITE_CANONICAL_BASE}/team`,
    worksFor: {
      "@type": "MedicalOrganization",
      name: "Woodlands Family Practice",
      url: SITE_CANONICAL_BASE,
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How do I find a GP accepting new patients in Perth?",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: {
      "@type": "Person",
      name: "Woodlands Family Practice clinical team",
      url: `${SITE_CANONICAL_BASE}/team`,
    },
    publisher: {
      "@type": "Organization",
      name: "Woodlands Family Practice",
      url: SITE_CANONICAL_BASE,
    },
    image: heroImage?.src ? [heroImage.src] : undefined,
    description: META_DESCRIPTION,
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
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <article className="relative bg-cream pb-28">
        <a
          href="#page-top"
          className="fixed bottom-24 right-4 z-40 flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-navy text-sm font-semibold text-cream shadow-lg ring-1 ring-mist/40 transition-colors hover:bg-navy/90 focus:outline-none focus:ring-2 focus:ring-terra focus:ring-offset-2 md:bottom-6 md:right-6"
          aria-label="Back to top of article"
        >
          Top
        </a>

        <section id="page-top" className="relative min-h-[460px] w-full overflow-hidden bg-navy">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 720px"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative z-10 mx-auto flex min-h-[460px] w-full max-w-4xl flex-col justify-end px-6 pb-16 pt-28 md:pb-20 md:pt-32">
            <nav aria-label="Breadcrumb" className="font-dm text-xs text-mist/80">
              <ol className="flex flex-wrap gap-1">
                <li>
                  <Link href="/" className="text-cream hover:text-mist hover:underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="text-cream hover:text-mist hover:underline">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-cream">Finding a GP in Perth</li>
              </ol>
            </nav>
            <p className="mt-6 font-dm text-xs uppercase tracking-[0.16em] text-mist/80">
              Finding a GP · Perth · Medicare
            </p>
            <h1 className="mt-3 max-w-3xl font-cormorant text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
              How do I find a GP accepting new patients in Perth?
            </h1>
            <p className="mt-5 font-dm text-sm text-mist/80">
              By{" "}
              <Link href="/team" className="text-cream underline decoration-mist/50 underline-offset-2 hover:text-mist">
                Woodlands Family Practice clinical team
              </Link>
              <span aria-hidden> · </span>
              <span className="sr-only">Published </span>
              <time dateTime={DATE_PUBLISHED_ISO}>{DATE_PUBLISHED}</time>
              <span aria-hidden> · </span>
              <span className="sr-only">Last updated </span>
              Last updated <time dateTime={DATE_MODIFIED_ISO}>{DATE_MODIFIED}</time>
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 pt-12 md:pt-16">
          <section
            aria-label="About the author"
            className="rounded-2xl border border-mist bg-white p-6 md:p-7"
          >
            <p className="font-dm text-xs uppercase tracking-[0.14em] text-slate">About the authors</p>
            <p className="mt-3 font-dm text-base leading-7 text-slate">
              This guide is written by the{" "}
              <Link href="/team" className="link-inline">
                Woodlands Family Practice clinical team
              </Link>
              —RACGP-accredited GPs at {PRACTICE_ADDRESS}. We field questions about how do I find a GP accepting new patients in
              Perth every week from newcomers, young families, and people who have just moved north of the river.
            </p>
          </section>

          <div className="mt-10 rounded-2xl border border-terra/30 bg-terra/10 p-6 md:p-7">
            <p className="font-dm text-xs uppercase tracking-[0.14em] text-slate">On this page</p>
            <ul className="mt-4 grid gap-2 font-dm text-sm text-navy md:grid-cols-2">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="toc-link">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 space-y-7 font-dm text-base leading-8 text-slate md:mt-14">
            <h2 id="quick-answer" className="scroll-mt-28 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Quick answer
            </h2>
            <p>
              I still hear parents on speakerphone outside school, checking whether any clinic nearby will take new patients before
              hay fever season kicks in.
            </p>
            <p>
              Look—here&apos;s the straight answer to how do I find a GP accepting new patients in Perth. Search a trusted list,
              then ring clinics and ask clearly. Have your Medicare details handy. Book a proper-length first visit when someone says
              yes.
            </p>
            <p>
              I know how tedious this feels. Two suburbs can sit side by side and still have completely different waitlists on the
              same week.
            </p>
            <p>
              Over the years I have watched newcomers treat ED like a drop-in GP service because nobody explained how referrals work
              here. One teacher moved from interstate and landed in emergency several times for problems a clinic visit could have
              sorted. Once she understood Medicare basics and booked properly, the panic eased. If that story rings true for you, you
              are not silly—you are new to the system.
            </p>

            <h2
              id="why-search-feels-chaos"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              Why finding a GP accepting new patients in Perth feels chaotic
            </h2>
            <p>
              Online chats move fast. Someone posts “this clinic bulk bills” on Monday and by Thursday half of it is outdated—but the
              screenshot keeps circulating anyway.
            </p>
            <p>
              Reception cannot magic extra appointments out of thin air. Doctors go on leave. Babies arrive. Teams shrink and grow.
              Lists open and close quietly behind the scenes.
            </p>
            <p>
              Medicare language trips people up too—especially if you are used to another country&apos;s system and expect the same
              labels here.
            </p>
            <p>
              Also—Perth is spread out. Neighbouring suburbs can feel close on a map and still have totally different clinic capacity
              on the day you ring.
            </p>

            <h2
              id="official-tools"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              Official tools worth bookmarking before you ring anyone
            </h2>
            <p>
              Start with{" "}
              <a
                className="link-inline"
                href="https://www.healthdirect.gov.au/australian-health-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Healthdirect&apos;s Australian health services search
              </a>
              . Filter for general practice and your suburb or postcode. That gives you real clinic names and numbers—not gossip.
            </p>
            <p>
              If Medicare paperwork is new to you, read{" "}
              <a
                className="link-inline"
                href="https://www.servicesaustralia.gov.au/how-enrol-or-get-started-medicare"
                target="_blank"
                rel="noopener noreferrer"
              >
                how to enrol or get started with Medicare
              </a>{" "}
              on the Services Australia website before you sit in a waiting room guessing what to bring.
            </p>
            <p>
              When you want the bigger picture on why continuity matters, browse{" "}
              <a
                className="link-inline"
                href="https://www.racgp.org.au/patients"
                target="_blank"
                rel="noopener noreferrer"
              >
                Royal Australian College of General Practitioners patient resources
              </a>
              .
            </p>
            <p>
              Clinic websites are handy for parking, fees, and opening hours—just cross-check the address with Healthdirect so you
              are not chasing last month&apos;s typo from a group chat.
            </p>

            <MidPostImage {...midImage} />

            <h2 id="lists-language" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Closed lists, accepting patients, and honest vocabulary
            </h2>
            <p>
              When a clinic says its books are closed, it usually means the doctors already carry the patient load they can manage
              safely week to week. That is not a verdict on you personally.
            </p>
            <p>
              Sometimes clinics still take selected new patients—for example people with complex chronic disease—while pausing
              everyone else. Ask plainly what rule applies today.
            </p>
            <p>
              If someone mentions bulk billing, pause. That word only describes how the bill is paid on the day. It does not answer
              whether a clinic still has room on a doctor&apos;s list—those are two different questions.
            </p>

            <h2
              id="reception-script"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              A reception script that respects everyone&apos;s calendar
            </h2>
            <p>
              Ring Tuesday to Thursday mid-morning if you can. Mondays can be noisy. Lunch hour queues spike everywhere—school pickup
              hour does too.
            </p>
            <p>
              Say who needs care—you or your kids or both. Say whether you are brand new to Perth or swapping clinics. Say if you
              need travel vaccines soon or have multiple chronic problems that cannot wait.
            </p>
            <p>
              Ask whether they ever block longer slots for new patients. Short visits suit sore throats. They rarely suit “meet me for
              the first time plus paperwork plus ten worries”.
            </p>
            <p>
              If they pop you on a wait-list, join it calmly. Cancellations happen. Quiet follow-ups beat cranky daily callbacks.
            </p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Say clearly whether you need appointments for children, adults, or both—not every doctor sees every age group.
              </li>
              <li>
                Ask whether they want Medicare numbers now or only at reception—whatever avoids you arriving unprepared.
              </li>
              <li>
                Say whether you need chronic disease follow-up or just a catch-up health check—both are fine; reception triages them
                differently.
              </li>
              <li>
                Ask for their next realistic appointment—not the mythical perfect Tuesday six months away if something sooner exists.
              </li>
              <li>
                Write down who you spoke with and any login details they give you while you still have them on the phone.
              </li>
            </ol>

            <h2
              id="medicare-records"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              Medicare cards, enrolment, and wrangling old records
            </h2>
            <p>
              Bring photo ID and your Medicare card—or clear digital copies if your clinic accepts them. Blurry screenshots waste
              time at the desk.
            </p>
            <p>
              Notes rarely arrive overnight from interstate clinics. Ask your old surgery to send summaries and recent blood tests if
              they can. Allow a week or two—different software systems move at different speeds.
            </p>
            <p>
              If you use My Health Record and it is up to date, mention it when you book so your GP knows where to look first.
            </p>
            <p>
              The thing I wish more patients knew: you don&apos;t need to be &quot;sick enough&quot; to book an introductory GP visit.
              That is not how preventative care works.
            </p>

            <h2
              id="first-booking"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              How I recommend booking your first appointment
            </h2>
            <p>
              Tell reception you need time for paperwork plus whatever else is on your mind—blood pressure checks, adolescent mood,
              cervical screening—rather than squeezing everything into a sore-throat-length appointment.
            </p>
            <p>
              Woodlands privately bills GP visits. Ask reception for likely gaps before you arrive so surprise bills do not sour day
              one. Specialists and allied health bill separately later—budget for both over the month.
            </p>
            <p>
              Fees and prep lists—including pathology and mental health planning—live on the{" "}
              <Link href="/patient-info" className="link-inline">
                Woodlands patient information hub
              </Link>
              .
            </p>
            <p>
              Read{" "}
              <Link href="/our-practice" className="link-inline">
                how Woodlands operates as a doctor-owned clinic with pathology on-site and transparent northern Perth workflows
              </Link>
              , then book via{" "}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="link-inline">
                Automed online scheduling
              </a>{" "}
              or call{" "}
              <a href={PHONE_URL} className="link-inline">
                {PHONE_NUMBER}
              </a>
              , mentioning you need a longer new patient appointment—not a squeezed acute slot at the end of a busy list.
            </p>

            <h2 id="wrong-door" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              When a routine clinic appointment is the wrong door
            </h2>
            <p>
              Crushing chest pain, sudden neurological deficits, major trauma, or trouble breathing belong with{" "}
              <a href="tel:000" className="link-inline">
                000
              </a>
              , not reception hold music.
            </p>
            <p>
              If thoughts spiral toward self-harm after dark, Lifeline answers{" "}
              <a href="tel:131114" className="link-inline">
                13 11 14
              </a>
              .
            </p>
            <p>
              Outside{" "}
              <Link href="/contact" className="link-inline">
                routine Woodlands reception hours when you still need overnight medical triage
              </Link>
              , deputised after-hours clinicians answer{" "}
              <strong className="font-medium text-navy">1300 644 483</strong>.
            </p>

            <h2
              id="continuity-next"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              Continuity once your urgent questions are answered
            </h2>
            <p>
              If mood symptoms dominate why you are hunting stability locally, read our{" "}
              <Link href="/blog/mental-health-care-plan" className="link-inline">
                Medicare mental health care plan guide for Perth patients
              </Link>{" "}
              before your first long GP booking. It walks through sessions, reviews, and costs in plain language. It does not replace
              Lifeline or triple zero if you feel unsafe tonight.
            </p>
            <p>
              Once you have a regular GP, prevention sits beside acute care—skin checks, immunisations, chronic disease reviews—all
              listed in our{" "}
              <Link href="/services" className="link-inline">
                Woodlands comprehensive services catalogue
              </Link>
              .
            </p>
            <p>
              Lists change when doctors take leave or winter coughs flood phone lines. If Woodlands says no today, believe us—not
              because we dislike you, but because capacity is tight. Try again later or widen your search.
            </p>
            <p>
              If we cannot fit you when you call, try neighbouring suburbs and ring back every couple of weeks. Staying loyal to one
              postcode while nobody has space helps nobody—least of all you—when another clinic twenty minutes away still answers yes.
            </p>
            <p>
              WA sun is harsh once you finally settle with a GP—skin checks and routine vaccines deserve a spot in the diary even when
              moving house has worn you out.
            </p>

            <h2 id="faq" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question} className="border-b border-mist pb-5">
                  <dt className="font-medium text-navy">{item.question}</dt>
                  <dd className="mt-2">{item.answer}</dd>
                </div>
              ))}
            </dl>

            <p className="border-t border-mist pt-10 font-dm text-sm leading-7 text-slate">
              This article is general information only. Your own enrolment, billing, referrals, and how urgent something is need a
              conversation with a clinician—or emergency services if red-flag symptoms appear. Do not wait on a blog post if you feel
              suddenly unwell or unsafe.
            </p>
          </div>
        </div>
      </article>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}