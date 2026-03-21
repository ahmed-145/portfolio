"use client";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {/* Heading */}
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">about</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Prose */}
          <div className="space-y-5 text-[#a1a1aa] leading-relaxed text-base">
            <p>
              Senior Software Engineering student at KSIU graduating June 2026, with a strong focus on backend development
              and DevOps. I build production-grade systems — a Redis clone from scratch in Rust, an AI-powered code review
              platform with RAG and full CI/CD, and a complete observability stack handling{" "}
              <span className="text-[#f4f4f5]">225 req/sec</span>.
            </p>
            <p>
              I was selected for Egypt&apos;s nationally sponsored{" "}
              <span className="text-[#6366f1] font-medium">DEPI DevOps program</span> and completed a 6-week R&amp;D
              internship at{" "}
              <span className="text-[#6366f1] font-medium">NBK Egypt</span> — extended by 2 weeks based on performance —
              where I shipped four working prototypes to internal banking teams. I also compete in ICPC and earned an
              Honorable Mention at the 2024 ECPC Qualifications.
            </p>
            <p>
              Open to remote backend, DevOps, and SRE roles from July 2026.{" "}
              <span className="text-[#f4f4f5]">UTC+2</span> — good overlap with European teams.
            </p>
          </div>

          {/* Right — Terminal block */}
          <div className="relative">
            <div
              className="relative bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-5 font-mono text-sm terminal-scanlines overflow-hidden"
              style={{ minHeight: "200px" }}
            >
              {/* Terminal dots */}
              <div className="flex gap-1.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>

              <div className="space-y-1 text-[#a1a1aa]">
                <div>
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="text-[#f4f4f5]">whoami</span>
                </div>
                <div className="pl-2 text-[#71717a]">ahmed — backend &amp; devops engineer</div>
                <div className="mt-3">
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="text-[#f4f4f5]">cat skills.txt</span>
                </div>
                <div className="pl-2 text-[#71717a]">
                  rust · python · node.js · docker
                  <br />
                  kubernetes · terraform · postgresql
                </div>
                <div className="mt-3">
                  <span className="text-[#4ade80]">$</span>{" "}
                  <span className="text-[#f4f4f5]">./status.sh</span>
                </div>
                <div className="pl-2 space-y-0.5">
                  <div>
                    <span className="text-[#6366f1]">→</span>{" "}
                    <span className="text-[#71717a]">open to remote roles</span>
                  </div>
                  <div>
                    <span className="text-[#6366f1]">→</span>{" "}
                    <span className="text-[#71717a]">available july 2026</span>
                  </div>
                  <div>
                    <span className="text-[#6366f1]">→</span>{" "}
                    <span className="text-[#71717a]">utc+2 · cairo, egypt</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-[#4ade80]">$</span>
                  <span className="cursor-blink text-[#6366f1]">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
