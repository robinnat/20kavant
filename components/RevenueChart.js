"use client";

import { useMemo, useState } from "react";

// Historique mensuel (revenus/mois en $, un point au 1er de chaque mois).
// Renseigne les mois passés au fil du défi ; null = pas de donnée (le point
// est ignoré). Le point du mois en cours vient de TrustMRR automatiquement.
const HISTORY = [
  { month: "2026-01", value: 0 },
  { month: "2026-02", value: null },
  { month: "2026-03", value: null },
  { month: "2026-04", value: null },
  { month: "2026-05", value: null },
  { month: "2026-06", value: null },
  { month: "2026-07", value: null },
  { month: "2026-08", value: null },
  { month: "2026-09", value: null },
  { month: "2026-10", value: null },
  { month: "2026-11", value: null },
  { month: "2026-12", value: null },
];

const GOAL = 20000;
const RELEASE = new Date(2026, 10, 19); // 19 novembre 2026
const START = new Date(2026, 0, 1);
const END = new Date(2026, 11, 31);
const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

// Géométrie du SVG (viewBox — le rendu est responsive).
const W = 720;
const H = 300;
const M = { top: 30, right: 18, bottom: 34, left: 50 };
const IW = W - M.left - M.right;
const IH = H - M.top - M.bottom;

const fmtUsd = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

export default function RevenueChart({ total = 0 }) {
  const [hover, setHover] = useState(null);

  const { points, yMax } = useMemo(() => {
    const pts = HISTORY.filter((h) => h.value != null).map((h) => {
      const [y, m] = h.month.split("-").map(Number);
      return { date: new Date(y, m - 1, 1), value: h.value };
    });
    // Point "live" du jour (tronqué au jour pour un rendu stable).
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (today >= START && today <= END) {
      pts.push({ date: today, value: total, live: true });
    }
    pts.sort((a, b) => a.date - b.date);
    const maxVal = Math.max(GOAL, ...pts.map((p) => p.value));
    return { points: pts, yMax: Math.ceil((maxVal * 1.1) / 1000) * 1000 };
  }, [total]);

  const x = (d) => M.left + ((d - START) / (END - START)) * IW;
  const y = (v) => M.top + IH - (v / yMax) * IH;

  const path = points.map((p, i) => `${i ? "L" : "M"}${x(p.date).toFixed(1)} ${y(p.value).toFixed(1)}`).join(" ");
  const area =
    points.length > 1
      ? `${path} L${x(points[points.length - 1].date).toFixed(1)} ${y(0)} L${x(points[0].date).toFixed(1)} ${y(0)} Z`
      : "";

  const yTicks = [];
  for (let v = 5000; v <= yMax; v += 5000) yTicks.push(v);

  function onMove(e) {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * W;
    let best = null;
    for (const p of points) {
      const d = Math.abs(x(p.date) - mx);
      if (!best || d < best.d) best = { p, d };
    }
    setHover(best && best.d < 60 ? best.p : null);
  }

  return (
    <div className="rev-chart">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Progression des revenus mensuels en 2026, objectif ${fmtUsd(GOAL)} avant la sortie de GTA VI le 19 novembre. Dernier point : ${fmtUsd(total)}.`}
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        {/* grille horizontale */}
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={M.left} x2={W - M.right} y1={y(v)} y2={y(v)} stroke="rgba(246,231,214,0.08)" />
            <text x={M.left - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#A491C4">
              {v / 1000}K
            </text>
          </g>
        ))}
        <line x1={M.left} x2={W - M.right} y1={y(0)} y2={y(0)} stroke="rgba(246,231,214,0.2)" />

        {/* mois */}
        {MONTHS.map((mo, i) => (
          <text
            key={mo}
            x={x(new Date(2026, i, 15))}
            y={H - 10}
            textAnchor="middle"
            fontSize="11"
            fill="#A491C4"
          >
            {mo}
          </text>
        ))}

        {/* objectif 20K */}
        <line
          x1={M.left}
          x2={W - M.right}
          y1={y(GOAL)}
          y2={y(GOAL)}
          stroke="rgba(246,231,214,0.4)"
          strokeDasharray="5 5"
        />
        <text x={M.left + 4} y={y(GOAL) - 7} fontSize="11" fontWeight="600" fill="#F6E7D6">
          Objectif $20K
        </text>

        {/* sortie GTA VI : 19/11 */}
        <line
          x1={x(RELEASE)}
          x2={x(RELEASE)}
          y1={M.top - 4}
          y2={y(0)}
          stroke="rgba(244,147,107,0.55)"
          strokeDasharray="5 5"
        />
        <text x={x(RELEASE)} y={M.top - 10} textAnchor="middle" fontSize="11" fontWeight="600" fill="#F4936B">
          GTA VI · 19/11
        </text>

        {/* série */}
        {area && (
          <>
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#E8589E" stopOpacity="0.22" />
                <stop offset="1" stopColor="#E8589E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#revFill)" />
          </>
        )}
        {path && <path d={path} fill="none" stroke="#E8589E" strokeWidth="2" strokeLinejoin="round" />}
        {points.map((p) => (
          <circle
            key={+p.date}
            cx={x(p.date)}
            cy={y(p.value)}
            r={p.live ? 5 : 4}
            fill="#E8589E"
            stroke="#251743"
            strokeWidth="2"
          />
        ))}

        {/* survol : repère + info */}
        {hover && (
          <g pointerEvents="none">
            <line x1={x(hover.date)} x2={x(hover.date)} y1={M.top} y2={y(0)} stroke="rgba(246,231,214,0.25)" />
            <circle cx={x(hover.date)} cy={y(hover.value)} r="6" fill="none" stroke="#F6E7D6" strokeWidth="1.5" />
            <g transform={`translate(${Math.min(x(hover.date) + 10, W - 150)}, ${Math.max(y(hover.value) - 40, 8)})`}>
              <rect width="140" height="34" rx="8" fill="#19112E" stroke="rgba(246,231,214,0.18)" />
              <text x="10" y="14" fontSize="10" fill="#A491C4">
                {hover.date.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                {hover.live ? " · en direct" : ""}
              </text>
              <text x="10" y="28" fontSize="12" fontWeight="700" fill="#F6E7D6">
                {fmtUsd(hover.value)} / mois
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
