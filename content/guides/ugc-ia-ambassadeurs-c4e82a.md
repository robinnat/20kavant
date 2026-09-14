---
title: Faire de l'UGC avec l'IA pour son app
description: La méthode qui a amené les 222 premiers dollars de Flash, sans filmer une seule vidéo.
date: 2026-09-14
---

Quand tu sors une app, tu as un problème simple : personne ne sait qu'elle existe.
La publicité payante coûte cher et s'arrête dès que tu coupes le budget. L'UGC, lui,
continue de tourner.

**UGC** veut dire *user-generated content* : des vidéos qui ont l'air d'être filmées
par un utilisateur normal, dans son salon, avec son téléphone. Pas une pub léchée.
C'est précisément ce qui les rend efficaces : les gens ont appris à ignorer les
publicités, pas les recommandations.

Ce guide explique la méthode exacte que j'ai utilisée pour **Flash**, et comment la
refaire pour ton app.

## Le résultat

Voilà les chiffres réels de Flash, tels qu'ils sortent de RevenueCat :

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
qu'on décline à l'infini, sans jamais allumer une caméra. Le coût par vidéo devient
quasi nul, et c'est ce qui change tout : **l'UGC est un jeu de volume**.

> Sur dix vidéos, huit ne feront rien, une fera un peu, une décollera. Si chaque
> vidéo te coûte 200 € et deux jours, tu ne peux pas jouer à ce jeu. Si elle te coûte
> quelques centimes et dix minutes, tu peux.

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
3. **Du mouvement.** Un plan fixe donne envie de scroller.
4. **Le produit tard.** L'app arrive au milieu, comme une solution, pas comme un
   sponsor.

L'objectif d'une vidéo UGC n'est pas de convaincre. C'est de **faire rester**. La
conversion, c'est le travail de ta fiche App Store.

## La méthode, étape par étape

![La chaîne de production : character sheet, outfits, image UGC, vidéo, publication](/guides/ugc-ia-pipeline.svg)

Le principe tient en une phrase : **on construit un personnage une bonne fois, puis
on le décline**. Les deux premières étapes sont un investissement unique ; ensuite
chaque vidéo ne coûte presque rien.

### Étape 1 : la character sheet

C'est le cœur de la méthode, et l'étape que tout le monde saute. Sans elle, ton
personnage change de visage à chaque génération et l'illusion tombe.

Une character sheet, c'est **deux choses combinées** :

**a) Une fiche écrite**, aussi précise que possible, que tu réutiliseras mot pour mot
dans chaque prompt. Décris :

- l'âge apparent et l'origine
- la forme du visage, la couleur et la forme des yeux, le nez, la bouche
- les cheveux : couleur exacte, longueur, texture, coiffure
- les signes distinctifs : grain de beauté, taches de rousseur, lunettes
- la morphologie et la posture
- le style vestimentaire général

Plus tu es précis, plus le personnage sera stable. « Une jeune femme brune » te
donnera une inconnue différente à chaque fois.

**b) Une planche de référence** : une image du même personnage sous plusieurs angles
(face, trois quarts, profil), avec une expression neutre et un fond uni. Tu la
génères une fois à partir de ta fiche écrite, tu la valides, et **tu la renvoies
ensuite en image de référence à chaque génération**.

C'est la combinaison des deux qui fait la cohérence : la fiche verrouille les mots,
la planche verrouille les traits.

> **Le test qui ne trompe pas :** génère trois images dans trois décors différents.
> Mets-les côte à côte. Si un inconnu peut dire « c'est la même personne », ta
> character sheet est bonne. Sinon, reprends-la avant d'aller plus loin. Tout le
> reste en dépend.

### Étape 2 : la garde-robe

Avec ta référence validée, génère le même personnage dans **différentes tenues** :
tenue d'intérieur, tenue de sport, tenue de travail, pyjama.

Pourquoi c'est important : dix vidéos avec le même pull, c'est visiblement la même
séance, et ça sent le contenu industriel. Des tenues différentes donnent l'illusion
de **jours différents**, donc d'une vraie personne qui poste régulièrement.

Garde chaque tenue dans un dossier. C'est ta banque d'assets.

### Étape 3 : l'image UGC

Maintenant, tu fabriques l'image qui servira de première frame à la vidéo. J'utilise
**GPT Image** pour cette étape.

Ce qui distingue une image UGC d'une belle image :

- **cadrage selfie**, bras tendu, légèrement en contre-plongée
- **lumière du quotidien** : lumière de fenêtre, lampe de salon. Surtout pas un
  éclairage de studio
- **un décor vivant** : une cuisine avec des choses qui traînent, un canapé. Un
  intérieur trop rangé fait faux
- **une légère imperfection** : cadrage pas parfaitement centré, un peu de grain

Le réflexe à combattre : tu vas vouloir une belle image. Une belle image ne convertit
pas, parce qu'elle ressemble à une publicité.

### Étape 4 : la vidéo

Tu passes ton image dans un modèle **image-to-video**. J'utilise **MiniMax H3**
(la famille Hailuo), qui a l'avantage de tenir une physique et des mouvements
crédibles plutôt que de déformer les visages.

Quelques principes :

- **Demande un mouvement simple.** Une personne qui parle en regardant l'objectif, un
  léger mouvement de main. Les modèles vidéo cassent sur les actions complexes.
- **Reste court.** 5 à 8 secondes par plan. Tu en assembles deux ou trois si besoin.
- **Génère plusieurs fois.** Le même prompt ne donne pas le même résultat. Prends la
  meilleure prise sur trois ou quatre, exactement comme un vrai tournage.

### Étape 5 : le hook, le son, la publication

La vidéo brute ne suffit pas. Il reste :

- **le texte d'accroche** en surimpression dès la première frame, qui porte la
  tension dont on a parlé
- **une voix** ou un son. Une voix off, même synthétique, retient mieux qu'une vidéo
  muette
- **le montage** : coupe tout ce qui n'est pas indispensable, surtout au début
- **la mention « contenu généré par IA »**, qui n'est pas optionnelle (voir plus bas)

Puis tu publies sur **TikTok et Instagram**, les deux plateformes où ce format
fonctionne le mieux.

## Comment j'automatise tout ça

Je fais tourner cette chaîne depuis mon propre agent, **Hermès**, qui appelle les API
image et vidéo et enchaîne les étapes. C'est ce qui me permet de sortir une série de
vidéos sans repasser manuellement d'un outil à l'autre.

Tu n'as pas besoin de ça pour commencer. La même chaîne se fait à la main :

- **GPT Image** via ChatGPT pour les étapes 1 à 3
- **MiniMax / Hailuo** via leur site, ou via une plateforme comme fal.ai ou
  Replicate si tu préfères l'API
- n'importe quel éditeur vidéo pour le montage

Commence à la main. Tu automatiseras quand tu sauras ce qui marche : automatiser une
mécanique qui ne convertit pas, c'est produire du déchet plus vite.

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

**Bâcler la character sheet.** Si ton personnage n'est pas stable, aucune quantité de
vidéos ne rattrapera ça. C'est l'étape qui mérite deux heures.

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
- [MiniMax Hailuo · génération image vers vidéo](https://hailuoai.video/)
