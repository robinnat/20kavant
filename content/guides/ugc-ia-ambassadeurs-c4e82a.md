---
title: Faire de l'UGC avec l'IA pour son app
description: La méthode complète, avec les prompts, qui a amené les 222 premiers dollars de Flash sans filmer une seule vidéo.
date: 2026-09-14
---

Quand tu sors une app, tu as un problème simple : personne ne sait qu'elle existe.
La publicité payante coûte cher et s'arrête dès que tu coupes le budget. L'UGC, lui,
continue de tourner.

**UGC** veut dire *user-generated content* : des vidéos qui ont l'air d'être filmées
par un utilisateur normal, dans son salon, avec son téléphone. Pas une pub léchée.
C'est précisément ce qui les rend efficaces : les gens ont appris à ignorer les
publicités, pas les recommandations.

Ce guide donne la méthode exacte que j'ai utilisée pour **Flash**, prompts compris.

## Le résultat

Les chiffres réels de Flash, tels qu'ils sortent de RevenueCat :

| Période | Revenus | Achats |
| --- | --- | --- |
| Juillet 2026 | 0 $ | 0 |
| Août 2026 | 74 $ | 6 |
| Septembre 2026 (2 premières semaines) | 148 $ | 6 |
| **Total** | **222 $** | **12** |

Le chiffre intéressant n'est pas le total, c'est la pente : **septembre a fait le
double d'août en deux fois moins de temps**. Sur les 28 derniers jours, 19 nouveaux
utilisateurs. Ce sont des achats ponctuels, pas des abonnements.

222 $, ça ne paie pas un loyer. Mais ça valide une mécanique qui n'a coûté **aucun
budget publicitaire** et **aucun tournage**, et qui se répète.

## Le vrai sujet : les ambassadeurs

La question n'est pas « comment je fais une vidéo ». C'est **« qui parle de mon
app »**. Une app sans visage ne se partage pas.

Il te faut donc des ambassadeurs, et tu as trois options.

**Faire appel à de vrais créateurs.** Le plus crédible, et le plus cher. Compte 50 à
300 € la vidéo, sans garantie qu'elle performe. Difficile à tenir quand tu testes
encore ton positionnement.

**Te filmer toi-même.** Gratuit, authentique, et beaucoup de gens s'arrêtent là parce
qu'ils n'ont pas envie de se montrer. C'est aussi un goulot d'étranglement : tu ne
peux pas sortir dix vidéos par semaine.

**Créer des ambassadeurs avec l'IA.** C'est ce que j'ai fait. Un personnage cohérent,
qu'on décline à l'infini, sans jamais allumer une caméra.

> **Le pitch tient en une phrase :** un avatar plus une garde-robe donnent une
> infinité de contenus UGC, avec la même personne, sans jamais retourner filmer.

C'est ce qui change tout, parce que **l'UGC est un jeu de volume**. Sur dix vidéos,
huit ne feront rien, une fera un peu, une décollera. Si chaque vidéo te coûte 200 €
et deux jours, tu ne peux pas jouer à ce jeu. Si elle te coûte quelques centimes et
dix minutes, tu peux.

## Ce qui fait vraiment la viralité

Avant les outils, comprends ça, sinon tu vas produire cent vidéos que personne ne
regarde.

**Tout se joue dans les trois premières secondes.** L'algorithme, que ce soit TikTok
ou Instagram, mesure d'abord si les gens restent. Si ta vidéo perd la moitié de son
audience en deux secondes, elle est morte, quelle que soit la qualité de la suite.

Ce qui retient, dans l'ordre :

1. **Une accroche qui crée une tension.** « J'ai perdu 3 h par semaine à faire ça à la
   main » marche mieux que « Découvrez mon app ». Tu parles d'un problème, pas d'un
   produit.
2. **Un visage dès la première image.** Un écran d'app en ouverture, c'est une pub.
   Un visage, c'est quelqu'un qui te parle.
3. **De l'émotion.** C'est là que l'IA vidéo sert vraiment : une réaction, un rire,
   des larmes. Un visage inexpressif ne retient personne.
4. **Le produit tard.** L'app arrive au milieu, comme une solution, pas comme un
   sponsor.

L'objectif d'une vidéo UGC n'est pas de convaincre. C'est de **faire rester**. La
conversion, c'est le travail de ta fiche App Store.

## La chaîne de production

![Les sept étapes : photo de profil, fiche 3x3, base raw, outfit, image UGC, vidéo, montage](/guides/ugc-ia-pipeline.svg)

Sept étapes, mais **les trois premières ne se font qu'une fois**. Ensuite, chaque
vidéo ne coûte que les quatre dernières.

Je fais tourner tout ça via l'**API de fal.ai**, depuis mon agent. Les prompts
ci-dessous sont ceux que j'utilise réellement, à copier tels quels : tu ne changes
que ce qui est entre crochets.

### Étape 1 : la photo de profil

Une seule image frontale du visage, nette, éclairage neutre. C'est ton point de
départ : toute l'identité en découle. Tu peux la générer, ou partir d'une image
existante dont tu as le droit d'usage.

### Étape 2 : la fiche de personnage (3×3)

C'est le cœur de la méthode, et l'étape que tout le monde saute. Sans elle, ton
personnage change de visage à chaque génération et l'illusion tombe.

Tu génères une planche de **9 vues du même visage**, en passant la photo de profil en
image de référence (`reference_image_urls`) pour verrouiller l'identité.

Le prompt ne change jamais, seuls les blocs entre crochets bougent :

```
A 3x3 grid reference sheet of the SAME [woman/man] in all 9 panels
(identical face, same hairstyle, same outfit as the reference image),
neutral light gray studio background, photorealistic, perfectly
consistent identity.

Row 1 (head and shoulders): FRONT, LEFT PROFILE, RIGHT PROFILE.
Row 2 (head and shoulders): THREE-QUARTER LEFT, THREE-QUARTER RIGHT, BACK view.
Row 3 (wider framing): FRONT full bust from the waist up, THREE-QUARTER
full bust from the waist up, and a close-up of [his/her] LEFT HAND with
[a gold wedding band / a diamond engagement ring and gold wedding band]
on the ring finger.

Small text labels in each panel corner. Neutral color grading, cool
balanced daylight white balance (5500K), accurate skin tones.
```

Deux détails qui comptent : la **balance des blancs fixée à 5500K** et le **color
grading neutre**. C'est ce qui fait que toutes tes générations suivantes auront la
même carnation, au lieu de dériver vers le jaune ou le bleu d'une image à l'autre.

> **Le test qui ne trompe pas :** mets trois générations côte à côte. Si un inconnu
> peut dire « c'est la même personne », ta fiche est bonne. Sinon, reprends-la avant
> d'aller plus loin. Tout le reste en dépend.

### Étape 3 : la base raw (optionnelle mais rentable)

Si tu comptes réutiliser le même avatar sur plusieurs niches, fais une planche plus
complète : **15 panneaux en 5×3**, soit 6 visages, 3 corps entiers, un panneau
mains/pieds/cou et 3 expressions.

Deux réglages importants ici :

- une **tenue neutre** (débardeur gris, short gris), justement pour pouvoir
  l'habiller ensuite sans que l'ancien vêtement transparaisse ;
- **`NO TEXT, no labels`** : contrairement à la fiche 3×3, pas d'étiquettes, sinon
  elles se retrouvent dans les images dérivées.

C'est ton corps neutre réutilisable. Tu le fais une fois, il sert pour tout.

### Étape 4 : habiller l'avatar

Tu repars de la base raw (ou de la fiche) en **image vers image** : la base passe en
`image_url`, et tu reprends **le prompt de l'étape précédente tel quel**, en ajoutant
seulement le bloc tenue :

```
[le prompt de la fiche/base TEL QUEL]

... wearing an elegant white wedding dress with a diamond engagement
ring and gold wedding band on the ring finger, identical skin tone and
color grading across all panels.
```

**Les trois règles qui évitent 90 % des ratés :**

1. **Liste tous les accessoires**, sans exception : bagues, boucles d'oreilles,
   chaussures, montre. Ce que tu ne nommes pas, le modèle l'invente, et il l'invente
   différemment à chaque génération.
2. **Sois explicite sur les quantités** : `exactly two rings`, `NO rings on any other
   finger`. Les modèles ajoutent spontanément des bijoux.
3. **Vérifie la main.** Gauche et droite s'inversent très facilement. Repasse l'image
   dans un modèle de vision pour confirmer avant de valider la série.

Répète l'opération pour chaque tenue : intérieur, sport, travail, pyjama. Dix vidéos
avec le même pull, c'est visiblement la même séance. Des tenues différentes donnent
l'illusion de **jours différents**, donc d'une vraie personne qui poste régulièrement.

### Étape 5 : l'image UGC

Tu fabriques maintenant l'image qui servira de première frame à la vidéo : une image
qui a l'air prise au téléphone.

Ce qui distingue une image UGC d'une belle image :

- **cadrage selfie**, bras tendu, légèrement en contre-plongée
- **lumière du quotidien** : lumière de fenêtre, lampe de salon. Surtout pas un
  éclairage de studio
- **un décor vivant** : une cuisine avec des choses qui traînent, un canapé. Un
  intérieur trop rangé fait faux
- **une légère imperfection** : cadrage pas parfaitement centré, un peu de grain

Le réflexe à combattre : tu vas vouloir une belle image. Une belle image ne convertit
pas, parce qu'elle ressemble à une publicité.

### Étape 6 : la vidéo

Modèle **`minimax/h3/reference-to-video`**, avec la fiche outfit passée en
`reference_image_urls`, et un prompt qui anime **l'expression** plutôt que l'action :

```
Image 1: this woman crying happy tears of joy. She lifts her hand to
her face and wipes a tear, then lowers it. She blinks softly, takes a
deep breath, then breaks into a tearful smile. Natural head movements,
candid handheld footage, documentary style. Keep the exact same identity
and scene as Image 1.
```

Les réglages :

```
duration = 5
aspect_ratio = "9:16"
resolution = "768P"
```

Trois principes :

- **Anime une émotion, pas une action.** Un enchaînement d'expressions (cligner,
  respirer, sourire) tient beaucoup mieux qu'un geste complexe, sur lequel les
  modèles cassent.
- **`Keep the exact same identity and scene as Image 1`** : cette phrase n'est pas
  décorative, c'est elle qui empêche la dérive du visage.
- **Génère plusieurs fois.** Le même prompt ne donne pas le même résultat. Prends la
  meilleure prise sur trois ou quatre, exactement comme un vrai tournage.

### Étape 7 : le montage

La vidéo brute ne suffit pas. Il reste :

- **le hook** : le texte d'accroche en surimpression dès la première frame
- **la démo** : quelques secondes de l'app, au milieu
- **le CTA** : quoi faire maintenant
- **une voix** ou un son. Une voix off, même synthétique, retient mieux qu'une vidéo
  muette
- **la mention « contenu généré par IA »**, qui n'est pas optionnelle (voir plus bas)

Puis tu publies sur **TikTok et Instagram**, les deux plateformes où ce format
fonctionne le mieux.

## Les outils

J'appelle tout par l'**API de fal.ai**, orchestrée depuis mon agent, ce qui me permet
d'enchaîner les sept étapes sans repasser manuellement d'un outil à l'autre. Les
paramètres cités plus haut (`reference_image_urls`, `image_url`, `duration`,
`aspect_ratio`, `resolution`) sont ceux de cette API.

Tu n'as pas besoin d'automatiser pour commencer. Les mêmes prompts fonctionnent à la
main, dans l'interface web des modèles. Automatise quand tu sauras ce qui marche :
automatiser une mécanique qui ne convertit pas, c'est produire du déchet plus vite.

## Obligatoire : signaler que c'est de l'IA

Ce n'est pas un conseil de prudence, c'est la règle.

**TikTok et Instagram** imposent d'étiqueter les contenus générés par IA qui montrent
des personnes ou des scènes d'apparence réaliste. Les deux plateformes détectent
aussi ces contenus automatiquement via les métadonnées C2PA, même sans déclaration.
Si tu ne le fais pas toi-même, tu risques la réduction de portée ou la suppression.

**En Europe, c'est en plus une obligation légale.** L'article 50 de l'AI Act
s'applique depuis le **2 août 2026** : toute personne qui diffuse un contenu
artificiel réaliste dans un cadre professionnel doit l'indiquer clairement.

Concrètement : coche le paramètre « contenu généré par IA » au moment de publier, et
garde une mention visible. Ça ne casse pas la performance. Les gens acceptent très
bien un personnage IA quand on ne cherche pas à leur faire croire le contraire.

## Les erreurs qui coûtent du temps

**Bâcler la fiche de personnage.** Si ton avatar n'est pas stable, aucune quantité de
vidéos ne rattrapera ça. C'est l'étape qui mérite deux heures.

**Oublier de nommer les accessoires.** Les mains et les bijoux sont là où les modèles
dérapent le plus, et c'est le premier détail qui trahit une image générée.

**Faire une vidéo par semaine.** C'est un jeu de volume. Une vidéo qui décolle sur
dix, c'est normal ; avec une seule vidéo, tu n'as pas d'échantillon.

**Soigner l'image.** Trop belle veut dire trop pro, trop pro veut dire publicité, et
la publicité se scrolle.

**Montrer l'app en premier.** Le problème d'abord, la solution ensuite.

**Croire que la vidéo convertit.** La vidéo amène sur ta fiche App Store. Si l'icône,
le sous-titre et les deux premières captures ne convainquent pas, tu paies en temps
ce que tu ne paies pas en budget.

## Sources

- Chiffres de Flash : RevenueCat, relevés le 14 septembre 2026
- [TikTok · règles de divulgation des contenus IA](https://www.tiktok.com/creators/creator-portal/)
- [Meta · étiquetage des contenus générés par IA](https://transparency.meta.com/)
- [AI Act européen, article 50 · obligations de transparence](https://artificialintelligenceact.eu/article/50/)
- [fal.ai · MiniMax H3, référence vers vidéo](https://fal.ai/models/fal-ai/minimax/h3/reference-to-video)
