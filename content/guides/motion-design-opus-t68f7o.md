---
title: Comment faire du motion design avec Opus 5.5
description: Le bon réglage, le bon outil, un prompt modèle et la méthode storyboard d'abord, pour créer des vidéos animées avec Claude Code sans savoir monter ni coder.
date: 2026-10-15
---

Le **motion design**, c'est du texte, des formes et des images qui bougent : un titre
qui arrive, un logo qui se pose, une capture d'écran qui zoome. C'est ce qu'on voit
dans les vidéos de lancement de produits.

Bonne nouvelle : tu n'as plus besoin d'After Effects pour en faire. Avec **Claude
Code** et le modèle **Opus 5.5**, tu décris la vidéo avec des mots, Claude écrit le
code de l'animation, et un outil le transforme en fichier MP4.

Ce guide te donne : le bon réglage, le bon outil, la méthode (storyboard d'abord), un
prompt à copier, et comment te servir de références.

> **Note.** Une vidéo faite en code, c'est un peu comme une page web qu'on filme image
> par image. Claude écrit la page, l'outil la « filme ». Toi, tu juges le résultat.

## 1. Le modèle et le réglage

### Se mettre sur Opus 5.5

Dans Claude Code, tape `/model` puis choisis **Opus 5.5** dans la liste. Avec
`Entrée`, le choix devient ton modèle par défaut. Avec `s`, il ne vaut que pour la
session en cours.

### Régler l'effort

L'**effort**, c'est le temps de réflexion que Claude s'accorde avant de répondre. Plus
il réfléchit, plus le travail est soigné, mais plus ça consomme de ton quota (ta part
d'utilisation incluse dans ton abonnement) et plus c'est long.

Tape `/effort` pour ouvrir le curseur, ou directement `/effort high`. Il y a cinq
niveaux sur Opus 5.5 : `low`, `medium`, `high`, `xhigh`, `max`. Par défaut, Opus 5.5
est sur `medium`.

Mon conseil d'usage pour le motion design (c'est une habitude de travail, **pas un
résultat mesuré**) :

| Moment | Niveau | Pourquoi |
|---|---|---|
| Storyboard et création initiale | `xhigh` | Le premier jet fixe la structure. Mieux vaut qu'il soit bien pensé. |
| Retouches (« décale ce titre ») | `high` | Petit changement précis, pas besoin de réfléchir des heures. |
| Premier jet très ambitieux | `max` | Rarement. Ça coûte cher et peut « trop réfléchir ». |

À savoir : la doc d'Anthropic prévient que `max` peut avoir des **rendements
décroissants** (on paie plus pour un gain de plus en plus petit). Et `max` ne vaut que
pour la session en cours : il ne se garde pas d'une fois sur l'autre.

### Le mode plan

Le **mode plan**, c'est un mode où Claude réfléchit et propose, mais ne touche à aucun
fichier tant que tu n'as pas dit oui. Appuie sur `Shift+Tab` jusqu'à voir
`plan mode on` en bas de l'écran. C'est parfait pour l'étape storyboard qu'on voit
juste après.

> **À retenir.** Opus 5.5, `xhigh` pour créer, `high` pour retoucher, `max` presque
> jamais. Et commence en mode plan.

## 2. Le storyboard avant la vidéo

C'est **la** règle de ce guide : on ne génère jamais la vidéo d'un coup.

Un **storyboard**, c'est la vidéo dessinée en cases, comme une BD : une case par
moment, avec ce qu'on voit et ce qui bouge. Le **script**, c'est le texte exact de
chaque bloc, dans l'ordre, avec ses minutages.

Pense à un architecte. Il montre d'abord le plan de la maison. Déplacer un mur sur le
plan, ça prend une minute. Déplacer un mur une fois la maison construite, c'est une
autre histoire. Pour la vidéo, c'est pareil.

### Les 4 étapes

**Étape 1 : Opus propose.** Il te donne le script ordonné (texte exact de chaque bloc,
début et fin en secondes) **et** un storyboard visuel avec tous les éléments de motion
design prévus : titres, logos, captures, transitions, zooms. Le mieux : des images
réelles (une par bloc, au format téléphone) avec les éléments dessinés dessus, pour
que tu juges sur ton écran de téléphone, là où la vidéo sera vue.

**Étape 2 : tu fais tes retours.** Tu modifies le script ou le storyboard. C'est rapide
et ça consomme peu de quota, contrairement à refaire une vidéo entière. Exemple de
retour :

```text
Bloc 3 : remplace le titre par « Ton budget en 10 secondes », enlève la pastille
verte, et fais entrer la capture par le bas au lieu d'un fondu.
```

**Étape 3 : tu valides explicitement.** Tu écris « OK ». Seulement alors, Claude
construit la vidéo.

**Étape 4 : tu prévisualises, puis tu retouches un changement à la fois.**

### Ce que tu y gagnes

- Du **quota** et du **temps** : corriger un texte coûte bien moins que recalculer une
  animation.
- Une vidéo **conforme du premier coup**, parce que tout a été décidé avant.
- Tu évites de jeter une vidéo ratée et de tout recommencer.

La phrase à mettre dans tous tes prompts :

```text
Avant de construire, donne-moi le script ordonné et un storyboard avec tous les
éléments, attends mon OK.
```

> **À retenir.** Script et storyboard d'abord, ton « OK » ensuite, la vidéo en dernier.
> Corriger un dessin coûte moins cher que corriger une vidéo.

## 3. Quel outil choisir

Les trois options font la même chose au fond : une page web animée, filmée image par
image par un **Chrome sans interface** (un navigateur qui tourne en coulisses, sans
fenêtre), puis assemblée en MP4 par **FFmpeg** (un outil gratuit qui fabrique et
convertit les vidéos).

### HyperFrames

Framework open source de **HeyGen**, sous licence **Apache 2.0** (gratuit, y compris
pour un usage commercial). On écrit une page HTML, il la rend en MP4. Il a été pensé
**pour les agents** comme Claude. Il demande **Node 22 ou plus** et **FFmpeg**. Les
animations utilisent notamment **GSAP**.

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

### Remotion

Si quelqu'un t'a parlé de « Yari Motion », c'est très probablement **Remotion** : un
framework pour faire des vidéos avec **React** (une façon d'écrire des interfaces en
JavaScript, par petits blocs réutilisables). C'est l'outil historique du domaine, très
complet, avec lui aussi des skills pour agents.

D'après la doc officielle :

```bash
npx create-video@latest --yes --blank mon-video
cd mon-video
npx remotion skills add
npm run dev
```

Puis ouvre un second terminal dans `mon-video` et lance `claude`. Le site donne aussi
`npx skills add remotion-dev/skills` pour ajouter les skills. Le rendu final se fait
avec `npx remotion render`.

Prérequis indiqués : Node 16 ou plus, et sur Mac, **macOS 15 (Sequoia) ou plus**.
Remotion télécharge lui-même un Chrome sans interface dans le projet.

**Attention à la licence.** Remotion est gratuit pour les particuliers, les entreprises
à but lucratif de **3 employés maximum** et les associations. Au-delà, il faut une
**licence entreprise payante** (tarifs sur remotion.pro). La doc précise que la licence
va légèrement changer avec Remotion 5.0 : relis-la au moment de démarrer.

### HTML / CSS / JavaScript « maison »

Tu peux aussi te passer de framework : Claude écrit une page web animée avec une
bibliothèque comme **GSAP** (une boîte à outils d'animation, gratuite pour tous depuis
2025, plugins compris), puis un petit script ouvre Chrome sans interface, capture
chaque image, et FFmpeg assemble le tout.

C'est l'approche de mon moteur de vidéos animées. Avantage : tu contrôles tout, rien
n'est imposé. Inconvénient : il faut construire et entretenir ce « tuyau » toi-même.

### Le tableau

| | HyperFrames | Remotion | Maison (HTML + GSAP) |
|---|---|---|---|
| Ce que Claude écrit | Du HTML | Du React | Du HTML + un script de capture |
| Prix | Gratuit (Apache 2.0) | Gratuit jusqu'à 3 employés, payant au-delà | Gratuit (GSAP gratuit) |
| Ce que ça installe | Le paquet HyperFrames, sa CLI | Un projet React, Chrome sans interface | Ce que tu choisis |
| Prérequis | Node 22+, FFmpeg | Node 16+, macOS 15+ | Node, FFmpeg, Chrome |
| Niveau demandé | Débutant avec Claude | Débutant avec Claude, React aide | Intermédiaire |
| Fait pour les agents | Oui, c'est son but | Oui, skills officielles | À toi de le guider |
| Poids sur le disque | Quelques centaines de Mo, à vérifier | Quelques centaines de Mo, à vérifier | Variable |

Les deux premiers cas : comme tu ne lis pas le code, le niveau demandé, c'est surtout
savoir **décrire** et **juger**.

### Ma recommandation

**Commence avec HyperFrames.** Il est gratuit pour tout le monde sans condition de
taille, il est conçu pour qu'un agent l'utilise, et le HTML est le langage que les
modèles maîtrisent le mieux. Tu installes, tu décris, tu regardes.

Prends **Remotion** si tu travailles déjà en React ou dans une équipe qui l'utilise
(et vérifie alors la licence). Prends le **maison** seulement si tu as un besoin
précis qu'aucun des deux ne couvre.

Je n'ai pas comparé la qualité de rendu ni la vitesse des deux frameworks : ne te fie
pas à un classement que personne n'a mesuré.

> **À retenir.** HyperFrames par défaut : gratuit, pensé pour les agents, en HTML.
> Remotion si tu fais du React, avec sa licence en tête.

## 4. Le prompt modèle

Copie, remplis les crochets, colle dans Claude Code (en mode plan).

```text
Utilise /hyperframes:hyperframes pour créer une vidéo en motion design.

OBJECTIF : [ce que la vidéo doit faire comprendre ou faire faire, en une phrase]

FORMAT : [1080x1920], [30] images par seconde, [20] secondes.

STYLE ET IDENTITÉ :
- Couleurs : [fond #..., texte #..., accent #...]
- Polices : [nom de la police des titres, nom de la police du texte]
- Ton : [ex. énergique et net / calme et premium]

RÉFÉRENCES :
- [lien 1] : je retiens [le rythme : un plan toutes les X s / les transitions :
  glissement rapide / la typographie : gros titre, un mot à la fois / le cadrage]
- [lien 2] : je retiens [...]
Ne reprends ni leurs visuels, ni leurs textes, ni leur marque : seulement la mécanique.

SCÈNES :
- 0 à [3] s : [ce qu'on voit] / texte affiché : « [texte exact] »
- [3] à [8] s : [...] / texte affiché : « [...] »
- [...]

ÉLÉMENTS FOURNIS (dans le dossier [chemin]) :
- Logo : [fichier]
- Captures d'écran réelles de l'app : [fichiers]
- Voix : [fichier audio, ou « aucune »]

CONTRAINTES :
- Aucune fausse interface : uniquement mes captures réelles.
- Aucun chiffre ni résultat inventé.
- [Pas de musique.]
- Texte lisible sur téléphone, rien dans les 15 % du bas (zone des boutons).

LIVRABLE : un fichier MP4.

MÉTHODE : Avant de construire, donne-moi le script ordonné et un storyboard avec
tous les éléments, attends mon OK. Ensuite construis, lance la prévisualisation, et
je te dirai quoi changer, un changement à la fois.
```

### Exemple 1 : annonce d'une fonctionnalité

```text
Utilise /hyperframes:hyperframes. Objectif : annoncer le nouveau mode hors ligne de
mon app. Format 1080x1920, 30 i/s, 15 s. Fond #0F0F14, texte blanc, accent #7CF3C0,
police Inter Bold. Ton net et rapide.
Référence : [lien] : je retiens le rythme, un mot à la fois sur les 3 premières
secondes, puis glissement vers la capture.
Scènes : 0-3 s « Plus de réseau ? » / 3-10 s capture réelle mode-hors-ligne.png qui
zoome doucement, titre « Ça marche quand même » / 10-15 s logo + « Dispo
aujourd'hui ». Fichiers dans ./assets. Pas de musique, aucun chiffre.
Avant de construire, donne-moi le script ordonné et un storyboard avec tous les
éléments, attends mon OK.
```

### Exemple 2 : intro de chaîne

```text
Utilise /hyperframes:hyperframes. Objectif : intro de 5 s pour mes vidéos YouTube.
Format 1920x1080, 30 i/s. Fond blanc, texte noir, accent pastel #FFB8D9, police
Poppins ExtraBold. Ton joyeux.
Scènes : 0-2 s mon logo (./assets/logo.svg) rebondit au centre / 2-5 s « 20K avant »
s'écrit lettre par lettre puis tout sort par la droite. Pas de voix, pas de musique.
Avant de construire, donne-moi le script ordonné et un storyboard avec tous les
éléments, attends mon OK.
```

> **À retenir.** Plus tu es précis (minutages, texte exact, couleurs), moins tu
> retouches. La dernière phrase du prompt ne s'oublie jamais.

## 5. Bien utiliser les références

### Où les trouver : whatships.com

[What Ships](https://whatships.com) est un **annuaire indépendant de vidéos de
lancement** de produits partagées sur X : plus de 2 500 films, classés par catégories
(IA, outils pour développeurs, design, produits grand public, matériel…). Le site a
aussi des pages **Tools** et **Studios** pour trouver les outils et les studios
derrière ces films.

Chaque fiche renvoie vers le **post X d'origine**. Le site demande de citer l'original
et précise qu'il **n'est pas un site de téléchargement**.

### Choisir une référence

Prends une vidéo qui a **le même but** que la tienne (annonce, démo, intro), avec une
seule chose qui te plaît vraiment. Une bonne référence, c'est comme une recette : tu
gardes la méthode, pas les ingrédients du voisin.

Tes propres vidéos marchent aussi très bien. Une vidéo que tu as déjà faite et qui a
bien marché (par exemple ta vidéo Artcraft) est une référence parfaite : c'est déjà ton
style.

### La décrire à Opus

Claude ne regarde pas la vidéo à ta place. Décris-la avec des mots et des minutages :

- **Rythme** : « un nouveau plan toutes les 1,5 s, plus lent à la fin ».
- **Easing** (la façon dont un mouvement accélère et freine) : « arrivée rapide qui
  freine en douceur, pas d'effet rebond ».
- **Hiérarchie du texte** : « un gros mot-clé, une petite ligne dessous ».
- **Transitions** : « la capture glisse vers le haut, le titre suivant arrive par la
  gauche ».

### Lui montrer quelques images

Si tu as le fichier (ta propre vidéo, par exemple), tu peux en extraire quelques images
avec FFmpeg et les donner à Claude :

```bash
ffmpeg -i ma-reference.mp4 -vf fps=1 ref_%03d.png
```

Ça sort une image par seconde. Glisse-les dans Claude Code en disant ce qu'il doit y
regarder (« regarde la taille du titre par rapport à l'écran »).

### Mélanger plusieurs références

Prends **une chose précise** par référence : le rythme de l'une, les transitions de
l'autre, la typographie de la troisième. Écris-le clairement dans le prompt. Si tu dis
juste « comme ces trois vidéos », Claude fera une moyenne fade.

### La règle d'éthique

On reprend la **mécanique** (rythme, type de transition, construction d'un plan).
Jamais le **contenu**, les **visuels**, la **marque** ou les **formulations** d'un
autre. Et pour ton produit, uniquement de vraies captures de l'app.

> **À retenir.** Une référence, une qualité précise, décrite en mots et en secondes. On
> copie la mécanique, jamais le contenu.

## 6. Le parcours de A à Z

1. **Installe** Node 22+ et FFmpeg (voir plus bas), puis HyperFrames dans Claude Code.
2. **Crée un dossier** pour la vidéo avec tes fichiers : logo, captures réelles, voix.
3. **Lance Claude Code** dans ce dossier, `/model` sur Opus 5.5, `/effort xhigh`, mode
   plan (`Shift+Tab`).
4. **Colle ton prompt** rempli.
5. **Relis le script et le storyboard.** Fais tes retours, bloc par bloc.
6. **Dis « OK »** quand tout te va. Seulement là, Claude construit.
7. **Prévisualise** (`npx hyperframes preview`). Regarde sur ton téléphone si possible.
8. **Retouche** en `/effort high`, **un changement à la fois**.
9. **Rends le MP4** (`npx hyperframes render`) et regarde-le en entier une dernière
   fois.

## 7. Les erreurs classiques

| Problème | Correction |
|---|---|
| Tu as demandé la vidéo d'un coup, elle est à côté | Reviens au storyboard, corrige-le, revalide. |
| Dix retouches dans un seul message, la moitié est ratée | Un changement par message. |
| « Plus dynamique » ne change rien | Dis-le en chiffres : « chaque plan dure 1 s au lieu de 2 ». |
| Texte trop petit sur téléphone | Donne une taille : « titres à 120 px minimum ». |
| Claude invente une interface d'app | Rappelle la règle, donne tes vraies captures, demande de supprimer la fausse. |
| Le rendu échoue tout de suite | Vérifie `node -v` (22 ou plus) et `ffmpeg -version`. Colle l'erreur à Claude. |
| Le quota fond | Baisse l'effort pour les retouches, ne régénère pas tout pour un détail. |

## 8. Quoi installer sur ton ordinateur et ce que ça pèse

- **Node.js** : le moteur qui fait tourner les outils JavaScript. Télécharge-le sur
  nodejs.org (version 22 ou plus). Vérifie avec `node -v`.
- **FFmpeg** : l'outil qui fabrique la vidéo. Sur Mac, avec Homebrew :
  `brew install ffmpeg`. Vérifie avec `ffmpeg -version`.
- **Chrome sans interface** : Remotion le télécharge tout seul dans le projet. Pour
  HyperFrames, laisse Claude vérifier ce qu'il faut à la première installation (à
  vérifier selon la version).
- **Claude Code**, avec un abonnement qui donne accès à Opus 5.5.

Ordres de grandeur, **à vérifier** sur ta machine : quelques centaines de Mo pour Node
et FFmpeg ensemble, autant pour Chrome sans interface, et quelques centaines de Mo de
dépendances par projet. Pendant le rendu, des images temporaires prennent de la place.
Garde **au moins 5 Go libres** pour être tranquille.

## Checklist finale

- [ ] Opus 5.5 sélectionné, effort `xhigh` pour créer
- [ ] Mode plan activé
- [ ] Prompt rempli : objectif, format, style, références, scènes minutées, éléments, contraintes
- [ ] Script ordonné et storyboard reçus **avant** toute construction
- [ ] Retours faits, storyboard validé par un « OK » explicite
- [ ] Uniquement des captures réelles de l'app, aucun chiffre inventé
- [ ] Références : mécanique reprise, jamais le contenu d'un autre
- [ ] Retouches en `high`, un changement à la fois
- [ ] Aperçu regardé sur téléphone
- [ ] MP4 final vérifié en entier
- [ ] Si un visage ou une voix sont générés par IA : mention « AI-generated creator » et label IA activé à la publication

## Sources

- [Claude Code : configuration du modèle et de l'effort](https://code.claude.com/docs/en/model-config)
- [Claude Code : mode plan](https://code.claude.com/docs/en/common-workflows)
- [HyperFrames sur GitHub](https://github.com/heygen-com/hyperframes)
- [HyperFrames : démarrage rapide](https://hyperframes.heygen.com/quickstart)
- [Remotion : créer un projet](https://www.remotion.dev/docs/)
- [Remotion avec Claude Code](https://www.remotion.dev/docs/ai/claude-code)
- [Remotion : skills pour agents](https://www.remotion.dev/docs/ai/skills)
- [Remotion : Chrome Headless Shell](https://www.remotion.dev/docs/miscellaneous/chrome-headless-shell)
- [Licence Remotion](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)
- [GSAP devient gratuit (Webflow)](https://webflow.com/blog/gsap-becomes-free)
- [What Ships](https://whatships.com)
