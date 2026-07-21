"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type BadgeColor = "cyan" | "amber";

interface Project {
  name: string;
  shortName?: string;
  badge?: string;
  badgeColor?: BadgeColor;
  oneliner: string;
  description: string;
  stack: string[];
  github: string;
  caseStudy?: string;
}

const BADGE_STYLES: Record<BadgeColor, string> = {
  cyan: "border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/5",
  amber: "border-[#f59e0b] text-[#f59e0b] bg-[#f59e0b]/5",
};

const featured: Project[] = [
  {
    name: "Kim",
    badge: "CO-BUILT",
    badgeColor: "cyan",
    oneliner: "Cross-platform AI agent — full OS control, multi-LLM orchestration, and a Rust TUI CLI, all wired together.",
    description:
      "A desktop AI agent platform built with Tauri (Rust) + React frontend and a Python MCP orchestrator. Supports Claude, GPT-4o, Gemini, DeepSeek, and local Ollama — swappable via one config line. Gives the LLM full OS control: screen vision, mouse/keyboard, file system, shell, browser automation via Playwright. Ships with a FastAPI relay server for phone-to-PC task dispatch, an in-app browser bridge for API-free LLM access, and a full Rust TUI CLI (kim) built with Ratatui. Co-built with Adam Maged.",
    stack: ["Rust", "Tauri", "React", "Python", "MCP", "FastAPI", "Playwright", "Ratatui", "Ollama"],
    github: "https://github.com/AdamMagued/kim",
    caseStudy: "/projects/kim",
  },
  {
    name: "URL Shortener + Full Observability Stack",
    shortName: "URL Shortener",
    badge: "DEPI CAPSTONE",
    badgeColor: "amber",
    oneliner: "Production-ready URL shortener with enterprise-grade monitoring, alerting, and infrastructure as code.",
    description:
      "Built a complete DevOps-first system delivering 2,715 req/sec redirects (P50 32ms, max 169ms) at 99.93% uptime. Instrumented with custom Prometheus metrics across 3 Grafana dashboards (19 panels), K8s manifests with HPA, liveness/readiness probes, and PodDisruptionBudgets, Terraform IaC (EC2, S3, IAM modules), GitHub Actions CI/CD (5 stages: test → build → push → deploy → verify), and k6 load testing under 100 concurrent users. Disaster recovery with automated backup scripts (15-min RTO, 1-hour RPO). Multi-channel alerting (Slack, Email, Discord). Security audited — zero critical vulnerabilities.",
    stack: ["Node.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "Terraform", "GitHub Actions", "k6"],
    github: "https://github.com/ahmed-145/containerized-url-shortener-monnitoring",
    caseStudy: "/projects/url-shortener",
  },
  {
    name: "CineGraph",
    oneliner: "Obsidian-style film discovery canvas with multi-seed semantic intersection — find the exact crossover between any films you name.",
    description:
      "Drop films onto a blank canvas and watch semantically similar films bloom around them with physics-based layout. Add a second seed and the canvas shifts into intersection mode — computing the true semantic AND of both seeds using late-fusion vector intersection across multimodal embeddings. No lists, no star filters. A living graph you navigate with curiosity. Ships with AI explanations (Groq LLaMA), streaming availability via TMDB, constellation save/share, and Supabase auth.",
    stack: ["React", "FastAPI", "Qdrant", "fastembed", "Groq", "Supabase", "Docker", "d3-force"],
    github: "https://github.com/ahmed-145/CineGraph",
    caseStudy: "/projects/cinegraph",
  },
  {
    name: "MinuteMark",
    oneliner: "AI-native exam grading platform — grades in under 3 seconds, validated against human expert benchmarks.",
    description:
      "Enterprise-grade grading platform with intelligent multi-model routing: Groq LLaMA 3.3 for English, Gemini 2.0 Flash for Arabic. Handles batch PDF uploads — auto-splits multi-student scans using LLM detection, grades asynchronously. Ships with semantic plagiarism detection via embedding similarity, OCR via Tesseract, JWT multi-tenancy, and LMS export. Validated against the ASAP-SAS Gold Standard dataset: 50% exact match vs human expert graders, MAE 0.50 on a 0–3 scale, <3s inference latency.",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Groq", "Gemini", "Tesseract", "Docker", "JWT"],
    github: "https://github.com/ahmed-145/MinuteMark",
    caseStudy: "/projects/minutemark",
  },
  {
    name: "Redis from Scratch",
    shortName: "Redis from Scratch",
    oneliner: "A fully functional in-memory key-value store built from the ground up in Rust.",
    description:
      "Implements Strings, Lists, Sets, Sorted Sets, and TTL expiry with a lightweight TCP server and command parser. Concurrency safety enforced via Arc, Mutex, and Rust's ownership model — no shortcuts, no libraries.",
    stack: ["Rust", "TCP", "Multithreading", "Systems Programming"],
    github: "https://github.com/ahmed-145/REDIS_RUST",
    caseStudy: "/projects/redis-from-scratch",
  },
];

const moreWork = [
  { name: "ferrum", stack: ["Rust", "tokio", "axum", "reqwest", "DashMap"], github: "https://github.com/ahmed-145/ferrum", note: "IN DEV" },
  { name: "Nazir", stack: ["Python", "Claude Code", "Gemini CLI", "systemd", "FastAPI"], github: "https://github.com/ahmed-145/Nazir" },
  { name: "Kasane", stack: ["Next.js 14", "TypeScript", "Groq", "Framer Motion"], github: "https://github.com/ahmed-145/kasane" },
  { name: "DecodedSound", stack: ["Next.js 15", "TypeScript", "Groq", "Whisper", "Prisma"], github: "https://github.com/ahmed-145/DecodedSound" },
  { name: "OFAC Sanctions Screening", stack: ["Python", "FastAPI", "Ollama", "RAG"], github: "https://github.com/ahmed-145/ofac-sdn-rag-search" },
  { name: "Credit Risk Prediction", stack: ["Python", "scikit-learn", "SMOTE", "Streamlit"], github: "https://github.com/ahmed-145/CreditRiskPrediction" },
  { name: "Essi", stack: ["Python", "FastAPI", "React Native", "PostgreSQL"], github: "https://github.com/ahmed-145/Essi" },
  { name: "Secure PDF Portal", stack: ["Java", "Spring Boot", "RSA/AES", "Tomcat"], github: "https://github.com/ahmed-145/secure-customer-pdf-portal" },
  { name: "QariAI", stack: ["Swift", "iOS", "WhisperKit"], github: "https://github.com/AmEgy/QariAI" },
  { name: "Outlook → SFTP", stack: ["Java", "JACOB", "JSch", "SFTP"], github: "https://github.com/ahmed-145/Outlook-SFTP-Automation" },
  { name: "BusHub", stack: ["React", "Tailwind", "Docker", "Nginx"], github: "https://github.com/ahmed-145/BusHub" },
  { name: "Sudoku Cracker", stack: ["C++", "Backtracking"], github: "https://github.com/ahmed-145/SodukuCracker" },
  { name: "Bottle Inspection", stack: ["Python", "OpenCV", "NumPy"], github: "https://github.com/ahmed-145/SoftDrinkBottleQualityInspection" },
  { name: "Custom Shell", stack: ["C++", "Linux", "execvp"], github: "https://github.com/ahmed-145/Custom_Shell" },
];

function ProjectPane({ project }: { project: Project }) {
  const spotRef = useSpotlight<HTMLDivElement>();
  return (
    // key on parent (via React key) re-mounts on switch — triggers tabContentIn animation
    <div
      ref={spotRef}
      className="tab-pane-content card-hover relative bg-[#111111] border border-[#1a1a1a] border-l-[3px] border-l-[#6366f1] rounded-lg p-6 md:p-8 h-full flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-xl md:text-2xl font-bold text-[#f4f4f5] leading-tight">
            {project.name}
          </h3>
          <p className="text-[#6366f1] font-mono text-xs md:text-sm mt-1.5">{project.oneliner}</p>
        </div>
        {project.badge && (
          <span
            className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border tracking-widest uppercase whitespace-nowrap shrink-0 mt-1 ${BADGE_STYLES[project.badgeColor ?? "cyan"]}`}
          >
            {project.badge}
          </span>
        )}
      </div>

      <p className="text-[#a1a1aa] text-sm leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[#6366f1]/25 text-[#6366f1]/80 bg-[#6366f1]/5"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow inline-flex items-center gap-1.5 font-mono text-xs text-[#71717a] hover:text-[#6366f1]"
          style={{ transition: "color 160ms var(--ease-out)" }}
        >
          <ExternalLink size={12} />
          GitHub <span className="arrow">→</span>
        </a>
        {project.caseStudy && (
          <Link
            href={project.caseStudy}
            className="link-arrow inline-flex items-center gap-1.5 font-mono text-xs text-[#52525b] hover:text-[#6366f1]"
            style={{ transition: "color 160ms var(--ease-out)" }}
          >
            Case study <span className="arrow">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = featured[activeIndex];

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">projects</span>
        </h2>

        <div className="mb-16">
          {/* Mobile chip rail */}
          <div className="tab-rail-mobile" role="tablist" aria-label="Projects">
            {featured.map((p, i) => (
              <button
                key={p.name}
                role="tab"
                aria-selected={i === activeIndex}
                data-active={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className="tab-chip"
              >
                {p.shortName ?? p.name}
              </button>
            ))}
          </div>

          {/* Desktop: 2-col grid with rail + pane */}
          <div className="grid md:grid-cols-[260px_1fr] gap-6">
            <div className="tab-rail-desktop flex flex-col gap-1" role="tablist" aria-label="Projects">
              {featured.map((p, i) => (
                <button
                  key={p.name}
                  role="tab"
                  aria-selected={i === activeIndex}
                  data-active={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                  className="tab-rail-item px-4 py-3 group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`font-mono text-sm leading-tight ${
                        i === activeIndex ? "text-[#f4f4f5] font-bold" : "text-[#a1a1aa]"
                      } group-hover:text-[#f4f4f5]`}
                      style={{ transition: "color 200ms var(--ease-out)" }}
                    >
                      {p.shortName ?? p.name}
                    </span>
                    {p.badge && (
                      <span
                        className={`font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border tracking-widest uppercase whitespace-nowrap shrink-0 ${BADGE_STYLES[p.badgeColor ?? "cyan"]}`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={`font-mono text-[10px] mt-1 uppercase tracking-wider ${
                      i === activeIndex ? "text-[#6366f1]" : "text-[#52525b]"
                    }`}
                    style={{ transition: "color 200ms var(--ease-out)" }}
                  >
                    {p.stack.slice(0, 2).join(" · ")}
                  </p>
                </button>
              ))}
            </div>

            {/* Active pane — keyed by name so React re-mounts and the
                tabContentIn keyframe runs on every switch */}
            <div role="tabpanel" aria-labelledby={active.name}>
              <ProjectPane key={active.name} project={active} />
            </div>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-[#3f3f46] mb-5">{"// more work"}</p>
          <div className="border border-[#1a1a1a] rounded-lg overflow-x-auto bg-[#0d0d0d]">
            {moreWork.map((p, i) => (
              <a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group link-arrow flex flex-wrap items-center gap-3 px-5 py-3.5 min-w-0 ${
                  i !== moreWork.length - 1 ? "border-b border-[#1a1a1a]" : ""
                } hover:bg-[#111111]`}
                style={{ transition: "background-color 160ms var(--ease-out)" }}
              >
                <span className="font-mono text-sm text-[#a1a1aa] group-hover:text-[#e4e4e7] min-w-[140px] flex items-center gap-2" style={{ transition: "color 160ms var(--ease-out)" }}>
                  {p.name}
                  {p.note && (
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border border-[#f59e0b]/40 text-[#f59e0b] bg-[#f59e0b]/5 tracking-widest uppercase">
                      {p.note}
                    </span>
                  )}
                </span>
                <div className="flex flex-wrap gap-2 flex-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#27272a] text-[#52525b] bg-[#111111]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-[#52525b] group-hover:text-[#6366f1] flex items-center gap-1 ml-auto" style={{ transition: "color 160ms var(--ease-out)" }}>
                  GitHub <ExternalLink size={10} className="arrow" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
