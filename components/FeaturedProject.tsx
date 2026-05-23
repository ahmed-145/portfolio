"use client";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const stack = [
  "Flask", "PostgreSQL", "Redis", "Prometheus",
  "Grafana", "Cerebras AI", "RAG", "Docker", "GitHub Actions",
];

const pipeline = [
  { label: "GitHub Push", icon: "↑" },
  { label: "CI/CD", icon: "⚙" },
  { label: "ACR-QA Engine", icon: "✦", accent: true },
  { label: "PostgreSQL + Redis", icon: "🗄" },
  { label: "Grafana", icon: "📊" },
];

const features = [
  { title: "RAG-powered review", body: "Hallucination detection via retrieval-augmented generation. Reviews are grounded in actual code, not model priors.", accent: "#6366f1" },
  { title: "Policy-as-Code engine", body: "Teams write custom rules in a YAML DSL. ACR-QA enforces them on every PR — security patterns, naming conventions, coverage gates.", accent: "#6366f1" },
  { title: "Test Gap Analyzer", body: "Detects untested code paths and surfaces them as actionable review comments. Not just coverage %, but which paths are actually unguarded.", accent: "#6366f1" },
  { title: "Developer Fatigue Tuner", body: "Learns which feedback categories a team dismisses. Signal-to-noise ratio improves over time without manual configuration.", accent: "#6366f1" },
];

export default function FeaturedProject() {
  const { ref, inView } = useInView();
  const cardRef = useSpotlight<HTMLDivElement>();

  return (
    <section
      id="featured"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">featured_project</span>
        </h2>

        <div ref={cardRef} className="relative border border-[#1a1a1a] border-l-[4px] border-l-[#6366f1] bg-[#111111] rounded-lg p-8 md:p-10 card-hover">
          {/* Header */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-mono text-2xl md:text-3xl font-bold text-[#f4f4f5]">
                ACR-QA
              </h3>
              <p className="text-[#6366f1] font-mono text-sm mt-1">
                AI-powered automated code review &amp; quality assurance platform
              </p>
            </div>
            <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded border border-[#4ade80] text-[#4ade80] tracking-widest uppercase bg-[#4ade80]/5 whitespace-nowrap shrink-0 mt-1">
              GRADUATION PROJECT
            </span>
          </div>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base leading-relaxed max-w-3xl mb-8">
            Enterprise-grade CI/CD platform that brings intelligent code review into any development pipeline.
            RAG-powered hallucination detection using Cerebras AI, Policy-as-Code for custom rule enforcement,
            a Test Gap Analyzer, OWASP security automation, and a Developer Fatigue Tuner.
            273 tests running in under 6 seconds. Full CI green.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { value: "273", label: "tests" },
              { value: "<6s", label: "test runtime" },
              { value: "100%", label: "CI pass rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[110px] max-w-[180px] bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-4 text-center"
              >
                <div className="font-mono text-2xl font-bold text-[#6366f1]">{stat.value}</div>
                <div className="font-mono text-xs text-[#71717a] mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Pipeline diagram */}
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#3f3f46] mb-3">pipeline</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {pipeline.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1.5">
                  <div
                    className={`px-3 py-1.5 rounded border font-mono text-xs ${
                      step.accent
                        ? "border-[#6366f1]/50 bg-[#6366f1]/8 text-[#f4f4f5]"
                        : "border-[#2a2a2a] bg-[#0d0d0d] text-[#71717a]"
                    }`}
                  >
                    {step.label}
                  </div>
                  {i < pipeline.length - 1 && (
                    <span className="text-[#3f3f46] font-mono text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-4">
                <h4 className="font-mono text-sm font-bold text-[#f4f4f5] mb-1.5">{f.title}</h4>
                <p className="font-mono text-xs text-[#71717a] leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {stack.map((s) => (
              <span
                key={s}
                className="tag-chip font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#6366f1]/30 text-[#6366f1] bg-[#6366f1]/5"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/ahmed-145/ACR-QA"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow inline-flex items-center gap-2 font-mono text-sm text-[#f4f4f5] hover:text-[#6366f1]"
              style={{ transition: "color 160ms var(--ease-out)" }}
            >
              View on GitHub
              <ExternalLink size={14} className="arrow" />
            </a>
            <Link
              href="/projects/acr-qa"
              className="link-arrow inline-flex items-center gap-2 font-mono text-sm text-[#71717a] hover:text-[#6366f1]"
              style={{ transition: "color 160ms var(--ease-out)" }}
            >
              Full case study <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
