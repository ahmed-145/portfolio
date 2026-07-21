"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

type Stat = { value: number; suffix?: string; label: string; duration: number };

const stats: Stat[] = [
  { value: 10, label: "projects shipped", duration: 700 },
  { value: 3147, suffix: "+", label: "automated tests", duration: 1100 },
  { value: 2715, suffix: " req/sec", label: "peak throughput", duration: 1400 },
  { value: 255, suffix: "+", label: "leetcode solved", duration: 900 },
];

// Strong ease-out curve, matches --ease-out in CSS
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function CountUp({ value, duration, active }: { value: number; duration: number; active: boolean }) {
  const [n, setN] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(value * easeOut(t)));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, value, duration]);

  return <>{n}</>;
}

export default function MetricsBar() {
  const { ref, inView } = useInView(0.1);

  // CountUp animates just the number; suffix (if any) renders statically alongside it.
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`border-y border-[#1a1a1a] bg-[#0d0d0d] py-5 px-6 reveal ${inView ? "in-view" : ""}`}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className={`stagger grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1a1a1a] ${inView ? "in-view" : ""}`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center md:px-8 first:md:pl-0 last:md:pr-0"
              style={{ ["--stagger-index" as string]: i }}
            >
              <span className="font-mono text-3xl font-bold text-[#6366f1] leading-none tabular-nums">
                <CountUp value={stat.value} duration={stat.duration} active={inView} />
                {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
              </span>
              <span className="font-mono text-xs text-[#52525b] mt-1.5 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
