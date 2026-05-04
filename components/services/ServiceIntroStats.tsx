"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatCell({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="font-cormorant text-5xl font-light text-cream md:text-6xl">
        {count}
        {suffix ?? ""}
      </p>
      <span className="mt-2 block h-1 w-1 rounded-full bg-terra" aria-hidden />
      <p className="mt-3 max-w-[10rem] font-dm text-xs text-mist/70">{label}</p>
    </div>
  );
}

export function ServiceIntroStats() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-3">
      <StatCell target={25} suffix="+" label="Years of care" />
      <StatCell target={11} label="Experienced GPs" />
      <StatCell target={20} suffix="+" label="Services offered" />
    </div>
  );
}
