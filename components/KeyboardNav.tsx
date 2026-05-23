"use client";
import { useEffect } from "react";

// Vim-style section navigation. Backend/DevOps audience speaks this language.
const sections = [
  "hero", "about", "featured", "projects",
  "recognition", "experience", "skills", "currently", "contact",
];

export default function KeyboardNav() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't steal keys when typing in inputs
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      // Don't intercept with modifiers
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const currentIndex = (() => {
        // Find the section currently most in view
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) return i;
        }
        return 0;
      })();

      const jumpTo = (i: number) => {
        const id = sections[Math.max(0, Math.min(sections.length - 1, i))];
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      switch (e.key) {
        case "j":
        case "ArrowDown":
          if (e.key === "ArrowDown" && e.shiftKey) return;
          e.preventDefault();
          jumpTo(currentIndex + 1);
          break;
        case "k":
        case "ArrowUp":
          if (e.key === "ArrowUp" && e.shiftKey) return;
          e.preventDefault();
          jumpTo(currentIndex - 1);
          break;
        case "g":
          if (!e.shiftKey) {
            e.preventDefault();
            jumpTo(0);
          }
          break;
        case "G":
          e.preventDefault();
          jumpTo(sections.length - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
