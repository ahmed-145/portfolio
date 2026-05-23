"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "recognition", label: "Recognition" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "currently", label: "Currently" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top edge while still intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Section navigation" className="section-rail">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-active={active === s.id}
          aria-label={`Jump to ${s.label}`}
          title={s.label}
        />
      ))}
    </nav>
  );
}
