"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Hash, Folder, Mail, ExternalLink, Download, ArrowRight, Terminal } from "lucide-react";

interface Command {
  id: string;
  label: string;
  subtitle?: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
}

const NAV_SECTIONS = [
  { id: "hero", label: "Home", subtitle: "Back to top" },
  { id: "about", label: "About", subtitle: "Who I am" },
  { id: "featured", label: "Featured Project", subtitle: "ACR-QA — graduation project" },
  { id: "projects", label: "Projects", subtitle: "All projects" },
  { id: "recognition", label: "Recognition", subtitle: "Achievements & awards" },
  { id: "experience", label: "Experience", subtitle: "Work history" },
  { id: "skills", label: "Skills", subtitle: "Tech stack" },
  { id: "currently", label: "Currently", subtitle: "What I'm up to now" },
  { id: "contact", label: "Contact", subtitle: "Let's talk" },
];

const PROJECTS = [
  { id: "acr-qa", label: "ACR-QA", subtitle: "Deterministic security scanner · #1 on RealVuln 2026, beats GPT-5.5 at $0", href: "/projects/acr-qa", github: "https://github.com/ahmed-145/ACR-QA" },
  { id: "ferrum", label: "ferrum", subtitle: "Pure Rust AI gateway · <500µs overhead · tokio + axum · IN DEV", href: "https://github.com/ahmed-145/ferrum", github: "https://github.com/ahmed-145/ferrum" },
  { id: "kim", label: "Kim", subtitle: "Cross-platform AI agent · Rust, Tauri, Python, MCP", href: "/projects/kim", github: "https://github.com/AdamMagued/kim" },
  { id: "cinegraph", label: "CineGraph", subtitle: "Semantic film discovery canvas · React, Qdrant, FastAPI", href: "/projects/cinegraph", github: "https://github.com/ahmed-145/CineGraph" },
  { id: "nazir", label: "Nazir", subtitle: "Linux AI agent platform · Claude + Gemini CLI · 10 phases", href: "https://github.com/ahmed-145/Nazir", github: "https://github.com/ahmed-145/Nazir" },
  { id: "decodesound", label: "DecodedSound", subtitle: "AI SDK music translator · Next.js 15, Groq, Whisper", href: "https://github.com/ahmed-145/DecodedSound", github: "https://github.com/ahmed-145/DecodedSound" },
  { id: "kasane", label: "Kasane", subtitle: "AI Japanese color palette tool · Next.js 14, Groq", href: "https://github.com/ahmed-145/kasane", github: "https://github.com/ahmed-145/kasane" },
  { id: "minutemark", label: "MinuteMark", subtitle: "AI exam grading · FastAPI, Groq, Gemini", href: "/projects/minutemark", github: "https://github.com/ahmed-145/MinuteMark" },
  { id: "url-shortener", label: "URL Shortener", subtitle: "DevOps capstone · K8s, Terraform, Prometheus · 2,715 req/sec", href: "/projects/url-shortener", github: "https://github.com/ahmed-145/containerized-url-shortener-monnitoring" },
  { id: "redis-from-scratch", label: "Redis from Scratch", subtitle: "Key-value store · Pure Rust", href: "/projects/redis-from-scratch", github: "https://github.com/ahmed-145/REDIS_RUST" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelectedIdx(0);
  }, []);

  const buildCommands = useCallback((): Command[] => [
    ...NAV_SECTIONS.map((s) => ({
      id: `nav-${s.id}`,
      label: s.label,
      subtitle: s.subtitle,
      group: "Navigation",
      icon: <Hash size={14} style={{ color: "#6366f1" }} />,
      action: () => {
        scrollToSection(s.id);
        close();
      },
    })),
    ...PROJECTS.map((p) => ({
      id: `project-${p.id}`,
      label: p.label,
      subtitle: p.subtitle,
      group: "Projects",
      icon: <Folder size={14} style={{ color: "#71717a" }} />,
      action: () => {
        window.open(p.github, "_blank");
        close();
      },
    })),
    {
      id: "action-email",
      label: "Copy Email",
      subtitle: "ahmedabbass871@gmail.com",
      group: "Actions",
      icon: <Mail size={14} style={{ color: "#71717a" }} />,
      action: () => {
        navigator.clipboard.writeText("ahmedabbass871@gmail.com").catch(() => {});
        close();
      },
    },
    {
      id: "action-github",
      label: "Open GitHub",
      subtitle: "github.com/ahmed-145",
      group: "Actions",
      icon: <ExternalLink size={14} style={{ color: "#71717a" }} />,
      action: () => {
        window.open("https://github.com/ahmed-145", "_blank");
        close();
      },
    },
    {
      id: "action-linkedin",
      label: "Open LinkedIn",
      subtitle: "linkedin.com/in/ahmed-mahmoud-abbas",
      group: "Actions",
      icon: <ExternalLink size={14} style={{ color: "#71717a" }} />,
      action: () => {
        window.open("https://www.linkedin.com/in/ahmed-mahmoud-abbas/", "_blank");
        close();
      },
    },
    {
      id: "action-resume",
      label: "Download Resume",
      subtitle: "Ahmed_Mahmoud_Abbas_Resume.pdf",
      group: "Actions",
      icon: <Download size={14} style={{ color: "#71717a" }} />,
      action: () => {
        const a = document.createElement("a");
        a.href = "/Ahmed_Mahmoud_Abbas_Resume.pdf";
        a.download = "Ahmed_Mahmoud_Abbas_Resume.pdf";
        a.click();
        close();
      },
    },
    {
      id: "action-now",
      label: "What I'm Doing Now",
      subtitle: "/now — Sivers-style",
      group: "Pages",
      icon: <Terminal size={14} style={{ color: "#71717a" }} />,
      action: () => {
        window.location.href = "/now";
      },
    },
    {
      id: "action-blog",
      label: "Writing",
      subtitle: "/blog — technical posts in progress",
      group: "Pages",
      icon: <Terminal size={14} style={{ color: "#71717a" }} />,
      action: () => {
        window.location.href = "/blog";
      },
    },
  ], [close]);

  const commands = buildCommands();

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.subtitle?.toLowerCase().includes(query.toLowerCase()) ||
          c.group.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const groups = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: "nearest" });
  }, [selectedIdx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelectedIdx(0);
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIdx]) {
      filtered[selectedIdx].action();
    }
  };

  if (!open) return null;

  return (
    <div
      className="cmd-overlay fixed inset-0 z-[200] flex items-start justify-center"
      style={{ paddingTop: "15vh" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="cmd-panel w-full bg-[#111111] border border-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden"
        style={{ maxWidth: "560px", margin: "0 16px" }}
        onKeyDown={onKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 border-b border-[#1a1a1a]" style={{ paddingTop: "14px", paddingBottom: "14px" }}>
          <Search size={15} className="text-[#52525b] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, projects, actions..."
            className="flex-1 bg-transparent font-mono text-sm text-[#f4f4f5] placeholder:text-[#3f3f46] outline-none"
          />
          <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-[#2a2a2a] text-[#52525b] shrink-0">
            esc
          </kbd>
        </div>

        {/* Results list */}
        <div ref={listRef} className="overflow-y-auto" style={{ maxHeight: "360px", paddingTop: "8px", paddingBottom: "8px" }}>
          {Object.entries(groups).map(([group, cmds]) => (
            <div key={group}>
              <div
                className="font-mono uppercase tracking-widest text-[#3f3f46]"
                style={{ fontSize: "10px", padding: "6px 16px" }}
              >
                {group}
              </div>
              {cmds.map((cmd) => {
                const idx = filtered.indexOf(cmd);
                const isSelected = idx === selectedIdx;
                return (
                  <button
                    key={cmd.id}
                    ref={isSelected ? selectedRef : undefined}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    data-selected={isSelected}
                    className="cmd-item w-full flex items-center gap-3 text-left"
                    style={{ padding: "10px 16px" }}
                  >
                    <span className="shrink-0 cmd-icon">{cmd.icon}</span>
                    <span className="flex-1 min-w-0">
                      <span className="font-mono text-sm text-[#e4e4e7] block">{cmd.label}</span>
                      {cmd.subtitle && (
                        <span
                          className="font-mono text-[#52525b] block truncate"
                          style={{ fontSize: "11px" }}
                        >
                          {cmd.subtitle}
                        </span>
                      )}
                    </span>
                    <ArrowRight
                      size={12}
                      className="shrink-0 cmd-arrow"
                      style={{ color: "#3f3f46" }}
                    />
                  </button>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <div
              className="font-mono text-sm text-[#3f3f46] text-center"
              style={{ padding: "32px 16px" }}
            >
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Footer hints */}
        <div
          className="flex items-center gap-5 border-t border-[#1a1a1a]"
          style={{ padding: "10px 16px" }}
        >
          {[
            { keys: "↑↓", hint: "navigate" },
            { keys: "↵", hint: "open" },
            { keys: "⌘K", hint: "toggle" },
          ].map(({ keys, hint }) => (
            <span key={hint} className="font-mono text-[#3f3f46] flex items-center gap-1.5" style={{ fontSize: "10px" }}>
              <kbd
                className="rounded border border-[#2a2a2a] text-[#52525b]"
                style={{ padding: "2px 5px", fontSize: "10px" }}
              >
                {keys}
              </kbd>
              {hint}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
