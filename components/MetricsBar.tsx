"use client";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "4", label: "production systems shipped" },
  { value: "273", label: "tests · <6s runtime" },
  { value: "225", label: "req/sec peak load" },
  { value: "3", label: "internships" },
];

export default function MetricsBar() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`border-y border-[#1a1a1a] bg-[#0d0d0d] py-5 px-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1a1a1a]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-mono text-3xl font-bold text-[#6366f1] leading-none">
                {stat.value}
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
