"use client";
import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  badge?: string;
  oneliner: string;
  description: string;
  stack: string[];
  github: string;
}

const featured: Project[] = [
  {
    name: "URL Shortener + Full Observability Stack",
    badge: "DEPI CAPSTONE",
    oneliner: "Production-ready URL shortener with enterprise-grade monitoring, alerting, and infrastructure as code.",
    description:
      "Built a complete DevOps-first system delivering 225 req/sec at 99.93% uptime. Instrumented with custom Prometheus metrics across 3 Grafana dashboards (19 panels), K8s manifests with HPA, Terraform IaC, GitHub Actions CI/CD, and load tested at P95 62ms. Security audited — zero critical vulnerabilities.",
    stack: ["Node.js", "Docker", "Kubernetes", "Prometheus", "Grafana", "Terraform", "GitHub Actions"],
    github: "https://github.com/ahmed-145/containerized-url-shortener-monnitoring",
  },
  {
    name: "Redis from Scratch",
    oneliner: "A fully functional in-memory key-value store built from the ground up in Rust.",
    description:
      "Implements Strings, Lists, Sets, Sorted Sets, and TTL expiry with a lightweight TCP server and command parser. Concurrency safety enforced via Arc, Mutex, and Rust's ownership model — no shortcuts, no libraries.",
    stack: ["Rust", "TCP", "Multithreading", "Systems Programming"],
    github: "https://github.com/ahmed-145/REDIS_RUST",
  },
  {
    name: "DecodedSound",
    oneliner: "AI-powered cultural translator for SDK (Esdeekid) music from Cape Flats, South Africa.",
    description:
      "Translates hyper-coded Cape Flats Afrikaans/Xhosa/Kaaps lyrics using Groq LLaMA 3.3 70B and Whisper, backed by a 502-term hand-curated slang knowledge base. Ships with a YouTube pipeline via yt-dlp, community KB contributions, admin moderation panel, and IP-based rate limiting.",
    stack: ["Next.js 15", "TypeScript", "Groq LLaMA", "Whisper", "Prisma", "PostgreSQL", "Docker"],
    github: "https://github.com/ahmed-145/DecodedSound",
  },
  {
    name: "OFAC Sanctions Screening",
    oneliner: "RAG-based compliance system for multilingual name matching against the OFAC SDN list.",
    description:
      "Combines TF-IDF retrieval and fuzzy matching (Levenshtein, Jaro-Winkler) with Ollama LLM for multilingual name normalization. Returns MATCH / POSSIBLE_MATCH / NO_MATCH confidence bands for human-in-the-loop review in under 2 seconds on 1K+ records.",
    stack: ["Python", "FastAPI", "Ollama", "TF-IDF", "RAG", "Docker"],
    github: "https://github.com/ahmed-145/ofac-sdn-rag-search",
  },
  {
    name: "Credit Risk Prediction",
    oneliner: "ML pipeline for predicting loan default probability built on real banking data.",
    description:
      "Engineered 17+ financial ratios (DTI, interest coverage, payment burden) from Oracle/Temenos databases with 1,000+ tables. Applied SMOTE for class imbalance, trained RandomForest evaluated on PR-AUC, and deployed via Streamlit for non-technical stakeholder demos.",
    stack: ["Python", "scikit-learn", "SMOTE", "RandomForest", "Streamlit", "Oracle DB"],
    github: "https://github.com/ahmed-145/CreditRiskPrediction",
  },
];

const moreWork = [
  { name: "Secure PDF Portal", stack: ["Java", "Spring Boot", "RSA/AES", "Tomcat"], github: "https://github.com/ahmed-145/secure-customer-pdf-portal" },
  { name: "QariAI", stack: ["Swift", "iOS", "WhisperKit"], github: "https://github.com/AmEgy/QariAI" },
  { name: "Outlook → SFTP", stack: ["Java", "JACOB", "JSch", "SFTP"], github: "https://github.com/ahmed-145/Outlook-SFTP-Automation" },
  { name: "BusHub", stack: ["React", "Tailwind", "Docker", "Nginx"], github: "https://github.com/ahmed-145/BusHub" },
  { name: "Sudoku Cracker", stack: ["C++", "Backtracking"], github: "https://github.com/ahmed-145/SodukuCracker" },
  { name: "Bottle Inspection", stack: ["Python", "OpenCV", "NumPy"], github: "https://github.com/ahmed-145/SoftDrinkBottleQualityInspection" },
  { name: "Custom Shell", stack: ["C++", "Linux", "execvp"], github: "https://github.com/ahmed-145/Custom_Shell" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 flex flex-col gap-4 card-hover relative">
      {project.badge && (
        <span className="absolute top-4 right-4 font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-[#22d3ee] text-[#22d3ee] tracking-widest uppercase bg-[#22d3ee]/5">
          {project.badge}
        </span>
      )}
      <div>
        <h3 className="font-mono text-base font-bold text-[#f4f4f5] leading-tight pr-20">
          {project.name}
        </h3>
        <p className="text-[#6366f1] font-mono text-xs mt-1">{project.oneliner}</p>
      </div>
      <p className="text-[#71717a] text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[#6366f1]/25 text-[#6366f1]/80 bg-[#6366f1]/5">
            {s}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#71717a] hover:text-[#6366f1] transition-colors duration-200 mt-auto"
      >
        <ExternalLink size={12} />
        GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {/* Heading */}
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">projects</span>
        </h2>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* More work */}
        <div>
          <p className="font-mono text-xs text-[#3f3f46] mb-5">// more work</p>
          <div className="border border-[#1a1a1a] rounded-lg overflow-hidden bg-[#0d0d0d]">
            {moreWork.map((p, i) => (
              <div
                key={p.name}
                className={`flex flex-wrap items-center gap-3 px-5 py-3.5 ${
                  i !== moreWork.length - 1 ? "border-b border-[#1a1a1a]" : ""
                } hover:bg-[#111111] transition-colors duration-150`}
              >
                <span className="font-mono text-sm text-[#a1a1aa] min-w-[140px]">{p.name}</span>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#27272a] text-[#52525b] bg-[#111111]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#52525b] hover:text-[#6366f1] transition-colors duration-200 flex items-center gap-1 ml-auto"
                >
                  GitHub <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
