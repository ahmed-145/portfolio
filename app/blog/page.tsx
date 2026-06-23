import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Ahmed Mahmoud Abbas",
  description: "Technical writing on backend engineering, DevOps, and systems design.",
};

const UPCOMING = [
  {
    title: "Building Redis from Scratch in Rust: What the Borrow Checker Teaches You About Concurrency",
    tags: ["Rust", "Systems", "Concurrency"],
    status: "drafting",
  },
  {
    title: "Observability-First Engineering: How to Instrument a System Before You Optimize It",
    tags: ["DevOps", "Prometheus", "Grafana"],
    status: "drafting",
  },
  {
    title: "No AI, No Hallucinations: How a Deterministic Scanner Out-Recalled GPT-5.5 at $0",
    tags: ["Security", "Static Analysis", "Determinism"],
    status: "planning",
  },
  {
    title: "The Gap Between 'It Works' and 'It Works at 3am Under Load'",
    tags: ["Production", "Reliability", "SRE"],
    status: "planning",
  },
  {
    title: "Late-Fusion Vector Intersection: A Better Way to Do Multi-Seed Recommendation",
    tags: ["Embeddings", "Qdrant", "Search"],
    status: "planning",
  },
];

const STATUS_STYLES: Record<string, string> = {
  drafting: "border-[#f59e0b]/40 text-[#f59e0b] bg-[#f59e0b]/5",
  planning: "border-[#27272a] text-[#52525b] bg-transparent",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] py-16 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Back */}
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
            <span className="text-[#6366f1]">#</span> writing
          </h1>
          <p className="text-[#a1a1aa] text-base leading-relaxed">
            Technical writing on systems, DevOps, and the things I learn while building.
          </p>
        </div>

        {/* Empty state + upcoming */}
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-6 mb-8">
          <div className="flex gap-1.5 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="font-mono text-sm space-y-1">
            <div>
              <span className="text-[#4ade80]">$</span>{" "}
              <span className="text-[#f4f4f5]">ls posts/</span>
            </div>
            <div className="pl-4 text-[#71717a]">ls: posts/: directory is empty</div>
            <div className="mt-3">
              <span className="text-[#4ade80]">$</span>{" "}
              <span className="text-[#f4f4f5]">git stash list</span>
            </div>
            <div className="pl-4 text-[#6366f1]">stash@{"{0}"}: drafts in progress...</div>
          </div>
        </div>

        {/* Upcoming posts */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-5">
            {"// in the pipeline"}
          </p>
          <div className="space-y-0 border border-[#1a1a1a] rounded-lg overflow-hidden">
            {UPCOMING.map((post, i) => (
              <div
                key={i}
                className={`px-5 py-4 ${i !== UPCOMING.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border tracking-widest uppercase whitespace-nowrap shrink-0 mt-0.5 ${STATUS_STYLES[post.status]}`}
                  >
                    {post.status}
                  </span>
                  <div>
                    <p className="font-mono text-sm text-[#a1a1aa] leading-snug mb-2">{post.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#27272a] text-[#52525b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe nudge */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
          <p className="font-mono text-xs text-[#3f3f46]">
            Want to know when posts go live?{" "}
            <a
              href="mailto:ahmedabbass871@gmail.com?subject=Notify me when you publish"
              className="text-[#6366f1] hover:underline"
            >
              Email me
            </a>{" "}
            and I&apos;ll drop you a line.
          </p>
        </div>
      </div>
    </main>
  );
}
