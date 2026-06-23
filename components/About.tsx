"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

type Line = { type: "input" | "output" | "divider"; text?: string };

const COMMANDS: Record<string, string[]> = {
  whoami: [
    "ahmed mahmoud abbas",
    "backend & devops engineer · cairo, egypt · utc+2",
    "nbu egypt intern · depi graduate · icpc competitor",
  ],
  "ls projects/": [
    "acr-qa/         → deterministic security scanner · beats gpt-5.5 at $0",
    "kim/            → cross-platform ai agent (rust + python)",
    "cinegraph/      → semantic film discovery canvas",
    "minutemark/     → ai exam grading, validated vs humans",
    "url-shortener/  → devops capstone, 225 req/sec",
    "redis/          → built from scratch in rust",
  ],
  "cat skills.txt": [
    "rust · python · node.js · typescript · c++",
    "docker · kubernetes · terraform · ansible",
    "prometheus · grafana · postgresql · redis",
    "fastapi · flask · next.js · react",
  ],
  "./status.sh": [
    "→ open to remote & on-site roles",
    "→ available now",
    "→ graduating june 2026",
    "→ preference: backend, devops, sre",
  ],
  "git log --oneline": [
    "a1b2c3d (head) built redis from scratch in rust",
    "f4e5d6c shipped kim — ai agent with full os control",
    "7g8h9i0 acr-qa: #1 on realvuln (58.8%) · beats gpt-5.5 · 3,147 tests",
    "j1k2l3m delivered 4 prototypes to nbk egypt r&d",
    "n4o5p6q icpc selected · ecpc 2024 honorable mention",
  ],
  "ping opportunity": [
    "PING opportunity (available@now) 56 bytes of data.",
    "64 bytes seq=0 ttl=64 time=0ms  (already here)",
    "---",
    "→ open to senior/mid backend & devops roles",
    "→ ahmedabbass871@gmail.com",
    "→ response time: fast",
  ],
  help: [
    "available commands:",
    "  whoami            — who I am",
    "  ls projects/      — all projects",
    "  cat skills.txt    — tech stack",
    "  ./status.sh       — availability & goals",
    "  git log --oneline — recent highlights",
    "  ping opportunity  — hiring?",
    "  clear             — clear terminal",
  ],
  clear: [],
};

const BOOT: Line[] = [
  { type: "output", text: "portfolio v2.0 — ahmed mahmoud abbas" },
  { type: "output", text: "type 'help' for available commands" },
  { type: "divider" },
  { type: "input", text: "whoami" },
  ...COMMANDS.whoami.map((t) => ({ type: "output" as const, text: t })),
  { type: "input", text: "./status.sh" },
  ...COMMANDS["./status.sh"].map((t) => ({ type: "output" as const, text: t })),
];

export default function About() {
  const { ref, inView } = useInView();
  const [lines, setLines] = useState<Line[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bootStarted = useRef(false);

  const scrollBottom = useCallback(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, []);

  // Scroll to bottom on every new line (runs after DOM update)
  useEffect(() => {
    scrollBottom();
  }, [lines, scrollBottom]);

  useEffect(() => {
    if (!inView || bootStarted.current) return;
    bootStarted.current = true;
    let i = 0;
    const step = () => {
      if (i >= BOOT.length) { setInputEnabled(true); return; }
      const line = BOOT[i];
      setLines((prev) => [...prev, line]);
      scrollBottom();
      i++;
      setTimeout(step, line.type === "input" ? 380 : 55);
    };
    setTimeout(step, 400);
  }, [inView, scrollBottom]);

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      setLines((prev) => [...prev, { type: "input", text: raw }]);
      if (cmd === "clear") { setLines([]); return; }
      const key = Object.keys(COMMANDS).find((k) => k === cmd);
      const output = key ? COMMANDS[key] : [`bash: ${cmd}: command not found. type 'help'`];
      output.forEach((text, idx) => {
        setTimeout(() => {
          setLines((prev) => [...prev, { type: "output", text }]);
          scrollBottom();
        }, idx * 45);
      });
      scrollBottom();
    },
    [scrollBottom]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = inputVal;
      setInputVal("");
      runCommand(val);
    }
  };

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="pt-16 pb-8 px-6">
      <div className={`max-w-[1100px] mx-auto reveal ${inView ? "in-view" : ""}`}>
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-12 section-heading">
          <span className="text-[#6366f1]">#</span>{" "}
          <span className="text-[#f4f4f5]">about</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Bio text */}
          <div className="space-y-5 text-[#a1a1aa] leading-relaxed text-base">
            <p>
              Backend and DevOps engineer with production experience across banking, compliance,
              and infrastructure. Built a deterministic security scanner from scratch that out-recalls
              GPT-5.5 at $0, shipped four prototypes to{" "}
              <span className="text-[#6366f1] font-medium">NBK Egypt&apos;s</span> internal teams,
              and delivered a full observability stack handling{" "}
              <span className="text-[#f4f4f5]">225 req/sec</span> under Egypt&apos;s nationally
              sponsored{" "}
              <span className="text-[#6366f1] font-medium">DEPI program</span>.
            </p>
            <p>
              Selected for ICPC, Honorable Mention at ECPC 2024. Graduating June 2026 — available
              now for the right opportunity.
            </p>
            <p>
              I&apos;m drawn to systems where reliability isn&apos;t optional. Observability, fault
              tolerance, and clean architecture are things I design in from day one, not retrofit later.
            </p>

            {/* Engineering manifesto */}
            <div className="pt-5 border-t border-[#1a1a1a]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#3f3f46] mb-3">
                {"// philosophy"}
              </p>
              <blockquote className="text-sm text-[#71717a] leading-relaxed border-l-2 border-[#6366f1]/30 pl-4 italic">
                Ship working systems over impressive architectures. Observability before
                optimization. If it can&apos;t be tested in CI, it shouldn&apos;t exist in prod. Delete
                code aggressively. The simplest thing that works is often the most elegant —
                complexity is technical debt with compounding interest.
              </blockquote>
            </div>
          </div>

          {/* Interactive terminal */}
          <div className="relative flex flex-col gap-2">
            {/* Fixed-height terminal window: flex-col so header + scrollable body work together */}
            <div
              className="relative bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg terminal-scanlines"
              style={{ height: "380px", display: "flex", flexDirection: "column" }}
            >
              {/* Traffic lights — fixed top bar */}
              <div className="flex gap-1.5 px-4 py-3 border-b border-[#1a1a1a] items-center rounded-t-lg shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="font-mono text-[10px] text-[#3f3f46] ml-2 truncate">
                  ahmed@portfolio ~ %
                </span>
              </div>

              {/* Scrollable output — fills remaining height */}
              <div
                ref={termRef}
                className="p-4 font-mono text-sm cursor-text rounded-b-lg"
                style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}
                onClick={() => inputEnabled && inputRef.current?.focus()}
              >
                <div className="space-y-0.5">
                  {lines.map((line, i) =>
                    line.type === "divider" ? (
                      <div key={i} className="border-t border-[#1a1a1a] my-2" />
                    ) : line.type === "input" ? (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#4ade80] shrink-0">$</span>
                        <span className="text-[#f4f4f5]">{line.text}</span>
                      </div>
                    ) : (
                      <div key={i} className="pl-4 text-[#71717a] break-words">
                        {line.text}
                      </div>
                    )
                  )}

                  {/* Live input line */}
                  {inputEnabled && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#4ade80] shrink-0">$</span>
                      <input
                        ref={inputRef}
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={onKeyDown}
                        className="flex-1 bg-transparent text-[#f4f4f5] outline-none font-mono text-sm min-w-0"
                        spellCheck={false}
                        autoComplete="off"
                        autoCapitalize="off"
                        aria-label="Terminal input"
                      />
                      {inputVal === "" && (
                        <span className="cursor-blink text-[#6366f1] shrink-0">|</span>
                      )}
                    </div>
                  )}
                  {!inputEnabled && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#4ade80] shrink-0">$</span>
                      <span className="cursor-blink text-[#6366f1]">|</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="font-mono text-[10px] text-[#3f3f46] text-center">
              interactive — type a command ↑
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
