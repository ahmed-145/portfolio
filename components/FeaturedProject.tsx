"use client";
import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";

const stack = [
  "Flask", "PostgreSQL", "Redis", "Prometheus",
  "Grafana", "Cerebras AI", "RAG", "Docker", "GitHub Actions",
];

export default function FeaturedProject() {
  const { ref, inView } = useInView();

  return (
    // Fix 1: py-24 → py-16
    <section
      id="featured"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {/* Heading */}
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">featured_project</span>
        </h2>

        {/* Full-width featured card */}
        <div className="relative border border-[#1a1a1a] border-l-[4px] border-l-[#6366f1] bg-[#111111] rounded-lg p-8 md:p-10 card-hover">
          {/* GRADUATION PROJECT badge */}
          <div className="absolute top-6 right-6">
            <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded border border-[#4ade80] text-[#4ade80] tracking-widest uppercase bg-[#4ade80]/5">
              GRADUATION PROJECT
            </span>
          </div>

          {/* Project name */}
          <div className="mb-3">
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-[#f4f4f5]">
              ACR-QA
            </h3>
            <p className="text-[#6366f1] font-mono text-sm mt-1">
              AI-powered automated code review &amp; quality assurance platform
            </p>
          </div>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base leading-relaxed max-w-3xl mb-8">
            Enterprise-grade CI/CD platform that brings intelligent code review into any development pipeline.
            Built with RAG-powered hallucination detection using Cerebras AI, a Policy-as-Code engine for custom
            rule enforcement, a Test Gap Analyzer, OWASP security automation, and a Developer Fatigue Tuner.
            Ships with 273 tests running in under 6 seconds and a full CI green pass.
          </p>

          {/* Metrics row */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { value: "273", label: "tests" },
              { value: "<6s", label: "test runtime" },
              { value: "100%", label: "CI pass rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[120px] max-w-[180px] bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-4 text-center"
              >
                <div className="font-mono text-2xl font-bold text-[#6366f1]">{stat.value}</div>
                <div className="font-mono text-xs text-[#71717a] mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Fix 8: flex flex-wrap gap-2 on badge container */}
          <div className="flex flex-wrap gap-2 mb-8">
            {stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#6366f1]/30 text-[#6366f1] bg-[#6366f1]/5"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href="https://github.com/ahmed-145/ACR-QA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#f4f4f5] hover:text-[#6366f1] transition-colors duration-200 group"
          >
            View on GitHub
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
