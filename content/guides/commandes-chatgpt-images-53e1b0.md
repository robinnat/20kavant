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
2. [Comment écrire un prompt](#comment-ecrire-un-prompt)
3. [Le dictionnaire](#le-dictionnaire), toutes les commandes par famille
4. [Les recettes](#les-recettes), prêtes à coller
5. [Prompts complets à remplir](#prompts-complets-a-remplir)
6. [Créer tes propres recettes](#creer-tes-propres-recettes)

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
Cinematic rendering, low-angle camera, golden-hour lighting,
shallow depth of field with soft background bokeh.
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
/productshot /closeup /85mm /softlighting /rimlight /highdetail
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

Toutes les commandes, rangées en treize familles. Tu n'as pas besoin de les
connaître par coeur : pioche dans la famille qui correspond à ce que tu veux
changer.

## 1. Cadrage

### Les plans

Le plan dit **à quelle distance** on est du sujet.

| Commande | Ce qu'on obtient |
| --- | --- |
| `/extremecloseup` | Très gros plan |
| `/macrocloseup` | Détail extrêmement rapproché |
| `/tightcloseup` | Sujet très serré dans le cadre |
| `/closeup` | Gros plan |
| `/headshot` | Portrait tête et épaules |
| `/facecloseup` | Le visage domine l'image |
| `/beautycloseup` | Portrait beauté |
| `/detailshot` | Mise en avant d'un détail |
| `/insertshot` | Très gros plan narratif sur un objet |

**Plans intermédiaires**, du buste aux genoux :
`/mediumcloseup` `/bustshot` `/waistshot` `/mediumshot` `/kneeshot`
`/threequartershot`

**Plans larges**, du corps entier au paysage :
`/fullbody` `/fullshot` `/wideshot` `/longshot` `/extremewideshot`
`/establishingshot` `/environmentalshot` `/panoramicshot`

### Les angles de vue

L'angle dit **d'où** on regarde.

**Hauteur de la caméra :**
`/eyelevel` `/lowangle` `/extremelowangle` `/groundlevel` `/wormseye`
`/highangle` `/extremehighangle`

**Vues du dessus :**
`/topdown` `/overhead` `/birdseye` `/aerialview` `/droneview`
`/satelliteview` `/isometric`

**Côté du sujet :**
`/frontview` `/threequarterview` `/profileview` `/sideview` `/rearview`
`/backview`

**Angles qui racontent :**
`/overtheshoulder` `/pov` `/firstperson` `/dutchangle`

| Commande | Pourquoi l'utiliser |
| --- | --- |
| `/lowangle` | Donne de la présence, de la puissance au sujet |
| `/extremelowangle` | Caméra presque au sol, effet monumental |
| `/topdown` | Caméra pile au-dessus, idéal pour une table ou un flat lay |
| `/birdseye` | Vue aérienne, plus haute que `/topdown` |
| `/droneview` | Suggère une vraie photo aérienne |
| `/overtheshoulder` | On regarde par-dessus l'épaule : très narratif |
| `/dutchangle` | Horizon penché, crée de la tension |

### Les mouvements de caméra

Une image est fixe, mais ces commandes lui donnent l'air d'une image extraite
d'une vidéo : léger flou, cadrage en mouvement.

`/trackingshot` `/dollyshot` `/dollyin` `/dollyout` `/pushin` `/pullout`
`/panshot` `/tiltshot` `/orbitshot` `/craneshot` `/handheld` `/steadicam`
`/actioncamera`

## 2. Objectif et netteté

### Les focales

La focale change **la perspective**, pas seulement le zoom.

| Commandes | Rendu | Pour |
| --- | --- | --- |
| `/14mm` `/18mm` `/24mm` | Grand-angle : beaucoup d'espace, lignes étirées | Architecture, intérieurs, paysages |
| `/28mm` `/35mm` | Large mais naturel | Reportage, rue, scène avec du contexte |
| `/40mm` `/50mm` | Proche de l'oeil humain | Lifestyle, food, usage général |
| `/70mm` `/85mm` `/105mm` | Visage flatteur, fond qui se détache | Portrait, produit |
| `/135mm` `/200mm` | Téléobjectif : fond écrasé, sujet isolé | Sport, mode, détails lointains |

**Types d'objectifs :**
`/ultrawide` `/wideangle` `/standardlens` `/portraitlens` `/telephoto`
`/supertelephoto` `/macro` `/fisheye` `/tiltshift` `/anamorphic`

### La profondeur de champ

Ce qui est net, et ce qui ne l'est pas.

`/shallowdepth` `/veryshallowdepth` `/deepfocus` `/selectivefocus`
`/backgroundblur` `/foregroundblur` `/bokeh` `/creamybokeh` `/circularbokeh`
`/cinematicbokeh`

`/shallowdepth` et `/bokeh` isolent le sujet sur un fond flou. `/deepfocus` fait
l'inverse : tout est net, du premier plan au fond.

### Netteté et mouvement

`/sharpfocus` `/tacksharp` `/crispdetails` `/softfocus` `/dreamyfocus`
`/rackfocus` `/motionblur` `/subtlemotionblur` `/freezeaction`
`/highspeedphoto` `/longexposure`

## 3. Composition

Comment les éléments sont **placés dans le cadre**.

**Placement :**
`/centered` `/offcenter` `/symmetrical` `/asymmetrical` `/ruleofthirds`
`/goldenratio`

**Lignes et formes :**
`/leadinglines` `/diagonalcomposition` `/triangularcomposition`
`/geometriccomposition`

**Densité :**
`/minimalcomposition` `/cleancomposition` `/balancedcomposition`
`/dynamiccomposition` `/densecomposition` `/creativecomposition`

**Profondeur :**
`/layeredcomposition` `/layereddepth` `/deepcomposition` `/foregroundelement`
`/foregroundfocus` `/backgroundfocus` `/framewithinframe` `/naturalframing`

**Point focal :**
`/clearfocalpoint` `/strongfocalpoint` `/visualhierarchy` `/negativespace`
`/headroom`

**Compositions types :**
`/herocomposition` `/postercomposition` `/editorialcomposition`

## 4. Lumière

C'est la famille qui change le plus une image. Si tu ne dois en retenir
qu'une, c'est celle-ci.

### Le type de lumière

`/softlighting` `/hardlighting` `/naturallight` `/studiolighting`
`/cinematiclighting` `/dramaticlighting` `/editoriallighting`
`/diffusedlight` `/directionallight` `/evenlighting` `/ambientlight`
`/moodylighting` `/highkey` `/lowkey`

| Commande | Effet |
| --- | --- |
| `/softlighting` | Ombres douces, peau et objets flatteurs |
| `/hardlighting` | Ombres nettes, contraste, caractère |
| `/evenlighting` | Éclairage uniforme, sans ombre marquée : catalogue |
| `/highkey` | Image claire, lumineuse, peu d'ombres |
| `/lowkey` | Image sombre, sujet qui sort du noir |

### La direction

D'où vient la lumière par rapport au sujet.

`/frontlight` `/sidelight` `/backlight` `/toplight` `/underlight` `/rimlight`
`/edgelight` `/kickerlight` `/hairlight` `/windowlight` `/spotlight`

| Commande | Effet |
| --- | --- |
| `/sidelight` | Relief et texture, un côté dans l'ombre |
| `/backlight` | Lumière derrière le sujet, halo, silhouette |
| `/rimlight` | Liseré lumineux sur les contours, détache le sujet du fond |
| `/windowlight` | Lumière naturelle et douce venant d'une fenêtre |

### Sources et effets de lumière

`/volumetriclight` `/godrays` `/lightshafts` `/hazelight` `/foglight`
`/practicallights` `/neonlight` `/neonglow` `/candlelight` `/firelight`
`/moonlight` `/starlight` `/streetlight` `/headlights` `/projectorlight`

`/volumetriclight` et `/godrays` rendent les rayons visibles dans l'air.
`/practicallights` signifie que les lampes présentes dans la scène éclairent
elles-mêmes la scène, comme au cinéma.

### Le moment de la journée

`/dawn` `/sunrise` `/morninglight` `/midday` `/afternoonlight` `/goldenhour`
`/sunset` `/dusk` `/bluehour` `/twilight` `/night` `/midnight`

`/goldenhour`, juste avant le coucher du soleil, donne une lumière chaude et
rasante. `/bluehour`, juste après, un ciel bleu profond avec les lumières de la
ville allumées.

## 5. Couleur

**Température :**
`/warmtones` `/cooltones` `/neutraltones` `/warmwhite` `/coolwhite`

**Saturation :**
`/vibrantcolors` `/highsaturation` `/saturated` `/desaturated`
`/mutedcolors` `/mutedtones` `/softcolors` `/pastelcolors` `/fadedcolors`

**Contraste :**
`/highcontrast` `/lowcontrast` `/softcontrast` `/deepcontrast`

**Palettes :**
`/monochrome` `/blackandwhite` `/sepia` `/duotone` `/tritone`
`/pastelpalette` `/softpalette` `/earthtones` `/jeweltones` `/neonpalette`
`/vintagepalette` `/luxurypalette` `/minimalpalette`

**Duos de couleurs :**
`/tealandorange` `/cyanmagenta` `/pinkblue` `/purpleorange`

**Étalonnage**, le traitement des couleurs comme au cinéma :
`/filmgrade` `/cinematicgrade` `/editorialgrade` `/commercialgrade`
`/vintagegrade` `/retrograde` `/bleachbypass` `/fadedgrade` `/washedout`
`/richblacks` `/cleanwhites` `/deepshadows` `/softshadows` `/liftedblacks`

## 6. Style

### Photo

**Réalisme :**
`/photo` `/photorealistic` `/hyperrealistic` `/ultrarealistic` `/truephoto`
`/naturalphoto` `/realistic`

**Genres photo :**
`/editorialphoto` `/commercialphoto` `/lifestylephoto` `/documentaryphoto`
`/streetphoto` `/fashionphoto` `/beautyphoto` `/foodphoto`
`/architecturephoto` `/interiorphoto` `/automotivephoto` `/sportsphoto`
`/travelphoto`

**Photo produit :**
`/productshot` `/packshot` `/producthero` `/heroproduct` `/catalogshot`
`/ecommercephoto` `/studioproduct` `/floatingproduct` `/pedestalproduct`
`/lifestyleproduct` `/luxuryproduct` `/beautyproduct` `/flatlay`

**Look cinéma :**
`/cinemastill` `/filmstill` `/movieframe` `/blockbuster` `/arthouse`
`/indiefilm` `/documentaryfilm` `/anamorphiclook` `/cinemascope`
`/cinematicdepth`

**Argentique :**
`/analogfilm` `/35mmfilm` `/mediumformat` `/largeformat` `/filmgrain`
`/finegrain` `/heavygrain` `/vintagefilm` `/disposablecamera`
`/instantcamera` `/polaroidlook` `/lightleaks` `/filmhalation`

**Flash :**
`/directflash` `/oncameraflash` `/softflash` `/editorialflash`

### Dessin et peinture

**Illustration :**
`/illustration` `/digitalillustration` `/editorialillustration`
`/conceptart` `/keyart` `/posterart` `/bookillustration` `/storybook`
`/childrensillustration` `/fashionillustration` `/scientificillustration`
`/technicalillustration`

**Dessin :**
`/pencil` `/pencilsketch` `/graphite` `/charcoal` `/ink` `/inkdrawing`
`/penandink` `/lineart` `/cleanlineart` `/roughsketch` `/storyboardsketch`
`/markersketch`

**Peinture :**
`/oilpainting` `/watercolor` `/gouache` `/acrylicpainting` `/pastel`
`/digitalpainting` `/mattepainting` `/impasto`

**BD et animation :**
`/comic` `/comicbook` `/graphicnovel` `/manga` `/anime` `/celshading`
`/cartoon` `/stylizedcartoon` `/animation` `/animationfilm` `/2danimation`
`/3danimation`

### Graphisme et 3D

**Design graphique :**
`/graphicdesign` `/vectorart` `/flaticons` `/flatillustration`
`/geometricdesign` `/minimaldesign` `/editorialdesign` `/posterdesign`
`/swissdesign` `/brutalistdesign` `/retrographic`

**3D :**
`/3drender` `/realistic3d` `/stylized3d` `/cinematic3d` `/product3d`
`/archviz` `/clayrender` `/claymation` `/plasticrender` `/toyrender`
`/lowpoly` `/highpoly` `/voxel`

**Artisanal :**
`/papercut` `/papercraft` `/origami` `/collage` `/mixedmedia`
`/screenprint` `/risograph` `/linocut` `/woodcut` `/embroidery`
`/fabricart` `/feltart` `/clayart`

### Visuels fonctionnels

Pour les images qui doivent **servir à quelque chose** avant d'être belles.

**Logos, icônes, maquettes :**
`/logo` `/appicon` `/appmockup` `/boldshape` `/geometric` `/simple`

**Schémas et documents :**
`/infographic` `/technicaldrawing` `/schematic` `/blueprint` `/annotations`
`/cleanlayout` `/structured` `/precise`

**Mises en page multiples :**
`/splitscreen` `/beforeafter` `/triptych` `/threepanels` `/multiplepanels`
`/charactersheet` `/expressionsheet` `/storyboard` `/visualstorytelling`

## 7. Matière et surfaces

**Finitions :**
`/glossy` `/matte` `/satin`

**Métaux :**
`/metallic` `/chrome` `/brushedmetal` `/gold` `/silver` `/copper`

**Verre :**
`/glass` `/frostedglass` `/crystal` `/transparent` `/translucent`

**Textiles :**
`/fabric` `/velvet` `/silk` `/denim` `/leather`

**Autres matériaux :**
`/plastic` `/rubber` `/wood` `/marble` `/stone` `/concrete` `/ceramic`
`/porcelain` `/paper` `/cardboard`

**Reflets :**
`/reflections` `/sharpreflections` `/softreflections` `/mirrorreflection`
`/mirrorfinish` `/wetreflection` `/glossyreflection` `/chromereflection`
`/wetlook` `/wetpavement` `/polishedsurface`

**Textures :**
`/realistictextures`

## 8. Ambiance

**Particules et effets :**
`/fog` `/mist` `/haze` `/smoke` `/steam` `/dust` `/dustparticles`
`/floatingparticles` `/lightparticles` `/sparkles` `/sparks` `/embers`
`/pollen` `/confetti` `/rain` `/raindrops` `/snow` `/snowflakes`
`/watersplash`

**Météo :**
`/sunny` `/overcast` `/cloudy` `/lightrain` `/rainy` `/heavyrain` `/storm`
`/thunderstorm` `/lightning` `/foggy` `/misty` `/hazy` `/snowy` `/blizzard`
`/windy` `/duststorm`

**Émotion :**
`/cinematic` `/epic` `/dramatic` `/atmospheric` `/mysterious` `/dark`
`/moody` `/dreamy` `/surreal` `/ethereal` `/magical` `/whimsical`
`/playful` `/fun` `/cozy` `/intimate` `/romantic` `/elegant` `/luxurious`
`/luxury` `/minimalist` `/modern` `/artistic` `/peaceful` `/serene`
`/melancholic` `/nostalgic` `/tense` `/suspenseful` `/energetic`
`/powerful` `/heroic`

**Époques et univers :**
`/1920s` `/1930s` `/1940s` `/1950s` `/1960s` `/1970s` `/1980s` `/1990s`
`/y2k` `/retro` `/vintage` `/midcentury` `/artdeco` `/artnouveau`
`/retrofuturism` `/futuristic` `/spaceage` `/cyberpunk` `/solarpunk`
`/steampunk` `/fantasy`

## 9. Sujet et décor

### Le sujet

**Poses :**
`/staticpose` `/naturalpose` `/candidpose` `/candid` `/dynamicpose`
`/actionpose` `/heropose` `/powerpose` `/relaxedpose` `/confidentpose`
`/elegantpose` `/dramaticpose`

**Mouvements :**
`/standing` `/sitting` `/walking` `/running` `/jumping` `/dancing`
`/turning`

**Regard :**
`/lookingatcamera` `/eyecontact` `/lookingaway`

**Expressions :**
`/neutralexpression` `/subtlesmile` `/bigsmile` `/laughing` `/serious`
`/confident` `/thoughtful` `/determined` `/surprised` `/shocked`
`/worried` `/sad` `/angry`

### Le décor

**Studio :**
`/studio` `/whitestudio` `/darkstudio` `/blackstudio`

**Ville :**
`/urban` `/citystreet` `/downtown` `/rooftop` `/alley` `/futuristiccity`

**Intérieurs :**
`/home` `/livingroom` `/kitchen` `/bedroom` `/office` `/modernoffice`
`/luxuryoffice` `/cafe` `/restaurant` `/hotel` `/luxuryhotel` `/warehouse`
`/factory` `/gallery` `/museum` `/library`

**Nature :**
`/garden` `/forest` `/jungle` `/beach` `/ocean` `/mountain` `/desert`
`/countryside` `/snowlandscape` `/underwater` `/space`

### L'arrière-plan

`/cleanbackground` `/plainbackground` `/minimalbackground`
`/whitebackground` `/greybackground` `/blackbackground` `/darkbackground`
`/gradientbackground` `/texturedbackground` `/blurredbackground`
`/bokehbackground` `/detailedbackground` `/environmentalbackground`
`/transparentbackground`

Pour un fond transparent, précise-le aussi en toutes lettres
(« transparent background, PNG ») : c'est une contrainte technique, pas
seulement esthétique.

## 10. Rendu final

### Qualité et finition

`/highdetail` `/ultradetail` `/finedetails` `/sharpdetails` `/crisp`
`/clean` `/polished` `/refined` `/premium` `/highend` `/commercialquality`
`/editorialquality` `/productionready`

Tu croiseras aussi `/4k`, `/8k` ou `/16k`. Ils **ne changent pas la résolution
réelle** de l'image : ChatGPT les comprend comme « très détaillé ».
`/highdetail` et `/sharpdetails` disent la même chose plus honnêtement.

### Formats

`/square` `/portrait` `/landscape` `/vertical` `/horizontal` `/vertical916`
`/horizontal169` `/fourfive` `/threefour` `/cinematicwide` `/panoramic`

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

**Réseaux sociaux :**
`/socialpost` `/instagram` `/story` `/reel` `/tiktok` `/youtubethumbnail`
`/thumbnail`

**Web et app :**
`/webhero` `/landingpagehero` `/banner` `/appstore`

**Print :**
`/poster` `/flyer` `/brochure` `/magazinecover` `/bookcover` `/albumcover`
`/billboard`

**Pub et vente :**
`/adcreative` `/ecommerce` `/catalog` `/presentationcover`

### Texte dans l'image

`/withtext` `/title` `/headline` `/subtitle` `/caption`
`/textoverlay` `/postertext` `/boldtitle` `/boldtypography` `/minimaltext`
`/cleantypography` `/editorialtypography` `/legibletext` `/centeredtext`
`/toptext` `/bottomtext`

**Laisser de la place pour un texte** ajouté ensuite :
`/copyspace` `/copyspacetop` `/copyspacebottom` `/copyspaceleft`
`/copyspaceright` `/emptycenter` `/emptytop` `/emptybottom`

Pour un texte précis, utilise le bloc `Exact text` vu plus haut.

## 11. Retouche et cohérence

Utile quand tu envoies **une image de référence** à ChatGPT.

**Ce qui ne doit pas bouger :**
`/preservecomposition` `/preserveidentity` `/preserveface` `/preservepose`
`/preserveoutfit` `/preservebackground` `/preservelighting`
`/preservecolors` `/preservestyle` `/preservedetails`

**Ce qu'on modifie :**
`/changebackground` `/changeoutfit` `/changeexpression` `/changehairstyle`
`/changelighting` `/changecolor` `/recolor` `/replaceobject` `/addobject`
`/removeobject` `/cleanup` `/restore` `/enhance` `/sharpen`

**Garder la même chose d'une image à l'autre :**
`/samecharacter` `/sameidentity` `/sameface` `/sameoutfit`
`/sameproportions` `/samehairstyle` `/samecolors` `/samestyle`
`/samelighting` `/sameenvironment` `/samecamera` `/consistentstyle`
`/consistentlighting` `/consistentproportions` `/consistentcharacters`
`/consistentcamera` `/matchingcamera` `/matchinglighting`

Pour un visage ou un produit, ces raccourcis ne suffisent pas toujours :
ajoute la phrase `Preserve the subject's exact appearance` vue plus haut.

## 12. Contraintes négatives

`/notext` `/nologo` `/nowatermark` `/noborder` `/noframe` `/nocrowd`
`/nopeople` `/noanimals` `/novehicles` `/noclutter` `/nobackground`
`/noreflections` `/noshadows` `/nobokeh` `/nograin` `/noblur`
`/nodistortion` `/novisiblebrand`

Une liste `Do not include:` en toutes lettres reste plus efficace que ces
raccourcis.

## 13. Commandes marketing

Ces commandes ne décrivent pas un réglage technique mais **une intention**.
ChatGPT les traduit en image nette, lisible, qui arrête le regard.

`/adready` `/brandready` `/brandconsistent` `/premiumbranding`
`/socialfirst` `/scrollstopping` `/attentiongrabbing` `/highimpact`
`/heroasset` `/campaignvisual` `/campaignready` `/launchvisual`
`/conversionfocused` `/luxuryad` `/catalogclean` `/ecommercevisual`

Et d'autres, inventées sur le même principe :
`/ultraclean` `/premiumlook` `/highendlook` `/cleanpremium` `/softpremium`
`/modernluxury` `/luxuryfinish` `/editorialpolish` `/brandstudio`
`/designforward` `/visualpunch` `/heroenergy` `/richlighting`
`/cinemadepth` `/storytellingframe`

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
/productshot /centered /minimalcomposition /negativespace
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
/adcreative /fourfive /producthero /cleancomposition /copyspace
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
/webhero /horizontal169 /minimalcomposition /copyspaceleft
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
/albumcover /square /creativecomposition /strongfocalpoint
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
/charactersheet /frontview /threequarterview /sideview /backview
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
