import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "I build systems that ship.";
  const subtitle = searchParams.get("subtitle") ?? "Backend & DevOps Engineer";
  const tags = (searchParams.get("tags") ?? "Rust,Python,Kubernetes,Terraform").split(",");

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        {/* Indigo glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "160px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(99,102,241,0.14), transparent 65%)",
            borderRadius: "999px",
          }}
        />
        {/* Cyan accent glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "100px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(34,211,238,0.06), transparent 65%)",
            borderRadius: "999px",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          {/* Name label */}
          <div
            style={{
              fontSize: "15px",
              color: "#71717a",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div style={{ width: "28px", height: "2px", backgroundColor: "#6366f1" }} />
            Ahmed Mahmoud Abbas
          </div>

          {/* Hash + main headline */}
          <div
            style={{
              fontSize: title.length > 30 ? "54px" : "68px",
              fontWeight: "bold",
              color: "#f4f4f5",
              lineHeight: "1.05",
              marginBottom: "20px",
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
            }}
          >
            <span style={{ color: "#6366f1" }}>#</span>
            <span>{title}</span>
          </div>

          {/* Subtitle */}
          <div style={{ fontSize: "22px", color: "#6366f1", marginBottom: "44px" }}>
            {subtitle}
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {tags.slice(0, 6).map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(99,102,241,0.35)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  color: "#6366f1",
                  backgroundColor: "rgba(99,102,241,0.05)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-right domain */}
        <div
          style={{
            position: "absolute",
            bottom: "46px",
            right: "80px",
            fontSize: "13px",
            color: "#3f3f46",
            letterSpacing: "0.05em",
          }}
        >
          portfolio-azure-beta-0b60zh90oz.vercel.app
        </div>

        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "120px",
            bottom: "120px",
            width: "4px",
            background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0))",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
