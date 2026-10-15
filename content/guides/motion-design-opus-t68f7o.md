---
title: Faire tes vidéos face caméra avec du motion design, avec Opus 5.5
description: Tu te filmes une minute, Claude Code transcrit, remet ton texte dans le bon ordre, te montre un storyboard, puis ajoute sous-titres, gros titres, logos et zooms par-dessus ta vidéo.
date: 2026-10-15
---

Tu as sûrement vu ce genre de vidéo : quelqu'un parle face caméra, et autour de lui
tout bouge. Les sous-titres arrivent mot à mot, un gros titre apparaît **derrière sa
tête**, un logo se pose, une capture de site glisse, l'image zoome sur les mots forts.

C'est ce que je fais pour mes vidéos. Je me filme avec mon téléphone, et **Claude
Code** avec le modèle **Opus 5.5** fait le montage : il transcrit, remet mon texte
dans l'ordre, me montre un storyboard, puis ajoute le **motion design** (du texte, des
formes et des images qui bougent) par-dessus ma vidéo.

Ce guide te montre comment faire pareil, avec un exemple réel du début à la fin : ma
vidéo sur **Artcraft**, une boîte qui a refait les outils d'Adobe.

**Au sommaire**

1. [Le résultat et le principe](#1-le-resultat-et-le-principe)
2. [Filmer pour faciliter le montage](#2-filmer-pour-faciliter-le-montage)
3. [Le script : ta voix, remise dans l'ordre](#3-le-script-ta-voix-remise-dans-l-ordre)
4. [Le storyboard avant la vidéo](#4-le-storyboard-avant-la-video)
5. [Construire le motion design par-dessus ta vidéo](#5-construire-le-motion-design-par-dessus-ta-video)
6. [Bien utiliser les références](#6-bien-utiliser-les-references)
7. [Le parcours de A à Z](#7-le-parcours-de-a-a-z)

## 1. Le résultat et le principe

Voici la même seconde de ma vidéo Artcraft à trois moments : l'image brute filmée, la
case du storyboard que j'ai validée, et la vidéo finale.

<figure class="fiche-guide"><a href="/guides/motion-design-avant-apres-titre.jpg" target="_blank" rel="noopener"><img src="/guides/motion-design-avant-apres-titre.jpg" width="1100" height="640" alt="Trois images de la même seconde : l'image brute sans rien, la case du storyboard avec le gros titre TEMPS RECORD et le sous-titre, puis la vidéo finale avec le même titre au même endroit" loading="lazy"></a><figcaption>Brut, storyboard, vidéo finale : le gros titre est là où le storyboard l'avait prévu</figcaption></figure>

Ce qu'on ajoute par-dessus la vidéo filmée :

- des **sous-titres mot à mot**, avec le mot clé en couleur ;
- des **gros titres**, parfois placés derrière la tête ;
- des **logos et des pastilles** (petites étiquettes arrondies avec un nom d'outil) ;
- des **captures réelles** des sites ou des apps dont tu parles ;
- des **zooms** sur les mots forts ;
- une **grille d'icônes animée** quand tu cites plusieurs choses d'un coup.

### Ce que tu fais, ce que Claude fait

Toi, tu filmes et tu décides. Claude fait le travail long : transcrire, couper, mettre
dans l'ordre, dessiner le storyboard, construire les animations, rendre le fichier.

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-parcours-mobile.svg" width="400" height="790"><img src="/guides/motion-design-parcours.svg" alt="Les six étapes de la vidéo brute à la vidéo finale : 1, filmer (toi) ; 2, transcrire ta voix en texte minuté (Claude) ; 3, le script, couper et réordonner sans rien inventer (Claude, puis toi) ; 4, le storyboard, images annotées et ton OK ; 5, le motion design, les couches par-dessus ta vidéo (Claude) ; 6, le rendu, un MP4 vérifié sur ton téléphone." width="880" height="424" loading="lazy"></picture></figure>

> **Note.** Le motion design fait en code, c'est un peu comme une page web qu'on filme
> image par image et qu'on pose sur ta vidéo. Claude écrit la page, un outil la
> « filme ». Toi, tu juges le résultat.

### Régler Claude Code : Opus 5.5 et l'effort

Dans Claude Code, tape `/model` puis choisis **Opus 5.5** dans la liste. Avec
`Entrée`, le choix devient ton modèle par défaut. Avec `s`, il ne vaut que pour la
session en cours.

<!-- TODO capture réelle : le sélecteur /model de Claude Code avec Opus 5.5 surligné (capture d'écran du terminal de Robin, recadrée) -->

L'**effort**, c'est le temps de réflexion que Claude s'accorde avant de répondre. Plus
il réfléchit, plus le travail est soigné, mais plus ça consomme de ton quota (ta part
d'utilisation incluse dans ton abonnement) et plus c'est long.

Tape `/effort` pour ouvrir le curseur, ou directement `/effort high`. Il y a cinq
niveaux sur Opus 5.5 : `low`, `medium`, `high`, `xhigh`, `max`. Par défaut, Opus 5.5
est sur `medium`.

Mon conseil d'usage (c'est une habitude de travail, **pas un résultat mesuré**) :

| Moment | Niveau | Pourquoi |
|---|---|---|
| Script réordonné et storyboard | `xhigh` | C'est là que tout se décide. Mieux vaut que ce soit bien pensé. |
| Retouches (« décale ce titre ») | `high` | Petit changement précis, pas besoin de réfléchir des heures. |
| Premier jet très ambitieux | `max` | Rarement. Ça coûte cher et peut « trop réfléchir ». |

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-effort-mobile.svg" width="400" height="470"><img src="/guides/motion-design-effort.svg" alt="Les cinq niveaux d&#x27;effort d&#x27;Opus 5.5, de low à max : medium par défaut, high pour les retouches, xhigh pour la création et le storyboard, max rarement. Plus le niveau monte, plus Claude réfléchit, consomme de quota et prend du temps." width="880" height="400" loading="lazy"></picture></figure>

<!-- TODO capture réelle : le curseur /effort de Claude Code réglé sur xhigh (capture d'écran du terminal de Robin) -->

À savoir : la doc d'Anthropic prévient que `max` peut avoir des **rendements
décroissants** (on paie plus pour un gain de plus en plus petit). Et `max` ne vaut que
pour la session en cours.

Dernier réglage : le **mode plan**, un mode où Claude réfléchit et propose, mais ne
touche à aucun fichier tant que tu n'as pas dit oui. Appuie sur `Shift+Tab` jusqu'à
voir `plan mode on` en bas de l'écran. Parfait pour les étapes script et storyboard.

<!-- TODO capture réelle : le bas de l'écran de Claude Code avec « plan mode on » affiché -->

> **À retenir.** Tu filmes, Claude monte, tu valides à chaque étape. Opus 5.5,
> `xhigh` pour le script et le storyboard, `high` pour les retouches, mode plan au
> départ.

## 2. Filmer pour faciliter le montage

Une bonne prise, c'est la moitié du montage. Voici ce que je fais.

**Les réglages du téléphone**

- **Vertical**, en **1080p** à **30 images par seconde**. Le 60 i/s ne sert à rien
  pour une personne qui parle, et il alourdit tout.
- **Vidéo HDR désactivée.** Le HDR (des couleurs plus riches, propres aux téléphones
  récents) se dérègle facilement quand on ajoute des éléments par-dessus et qu'on
  convertit la vidéo : couleurs délavées ou trop vives. Sur iPhone, c'est dans
  Réglages, Appareil photo, Enregistrer une vidéo.

<!-- TODO capture réelle : l'écran Réglages > Appareil photo > Enregistrer une vidéo de l'iPhone de Robin, 1080p 30 i/s et Vidéo HDR désactivée -->

**Le cadre, la lumière, le son**

- **Bonne lumière** : face à une fenêtre, jamais dos à elle.
- **Son clair** : un petit micro-cravate change tout. À défaut, une pièce calme et le
  téléphone pas trop loin.
- **De l'espace au-dessus de ta tête.** C'est là que vont les gros titres. Si ta tête
  touche le haut de l'image, il n'y a plus de place.
- **Un fond simple.** Le détourage (on en parle plus bas) sera plus propre.

**Ta façon de parler**

- **Parle comme à un ami**, pas comme dans une présentation.
- **Une idée par vidéo.** Si tu as deux idées, fais deux vidéos.
- **Laisse de courtes respirations** entre tes phrases : ce sont des points de coupe
  faciles.
- **Ne t'inquiète pas des répétitions.** Tu t'es trompé, tu redis la phrase : on
  coupe. Reprends simplement la phrase en entier, pas au milieu.

Vise **environ une minute** à l'arrivée. Tu peux filmer plus long : le montage
resserre. Ma vidéo Artcraft fait 57 secondes une fois coupée.

> **À retenir.** Vertical, 1080p, 30 i/s, HDR désactivé, bonne lumière, son clair. Une
> idée, parlée comme à un ami. Les ratés, on les coupe.

## 3. Le script : ta voix, remise dans l'ordre

Le **script**, ici, ce n'est pas un texte que tu écris avant. C'est **ce que tu as
dit**, transcrit, nettoyé et remis dans le bon ordre.

### Transcrire ta voix

Transcrire, c'est transformer ta voix en texte, avec l'heure exacte de chaque mot.
J'utilise **Whisper**, un outil gratuit d'OpenAI qui tourne sur ton ordinateur. Il a
besoin de FFmpeg (un outil gratuit qui lit et fabrique les vidéos). D'après sa page
officielle :

```bash
pip install -U openai-whisper
```

Puis, pour un fichier en français, avec l'heure de chaque mot :

```bash
whisper ma-video.mov --model medium --language French --word_timestamps True --output_format json
```

`medium`, c'est le modèle que j'utilise pour le français : un bon compromis entre
qualité et vitesse. Le premier lancement télécharge le modèle, un gros fichier. Tu
n'as pas besoin de taper ça toi-même : demande à Claude de transcrire ta vidéo avec
Whisper, il installe et lance.

### Nettoyer, puis réordonner

Claude enlève les **silences**, les **répétitions**, les **faux départs** et les
phrases ratées. Puis il **réordonne** les morceaux pour que ce soit clair. C'est
l'étape que tout le monde oublie.

Je l'ai oubliée moi aussi. Ma première version d'Artcraft gardait mes phrases dans
l'ordre où je les avais dites : l'idée forte arrivait tard, une idée revenait deux
fois, et la vidéo faisait 71 secondes. Je l'ai refusée. La deuxième version réordonne
26 morceaux de la même prise : l'accroche est en ouverture, plus de répétition, 57
secondes.

### La structure type

Sept blocs, dans cet ordre. Entre guillemets, ce que j'ai vraiment dit dans ma vidéo
Artcraft.

1. **Hook**, l'accroche, en 2 secondes maximum : « Les outils d'Adobe gratuitement. »
2. **Qui, quoi**, de qui ou de quoi tu parles : « …une boîte qui s'appelle Artcraft
   qui a refait entièrement les outils d'Adobe gratuitement. »
3. **Comment** c'est possible : « Tout a été refait avec Claude et sur une base de
   Rust. »
4. **Preuve**, un fait vérifiable : « Ils ont sorti 13 applications qui concurrencent
   Adobe et Microsoft Office. »
5. **Question**, ce que ça pose comme question : « …est-ce qu'un SaaS, un logiciel, a
   vraiment une légitimité de faire payer un abonnement pour que tu l'utilises ? »
6. **Pourquoi**, ton avis : « Sachant qu'aujourd'hui tu as juste à avoir un abonnement
   de Claude et tu peux développer ce que tu veux. »
7. **Conclusion**, une phrase forte et un appel à commenter : « Est-ce que le SaaS est
   vraiment mort ? Vous pouvez me dire dans les commentaires ce que vous en pensez. »

Le **hook**, c'est l'accroche : la phrase qui donne envie de rester. Une astuce :
c'est souvent une phrase que tu as dite plus loin dans la vidéo, **rejouée en
ouverture**. C'est ce que j'ai fait avec « Les outils d'Adobe gratuitement ».

### La règle d'or : jamais un mot inventé

Le texte final, c'est **ce que tu as dit**. Couper, oui. Réordonner, oui. Ajouter un
mot que tu n'as pas prononcé, non : de toute façon, ta bouche ne le dirait pas à
l'écran.

Couper sert aussi à retirer ce qui ne se vérifie pas. Dans Artcraft, j'avais dit
qu'ils avaient « complètement pris le marché d'Adobe ». Rien ne le prouvait : la
phrase est partie.

Ce que tu demandes à Claude :

```text
Transcris ma-video.mov avec Whisper (modèle medium, français, heure de chaque mot).
Enlève les silences, les répétitions et les faux départs. Réordonne les morceaux
en : hook, qui/quoi, comment, preuve, question, pourquoi, conclusion avec appel à
commenter. N'ajoute aucun mot que je n'ai pas dit. Donne-moi le script bloc par
bloc avec les minutages, et la liste de ce que tu as coupé et pourquoi.
```

> **À retenir.** Transcrire, nettoyer, puis **réordonner** : c'est ce qui rend une
> vidéo claire. Le texte reste tes mots, jamais des mots inventés.

## 4. Le storyboard avant la vidéo

C'est **la** règle de ce guide : on ne construit jamais la vidéo d'un coup.

Un **storyboard**, c'est la vidéo dessinée en cases, comme une BD : une case par
moment, avec ce qu'on voit et ce qui bouge.

Pense à un architecte. Il montre d'abord le plan de la maison. Déplacer un mur sur le
plan, ça prend une minute. Déplacer un mur une fois la maison construite, c'est une
autre histoire. Pour la vidéo, c'est pareil.

### Les 4 étapes

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-flux-mobile.svg" width="400" height="560"><img src="/guides/motion-design-flux.svg" alt="Le parcours en 4 étapes : 1, Opus propose un script minuté et un storyboard ; 2, tu fais tes retours, autant de tours que tu veux ; 3, tu donnes ton OK ; 4, la vidéo est construite, puis aperçu et retouches, un changement à la fois." width="880" height="420" loading="lazy"></picture></figure>

**Étape 1 : Opus propose.** Il te donne le script ordonné (le texte exact de chaque
bloc, début et fin en secondes) **et** un storyboard avec tous les éléments prévus :
sous-titres, gros titres, logos, captures, zooms, grille. Le mieux : de **vraies
images de ta vidéo** (une ou plusieurs par bloc, au format téléphone) avec les
éléments dessinés dessus, pour que tu juges sur ton téléphone, là où la vidéo sera
vue.

<figure class="fiche-guide"><a href="/guides/motion-design-storyboard-planche.jpg" target="_blank" rel="noopener"><img src="/guides/motion-design-storyboard-planche.jpg" width="1080" height="1366" alt="Deux blocs d'un storyboard : pour chaque moment, une vraie image de la vidéo au format téléphone avec les éléments dessinés dessus (capture du site, pastilles Adobe, Claude et Rust, gros titre TEMPS RECORD, sous-titres) et le minutage en secondes" loading="lazy"></a><figcaption>Un vrai storyboard, celui de ma vidéo Artcraft : de vraies images de la vidéo, avec les éléments dessinés dessus et les minutages</figcaption></figure>

**Étape 2 : tu fais tes retours.** Tu modifies le script ou le storyboard. C'est rapide
et ça consomme peu de quota, contrairement à refaire une vidéo entière. Exemple de
retour :

```text
Bloc 3 : enlève la pastille Rust, garde seulement Claude. Mets « TEMPS RECORD »
derrière ma tête et zoome à 115 % sur le mot « record ».
```

**Étape 3 : tu valides explicitement.** Tu écris « OK ». Seulement alors, Claude
construit la vidéo.

**Étape 4 : tu prévisualises, puis tu retouches un changement à la fois.** Pour juger
le rythme sans attendre, demande un aperçu sur un **proxy** : une copie légère de ta
vidéo (en 720p par exemple), bien plus rapide à rendre. Le rendu final se fait
ensuite à partir de l'original.

### Ce que tu y gagnes

- Du **quota** et du **temps** : corriger un texte coûte bien moins que recalculer une
  vidéo.
- Une vidéo **conforme du premier coup**, parce que tout a été décidé avant.
- Tu évites de jeter une vidéo ratée et de tout recommencer.

La phrase à mettre dans tous tes prompts :

```text
Avant de construire, donne-moi le script ordonné et un storyboard avec tous les
éléments, attends mon OK.
```

> **À retenir.** Script et storyboard d'abord, ton « OK » ensuite, la vidéo en dernier.
> Corriger un dessin coûte moins cher que corriger une vidéo.

## 5. Construire le motion design par-dessus ta vidéo

### Le principe : des couches

Ta vidéo ne bouge pas. On empile des **couches** par-dessus, comme des calques
transparents.

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-couches-mobile.svg" width="400" height="854"><img src="/guides/motion-design-couches.svg" alt="Une vidéo face caméra en quatre couches empilées : 1, ta vidéo filmée et coupée ; 2, le gros titre posé derrière toi ; 3, toi détouré, remis par-dessus ; 4, le devant avec sous-titres, logos et captures. Résultat : le titre passe derrière la tête." width="880" height="476" loading="lazy"></picture></figure>

Pour le titre **derrière la tête**, il faut une couche de plus : toi, **détouré**.
Détourer, c'est séparer la personne du fond, image par image, pour obtenir sa
silhouette seule. On pose le titre sur ta vidéo, puis ta silhouette par-dessus le
titre : ta tête passe devant les lettres.

### Quel outil choisir

Les trois options font la même chose au fond : les animations sont une page web,
filmée image par image par un **Chrome sans interface** (un navigateur qui tourne en
coulisses, sans fenêtre), puis posée sur ta vidéo et assemblée en MP4 par **FFmpeg**.

#### HyperFrames

Framework open source de **HeyGen**, sous licence **Apache 2.0** (gratuit, y compris
pour un usage commercial), pensé **pour les agents** comme Claude. Il demande
**Node 22 ou plus** et **FFmpeg**.

Ce qui compte ici : sa documentation prévoit le cas « **vidéo existante** ». Tu peux
y apporter une vidéo face caméra, et il a deux ateliers dédiés :

- `/embedded-captions` : des sous-titres animés sur ta vidéo ;
- `/talking-head-recut` : des titres, citations, pastilles et chiffres synchronisés
  avec ce que tu dis.

Attention : d'après sa doc, ces deux ateliers **ne recoupent pas** ta vidéo. Coupe
et réordonne-la d'abord (étape 3), puis donne-lui la version coupée. Sa doc annonce
aussi des sous-titres « derrière le sujet » et un outil qui détoure : je ne les ai pas
testés sur une vidéo entière, **à vérifier** chez toi.

Installation dans Claude Code :

```bash
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

Ou, pour n'importe quel agent : `npx skills add heygen-com/hyperframes`.

Démarrage :

```bash
npx hyperframes init mon-video
cd mon-video
npx hyperframes preview
npx hyperframes render
```

`preview` ouvre l'aperçu dans ton navigateur, `render` sort le MP4. Dans Claude Code,
tu l'appelles avec `/hyperframes:hyperframes` (ou `/hyperframes` si tu as installé les
skills sans le plugin).

<!-- TODO capture réelle : la fenêtre d'aperçu de npx hyperframes preview avec une vidéo face caméra de Robin -->

#### Remotion

**Remotion** est l'outil historique pour faire des vidéos avec **React** (une façon
d'écrire des interfaces en JavaScript, par petits blocs). Il accepte ta vidéo comme
fond (son composant `OffthreadVideo`), et il propose un paquet qui installe
**Whisper.cpp** (une version de Whisper) pour fabriquer des sous-titres.

D'après la doc officielle :

```bash
npx create-video@latest --yes --blank mon-video
cd mon-video
npx remotion skills add
npm run dev
```

Puis ouvre un second terminal dans `mon-video` et lance `claude`. Le rendu final se
fait avec `npx remotion render`. Prérequis indiqués : Node 16 ou plus, et sur Mac,
**macOS 15 (Sequoia) ou plus**.

**Attention à la licence.** Remotion est gratuit pour les particuliers, les entreprises
à but lucratif de **3 employés maximum** et les associations. Au-delà, il faut une
**licence entreprise payante**. Relis-la au moment de démarrer.

#### HTML maison

Claude écrit une page web animée (avec une bibliothèque comme **GSAP**, une boîte à
outils d'animation gratuite), la rend en **vidéo transparente**, et FFmpeg la pose sur
ta vidéo.

C'est ce que j'utilise : chez moi, ça se fait avec mon propre moteur, qui rend une
couche « derrière » et une couche « devant », puis empile le tout avec ma silhouette
au milieu. Avantage : tu contrôles tout. Inconvénient : il faut construire et
entretenir ce « tuyau » toi-même.

#### Le tableau

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-outils-mobile.svg" width="400" height="1144"><img src="/guides/motion-design-outils.svg" alt="Même principe pour les trois : ta vidéo coupée en fond, des couches animées par-dessus, le tout assemblé en MP4 par FFmpeg. HyperFrames accepte ta vidéo et a des ateliers sous-titres et habillage, mais ne la recoupe pas ; il demande Node 22+ et FFmpeg, gratuit. Remotion accepte ta vidéo avec OffthreadVideo et fait des sous-titres avec Whisper.cpp ; Node 16+, macOS 15+, licence payante au-delà de 3 employés. HTML maison : calque transparent posé par FFmpeg, tout à construire." width="880" height="592" loading="lazy"></picture></figure>

| | HyperFrames | Remotion | Maison (HTML + GSAP) |
|---|---|---|---|
| Ta vidéo en fond | Oui, ateliers dédiés | Oui (`OffthreadVideo`) | Oui, posée par FFmpeg |
| Couper ta vidéo | Non dans ces ateliers : avant | Possible, à demander | Avec FFmpeg |
| Sous-titres | Atelier `/embedded-captions` | Paquet Whisper.cpp | À construire |
| Prix | Gratuit (Apache 2.0) | Gratuit jusqu'à 3 employés | Gratuit |
| Prérequis | Node 22+, FFmpeg | Node 16+, macOS 15+ | Node, FFmpeg, Chrome |
| Niveau demandé | Débutant avec Claude | Débutant avec Claude, React aide | Intermédiaire |

### Ma recommandation

**Commence avec HyperFrames.** Il est gratuit sans condition de taille, conçu pour
qu'un agent l'utilise, et il a des ateliers prévus pour les vidéos face caméra.
Prends **Remotion** si tu fais déjà du React (et vérifie la licence). Le **maison**
seulement si tu veux tout contrôler.

Pour être honnête : mes vidéos passent par mon moteur maison, je n'ai pas encore monté
une vidéo entière avec HyperFrames ou Remotion. Je n'ai pas comparé leur qualité ni
leur vitesse : ne te fie pas à un classement que personne n'a mesuré.

### Les briques, une par une

**Couper et réordonner.** À partir du script validé, Claude découpe ta vidéo avec
FFmpeg et recolle les morceaux dans le nouvel ordre. L'original n'est jamais modifié.

**Les sous-titres mot à mot.** Grâce à l'heure de chaque mot donnée par la
transcription, chaque mot s'affiche quand tu le dis. Deux ou trois mots à la fois, le
mot clé en couleur, et jamais tout en bas : c'est là que TikTok et Instagram mettent
leurs boutons et ta légende.

**Le gros titre derrière la tête.** Il te faut ta silhouette détourée. Les options
accessibles :

- les éditeurs vidéo grand public proposent souvent un **détourage automatique**
  (« supprimer l'arrière-plan ») : regarde dans le tien, **à vérifier** selon l'outil
  et ton abonnement ;
- des **modèles gratuits** que Claude peut installer et lancer : **Robust Video
  Matting**, fait pour détourer des personnes en vidéo sans fond vert (licence
  GPL-3.0), ou **SAM 2** de Meta, qui découpe des objets dans les images et les
  vidéos ;
- moi, j'utilise la **détection de personne d'Apple**, intégrée aux Mac, appelée par
  un petit script.

C'est l'étape la plus lourde : sur une minute de vidéo, compte plusieurs minutes de
calcul.

**Les logos et les pastilles.** Uniquement les **logos officiels** (souvent dans
l'espace presse du site de la marque). Jamais un logo redessiné par une IA.

**Les captures réelles.** Des captures d'écran des vrais sites ou des vraies apps.
Claude peut les prendre lui-même avec Chrome sans interface. Jamais une fausse
interface.

**Les zooms.** On alterne le plan normal (100 %) et un plan rapproché (110 à 120 %),
avec un petit coup de zoom sur les mots forts et à chaque coupe : ça cache les raccords
et ça donne du rythme. Garde ta bouche au-dessus des sous-titres.

**La grille d'icônes.** Quand tu cites plusieurs choses (« 13 applications »), les
icônes apparaissent une par une, au rythme de ta voix.

<figure class="fiche-guide"><a href="/guides/motion-design-avant-apres-carte.jpg" target="_blank" rel="noopener"><img src="/guides/motion-design-avant-apres-carte.jpg" width="1100" height="640" alt="Trois images de la même seconde : l'image brute, la case du storyboard avec la carte 13 APPLIS et ses icônes, puis la vidéo finale avec la même carte" loading="lazy"></a><figcaption>Brut, storyboard, vidéo finale : la grille des 13 applis, avec leurs vraies icônes. Toutes ces images viennent de ma vraie vidéo</figcaption></figure>

> **À retenir.** Ta vidéo reste dessous, intacte ; le motion design s'empile
> par-dessus. HyperFrames pour commencer. Le titre derrière la tête demande un
> détourage, le reste est du texte et des images bien placés.

## 6. Bien utiliser les références

### Où les trouver

Une **référence**, c'est une vidéo dont tu aimes la façon d'être montée. Cherche des
**créateurs qui parlent face caméra** avec du motion design, sur TikTok, Instagram
Reels ou YouTube Shorts. Enregistre celles dont le **rythme** te plaît dans une
collection.

Tes propres vidéos marchent aussi très bien. Une vidéo que tu as déjà faite et qui a
bien marché est une référence parfaite : c'est déjà ton style.

Une bonne référence, c'est comme une recette : tu gardes la méthode, pas les
ingrédients du voisin.

### La décrire à Opus

Claude ne regarde pas la vidéo à ta place. Décris-la avec des mots et des secondes :

- **Rythme** : « un nouvel élément toutes les 2 secondes environ ».
- **Sous-titres** : « deux ou trois mots à la fois, le mot clé en couleur ».
- **Éléments** : « le gros titre derrière la tête reste 2 secondes, puis la capture
  arrive par le haut ».
- **Zooms** : « plan normal, puis zoom rapide sur le mot fort ».

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-reference-mobile.svg" width="400" height="804"><img src="/guides/motion-design-reference.svg" alt="Une référence face caméra découpée en quatre plans sur une ligne de temps de 0 à 8 secondes (gros titre derrière la tête, zoom avec sous-titres, capture, grille d'icônes), avec les quatre choses à regarder : le rythme, les sous-titres, les éléments et les zooms, puis les quatre phrases à écrire à Opus pour les décrire." width="880" height="560" loading="lazy"></picture></figure>

### Lui montrer quelques images

Si tu as le fichier (ta propre vidéo, par exemple), extrais-en une image par seconde
avec FFmpeg et donne-les à Claude :

```bash
ffmpeg -i ma-reference.mp4 -vf fps=1 ref_%03d.png
```

Glisse-les dans Claude Code en disant ce qu'il doit regarder (« regarde la taille des
sous-titres par rapport à l'écran »). Pour la vidéo d'un autre créateur, ne la
télécharge pas : regarde-la, note les secondes, et fais au besoin deux ou trois
captures d'écran pour toi, sans jamais les publier.

### Mélanger plusieurs références

Prends **une chose précise** par référence : le rythme de l'une, les sous-titres de
l'autre, les zooms de la troisième. Écris-le clairement dans le prompt. Si tu dis
juste « comme ces trois vidéos », Claude fera une moyenne fade.

### La règle d'éthique

On reprend la **mécanique** (rythme, place des sous-titres, façon de zoomer). Jamais
le **contenu**, les **visuels**, la **marque** ou les **formulations** d'un autre
créateur. Et pour un produit, uniquement de vraies captures.

> **À retenir.** Une référence, une qualité précise, décrite en mots et en secondes. On
> copie la mécanique, jamais le contenu.

## 7. Le parcours de A à Z

### Le prompt modèle

Copie, remplis les crochets, colle dans Claude Code (en mode plan), une fois ton
script validé à l'étape 3.

<figure class="fiche-guide"><picture><source media="(max-width: 560px)" srcset="/guides/motion-design-prompt-mobile.svg" width="400" height="698"><img src="/guides/motion-design-prompt.svg" alt="Les neuf blocs du prompt modèle avec un exemple pour chacun : objectif, ma vidéo, style, sous-titres, éléments, zooms, références, contraintes, et méthode, la ligne qui demande le storyboard avant de construire." width="880" height="532" loading="lazy"></picture></figure>

```text
Utilise /hyperframes:hyperframes pour ajouter du motion design sur ma vidéo
face caméra.

OBJECTIF : [ce que la vidéo doit faire comprendre, en une phrase]

MA VIDÉO : [./brut.mov], déjà coupée et réordonnée selon [./script.md] (validé).
Ne change pas l'ordre ni le texte.

FORMAT : 1080x1920, 30 images par seconde, durée de la vidéo coupée.

STYLE :
- Couleurs : [texte #..., accent #...]
- Police : [nom de la police des titres et des sous-titres]

SOUS-TITRES : mot à mot, [2 à 3] mots à la fois, mot clé en [couleur],
au-dessus de la zone des boutons.

ÉLÉMENTS (dans [./assets]) :
- Gros titres : [« TEXTE » au bloc X, derrière la tête si possible]
- Logos officiels : [fichiers], à chaque outil cité
- Captures réelles : [fichiers ou sites à capturer]
- Grille : [oui / non, au bloc X]

ZOOMS : 100 % puis [115] % sur les mots forts et à chaque coupe.

RÉFÉRENCES :
- [lien 1] : je retiens [le rythme / les sous-titres / les zooms]
Ne reprends ni leurs visuels, ni leurs textes : seulement la mécanique.

CONTRAINTES :
- Aucune fausse interface : uniquement mes captures réelles.
- Aucun chiffre ni résultat inventé, aucun mot ajouté à ce que j'ai dit.
- Pas de musique.

MÉTHODE : Avant de construire, donne-moi le script ordonné et un storyboard avec
tous les éléments, attends mon OK. Ensuite construis, fais un aperçu léger, et je te
dirai quoi changer, un changement à la fois.
```

### Exemple 1 : une actu, comme ma vidéo Artcraft

```text
Utilise /hyperframes:hyperframes. Objectif : réagir à la sortie d'Artcraft, qui a
refait les outils d'Adobe. Ma vidéo : ./brut.mov, coupée selon ./script.md (validé).
1080x1920, 30 i/s. Accent violet #7A4FBF, police Inter Tight, sous-titres blancs mot
à mot, mot clé en violet. Gros titres : « TEMPS RECORD » au bloc 3 et « LE SaaS
EST-IL MORT ? » au bloc 8, derrière ma tête. Pastilles Claude et Adobe avec les logos
officiels de ./assets. Capture réelle du site d'Artcraft au bloc 2. Grille des 13
applis avec leurs vraies icônes au bloc 4. Zooms 100 % / 115 % sur les mots forts.
Pas de musique, aucun chiffre ajouté.
Avant de construire, donne-moi le script ordonné et un storyboard avec tous les
éléments, attends mon OK.
```

### Exemple 2 : une astuce sur ton app

```text
Utilise /hyperframes:hyperframes. Objectif : montrer une astuce de mon app en 45 s.
Ma vidéo : ./face-camera.mov, coupée selon ./script.md (validé). 1080x1920, 30 i/s.
Accent #7CF3C0, police Inter Bold. Sous-titres mot à mot. Au bloc 3, mon vrai
enregistrement d'écran ./assets/demo.mp4 dans un cadre de téléphone en haut de
l'image, pendant que je parle en bas. Logo de l'app à la fin avec « Dis-le en
commentaire ». Aucune fausse interface, aucun chiffre.
Avant de construire, donne-moi le script ordonné et un storyboard avec tous les
éléments, attends mon OK.
```

### Les étapes

1. **Installe** ce qu'il faut (voir plus bas), puis HyperFrames dans Claude Code.
2. **Filme** ta vidéo (section 2) et mets-la dans un dossier avec tes logos et
   captures.
3. **Lance Claude Code** dans ce dossier : `/model` sur Opus 5.5, `/effort xhigh`,
   mode plan (`Shift+Tab`).
4. **Fais transcrire et réordonner** (section 3). Relis le script, corrige, valide.
5. **Colle le prompt modèle** rempli.
6. **Relis le storyboard.** Fais tes retours, bloc par bloc, puis dis « OK ».
7. **Regarde l'aperçu** sur ton téléphone.
8. **Retouche** en `/effort high`, **un changement à la fois**.
9. **Rends le MP4** et regarde-le en entier une dernière fois, avec le son.

### Les erreurs classiques

| Problème | Correction |
|---|---|
| La vidéo est confuse, l'idée forte arrive tard | Tu as sauté le réordonnancement. Reviens au script (section 3). |
| Une phrase des sous-titres n'a jamais été dite | Demande de remettre tes mots exacts : rien d'inventé. |
| Le titre est coupé ou collé au haut de l'image | Tu as filmé trop serré. Laisse de l'espace au-dessus de ta tête la prochaine fois ; en attendant, demande un dézoom sur ce bloc. |
| Les couleurs sont délavées ou trop vives | Ta vidéo est en HDR. Désactive la Vidéo HDR au tournage, ou demande une conversion en SDR (couleurs standard) propre. |
| Les sous-titres sont cachés par les boutons | Demande de les remonter au-dessus de la zone des boutons. |
| Dix retouches dans un seul message, la moitié est ratée | Un changement par message. |
| « Plus dynamique » ne change rien | Dis-le en chiffres : « un nouvel élément toutes les 2 s ». |
| Claude invente une interface d'app | Rappelle la règle, donne tes vraies captures, demande de supprimer la fausse. |
| Le Mac rame ou plante pendant le rendu | Un seul rendu à la fois, travaille sur le proxy, ferme le reste. |

### Quoi installer sur ton ordinateur

- **Node.js** : le moteur qui fait tourner les outils JavaScript. Sur nodejs.org,
  version 22 ou plus. Vérifie avec `node -v`.
- **FFmpeg** : l'outil qui coupe, assemble et convertit les vidéos. Sur Mac, avec
  Homebrew : `brew install ffmpeg`. Vérifie avec `ffmpeg -version`.
- **La transcription** : Python et Whisper (`pip install -U openai-whisper`), ou le
  paquet Whisper.cpp de Remotion si tu pars sur Remotion.
- **Chrome sans interface** : Remotion le télécharge tout seul. Pour HyperFrames,
  laisse Claude vérifier ce qu'il faut à la première installation (**à vérifier**
  selon la version).
- **Claude Code**, avec un abonnement qui donne accès à Opus 5.5.

**Espace disque.** Une minute filmée en 1080p pèse déjà des dizaines de Mo, et le
rendu crée des images temporaires. Ajoute le modèle de transcription et les outils.
Garde **au moins 10 Go libres** pour être tranquille (ordre de grandeur, **à
vérifier** sur ta machine).

**Sur un Mac 8 Go.** Ça marche, mais rendre une vidéo en 1080x1920 prend du temps et
beaucoup de mémoire, et le détourage encore plus. Ferme les autres applications, fais
un seul rendu à la fois, juge le rythme sur le proxy. Après chaque rendu, vérifie dans
le Moniteur d'activité qu'aucun Chrome sans interface ou FFmpeg ne tourne encore : il
m'est arrivé d'en retrouver qui occupaient des dizaines de Go de mémoire.

> **À retenir.** Filme, fais transcrire et réordonner, valide le script puis le
> storyboard, et seulement là, fais construire. Un changement à la fois, un rendu à la
> fois.

## Checklist finale

- [ ] Filmé en vertical, 1080p, 30 i/s, Vidéo HDR désactivée, espace au-dessus de la tête
- [ ] Opus 5.5 sélectionné, effort `xhigh` pour le script et le storyboard, mode plan
- [ ] Transcription faite, script **réordonné** (hook en ouverture, aucune répétition)
- [ ] Texte final = ce que tu as dit, aucun mot inventé, rien d'invérifiable
- [ ] Storyboard reçu **avant** toute construction, validé par un « OK » explicite
- [ ] Sous-titres lisibles, au-dessus de la zone des boutons
- [ ] Logos officiels et captures réelles uniquement : aucune fausse interface
- [ ] Aucun faux chiffre, aucun résultat inventé
- [ ] Références : mécanique reprise, jamais le contenu d'un autre
- [ ] Retouches en `high`, un changement à la fois
- [ ] MP4 final regardé en entier sur téléphone, avec le son
- [ ] Label IA activé à la publication **seulement si** un élément généré par IA est montré (image, voix ou personnage IA)

## Sources

- [Claude Code : configuration du modèle et de l'effort](https://code.claude.com/docs/en/model-config)
- [Claude Code : mode plan](https://code.claude.com/docs/en/common-workflows)
- [Whisper (OpenAI) sur GitHub](https://github.com/openai/whisper)
- [HyperFrames sur GitHub](https://github.com/heygen-com/hyperframes)
- [HyperFrames : démarrage rapide](https://hyperframes.heygen.com/quickstart)
- [HyperFrames : sous-titres et habillage d'une vidéo existante](https://hyperframes.heygen.com/guides/captions-and-recuts)
- [Remotion : créer un projet](https://www.remotion.dev/docs/)
- [Remotion avec Claude Code](https://www.remotion.dev/docs/ai/claude-code)
- [Remotion : OffthreadVideo](https://www.remotion.dev/docs/offthreadvideo)
- [Remotion : install-whisper-cpp](https://www.remotion.dev/docs/install-whisper-cpp/)
- [Licence Remotion](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)
- [GSAP devient gratuit (Webflow)](https://webflow.com/blog/gsap-becomes-free)
- [Robust Video Matting sur GitHub](https://github.com/PeterL1n/RobustVideoMatting)
- [SAM 2 (Meta) sur GitHub](https://github.com/facebookresearch/sam2)
- [Apple Vision : détection de personne](https://developer.apple.com/documentation/vision/vngeneratepersonsegmentationrequest)
