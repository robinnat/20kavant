---
title: Se glisser dans une vidéo avec Genjutsu, sans abonnement
description: Comment j'ai remplacé les deux personnes d'une vidéo par des personnages de mon choix, avec les mêmes gestes et la même caméra, pour 8,17 $ via l'API Higgsfield.
date: 2026-09-26
---

J'ai pris une performance filmée en studio, et j'ai remplacé les deux personnes
à l'écran : moi à gauche, un autre personnage à droite. Mêmes gestes, même
rythme, même caméra.

Outil utilisé : **Genjutsu**, de Higgsfield. Coût : **8,17 $**, sans
abonnement, en passant par le playground de l'API.

**Au sommaire**

1. [Le résultat](#le-resultat)
2. [Pourquoi l'API plutôt que l'abonnement](#pourquoi-lapi-plutot-que-labonnement)
3. [Ce qu'il te faut](#ce-quil-te-faut)
4. [Étape 1 : créer les fiches personnage](#etape-1-creer-les-fiches-personnage)
5. [Étape 2 : lancer Genjutsu](#etape-2-lancer-genjutsu)
6. [Étape 3 : vérifier et télécharger](#etape-3-verifier-et-telecharger)
7. [À savoir avant de publier](#a-savoir-avant-de-publier)

## Le résultat

<figure class="video-guide">
<video controls playsinline preload="metadata" poster="/guides/genjutsu-resultat.jpg"><source src="/guides/genjutsu-resultat.mp4" type="video/mp4"></video>
<figcaption>Le résultat, généré avec Genjutsu</figcaption>
</figure>

<p class="telecharger-bloc"><a class="telecharger" href="/guides/genjutsu-resultat.mp4" download="genjutsu-resultat.mp4">Télécharger la vidéo (MP4, 4,4 Mo)</a></p>

Pour comparer, la vidéo d'origine :

<figure class="video-guide">
<video controls playsinline preload="metadata" poster="/guides/genjutsu-source.jpg"><source src="/guides/genjutsu-source.mp4" type="video/mp4"></video>
<figcaption>La vidéo d'origine, une performance COLORS</figcaption>
</figure>

Tout est repris de l'original : les gestes, le moment où chacun bouge, le
cadrage, la lumière. Seules les personnes ont changé.

## Pourquoi l'API plutôt que l'abonnement

Genjutsu est disponible avec l'abonnement Higgsfield, mais aussi dans le
**playground de l'API**, sur `open.higgsfield.ai`. Là, tu paies **uniquement
ce que tu génères**, sans engagement.

| | API (ce que j'ai fait) | Abonnement Starter |
| --- | --- | --- |
| Paiement | À l'usage, rien d'autre | 228 € d'un coup, pour un an |
| Cette vidéo | **8,17 $** | 161 crédits, soit **11,33 €** au prorata |
| Si tu ne génères rien | Tu ne paies rien | Les 228 € sont déjà payés |

Le calcul du prorata :

- l'abonnement le moins cher coûte **19 € par mois**, facturé à l'année, soit
  **228 €** ;
- il donne **270 crédits par mois** : un crédit revient à 19 € ÷ 270, soit
  environ **0,0704 €** ;
- cette vidéo a coûté **161 crédits** : 161 × 0,0704 € ≈ **11,33 €**. C'est
  près de 60 % des crédits du mois, pour une seule vidéo.

Et ces 11,33 € supposent que tu utilises tous tes crédits chaque mois.
D'après les grilles publiées, les crédits non utilisés ne se reportent pas
d'un mois sur l'autre : chaque crédit perdu fait monter le prix réel.

Même sans convertir les dollars en euros, 8,17 $ reste nettement en dessous
de 11,33 €, le dollar valant aujourd'hui moins que l'euro. Pour un usage
ponctuel, l'API gagne sur les deux tableaux : moins cher, et sans engagement.

> **Offre en cours.** Les 8,17 $ de cette génération m'ont été rendus en
> **cashback** par Higgsfield. Ce cashback est à utiliser **avant le
> 30 septembre 2026 à 23 h 59** : après cette date, l'offre et le cashback
> non utilisé disparaissent. Vérifie les conditions sur `open.higgsfield.ai`.

## Ce qu'il te faut

- **Une vidéo source** de 4 à 30 secondes, où les personnes à remplacer sont
  bien visibles. La mienne dure 23 secondes.
- **Une fiche personnage par personne** à remplacer : le même personnage vu de
  face, de profil et de dos.
- **Un compte sur le playground de l'API** Higgsfield, avec un peu de solde.

## Étape 1 : créer les fiches personnage

Une fiche personnage, c'est le même personnage vu sous trois angles, sur un
fond neutre. Elle permet à Genjutsu de savoir à quoi ressemble ton personnage
**de tous les côtés**, y compris quand il se retourne.

<figure class="fiche-guide"><a href="/guides/genjutsu-fiche-1.webp" target="_blank" rel="noopener"><img src="/guides/genjutsu-fiche-1.webp" alt="Fiche personnage 1 : un homme en chemise et pantalon blancs, vu de face, de profil et de dos" loading="lazy"></a><figcaption>Image 1 : ma fiche, pour la personne de gauche</figcaption></figure>

<figure class="fiche-guide"><a href="/guides/genjutsu-fiche-2.webp" target="_blank" rel="noopener"><img src="/guides/genjutsu-fiche-2.webp" alt="Fiche personnage 2 : un homme en col roulé noir et jean, vu de face, de profil et de dos" loading="lazy"></a><figcaption>Image 2 : le second personnage, pour la personne de droite</figcaption></figure>

Pour créer la tienne, donne une photo nette de toi, en pied, à un modèle
d'image du playground, avec ce prompt :

```text
Character reference sheet of the person in the
reference photo. Three full-body panels side by side,
separated by thin white lines: FRONT view, RIGHT
PROFILE view, BACK view. Same person, same outfit and
same proportions in all three panels. Standing neutral
pose, arms relaxed, feet visible. Plain light grey
studio background, soft even lighting, photorealistic,
sharp details. Aspect ratio 3:2. No text, no labels.
```

Trois détails qui comptent :

- **Le corps entier, pieds compris.** Si la vidéo montre les jambes, la fiche
  doit les montrer aussi.
- **La tenue que tu veux dans la vidéo.** Genjutsu reprend celle de la fiche.
- **Pas de texte** sur la fiche : sinon il peut réapparaître dans la vidéo.

## Étape 2 : lancer Genjutsu

Dans le playground de l'API, ouvre **Genjutsu**, puis :

1. **Ajoute la vidéo source.**
2. **Ajoute les fiches, dans l'ordre** : l'Image 1 pour la personne de gauche,
   l'Image 2 pour celle de droite. L'ordre compte, le prompt s'y réfère.
3. **Choisis le mode.** Genjutsu en a deux : **Motion Transfer**, qui garde les
   mouvements et la caméra en reconstruisant les personnages, et **Object
   Swap**, qui remplace un élément en gardant tout le reste. Pour remplacer
   des personnes en gardant leurs gestes, c'est Motion Transfer.
4. **Colle le prompt**, puis lance la génération.

Le prompt que j'ai utilisé :

```text
The character from @Image 1 @Image 2 performs the exact
same movements as the persons in @Video 1, matching
every motion, timing and rhythm smooth grounded
movement, consistent lighting, camera and framing
follow @Video 1, no identity drift, no extra people,
the left person should be replaced with @Image 1 and
right person with @Image 2
```

Ce que fait chaque morceau :

| Morceau du prompt | Rôle |
| --- | --- |
| `performs the exact same movements as the persons in @Video 1` | Reprendre les gestes de la vidéo source |
| `matching every motion, timing and rhythm` | Garder le tempo : chaque geste au même moment |
| `smooth grounded movement` | Des mouvements naturels, bien ancrés au sol |
| `consistent lighting, camera and framing follow @Video 1` | Même lumière, même caméra, même cadrage |
| `no identity drift` | Les visages ne se transforment pas en cours de route |
| `no extra people` | Aucune personne ajoutée |
| `the left person should be replaced with @Image 1 and right person with @Image 2` | Qui remplace qui |

Pour une vidéo avec **une seule personne**, garde la même structure avec une
seule image, et retire la dernière phrase.

## Étape 3 : vérifier et télécharger

Avant de publier, regarde la vidéo en entier, en particulier :

- **les visages**, image par image dans les mouvements rapides : ils doivent
  rester les mêmes du début à la fin ;
- **les mains** et les objets tenus ;
- **les moments où quelqu'un se retourne** : c'est là que la vue de dos de la
  fiche sert.

Si un passage déraille, relance la génération plutôt que de retoucher : le
même prompt ne donne pas deux fois le même résultat.

## À savoir avant de publier

**Signale que c'est de l'IA.** TikTok et Instagram demandent d'étiqueter les
contenus générés qui montrent des personnes réalistes, et en Europe, l'AI Act
impose depuis le 2 août 2026 d'indiquer clairement qu'un contenu réaliste est
artificiel.

**Le visage des autres.** Ton propre visage, aucun souci. Celui de quelqu'un
d'autre, demande-lui son accord. Pour une personnalité, y compris décédée, le
droit à l'image reste protégé dans de nombreux pays : évite tout ce qui
laisserait croire qu'elle a vraiment participé ou qu'elle soutient quelque
chose.

**La vidéo et la musique d'origine** appartiennent à leurs auteurs, ici
COLORS. Crédite la source quand tu publies. Certaines plateformes peuvent
aussi bloquer ou démonétiser une vidéo à cause de la musique.

## Sources

- [Higgsfield · présentation de Genjutsu](https://higgsfield.ai/genjutsu)
- [Higgsfield · comment fonctionne Genjutsu](https://higgsfield.ai/blog/higgsfield-genjutsu)
- [Grille des abonnements Higgsfield en 2026](https://creatify.ai/blog/higgsfield-pricing-(2026)-plans-and-what-you-ll-actually-pay)
- [AI Act européen, article 50 · obligations de transparence](https://artificialintelligenceact.eu/article/50/)
