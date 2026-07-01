import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "20Kavant.fr — 20K de MRR avant la sortie de GTA VI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (p) => join(process.cwd(), p);
const dataUri = (p) => `data:image/png;base64,${readFileSync(asset(p)).toString("base64")}`;

export default function Image() {
  const logo = dataUri("public/gta-vi-logo.png");
  const avatar = dataUri("public/gta-avatar.png");
  const pricedown = readFileSync(asset("public/fonts/pricedown.ttf"));
  const sg400 = readFileSync(asset("public/fonts/space-grotesk-400.woff"));
  const sg600 = readFileSync(asset("public/fonts/space-grotesk-600.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Space Grotesk",
          backgroundColor: "#19112E",
          backgroundImage: "linear-gradient(180deg, #19112E 0%, #221544 52%, #2C1A50 100%)",
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

        {/* ta photo */}
        <div
          style={{
            position: "absolute",
            top: 62,
            right: 84,
            width: 180,
            height: 180,
            borderRadius: 90,
            display: "flex",
            overflow: "hidden",
            border: "4px solid rgba(183,155,230,0.65)",
          }}
        >
          <img src={avatar} width="100%" height="100%" style={{ objectFit: "cover" }} alt="" />
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "0 76px",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, fontWeight: 600, letterSpacing: 4, color: "#B79BE6" }}>
            BUILD IN PUBLIC · 20KAVANT.FR
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Pricedown",
              fontSize: 120,
              lineHeight: 1,
              letterSpacing: 2,
              color: "#F6E7D6",
            }}
          >
            <span style={{ color: "#F4936B" }}>20K</span>
            <span style={{ margin: "0 24px" }}>DE</span>
            <span style={{ color: "#E8589E" }}>MRR</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 12,
              fontFamily: "Pricedown",
              fontSize: 120,
              letterSpacing: 2,
              color: "#F6E7D6",
            }}
          >
            <span>AVANT LA SORTIE DE</span>
            <img src={logo} width={210} height={159} style={{ marginLeft: 30 }} alt="" />
          </div>

          <div style={{ display: "flex", marginTop: 34, fontSize: 31, color: "#A491C4" }}>
            Solo, taf, famille — objectif $20,000 de MRR avant le 19/11/2026
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pricedown", data: pricedown, weight: 400, style: "normal" },
        { name: "Space Grotesk", data: sg400, weight: 400, style: "normal" },
        { name: "Space Grotesk", data: sg600, weight: 600, style: "normal" },
      ],
    }
  );
}
