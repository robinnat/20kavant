"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function SignupCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let alive = true;
    supabase.rpc("get_signup_count").then(({ data, error }) => {
      if (!alive || error) return;
      const n = typeof data === "number" ? data : Number(data);
      if (!Number.isNaN(n)) setCount(n);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (count === null) return null; // pas de flash pendant le chargement

  return (
    <div className="signup-count">
      <span className="dot" />
      {count === 0 ? (
        <>Sois le premier à participer</>
      ) : (
        <>
          <strong>{count.toLocaleString("fr-FR")}</strong>{" "}
          {count > 1 ? "participants déjà inscrits" : "participant déjà inscrit"}
        </>
      )}
    </div>
  );
}
