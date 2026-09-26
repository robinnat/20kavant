---
title: Connecter une API à Claude ou Codex, sans exposer ta clé
description: Deux méthodes pour utiliser Higgsfield depuis Claude ou Codex, le connecteur MCP et l'API, en gardant ta clé en sécurité.
date: 2026-09-26
---

Brancher Higgsfield sur Claude ou Codex, c'est ce qui leur permet de générer
des images et des vidéos à ta place. Il y a deux façons de le faire : le
**MCP** et l'**API**. La seconde demande une **clé qui peut dépenser ton
argent** : ce guide montre comment l'utiliser sans qu'elle fuite.

**Au sommaire**

1. [MCP ou API : laquelle choisir](#mcp-ou-api-laquelle-choisir)
2. [La règle d'or](#la-regle-dor)
3. [Méthode 1 : le MCP, sans clé](#methode-1-le-mcp-sans-cle)
4. [Méthode 2 : l'API, avec une clé](#methode-2-lapi-avec-une-cle)
5. [Si ta clé a fuité](#si-ta-cle-a-fuite)
6. [La checklist](#la-checklist)

## MCP ou API : laquelle choisir

Claude et Codex ne parlent pas directement à Higgsfield. Il leur faut un
intermédiaire :

- le **MCP**, un connecteur officiel qui se branche sur ton compte Higgsfield ;
- ou un **script** qui appelle l'**API** avec une clé.

![Toi, puis Claude ou Codex, puis l'intermédiaire (connecteur ou script), puis l'API. Seul l'intermédiaire lit la clé. La clé ne passe jamais par la conversation.](/guides/api-cle-circuit.svg)

| | Méthode 1 : MCP | Méthode 2 : API |
| --- | --- | --- |
| Connexion | Ton compte, par le navigateur | Une clé (identifiant + secret) |
| Paiement | Tes crédits Higgsfield habituels | Un solde séparé, propre à l'API |
| Clé à protéger | Aucune | Oui |
| Pour | Générer pour toi, en quelques clics | Automatiser, intégrer dans ton produit |

**Si tu veux juste générer depuis Claude ou Codex, prends le MCP** : pas de
clé à gérer, donc pas de clé à perdre.

## La règle d'or

**Ne colle jamais ta clé dans la conversation.** Même « juste pour tester ».

Une clé écrite dans le chat :

- reste dans l'**historique** de la conversation ;
- est envoyée au fournisseur du modèle avec le reste du message ;
- peut être recopiée par l'IA dans un **fichier**, voire un commit ;
- se voit à l'**écran**, donc dans ta vidéo, ta capture, ton live.

Et **quiconque a ta clé peut dépenser ton solde.**

## Méthode 1 : le MCP, sans clé

Le connecteur officiel de Higgsfield est à cette adresse :

```text
https://mcp.higgsfield.ai/mcp
```

### Dans Claude Desktop

1. Ouvre **Customize > Connectors**.
2. Clique sur **+**, puis **Add custom connector**.
3. Nom : `Higgsfield`. Adresse : celle ci-dessus.
4. Clique sur **Connect** : une page Higgsfield s'ouvre, connecte-toi et
   autorise l'accès.

Pour vérifier : dans une conversation, clique sur le **+** de la zone de
saisie, puis **Connectors**. Higgsfield doit apparaître.

### Dans Codex

```bash
codex mcp add higgsfield --url https://mcp.higgsfield.ai/mcp
```

Codex ouvre ton navigateur pour te connecter à ton compte. Si ce n'est pas le
cas, ou pour te reconnecter plus tard : `codex mcp login higgsfield`.

Dans l'app Codex, c'est aussi possible dans **Settings > MCP servers > Add
server**, en choisissant **Streamable HTTP**.

### Un seul réflexe de sécurité

Claude et Codex te demandent ton accord avant d'utiliser un outil. Beaucoup de
tutos conseillent de tout autoriser d'office (**Allow always**). Pour la
génération, qui consomme tes crédits, **garde la validation** : une
instruction cachée dans une page ou un fichier lu par l'IA pourrait sinon
lancer des générations sans toi.

## Méthode 2 : l'API, avec une clé

L'IA écrit un petit script qui appelle l'API, et le lance sur ton ordinateur.
Il faut donc un outil qui lance des commandes :

- **Codex** ;
- **Claude Code** : dans Claude Desktop, l'onglet **Code**, en haut au centre,
  en session **Local**.

La clé sera rangée dans un fichier `.env`, la méthode la plus simple. Cinq
étapes.

### Étape 1 : créer une clé dédiée et plafonnée

Les clés se créent sur `open.higgsfield.ai`. Une clé est faite de deux
parties : un **identifiant** et un **secret**.

- **Une clé pour cet usage**, que tu nommes clairement (« Codex, MacBook ») :
  si elle fuite, tu la supprimes sans casser le reste.
- **Copie-la tout de suite** dans ton gestionnaire de mots de passe : le
  secret n'est affiché qu'une seule fois.
- **Plafonne le solde** : l'API a son propre solde. N'y mets que ce que tu
  acceptes de perdre. Même volée, une clé ne peut pas dépenser plus que ça.

### Étape 2 : créer le fichier .env

**D'abord, protège-le de git.** Dans le dossier du projet :

```bash
echo ".env" >> .gitignore
```

Dans cet ordre : un `.env` créé avant d'être ignoré peut partir dans un
commit.

**Ensuite, crée le fichier** `.env` avec ton éditeur, avec une seule ligne :
ta clé, au format `identifiant:secret`.

```text
HF_KEY=identifiant:secret
```

Pas pendant un tournage : la clé est visible pendant que tu la colles.

**Enfin, réserve-le à ton compte :**

```bash
chmod 600 .env
```

### Étape 3 : empêcher l'IA d'ouvrir le .env

L'IA n'a pas besoin de lire ce fichier : c'est le script qui le charge.

**Avec Claude Code**, interdis-lui de l'ouvrir. Ajoute ceci dans
`~/.claude/settings.json` (ou complète la section `permissions` si elle
existe déjà) :

```json
{
  "permissions": {
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)"
    ]
  }
}
```

Claude Code ne pourra plus l'ouvrir, ni avec son outil de lecture, ni avec
`cat`, `head` ou `tail`. Une recherche du type `grep -r` passe encore : garde
l'oeil sur les commandes (étape 4).

**Avec Codex**, pas de réglage équivalent aussi simple : il peut lire les
fichiers du projet. C'est le plafond de l'étape 1 qui te protège.

### Étape 4 : demander l'appel

Tu donnes la tâche et l'**endroit** où est la clé, jamais sa valeur :

```text
Écris un script generer.py qui utilise le SDK Python
officiel higgsfield-client pour générer une image.
Charge la clé avec python-dotenv : elle est dans .env,
sous le nom HF_KEY. N'ouvre jamais le fichier .env
toi-même et n'affiche jamais la clé.
```

Le script charge le `.env`, et le SDK de Higgsfield lit la clé tout seul : le
script lui-même ne contient **aucune clé**.

**Avec Codex**, attends-toi à une demande d'autorisation : il coupe par défaut
l'accès à Internet des commandes qu'il lance, et te proposera de lancer le
script hors de son bac à sable. Vérifie que c'est bien ton script, puis
accepte.

**Avec Claude Code**, il te demande ton accord avant de lancer une commande.

Dans les deux cas, **lis la commande** avant d'accepter. Refuse celle qui
ouvre le `.env` (`cat .env`, `grep`), affiche l'environnement (`env`,
`printenv`, `echo $HF_KEY`) ou envoie quelque chose ailleurs qu'à Higgsfield.
Et n'active jamais le mode qui saute toutes les autorisations
(`--yolo` dans Codex, `--dangerously-skip-permissions` dans Claude Code).

### Étape 5 : vérifier

**Avant de générer**, vérifie que la clé est bien là, **sans l'afficher** :
cette commande compte les lignes `HF_KEY` du fichier et doit répondre `1`.

```bash
grep -c '^HF_KEY=' .env
```

**Après la première génération**, petite et bon marché :

- ouvre `generer.py` et vérifie qu'il ne contient **aucune clé** ;
- compare ton solde sur `open.higgsfield.ai` avant et après ;
- avant chaque commit, un coup d'oeil à `git status` : le `.env` ne doit
  jamais y apparaître.

### Quand tu filmes

Crée une **clé spéciale tournage**, avec un tout petit solde, et supprime-la
juste après. Même si elle apparaît à l'écran une demi-seconde, elle ne vaut
plus rien quand la vidéo sort. Et ne filme jamais le `.env` ouvert.

## Si ta clé a fuité

Dans cet ordre, et vite :

1. **Révoque la clé** sur `open.higgsfield.ai`. Avant tout le reste.
2. **Crée une nouvelle clé** et remplace l'ancienne dans le `.env`.
3. **Vérifie ton solde** et l'historique des appels.
4. Si la clé était dans un commit : supprimer le fichier **ne suffit pas**,
   l'historique git la garde. La révocation est la seule vraie correction.

## La checklist

```text
MCP
[ ] Validation manuelle gardée pour la génération

API
[ ] Clé dédiée, nommée, solde plafonné
[ ] .env ajouté au .gitignore avant d'être créé
[ ] .env en chmod 600, interdit à Claude Code
[ ] Clé jamais collée dans le chat, jamais à l'écran
[ ] Chaque commande lue avant de l'accepter
[ ] Script vérifié : aucune clé écrite dedans
[ ] Clé de tournage supprimée après la vidéo
[ ] Je sais où la révoquer en une minute
```

## Sources

- [Higgsfield · générer depuis Claude avec le connecteur MCP](https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP)
- [Higgsfield · SDK Python officiel](https://github.com/higgsfield-ai/higgsfield-client)
- [Higgsfield · documentation de l'API](https://docs.higgsfield.ai/docs)
- [Anthropic · Connecteurs personnalisés et avertissements de sécurité](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)
- [Anthropic · Claude Code dans l'app de bureau](https://code.claude.com/docs/en/desktop)
- [Anthropic · Claude Code, interdire la lecture du .env](https://code.claude.com/docs/en/settings)
- [Anthropic · Claude Code, portée des règles de permission](https://code.claude.com/docs/en/permissions)
- [OpenAI · Codex et MCP](https://developers.openai.com/codex/mcp)
