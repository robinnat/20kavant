import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "20Kavant.fr — 20K de MRR avant la sortie de GTA VI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logo = readFileSync(join(process.cwd(), "public/gta-vi-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#19112E",
          backgroundImage:
            "linear-gradient(180deg, #19112E 0%, #221544 52%, #2C1A50 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(120% 80% at 50% 120%, rgba(244,147,107,0.55), rgba(232,88,158,0.30) 35%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "0 86px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              fontWeight: 700,
              color: "#B79BE6",
            }}
          >
            BUILD IN PUBLIC · 20KAVANT.FR
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 1,
              color: "#F6E7D6",
            }}
          >
            <span style={{ color: "#F4936B" }}>20K</span>
            <span style={{ margin: "0 22px" }}>DE</span>
            <span style={{ color: "#E8589E" }}>MRR</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              fontSize: 60,
              fontWeight: 700,
              color: "#F6E7D6",
            }}
          >
            <span>AVANT LA SORTIE DE</span>
            <img src={logoSrc} width={214} height={162} style={{ marginLeft: 30 }} alt="" />
          </div>

          <div style={{ display: "flex", marginTop: 34, fontSize: 31, color: "#A491C4" }}>
            Solo, taf, famille — objectif $20,000 de MRR avant le 19/11/2026
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
