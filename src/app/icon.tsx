import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b10",
          color: "white",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        {site.initials}
      </div>
    ),
    size,
  );
}
