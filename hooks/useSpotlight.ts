"use client";
import { useEffect, useRef } from "react";

/**
 * Attach to a container element to expose --spot-x and --spot-y CSS variables
 * tracking the cursor position relative to the element. Used for radial
 * "spotlight" gradients on cards.
 *
 * Updates the transform/CSS variable on the element directly (not via React
 * state) to avoid render churn on mousemove.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia?.("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return ref;
}
