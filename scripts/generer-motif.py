"""Génère les tuiles du motif de fond (les variables --dots-a et --dots-b
d'app/globals.css).

Les motifs sont des data URI SVG écrites en dur dans le CSS : impossible à
retoucher à la main. Pour changer la densité, la taille des points ou la
couleur, modifier les appels en bas du fichier puis :

    python3 scripts/generer-motif.py

et recopier les deux lignes produites dans le bloc :root d'app/globals.css.
"""

import random, urllib.parse

def tuile(taille, cellule, pas, point, couleur, opacites, densite, graine):
    """Grille de cellules ; chaque cellule porte un sous-ensemble aléatoire
    d'une micro-grille 2x3 de points, façon braille. Les points restent dans
    les bornes de leur cellule, donc la tuile se répète sans couture."""
    rnd = random.Random(graine)
    n = taille // cellule
    rects = []
    for cy in range(n):
        for cx in range(n):
            if rnd.random() > densite:
                continue
            # combien de points dans cette cellule (petits paquets surtout)
            k = rnd.choices([1, 2, 3, 4, 5, 6], weights=[14, 20, 22, 18, 14, 12])[0]
            cases = rnd.sample([(c, r) for c in range(2) for r in range(3)], k)
            ox = cx * cellule + rnd.randint(1, max(1, cellule - 2 * pas - point))
            oy = cy * cellule + rnd.randint(1, max(1, cellule - 3 * pas - point))
            for c, r in cases:
                x = ox + c * pas
                y = oy + r * pas
                o = rnd.choice(opacites)
                rects.append(
                    f"<rect x='{x}' y='{y}' width='{point}' height='{point}' opacity='{o}'/>"
                )
    svg = (
        f"<svg xmlns='http://www.w3.org/2000/svg' width='{taille}' height='{taille}'>"
        f"<g fill='{couleur}'>{''.join(rects)}</g></svg>"
    )
    return "url(\"data:image/svg+xml," + urllib.parse.quote(svg, safe="=:/'<>{}[]().,;- ") + "\")"

# couche dense, au premier plan
a = tuile(taille=240, cellule=24, pas=6, point=3, couleur="#6E5BE0",
          opacites=[".34", ".46", ".58", ".7"], densite=.8, graine=7)
# couche clairsemée, plus grande, pour la parallaxe
b = tuile(taille=288, cellule=32, pas=7, point=3, couleur="#6E5BE0",
          opacites=[".18", ".25", ".32"], densite=.45, graine=23)

print("--dots-a: " + a + ";")
print()
print("--dots-b: " + b + ";")
