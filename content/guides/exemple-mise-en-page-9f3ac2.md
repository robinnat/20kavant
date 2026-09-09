---
title: Comment fonctionnent mes guides
description: Un exemple de mise en page, et comment en créer un nouveau.
date: 2026-09-09
---

Ce guide sert d'exemple : il montre comment le Markdown est rendu sur le site,
et comment en écrire un nouveau. Tu peux le supprimer une fois que tu as tes
propres guides.

## Créer un guide

Un guide, c'est **un fichier `.md`** déposé dans `content/guides/`. Le nom du
fichier devient l'adresse :

```
content/guides/mon-guide-a4f7c2.md   →   /guides/mon-guide-a4f7c2
```

Termine le nom par quelques caractères au hasard (`a4f7c2` ici) : le lien
devient impossible à deviner, et c'est ce qui garde le guide privé.

En haut du fichier, un petit en-tête entre deux lignes de tirets :

```
---
title: Le titre du guide
description: Une phrase de résumé
date: 2026-09-09
---
```

Puis tu écris le contenu en Markdown. Une fois le fichier poussé, le guide est
en ligne.

## Ce que tu peux écrire

Du texte avec du **gras**, de l'*italique*, du `code en ligne`, et bien sûr des
[liens](https://20kavant.fr).

### Des listes

- Une puce
- Une autre
- Et une troisième

1. Une étape
2. Puis la suivante
3. Et c'est fini

### Des blocs de code

```js
const guides = listerSlugs();
console.log(`${guides.length} guides en ligne`);
```

### Une citation

> Ce qui est mesuré s'améliore. Ce qui est public s'améliore plus vite.

### Un tableau

| Outil | À quoi ça sert | Prix |
| --- | --- | --- |
| Next.js | Le site | Gratuit |
| Vercel | L'hébergement | Gratuit au début |
| TrustMRR | Vérifier les revenus | Gratuit |

---

## Ce qu'il faut savoir sur la confidentialité

Le guide n'est **listé nulle part** sur le site, il est marqué `noindex` pour
les moteurs de recherche, et `robots.txt` leur demande de ne pas parcourir
`/guides/`.

En revanche, ce n'est **pas un mot de passe** : qui a le lien peut ouvrir la
page, et peut la transmettre. C'est le bon niveau de protection pour un guide
qu'on envoie à ses abonnés ; ça ne l'est pas pour quelque chose de sensible.
Si un jour tu veux un vrai accès restreint, dis-le-moi, on ajoutera un code.
