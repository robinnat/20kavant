"use client";

import { useEffect, useRef } from "react";

const fmtUsd = (n) => Math.round(n).toLocaleString("en-US");
const fmtPct = (n) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%";

// Compteur de revenus + jauge vers l'objectif. Autonome (il porte sa propre
// animation) pour pouvoir servir aussi bien sur l'accueil que sur la page
// concours. L'animation ne part qu'une fois le bloc à l'écran.
export default function Counter({ total = 0, goal = 20000 }) {
  const bloc = useRef(null);

  useEffect(() => {
    const el = bloc.current;
    if (!el) return;
    let joue = false;

    const lancer = () => {
      if (joue) return;
      joue = true;
      const pct = Math.min(total / goal, 1);
      const fill = el.querySelector(".hfill");
      const thumb = el.querySelector(".hthumb");
      requestAnimationFrame(() => {
        if (fill) fill.style.width = pct * 100 + "%";
        // le curseur (Ø 26px) est borné de son rayon à chaque extrémité
        if (thumb) thumb.style.left = `calc(13px + ${pct} * (100% - 26px))`;
      });
      const chiffre = el.querySelector(".js-fig");
      const pourcent = el.querySelector(".js-pct");
      const debut = performance.now();
      (function pas(t) {
        const p = Math.min((t - debut) / 1600, 1);
        const e = 1 - Math.pow(1 - p, 3);
        if (chiffre) chiffre.textContent = fmtUsd(total * e);
        if (pourcent) pourcent.textContent = fmtPct(((total * e) / goal) * 100);
        if (p < 1) requestAnimationFrame(pas);
      })(performance.now());
    };

    if (!("IntersectionObserver" in window)) {
      lancer();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          lancer();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [total, goal]);

  return (
    <div className="total-mrr" ref={bloc}>
      <div className="mrr-head">
        <div className="big">
          <span className="cur">$</span>
          <span className="js-fig">0</span>
          <span className="unit">au total</span>
        </div>
        <div className="mrr-side">
          <div className="pct js-pct">0%</div>
          <div className="of">objectif ${goal.toLocaleString("en-US")} de revenus</div>
        </div>
      </div>
      <div className="hslider">
        <div className="htrack">
          <div className="hfill"></div>
        </div>
        <div className="hthumb">
          <div className="knob"></div>
        </div>
      </div>
      <div className="hscale">
        <span>${fmtUsd(total)}</span>
        <span className="goal">Objectif 20K</span>
      </div>
    </div>
  );
}
