"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, inViewOpts, staggerContainer } from "@/lib/motion";

const articles = [
  {
    category: "Finding a GP",
    title: "How do I find a GP accepting new patients in Perth?",
    excerpt:
      "Authoritative directories, reception scripts, Medicare paperwork, longer first bookings, and honest language about closed lists—plus how Woodlands fits northern Perth families relocating or swapping clinics.",
    date: "7 May 2026",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    href: "/blog/gp-accepting-new-patients-perth",
  },
  {
    category: "Mental health",
    title: "What is a mental health care plan?",
    excerpt:
      "How GP mental health treatment plans work under Medicare, who is eligible, how rebated sessions fit together, and how to book a proper-length appointment in Perth and WA.",
    date: "5 May 2026",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    href: "/blog/mental-health-care-plan",
  },
  {
    category: "Skin health",
    title: "Skin checks in a high-UV climate",
    excerpt:
      "Western Australians experience intense year-round ultraviolet radiation. Learn how structured skin checks, dermoscopy, and timely lesion removal can reduce the risk of invasive skin cancer.",
    date: "18 April 2026",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    href: "/blog",
  },
  {
    category: "Practice updates",
    title: "Welcoming new patients to Woodlands",
    excerpt:
      "Changing GP practices can feel daunting. Here is how to request a transfer of your records, what identification to bring, and how we structure longer first appointments so your new doctor understands your history.",
    date: "2 April 2026",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    href: "/blog",
  },
  {
    category: "Chronic care",
    title: "Living well with long-term conditions",
    excerpt:
      "Chronic disease rarely improves with occasional rushed visits. We explain how care plans, nurse support, and regular reviews help you stay ahead of complications while keeping medications appropriate.",
    date: "20 March 2026",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    href: "/blog",
  },
];

export function BlogGrid() {
  return (
    <motion.div
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={inViewOpts}
      variants={staggerContainer}
    >
      {articles.map((a) => (
        <motion.article
          key={a.title}
          variants={fadeUp}
          className="group flex flex-col overflow-hidden rounded-2xl border border-mist bg-white transition-shadow hover:shadow-lg"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
            <Image
              src={a.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className="inline-flex w-fit rounded-full bg-mist px-3 py-1 font-dm text-xs font-medium text-navy">
              {a.category}
            </span>
            <h3 className="mt-4 font-cormorant text-2xl text-navy">{a.title}</h3>
            <p className="mt-3 flex-1 font-dm text-sm leading-relaxed text-slate">
              {a.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between font-dm text-xs text-silver">
              <span>{a.date}</span>
              <Link href={a.href} className="font-medium text-terra hover:underline">
                Read more →
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
