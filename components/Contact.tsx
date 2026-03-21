"use client";
import { useInView } from "@/hooks/useInView";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
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

        {/* Links */}
        <div className="space-y-4 mb-16">
          <a
            href="mailto:ahmedabbass871@gmail.com"
            className="flex items-center gap-4 group w-fit"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] transition-colors duration-200">
              <Mail size={15} className="text-[#71717a] group-hover:text-[#6366f1] transition-colors duration-200" />
            </span>
            <span className="font-mono text-base text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors duration-200">
              ahmedabbass871@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/ahmed-145"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group w-fit"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] transition-colors duration-200">
              <Github size={15} className="text-[#71717a] group-hover:text-[#6366f1] transition-colors duration-200" />
            </span>
            <span className="font-mono text-base text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors duration-200">
              github.com/ahmed-145
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-abbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group w-fit"
          >
            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] transition-colors duration-200">
              <Linkedin size={15} className="text-[#71717a] group-hover:text-[#6366f1] transition-colors duration-200" />
            </span>
            <span className="font-mono text-base text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors duration-200">
              linkedin.com/in/ahmed-mahmoud-abbas
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-[#1a1a1a] pt-8">
          <p className="font-mono text-xs text-[#3f3f46] text-center">
            Built by Ahmed Mahmoud Abbas &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; Cairo, Egypt
          </p>
        </div>
      </div>
    </section>
  );
}
