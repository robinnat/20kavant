import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Image-titre pour l'email d'inscription : rend le titre dans la police du
// site (Pricedown) — indispensable car les clients email ne chargent pas les
// polices custom. Servie en statique à /email-title.
export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const pricedown = readFileSync(join(process.cwd(), "public/fonts/pricedown.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#19112E",
          fontFamily: "Pricedown",
        }}
      >
        <div style={{ display: "flex", fontSize: 104, color: "#F6E7D6" }}>
          <span style={{ color: "#F4936B" }}>20K</span>
          <span style={{ margin: "0 20px" }}>DE</span>
          <span style={{ color: "#E8589E" }}>MRR</span>
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 104, color: "#F6E7D6" }}>
          AVANT LA SORTIE DE GTA VI
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 420,
      fonts: [{ name: "Pricedown", data: pricedown, weight: 400, style: "normal" }],
    }
  );
}
