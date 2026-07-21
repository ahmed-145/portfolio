"use client";
import { useInView } from "@/hooks/useInView";

type Tier = "expert" | "proficient" | "familiar";

interface Skill {
  name: string;
  tier: Tier;
}

interface SkillGroup {
  label: string;
  items: Skill[];
}

const TIER_STYLES: Record<Tier, string> = {
  expert: "border-[#6366f1]/60 text-[#6366f1] bg-[#6366f1]/8 hover:border-[#6366f1] hover:bg-[#6366f1]/12",
  proficient: "border-[#6366f1]/25 text-[#a1a1aa] bg-[#111111] hover:border-[#6366f1]/50 hover:text-[#6366f1]",
  familiar: "border-[#27272a] text-[#52525b] bg-transparent hover:border-[#3f3f46] hover:text-[#71717a]",
};

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Rust", tier: "expert" },
      { name: "Python", tier: "expert" },
      { name: "C++", tier: "expert" },
      { name: "TypeScript", tier: "proficient" },
      { name: "JavaScript", tier: "proficient" },
      { name: "Java", tier: "proficient" },
      { name: "Swift", tier: "familiar" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", tier: "expert" },
      { name: "Node.js", tier: "expert" },
      { name: "PostgreSQL", tier: "expert" },
      { name: "Redis", tier: "expert" },
      { name: "axum", tier: "proficient" },
      { name: "tokio", tier: "proficient" },
      { name: "Flask", tier: "proficient" },
      { name: "Express", tier: "proficient" },
      { name: "Spring Boot", tier: "proficient" },
      { name: "Prisma", tier: "proficient" },
      { name: "MongoDB", tier: "familiar" },
      { name: "JWT", tier: "proficient" },
      { name: "REST APIs", tier: "expert" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", tier: "expert" },
      { name: "Kubernetes", tier: "expert" },
      { name: "Prometheus", tier: "expert" },
      { name: "Grafana", tier: "expert" },
      { name: "Terraform", tier: "expert" },
      { name: "GitHub Actions", tier: "expert" },
      { name: "Ansible", tier: "proficient" },
      { name: "Jenkins", tier: "proficient" },
    ],
  },
  {
    label: "Cloud & Infra",
    items: [
      { name: "Linux", tier: "expert" },
      { name: "AWS", tier: "proficient" },
      { name: "Nginx", tier: "proficient" },
      { name: "SSH", tier: "expert" },
      { name: "systemd", tier: "proficient" },
      { name: "VirtualBox", tier: "familiar" },
    ],
  },
  {
    label: "ML & AI",
    items: [
      { name: "RAG", tier: "expert" },
      { name: "Groq", tier: "expert" },
      { name: "Ollama", tier: "expert" },
      { name: "Qdrant", tier: "proficient" },
      { name: "spaCy", tier: "proficient" },
      { name: "scikit-learn", tier: "proficient" },
      { name: "Pandas", tier: "proficient" },
      { name: "NumPy", tier: "proficient" },
      { name: "Streamlit", tier: "proficient" },
      { name: "SMOTE", tier: "familiar" },
      { name: "Pytest", tier: "expert" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", tier: "proficient" },
      { name: "React", tier: "proficient" },
      { name: "React Native", tier: "familiar" },
      { name: "Tailwind CSS", tier: "proficient" },
      { name: "Framer Motion", tier: "familiar" },
      { name: "SwiftUI", tier: "familiar" },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">skills</span>
        </h2>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-10">
          {(["expert", "proficient", "familiar"] as Tier[]).map((tier) => (
            <div key={tier} className="flex items-center gap-1.5">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  tier === "expert"
                    ? "bg-[#6366f1]"
                    : tier === "proficient"
                    ? "bg-[#6366f1]/40"
                    : "bg-[#3f3f46]"
                }`}
              />
              <span className="font-mono text-[10px] text-[#52525b] uppercase tracking-widest">
                {tier}
              </span>
            </div>
          ))}
        </div>

        <div className={`stagger space-y-5 ${inView ? "in-view" : ""}`}>
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
              style={{ ["--stagger-index" as string]: i }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[#52525b] sm:min-w-[110px] pt-1.5">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`tag-chip font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded border ${TIER_STYLES[item.tier]}`}
                    style={{ transition: "color 150ms var(--ease-out), border-color 150ms var(--ease-out), background-color 150ms var(--ease-out)" }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
