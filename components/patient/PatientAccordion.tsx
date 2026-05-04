"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { type ReactNode, useState } from "react";

type Item = {
  id: string;
  title: string;
  content: ReactNode;
};

const items: Item[] = [
  {
    id: "appointments",
    title: "Making an Appointment",
    content: (
      <div className="space-y-3">
        <p>
          You can book online via our secure booking system or call reception on{" "}
          <a href="tel:+61894462010" className="text-terra">
            (08) 9446 2010
          </a>
          . Standard appointments are typically 10–15 minutes; please let us know if you
          need a longer appointment for multiple issues, procedures, or mental health
          reviews.
        </p>
        <p>
          If you cannot attend, please cancel as early as possible so another patient
          can use that time.
        </p>
      </div>
    ),
  },
  {
    id: "fees",
    title: "Fees & Billing",
    content: (
      <div className="space-y-3">
        <p>
          Woodlands Family Practice is a private billing clinic. Fees may vary
          depending on the length and complexity of your consultation, whether
          procedures are performed, and whether you hold a valid Medicare card.
        </p>
        <p>
          Our reception team can provide an estimate of fees when you book. Veterans
          Affairs and certain other arrangements may be billed directly to third
          parties where applicable.
        </p>
      </div>
    ),
  },
  {
    id: "scripts",
    title: "Repeat Prescriptions & Referrals",
    content: (
      <div className="space-y-3">
        <p>
          Repeat prescriptions and referrals usually require an appointment with your
          GP so that medications and specialist care remain appropriate and safe.
        </p>
        <p>
          In limited circumstances your doctor may authorise a short extension—please
          contact reception rather than assuming a script can be issued without review.
        </p>
      </div>
    ),
  },
  {
    id: "afterhours",
    title: "After Hours Care",
    content: (
      <div className="space-y-3">
        <p>
          When the practice is closed, medical deputising services can be reached on{" "}
          <a href="tel:1300644483" className="text-terra">
            1300 644 483
          </a>
          . In an emergency, always call{" "}
          <a href="tel:000" className="text-terra">
            000
          </a>{" "}
          or attend your nearest emergency department.
        </p>
      </div>
    ),
  },
  {
    id: "telehealth",
    title: "Telehealth",
    content: (
      <div className="space-y-3">
        <p>
          Selected follow-up appointments may be offered by telephone or video where
          clinically appropriate and permitted under Medicare rules. Your doctor or
          reception will advise if telehealth is suitable for your situation.
        </p>
      </div>
    ),
  },
  {
    id: "newpatients",
    title: "New Patients",
    content: (
      <div className="space-y-3">
        <p>
          We welcome new patients to the practice. Please arrive a few minutes early
          for your first visit to complete registration and bring your Medicare card
          and any concession or DVA cards.
        </p>
        <p>
          If you have complex or multiple issues, consider booking a longer initial
          appointment so your new GP can understand your history thoroughly.
        </p>
      </div>
    ),
  },
  {
    id: "recalls",
    title: "Recalls & Reminders",
    content: (
      <div className="space-y-3">
        <p>
          We may contact you by phone, SMS, or letter for clinically indicated recalls
          such as abnormal results, routine screening reminders, or care plan reviews.
        </p>
        <p>
          You can opt out of non-essential reminders at any time by speaking with
          reception, though some recalls are recommended for your safety.
        </p>
      </div>
    ),
  },
  {
    id: "privacy",
    title: "Your Privacy",
    content: (
      <div className="space-y-3">
        <p>
          Your medical record is confidential. Access is limited to staff involved in
          your care, and information is only shared with your consent or where
          permitted by law.
        </p>
        <p>
          For full details, please read our{" "}
          <Link href="/privacy-policy" className="text-terra hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    ),
  },
];

export function PatientAccordion() {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-mist rounded-2xl border border-mist bg-white px-4 md:px-6">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="py-2">
            <button
              type="button"
              className="flex w-full min-h-[44px] items-center justify-between gap-4 py-3 text-left"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
            >
              <span className="font-dm text-base font-semibold text-navy">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 font-dm text-sm leading-relaxed text-slate">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
