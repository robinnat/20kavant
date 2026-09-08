"use client";

import { useEffect } from "react";

// Marque les paliers déjà franchis à partir du total de revenus.
// Isolé de Interactions.js : la page concours n'a ni compteur ni compte à
// rebours, et Interactions écrirait dans des éléments absents.
export default function PaliersState({ total = 0 }) {
  useEffect(() => {
    document.querySelectorAll(".palier[data-th]").forEach((p) => {
      if (total >= +p.dataset.th) {
        p.classList.add("reached");
        const state = p.querySelector(".palier-state");
        if (state) state.textContent = "Tirage fait";
      }
    });
  }, [total]);

  return null;
}
