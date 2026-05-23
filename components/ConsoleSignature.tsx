"use client";
import { useEffect } from "react";

export default function ConsoleSignature() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Run once
    if ((window as unknown as { __sigPrinted?: boolean }).__sigPrinted) return;
    (window as unknown as { __sigPrinted?: boolean }).__sigPrinted = true;

    const banner = `
   █████╗ ██╗  ██╗███╗   ███╗███████╗██████╗
  ██╔══██╗██║  ██║████╗ ████║██╔════╝██╔══██╗
  ███████║███████║██╔████╔██║█████╗  ██║  ██║
  ██╔══██║██╔══██║██║╚██╔╝██║██╔══╝  ██║  ██║
  ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██████╔╝
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝
`;
    // eslint-disable-next-line no-console
    console.log(`%c${banner}`, "color:#6366f1;font-family:monospace");
    // eslint-disable-next-line no-console
    console.log(
      "%cBackend & DevOps · Available now · ahmedabbass871@gmail.com",
      "color:#22d3ee;font-family:monospace;font-size:13px"
    );
    // eslint-disable-next-line no-console
    console.log(
      "%cTip: press j/k or ↓/↑ to jump sections, g/G for top/bottom, ⌘K to search.",
      "color:#71717a;font-family:monospace;font-size:11px"
    );
    // eslint-disable-next-line no-console
    console.log(
      "%cgithub.com/ahmed-145 · linkedin.com/in/ahmed-mahmoud-abbas",
      "color:#3f3f46;font-family:monospace;font-size:11px"
    );
  }, []);

  return null;
}
