"use client";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";

const cards = [
  { emoji: "🏃", text: "Training for a full marathon", sub: null as string | null },
  { emoji: "⚡", text: "Sharpening algorithms in C++", sub: "NeetCode 150, currently on trees" as string | null },
  { emoji: "🇫🇷", text: "Learning French toward B2", sub: null as string | null },
];

type Card = (typeof cards)[number];

function CurrentlyCard({ card, index }: { card: Card; index: number }) {
  const spotRef = useSpotlight<HTMLDivElement>();
  return (
    <div
      ref={spotRef}
      className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 card-hover"
      style={{ ["--stagger-index" as string]: index }}
    >
      <span className="text-2xl mb-3 block" role="img" aria-hidden="true">
        {card.emoji}
      </span>
      <p className="text-[#a1a1aa] text-sm leading-relaxed">{card.text}</p>
      {card.sub && (
        <p className="font-mono text-xs text-[#52525b] mt-1.5">{card.sub}</p>
      )}
    </div>
  );
}

export default function Currently() {
  const { ref, inView } = useInView();

  return (
    <section
      id="currently"
      ref={ref as React.RefObject<HTMLElement>}
      className="pt-16 pb-8 px-6"
    >
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">currently</span>
        </h2>

        <div className={`stagger grid sm:grid-cols-3 gap-4 ${inView ? "in-view" : ""}`}>
          {cards.map((card, i) => (
            <CurrentlyCard key={card.text} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
