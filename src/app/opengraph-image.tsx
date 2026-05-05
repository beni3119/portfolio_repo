import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0b0b10",
          color: "white",
          fontFamily: "ui-sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: "white",
              color: "#0b0b10",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 22, opacity: 0.7 }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 38, opacity: 0.85 }}>{site.tagline}</div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 22,
            opacity: 0.7,
          }}
        >
          <span>RAG</span>
          <span>·</span>
          <span>VLMs</span>
          <span>·</span>
          <span>MLOps</span>
          <span>·</span>
          <span>AWS</span>
          <span>·</span>
          <span>Quantum ML</span>
        </div>
      </div>
    ),
    size,
  );
}
