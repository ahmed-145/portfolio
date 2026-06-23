import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Ahmed Mahmoud Abbas",
  description: "What Ahmed Mahmoud Abbas is doing right now. Updated May 2026.",
};

const NOW_ENTRIES = [
  {
    category: "work",
    items: [
      "Open-sourcing ACR-QA — my deterministic security scanner that out-recalls GPT-5.5 on the RealVuln 2026 benchmark at $0, with exploit-verified and cryptographically-signed findings. Graduation project, defended.",
      "Completing the DEPI DevOps program under Egypt's Ministry of Communications. Capstone: production URL shortener with enterprise-grade observability.",
      "Interned at NBK Egypt (extended by 2 weeks) — shipped 4 AI/ML prototypes into a live banking environment.",
    ],
  },
  {
    category: "building",
    items: [
      "Kim — cross-platform AI agent (Tauri + Rust + Python MCP) with full OS control. Co-built with Adam Maged.",
      "Exploring agentic workflow orchestration with MCP and local LLMs via Ollama.",
      "Learning more Rust internals — recently implemented Redis from scratch to understand the concurrency model.",
    ],
  },
  {
    category: "reading",
    items: [
      "Designing Data-Intensive Applications — Kleppmann. The chapter on replication strategies changed how I think about consistency.",
      "The Pragmatic Programmer. Revisiting it after shipping real production systems — hits differently.",
    ],
  },
  {
    category: "thinking_about",
    items: [
      "How observability is really a product problem, not a DevOps problem. Teams that instrument from day one ship faster.",
      "The gap between \"it works on my machine\" and \"it works at 3am under load\" — and how to close it.",
      "What it means to write code that's easy to delete.",
    ],
  },
  {
    category: "looking_for",
    items: [
      "Backend or DevOps engineering roles — remote or Cairo-based.",
      "Teams where reliability, observability, and clean architecture aren't afterthoughts.",
      "Graduating June 2026. Available now for the right opportunity.",
    ],
  },
];

export default function NowPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] py-16 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#52525b] hover:text-[#6366f1] mb-12 group"
          style={{ transition: "color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
        >
          <span
            className="group-hover:-translate-x-1"
            style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            ←
          </span>
          back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#f4f4f5] mb-3">
            <span className="text-[#6366f1]">#</span> now
          </h1>
          <p className="font-mono text-sm text-[#52525b]">
            What I&apos;m focused on right now. Last updated: May 2026, Cairo, Egypt.
          </p>
          <p className="font-mono text-xs text-[#3f3f46] mt-1">
            Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#6366f1]" style={{ transition: "color 160ms" }}>Derek Sivers&apos; /now movement</a>
          </p>
        </div>

        {/* Entries */}
        <div className="space-y-10">
          {NOW_ENTRIES.map(({ category, items }) => (
            <div key={category}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#6366f1] mb-4">
                {category.replace(/_/g, " ")}
              </h2>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#a1a1aa] text-sm leading-relaxed">
                    <span className="text-[#6366f1] mt-0.5 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
          <p className="font-mono text-xs text-[#3f3f46]">
            If what I&apos;m doing resonates with what you&apos;re building —{" "}
            <a
              href="mailto:ahmedabbass871@gmail.com"
              className="text-[#6366f1] hover:underline"
            >
              let&apos;s talk
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
