"use client";
import { useInView } from "@/hooks/useInView";

// Change 3: Added Express, REST APIs, Prisma, JWT to Backend;
// NumPy, Pytest to ML & AI; new Mobile & Web group with Next.js, React, Swift, SwiftUI
const skillGroups = [
  {
    label: "Languages",
    items: ["Rust", "C++", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Flask", "FastAPI", "Spring Boot", "PostgreSQL", "Redis", "MongoDB", "Prisma", "JWT"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    label: "Cloud & Infra",
    items: ["Linux", "AWS", "Nginx", "SSH", "systemd", "VirtualBox"],
  },
  {
    label: "ML & AI",
    items: ["scikit-learn", "RAG", "Ollama", "Groq", "Pandas", "NumPy", "SMOTE", "Streamlit", "Pytest"],
  },
  {
    label: "Mobile & Web",
    items: ["Next.js", "React", "Swift", "SwiftUI"],
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
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">skills</span>
        </h2>

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#52525b] sm:min-w-[110px] pt-1">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded border border-[#6366f1]/30 text-[#a1a1aa] bg-[#111111] hover:border-[#6366f1] hover:text-[#6366f1] transition-colors duration-200"
                  >
                    {item}
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
