import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Ahmed Mahmoud Abbas",
  description: "What Ahmed Mahmoud Abbas is doing right now. Updated July 2026.",
};

const NOW_ENTRIES = [
  {
    category: "work",
    items: [
      "Graduated BSc Computer Science (Software Engineering) from KSIU — June 2026. Actively looking for the right backend, DevOps, or SRE role, remote or on-site.",
      "ACR-QA is shipped and open-source — deterministic security scanner, #1 on RealVuln 2026 at 58.8% recall, beating GPT-5.5 at $0, with exploit-verified and cryptographically-signed findings. Graduation project defended.",
      "NBK Egypt R&D internship complete — delivered 4 AI/ML prototypes into a live banking environment over 6 weeks (extended by 2 weeks based on performance).",
      "DEPI DevOps program complete — capstone URL shortener validated at 2,715 req/sec under k6 load test, full Prometheus/Grafana/K8s/Terraform stack.",
    ],
  },
  {
    category: "building",
    items: [
      "ferrum — pure Rust AI gateway (tokio + axum) targeting <500µs per-request overhead and 15× the throughput of Python gateways. Motivated by LLM agentic loops where Python's GIL compounds latency at scale.",
      "Kim (co-built with Adam Maged) — cross-platform AI agent platform with full OS control, 27 MCP tools, multi-LLM support, and phone-to-PC task dispatch. Active development.",
      "ACR-QA maintenance — post-graduation cleanup, SLSA L3 provenance, Dilithium3 attestation hardening.",
    ],
  },
  {
    category: "reading",
    items: [
      "Designing Data-Intensive Applications — Kleppmann. The replication chapter changed how I think about distributed consistency.",
      "The Pragmatic Programmer — hitting differently after shipping real production systems.",
      "Rust async internals — specifically tokio's work-stealing scheduler to understand ferrum's concurrency model.",
    ],
  },
  {
    category: "thinking_about",
    items: [
      "How much of LLM 'intelligence' is just retrieval, and what that means for RAG system design.",
      "Why observability is a product problem, not a DevOps problem — teams that instrument from day one ship faster.",
      "The gap between 'it works on my machine' and 'it works at 3am under load' — and how to close it structurally.",
      "Post-quantum cryptography timelines: Shor's algorithm gives ~5–10 years, which means signing audit records today with Dilithium3 matters.",
    ],
  },
  {
    category: "outside_work",
    items: [
      "Training for a full marathon — currently building base mileage.",
      "Learning French — targeting B2, currently working through grammar and listening comprehension.",
      "Sharpening C++ algorithms on NeetCode 150 — currently on trees (255 LeetCode solved: 129M · 16H).",
    ],
  },
  {
    category: "looking_for",
    items: [
      "Backend or DevOps/SRE engineering roles — remote or Cairo-based. UTC+2 (great overlap with European teams).",
      "Teams where reliability, observability, and clean architecture are designed in from day one — not retrofitted.",
      "Graduated June 2026. Available now.",
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
            What I&apos;m focused on right now. Last updated: July 2026, Cairo, Egypt.
          </p>
          <p className="font-mono text-xs text-[#3f3f46] mt-1">
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#6366f1]"
              style={{ transition: "color 160ms" }}
            >
              Derek Sivers&apos; /now movement
            </a>
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
