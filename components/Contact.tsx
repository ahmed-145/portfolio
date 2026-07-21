"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, Github, Linkedin, Code2, Check, Copy } from "lucide-react";

const EMAIL = "ahmedabbass871@gmail.com";

function EmailRow({ index }: { index: number }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={onCopy}
      data-copied={copied}
      className="copy-trigger contact-row flex items-center gap-4 group w-full sm:w-fit min-h-[44px] py-1"
      style={{ ["--stagger-index" as string]: index }}
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      <span className="contact-icon-wrap relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] shrink-0">
        <Mail className="copy-icon-default contact-icon w-5 h-5 text-[#71717a] group-hover:text-[#6366f1]" />
        <Check className="copy-icon-copied w-5 h-5 text-[#4ade80]" />
      </span>
      <span className="relative flex items-center gap-2 flex-wrap">
        <span className="relative inline-flex">
          <span
            className="copy-label-default font-mono text-lg text-[#a1a1aa] group-hover:text-indigo-400 underline-offset-4 group-hover:underline"
            style={{ transition: "color 160ms var(--ease-out)" }}
          >
            {EMAIL}
          </span>
          <span className="copy-label-copied absolute inset-0 font-mono text-lg">
            copied to clipboard
          </span>
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-[#3f3f46] group-hover:text-[#52525b]" style={{ transition: "color 160ms var(--ease-out)" }}>
          <Copy size={10} /> click to copy
        </span>
      </span>
    </a>
  );
}

const otherLinks = [
  { icon: Github, label: "github.com/ahmed-145", href: "https://github.com/ahmed-145", sub: null },
  { icon: Linkedin, label: "linkedin.com/in/ahmed-mahmoud-abbas", href: "https://www.linkedin.com/in/ahmed-mahmoud-abbas/", sub: null },
  { icon: Code2, label: "leetcode.com/u/Ahmeed145", href: "https://leetcode.com/u/Ahmeed145/", sub: "— 255 solved (129M · 16H) · C++" },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="pt-12 pb-16 px-6"
    >
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-10 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">contact</span>
        </h2>

        <div className="max-w-2xl mb-12 space-y-2 text-[#a1a1aa] text-base leading-relaxed">
          <p>Graduated June 2026. Available now for the right opportunity.</p>
          <p>Open to backend, DevOps, and SRE positions — remote or on-site. UTC+2, great overlap with European teams.</p>
          <p className="text-[#f4f4f5]">If you&apos;re building something serious, let&apos;s talk.</p>
        </div>

        <div className={`stagger flex flex-col gap-6 mb-16 ${inView ? "in-view" : ""}`}>
          <EmailRow index={0} />
          {otherLinks.map(({ icon: Icon, label, href, sub }, i) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row flex items-center gap-4 group w-full sm:w-fit min-h-[44px] py-1"
              style={{ ["--stagger-index" as string]: i + 1 }}
            >
              <span className="contact-icon-wrap w-10 h-10 flex items-center justify-center rounded-lg bg-[#111111] border border-[#1a1a1a] group-hover:border-[#6366f1] shrink-0">
                <Icon className="contact-icon w-5 h-5 text-[#71717a] group-hover:text-[#6366f1]" />
              </span>
              <span className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="font-mono text-lg text-[#a1a1aa] group-hover:text-indigo-400 underline-offset-4 group-hover:underline"
                  style={{ transition: "color 160ms var(--ease-out)" }}
                >
                  {label}
                </span>
                {sub && <span className="font-mono text-sm text-[#52525b]">{sub}</span>}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8">
          <p className="font-mono text-xs text-[#3f3f46] text-center">
            Built by Ahmed Mahmoud Abbas &nbsp;·&nbsp; 2026 &nbsp;·&nbsp; Cairo, Egypt
          </p>
        </div>
      </div>
    </section>
  );
}
