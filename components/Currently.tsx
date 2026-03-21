"use client";
import { useInView } from "@/hooks/useInView";

const cards = [
  {
    emoji: "🏃",
    text: "Training for a full marathon",
    sub: null,
  },
  {
    emoji: "⚡",
    text: "Sharpening algorithms in C++",
    sub: "NeetCode 150, currently on trees",
  },
  {
    emoji: "🇫🇷",
    text: "Learning French toward B2",
    sub: null,
  },
];

export default function Currently() {
  const { ref, inView } = useInView();

  return (
    <section
      id="currently"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">currently</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.text}
              className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-5 hover:border-[#27272a] transition-colors duration-200"
            >
              <span className="text-2xl mb-3 block" role="img" aria-hidden="true">
                {card.emoji}
              </span>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{card.text}</p>
              {card.sub && (
                <p className="font-mono text-xs text-[#52525b] mt-1.5">{card.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
