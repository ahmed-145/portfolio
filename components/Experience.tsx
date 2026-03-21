"use client";
import { useInView } from "@/hooks/useInView";

interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  location: string;
  note?: string;
  bullets: string[];
}

// Change 2: DEPI first (ended Dec 2025), NBK second (ended Sep 2025) — newest-first
const experience: ExperienceEntry[] = [
  {
    company: "Digital Egypt Pioneers Initiative (MCIT – EYouth)",
    role: "DevOps Engineering Trainee",
    duration: "Jun 2025 – Dec 2025",
    location: "Zamalek, Giza, Egypt",
    bullets: [
      "Selected for Egypt's nationally sponsored DevOps program under the Ministry of Communications and Information Technology.",
      "Automated CI/CD pipelines with Git, Jenkins, and Docker — reduced deployment time by 40%.",
      "Built reusable IaC modules with Terraform and Ansible to provision 5+ environments.",
      "Deployed and monitored containerized microservices on Kubernetes with Prometheus and Grafana.",
      "Capstone: production URL shortener with 3 Grafana dashboards, K8s HPA, Terraform IaC, CI/CD, and load tested at 225 req/sec.",
    ],
  },
  {
    company: "NBK Egypt",
    role: "R&D Intern — Development & Application Management",
    duration: "Aug 2025 – Sep 2025",
    location: "New Cairo, Cairo, Egypt",
    note: "extended by 2 weeks based on performance",
    bullets: [
      "Delivered 4 AI/ML and backend prototypes across 6 weeks: loan risk predictor, OFAC sanctions screener, encrypted PDF portal, and Outlook→SFTP automation.",
      "Applied RAG, fuzzy matching (Levenshtein/Jaro-Winkler), hybrid encryption (RSA-2048/AES-256-GCM), and Spring Boot in a live banking environment.",
      "Integrated with Temenos T24 core banking system and Oracle enterprise databases (1,000+ tables).",
    ],
  },
  {
    company: "Emkay Foods",
    role: "Information Technology Intern",
    duration: "Aug 2024",
    location: "Sheikh Zayed, Giza, Egypt",
    bullets: [
      "Supported IT operations across 150+ endpoints: Active Directory, DHCP, VPN/VLAN configuration.",
      "Configured managed switches, FortiGate/Sophos firewalls, and wireless APs.",
      "Assisted with ERP user support and access provisioning.",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-6 timeline-line space-y-10">
          {experience.map((entry) => (
            <div key={entry.company} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-[#6366f1] border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(99,102,241,0.5)]" />

              {/* Card */}
              <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 ml-2">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-mono text-base font-bold text-[#f4f4f5]">{entry.company}</h3>
                  <span className="font-mono text-xs text-[#71717a] whitespace-nowrap">{entry.duration}</span>
                </div>
                <p className="font-mono text-sm text-[#6366f1] mb-0.5">{entry.role}</p>
                <p className="font-mono text-xs text-[#52525b] mb-4">
                  {entry.location}
                  {entry.note && (
                    <span className="text-[#71717a] italic"> · ({entry.note})</span>
                  )}
                </p>
                <ul className="space-y-2">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#a1a1aa] leading-relaxed">
                      <span className="text-[#6366f1] mt-0.5 shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
