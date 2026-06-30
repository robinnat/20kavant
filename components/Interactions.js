"use client";

import { useEffect } from "react";

export default function Interactions({ data }) {
  useEffect(() => {
    const target = new Date("2026-11-19T00:00:00+01:00").getTime();
    function pad(n) {
      return String(n).padStart(2, "0");
    }
    function tick() {
      const now = Date.now();
      let diff = target - now;
      if (diff < 0) diff = 0;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const min = Math.floor((diff / (1000 * 60)) % 60);
      const sec = Math.floor((diff / 1000) % 60);
      document.getElementById("cd-days").textContent = String(days).padStart(3, "0");
      document.getElementById("cd-hours").textContent = pad(hours);
      document.getElementById("cd-min").textContent = pad(min);
      document.getElementById("cd-sec").textContent = pad(sec);
    }
    tick();
    const cdInterval = setInterval(tick, 1000);

    /* ====== DONNÉES (réelles, via TrustMRR — voir lib/trustmrr.js) ====== */
    const MRR = {
      total: data.total, // MRR total cumulé
      goal: data.goal, // objectif
      deltaMonth: data.deltaMonth, // variation du mois
    };
    const PROJECTS = [...data.projects].sort((a, b) => b.mrr - a.mrr);

    const fmtEur = (n) =>
      Math.round(n)
        .toLocaleString("fr-FR")
        .replace(/\u202f|\u00a0|,/g, "\u202f");

    /* ---- compteur · slider horizontal (jauge + odomètre) ---- */
    function renderMRR() {
      const pct = Math.min(MRR.total / MRR.goal, 1);
      requestAnimationFrame(() => {
        document.getElementById("hfill").style.width = pct * 100 + "%";
        document.getElementById("hthumb").style.left = pct * 100 + "%";
      });
      const start = performance.now();
      (function step(t) {
        const p = Math.min((t - start) / 1600, 1);
        const e = 1 - Math.pow(1 - p, 3);
        document.getElementById("mrrFig").textContent = fmtEur(MRR.total * e);
        document.getElementById("mrrPct").textContent =
          Math.round((MRR.total * e) / MRR.goal * 100) + "%";
        if (p < 1) requestAnimationFrame(step);
      })(performance.now());
      const d = document.getElementById("mrrDelta");
      if (MRR.deltaMonth > 0) {
        d.childNodes[d.childNodes.length - 1].textContent =
          " +" + fmtEur(MRR.deltaMonth) + " € ce mois-ci";
      } else {
        d.style.display = "none";
      }
    }

    /* ---- carte GPS : pins posés sur la route + voiture ---- */
    function renderRoute() {
      const road = document.getElementById("gpsRoad");
      const len = road.getTotalLength();
      const VW = 1696,
        VH = 954;
      const place = (el, frac) => {
        const pt = road.getPointAtLength(len * frac);
        el.style.left = (pt.x / VW) * 100 + "%";
        el.style.top = (pt.y / VH) * 100 + "%";
      };
      document.querySelectorAll(".gps-stop[data-frac]").forEach((s) => {
        place(s, parseFloat(s.dataset.frac));
        if (s.dataset.th && MRR.total >= +s.dataset.th) s.classList.add("reached");
      });
      // version mobile : états des paliers
      document.querySelectorAll(".palier-m[data-th]").forEach((p) => {
        if (MRR.total >= +p.dataset.th) {
          p.classList.add("reached");
          p.querySelector(".pm-state").textContent = "Tirage fait";
        }
      });
      const pct = Math.min(MRR.total / MRR.goal, 1);
      const car = document.getElementById("gpsCar");
      place(car, 0); // départ, puis transition vers la position réelle
      document.getElementById("gpsCarVal").textContent = "€" + fmtEur(MRR.total);
      document.getElementById("gpsProg").style.strokeDashoffset = "1";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          place(car, pct);
          document.getElementById("gpsProg").style.strokeDashoffset = (1 - pct).toString();
        })
      );
    }

    /* ---- projets : liste ---- */
    function renderProjects() {
      const total = PROJECTS.reduce((s, p) => s + p.mrr, 0) || 1;
      document.getElementById("pfList").innerHTML = PROJECTS.map(
        (p) => `
      <a class="pf-row" href="${p.url}" target="_blank" rel="noopener">
        <span class="logo" style="background:${p.color}33;border:1px solid ${p.color}66;color:${p.color}">${p.name[0]}</span>
        <span class="meta"><span class="nm">${p.name}</span><div class="src">${p.src}</div></span>
        <span class="spacer"></span>
        <span class="pct">${Math.round((p.mrr / total) * 100)}%</span>
        <span class="mrr"><span class="cur">€</span>${fmtEur(p.mrr)}</span>
      </a>`
      ).join("");
    }

    /* ---- lancer les animations (au chargement + rejoue au scroll dans la vue) ---- */
    renderProjects();
    let played = false;
    const run = () => {
      if (played) return;
      played = true;
      renderMRR();
      renderRoute();
    };
    function maybeRun() {
      const t = document.getElementById("revenus");
      if (!t) {
        run();
        return;
      }
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) run();
    }
    const onLoad = () => setTimeout(maybeRun, 200);
    window.addEventListener("load", onLoad);
    window.addEventListener("scroll", maybeRun, { passive: true });
    // filet de sécurité : si rien n'a tourné après 1,2 s, on lance quand même
    const safety = setTimeout(run, 1200);
    // si le document est déjà chargé (navigation client), on déclenche aussi
    maybeRun();

    return () => {
      clearInterval(cdInterval);
      clearTimeout(safety);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("scroll", maybeRun);
    };
  }, [data]);

  return null;
}
