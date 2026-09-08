"use client";

import { useEffect } from "react";

export default function Interactions({ data }) {
  useEffect(() => {
    // Cible : minuit (heure LOCALE du visiteur) le 19 novembre 2026, jour de
    // sortie de GTA 6. On raisonne en jours calendaires locaux pour que le
    // changement de jour coïncide pile avec minuit sur l'horloge du visiteur,
    // quelle que soit l'heure d'été/hiver (pas de décalage DST).
    const TARGET_YEAR = 2026;
    const TARGET_MONTH = 10; // novembre (mois 0-indexé)
    const TARGET_DAY = 19;
    const DAY_MS = 24 * 60 * 60 * 1000;
    function pad(n) {
      return String(n).padStart(2, "0");
    }
    function tick() {
      const now = new Date();
      const target = new Date(TARGET_YEAR, TARGET_MONTH, TARGET_DAY);
      if (now >= target) {
        document.getElementById("cd-days").textContent = "000";
        document.getElementById("cd-hours").textContent = "00";
        document.getElementById("cd-min").textContent = "00";
        document.getElementById("cd-sec").textContent = "00";
        return;
      }
      const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      // nombre de minuits locaux entre aujourd'hui et la cible
      const daysBetween = Math.round((target - todayMidnight) / DAY_MS);
      const days = daysBetween - 1; // jours pleins après le prochain minuit local
      const hours = 23 - now.getHours(); // temps jusqu'au prochain minuit local
      const min = 59 - now.getMinutes();
      const sec = 59 - now.getSeconds();
      document.getElementById("cd-days").textContent = String(days).padStart(3, "0");
      document.getElementById("cd-hours").textContent = pad(hours);
      document.getElementById("cd-min").textContent = pad(min);
      document.getElementById("cd-sec").textContent = pad(sec);
    }
    tick();
    const cdInterval = setInterval(tick, 1000);

    /* ====== DONNÉES (réelles, via TrustMRR — voir lib/trustmrr.js) ====== */
    const MRR = {
      total: data.total, // revenu total cumulé
      goal: data.goal, // objectif
      deltaMonth: data.deltaMonth, // variation du mois
    };
    const PROJECTS = [...data.projects];

    const fmtUsd = (n) => Math.round(n).toLocaleString("en-US");
    const fmtPct = (n) =>
      n.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%";

    /* ---- compteur · slider horizontal (jauge + odomètre) ---- */
    function renderMRR() {
      const pct = Math.min(MRR.total / MRR.goal, 1);
      requestAnimationFrame(() => {
        document.getElementById("hfill").style.width = pct * 100 + "%";
        // le curseur (Ø 26px) est borné de son rayon (13px) à chaque extrémité
        // pour qu'il reste à l'intérieur du track à 0% comme à 100%.
        document.getElementById("hthumb").style.left = `calc(13px + ${pct} * (100% - 26px))`;
      });
      // libellé gauche de l'échelle : le montant réel, pas un "$0" figé
      document.getElementById("mrrScaleNow").textContent = "$" + fmtUsd(MRR.total);
      const start = performance.now();
      (function step(t) {
        const p = Math.min((t - start) / 1600, 1);
        const e = 1 - Math.pow(1 - p, 3);
        document.getElementById("mrrFig").textContent = fmtUsd(MRR.total * e);
        document.getElementById("mrrPct").textContent = fmtPct((MRR.total * e) / MRR.goal * 100);
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
      const d = document.getElementById("mrrDelta");
      if (MRR.deltaMonth > 0) {
        d.childNodes[d.childNodes.length - 1].textContent =
          " +$" + fmtUsd(MRR.deltaMonth) + " ce mois-ci";
      } else {
        d.style.display = "none";
      }
    }

    /* ---- projets : liste ---- */
    function renderProjects() {
      const liste = document.getElementById("pfList");
      if (!liste) return;
      const total = PROJECTS.reduce((s, p) => s + p.mrr, 0) || 1;
      // La ligne mène directement au site du produit (repli sur TrustMRR si
      // aucun site n'est renseigné dans lib/trustmrr.js).
      liste.innerHTML = PROJECTS.map(
        (p) => `
      <a class="pf-row" href="${p.site || p.url}" target="_blank" rel="noopener">
        <span class="logo" style="background:${p.color}33;border:1px solid ${p.color}66;color:${p.color}">${
          p.icon ? `<img src="${p.icon}" alt="${p.name}">` : p.name[0]
        }</span>
        <span class="meta"><span class="nm">${p.name}</span><div class="src">${p.src}</div></span>
        <span class="spacer"></span>
        <span class="pct">${Math.round((p.mrr / total) * 100)}%</span>
        <span class="mrr"><span class="cur">$</span>${fmtUsd(p.mrr)}<span class="unit">total</span></span>
      </a>`
      ).join("");
    }

    /* ---- lancer les animations seulement quand la section entre dans l'écran ---- */
    renderProjects();
    let played = false;
    const run = () => {
      if (played) return;
      played = true;
      renderMRR();
    };
    const revenusEl = document.getElementById("defi");
    let io;
    if (revenusEl && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            run();
            io.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      io.observe(revenusEl);
    } else {
      // section absente ou navigateur sans IntersectionObserver : on lance direct
      run();
    }

    return () => {
      clearInterval(cdInterval);
      io?.disconnect();
    };
  }, [data]);

  return null;
}
