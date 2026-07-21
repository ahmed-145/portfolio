"use client";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";

interface RecognitionItem {
  emoji: string;
  title: string;
  meta: string;
  note?: string;
}

const items: RecognitionItem[] = [
  {
    emoji: "🏆",
    title: "ICPC ECPC 2024 — Honorable Mention",
    meta: "Placed 2nd among KSIU teams · Led a 3-member team · July 2024",
  },
  {
    emoji: "🇪🇬",
    title: "Digital Egypt Pioneers Initiative (DEPI) — MCIT",
    meta: "Nationally sponsored DevOps program · Ministry of Communications & IT · 2025",
    note: "Competitive national selection",
  },
  {
    emoji: "🌍",
    title: "COP27 Youth Volunteer — KSIU Delegation",
    meta: "UN Climate Conference · Sharm El-Sheikh, Egypt · Nov 2022",
  },
  {
    emoji: "📡",
    title: "IEEE Student Branch — KSIU",
    meta: "Active member · technical events & workshops",
  },
  {
    emoji: "☁️",
    title: "Huawei ICT Academy Participant",
    meta: "Cloud & AI certification track · KSIU",
  },
];

function RecognitionCard({ item, index }: { item: RecognitionItem; index: number }) {
  const spotRef = useSpotlight<HTMLDivElement>();
  return (
    <div
      ref={spotRef}
      className="bg-[#111111] border border-[#1a1a1a] border-l-[3px] border-l-[#6366f1] rounded-lg p-5 card-hover flex items-start gap-4"
      style={{ ["--stagger-index" as string]: index }}
    >
      <span className="text-xl shrink-0 mt-0.5" role="img" aria-hidden="true">
        {item.emoji}
      </span>
      <div className="min-w-0">
        <p className="font-mono text-sm font-semibold text-[#f4f4f5] leading-snug">
          {item.title}
        </p>
        <p className="font-mono text-xs text-[#71717a] mt-1 leading-relaxed">
          {item.meta}
        </p>
        {item.note && (
          <span className="inline-block mt-2 font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-[#6366f1]/30 text-[#6366f1] bg-[#6366f1]/5">
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Recognition() {
  const { ref, inView } = useInView();

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

        <div className={`stagger grid sm:grid-cols-2 gap-4 ${inView ? "in-view" : ""}`}>
          {items.map((item, i) => (
            <RecognitionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
