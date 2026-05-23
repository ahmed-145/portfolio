"use client";
import { Fragment, useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useSpotlight } from "@/hooks/useSpotlight";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ExternalLink, Download } from "lucide-react";

const line1 = ["I", "build", "systems"];
const line2 = ["that", "ship."];

export default function Hero() {
  const { ref, inView } = useInView(0.1);
  const heroRef = useSpotlight<HTMLElement>();
  const cvRef = useMagnetic<HTMLAnchorElement>(0.2);
  const ghRef = useMagnetic<HTMLAnchorElement>(0.2);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Combine inView ref + spotlight ref onto the section
  const setSectionRef = (node: HTMLElement | null) => {
    (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    (heroRef as React.MutableRefObject<HTMLElement | null>).current = node;
  };

  return (
    <section
      id="hero"
      ref={setSectionRef}
      className="hero-spotlight relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
      {/* Vignette — pulls eye toward center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 45%, transparent 30%, rgba(10,10,10,0.55) 100%)",
        }}
      />

      <div className={`relative z-10 text-center px-6 reveal ${inView ? "in-view" : ""}`}>
        <p className="font-mono text-sm text-[#71717a] mb-4 tracking-[0.2em] uppercase">
          Ahmed Mahmoud Abbas
        </p>

        <h1 className={`word-stagger font-mono text-4xl md:text-7xl font-bold text-[#f4f4f5] leading-tight mb-2 ${inView ? "in-view" : ""}`}>
          {line1.map((w, i) => (
            <Fragment key={`l1-${i}`}>
              <span style={{ ["--word-index" as string]: i }}>{w}</span>
              {i < line1.length - 1 ? " " : ""}
            </Fragment>
          ))}
          <br />
          {line2.map((w, i) => (
            <Fragment key={`l2-${i}`}>
              <span
                className="text-[#6366f1]"
                style={{ ["--word-index" as string]: line1.length + i }}
              >
                {w}
              </span>
              {i < line2.length - 1 ? " " : ""}
            </Fragment>
          ))}
          <span
            className="cursor-blink text-indigo-400"
            style={{ animationPlayState: visible ? "running" : "paused" }}
          >|</span>
        </h1>

        <p className="mt-6 text-[#71717a] text-base md:text-lg mx-auto leading-relaxed text-center">
          <span className="block">Backend &amp; DevOps Engineer &nbsp;·&nbsp; Final-year CS @ KSIU</span>
          <span className="block mt-1">Graduating June 2026 &nbsp;—&nbsp; available now for the right opportunity</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            ref={cvRef}
            href="/Ahmed_Mahmoud_Abbas_Local.pdf"
            download="Ahmed_Mahmoud_Abbas_Resume.pdf"
            aria-label="Download Resume PDF"
            className="magnetic pressable inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white font-mono text-sm font-medium rounded-lg hover:bg-[#5254cc]"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
          <a
            ref={ghRef}
            href="https://github.com/ahmed-145"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic pressable inline-flex items-center gap-2 px-6 py-3 border border-[#3f3f46] text-[#f4f4f5] font-mono text-sm font-medium rounded-lg hover:border-[#6366f1] hover:text-[#6366f1]"
          >
            <ExternalLink size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-abbas/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow inline-flex items-center gap-1 text-[#71717a] font-mono text-xs hover:text-[#6366f1] tracking-wider"
          >
            linkedin.com/in/ahmed-mahmoud-abbas <span className="arrow">→</span>
          </a>
          <span className="hidden sm:inline text-[#2a2a2a] font-mono text-xs">·</span>
          <button
            onClick={() => {
              const e = new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true });
              window.dispatchEvent(e);
            }}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#3f3f46] hover:text-[#6366f1]"
            style={{ transition: "color 160ms var(--ease-out)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <kbd className="px-1.5 py-0.5 rounded border border-[#2a2a2a] text-[#3f3f46] font-mono" style={{ fontSize: "10px" }}>⌘K</kbd>
            search
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3f3f46]">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#3f3f46] to-transparent" />
      </div>
    </section>
  );
}
