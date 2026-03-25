"use client";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Download } from "lucide-react";

export default function Hero() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Grid overlay fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />

      <div
        className={`relative z-10 text-center px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Name */}
        <p className="font-mono text-sm text-[#71717a] mb-4 tracking-[0.2em] uppercase">
          Ahmed Mahmoud Abbas
        </p>

        {/* Tagline */}
        {/* Fix 9: text-4xl on mobile */}
        <h1 className="font-mono text-4xl md:text-7xl font-bold text-[#f4f4f5] leading-tight mb-2">
          I build systems
          <br />
          <span className="text-[#6366f1]">that ship.</span>
          <span className="cursor-blink text-indigo-400">|</span>
        </h1>

        {/* Fix 2: Two intentional lines — no orphaned text */}
        <p className="mt-6 text-[#71717a] text-base md:text-lg mx-auto leading-relaxed text-center">
          <span className="block">Backend &amp; DevOps Engineer &nbsp;·&nbsp; Final-year CS @ KSIU</span>
          <span className="block mt-1">Graduating June 2026 &nbsp;—&nbsp; available now for the right opportunity</span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/Ahmed_Mahmoud_Abbas_Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white font-mono text-sm font-medium rounded-lg hover:bg-[#5254cc] transition-colors duration-200"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="https://github.com/ahmed-145"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#3f3f46] text-[#f4f4f5] font-mono text-sm font-medium rounded-lg hover:border-[#6366f1] hover:text-[#6366f1] transition-colors duration-200"
          >
            <ExternalLink size={16} />
            GitHub
          </a>
        </div>

        {/* LinkedIn text link */}
        <div className="mt-5">
          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-abbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717a] font-mono text-xs hover:text-[#6366f1] transition-colors duration-200 tracking-wider"
          >
            linkedin.com/in/ahmed-mahmoud-abbas →
          </a>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3f3f46]">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#3f3f46] to-transparent" />
      </div>
    </section>
  );
}
