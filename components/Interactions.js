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
    const PROJECTS = [...data.projects];

    const fmtUsd = (n) => Math.round(n).toLocaleString("en-US");

    /* ---- projets : liste ---- */
    function renderProjects() {
      const liste = document.getElementById("pfList");
      if (!liste) return;
      const total = PROJECTS.reduce((s, p) => s + (p.mrr ?? 0), 0) || 1;
      // La ligne mène directement au site du produit (repli sur TrustMRR si
      // aucun site n'est renseigné dans lib/trustmrr.js). Un projet sans
      // revenu suivi (mrr null) s'affiche sans montant ni pourcentage.
      liste.innerHTML = PROJECTS.map((p) => {
        const initiale = p.name[0].replace(/"/g, "");
        const logo = p.icon
          ? `<img src="${p.icon}" alt="${p.name}" onerror="this.parentNode.textContent='${initiale}'">`
          : initiale;
        const chiffres =
          p.mrr == null
            ? ""
            : `<span class="pct">${Math.round((p.mrr / total) * 100)}%</span>
        <span class="mrr"><span class="cur">$</span>${fmtUsd(p.mrr)}<span class="unit">total</span></span>`;
        return `
      <a class="pf-row" href="${p.site || p.url}" target="_blank" rel="noopener">
        <span class="logo" style="background:${p.color}33;border:1px solid ${p.color}66;color:${p.color}">${logo}</span>
        <span class="meta"><span class="nm">${p.name}</span><div class="src">${p.src}</div></span>
        <span class="spacer"></span>
        ${chiffres}
      </a>`;
      }).join("");
    }

    /* ---- rendu de la liste des projets ---- */
    renderProjects();

    return () => {
      clearInterval(cdInterval);
    };
  }, [data]);

  return null;
}
