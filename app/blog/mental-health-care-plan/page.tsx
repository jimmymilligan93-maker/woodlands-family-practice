import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingCtaBanner } from "@/components/BookingCtaBanner";
import { Footer } from "@/components/Footer";
import { getMentalHealthCarePlanImages } from "@/lib/blog/mental-health-post-images";
import {
  BOOKING_URL,
  PHONE_NUMBER,
  PHONE_URL,
  PRACTICE_ADDRESS,
} from "@/lib/constants";
import { pexelsSizedUrl } from "@/lib/pexels";
import { SITE_CANONICAL_BASE } from "@/lib/site";

const PAGE_PATH = "/blog/mental-health-care-plan";
const PAGE_URL = `${SITE_CANONICAL_BASE}${PAGE_PATH}`;
const DATE_PUBLISHED = "2026-05-05";
const DATE_PUBLISHED_ISO = "2026-05-05T09:00:00+08:00";
const DATE_MODIFIED = "2026-05-06";
const DATE_MODIFIED_ISO = "2026-05-06T10:00:00+08:00";
/** Keeps full title tag inside ~50–60 characters including the site suffix from the root layout. */
const META_TITLE = "Mental health care plan guide";
const META_DESCRIPTION =
  "Mental health care plan in Australia: Medicare sessions, Perth GP booking steps, eligibility reviews and private billing at Woodlands. Call (08) 9446 2010.";
const OG_DESCRIPTION =
  "From GP assessment to Better Access referrals: session limits, reviews, private billing context, and urgent support numbers for WA patients.";
const TWITTER_DESCRIPTION =
  "Medicare mental health care plans in plain language: eligibility, sessions, reviews, costs, and booking at Woodlands Family Practice.";

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "how-plan-works", label: "How a mental health care plan works" },
  { id: "who-eligible", label: "Who is eligible" },
  { id: "how-to-get", label: "How to get one in WA" },
  { id: "what-to-expect", label: "What happens in the GP appointment" },
  { id: "sessions", label: "Sessions, reviews, and expiry" },
  { id: "costs", label: "Costs and private billing" },
  { id: "what-plan-is-not", label: "What a plan is not" },
  { id: "extra-topics", label: "Two things people often misunderstand" },
  { id: "urgent-help", label: "When to seek urgent help" },
  { id: "faq", label: "FAQ" },
];

const faqItems = [
  {
    question: "What is a mental health care plan?",
    answer:
      "It is the structured Medicare pathway your GP uses to document assessment, agreed goals, and referral to eligible allied mental health clinicians when appropriate. Completing one does not lock you into a single therapist forever; it formalises rebates and follow-up.",
  },
  {
    question: "How many sessions does a mental health care plan cover?",
    answer:
      "Medicare currently funds up to 10 individual allied mental health sessions per calendar year for eligible patients, usually released in stages with a GP review partway through. Limits and item numbers sometimes change after federal budgets—your GP confirms what applies at your appointment.",
  },
  {
    question: "Who is eligible for a mental health care plan?",
    answer:
      "Eligibility hinges on Medicare status, GP assessment, and a diagnosed mental health condition where therapy is clinically appropriate. You cannot self-declare eligibility from a checklist online; the decision sits with your doctor after discussion of symptoms and function.",
  },
  {
    question: "How do I get a mental health care plan in WA?",
    answer:
      "Book a deliberately longer GP consultation, explain what you have noticed in sleep, mood, appetite, concentration, relationships, or work, then ask explicitly for assessment under the Better Access pathway. The paperwork is Commonwealth Medicare, so the same principles apply Perth to Albany.",
  },
  {
    question: "How long does it take to get a mental health care plan?",
    answer:
      "Some patients leave the first long consult with a completed plan. Others need a second visit if history is complex, records are missing, or safety needs a separate focused discussion. Tell reception you are booking for mental health planning so they allocate enough minutes.",
  },
  {
    question: "Does a mental health care plan expire?",
    answer:
      "Plans are not lifetime documents. Your GP sets review dates, and Medicare rules require periodic reviews before further rebated sessions are released. If you switch clinics, bring your previous paperwork so the new doctor can continue care without starting from zero.",
  },
  {
    question: "Can I see any psychologist with my plan?",
    answer:
      "You need a clinician registered with Medicare for the relevant items—your referral names a provider or leaves room for you to choose. If the first person you try is not the right therapeutic fit, discuss a change with your GP early rather than quietly stopping care.",
  },
  {
    question: "Can a GP prescribe antidepressants in Australia?",
    answer:
      "Yes, when medication is clinically appropriate. Antidepressants are one tool among others; your GP may combine scripts with therapy referral, safety planning, and follow-up blood pressure or monitoring depending on the medicine chosen.",
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
  const images = await getMentalHealthCarePlanImages();
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
      title: "What is a mental health care plan? | Woodlands Family Practice",
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
      title: "What is a mental health care plan?",
      description: TWITTER_DESCRIPTION,
      ...(ogImageSrc ? { images: [ogImageSrc] } : {}),
    },
  };
}

export default async function MentalHealthCarePlanPage() {
  const images = await getMentalHealthCarePlanImages();
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
        name: "What is a mental health care plan?",
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
    headline: "What is a mental health care plan?",
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
                <li className="text-cream">Mental health care plan</li>
              </ol>
            </nav>
            <p className="mt-6 font-dm text-xs uppercase tracking-[0.16em] text-mist/80">
              Mental health · Medicare · WA guide
            </p>
            <h1 className="mt-3 max-w-3xl font-cormorant text-4xl font-light leading-tight text-cream md:text-5xl lg:text-6xl">
              What is a mental health care plan?
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
              , RACGP-accredited general practitioners providing family medicine at {PRACTICE_ADDRESS}. We see
              patients from Woodlands, Perth&apos;s northern suburbs, and across WA who want clear answers
              before they book a longer mental health consult.
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
              Monday mornings, I regularly sit with people who have waited months to bring up how low, flat,
              or anxious they have been feeling.
            </p>
            <p>
              In practical terms, a <strong className="font-medium text-navy">mental health care plan</strong>{" "}
              is the structured pathway I follow as your Medicare GP when I assess you, outline goals with you,
              refer you to an appropriately registered psychologist or allied mental health clinician where suitable,
              and arrange the rebates that make ongoing therapy financially realistic for many families.
            </p>
            <p>
              I want you to hear this plainly: a Mental Health Treatment Plan through Medicare is not a last
              resort. It is good healthcare. You do not need to be at breaking point to ask for help.
            </p>
            <p>
              A man in his 30s once came in after paying privately for several psychology sessions because he
              assumed Medicare had nothing to offer him. He had put it off for months and was already rationing
              appointments because of cost. We did a proper assessment, set goals, and organised treatment
              planning and referrals. Nothing about that consult was dramatic, but it gave him a clearer path,
              lower out-of-pocket pressure, and a reason to keep attending. If you have delayed this
              conversation for similar reasons, you are not unusual.
            </p>

            <h2
              id="how-plan-works"
              className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl"
            >
              How a mental health care plan works
            </h2>
            <p>
              If you are new to the system, it helps to picture a simple sequence: assessment, plan, referral,
              therapy, review. Your GP records symptoms, day-to-day impact, and any safety considerations, then
              documents agreed goals and referral details when the Better Access pathway is appropriate.
              Departmental guidance remains the authoritative wording—see the{" "}
              <a
                className="link-inline"
                href="https://www.health.gov.au/our-work/better-access-initiative"
                target="_blank"
                rel="noopener noreferrer"
              >
                Better Access initiative overview
              </a>{" "}
              plus{" "}
              <a
                className="link-inline"
                href="https://www.healthdirect.gov.au/mental-health-care-plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Healthdirect&apos;s explanation of GP mental health care plans
              </a>
              . For broader context on how Australia approaches treatment access, skim{" "}
              <a
                className="link-inline"
                href="https://www.health.gov.au/topics/mental-health-and-suicide-prevention/mental-health-care-and-treatment"
                target="_blank"
                rel="noopener noreferrer"
              >
                mental health care and treatment summaries from the Australian Government Department of Health and Aged Care
              </a>
              .
            </p>

            <MidPostImage {...midImage} />

            <h2 id="who-eligible" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Who is eligible for a Medicare mental health care plan?
            </h2>
            <p>
              You generally need a diagnosed mental health condition and active Medicare enrolment confirmed
              through consultation. Anxiety and depression are common examples people name out loud, but the
              decision is not something you guess from an internet symptom list. Your GP integrates duration,
              intensity, coping, medications, trauma history, pregnancy, occupational stressors, substance
              use—whatever is medically relevant—to decide whether a funded plan suits you today or whether
              another entry point fits better first.
            </p>
            <p>
              If a full formal plan is not the right fit on day one maybe because paperwork needs more time,
              or another concern is medically urgent—we still organise treatment, shorter reviews, onward
              referral, safety planning, or scripts when appropriate. Silence is rarely the clinically kind
              answer.
            </p>

            <h2 id="how-to-get" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              How to get a mental health care plan in WA
            </h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                Book a longer GP appointment and clearly say you want a mental health assessment for a Medicare
                care plan—not a squeezed standard slot at the end of a busy list.
              </li>
              <li>
                At the consultation, outline what shifted: sleep fragmentation, appetite, panic cycles,
                intrusive thoughts, relationship friction, avoidance, substance changes, suicidal thoughts—use
                your own phrases; we translate them into meaningful notes.
              </li>
              <li>
                Your GP explores symptoms, examines where relevant, reviews medications, weighs risk, and
                outlines options spanning therapy modalities, pharmaceuticals, counselling wait times, workplace
                supports, sleep hygiene, lifestyle changes—or combinations.
              </li>
              <li>
                Where criteria are satisfied, paperwork is completed outlining goals plus referral letters to
                named providers or specialities you jointly select.
              </li>
              <li>
                Book allied health sessions promptly—momentum fades when calendars fill—and diarise the
                mandated GP review midway so rebates continue without administrative gaps.
              </li>
            </ol>
            <p>
              If you are browsing{" "}
              <Link href="/our-practice" className="link-inline">
                how our Woodlands clinic operates doctor-owned workflows, pathology on-site, private billing transparency
              </Link>
              {" "}
              before committing, start there. Patients around Perth northern suburbs routinely book mental
              health planning through{" "}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="link-inline">
                our Automed online portal
              </a>{" "}
              or by calling{" "}
              <a href={PHONE_URL} className="link-inline">
                {PHONE_NUMBER}
              </a>
              .
            </p>

            <h2 id="what-to-expect" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              What happens in the GP appointment
            </h2>
            <p>
              Patients often whisper variants of “What am I supposed to admit?” Plain language suffices. Sentences
              like “I wake anxious most mornings, snapping at my teenager, doom-scrolling till 2 a.m.” map neatly
              to clinical patterns without you memorising DSM codes.
            </p>
            <p>
              Bring a short handwritten or digital note listing onset timing, flare triggers, past therapists,
              current medicines, caffeine or alcohol shifts, menstrual cycle interplay if pertinent, allergies,
              culturally important supports. Paper beats proud silence when adrenaline blanks your vocabulary.
              Our{" "}
              <Link href="/patient-info" className="link-inline">
                Patient Info hub lists fees plus preparation tips across women&apos;s health, skin checks and mental health counselling
              </Link>{" "}
              so invoices never ambush trust.
            </p>

            <h2 id="sessions" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Sessions, reviews, and expiry
            </h2>
            <p>
              Medicare currently allocates up to <strong className="font-medium text-navy">10 individual</strong>{" "}
              allied mental health sessions per calendar year for qualifying patients—not unlimited, but meaningful
              if sessions are purposeful and spaced intentionally. Rebates are usually released in stages, with a
              GP review partway through so someone is checking progress, safety, medication side effects, and
              whether the therapy approach still fits.
            </p>
            <p>
              Reviews are not about catching you out—they are where we adjust frequency, escalate to a psychiatrist
              when needed, stabilise things when you are improving, and update medication or coping plans before big
              life changes. If you stop attending without telling anyone, you lose time you could have used with
              support.
            </p>

            <h2 id="costs" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Costs and private billing realities
            </h2>
            <p>
              Rebates soften costs but seldom erase gaps entirely—the psychologist hourly rate minus Medicare
              portion still hurts the budget. Transparency matters upfront: surprises corrode adherence.
            </p>
            <p>
              Woodlands Family Practice privately bills consultations; reception quotes likely GP gaps for drafting
              or reviewing mental health paperwork before arrival. Allied providers bill independently—budget for{" "}
              both the GP paperwork side and psychology sessions across the month. Scrutinise{" "}
              <Link href="/patient-info" className="link-inline">
                our published patient fee guidance and privacy policies
              </Link>{" "}
              anytime; querying estimated gap before booking respects everyone&apos;s accountant brain.
            </p>

            <h2 id="what-plan-is-not" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              What a mental health care plan is not
            </h2>
            <h3 className="font-cormorant text-xl font-light text-navy">Not proof you are exaggerating distress</h3>
            <p>
              Formal documentation protects access to rebates and communicates severity to allied clinicians; it does
              not trivialise subjective suffering. Symptoms need not bleed onto paper before they warrant skilled care.
            </p>
            <h3 className="font-cormorant text-xl font-light text-navy">Not a lifetime lock-in with one clinician</h3>
            <p>
              Referrals iterate when therapeutic alliance fails—you are partnering for recovery, enduring mismatch
              helps nobody silently. Returning to us with feedback accelerates redirection instead of abandonment.
            </p>
            <h3 className="font-cormorant text-xl font-light text-navy">Not psychotherapy itself</h3>
            <p>
              Plans enable funded sessions—they do not replace hours with a psychologist doing evidence-based modalities.
              Skipping attendance while hoarding dormant paperwork forfeits rebate value and stalls functional gains.
            </p>

            <h2 id="extra-topics" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              Two things people often misunderstand about therapy access
            </h2>
            <h3 className="font-cormorant text-xl text-navy">1. Fit matters sooner than pedigree brand names</h3>
            <p>
              Credentialed training matters clinically, yes—but bedside manner, modality alignment (CBT vs EMDR vs DBT-informed),
              queer cultural humility, linguistic comfort, geography, after-hours openings also determine stickiness.
              Speak early when sessions feel stagnant; stagnant care quietly erodes hope.
            </p>
            <h3 className="font-cormorant text-xl text-navy">2. Silence still swallows enormous suffering nationally</h3>
            <p>
              Roughly{" "}
              <strong className="font-medium text-navy">only 54% of Australians with mental health conditions</strong>{" "}
              report seeking professional assistance (Australian Bureau of Statistics). That leaves almost half not
              reaching formal treatment when they probably should—keep this in mind when guilt tells you not to bother
              a clinic with something “too small”.
            </p>
            <p>
              For continuity reminders, skim{" "}
              <Link href="/services" className="link-inline">
                comprehensive preventive and chronic disease clinics delivered under one northern Perth roof alongside mental health counselling
              </Link>{" "}
              or message{" "}
              <Link href="/contact" className="link-inline">
                clinic reception with non-urgent administrative questions referencing mental health referrals
              </Link>
              .
            </p>

            <h2 id="urgent-help" className="scroll-mt-28 pt-3 font-cormorant text-2xl font-light text-navy md:text-3xl">
              When to seek urgent help
            </h2>
            <p>
              Immediate danger mandates{" "}
              <a href="tel:000" className="link-inline">
                000
              </a>
              ; crisis counselling lines exist when thoughts spiral after midnight—Lifeline answers{" "}
              <a href="tel:131114" className="link-inline">
                13 11 14
              </a>
              . Outside{" "}
              <Link href="/contact" className="link-inline">
                routine Woodlands reception hours where you still need urgent medical triage
              </Link>
              , deputised after-hours clinicians answer{" "}
              <strong className="font-medium text-navy">1300 644 483</strong>. If escalation might save your life or
              someone else&apos;s, use it rather than toughing things out silently.
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
              This article introduces general concepts only. Individual diagnosis, prescribing, referrals, rebates, and urgency
              decisions always require direct consultation—telehealth or in-person—with your GP. If symptoms escalate suddenly,
              use emergency routes above rather than awaiting blog updates.
            </p>
          </div>
        </div>
      </article>

      <BookingCtaBanner />
      <Footer />
    </>
  );
}
