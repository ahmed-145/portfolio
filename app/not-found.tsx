import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found · Ahmed Mahmoud Abbas",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] flex items-center justify-center px-6">
      <div className="max-w-[600px] w-full">
        {/* Terminal window */}
        <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg overflow-hidden terminal-scanlines">
          {/* Traffic lights */}
          <div className="flex gap-1.5 px-4 py-3 border-b border-[#1a1a1a] items-center">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="font-mono text-[10px] text-[#3f3f46] ml-2">bash — 80×24</span>
          </div>

          <div className="p-6 font-mono text-sm space-y-3">
            <div className="flex gap-2">
              <span className="text-[#4ade80]">$</span>
              <span className="text-[#f4f4f5]">cd {"{requested-path}"}</span>
            </div>

            <div className="text-[#ef4444] space-y-1">
              <div>bash: cd: No such file or directory</div>
              <div className="text-[#71717a]">exit code: 1</div>
            </div>

            <div className="pt-2 border-t border-[#1a1a1a] text-[#71717a] space-y-1">
              <div>
                <span className="text-[#4ade80]">$</span>{" "}
                <span className="text-[#f4f4f5]">ls /available-routes/</span>
              </div>
              <div className="pl-4 space-y-0.5 text-[#71717a]">
                {[
                  { path: "hero/", note: "→ back to top" },
                  { path: "projects/", note: "→ featured work" },
                  { path: "experience/", note: "→ work history" },
                  { path: "contact/", note: "→ let&apos;s talk" },
                  { path: "now/", note: "→ what I&apos;m doing now" },
                ].map(({ path, note }) => (
                  <div key={path} className="flex gap-4">
                    <span className="text-[#6366f1] min-w-[120px]">{path}</span>
                    <span
                      className="text-[#52525b]"
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="flex gap-2">
                <span className="text-[#4ade80]">$</span>
                <span className="text-[#f4f4f5]">cd ~</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#4ade80]">$</span>
              <span className="cursor-blink text-[#6366f1]">|</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6366f1] text-white font-mono text-sm rounded-lg hover:bg-[#5254cc]"
            style={{ transition: "background-color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            ← go home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#3f3f46] text-[#a1a1aa] font-mono text-sm rounded-lg hover:border-[#6366f1] hover:text-[#6366f1]"
            style={{ transition: "color 160ms cubic-bezier(0.23, 1, 0.32, 1), border-color 160ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            contact me
          </Link>
        </div>
      </div>
    </main>
  );
}
