"use client";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";

export default function Recognition() {
  const { ref, inView } = useInView();
  const cardRef = useSpotlight<HTMLDivElement>();

  return (
    <section
      id="recognition"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 px-6"
    >
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">recognition</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div ref={cardRef} className="bg-[#111111] border border-[#1a1a1a] border-l-[4px] border-l-[#6366f1] rounded-lg p-6 card-hover">
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
