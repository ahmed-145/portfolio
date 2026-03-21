"use client";
import { useInView } from "@/hooks/useInView";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    // Fix 1: py-24 → py-16
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="pt-12 pb-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">contact</span>
        </h2>

        {/* Copy */}
        <div className="max-w-2xl mb-12 space-y-2 text-[#a1a1aa] text-base leading-relaxed">
          <p>Graduating June 2026. Available from July 2026.</p>
          <p>Open to backend, DevOps, and SRE positions — remote or on-site. UTC+2, great overlap with European teams.</p>
          <p className="text-[#f4f4f5]">If you&apos;re building something serious, let&apos;s talk.</p>
        </div>

        {/* Fix 6: larger links (text-lg), bigger icons (w-5 h-5), gap-6, hover indigo color shift */}
        {/* Fix 9: full-width tappable links on mobile (min-h touch target via py-2) */}
        <div className="flex flex-col gap-6 mb-16">
          <a
            href="mailto:ahmedabbass871@gmail.com"
            className="flex items-center gap-4 group w-full sm:w-fit min-h-[44px] py-1"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] transition-colors duration-200 shrink-0">
              <Mail size={18} className="text-[#71717a] group-hover:text-[#6366f1] transition-colors duration-200" />
            </span>
            <span className="font-mono text-lg text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors duration-200 underline-offset-4 group-hover:underline">
              ahmedabbass871@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/ahmed-145"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group w-full sm:w-fit min-h-[44px] py-1"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] transition-colors duration-200 shrink-0">
              <Github size={18} className="text-[#71717a] group-hover:text-[#6366f1] transition-colors duration-200" />
            </span>
            <span className="font-mono text-lg text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors duration-200 underline-offset-4 group-hover:underline">
              github.com/ahmed-145
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-abbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group w-full sm:w-fit min-h-[44px] py-1"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] transition-colors duration-200 shrink-0">
              <Linkedin size={18} className="text-[#71717a] group-hover:text-[#6366f1] transition-colors duration-200" />
            </span>
            <span className="font-mono text-lg text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors duration-200 underline-offset-4 group-hover:underline">
              linkedin.com/in/ahmed-mahmoud-abbas
            </span>
          </a>
        </div>

        {/* Fix 10: mt-16 + border-t border-zinc-800 separator */}
        <div className="mt-16 border-t border-zinc-800 pt-8">
          <p className="font-mono text-xs text-[#3f3f46] text-center">
            Built by Ahmed Mahmoud Abbas &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; Cairo, Egypt
          </p>
        </div>
      </div>
    </section>
  );
}
