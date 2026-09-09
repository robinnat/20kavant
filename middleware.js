import { NextResponse } from "next/server";

// Les guides vivent sur leur propre sous-domaine : guides.20kavant.fr/<slug>
// est réécrit vers /guides/<slug>. L'adresse visible reste le sous-domaine.
// Surchargeable via NEXT_PUBLIC_GUIDES_HOST si le sous-domaine change.
const HOTE_GUIDES = process.env.NEXT_PUBLIC_GUIDES_HOST || "guides.20kavant.fr";
const SITE = "https://20kavant.fr";

export function middleware(request) {
  const hote = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (hote !== HOTE_GUIDES) return NextResponse.next();

  const url = request.nextUrl.clone();

  // Pas d'index des guides : la racine du sous-domaine renvoie au site.
  if (url.pathname === "/") {
    return NextResponse.redirect(`${SITE}/robinnat`);
  }

  // Les pages du site principal n'ont rien à faire ici.
  if (url.pathname.startsWith("/robinnat")) {
    return NextResponse.redirect(`${SITE}${url.pathname}${url.search}`);
  }

  // guides.20kavant.fr/mon-guide  →  /guides/mon-guide (réécriture, pas
  // redirection : l'URL affichée ne change pas).
  if (!url.pathname.startsWith("/guides/")) {
    url.pathname = `/guides${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // On laisse passer les fichiers internes et les ressources statiques.
  matcher: ["/((?!_next/|favicon|robots.txt|.*\\.[a-z0-9]+$).*)"],
};
