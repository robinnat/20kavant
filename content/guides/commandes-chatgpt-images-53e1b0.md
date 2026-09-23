---
title: Les commandes de ChatGPT Images
description: Le vocabulaire visuel à glisser dans tes prompts, rangé par catégorie, et des recettes prêtes à coller pour obtenir un type d'image précis.
date: 2026-09-22
---

Tu as sûrement vu passer des listes de « commandes secrètes » pour générer des
images avec ChatGPT : `/cinematic`, `/productshot`, `/35mm`, `/bokeh`...

Ce guide t'explique ce qu'elles sont vraiment, te donne le vocabulaire complet
rangé par catégorie, et se termine par **des recettes** : des suites de
commandes toutes prêtes, une par type d'image.

**Au sommaire**

1. [Ce que sont ces commandes](#ce-que-sont-ces-commandes)
2. [Ce que change une seule commande](#ce-que-change-une-seule-commande), avec des exemples
3. [Comment écrire un prompt](#comment-ecrire-un-prompt)
4. [Le dictionnaire](#le-dictionnaire), toutes les commandes par famille
5. [Les recettes](#les-recettes), prêtes à coller
6. [Prompts complets à remplir](#prompts-complets-a-remplir)
7. [Créer tes propres recettes](#creer-tes-propres-recettes)

## Ce que sont ces commandes

**Ce n'est pas un langage officiel.** ChatGPT n'a pas de liste de commandes
cachées. Le `/` ne déclenche rien : c'est juste une façon d'écrire un mot-clé
visuel sous une forme courte et facile à retenir.

Si ça marche, c'est parce que ChatGPT **comprend le sens des mots**. Quand tu
écris :

```text
/cinematic /lowangle /goldenhour /bokeh
```

il le lit comme :

```text
Cinematic rendering, low-angle camera,
golden-hour lighting, shallow depth of field
with soft background bokeh.
```

Trois conséquences pratiques :

1. **Un mot clair marche, un code obscur non.** `/softlighting` ou
   `/droneview` sont limpides. `/luxuryproducthero` n'existe nulle part mais
   fonctionne quand même, parce que son sens se devine. `/xyzmode99` ne dit
   rien à ChatGPT tant que tu ne l'as pas défini.
2. **Tu peux inventer les tiennes.** Tant que le nom reste explicite (voir
   [Créer tes propres recettes](#creer-tes-propres-recettes)).
3. **Pour ce qui est critique, écris en toutes lettres.** Un texte exact dans
   l'image, un visage à ne pas modifier, un logo interdit : une phrase complète
   est plus fiable qu'un raccourci. On y revient plus bas.

> Ce n'est pas le `/` qui améliore l'image. C'est la précision visuelle de ce
> qui vient après.

## Ce que change une seule commande

Quatre exemples, du plus léger au plus radical. À chaque fois, d'abord l'image
de départ, puis la même scène avec **une seule commande en plus**.

### `/droneview` : changer de point de vue

<div class="avant-apres">
<figure><a href="/guides/chatgpt-images-voiture-avant.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-voiture-avant.webp" alt="Voiture de sport rouge garée au bord d'une route côtière, vue de face" loading="lazy"></a><figcaption>Image de départ</figcaption></figure>
<figure><a href="/guides/chatgpt-images-voiture-droneview.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-voiture-droneview.webp" alt="La même voiture vue d'en haut, sur la route qui longe la falaise et l'océan" loading="lazy"></a><figcaption>Avec <code>/droneview</code></figcaption></figure>
</div>

La voiture, sa couleur et la côte ne changent pas. La caméra monte au-dessus
de la route : le virage devient la ligne qui guide l'oeil, et l'océan prend
toute la moitié droite de l'image.

### `/goldenhour` : changer la lumière

<div class="avant-apres">
<figure><a href="/guides/chatgpt-images-villa-avant.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-villa-avant.webp" alt="Villa blanche moderne avec piscine, en plein jour sous un ciel bleu" loading="lazy"></a><figcaption>Image de départ</figcaption></figure>
<figure><a href="/guides/chatgpt-images-villa-goldenhour.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-villa-goldenhour.webp" alt="La même villa au coucher du soleil, ciel orangé et reflets dorés dans la piscine" loading="lazy"></a><figcaption>Avec <code>/goldenhour</code></figcaption></figure>
</div>

Même maison, même cadrage, mêmes transats. Seule la lumière change : soleil
rasant, ciel orangé, reflets dorés dans la piscine, et les lampes intérieures
s'allument. La photo d'agence devient une photo qui donne envie d'y être.

### `/neonlights` : changer l'ambiance

<div class="avant-apres">
<figure><a href="/guides/chatgpt-images-ville-avant.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-ville-avant.webp" alt="Rue de ville la nuit sous la pluie, éclairée par des lampadaires" loading="lazy"></a><figcaption>Image de départ</figcaption></figure>
<figure><a href="/guides/chatgpt-images-ville-neon.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-ville-neon.webp" alt="La même rue, avec des néons roses et bleus sur les façades qui se reflètent sur le trottoir mouillé" loading="lazy"></a><figcaption>Avec <code>/neonlights</code></figcaption></figure>
</div>

Même rue, mêmes voitures, mêmes lampadaires. ChatGPT ajoute des néons roses et
bleus sur les façades, et le trottoir mouillé les reflète : une rue ordinaire
devient une scène de film nocturne.

Au passage, `/neonlights` n'est pas dans le dictionnaire, qui propose
`/neonlight` au singulier. Ça marche quand même : ChatGPT lit le sens du mot,
pas une liste officielle.

### `/productshot` : changer le genre de photo

<div class="avant-apres carre">
<figure><a href="/guides/chatgpt-images-parfum-avant.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-parfum-avant.webp" alt="Flacon de parfum posé sur une table en bois dans un salon" loading="lazy"></a><figcaption>Image de départ</figcaption></figure>
<figure><a href="/guides/chatgpt-images-parfum-productshot.webp" target="_blank" rel="noopener"><img src="/guides/chatgpt-images-parfum-productshot.webp" alt="Le même flacon mis en scène sur du marbre, avec son étui, des roses blanches et une lumière de studio" loading="lazy"></a><figcaption>Avec <code>/productshot</code></figcaption></figure>
</div>

Cette fois, ce n'est plus un réglage qui change mais **tout le genre de
l'image**. Le flacon reste le même, le reste est refait : le salon laisse la
place à du marbre, des roses blanches et l'étui, et une lumière de studio fait
briller le verre. La photo d'intérieur devient une photo de catalogue.

C'est la différence à retenir entre les familles du dictionnaire : une
commande de **lumière** ou de **cadrage** change un réglage et garde la scène,
une commande de **style** comme `/productshot` réinvente la mise en scène. Si
tu veux garder ton décor, ajoute `/preservebackground`.

Pour faire pareil, le plus simple est d'envoyer ta première image à ChatGPT
avec la commande en plus. Un seul mot suffit, à condition qu'il soit précis.
C'est tout l'intérêt du [dictionnaire](#le-dictionnaire).

## Comment écrire un prompt

Un bon prompt commence par **le sujet**, en une phrase, puis empile les
commandes famille par famille, et se termine par **les contraintes**.

![Anatomie d'un prompt : sujet, cadrage, objectif, lumière, style, matière, finition, format, contraintes](/guides/chatgpt-images-anatomie.svg)

L'ordre conseillé :

1. **Sujet** : ce qu'on voit, en une phrase
2. **Cadrage** : plan et angle de vue
3. **Objectif** : focale, profondeur de champ
4. **Lumière** : type, direction, moment de la journée
5. **Couleur** : palette, contraste, étalonnage
6. **Style** : photo, illustration, 3D...
7. **Matière et ambiance** : surfaces, météo, émotion
8. **Finition et format** : niveau de détail, ratio, usage
9. **Contraintes** : ce qui doit être gardé, ce qui ne doit pas apparaître

L'exemple du schéma, prêt à coller :

```text
Luxury wristwatch resting on a dark stone pedestal.

/closeup /lowangle /85mm
/softlighting /rimlight
/productshot /luxury /reflections
/highdetail /square

No text.
No visible brand.
Clean background.
```

Tu peux aussi tout mettre sur une ligne, ChatGPT ne fait pas la différence :

```text
/productshot /closeup /85mm /softlighting /highdetail
```

Mais une ligne par famille a un vrai avantage : quand le résultat ne te plaît
pas, tu vois tout de suite quelle ligne changer.

### Quand écrire en toutes lettres

Les raccourcis sont parfaits pour l'esthétique. Pour trois choses, une phrase
complète reste plus fiable.

**Un texte précis dans l'image :**

```text
Exact text:
"SUMMER COLLECTION"

Use exactly this spelling.
Do not add any other text.
```

**Garder un personnage ou un produit identique :**

```text
Preserve the subject's exact appearance.
Do not redesign the face, clothing, proportions or accessories.
```

**Interdire des éléments :**

```text
Do not include:
- text
- logos
- borders
- watermarks
- additional objects
```

# Le dictionnaire

Toutes les commandes, rangées en treize familles. Chaque tableau donne la
commande et ce qu'elle produit dans l'image. Tu n'as pas besoin de les
connaître par coeur : pioche dans la famille qui correspond à ce que tu veux
changer.

Quand deux commandes veulent dire la même chose, c'est indiqué : garde celle
qui te parle le plus, inutile de mettre les deux.

## 1. Cadrage

### Les plans

Le plan dit **à quelle distance** on est du sujet.

#### Plans rapprochés

| Commande | Ce que ça donne |
| --- | --- |
| `/extremecloseup` | Très gros plan : un détail (un oeil, une texture) remplit l'image |
| `/macrocloseup` | Détail extrêmement rapproché, comme vu à la loupe |
| `/tightcloseup` | Sujet très serré, coupé par les bords du cadre |
| `/closeup` | Gros plan : le visage ou l'objet occupe presque tout le cadre |
| `/headshot` | Portrait tête et épaules, le classique de la photo de profil |
| `/facecloseup` | Le visage seul domine l'image |
| `/beautycloseup` | Portrait beauté : peau, maquillage et regard mis en valeur |
| `/detailshot` | Met en avant un détail précis du sujet |
| `/insertshot` | Très gros plan sur un objet qui raconte quelque chose, comme au cinéma |

#### Plans intermédiaires

| Commande | Ce que ça donne |
| --- | --- |
| `/mediumcloseup` | Du haut de la poitrine à la tête |
| `/bustshot` | Le buste entier |
| `/waistshot` | Cadré à la taille |
| `/mediumshot` | Plan moyen, à peu près de la taille à la tête |
| `/kneeshot` | Cadré juste au-dessus des genoux |
| `/threequartershot` | Les trois quarts du corps, coupé vers le bas des cuisses |

#### Plans larges

| Commande | Ce que ça donne |
| --- | --- |
| `/fullbody` | Le sujet en entier, de la tête aux pieds |
| `/fullshot` | Comme `/fullbody` : le personnage en pied |
| `/wideshot` | Le sujet et une bonne partie de son environnement |
| `/longshot` | Le sujet paraît petit dans un grand décor |
| `/extremewideshot` | Très grand plan : le décor domine, le sujet est minuscule |
| `/establishingshot` | Plan d'ensemble qui présente le lieu, comme en ouverture de film |
| `/environmentalshot` | Portrait dans son environnement : le décor dit qui est la personne |
| `/panoramicshot` | Vue très étendue en largeur |

### Les angles de vue

L'angle dit **d'où** on regarde.

#### Hauteur de la caméra

| Commande | Ce que ça donne |
| --- | --- |
| `/eyelevel` | Caméra à hauteur des yeux : neutre, naturel |
| `/lowangle` | Caméra plus basse que le sujet : présence, puissance |
| `/extremelowangle` | Caméra presque au sol : effet monumental |
| `/groundlevel` | Caméra posée au sol, horizon très bas |
| `/wormseye` | Vue « de ver de terre » : tout est vu d'en bas, depuis le sol |
| `/highangle` | Caméra au-dessus du sujet : il paraît plus petit, plus vulnérable |
| `/extremehighangle` | Très en surplomb, presque à la verticale |

#### Vues du dessus

| Commande | Ce que ça donne |
| --- | --- |
| `/topdown` | Caméra pile au-dessus, à la verticale : idéal pour une table ou un flat lay |
| `/overhead` | Vue en surplomb, proche de `/topdown` |
| `/birdseye` | Vue d'oiseau : aérienne, plus haute que `/topdown` |
| `/aerialview` | Vue aérienne, comme depuis un avion ou un hélicoptère |
| `/droneview` | Photo aérienne réaliste, prise par un drone ([voir l'exemple](#ce-que-change-une-seule-commande)) |
| `/satelliteview` | Vue satellite, verticale et très lointaine |
| `/isometric` | Vue isométrique, sans perspective, façon maquette ou jeu vidéo |

#### Côté du sujet

| Commande | Ce que ça donne |
| --- | --- |
| `/frontview` | Vu de face |
| `/threequarterview` | Vu de trois quarts, entre face et profil |
| `/profileview` | Vu de profil |
| `/sideview` | Vu de côté, comme `/profileview` |
| `/rearview` | Vu de derrière |
| `/backview` | Vu de dos, comme `/rearview` |

#### Angles qui racontent

| Commande | Ce que ça donne |
| --- | --- |
| `/overtheshoulder` | Par-dessus l'épaule d'un personnage : très narratif |
| `/pov` | Point de vue subjectif : on voit ce que voit le personnage |
| `/firstperson` | Vue à la première personne, les mains visibles dans le cadre |
| `/dutchangle` | Horizon penché : tension, malaise |

### Les mouvements de caméra

Une image est fixe, mais ces commandes lui donnent l'air d'une image extraite
d'une vidéo : léger flou, cadrage en mouvement.

| Commande | Ce que ça donne |
| --- | --- |
| `/trackingshot` | La caméra suit le sujet qui se déplace |
| `/dollyshot` | Caméra sur rail : mouvement fluide et régulier |
| `/dollyin` | La caméra avance vers le sujet |
| `/dollyout` | La caméra recule, le sujet s'éloigne |
| `/pushin` | Avancée lente vers le sujet, pour intensifier le moment |
| `/pullout` | Recul qui révèle le décor autour du sujet |
| `/panshot` | Rotation horizontale de la caméra, flou de balayage |
| `/tiltshot` | Rotation verticale, de bas en haut ou l'inverse |
| `/orbitshot` | La caméra tourne autour du sujet |
| `/craneshot` | Caméra sur grue qui s'élève au-dessus de la scène |
| `/handheld` | Caméra à l'épaule : léger bougé, côté pris sur le vif |
| `/steadicam` | Mouvement fluide qui suit le sujet, sans secousse |
| `/actioncamera` | Look caméra d'action : grand-angle, immersif |

## 2. Objectif et netteté

### Les focales

La focale change **la perspective**, pas seulement le zoom.

| Commande | Ce que ça donne |
| --- | --- |
| `/14mm` | Ultra grand-angle : espace immense, bords très étirés |
| `/18mm` | Très grand-angle : intérieurs, paysages |
| `/24mm` | Grand-angle : architecture, pièces entières |
| `/28mm` | Grand-angle modéré : reportage, rue |
| `/35mm` | Large mais naturel : scène avec du contexte, look film |
| `/40mm` | Entre large et normal, très polyvalent |
| `/50mm` | Proche de l'oeil humain : rendu naturel |
| `/70mm` | Léger téléobjectif : portrait, détail |
| `/85mm` | La focale portrait : visage flatteur, fond qui se détache |
| `/105mm` | Portrait serré, produit, gros plan |
| `/135mm` | Téléobjectif : fond écrasé, sujet isolé |
| `/200mm` | Long téléobjectif : sport, sujet lointain, forte compression |

#### Types d'objectifs

| Commande | Ce que ça donne |
| --- | --- |
| `/ultrawide` | Ultra grand-angle |
| `/wideangle` | Grand-angle |
| `/standardlens` | Objectif standard, vision naturelle |
| `/portraitlens` | Objectif portrait, autour de 85 mm |
| `/telephoto` | Téléobjectif : rapproche le sujet et écrase les plans |
| `/supertelephoto` | Très long téléobjectif : sport, animaux |
| `/macro` | Objectif macro : les tout petits détails en très gros |
| `/fisheye` | Fisheye : image ronde, très déformée |
| `/tiltshift` | Bascule : zone nette étroite, effet maquette miniature |
| `/anamorphic` | Anamorphique : format cinéma, reflets horizontaux, flou ovale |

### La profondeur de champ

Ce qui est net, et ce qui ne l'est pas.

| Commande | Ce que ça donne |
| --- | --- |
| `/shallowdepth` | Faible profondeur : sujet net, fond flou |
| `/veryshallowdepth` | Très faible profondeur : seule une petite zone est nette |
| `/deepfocus` | Tout est net, du premier plan au fond |
| `/selectivefocus` | Mise au point sur un seul élément choisi |
| `/backgroundblur` | Arrière-plan flou |
| `/foregroundblur` | Premier plan flou, qui encadre le sujet net |
| `/bokeh` | Fond flou parsemé de taches de lumière rondes |
| `/creamybokeh` | Bokeh très doux et fondu |
| `/circularbokeh` | Taches de lumière bien rondes |
| `/cinematicbokeh` | Bokeh façon cinéma, souvent ovale |

### Netteté et mouvement

| Commande | Ce que ça donne |
| --- | --- |
| `/sharpfocus` | Mise au point nette |
| `/tacksharp` | Netteté maximale, jusqu'au moindre détail |
| `/crispdetails` | Détails francs et bien définis |
| `/softfocus` | Léger flou doux sur toute l'image |
| `/dreamyfocus` | Flou vaporeux, ambiance de rêve |
| `/rackfocus` | La netteté passe d'un plan à l'autre, comme au cinéma |
| `/motionblur` | Flou de mouvement : le sujet bouge |
| `/subtlemotionblur` | Léger flou de mouvement, juste pour donner de la vie |
| `/freezeaction` | Action figée net en plein mouvement |
| `/highspeedphoto` | Photo haute vitesse : gouttes et éclaboussures figées |
| `/longexposure` | Pose longue : traînées de lumière, eau lissée |

## 3. Composition

Comment les éléments sont **placés dans le cadre**.

#### Placement

| Commande | Ce que ça donne |
| --- | --- |
| `/centered` | Sujet au centre du cadre |
| `/offcenter` | Sujet décentré |
| `/symmetrical` | Composition symétrique |
| `/asymmetrical` | Composition volontairement déséquilibrée |
| `/ruleofthirds` | Sujet placé sur les lignes des tiers |
| `/goldenratio` | Placement selon le nombre d'or |

#### Lignes et formes

| Commande | Ce que ça donne |
| --- | --- |
| `/leadinglines` | Des lignes qui guident l'oeil vers le sujet |
| `/diagonalcomposition` | Construite sur une diagonale : dynamisme |
| `/triangularcomposition` | Éléments disposés en triangle : stabilité |
| `/geometriccomposition` | Formes géométriques marquées |

#### Densité

| Commande | Ce que ça donne |
| --- | --- |
| `/minimalcomposition` | Peu d'éléments, beaucoup de vide |
| `/cleancomposition` | Composition épurée, sans élément parasite |
| `/balancedcomposition` | Poids visuel bien réparti |
| `/dynamiccomposition` | Composition vivante, pleine de mouvement |
| `/densecomposition` | Image riche, remplie d'éléments |
| `/creativecomposition` | Cadrage original, inattendu |

#### Profondeur

| Commande | Ce que ça donne |
| --- | --- |
| `/layeredcomposition` | Plusieurs plans superposés : avant, milieu, fond |
| `/layereddepth` | Profondeur construite par couches successives |
| `/deepcomposition` | Scène qui se lit en profondeur |
| `/foregroundelement` | Un élément au premier plan pour donner de la profondeur |
| `/foregroundfocus` | Netteté sur le premier plan |
| `/backgroundfocus` | Netteté sur l'arrière-plan |
| `/framewithinframe` | Sujet encadré par une porte, une fenêtre, un miroir |
| `/naturalframing` | Cadre naturel : branches, arche, rochers |

#### Point focal

| Commande | Ce que ça donne |
| --- | --- |
| `/clearfocalpoint` | Un seul point d'attention, évident |
| `/strongfocalpoint` | Point focal très marqué |
| `/visualhierarchy` | L'oeil lit les éléments dans un ordre clair |
| `/negativespace` | Beaucoup d'espace vide autour du sujet |
| `/headroom` | De l'air au-dessus de la tête du sujet |

#### Compositions types

| Commande | Ce que ça donne |
| --- | --- |
| `/herocomposition` | Le sujet en héros, grand et central |
| `/postercomposition` | Composition d'affiche, avec de la place pour le titre |
| `/editorialcomposition` | Composition de magazine, élégante |

## 4. Lumière

C'est la famille qui change le plus une image. Si tu ne dois en soigner
qu'une, c'est celle-ci.

### Le type de lumière

| Commande | Ce que ça donne |
| --- | --- |
| `/softlighting` | Lumière douce : ombres légères, rendu flatteur |
| `/hardlighting` | Lumière dure : ombres nettes, contraste, caractère |
| `/naturallight` | Lumière naturelle, sans éclairage artificiel |
| `/studiolighting` | Éclairage de studio maîtrisé |
| `/cinematiclighting` | Éclairage de cinéma, contrasté et directionnel |
| `/dramaticlighting` | Lumière contrastée qui dramatise la scène |
| `/editoriallighting` | Éclairage de shooting magazine |
| `/diffusedlight` | Lumière diffusée, sans source visible |
| `/directionallight` | Lumière qui vient d'un côté précis |
| `/evenlighting` | Éclairage uniforme, sans ombre marquée : idéal catalogue |
| `/ambientlight` | Lumière d'ambiance du lieu |
| `/moodylighting` | Lumière sombre, chargée d'émotion |
| `/highkey` | Image claire et lumineuse, très peu d'ombres |
| `/lowkey` | Image sombre, le sujet sort du noir |

### La direction

D'où vient la lumière par rapport au sujet.

| Commande | Ce que ça donne |
| --- | --- |
| `/frontlight` | Lumière de face : peu de relief |
| `/sidelight` | De côté : relief et texture, une moitié dans l'ombre |
| `/backlight` | Derrière le sujet : halo, silhouette |
| `/toplight` | Du dessus, comme un plafonnier |
| `/underlight` | Par en dessous : effet étrange, inquiétant |
| `/rimlight` | Liseré lumineux sur les contours, qui détache le sujet du fond |
| `/edgelight` | Lumière qui souligne les bords, proche de `/rimlight` |
| `/kickerlight` | Petite lumière arrière qui accroche un côté du sujet |
| `/hairlight` | Lumière arrière sur les cheveux |
| `/windowlight` | Lumière douce venant d'une fenêtre |
| `/spotlight` | Faisceau concentré sur le sujet, le reste dans l'ombre |

### Sources et effets de lumière

| Commande | Ce que ça donne |
| --- | --- |
| `/volumetriclight` | Rayons de lumière visibles dans l'air |
| `/godrays` | Faisceaux de soleil à travers les nuages ou les arbres |
| `/lightshafts` | Colonnes de lumière qui traversent la scène |
| `/hazelight` | Lumière diffusée par une brume légère |
| `/foglight` | Lumière qui se perd dans le brouillard |
| `/practicallights` | Les lampes visibles dans la scène l'éclairent elles-mêmes, comme au cinéma |
| `/neonlight` | Éclairage néon coloré ([voir l'exemple](#ce-que-change-une-seule-commande)) |
| `/neonglow` | Halo lumineux autour des néons |
| `/candlelight` | Lumière de bougie, chaude et vacillante |
| `/firelight` | Lumière d'un feu, orangée |
| `/moonlight` | Clair de lune, bleuté |
| `/starlight` | Lumière des étoiles, ciel nocturne |
| `/streetlight` | Lampadaires de rue |
| `/headlights` | Phares de voiture |
| `/projectorlight` | Faisceau de projecteur |

### Le moment de la journée

| Commande | Ce que ça donne |
| --- | --- |
| `/dawn` | Aube : premières lueurs, bleutées |
| `/sunrise` | Lever du soleil |
| `/morninglight` | Lumière du matin, fraîche et claire |
| `/midday` | Plein midi : lumière dure, ombres courtes |
| `/afternoonlight` | Lumière d'après-midi |
| `/goldenhour` | Heure dorée, juste avant le coucher : lumière chaude et rasante ([voir l'exemple](#ce-que-change-une-seule-commande)) |
| `/sunset` | Coucher du soleil |
| `/dusk` | Crépuscule, juste après le coucher |
| `/bluehour` | Heure bleue : ciel bleu profond, lumières de la ville allumées |
| `/twilight` | Entre le jour et la nuit |
| `/night` | Nuit |
| `/midnight` | Pleine nuit, très sombre |

## 5. Couleur

#### Température

| Commande | Ce que ça donne |
| --- | --- |
| `/warmtones` | Tons chauds : orangés, dorés |
| `/cooltones` | Tons froids : bleus, verts |
| `/neutraltones` | Tons neutres, sans dominante |
| `/warmwhite` | Blanc chaud, légèrement crème |
| `/coolwhite` | Blanc froid, légèrement bleuté |

#### Saturation

| Commande | Ce que ça donne |
| --- | --- |
| `/vibrantcolors` | Couleurs vives et éclatantes |
| `/highsaturation` | Saturation poussée au maximum |
| `/saturated` | Couleurs saturées |
| `/desaturated` | Couleurs désaturées, presque grises |
| `/mutedcolors` | Couleurs sourdes, adoucies |
| `/mutedtones` | Comme `/mutedcolors` |
| `/softcolors` | Couleurs douces |
| `/pastelcolors` | Couleurs pastel |
| `/fadedcolors` | Couleurs passées, délavées par le temps |

#### Contraste

| Commande | Ce que ça donne |
| --- | --- |
| `/highcontrast` | Fort contraste : noirs profonds, blancs francs |
| `/lowcontrast` | Faible contraste, image douce |
| `/softcontrast` | Contraste adouci |
| `/deepcontrast` | Contraste profond, ombres denses |

#### Palettes

| Commande | Ce que ça donne |
| --- | --- |
| `/monochrome` | Une seule couleur, en différentes nuances |
| `/blackandwhite` | Noir et blanc |
| `/sepia` | Tons sépia, brun ancien |
| `/duotone` | Deux couleurs seulement |
| `/tritone` | Trois couleurs seulement |
| `/pastelpalette` | Palette pastel |
| `/softpalette` | Palette douce et harmonieuse |
| `/earthtones` | Tons terre : beiges, bruns, ocres |
| `/jeweltones` | Tons pierres précieuses : émeraude, rubis, saphir |
| `/neonpalette` | Couleurs néon, fluo |
| `/vintagepalette` | Palette rétro, légèrement passée |
| `/luxurypalette` | Palette luxe : noir, or, crème |
| `/minimalpalette` | Très peu de couleurs |

#### Duos de couleurs

| Commande | Ce que ça donne |
| --- | --- |
| `/tealandorange` | Bleu-vert et orange : le duo des blockbusters |
| `/cyanmagenta` | Cyan et magenta |
| `/pinkblue` | Rose et bleu |
| `/purpleorange` | Violet et orange |

#### Étalonnage

Le traitement des couleurs, comme au cinéma.

| Commande | Ce que ça donne |
| --- | --- |
| `/filmgrade` | Étalonnage façon pellicule |
| `/cinematicgrade` | Étalonnage de film |
| `/editorialgrade` | Étalonnage de magazine, propre et élégant |
| `/commercialgrade` | Étalonnage publicitaire, net et flatteur |
| `/vintagegrade` | Étalonnage à l'ancienne |
| `/retrograde` | Étalonnage rétro |
| `/bleachbypass` | Couleurs désaturées et très contrastées, look métallique |
| `/fadedgrade` | Étalonnage délavé |
| `/washedout` | Image délavée, peu contrastée |
| `/richblacks` | Noirs profonds et denses |
| `/cleanwhites` | Blancs purs, sans dominante |
| `/deepshadows` | Ombres profondes |
| `/softshadows` | Ombres douces |
| `/liftedblacks` | Noirs relevés, un peu gris : look film mat |

## 6. Style

### Photo

#### Réalisme

| Commande | Ce que ça donne |
| --- | --- |
| `/photo` | Une photographie |
| `/photorealistic` | Rendu photoréaliste |
| `/hyperrealistic` | Hyperréaliste, plus détaillé que nature |
| `/ultrarealistic` | Ultra réaliste |
| `/truephoto` | Ressemble à une vraie photo, pas à une image générée |
| `/naturalphoto` | Photo naturelle, peu retouchée |
| `/realistic` | Réaliste |

#### Genres photo

| Commande | Ce que ça donne |
| --- | --- |
| `/editorialphoto` | Photo de magazine |
| `/commercialphoto` | Photo publicitaire |
| `/lifestylephoto` | Photo lifestyle : des gens dans leur quotidien |
| `/documentaryphoto` | Photo documentaire, prise sur le vif |
| `/streetphoto` | Photo de rue |
| `/fashionphoto` | Photo de mode |
| `/beautyphoto` | Photo beauté : peau, maquillage |
| `/foodphoto` | Photo culinaire |
| `/architecturephoto` | Photo d'architecture |
| `/interiorphoto` | Photo d'intérieur |
| `/automotivephoto` | Photo automobile |
| `/sportsphoto` | Photo de sport |
| `/travelphoto` | Photo de voyage |

#### Photo de produit

| Commande | Ce que ça donne |
| --- | --- |
| `/productshot` | Photo produit ([voir l'exemple](#ce-que-change-une-seule-commande)) |
| `/packshot` | Produit seul, de face, sur fond neutre : catalogue |
| `/producthero` | Produit en héros, mis en scène |
| `/heroproduct` | Comme `/producthero` |
| `/catalogshot` | Photo de catalogue, neutre |
| `/ecommercephoto` | Photo pour une fiche produit en ligne |
| `/studioproduct` | Produit photographié en studio |
| `/floatingproduct` | Produit qui flotte dans les airs |
| `/pedestalproduct` | Produit posé sur un socle |
| `/lifestyleproduct` | Produit en situation d'usage |
| `/luxuryproduct` | Mise en scène de produit de luxe |
| `/beautyproduct` | Produit cosmétique |
| `/flatlay` | Objets posés à plat, photographiés du dessus |

#### Look cinéma

| Commande | Ce que ça donne |
| --- | --- |
| `/cinemastill` | Image fixe tirée d'un film |
| `/filmstill` | Comme `/cinemastill` |
| `/movieframe` | Une image de film |
| `/blockbuster` | Look superproduction hollywoodienne |
| `/arthouse` | Look film d'auteur |
| `/indiefilm` | Look film indépendant |
| `/documentaryfilm` | Look film documentaire |
| `/anamorphiclook` | Rendu objectif anamorphique : format large, reflets horizontaux |
| `/cinemascope` | Format cinéma très large |
| `/cinematicdepth` | Plans étagés en profondeur, façon cinéma |

#### Argentique

| Commande | Ce que ça donne |
| --- | --- |
| `/analogfilm` | Photo sur pellicule |
| `/35mmfilm` | Pellicule 35 mm |
| `/mediumformat` | Moyen format : grand piqué, rendu doux |
| `/largeformat` | Grand format : détail extrême |
| `/filmgrain` | Grain de pellicule |
| `/finegrain` | Grain fin |
| `/heavygrain` | Gros grain |
| `/vintagefilm` | Vieille pellicule |
| `/disposablecamera` | Appareil jetable : flash, couleurs un peu fausses |
| `/instantcamera` | Appareil photo instantané |
| `/polaroidlook` | Look Polaroid, couleurs douces |
| `/lightleaks` | Fuites de lumière orangées sur les bords |
| `/filmhalation` | Halo rouge autour des sources lumineuses, typique de la pellicule |

#### Flash

| Commande | Ce que ça donne |
| --- | --- |
| `/directflash` | Flash direct : ombre dure derrière le sujet, look soirée |
| `/oncameraflash` | Flash fixé sur l'appareil, comme `/directflash` |
| `/softflash` | Flash adouci |
| `/editorialflash` | Flash de shooting magazine, assumé |

### Dessin et peinture

#### Illustration

| Commande | Ce que ça donne |
| --- | --- |
| `/illustration` | Illustration |
| `/digitalillustration` | Illustration numérique |
| `/editorialillustration` | Illustration de presse |
| `/conceptart` | Recherche visuelle pour un film ou un jeu |
| `/keyart` | Visuel principal d'un film ou d'un jeu |
| `/posterart` | Illustration d'affiche |
| `/bookillustration` | Illustration de livre |
| `/storybook` | Livre d'histoires pour enfants |
| `/childrensillustration` | Illustration jeunesse |
| `/fashionillustration` | Illustration de mode |
| `/scientificillustration` | Illustration scientifique, précise |
| `/technicalillustration` | Illustration technique |

#### Dessin

| Commande | Ce que ça donne |
| --- | --- |
| `/pencil` | Au crayon |
| `/pencilsketch` | Croquis au crayon |
| `/graphite` | Mine de graphite, gris nuancés |
| `/charcoal` | Fusain, noirs profonds et charbonneux |
| `/ink` | À l'encre |
| `/inkdrawing` | Dessin à l'encre |
| `/penandink` | Plume et encre, hachures |
| `/lineart` | Dessin au trait, sans remplissage |
| `/cleanlineart` | Trait propre et net |
| `/roughsketch` | Croquis rapide, esquissé |
| `/storyboardsketch` | Croquis de storyboard |
| `/markersketch` | Croquis au feutre |

#### Peinture

| Commande | Ce que ça donne |
| --- | --- |
| `/oilpainting` | Peinture à l'huile |
| `/watercolor` | Aquarelle |
| `/gouache` | Gouache : couleurs mates et couvrantes |
| `/acrylicpainting` | Peinture acrylique |
| `/pastel` | Pastel |
| `/digitalpainting` | Peinture numérique |
| `/mattepainting` | Décor peint très détaillé, façon cinéma |
| `/impasto` | Peinture en empâtements épais |

#### BD et animation

| Commande | Ce que ça donne |
| --- | --- |
| `/comic` | Bande dessinée |
| `/comicbook` | Comics américain |
| `/graphicnovel` | Roman graphique |
| `/manga` | Manga |
| `/anime` | Anime japonais |
| `/celshading` | Aplats de couleur et ombres tranchées, façon dessin animé |
| `/cartoon` | Dessin animé |
| `/stylizedcartoon` | Dessin animé stylisé |
| `/animation` | Style animation |
| `/animationfilm` | Image de film d'animation |
| `/2danimation` | Animation en 2D |
| `/3danimation` | Animation en images de synthèse |

### Graphisme et 3D

#### Design graphique

| Commande | Ce que ça donne |
| --- | --- |
| `/graphicdesign` | Design graphique |
| `/vectorart` | Dessin vectoriel, formes nettes |
| `/flaticons` | Icônes plates |
| `/flatillustration` | Illustration plate, sans relief |
| `/geometricdesign` | Design géométrique |
| `/minimaldesign` | Design minimaliste |
| `/editorialdesign` | Mise en page de magazine |
| `/posterdesign` | Design d'affiche |
| `/swissdesign` | Style suisse : grille, typographie, sobriété |
| `/brutalistdesign` | Design brutaliste : brut, contrasté, volontairement rugueux |
| `/retrographic` | Graphisme rétro |

#### 3D

| Commande | Ce que ça donne |
| --- | --- |
| `/3drender` | Rendu 3D |
| `/realistic3d` | 3D réaliste |
| `/stylized3d` | 3D stylisée |
| `/cinematic3d` | 3D cinématographique |
| `/product3d` | Produit modélisé en 3D |
| `/archviz` | Visualisation d'architecture en 3D |
| `/clayrender` | Rendu façon pâte à modeler, sans texture |
| `/claymation` | Animation en pâte à modeler |
| `/plasticrender` | Rendu plastique |
| `/toyrender` | Rendu jouet |
| `/lowpoly` | 3D à facettes, peu de polygones |
| `/highpoly` | 3D très détaillée |
| `/voxel` | 3D en petits cubes |

#### Artisanal

| Commande | Ce que ça donne |
| --- | --- |
| `/papercut` | Papier découpé |
| `/papercraft` | Construction en papier |
| `/origami` | Origami |
| `/collage` | Collage |
| `/mixedmedia` | Techniques mixtes |
| `/screenprint` | Sérigraphie |
| `/risograph` | Risographie : grain et couleurs légèrement décalées |
| `/linocut` | Linogravure |
| `/woodcut` | Gravure sur bois |
| `/embroidery` | Broderie |
| `/fabricart` | Art textile |
| `/feltart` | Feutrine |
| `/clayart` | Sculpture en argile |

### Visuels fonctionnels

Pour les images qui doivent **servir à quelque chose** avant d'être belles.

#### Logos, icônes, maquettes

| Commande | Ce que ça donne |
| --- | --- |
| `/logo` | Un logo |
| `/appicon` | Icône d'application |
| `/appmockup` | Maquette d'app affichée sur un écran |
| `/boldshape` | Forme simple et affirmée |
| `/geometric` | Formes géométriques |
| `/simple` | Simple, sans fioriture |

#### Schémas et documents

| Commande | Ce que ça donne |
| --- | --- |
| `/infographic` | Infographie |
| `/technicaldrawing` | Dessin technique |
| `/schematic` | Schéma |
| `/blueprint` | Plan bleu d'architecte ou d'ingénieur |
| `/annotations` | Avec des annotations |
| `/cleanlayout` | Mise en page propre |
| `/structured` | Organisé, structuré |
| `/precise` | Précis |

#### Mises en page multiples

| Commande | Ce que ça donne |
| --- | --- |
| `/splitscreen` | Image coupée en deux |
| `/beforeafter` | Comparaison avant / après |
| `/triptych` | Triptyque : trois images côte à côte |
| `/threepanels` | Trois panneaux |
| `/multiplepanels` | Plusieurs cases |
| `/charactersheet` | Fiche personnage : le même personnage sous plusieurs angles |
| `/expressionsheet` | Planche d'expressions du même visage |
| `/storyboard` | Suite de cases qui racontent une scène |
| `/visualstorytelling` | Image qui raconte une histoire |

## 7. Matière et surfaces

#### Finitions

| Commande | Ce que ça donne |
| --- | --- |
| `/glossy` | Brillant |
| `/matte` | Mat |
| `/satin` | Satiné, entre mat et brillant |

#### Métaux

| Commande | Ce que ça donne |
| --- | --- |
| `/metallic` | Métallique |
| `/chrome` | Chromé, effet miroir |
| `/brushedmetal` | Métal brossé |
| `/gold` | Or |
| `/silver` | Argent |
| `/copper` | Cuivre |

#### Verre

| Commande | Ce que ça donne |
| --- | --- |
| `/glass` | Verre |
| `/frostedglass` | Verre dépoli |
| `/crystal` | Cristal |
| `/transparent` | Transparent |
| `/translucent` | Translucide : laisse passer la lumière sans être transparent |

#### Textiles

| Commande | Ce que ça donne |
| --- | --- |
| `/fabric` | Tissu |
| `/velvet` | Velours |
| `/silk` | Soie |
| `/denim` | Jean |
| `/leather` | Cuir |

#### Autres matériaux

| Commande | Ce que ça donne |
| --- | --- |
| `/plastic` | Plastique |
| `/rubber` | Caoutchouc |
| `/wood` | Bois |
| `/marble` | Marbre |
| `/stone` | Pierre |
| `/concrete` | Béton |
| `/ceramic` | Céramique |
| `/porcelain` | Porcelaine |
| `/paper` | Papier |
| `/cardboard` | Carton |

#### Reflets

| Commande | Ce que ça donne |
| --- | --- |
| `/reflections` | Reflets |
| `/sharpreflections` | Reflets nets |
| `/softreflections` | Reflets doux |
| `/mirrorreflection` | Reflet miroir |
| `/mirrorfinish` | Surface polie comme un miroir |
| `/wetreflection` | Reflet sur une surface mouillée |
| `/glossyreflection` | Reflet brillant |
| `/chromereflection` | Reflet chromé |
| `/wetlook` | Aspect mouillé |
| `/wetpavement` | Sol mouillé qui reflète les lumières |
| `/polishedsurface` | Surface polie |

#### Textures

| Commande | Ce que ça donne |
| --- | --- |
| `/realistictextures` | Textures réalistes : peau, grain du bois, tissu |

## 8. Ambiance

#### Particules et effets

| Commande | Ce que ça donne |
| --- | --- |
| `/fog` | Brouillard |
| `/mist` | Brume légère |
| `/haze` | Voile atmosphérique |
| `/smoke` | Fumée |
| `/steam` | Vapeur |
| `/dust` | Poussière |
| `/dustparticles` | Poussière en suspension dans la lumière |
| `/floatingparticles` | Particules qui flottent autour du sujet |
| `/lightparticles` | Particules lumineuses |
| `/sparkles` | Scintillements |
| `/sparks` | Étincelles |
| `/embers` | Braises qui volent |
| `/pollen` | Pollen |
| `/confetti` | Confettis |
| `/rain` | Pluie |
| `/raindrops` | Gouttes de pluie |
| `/snow` | Neige |
| `/snowflakes` | Flocons |
| `/watersplash` | Éclaboussure d'eau |

#### Météo

| Commande | Ce que ça donne |
| --- | --- |
| `/sunny` | Ensoleillé |
| `/overcast` | Ciel couvert, lumière diffuse |
| `/cloudy` | Nuageux |
| `/lightrain` | Petite pluie |
| `/rainy` | Pluvieux |
| `/heavyrain` | Forte pluie |
| `/storm` | Tempête |
| `/thunderstorm` | Orage |
| `/lightning` | Éclairs |
| `/foggy` | Brumeux |
| `/misty` | Embrumé |
| `/hazy` | Voilé |
| `/snowy` | Enneigé |
| `/blizzard` | Blizzard |
| `/windy` | Venteux |
| `/duststorm` | Tempête de sable |

#### Émotion

| Commande | Ce que ça donne |
| --- | --- |
| `/cinematic` | Cinématographique |
| `/epic` | Épique, grandiose |
| `/dramatic` | Dramatique |
| `/atmospheric` | Ambiance très présente |
| `/mysterious` | Mystérieux |
| `/dark` | Sombre |
| `/moody` | Chargé d'émotion, un peu sombre |
| `/dreamy` | Rêveur |
| `/surreal` | Surréaliste |
| `/ethereal` | Éthéré, aérien |
| `/magical` | Magique |
| `/whimsical` | Fantaisiste, décalé |
| `/playful` | Ludique |
| `/fun` | Fun |
| `/cozy` | Chaleureux, cocooning |
| `/intimate` | Intime |
| `/romantic` | Romantique |
| `/elegant` | Élégant |
| `/luxurious` | Luxueux |
| `/luxury` | Luxe, comme `/luxurious` |
| `/minimalist` | Minimaliste |
| `/modern` | Moderne |
| `/artistic` | Artistique |
| `/peaceful` | Paisible |
| `/serene` | Serein |
| `/melancholic` | Mélancolique |
| `/nostalgic` | Nostalgique |
| `/tense` | Tendu |
| `/suspenseful` | Plein de suspense |
| `/energetic` | Énergique |
| `/powerful` | Puissant |
| `/heroic` | Héroïque |

#### Époques et univers

| Commande | Ce que ça donne |
| --- | --- |
| `/1920s` | Années 20 |
| `/1930s` | Années 30 |
| `/1940s` | Années 40 |
| `/1950s` | Années 50 |
| `/1960s` | Années 60 |
| `/1970s` | Années 70 |
| `/1980s` | Années 80 |
| `/1990s` | Années 90 |
| `/y2k` | Années 2000 : chrome, couleurs acidulées |
| `/retro` | Rétro |
| `/vintage` | Vintage |
| `/midcentury` | Design des années 50 et 60 |
| `/artdeco` | Art déco : géométrie, dorures, années 20 et 30 |
| `/artnouveau` | Art nouveau : courbes inspirées des plantes |
| `/retrofuturism` | Le futur tel qu'on l'imaginait autrefois |
| `/futuristic` | Futuriste |
| `/spaceage` | Esthétique de la conquête spatiale, années 60 |
| `/cyberpunk` | Ville de nuit, néons, high-tech et décor sale |
| `/solarpunk` | Futur écologique, lumineux et végétal |
| `/steampunk` | Vapeur, cuivre et engrenages |
| `/fantasy` | Magie, créatures, mondes imaginaires |

## 9. Sujet et décor

### Le sujet

#### Poses

| Commande | Ce que ça donne |
| --- | --- |
| `/staticpose` | Pose immobile |
| `/naturalpose` | Pose naturelle |
| `/candidpose` | Pris sur le vif, sans poser |
| `/candid` | Photo spontanée, comme `/candidpose` |
| `/dynamicpose` | Pose dynamique |
| `/actionpose` | En pleine action |
| `/heropose` | Pose de héros |
| `/powerpose` | Pose affirmée, dominante |
| `/relaxedpose` | Détendu |
| `/confidentpose` | Assuré |
| `/elegantpose` | Élégant |
| `/dramaticpose` | Pose dramatique |

#### Mouvements

| Commande | Ce que ça donne |
| --- | --- |
| `/standing` | Debout |
| `/sitting` | Assis |
| `/walking` | En train de marcher |
| `/running` | En train de courir |
| `/jumping` | En train de sauter |
| `/dancing` | En train de danser |
| `/turning` | En train de se retourner |

#### Regard

| Commande | Ce que ça donne |
| --- | --- |
| `/lookingatcamera` | Regarde l'objectif |
| `/eyecontact` | Regarde le spectateur droit dans les yeux |
| `/lookingaway` | Regarde ailleurs |

#### Expressions

| Commande | Ce que ça donne |
| --- | --- |
| `/neutralexpression` | Visage neutre |
| `/subtlesmile` | Léger sourire |
| `/bigsmile` | Grand sourire |
| `/laughing` | En train de rire |
| `/serious` | Sérieux |
| `/confident` | Confiant |
| `/thoughtful` | Pensif |
| `/determined` | Déterminé |
| `/surprised` | Surpris |
| `/shocked` | Choqué |
| `/worried` | Inquiet |
| `/sad` | Triste |
| `/angry` | En colère |

### Le décor

#### Studio

| Commande | Ce que ça donne |
| --- | --- |
| `/studio` | En studio |
| `/whitestudio` | Studio blanc |
| `/darkstudio` | Studio sombre |
| `/blackstudio` | Studio noir |

#### Ville

| Commande | Ce que ça donne |
| --- | --- |
| `/urban` | Urbain |
| `/citystreet` | Rue de ville |
| `/downtown` | Centre-ville |
| `/rooftop` | Toit-terrasse |
| `/alley` | Ruelle |
| `/futuristiccity` | Ville futuriste |

#### Intérieurs

| Commande | Ce que ça donne |
| --- | --- |
| `/home` | Maison |
| `/livingroom` | Salon |
| `/kitchen` | Cuisine |
| `/bedroom` | Chambre |
| `/office` | Bureau |
| `/modernoffice` | Bureau moderne |
| `/luxuryoffice` | Bureau de luxe |
| `/cafe` | Café |
| `/restaurant` | Restaurant |
| `/hotel` | Hôtel |
| `/luxuryhotel` | Hôtel de luxe |
| `/warehouse` | Entrepôt |
| `/factory` | Usine |
| `/gallery` | Galerie d'art |
| `/museum` | Musée |
| `/library` | Bibliothèque |

#### Nature

| Commande | Ce que ça donne |
| --- | --- |
| `/garden` | Jardin |
| `/forest` | Forêt |
| `/jungle` | Jungle |
| `/beach` | Plage |
| `/ocean` | Océan |
| `/mountain` | Montagne |
| `/desert` | Désert |
| `/countryside` | Campagne |
| `/snowlandscape` | Paysage enneigé |
| `/underwater` | Sous l'eau |
| `/space` | Espace |

### L'arrière-plan

| Commande | Ce que ça donne |
| --- | --- |
| `/cleanbackground` | Fond propre, sans élément parasite |
| `/plainbackground` | Fond uni |
| `/minimalbackground` | Fond minimaliste |
| `/whitebackground` | Fond blanc |
| `/greybackground` | Fond gris |
| `/blackbackground` | Fond noir |
| `/darkbackground` | Fond sombre |
| `/gradientbackground` | Fond en dégradé |
| `/texturedbackground` | Fond texturé |
| `/blurredbackground` | Fond flou |
| `/bokehbackground` | Fond flou avec des taches de lumière |
| `/detailedbackground` | Fond détaillé |
| `/environmentalbackground` | Le vrai décor du lieu en fond |
| `/transparentbackground` | Fond transparent |

Pour un fond transparent, précise-le aussi en toutes lettres
(« transparent background, PNG ») : c'est une contrainte technique, pas
seulement esthétique.

## 10. Rendu final

### Qualité et finition

| Commande | Ce que ça donne |
| --- | --- |
| `/highdetail` | Très détaillé |
| `/ultradetail` | Détail extrême |
| `/finedetails` | Détails fins |
| `/sharpdetails` | Détails nets |
| `/crisp` | Net et précis |
| `/clean` | Propre, épuré |
| `/polished` | Soigné, bien fini |
| `/refined` | Raffiné |
| `/premium` | Haut de gamme |
| `/highend` | Très haut de gamme |
| `/commercialquality` | Qualité publicitaire |
| `/editorialquality` | Qualité magazine |
| `/productionready` | Prêt à être publié |

Tu croiseras aussi `/4k`, `/8k` ou `/16k`. Ils **ne changent pas la résolution
réelle** de l'image : ChatGPT les comprend comme « très détaillé ».
`/highdetail` et `/sharpdetails` disent la même chose plus honnêtement.

### Formats

| Commande | Ce que ça donne |
| --- | --- |
| `/square` | Carré, 1:1 |
| `/portrait` | Vertical |
| `/landscape` | Horizontal |
| `/vertical` | Vertical, comme `/portrait` |
| `/horizontal` | Horizontal, comme `/landscape` |
| `/vertical916` | Vertical 9:16 : story, Reel, TikTok |
| `/horizontal169` | Horizontal 16:9 : YouTube, écran |
| `/fourfive` | 4:5 : post Instagram |
| `/threefour` | 3:4 |
| `/cinematicwide` | Très large, format cinéma |
| `/panoramic` | Panoramique |

Le plus sûr reste d'écrire le ratio en clair :

| Ratio | Pour |
| --- | --- |
| `Aspect ratio: 1:1` | Post carré, icône, pochette |
| `Aspect ratio: 4:5` | Post Instagram, pub Meta |
| `Aspect ratio: 9:16` | Story, Reel, TikTok |
| `Aspect ratio: 16:9` | YouTube, bannière, site web |

Vérifie toujours le format obtenu. S'il n'est pas exactement celui demandé, tu
recadreras : garde le sujet au centre pour ne rien perdre.

### Usages

Dire à quoi sert l'image aide ChatGPT à choisir le bon cadrage.

#### Réseaux sociaux

| Commande | Ce que ça donne |
| --- | --- |
| `/socialpost` | Post pour les réseaux |
| `/instagram` | Pour Instagram |
| `/story` | Story |
| `/reel` | Reel |
| `/tiktok` | Pour TikTok |
| `/youtubethumbnail` | Miniature YouTube |
| `/thumbnail` | Miniature |

#### Web et app

| Commande | Ce que ça donne |
| --- | --- |
| `/webhero` | Grande image d'en-tête de site |
| `/landingpagehero` | Visuel d'en-tête de landing page |
| `/banner` | Bannière |
| `/appstore` | Visuel pour l'App Store |

#### Print

| Commande | Ce que ça donne |
| --- | --- |
| `/poster` | Affiche |
| `/flyer` | Flyer |
| `/brochure` | Brochure |
| `/magazinecover` | Couverture de magazine |
| `/bookcover` | Couverture de livre |
| `/albumcover` | Pochette d'album |
| `/billboard` | Panneau d'affichage |

#### Pub et vente

| Commande | Ce que ça donne |
| --- | --- |
| `/adcreative` | Visuel publicitaire |
| `/ecommerce` | E-commerce |
| `/catalog` | Catalogue |
| `/presentationcover` | Couverture de présentation |

### Texte dans l'image

| Commande | Ce que ça donne |
| --- | --- |
| `/withtext` | Avec du texte |
| `/title` | Un titre |
| `/headline` | Un gros titre accrocheur |
| `/subtitle` | Un sous-titre |
| `/caption` | Une légende |
| `/textoverlay` | Texte posé par-dessus l'image |
| `/postertext` | Texte d'affiche |
| `/boldtitle` | Titre en gras |
| `/boldtypography` | Typographie grasse, imposante |
| `/minimaltext` | Très peu de texte |
| `/cleantypography` | Typographie propre |
| `/editorialtypography` | Typographie de magazine |
| `/legibletext` | Texte bien lisible |
| `/centeredtext` | Texte centré |
| `/toptext` | Texte en haut |
| `/bottomtext` | Texte en bas |

#### Laisser de la place pour un texte

Pour un texte que tu ajouteras toi-même ensuite.

| Commande | Ce que ça donne |
| --- | --- |
| `/copyspace` | Une zone vide pour du texte |
| `/copyspacetop` | Zone vide en haut |
| `/copyspacebottom` | Zone vide en bas |
| `/copyspaceleft` | Zone vide à gauche |
| `/copyspaceright` | Zone vide à droite |
| `/emptycenter` | Centre laissé vide |
| `/emptytop` | Haut laissé vide |
| `/emptybottom` | Bas laissé vide |

Pour un texte précis, utilise le bloc `Exact text` vu plus haut.

## 11. Retouche et cohérence

Utile quand tu envoies **une image de référence** à ChatGPT.

#### Ce qui ne doit pas bouger

| Commande | Ce que ça donne |
| --- | --- |
| `/preservecomposition` | Garder la composition |
| `/preserveidentity` | Garder l'identité de la personne |
| `/preserveface` | Garder le visage |
| `/preservepose` | Garder la pose |
| `/preserveoutfit` | Garder la tenue |
| `/preservebackground` | Garder le fond |
| `/preservelighting` | Garder l'éclairage |
| `/preservecolors` | Garder les couleurs |
| `/preservestyle` | Garder le style |
| `/preservedetails` | Garder les détails |

#### Ce qu'on modifie

| Commande | Ce que ça donne |
| --- | --- |
| `/changebackground` | Changer le fond |
| `/changeoutfit` | Changer la tenue |
| `/changeexpression` | Changer l'expression |
| `/changehairstyle` | Changer la coiffure |
| `/changelighting` | Changer l'éclairage |
| `/changecolor` | Changer une couleur |
| `/recolor` | Recolorer |
| `/replaceobject` | Remplacer un objet |
| `/addobject` | Ajouter un objet |
| `/removeobject` | Retirer un objet |
| `/cleanup` | Nettoyer l'image : défauts, éléments parasites |
| `/restore` | Restaurer une photo abîmée |
| `/enhance` | Améliorer la qualité |
| `/sharpen` | Rendre plus net |

#### Garder la même chose d'une image à l'autre

| Commande | Ce que ça donne |
| --- | --- |
| `/samecharacter` | Même personnage |
| `/sameidentity` | Même identité |
| `/sameface` | Même visage |
| `/sameoutfit` | Même tenue |
| `/sameproportions` | Mêmes proportions |
| `/samehairstyle` | Même coiffure |
| `/samecolors` | Mêmes couleurs |
| `/samestyle` | Même style |
| `/samelighting` | Même éclairage |
| `/sameenvironment` | Même décor |
| `/samecamera` | Même cadrage |
| `/consistentstyle` | Style cohérent d'une image à l'autre |
| `/consistentlighting` | Éclairage cohérent |
| `/consistentproportions` | Proportions cohérentes |
| `/consistentcharacters` | Personnages cohérents |
| `/consistentcamera` | Cadrage cohérent |
| `/matchingcamera` | Même point de vue sur chaque image |
| `/matchinglighting` | Même lumière sur chaque image |

Pour un visage ou un produit, ces raccourcis ne suffisent pas toujours :
ajoute la phrase `Preserve the subject's exact appearance` vue plus haut.

## 12. Contraintes négatives

| Commande | Ce que ça donne |
| --- | --- |
| `/notext` | Pas de texte |
| `/nologo` | Pas de logo |
| `/nowatermark` | Pas de filigrane |
| `/noborder` | Pas de bordure |
| `/noframe` | Pas de cadre autour de l'image |
| `/nocrowd` | Pas de foule |
| `/nopeople` | Aucune personne dans l'image |
| `/noanimals` | Pas d'animaux |
| `/novehicles` | Pas de véhicules |
| `/noclutter` | Pas de fouillis |
| `/nobackground` | Pas de décor derrière le sujet |
| `/noreflections` | Pas de reflets |
| `/noshadows` | Pas d'ombres |
| `/nobokeh` | Pas de bokeh |
| `/nograin` | Pas de grain |
| `/noblur` | Pas de flou |
| `/nodistortion` | Pas de déformation |
| `/novisiblebrand` | Aucune marque visible |

Une liste `Do not include:` en toutes lettres reste plus efficace que ces
raccourcis.

## 13. Commandes marketing

Ces commandes ne décrivent pas un réglage technique mais **une intention**.
ChatGPT les traduit en image nette, lisible, qui arrête le regard.

#### Intentions

| Commande | Ce que ça donne |
| --- | --- |
| `/adready` | Prêt pour une pub |
| `/brandready` | Prêt pour une marque |
| `/brandconsistent` | Cohérent avec l'identité de la marque |
| `/premiumbranding` | Image de marque haut de gamme |
| `/socialfirst` | Pensé d'abord pour les réseaux |
| `/scrollstopping` | Qui arrête le scroll |
| `/attentiongrabbing` | Qui attire l'oeil |
| `/highimpact` | Fort impact visuel |
| `/heroasset` | Visuel principal d'une campagne |
| `/campaignvisual` | Visuel de campagne |
| `/campaignready` | Prêt pour une campagne |
| `/launchvisual` | Visuel de lancement |
| `/conversionfocused` | Pensé pour faire cliquer ou acheter |
| `/luxuryad` | Pub de luxe |
| `/catalogclean` | Propre comme un catalogue |
| `/ecommercevisual` | Visuel e-commerce |

#### Inventées sur le même principe

| Commande | Ce que ça donne |
| --- | --- |
| `/ultraclean` | Ultra propre |
| `/premiumlook` | Look premium |
| `/highendlook` | Look très haut de gamme |
| `/cleanpremium` | Propre et premium |
| `/softpremium` | Premium tout en douceur |
| `/modernluxury` | Luxe moderne |
| `/luxuryfinish` | Finition luxe |
| `/editorialpolish` | Finition magazine |
| `/brandstudio` | Look studio de marque |
| `/designforward` | Le design avant tout |
| `/visualpunch` | Du punch visuel |
| `/heroenergy` | Énergie de héros |
| `/richlighting` | Lumière riche |
| `/cinemadepth` | Profondeur de cinéma |
| `/storytellingframe` | Un cadre qui raconte une histoire |

# Les recettes

Une recette, c'est **une suite de commandes qui donne un type d'image précis**.

Pour t'en servir : écris ton sujet en une phrase, colle la recette en dessous,
ajoute tes contraintes. Chaque recette est rangée ligne par ligne dans le même
ordre que le schéma du début (cadrage, lumière, style, finition), pour que tu
saches quoi modifier.

```text
[Ton sujet, en une phrase]

[La recette]

[Tes contraintes]
```

## Produit et e-commerce

### Photo e-commerce classique

Pour Amazon, Shopify, une fiche produit, une marketplace.

```text
/productshot /closeup
/studiolighting /softlighting
/cleanbackground /sharpfocus
/highdetail /commercialquality
```

### Produit premium

```text
/producthero /closeup /85mm /lowangle
/softlighting /rimlight
/darkstudio /glossyreflection /luxury
/highdetail
```

### Produit minimal, façon Apple

```text
/productshot /centered
/minimalcomposition /negativespace
/softlighting
/whitebackground /clean /premium
/sharpdetails
```

### Pub produit ultra premium

```text
/producthero /lowangle /85mm
/cinematiclighting /rimlight
/luxury /highcontrast /reflections
/highdetail /commercialquality
```

### Produit flottant

```text
/floatingproduct /producthero /centered
/softlighting
/cleanbackground /reflections
/sharpfocus
```

### Produit éclaboussé par de l'eau

```text
/producthero /freezeaction /highspeedphoto
/backlight /rimlight
/watersplash /darkbackground
/highdetail
```

### Produit dans la fumée

```text
/producthero
/rimlight /volumetriclight
/darkstudio /smoke /moody /luxury
```

### Produit avec particules

```text
/producthero /shallowdepth
/backlight
/floatingparticles /luxury
/highdetail
```

### Packshot sur fond transparent

```text
/productshot /frontview /centered
/evenlighting
/transparentbackground
/sharpfocus /highdetail
```

Ajoute en clair : `Transparent background, PNG.`

### Flat lay

```text
/flatlay /topdown /cleancomposition
/softlighting
/minimalist /editorialphoto
```

### Cosmétique premium

```text
/beautyproduct /closeup /85mm
/softlighting /backlight
/glass /reflections /pastelpalette /luxury
/editorialquality
```

### Parfum de luxe

```text
/producthero /lowangle /85mm
/rimlight /volumetriclight
/darkstudio /glass /reflections /luxury /cinematic
```

### Bijoux

```text
/macro /productshot /shallowdepth
/softlighting /rimlight
/sparkles /blackbackground /luxury
/highdetail
```

### Montre premium

```text
/macro /producthero /85mm /lowangle
/hardlighting /rimlight
/metallic /sharpreflections /darkstudio
/highdetail
```

### Smartphone publicitaire

```text
/producthero /threequarterview
/softlighting /rimlight
/glossyreflection /minimalbackground
/highend
```

### Rendu 3D publicitaire

```text
/3drender /producthero
/studiolighting /softlighting
/reflections
/highdetail /commercialquality
```

## Portrait et mode

### Portrait professionnel

```text
/headshot /eyelevel /85mm /shallowdepth
/softlighting
/naturalphoto /confident
/cleanbackground
```

### Portrait corporate premium

```text
/mediumcloseup /85mm /shallowdepth
/softlighting /rimlight
/editorialphoto /modernoffice /premium
```

### Portrait cinéma

```text
/closeup /85mm /shallowdepth
/cinematiclighting /lowkey /rimlight
/filmgrain /cinematicgrade /movieframe
```

### Mode éditoriale

```text
/fashionphoto /fullbody /50mm
/editoriallighting
/dynamicpose /cleancomposition /highcontrast
/magazinecover
```

### Mode de rue

```text
/fashionphoto /fullbody /35mm /shallowdepth
/naturallight
/citystreet /candidpose /editorialgrade
```

### Mode e-commerce

```text
/fashionphoto /catalogshot /fullbody /frontview
/evenlighting
/whitebackground
/sharpfocus
```

## Lieux, food et nature

### Architecture immobilière

```text
/architecturephoto /eyelevel /24mm /wideangle /deepfocus
/naturallight
/cleancomposition
/editorialquality
```

### Immobilier haut de gamme

```text
/architecturephoto /24mm
/goldenhour /warmtones
/luxury /editorialphoto /cleancomposition
/highdetail
```

### Décoration intérieure

```text
/interiorphoto /24mm /deepfocus
/naturallight /windowlight /warmtones
/editorialphoto /cleancomposition
```

### Food photography

```text
/foodphoto /closeup /50mm /shallowdepth
/windowlight /warmtones
/realistictextures /editorialphoto
```

### Restaurant gastronomique

```text
/foodphoto /macro /85mm /shallowdepth
/lowkey /sidelight
/luxury
/highdetail /editorialquality
```

### Plat vu du dessus

```text
/foodphoto /topdown /50mm
/naturallight
/cleancomposition /editorialphoto
/highdetail
```

### Photo aérienne

```text
/droneview /aerialview /wideangle /deepfocus
/naturallight
/highdetail
```

### Vue satellite artistique

```text
/satelliteview /topdown /extremewideshot /deepfocus
/geometriccomposition
/highdetail
```

### Macro nature

```text
/macro /extremecloseup /shallowdepth /bokeh
/naturallight /softlighting
/highdetail
```

## Automobile

### Automobile publicitaire

```text
/automotivephoto /lowangle /35mm /dynamiccomposition
/goldenhour
/reflections /highcontrast /cinematic
/commercialquality
```

### Automobile de nuit

```text
/automotivephoto /lowangle /35mm
/night /neonlight
/wetpavement /reflections /cinematic /filmgrade
```

## Cinéma et genres

### Affiche de film

```text
/postercomposition /herocomposition /copyspace
/dramaticlighting
/cinematic /atmospheric /highcontrast /cinematicgrade
```

### Thriller

```text
/dutchangle
/lowkey /moodylighting
/fog /deepshadows /desaturated /filmgrain
/cinematic /suspenseful
```

### Science-fiction

```text
/ultrawide /lowangle
/volumetriclight /neonlight
/futuristic /haze /epic /cinematic
/highdetail
```

### Cyberpunk

```text
/35mm
/night /neonlight
/cyberpunk /rain /wetpavement /reflections
/highcontrast /cinematic
```

### Fantastique épique

```text
/extremewideshot /lowangle
/godrays /volumetriclight
/fantasy /mattepainting /atmospheric /epic
/highdetail
```

### Nuit pluvieuse

```text
/35mm /shallowdepth
/night /neonlight
/rain /wetpavement /reflections /filmgrain /cinematic
```

### Golden hour

```text
/35mm /shallowdepth
/goldenhour /backlight /rimlight
/warmtones /filmgrade /cinematic
```

## Réseaux sociaux et pub

### Photo lifestyle Instagram

```text
/lifestylephoto /35mm /shallowdepth
/naturallight /warmtones
/candid /clean /socialfirst
```

### Story ou Reel

```text
/vertical916 /closeup /clearfocalpoint /copyspacetop
/highcontrast
/socialfirst /scrollstopping
```

Ajoute : `Keep the main subject inside the central safe area.`

### Couverture TikTok

```text
/vertical916 /closeup /clearfocalpoint /copyspacetop
/vibrantcolors /cleanbackground
/highimpact
```

### Miniature YouTube

```text
/thumbnail /horizontal169
/closeup /clearfocalpoint /negativespace
/highcontrast /vibrantcolors
/attentiongrabbing
```

### Publicité Meta

```text
/adcreative /fourfive /producthero
/cleancomposition /copyspace
/highcontrast
/premium /commercialquality
```

### Image de magazine

```text
/editorialphoto /cleancomposition /copyspace
/softlighting
/mutedtones /premium
/magazinecover
```

## Tech et startup

### Landing page SaaS

```text
/webhero /horizontal169
/minimalcomposition /copyspaceleft
/softlighting
/cleanbackground /modern /brandready
```

### Visuel de startup

```text
/editorialillustration /minimaldesign /geometricdesign
/cleancomposition
/softpalette /modern /brandready
```

### Application mobile

```text
/appmockup /productshot /threequarterview
/softlighting
/cleanbackground /premium
/highdetail
```

### Icône d'application

```text
/appicon /square /centered /boldshape
/highcontrast
/minimaldesign /simple /clean
```

## Rétro et argentique

### Affiche rétro années 80

```text
/1980s /retro /posterdesign
/neonpalette /purpleorange /highcontrast
/filmgrain
```

### Photo argentique années 90

```text
/1990s /35mmfilm /directflash
/fadedcolors /filmgrain
/streetphoto /candid
```

### Polaroid

```text
/instantcamera /polaroidlook /directflash
/softfocus /fadedcolors /vintage
```

### Photo documentaire

```text
/documentaryphoto /35mm
/naturallight
/mutedcolors /filmgrain /realistic /candid
```

## Illustration et 3D

### Illustration éditoriale moderne

```text
/editorialillustration /flatillustration /cleanlineart
/minimalcomposition
/mutedcolors /graphicdesign
```

### Anime cinématographique

```text
/anime /celshading /dynamiccomposition /shallowdepth
/cinematiclighting
/vibrantcolors
/highdetail
```

### Bande dessinée premium

```text
/comicbook /cleanlineart /celshading /dynamiccomposition
/cinematiclighting
/highcontrast
```

### Livre pour enfants

```text
/storybook /watercolor
/softlighting
/softcolors /warmtones /whimsical
```

### Rendu clay

```text
/clayrender /stylized3d
/softlighting
/pastelpalette /minimalbackground /playful
```

## Graphisme et documents

### Luxe minimaliste

```text
/minimalcomposition /negativespace
/softlighting
/luxurypalette /premium /refined /clean
```

### Design brutaliste

```text
/brutalistdesign /geometricdesign /asymmetrical
/boldtypography /minimalpalette /highcontrast
```

### Couverture de livre

```text
/bookcover /postercomposition
/strongfocalpoint /negativespace /copyspacetop
/editorialdesign
```

### Pochette d'album

```text
/albumcover /square
/creativecomposition /strongfocalpoint
/moodylighting
/highcontrast /artistic
```

### Logo minimal

```text
/logo /vectorart /minimaldesign /geometric
/whitebackground /simple /clean
```

Ajoute en clair, sinon tu obtiens souvent une mise en scène au lieu du logo :

```text
No mockup.
No shadows.
No 3D presentation.
Show only the logo artwork.
```

### Infographie

```text
/infographic /cleanlayout /visualhierarchy /structured
/minimaldesign /flatillustration
/legibletext
```

### Schéma technique

```text
/technicaldrawing /schematic /topdown
/cleanlineart /annotations /precise
/whitebackground
```

### Blueprint

```text
/blueprint /technicaldrawing /topdown
/lineart /monochrome /precise
```

## Mises en page spéciales

### Avant / après

```text
/splitscreen /beforeafter /symmetrical
/matchingcamera /matchinglighting
/cleanlayout
```

### Triptyque

```text
/triptych /threepanels
/consistentstyle /consistentlighting
/cleanlayout
```

### Fiche personnage

La base pour réutiliser le même personnage d'une image à l'autre.

```text
/charactersheet
/frontview /threequarterview /sideview /backview
/studiolighting
/expressionsheet /consistentproportions
/plainbackground
```

### Storyboard

```text
/storyboard /multiplepanels /consistentcamera
/consistentcharacters /visualstorytelling /cinematic
```

## Prompts complets à remplir

Les recettes donnent le style. Ces modèles donnent **toute la structure** : tu
remplaces ce qui est entre crochets.

### Le modèle universel

```text
SUBJECT:
[Describe the main subject]

SCENE:
[Describe location and environment]

ACTION:
[Describe what is happening]

CAMERA:
/[shot] /[angle] /[lens]

COMPOSITION:
/[composition]

LIGHTING:
/[lighting]

COLOR:
/[color palette]

STYLE:
/[visual style]

DETAILS:
/[materials] /[textures] /[atmosphere]

OUTPUT:
/[format] /[use case]

CONSTRAINTS:
[Things that must be preserved]
[Things that must not appear]
```

### Le modèle court

```text
[subject]
/[shot] /[angle] /[lens]
/[lighting]
/[style] /[mood]
/[format]
```

Par exemple :

```text
Luxury sports car parked on a coastal road.
/lowangle /35mm
/goldenhour /rimlight
/cinematic /premium
/horizontal169
```

### Photo produit

```text
[PRODUCT]

/producthero /closeup /85mm
/studiolighting /rimlight
/cleanbackground /reflections /premium
/highdetail

Aspect ratio: 4:5

No text.
No logo added.
No additional objects.
```

### Cinéma

```text
[SCENE]

/cinematic /35mm /lowangle /shallowdepth
/cinematiclighting /volumetriclight
/filmgrain /cinematicgrade

Aspect ratio: 16:9
```

### Réseaux sociaux

```text
[SUBJECT]

/vertical916 /closeup /clearfocalpoint /copyspacetop
/highcontrast
/socialfirst /scrollstopping

Keep the main subject inside the central safe area.
```

### Affiche

```text
[SUBJECT]

/postercomposition /herocomposition /copyspacetop
/dramaticlighting
/cinematic /highcontrast
/highdetail

Exact title:
"[TEXT]"

No additional text.
```

### Retouche d'une image

```text
Use the attached image as the source.

PRESERVE:
- composition
- subject identity
- pose
- proportions
- clothing
- background geometry

CHANGE ONLY:
[describe the modification]

STYLE:
/photorealistic /highdetail

Do not redesign anything that has not been explicitly requested.
```

## Créer tes propres recettes

Le vrai gain arrive quand tu utilises souvent les mêmes styles. Deux façons de
faire.

### Une commande qui résume un style

Tu donnes un nom à une description que tu tapes souvent. Par exemple,
`/brandlook` pour :

```text
Minimal premium advertising aesthetic, neutral colors,
soft directional lighting, strong product focus,
clean composition and generous negative space.
```

Ou `/mycinematic` pour :

```text
35mm cinematic still, shallow depth of field,
subtle film grain, dramatic practical lighting,
natural contrast and realistic textures.
```

### Une macro qui regroupe une recette

Une macro, c'est **une recette sous un seul nom**. On les écrit en majuscules
pour les distinguer des commandes simples.

```text
/LUXPRODUCT =
  /producthero /85mm /lowangle /rimlight
  /darkstudio /reflections /luxury /highdetail

/CINEMA =
  /35mm /cinematic /shallowdepth /filmgrain
  /cinematiclighting /cinematicgrade /movieframe

/SOCIAL =
  /vertical916 /clearfocalpoint /highcontrast
  /socialfirst /scrollstopping /copyspacetop

/ECOM =
  /productshot /frontview /studiolighting
  /cleanbackground /sharpfocus /highdetail
  /commercialquality

/EDITORIAL =
  /editorialphoto /cleancomposition /softlighting
  /mutedtones /shallowdepth /premium
```

Ensuite, un prompt entier tient en deux lignes :

```text
Luxury perfume bottle on a black marble slab.
/LUXPRODUCT
```

### Déclarer tes macros, sinon elles ne marchent pas

C'est l'étape que tout le monde oublie. Contrairement à `/softlighting`, un nom
comme `/LUXPRODUCT` n'a **aucun sens** pour ChatGPT tant que tu ne lui as pas
dit ce qu'il contient.

Deux façons de le faire :

- **Pour une conversation** : colle la liste de tes macros dans ton premier
  message, précédée de `Use these shortcuts in this conversation:`. Elles
  restent valables jusqu'à la fin de l'échange.
- **Pour toutes tes conversations** : mets-les dans les instructions
  personnalisées de ChatGPT (dans les paramètres, rubrique personnalisation).
  L'espace y est limité : garde seulement tes trois ou quatre macros
  principales.

## À retenir

- Les commandes ne sont **pas officielles** : elles marchent parce que leur sens
  est clair.
- Écris ton prompt **une ligne par famille** : sujet, cadrage, lumière, style,
  finition, contraintes.
- Si tu ne dois soigner qu'une famille, soigne **la lumière**.
- Pour un texte exact, un visage ou un interdit, **écris en toutes lettres**.
- Pars d'une **recette**, modifie une ligne à la fois, et transforme ce qui
  marche en **macro**.
