import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface ArchNode {
  name: string;
  sub?: string;
  accent?: boolean;
}

interface ArchLayer {
  label: string;
  nodes: ArchNode[];
}

interface CaseStudy {
  name: string;
  badge?: string;
  badgeColor?: "green" | "cyan" | "amber";
  oneliner: string;
  github: string;
  stack: string[];
  stats?: Stat[];
  overview: string;
  problem: string;
  solution: string;
  architecture: ArchLayer[];
  highlights: { title: string; body: string }[];
  results: string[];
}

const BADGE_STYLES = {
  green: "border-[#4ade80] text-[#4ade80] bg-[#4ade80]/5",
  cyan: "border-[#22d3ee] text-[#22d3ee] bg-[#22d3ee]/5",
  amber: "border-[#f59e0b] text-[#f59e0b] bg-[#f59e0b]/5",
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  "acr-qa": {
    name: "ACR-QA",
    badge: "GRADUATION PROJECT",
    badgeColor: "green",
    oneliner: "Deterministic security scanner — no LLM, no hallucinations — that out-recalls GPT-5.5 at $0",
    github: "https://github.com/ahmed-145/ACR-QA",
    stack: ["Python", "FastAPI", "AST + Taint Engine", "Semgrep", "Docker", "PostgreSQL", "Redis", "ECDSA + Dilithium3", "GitHub Actions"],
    stats: [
      { value: "58.8%", label: "RealVuln recall (#1)" },
      { value: "$0", label: "cost per scan" },
      { value: "3,147", label: "tests" },
    ],
    overview:
      "ACR-QA is a fully deterministic security scanner I built solo for my graduation project. On the RealVuln 2026 benchmark it out-recalls every frontier-LLM security agent — including GPT-5.5 — at zero cost and with the same auditable answer every single run. No LLM sits in the detection path: it finds bugs by analyzing code, not by guessing about it.",
    problem:
      "Traditional SAST tools drown developers in false positives — 30–70% noise — so teams stop reading them. The 2026 wave bolts LLMs on instead, but they hallucinate vulnerabilities, miss real ones differently on every run, and cost $50+ per scan. A 'clean' LLM scan tells you nothing if tomorrow's run finds different bugs — you can't gate a merge on a model that changes its mind.",
    solution:
      "A purely deterministic engine: AST analysis, intra/inter-procedural taint tracking, and curated rules — no LLM, so it gives bit-identical results every run (CI-enforced). It then PROVES the findings it surfaces are real by firing a live exploit in an ephemeral Docker sandbox, and cryptographically signs every scan with ECDSA-P256 and a post-quantum CRYSTALS-Dilithium3 (FIPS-204) signature. A confidence-tier system surfaces a deterministic ≥2-engine-agreement 'Confirmed' tier at 80% precision.",
    architecture: [
      {
        label: "Entry",
        nodes: [{ name: "GitHub Push" }, { name: "GitHub Actions CI/CD" }],
      },
      {
        label: "Detection (deterministic)",
        nodes: [
          { name: "AST + Taint Engine", sub: "no LLM", accent: true },
          { name: "Semgrep", sub: "corroboration" },
          { name: "Confidence Tiers", sub: "certain / firm" },
        ],
      },
      {
        label: "Proof",
        nodes: [
          { name: "Exploit Verifier", sub: "Docker detonation" },
          { name: "Attestation", sub: "ECDSA + Dilithium3" },
        ],
      },
      {
        label: "Storage",
        nodes: [
          { name: "PostgreSQL", sub: "results + history" },
          { name: "Redis", sub: "rate limit + queue" },
        ],
      },
    ],
    highlights: [
      {
        title: "#1 on RealVuln — beats GPT-5.5 at $0",
        body: "On the RealVuln 2026 benchmark (22 real vulnerable apps), ACR-QA's deterministic engine reaches 58.8% recall — edging out GPT-5.5 (58.2%), and beating Claude Opus 4.8, Gemini 3.1, and every traditional scanner (~3.3× Semgrep) — at $0 versus the LLM agents' $54–62 per scan.",
      },
      {
        title: "Deterministic — no hallucinations",
        body: "No LLM in the detection path, so every scan returns the exact same finding set (bit-identical, CI-enforced). LLM scanners are non-deterministic — they miss 23–52% of their own findings on the next run — which disqualifies them as a merge gate. ACR-QA's result is reproducible, diffable, and auditable.",
      },
      {
        title: "Exploit verification — proof, not guesses",
        body: "Each high-severity finding is detonated in an ephemeral Docker sandbox before it's surfaced: SQL injection shows leaked rows, command injection shows blind exec, SSTI returns the evaluated payload. Only verified-exploitable findings enter the auto-block tier.",
      },
      {
        title: "Post-quantum cryptographic attestation",
        body: "Every scan is signed with ECDSA-P256 AND a post-quantum CRYSTALS-Dilithium3 (FIPS-204) signature — both embed their public key and are independently verifiable offline, so tampering with the findings invalidates the bundle. The release image is Cosign-signed with a Sigstore Rekor entry and ships SLSA L3 provenance.",
      },
    ],
    results: [
      "#1 on recall among all external scanners on RealVuln 2026 — 58.8%, edging out GPT-5.5 (58.2%) at $0",
      "53% recall on 16 never-seen held-out repos — ~2.9× Semgrep — proving it generalizes, not memorizes",
      "100% reproducible: bit-identical findings every run, enforced by a determinism test in CI",
      "Deterministic 'Confirmed' tier (≥2-engine agreement) reaches 80% precision with zero LLM",
      "3,147 tests at 88% CORE coverage; exploit-verified findings with ECDSA + post-quantum Dilithium3 attestation",
    ],
  },

  kim: {
    name: "Kim",
    badge: "CO-BUILT",
    badgeColor: "cyan",
    oneliner: "Cross-platform AI agent with full OS control, multi-LLM orchestration, and a Rust TUI CLI",
    github: "https://github.com/AdamMagued/kim",
    stack: ["Rust", "Tauri", "React", "Python", "MCP", "FastAPI", "Playwright", "Ratatui", "Ollama"],
    overview:
      "Kim is a desktop AI agent platform that gives LLMs genuine control over the host OS. Built with Tauri (Rust) for the desktop shell, React for the UI, and a Python MCP server for orchestration. Co-built with Adam Maged.",
    problem:
      "Existing AI assistants are sandboxed by design — they can't touch your filesystem, can't see your screen, can't click your browser. Real autonomous agents need real OS access. The engineering challenge is doing this safely while keeping the model hot-swappable.",
    solution:
      "A Tauri desktop app fronting a Python MCP orchestration server. The MCP layer exposes tools (screen capture, file system, shell, mouse/keyboard via Playwright, browser control) as structured function calls. The model — Claude, GPT-4o, Gemini, DeepSeek, or local Ollama — is swappable via one config line. A FastAPI relay server enables phone-to-PC task dispatch. A full Rust TUI CLI (built with Ratatui) ships alongside for power users.",
    architecture: [
      {
        label: "Interfaces",
        nodes: [
          { name: "Tauri Desktop", sub: "React UI" },
          { name: "Rust TUI (kim)", sub: "Ratatui" },
          { name: "Phone → FastAPI", sub: "relay server" },
        ],
      },
      {
        label: "Orchestration",
        nodes: [
          { name: "Python MCP Server", sub: "orchestrator", accent: true },
          { name: "LLM Router", sub: "Claude/GPT/Gemini" },
        ],
      },
      {
        label: "OS Tools",
        nodes: [
          { name: "Screen Vision", sub: "screenshots" },
          { name: "Mouse & KB", sub: "pynput" },
          { name: "Filesystem", sub: "read/write" },
          { name: "Browser", sub: "Playwright" },
        ],
      },
      {
        label: "Local LLM",
        nodes: [{ name: "Ollama", sub: "offline mode" }],
      },
    ],
    highlights: [
      {
        title: "MCP as the orchestration layer",
        body: "Model Context Protocol gives each LLM a consistent tool interface. Swapping the underlying model requires zero changes to the tool implementations — the MCP server abstracts over API differences. Local Ollama models work identically to cloud APIs.",
      },
      {
        title: "Rust TUI CLI",
        body: "Built with Ratatui — the Rust TUI framework. The `kim` CLI is a standalone binary that provides the same agent capabilities as the desktop app, but in a terminal. Useful for remote machines, SSH sessions, and developers who live in the terminal.",
      },
      {
        title: "Phone-to-PC dispatch",
        body: "A FastAPI relay server exposes HTTP endpoints that accept task strings from a mobile device. The server queues them to the MCP orchestrator. Lets you trigger PC tasks from anywhere — practical for home automation and background jobs.",
      },
    ],
    results: [
      "Full OS control: screen capture, mouse/keyboard, filesystem, browser automation",
      "5 LLM providers supported — swappable with a single config change",
      "Standalone Rust TUI binary ships alongside the desktop app",
      "FastAPI relay enables mobile-to-PC task dispatch",
      "In-app browser bridge enables API-free LLM access via web UI scraping",
    ],
  },

  cinegraph: {
    name: "CineGraph",
    oneliner: "Obsidian-style film discovery canvas with multi-seed semantic intersection",
    github: "https://github.com/ahmed-145/CineGraph",
    stack: ["React", "FastAPI", "Qdrant", "fastembed", "Groq", "Supabase", "Docker", "d3-force"],
    overview:
      "Drop films onto a blank canvas and watch semantically similar films bloom around them. Add a second seed and the canvas shifts into intersection mode — computing the true semantic AND of both seeds using late-fusion vector intersection across multimodal embeddings.",
    problem:
      "Film recommendation systems are fundamentally boring. They give you a list sorted by a score. But the question isn't \"what is similar to Blade Runner?\" — it's \"what sits at the exact crossover between Blade Runner and Before Sunrise?\" No existing interface can answer that.",
    solution:
      "A physics-based graph canvas where nodes are films and edges encode semantic distance. When you add a second seed film, the system computes the semantic intersection via late-fusion: candidate films are scored against both seeds independently, then scored by how close they are to the intersection of both embedding spaces — not just the average.",
    architecture: [
      {
        label: "Frontend",
        nodes: [
          { name: "React Canvas", sub: "d3-force physics" },
          { name: "Supabase Auth", sub: "OAuth" },
        ],
      },
      {
        label: "API",
        nodes: [
          { name: "FastAPI", sub: "REST + WebSocket", accent: true },
          { name: "TMDB", sub: "streaming data" },
        ],
      },
      {
        label: "Embeddings",
        nodes: [
          { name: "fastembed", sub: "local embeddings" },
          { name: "Qdrant", sub: "vector DB" },
        ],
      },
      {
        label: "AI",
        nodes: [{ name: "Groq LLaMA", sub: "explanations" }],
      },
    ],
    highlights: [
      {
        title: "Late-fusion vector intersection",
        body: "Each candidate film is embedded independently. During multi-seed search, candidates are scored against each seed separately, then ranked by proximity to the intersection region — not the centroid. This finds films that genuinely share both influences rather than just averaging similarities.",
      },
      {
        title: "Physics-based graph navigation",
        body: "d3-force handles node layout. Adding a new seed triggers a force-directed recalculation — the graph reorganizes around the new intersection, with clusters forming and breaking based on semantic affinity. It feels like exploring, not filtering.",
      },
      {
        title: "Constellation save and share",
        body: "Graph states are serializable to a URL hash. You can share a specific semantic exploration with a link, and the recipient sees exactly the same canvas state — same seeds, same cluster layout.",
      },
    ],
    results: [
      "Semantic intersection across multimodal embeddings — novel approach to multi-seed discovery",
      "Physics-based graph with real-time force recalculation on seed addition",
      "AI explanations via streaming Groq LLaMA for why each film appears",
      "Real-time streaming availability via TMDB integration",
      "Constellation save/share via serializable URL state",
    ],
  },

  minutemark: {
    name: "MinuteMark",
    oneliner: "AI-native exam grading platform — grades in under 3 seconds, validated against human expert benchmarks",
    github: "https://github.com/ahmed-145/MinuteMark",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Groq", "Gemini", "Tesseract", "Docker", "JWT"],
    stats: [
      { value: "50%", label: "exact match vs humans" },
      { value: "0.50", label: "MAE on 0–3 scale" },
      { value: "<3s", label: "inference latency" },
    ],
    overview:
      "Enterprise-grade grading platform that handles batch PDF uploads, auto-splits multi-student scans, and grades asynchronously with intelligent multi-model routing based on language detection.",
    problem:
      "Manual exam grading is slow, expensive, and inconsistent across graders. Arabic-language exams are especially underserved — most AI grading tools only handle English. Bulk uploads with mixed students per PDF are completely unsupported.",
    solution:
      "Intelligent model routing: Groq LLaMA 3.3 for English answers, Gemini 2.0 Flash for Arabic. The pipeline detects language per answer, not per exam. PDF uploads are handled by an async OCR pipeline (Tesseract) that auto-splits multi-student scans using LLM-based boundary detection.",
    architecture: [
      {
        label: "Ingestion",
        nodes: [
          { name: "PDF Upload", sub: "batch" },
          { name: "Tesseract OCR", sub: "+ LLM split" },
        ],
      },
      {
        label: "Routing",
        nodes: [
          { name: "Language Detect", sub: "per answer", accent: true },
          { name: "Groq LLaMA 3.3", sub: "English" },
          { name: "Gemini 2.0 Flash", sub: "Arabic" },
        ],
      },
      {
        label: "Features",
        nodes: [
          { name: "Plagiarism Detect", sub: "embedding sim" },
          { name: "LMS Export", sub: "CSV/JSON" },
        ],
      },
      {
        label: "Backend",
        nodes: [
          { name: "FastAPI", sub: "async" },
          { name: "PostgreSQL", sub: "JWT multi-tenant" },
        ],
      },
    ],
    highlights: [
      {
        title: "Per-answer language routing",
        body: "Language detection runs per answer, not per exam. A student can write part of an answer in Arabic and part in English — the system routes each segment to the appropriate model. This handles real-world code-switching in Egyptian exam papers.",
      },
      {
        title: "ASAP-SAS validation",
        body: "Validated against the ASAP-SAS Gold Standard dataset (automated student assessment). 50% exact match with human expert graders, MAE 0.50 on a 0–3 scale. These aren't cherry-picked numbers — this is the standard benchmark used in ML grading research.",
      },
      {
        title: "Semantic plagiarism detection",
        body: "Traditional plagiarism detection is string-match based. MinuteMark embeds all answers and checks cosine similarity across submissions — catching paraphrased copies that share no literal text.",
      },
    ],
    results: [
      "50% exact match vs. human expert graders on ASAP-SAS benchmark",
      "MAE 0.50 on a 0–3 scale — competitive with specialized academic tools",
      "<3s end-to-end inference latency per answer",
      "Handles bulk PDF uploads with automatic multi-student split",
      "Supports English and Arabic with per-answer language routing",
    ],
  },

  "url-shortener": {
    name: "URL Shortener + Full Observability Stack",
    badge: "DEPI CAPSTONE",
    badgeColor: "amber",
    oneliner: "Production-ready URL shortener with enterprise-grade monitoring, alerting, and infrastructure as code",
    github: "https://github.com/ahmed-145/containerized-url-shortener-monnitoring",
    stack: ["Node.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "Terraform", "GitHub Actions", "k6"],
    stats: [
      { value: "225", label: "req/sec" },
      { value: "99.93%", label: "uptime" },
      { value: "62ms", label: "P95 latency" },
    ],
    overview:
      "The capstone project for Egypt's nationally sponsored DEPI DevOps program. The goal: demonstrate production-grade engineering across the full stack — not just that the application works, but that it operates reliably at scale with full observability.",
    problem:
      "Most \"DevOps\" demos show a deployed app with a Dockerfile. That's not DevOps engineering — that's Docker. The real challenge is building a system that you can monitor in production, scale automatically under load, recover from failure in 15 minutes, and deploy confidently through a multi-stage CI/CD pipeline.",
    solution:
      "A URL shortener is intentionally simple — the complexity lives in the infrastructure. K8s with HPA, liveness/readiness probes, and PodDisruptionBudgets. Terraform IaC for EC2, S3, and IAM. GitHub Actions CI/CD with 5 stages. Prometheus + 3 Grafana dashboards with 19 panels. Multi-channel alerting. Disaster recovery scripts with tested RTO/RPO.",
    architecture: [
      {
        label: "Application",
        nodes: [{ name: "Node.js API", sub: "URL shortener" }],
      },
      {
        label: "Container Platform",
        nodes: [
          { name: "Docker", sub: "containerized" },
          { name: "Kubernetes", sub: "HPA + probes", accent: true },
          { name: "Nginx", sub: "ingress" },
        ],
      },
      {
        label: "Infrastructure",
        nodes: [
          { name: "Terraform", sub: "EC2, S3, IAM" },
          { name: "GitHub Actions", sub: "5-stage CI/CD" },
        ],
      },
      {
        label: "Observability",
        nodes: [
          { name: "Prometheus", sub: "custom metrics" },
          { name: "Grafana", sub: "19 panels" },
          { name: "AlertManager", sub: "Slack/Email/Discord" },
        ],
      },
    ],
    highlights: [
      {
        title: "5-stage CI/CD pipeline",
        body: "test → build → push → deploy → verify. Each stage gates the next. The verify stage runs smoke tests against the newly deployed service before marking the deployment successful. Rollback is automatic if verify fails.",
      },
      {
        title: "3 Grafana dashboards, 19 panels",
        body: "Application metrics (request rate, error rate, latency percentiles), infrastructure metrics (CPU, memory, disk, network per pod), and a business metrics dashboard (total URLs shortened, click-through rate, geographic distribution). All with custom Prometheus recording rules for expensive queries.",
      },
      {
        title: "Validated disaster recovery",
        body: "Backup scripts were tested, not just written. 15-minute RTO (recovery time objective) and 1-hour RPO (recovery point objective) were verified by actually running failure scenarios: terminated pods, deleted deployments, corrupt database state.",
      },
    ],
    results: [
      "225 req/sec sustained throughput under k6 load test",
      "99.93% uptime across the testing period",
      "P95 response time of 62ms at full load",
      "Terraform IaC provisions the full environment from scratch in under 10 minutes",
      "Multi-channel alerting: Slack, Email, Discord on threshold breach",
      "Zero critical vulnerabilities in security audit",
    ],
  },

  "redis-from-scratch": {
    name: "Redis from Scratch",
    oneliner: "A fully functional in-memory key-value store built from the ground up in Rust",
    github: "https://github.com/ahmed-145/REDIS_RUST",
    stack: ["Rust", "TCP", "Multithreading", "Systems Programming"],
    overview:
      "Implements Strings, Lists, Sets, Sorted Sets, and TTL expiry with a lightweight TCP server and command parser. Concurrency safety enforced via Arc, Mutex, and Rust's ownership model — no shortcuts, no libraries.",
    problem:
      "The best way to understand how something works is to build it. Redis is everywhere in backend systems — caching, pub/sub, rate limiting, session storage — but its internals are rarely explored. Building it from scratch forces you to confront exactly why it's designed the way it is.",
    solution:
      "A TCP server that speaks RESP (Redis Serialization Protocol) and implements the core data structures. Each connection gets its own thread. Shared state (the key-value store) is wrapped in Arc<Mutex<...>>. TTL expiry runs as a background sweep thread. The project deliberately avoids async runtimes — this is systems programming with the basics.",
    architecture: [
      {
        label: "Network",
        nodes: [{ name: "TCP Listener", sub: "port 6379" }, { name: "RESP Parser", sub: "protocol" }],
      },
      {
        label: "Concurrency",
        nodes: [
          { name: "Thread per connection", accent: true },
          { name: "Arc<Mutex<Store>>", sub: "shared state" },
        ],
      },
      {
        label: "Data Structures",
        nodes: [
          { name: "Strings", sub: "GET/SET/DEL" },
          { name: "Lists", sub: "LPUSH/RPUSH/LRANGE" },
          { name: "Sets", sub: "SADD/SMEMBERS" },
          { name: "Sorted Sets", sub: "ZADD/ZRANGE" },
        ],
      },
      {
        label: "Expiry",
        nodes: [{ name: "TTL Sweep Thread", sub: "background" }],
      },
    ],
    highlights: [
      {
        title: "Rust ownership as correctness proof",
        body: "The borrow checker eliminates entire classes of concurrency bugs at compile time. Arc<Mutex<HashMap>> guarantees exclusive mutable access to the store — no data races by construction. The type system is the invariant.",
      },
      {
        title: "RESP protocol implementation",
        body: "Redis Serialization Protocol is elegantly simple: a type prefix byte, a length, CRLF terminators. Implementing it from scratch builds intuition for why protocol design matters — and why RESP's simplicity is a feature, not an accident.",
      },
      {
        title: "Why thread-per-connection instead of async",
        body: "Tokio or async-std would be \"correct\" for production Redis. But thread-per-connection with explicit Mutexes teaches the underlying model that async runtimes abstract away. Understanding the abstraction requires knowing what's beneath it.",
      },
    ],
    results: [
      "Full Redis command compatibility for core data types",
      "RESP protocol implemented from the TCP byte level",
      "Thread-safe shared state via Rust's ownership model — zero data races",
      "TTL expiry with background sweep thread",
      "No external dependencies beyond the Rust standard library",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = CASE_STUDIES[params.slug];
  if (!study) return { title: "Project Not Found" };
  return {
    title: `${study.name} — Ahmed Mahmoud Abbas`,
    description: study.oneliner,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES[params.slug];
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#52525b] hover:text-[#6366f1] mb-12 group"
          style={{ transition: "color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
        >
          <span
            className="group-hover:-translate-x-1"
            style={{ display: "inline-block", transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            ←
          </span>
          back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-start gap-3 mb-4">
            <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#f4f4f5]">
              {study.name}
            </h1>
            {study.badge && (
              <span
                className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded border tracking-widest uppercase whitespace-nowrap mt-1 ${BADGE_STYLES[study.badgeColor ?? "cyan"]}`}
              >
                {study.badge}
              </span>
            )}
          </div>
          <p className="font-mono text-[#6366f1] text-sm md:text-base mb-6">{study.oneliner}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {study.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#6366f1]/30 text-[#6366f1] bg-[#6366f1]/5"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={study.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#71717a] hover:text-[#6366f1]"
            style={{ transition: "color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <ExternalLink size={14} />
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        {study.stats && (
          <div className="flex flex-wrap gap-4 mb-12">
            {study.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 min-w-[120px] bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 text-center"
              >
                <div className="font-mono text-2xl font-bold text-[#6366f1]">{stat.value}</div>
                <div className="font-mono text-xs text-[#71717a] mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Divider line */}
        <div className="border-t border-[#1a1a1a] mb-12" />

        {/* Overview */}
        <section className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-4">overview</h2>
          <p className="text-[#a1a1aa] leading-relaxed">{study.overview}</p>
        </section>

        {/* Problem */}
        <section className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-4">the problem</h2>
          <p className="text-[#a1a1aa] leading-relaxed">{study.problem}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-4">the solution</h2>
          <p className="text-[#a1a1aa] leading-relaxed">{study.solution}</p>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-6">architecture</h2>
          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-6 space-y-4">
            {study.architecture.map((layer, li) => (
              <div key={li}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#52525b] mb-2">
                  {layer.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.nodes.map((node) => (
                    <div
                      key={node.name}
                      className={`px-3 py-2 rounded border font-mono text-sm ${
                        node.accent
                          ? "border-[#6366f1]/50 bg-[#6366f1]/8 text-[#f4f4f5]"
                          : "border-[#2a2a2a] bg-[#111111] text-[#a1a1aa]"
                      }`}
                    >
                      <div className={node.accent ? "text-[#f4f4f5]" : "text-[#a1a1aa]"}>{node.name}</div>
                      {node.sub && (
                        <div
                          className={`text-[10px] mt-0.5 ${node.accent ? "text-[#6366f1]" : "text-[#52525b]"}`}
                        >
                          {node.sub}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {li < study.architecture.length - 1 && (
                  <div className="text-[#3f3f46] font-mono text-xs mt-3 pl-2">↓</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-6">technical highlights</h2>
          <div className="space-y-6">
            {study.highlights.map((h, i) => (
              <div key={i} className="border-l-2 border-[#6366f1]/40 pl-5">
                <h3 className="font-mono text-sm font-bold text-[#f4f4f5] mb-2">{h.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#3f3f46] mb-4">results</h2>
          <ul className="space-y-2.5">
            {study.results.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#a1a1aa] leading-relaxed">
                <span className="text-[#6366f1] mt-0.5 shrink-0">→</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-wrap gap-4 items-center justify-between">
          <Link
            href="/#projects"
            className="font-mono text-sm text-[#52525b] hover:text-[#6366f1]"
            style={{ transition: "color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            ← all projects
          </Link>
          <a
            href={study.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#71717a] hover:text-[#6366f1]"
            style={{ transition: "color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <ExternalLink size={14} />
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
