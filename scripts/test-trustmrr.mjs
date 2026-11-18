// Tests du compteur (lib/trustmrr.js), sans réseau : fetch simulé.
//   node scripts/test-trustmrr.mjs
// Vérifie qu'aucun chiffre de démo ni total partiel ne sort en production.

import assert from "node:assert/strict";

const { getTrustMrrData, _oublierDernierConnu } = await import("../lib/trustmrr.js");

const TOTAUX = { ninou: 406.11, flash: 398.92, magicon: 45.71 };
const ok = (slug) => ({
  ok: true,
  status: 200,
  headers: new Headers(),
  json: async () => ({ data: { name: slug, revenue: { total: TOTAUX[slug] } } }),
});
const ko = (status) => ({ ok: false, status, headers: new Headers({ "retry-after": "0" }), json: async () => ({}) });
const slugDe = (url) => url.split("/").pop();

// fetch simulé : `plan[slug]` = liste de réponses successives (la dernière se répète).
function faux(plan) {
  const vus = {};
  return async (url) => {
    const s = slugDe(url);
    const l = plan[s] ?? ["ok"];
    const r = l[Math.min(vus[s] ?? 0, l.length - 1)];
    vus[s] = (vus[s] ?? 0) + 1;
    if (r === "reseau") throw new TypeError("fetch failed");
    return r === "ok" ? ok(s) : ko(r);
  };
}

const env = (o) => {
  for (const k of ["NODE_ENV", "NEXT_PHASE", "TRUSTMRR_API_KEY"]) delete process.env[k];
  Object.assign(process.env, o);
  _oublierDernierConnu();
};
const silence = () => {
  const c = { log: console.log, warn: console.warn, error: console.error };
  console.log = console.warn = console.error = () => {};
  return () => Object.assign(console, c);
};

let n = 0;
async function test(nom, fn) {
  const rendre = silence();
  try {
    await fn();
  } finally {
    rendre();
  }
  n++;
  console.log("ok -", nom);
}

await test("production, tout répond : total réel complet (851)", async () => {
  env({ NODE_ENV: "production", TRUSTMRR_API_KEY: "x" });
  const d = await getTrustMrrData({ fetchImpl: faux({}) });
  assert.equal(d.demo, false);
  assert.equal(d.total, 406 + 399 + 46);
});

await test("production, 429 puis succès : réessai, total complet", async () => {
  env({ NODE_ENV: "production", TRUSTMRR_API_KEY: "x" });
  const d = await getTrustMrrData({ fetchImpl: faux({ flash: [429, "ok"], magicon: ["reseau", "ok"] }) });
  assert.equal(d.total, 851);
});

await test("production, une startup en échec durable : erreur levée (ISR garde la page), jamais 406 ni 452", async () => {
  env({ NODE_ENV: "production", TRUSTMRR_API_KEY: "x" });
  await assert.rejects(() => getTrustMrrData({ fetchImpl: faux({ flash: [500] }) }), /flash/);
});

await test("production, échec isolé après une lecture réussie : dernière valeur réelle reprise", async () => {
  env({ NODE_ENV: "production", TRUSTMRR_API_KEY: "x" });
  await getTrustMrrData({ fetchImpl: faux({}) });
  const d = await getTrustMrrData({ fetchImpl: faux({ flash: [503], magicon: [404] }) });
  assert.equal(d.total, 851);
});

await test("production, clé absente : jamais la démo (erreur levée)", async () => {
  env({ NODE_ENV: "production" });
  await assert.rejects(() => getTrustMrrData({ fetchImpl: faux({}) }));
});

await test("build de production, tout en échec : état neutre, aucun montant", async () => {
  env({ NODE_ENV: "production", NEXT_PHASE: "phase-production-build", TRUSTMRR_API_KEY: "x" });
  const d = await getTrustMrrData({ fetchImpl: faux({ ninou: [500], flash: [500], magicon: [500] }) });
  assert.equal(d.total, null);
  assert.equal(d.demo, false);
  assert.ok(d.projects.every((p) => p.mrr == null));
  assert.ok(!d.projects.some((p) => ["LaunchKit", "CelebDex", "AdPilot", "Mondes"].includes(p.name)));
});

await test("développement local sans clé : démo autorisée", async () => {
  env({ NODE_ENV: "development" });
  const d = await getTrustMrrData({ fetchImpl: faux({}) });
  assert.equal(d.demo, true);
});

console.log(`${n} tests passés`);
