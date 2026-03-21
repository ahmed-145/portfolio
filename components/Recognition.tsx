"use client";
import { useInView } from "@/hooks/useInView";

export default function Recognition() {
  const { ref, inView } = useInView();

  return (
    // Fix 5: py-12 since it's a small single-card section
    <section
      id="recognition"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">recognition</span>
        </h2>

        {/* Fix 5: centered, max-w-2xl, indigo left border to feel intentional */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#111111] border border-[#1a1a1a] border-l-[4px] border-l-[#6366f1] rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl" role="img" aria-label="trophy">🏆</span>
              <div>
                <p className="font-mono text-sm font-semibold text-[#f4f4f5]">
                  ICPC ECPC 2024 — Honorable Mention
                </p>
                <p className="font-mono text-xs text-[#71717a] mt-1">
                  Placed 2nd among KSIU teams &nbsp;·&nbsp; Led a 3-member team &nbsp;·&nbsp; July 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
