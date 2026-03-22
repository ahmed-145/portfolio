"use client";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    // Fix 1: py-24 → py-16
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="pt-16 pb-8 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {/* Heading */}
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">about</span>
        </h2>

        {/* Fix 3B: items-stretch so both columns reach the same height */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left — Prose */}
          {/* Fix 9: single column on mobile (default) */}
          <div className="space-y-5 text-[#a1a1aa] leading-relaxed text-base">
            <p>
              Backend and DevOps engineer with production experience across banking, compliance, and infrastructure.
              Built an AI-powered code review platform from scratch, shipped four prototypes to{" "}
              <span className="text-[#6366f1] font-medium">NBK Egypt&apos;s</span> internal banking teams, and delivered a
              full observability stack handling{" "}
              <span className="text-[#f4f4f5]">225 req/sec</span> under Egypt&apos;s nationally sponsored{" "}
              <span className="text-[#6366f1] font-medium">DEPI program</span>. I was selected for ICPC and earned
              an Honorable Mention at the 2024 ECPC Qualifications. Graduating June 2026 — available for remote and
              on-site roles — available now for the right opportunity. I&apos;m drawn to systems where reliability and performance aren&apos;t optional
              — observability, fault tolerance, and clean architecture are things I think about from day one.
            </p>
          </div>

          {/* Right — Terminal block */}
          <div className="relative">
            <div
              className="relative bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-5 font-mono text-sm terminal-scanlines overflow-hidden h-full"
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
                    <span className="text-[#71717a]">open to remote &amp; on-site roles</span>
                  </div>
                  <div>
                    <span className="text-[#6366f1]">→</span>{" "}
                    <span className="text-[#71717a]">available now</span>
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
