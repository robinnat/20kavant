import { notFound } from "next/navigation";

// La racine du sous-domaine n'a rien à montrer : les guides sont privés et
// accessibles par lien seulement, il n'existe donc pas d'index. On répond un
// vrai 404 plutôt que de renvoyer le visiteur vers le site principal.
export const metadata = { robots: { index: false, follow: false } };

export default function RacineGuides() {
  notFound();
}
